from __init__ import *
from gpu_utils import GPUs
from data_loader import VGG_Data_Load
from model import VGGnet
# from parser import args
from metrics import metrics_batch, loss_batch, loss_epoch, get_lr, save_loss
import json

class VGGTrain:
    def __init__(self):
        self.epoch = 0 
        self.is_finish = False
        self.used_time = 0.0
        self.args = GPUs.get_parser("VGGNet")
        self.gpus = GPUs(gpu_id=int(self.args['cuda']), model="VGGNet", resumption=int(self.args['resumption']), ssh_server=int(self.args['ssh_server']))
        
    
    def vgg_train(self):
        lr = float(self.args['lr'])
        epoch_no = int(self.args['epoch'])
        model_name = self.args['vgg_model']
        device = torch.device('cuda:' + self.args['cuda'])
        step_size = int(self.args['step_size'])
        gamma = float(self.args['gamma'])
        batch_size = int(self.args['batch'])
        resumption = int(self.args['resumption'])
        check_PATH = os.getcwd() + "/file/model.pt"
        save_path = os.getcwd() + "/outputs/"
        os.makedirs(os.getcwd() + "/file", exist_ok=True)
        os.makedirs(save_path, exist_ok=True)
        ## Data Load
        train_dl, val_dl = VGG_Data_Load(batch_size)
        
        model = VGGnet(model_name, in_channels=3, num_classes=10, init_weights=True).to(device)
        
        ## 학습 여부 DB Update
        self.gpus.learning_update(True)
        self.gpus.upload_migration(False)
        
        print(f"Learning Rate : {lr}, Epoch : {epoch_no}, Model Name : {model_name}, Batch Size : {batch_size}, CUDA : {self.args['cuda']}, Step_size : {step_size}, Gamma : {gamma}")
        if resumption == 0:
            opt = optim.Adam(model.parameters(), lr=lr)
            loss_func = nn.CrossEntropyLoss(reduction="sum")
            lr_scheduler = StepLR(opt, step_size=step_size, gamma=gamma)
            print("---train---")
            for epoch in tqdm(range(epoch_no),
                            desc="VGGNet",
                            ncols=70,
                            ascii=' *', 
                            mininterval=0.01,
                            leave=True):
                # check 1 epoch start time
                self.gpus.epoch_update(epoch+1, epoch_no)
                start_time = time.time()

                # get current learning rate
                current_lr=get_lr(opt)
                print('\nEpoch {}/{}, current lr={}'.format(epoch+1, epoch_no, current_lr))

                # train model on training dataset
                model.train()
                train_loss, train_metric=loss_epoch(model,loss_func,train_dl,device,False,opt)

                # evaluate model on validation dataset
                model.eval()
                with torch.no_grad():
                    val_loss, val_metric=loss_epoch(model,loss_func,val_dl,device)

                # learning rate schedule
                lr_scheduler.step()
                
                print("train loss: %.6f, dev loss: %.6f, accuracy: %.2f, time: %.4f s" %(train_loss,val_loss,100*val_metric, time.time()-start_time))
                print("-"*10)
                if not self.gpus.can_learning():
                    """
                    Carbon 임계치 초과라서 Migration
                    """
                    torch.save({
                        'epoch' : epoch+1,
                        'model_state_dict' : model.state_dict(),
                        'optimizer_state_dict' : opt.state_dict(),
                        'current_lr' : current_lr,
                    }, check_PATH)
                    self.gpus.upload_checkpoint()
                    self.gpus.learning_update(False)
                    self.gpus.upload_migration(True) # True : Migration
                    return
                save_loss(save_path, epoch+1, train_loss, train_metric,val_loss, val_metric)
                print("Check Point Save Success")
            self.gpus.learning_update(False)
            self.gpus.upload_migration(False) # False : Stop Migration


        else:
            checkPoint = torch.load(check_PATH)
            print("\n--- Migration Success ---")
            model.load_state_dict(checkPoint['model_state_dict'])
            opt = optim.Adam(model.parameters(), lr=lr)
            # opt = optim.Adam(model.parameters(), lr=checkPoint['current_lr'])
            opt.load_state_dict(checkPoint['optimizer_state_dict'])
            loss_func = nn.CrossEntropyLoss(reduction="sum")
            lr_scheduler = StepLR(opt, step_size=step_size, gamma=gamma)
            for epoch in tqdm(range(checkPoint['epoch'],epoch_no),
                            desc="VGGNet",
                            ncols=70,
                            ascii=' *', 
                            mininterval=0.01,
                            leave=True):
                self.gpus.epoch_update(epoch+1, epoch_no)
                start_time = time.time()

                # get current learning rate
                current_lr=get_lr(opt)
                print('\nEpoch {}/{}, current lr={}'.format(epoch+1, epoch_no, current_lr))

                # train model on training dataset
                model.train()
                train_loss, train_metric=loss_epoch(model,loss_func,train_dl,device,False,opt)

                model.eval()
                with torch.no_grad():
                    val_loss, val_metric=loss_epoch(model,loss_func,val_dl,device)

                # learning rate schedule
                lr_scheduler.step()
                
                print("train loss: %.6f, dev loss: %.6f, accuracy: %.2f, time: %.4f s" %(train_loss,val_loss,100*val_metric, time.time()-start_time))
                print("-"*10)
                if not self.gpus.can_learning():
                    """
                    Carbon 임계치 초과라서 Migration
                    """
                    torch.save({
                        'epoch' : epoch+1,
                        'model_state_dict' : model.state_dict(),
                        'optimizer_state_dict' : opt.state_dict(),
                        'current_lr' : current_lr,
                    }, check_PATH)
                    self.gpus.upload_checkpoint()
                    self.gpus.learning_update(False)
                    self.gpus.upload_migration(True) # True : Migration
                    return
                save_loss(save_path, epoch+1, train_loss, train_metric,val_loss, val_metric)
                print("Check Point Save Success")
            self.gpus.learning_update(False)
            self.gpus.upload_migration(False) # False : Stop Migration

    
    
if __name__ == "__main__":
    vgg = VGGTrain()
    vgg.vgg_train()