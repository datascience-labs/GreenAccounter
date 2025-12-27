from __init__ import *

def VGG_Data_Load(batch_size):    
    path2data = os.getcwd() + "/data/"
    # # if not exists the path, make the directory
    if not os.path.exists(path2data):
        os.mkdir(path2data)
    print("Data Load...", end=" ")
    # # load dataset
    train_ds = datasets.STL10(path2data, split='train', download=True, transform=transforms.ToTensor())
    val_ds = datasets.STL10(path2data, split='test', download=True, transform=transforms.ToTensor())
    print("fin")
    train_dl, val_dl = normalize(train_ds, val_ds, batch_size)
    return train_dl, val_dl

def normalize(train_ds, val_ds, batch_size):
    # To normalize the dataset, calculate the mean and std
    train_meanRGB = [np.mean(x.numpy(), axis=(1,2)) for x, _ in train_ds]
    train_stdRGB = [np.std(x.numpy(), axis=(1,2)) for x, _ in train_ds]

    train_meanR = np.mean([m[0] for m in train_meanRGB])
    train_meanG = np.mean([m[1] for m in train_meanRGB])
    train_meanB = np.mean([m[2] for m in train_meanRGB])
    train_stdR = np.mean([s[0] for s in train_stdRGB])
    train_stdG = np.mean([s[1] for s in train_stdRGB])
    train_stdB = np.mean([s[2] for s in train_stdRGB])


    val_meanRGB = [np.mean(x.numpy(), axis=(1,2)) for x, _ in val_ds]
    val_stdRGB = [np.std(x.numpy(), axis=(1,2)) for x, _ in val_ds]

    val_meanR = np.mean([m[0] for m in val_meanRGB])
    val_meanG = np.mean([m[1] for m in val_meanRGB])
    val_meanB = np.mean([m[2] for m in val_meanRGB])

    val_stdR = np.mean([s[0] for s in val_stdRGB])
    val_stdG = np.mean([s[1] for s in val_stdRGB])
    val_stdB = np.mean([s[2] for s in val_stdRGB])
    
    train_transformer = transforms.Compose([
                    transforms.Resize(256),
                    transforms.FiveCrop(224),
                    transforms.Lambda(lambda crops: torch.stack([transforms.ToTensor()(crop) for crop in crops])),
                    transforms.Normalize([train_meanR, train_meanG, train_meanB], [train_stdR, train_stdG, train_stdB]),])
    # print(train_meanR, train_meanG, train_meanB)
    # print(val_meanR, val_meanG, val_meanB)
    print("Normalize.. Fin")
    train_ds.transform = train_transformer
    val_ds.transform = train_transformer
    # create dataloader
    train_dl = DataLoader(train_ds, batch_size=batch_size, shuffle=True)
    val_dl = DataLoader(val_ds, batch_size=batch_size, shuffle=True)
    return train_dl, val_dl
    
if __name__ == "__main__":
    VGG_Data_Load()