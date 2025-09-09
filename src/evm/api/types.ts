export enum RouteStatus {
  Success = 'Success',
  NoWay = 'NoWay',
  Partial = 'Partial',
}

export enum TransferValue {
  Input = 'input',
  Output = 'output',
}

export enum RouterLiquiditySource {
  Sender = 'sender', // msg.sender
  Self = 'self',
}
