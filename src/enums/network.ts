export enum NetworkHashPolicy {
  LAYER_2 = 'layer2',
  LAYER_2_3 = 'layer2+3',
  LAYER_3 = 'layer3',
}

export enum NetworkMode {
  BALANCE_RR = 'balance-rr',
  ACTIVE_BACKUP = 'active-backup',
  BALANCE_XOR = 'balance-xor',
  BALANCE_TLB = 'balance-tlb',
  BALANCE_ALB = 'balance-alb',
  BALANCE_SLB = 'balance-slb',
  BROADCAST = 'broadcast',
  LCAP_802_3AD = '802.3ad',
  LCAP_BALANCE_SLB = 'lcap-balance-slb',
  LCAP_BALANCE_TCP = 'lcap-balance-tcp',
}