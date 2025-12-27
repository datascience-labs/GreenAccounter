from __init__ import *

def metrics_batch(output, target):
    # get output class
    pred = output.argmax(dim=1, keepdim=True)

    # compare output class with target class
    corrects=pred.eq(target.view_as(pred)).sum().item()
    return corrects

def loss_batch(loss_func, output, target, opt=None):

    # get loss
    loss = loss_func(output, target)

    # get performance metric
    metric_b = metrics_batch(output,target)

    if opt is not None:
        opt.zero_grad()
        loss.backward()
        opt.step()

    return loss.item(), metric_b

def loss_epoch(model,loss_func,dataset_dl,device,sanity_check=False,opt=None):
    running_loss=0.0
    running_metric=0.0
    len_data=len(dataset_dl.dataset)

    for xb, yb in dataset_dl:
        # move batch to device
        xb=xb.to(device)
        yb=yb.to(device)

        # Five crop : bs, crops, chnnel, h, w
        # making dimmension (bs, c, h, w)
        bs, ncrops, c, h, w = xb.size()
        output_=model(xb.view(-1, c, h, w))
        output = output_.view(bs, ncrops, -1).mean(1)

        # get loss per batch
        loss_b,metric_b=loss_batch(loss_func, output, yb, opt)

        # update running loss
        running_loss+=loss_b

        # update running metric
        if metric_b is not None:
            running_metric+=metric_b

        # break the loop in case of sanity check
        if sanity_check is True:
            break

    # average loss value
    loss=running_loss/float(len_data)

    # average metric value
    metric=running_metric/float(len_data)

    return loss, metric


def get_lr(opt):
    for param_group in opt.param_groups:
        return param_group['lr']
    
def save_loss(save_path, epoch, train_loss, train_metric, val_loss, val_metric):
    
    with open(f"{save_path}train_loss.txt", 'a') as f:
        f.write(f"Train Loss {epoch} : {str(train_loss)}\n")
    with open(f"{save_path}train_metric.txt", 'a') as f:
        f.write(f"Train Metric  {epoch} : {str(train_metric)}\n")
    with open(f"{save_path}val_loss.txt", 'a') as f:
        f.write(f"Val Loss {epoch} : {str(val_loss)}\n")
    with open(f"{save_path}val_metric.txt", 'a') as f:
        f.write(f"Val Metric {epoch} : {str(val_metric)}\n")
