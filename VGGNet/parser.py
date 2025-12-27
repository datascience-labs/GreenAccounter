import argparse

def parse_args():
    parser = argparse.ArgumentParser(description='Model Params')
    parser.add_argument('--epoch', default=100, type=int, help='number of epochs')
    parser.add_argument('--lr', default=1e-3, type=float, help='learning rate')
    parser.add_argument('--vgg_model', default='VGG16', type=str, help='select vgg_net model')
    parser.add_argument('--cuda', default='0', type=str, help='the gpu to use')
    parser.add_argument('--step_size', default=30, type=int, help='Optimizer step size')
    parser.add_argument('--gamma', default=0.1, type=float, help='Optimizer gamma')
    return parser.parse_args()
args = parse_args()
