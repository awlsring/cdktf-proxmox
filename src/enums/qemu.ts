export enum DiskInterface {
  SCSI = 'scsi',
  SATA = 'sata',
  VIRTIO = 'virtio',
}

export enum NetworkInterfaceModel {
  VIRTIO = 'virtio',
  E1000 = 'e1000',
  RTL8139 = 'rtl8139',
  VMXNET3 = 'vmxnet3',
}

export enum AgentType {
  VIRTIO = 'virtio',
  ISA = 'isa',
}

export enum Bios {
  SEABIOS = 'seabios',
  OVMF = 'ovmf',
}

export enum Architecture {
  X86_64 = 'x86_64',
  AARCH64 = 'aarch64',
}

export enum EmulatedType {
  _486 = '486',
  BROADWELL = 'Broadwell',
  BROADWELL_IBRS = 'Broadwell-IBRS',
  BROADWELL_NO_TSX = 'Broadwell-noTSX',
  BROADWELL_NO_TSX_IBRS = 'Broadwell-noTSX-IBRS',
  CASCADELAKE_SERVER = 'Cascadelake-Server',
  CONROE = 'Conroe',
  EPYC = 'EPYC',
  EPYC_IBPB = 'EPYC-IBPB',
  EPYC_ROME = 'EPYC-Rome',
  EPYC_MILAN = 'EPYC-Milan',
  HASWELL = 'Haswell',
  HASWELL_IBRS = 'Haswell-IBRS',
  HASWELL_NO_TSX = 'Haswell-noTSX',
  HASWELL_NO_TSX_IBRS = 'Haswell-noTSX-IBRS',
  HOST = 'host',
  IVY_BRIDGE = 'IvyBridge',
  IVY_BRIDGE_IBRS = 'IvyBridge-IBRS',
  KNIGHTS_MILL = 'KnightsMill',
  NEHALEM = 'Nehalem',
  NEHALEM_IBRS = 'Nehalem-IBRS',
  OPTERON_G1 = 'Opteron_G1',
  OPTERON_G2 = 'Opteron_G2',
  OPTERON_G3 = 'Opteron_G3',
  OPTERON_G4 = 'Opteron_G4',
  OPTERON_G5 = 'Opteron_G5',
  PENRYN = 'Penryn',
  SKYLAKE_CLIENT = 'Skylake-Client',
  SKYLAKE_CLIENT_IBRS = 'Skylake-Client-IBRS',
  SKYLAKE_SERVER = 'Skylake-Server',
  SKYLAKE_SERVER_IBRS = 'Skylake-Server-IBRS',
  SANDY_BRIDGE = 'SandyBridge',
  SANDY_BRIDGE_IBRS = 'SandyBridge-IBRS',
  WESTMERE = 'Westmere',
  WESTMERE_IBRS = 'Westmere-IBRS',
  ATHLON = 'athlon',
  CORE2DUO = 'core2duo',
  COREDUO = 'coreduo',
  KVM32 = 'kvm32',
  KVM64 = 'kvm64',
  MAX = 'max',
  PENTIUM = 'pentium',
  PENTIUM2 = 'pentium2',
  PENTIUM3 = 'pentium3',
  PHENOM = 'phenom',
  QEMU32 = 'qemu32',
  QEMU64 = 'qemu64',
}

export enum MachineType {
  I440FX = 'i440fx',
  Q35 = 'q35',
}

export enum KeyboardLayout {
  DA = 'da',
  DE = 'de',
  DE_CH = 'de-ch',
  EN_GB = 'en-gb',
  EN_US = 'en-us',
  ES = 'es',
  FI = 'fi',
  FR = 'fr',
  FR_BE = 'fr-be',
  FR_CA = 'fr-ca',
  FR_CH = 'fr-ch',
  HU = 'hu',
  IS = 'is',
  IT = 'it',
  JA = 'ja',
  LT = 'lt',
  NL = 'nl',
  NO = 'no',
  PL = 'pl',
  PT = 'pt',
  PT_BR = 'pt-br',
  SL = 'sl',
  SV = 'sv',
  TR = 'tr',
}

export enum OsType {
  L24 = 'l24',
  L26 = 'l26',
  OTHER = 'other',
  WINDOWS_XP = 'wxp',
  WINDOWS_2000 = 'w2k',
  WINDOWS_2003 = 'w2k3',
  WINDOWS_2008 = 'w2k8',
  WINDOWS_VISTA = 'wvista',
  WINDOWS_7 = 'w7',
  WINDOWS_8 = 'w8',
  WINDOWS_10 = 'w10',
  WINDOWS_11 = 'w11',
  SOLARIS = 'solaris',
}