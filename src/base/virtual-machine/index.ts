// https://www.terraform.io/docs/providers/proxmox/r/virtual_machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * The agent configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#agent VirtualMachine#agent}
  */
  readonly agent?: VirtualMachineAgent | cdktf.IResolvable;
  /**
  * The BIOS type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#bios VirtualMachine#bios}
  */
  readonly bios?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#clone VirtualMachine#clone}
  */
  readonly clone?: VirtualMachineClone | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#cloud_init VirtualMachine#cloud_init}
  */
  readonly cloudInit?: VirtualMachineCloudInit | cdktf.IResolvable;
  /**
  * The CPU configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#cpu VirtualMachine#cpu}
  */
  readonly cpu?: VirtualMachineCpu | cdktf.IResolvable;
  /**
  * The virtual machine description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#description VirtualMachine#description}
  */
  readonly description?: string;
  /**
  * The terrafrom generated disks attached to the VM.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#disks VirtualMachine#disks}
  */
  readonly disks?: VirtualMachineDisks[] | cdktf.IResolvable;
  /**
  * The identifier of the virtual machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#id VirtualMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * The operating system configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#iso VirtualMachine#iso}
  */
  readonly iso?: VirtualMachineIso | cdktf.IResolvable;
  /**
  * The keyboard layout.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#keyboard_layout VirtualMachine#keyboard_layout}
  */
  readonly keyboardLayout?: string;
  /**
  * The arguments to pass to KVM.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#kvm_arguments VirtualMachine#kvm_arguments}
  */
  readonly kvmArguments?: string;
  /**
  * The machine type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#machine_type VirtualMachine#machine_type}
  */
  readonly machineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#memory VirtualMachine#memory}
  */
  readonly memory?: VirtualMachineMemory | cdktf.IResolvable;
  /**
  * The name of the virtual machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#name VirtualMachine#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#network_interfaces VirtualMachine#network_interfaces}
  */
  readonly networkInterfaces?: VirtualMachineNetworkInterfaces[] | cdktf.IResolvable;
  /**
  * The node to create the virtual machine on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#node VirtualMachine#node}
  */
  readonly nodeAttribute: string;
  /**
  * PCI devices passed through to the VM.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#pci_devices VirtualMachine#pci_devices}
  */
  readonly pciDevices?: VirtualMachinePciDevices[] | cdktf.IResolvable;
  /**
  * The resource pool the virtual machine is in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#resource_pool VirtualMachine#resource_pool}
  */
  readonly resourcePool?: string;
  /**
  * Whether to start the virtual machine on creation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#start_on_create VirtualMachine#start_on_create}
  */
  readonly startOnCreate?: boolean | cdktf.IResolvable;
  /**
  * Whether to start the virtual machine on node boot.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#start_on_node_boot VirtualMachine#start_on_node_boot}
  */
  readonly startOnNodeBoot?: boolean | cdktf.IResolvable;
  /**
  * The tags of the virtual machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#tags VirtualMachine#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#timeouts VirtualMachine#timeouts}
  */
  readonly timeouts?: VirtualMachineTimeouts | cdktf.IResolvable;
  /**
  * The operating system type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#type VirtualMachine#type}
  */
  readonly type?: string;
}
export interface VirtualMachineAgent {
  /**
  * Whether the agent is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#enabled VirtualMachine#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The guest agent type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#type VirtualMachine#type}
  */
  readonly type?: string;
  /**
  * Whether to use fstrim.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#use_fstrim VirtualMachine#use_fstrim}
  */
  readonly useFstrim?: boolean | cdktf.IResolvable;
}

export function virtualMachineAgentToTerraform(struct?: VirtualMachineAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    type: cdktf.stringToTerraform(struct!.type),
    use_fstrim: cdktf.booleanToTerraform(struct!.useFstrim),
  }
}

export class VirtualMachineAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachineAgent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useFstrim !== undefined) {
      hasAnyValues = true;
      internalValueResult.useFstrim = this._useFstrim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineAgent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._type = undefined;
      this._useFstrim = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._type = value.type;
      this._useFstrim = value.useFstrim;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // use_fstrim - computed: true, optional: true, required: false
  private _useFstrim?: boolean | cdktf.IResolvable; 
  public get useFstrim() {
    return this.getBooleanAttribute('use_fstrim');
  }
  public set useFstrim(value: boolean | cdktf.IResolvable) {
    this._useFstrim = value;
  }
  public resetUseFstrim() {
    this._useFstrim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFstrimInput() {
    return this._useFstrim;
  }
}
export interface VirtualMachineClone {
  /**
  * Whether to clone as a full or linked clone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#full_clone VirtualMachine#full_clone}
  */
  readonly fullClone?: boolean | cdktf.IResolvable;
  /**
  * The identifier of the virtual machine or template to clone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#source VirtualMachine#source}
  */
  readonly source: number;
  /**
  * The storage to place the clone on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#storage VirtualMachine#storage}
  */
  readonly storage?: string;
}

export function virtualMachineCloneToTerraform(struct?: VirtualMachineClone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_clone: cdktf.booleanToTerraform(struct!.fullClone),
    source: cdktf.numberToTerraform(struct!.source),
    storage: cdktf.stringToTerraform(struct!.storage),
  }
}

export class VirtualMachineCloneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachineClone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullClone !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullClone = this._fullClone;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineClone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fullClone = undefined;
      this._source = undefined;
      this._storage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fullClone = value.fullClone;
      this._source = value.source;
      this._storage = value.storage;
    }
  }

  // full_clone - computed: true, optional: true, required: false
  private _fullClone?: boolean | cdktf.IResolvable; 
  public get fullClone() {
    return this.getBooleanAttribute('full_clone');
  }
  public set fullClone(value: boolean | cdktf.IResolvable) {
    this._fullClone = value;
  }
  public resetFullClone() {
    this._fullClone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullCloneInput() {
    return this._fullClone;
  }

  // source - computed: false, optional: false, required: true
  private _source?: number; 
  public get source() {
    return this.getNumberAttribute('source');
  }
  public set source(value: number) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // storage - computed: true, optional: true, required: false
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface VirtualMachineCloudInitDns {
  /**
  * The domain to use for the machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#domain VirtualMachine#domain}
  */
  readonly domain?: string;
  /**
  * The nameserver to use for the machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#nameserver VirtualMachine#nameserver}
  */
  readonly nameserver?: string;
}

export function virtualMachineCloudInitDnsToTerraform(struct?: VirtualMachineCloudInitDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    nameserver: cdktf.stringToTerraform(struct!.nameserver),
  }
}

export class VirtualMachineCloudInitDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachineCloudInitDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._nameserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameserver = this._nameserver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineCloudInitDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._nameserver = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._nameserver = value.nameserver;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // nameserver - computed: false, optional: true, required: false
  private _nameserver?: string; 
  public get nameserver() {
    return this.getStringAttribute('nameserver');
  }
  public set nameserver(value: string) {
    this._nameserver = value;
  }
  public resetNameserver() {
    this._nameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverInput() {
    return this._nameserver;
  }
}
export interface VirtualMachineCloudInitIpV4 {
  /**
  * The IP address to use for the machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#address VirtualMachine#address}
  */
  readonly address?: string;
  /**
  * Whether to use DHCP to get the IP address.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#dhcp VirtualMachine#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * The gateway to use for the machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#gateway VirtualMachine#gateway}
  */
  readonly gateway?: string;
  /**
  * The IP address netmask to use for the machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#netmask VirtualMachine#netmask}
  */
  readonly netmask?: string;
}

export function virtualMachineCloudInitIpV4ToTerraform(struct?: VirtualMachineCloudInitIpV4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    dhcp: cdktf.booleanToTerraform(struct!.dhcp),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    netmask: cdktf.stringToTerraform(struct!.netmask),
  }
}

export class VirtualMachineCloudInitIpV4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachineCloudInitIpV4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineCloudInitIpV4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._dhcp = undefined;
      this._gateway = undefined;
      this._netmask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._dhcp = value.dhcp;
      this._gateway = value.gateway;
      this._netmask = value.netmask;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // dhcp - computed: true, optional: true, required: false
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }
}
export interface VirtualMachineCloudInitIpV6 {
  /**
  * The IP address to use for the machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#address VirtualMachine#address}
  */
  readonly address?: string;
  /**
  * Whether to use DHCP to get the IP address.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#dhcp VirtualMachine#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * The gateway to use for the machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#gateway VirtualMachine#gateway}
  */
  readonly gateway?: string;
  /**
  * The IP address netmask to use for the machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#netmask VirtualMachine#netmask}
  */
  readonly netmask?: string;
}

export function virtualMachineCloudInitIpV6ToTerraform(struct?: VirtualMachineCloudInitIpV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    dhcp: cdktf.booleanToTerraform(struct!.dhcp),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    netmask: cdktf.stringToTerraform(struct!.netmask),
  }
}

export class VirtualMachineCloudInitIpV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachineCloudInitIpV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineCloudInitIpV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._dhcp = undefined;
      this._gateway = undefined;
      this._netmask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._dhcp = value.dhcp;
      this._gateway = value.gateway;
      this._netmask = value.netmask;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // dhcp - computed: true, optional: true, required: false
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }
}
export interface VirtualMachineCloudInitIp {
  /**
  * The position of the network interface in the VM as an int. Used to determine the interface name (net0, net1, etc).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#position VirtualMachine#position}
  */
  readonly position: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#v4 VirtualMachine#v4}
  */
  readonly v4?: VirtualMachineCloudInitIpV4 | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#v6 VirtualMachine#v6}
  */
  readonly v6?: VirtualMachineCloudInitIpV6 | cdktf.IResolvable;
}

export function virtualMachineCloudInitIpToTerraform(struct?: VirtualMachineCloudInitIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    position: cdktf.numberToTerraform(struct!.position),
    v4: virtualMachineCloudInitIpV4ToTerraform(struct!.v4),
    v6: virtualMachineCloudInitIpV6ToTerraform(struct!.v6),
  }
}

export class VirtualMachineCloudInitIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualMachineCloudInitIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._v4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4 = this._v4?.internalValue;
    }
    if (this._v6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6 = this._v6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineCloudInitIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._position = undefined;
      this._v4.internalValue = undefined;
      this._v6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._position = value.position;
      this._v4.internalValue = value.v4;
      this._v6.internalValue = value.v6;
    }
  }

  // position - computed: false, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // v4 - computed: false, optional: true, required: false
  private _v4 = new VirtualMachineCloudInitIpV4OutputReference(this, "v4");
  public get v4() {
    return this._v4;
  }
  public putV4(value: VirtualMachineCloudInitIpV4 | cdktf.IResolvable) {
    this._v4.internalValue = value;
  }
  public resetV4() {
    this._v4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4Input() {
    return this._v4.internalValue;
  }

  // v6 - computed: false, optional: true, required: false
  private _v6 = new VirtualMachineCloudInitIpV6OutputReference(this, "v6");
  public get v6() {
    return this._v6;
  }
  public putV6(value: VirtualMachineCloudInitIpV6 | cdktf.IResolvable) {
    this._v6.internalValue = value;
  }
  public resetV6() {
    this._v6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6Input() {
    return this._v6.internalValue;
  }
}

export class VirtualMachineCloudInitIpList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineCloudInitIp[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VirtualMachineCloudInitIpOutputReference {
    return new VirtualMachineCloudInitIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineCloudInitUser {
  /**
  * The name of the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#name VirtualMachine#name}
  */
  readonly name: string;
  /**
  * The password of the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#password VirtualMachine#password}
  */
  readonly password?: string;
  /**
  * The public ssh keys of the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#public_keys VirtualMachine#public_keys}
  */
  readonly publicKeys?: string[];
}

export function virtualMachineCloudInitUserToTerraform(struct?: VirtualMachineCloudInitUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.publicKeys),
  }
}

export class VirtualMachineCloudInitUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachineCloudInitUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._publicKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeys = this._publicKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineCloudInitUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._password = undefined;
      this._publicKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._password = value.password;
      this._publicKeys = value.publicKeys;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // public_keys - computed: false, optional: true, required: false
  private _publicKeys?: string[]; 
  public get publicKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('public_keys'));
  }
  public set publicKeys(value: string[]) {
    this._publicKeys = value;
  }
  public resetPublicKeys() {
    this._publicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeysInput() {
    return this._publicKeys;
  }
}
export interface VirtualMachineCloudInit {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#dns VirtualMachine#dns}
  */
  readonly dns?: VirtualMachineCloudInitDns | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#ip VirtualMachine#ip}
  */
  readonly ip?: VirtualMachineCloudInitIp[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#user VirtualMachine#user}
  */
  readonly user?: VirtualMachineCloudInitUser | cdktf.IResolvable;
}

export function virtualMachineCloudInitToTerraform(struct?: VirtualMachineCloudInit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: virtualMachineCloudInitDnsToTerraform(struct!.dns),
    ip: cdktf.listMapper(virtualMachineCloudInitIpToTerraform, false)(struct!.ip),
    user: virtualMachineCloudInitUserToTerraform(struct!.user),
  }
}

export class VirtualMachineCloudInitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachineCloudInit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineCloudInit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns.internalValue = undefined;
      this._ip.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns.internalValue = value.dns;
      this._ip.internalValue = value.ip;
      this._user.internalValue = value.user;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new VirtualMachineCloudInitDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: VirtualMachineCloudInitDns | cdktf.IResolvable) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new VirtualMachineCloudInitIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: VirtualMachineCloudInitIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new VirtualMachineCloudInitUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: VirtualMachineCloudInitUser | cdktf.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}
export interface VirtualMachineComputedDisksSpeedLimits {
  /**
  * The read speed limit in bytes per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#read VirtualMachine#read}
  */
  readonly read?: number;
  /**
  * The read burstable speed limit in bytes per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#read_burstable VirtualMachine#read_burstable}
  */
  readonly readBurstable?: number;
  /**
  * The write speed limit in bytes per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#write VirtualMachine#write}
  */
  readonly write?: number;
  /**
  * The write burstable speed limit in bytes per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#write_burstable VirtualMachine#write_burstable}
  */
  readonly writeBurstable?: number;
}

export function virtualMachineComputedDisksSpeedLimitsToTerraform(struct?: VirtualMachineComputedDisksSpeedLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.numberToTerraform(struct!.read),
    read_burstable: cdktf.numberToTerraform(struct!.readBurstable),
    write: cdktf.numberToTerraform(struct!.write),
    write_burstable: cdktf.numberToTerraform(struct!.writeBurstable),
  }
}

export class VirtualMachineComputedDisksSpeedLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachineComputedDisksSpeedLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._readBurstable !== undefined) {
      hasAnyValues = true;
      internalValueResult.readBurstable = this._readBurstable;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    if (this._writeBurstable !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeBurstable = this._writeBurstable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineComputedDisksSpeedLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._readBurstable = undefined;
      this._write = undefined;
      this._writeBurstable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._readBurstable = value.readBurstable;
      this._write = value.write;
      this._writeBurstable = value.writeBurstable;
    }
  }

  // read - computed: true, optional: true, required: false
  private _read?: number; 
  public get read() {
    return this.getNumberAttribute('read');
  }
  public set read(value: number) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // read_burstable - computed: true, optional: true, required: false
  private _readBurstable?: number; 
  public get readBurstable() {
    return this.getNumberAttribute('read_burstable');
  }
  public set readBurstable(value: number) {
    this._readBurstable = value;
  }
  public resetReadBurstable() {
    this._readBurstable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readBurstableInput() {
    return this._readBurstable;
  }

  // write - computed: true, optional: true, required: false
  private _write?: number; 
  public get write() {
    return this.getNumberAttribute('write');
  }
  public set write(value: number) {
    this._write = value;
  }
  public resetWrite() {
    this._write = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }

  // write_burstable - computed: true, optional: true, required: false
  private _writeBurstable?: number; 
  public get writeBurstable() {
    return this.getNumberAttribute('write_burstable');
  }
  public set writeBurstable(value: number) {
    this._writeBurstable = value;
  }
  public resetWriteBurstable() {
    this._writeBurstable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeBurstableInput() {
    return this._writeBurstable;
  }
}
export interface VirtualMachineComputedDisks {
  /**
  * Whether the disk has discard enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#discard VirtualMachine#discard}
  */
  readonly discard?: boolean | cdktf.IResolvable;
  /**
  * The file format of the disk.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#file_format VirtualMachine#file_format}
  */
  readonly fileFormat?: string;
  /**
  * The type of the disk.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#interface_type VirtualMachine#interface_type}
  */
  readonly interfaceType: string;
  /**
  * The position of the disk. (0, 1, 2, etc.) This is combined with the `interface_type` to determine the disk name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#position VirtualMachine#position}
  */
  readonly position: number;
  /**
  * The size of the disk in GiB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#size VirtualMachine#size}
  */
  readonly size: number;
  /**
  * The speed limits of the disk. If not set, no speed limitations are applied.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#speed_limits VirtualMachine#speed_limits}
  */
  readonly speedLimits?: VirtualMachineComputedDisksSpeedLimits | cdktf.IResolvable;
  /**
  * Whether to use SSD emulation. conflicts with virtio disk type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#ssd_emulation VirtualMachine#ssd_emulation}
  */
  readonly ssdEmulation?: boolean | cdktf.IResolvable;
  /**
  * The storage the disk is on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#storage VirtualMachine#storage}
  */
  readonly storage: string;
  /**
  * Whether to use an iothread for the disk.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#use_iothread VirtualMachine#use_iothread}
  */
  readonly useIothread?: boolean | cdktf.IResolvable;
}

export function virtualMachineComputedDisksToTerraform(struct?: VirtualMachineComputedDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discard: cdktf.booleanToTerraform(struct!.discard),
    file_format: cdktf.stringToTerraform(struct!.fileFormat),
    interface_type: cdktf.stringToTerraform(struct!.interfaceType),
    position: cdktf.numberToTerraform(struct!.position),
    size: cdktf.numberToTerraform(struct!.size),
    speed_limits: virtualMachineComputedDisksSpeedLimitsToTerraform(struct!.speedLimits),
    ssd_emulation: cdktf.booleanToTerraform(struct!.ssdEmulation),
    storage: cdktf.stringToTerraform(struct!.storage),
    use_iothread: cdktf.booleanToTerraform(struct!.useIothread),
  }
}

export class VirtualMachineComputedDisksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualMachineComputedDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discard !== undefined) {
      hasAnyValues = true;
      internalValueResult.discard = this._discard;
    }
    if (this._fileFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileFormat = this._fileFormat;
    }
    if (this._interfaceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceType = this._interfaceType;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._speedLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.speedLimits = this._speedLimits?.internalValue;
    }
    if (this._ssdEmulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssdEmulation = this._ssdEmulation;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    if (this._useIothread !== undefined) {
      hasAnyValues = true;
      internalValueResult.useIothread = this._useIothread;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineComputedDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._discard = undefined;
      this._fileFormat = undefined;
      this._interfaceType = undefined;
      this._position = undefined;
      this._size = undefined;
      this._speedLimits.internalValue = undefined;
      this._ssdEmulation = undefined;
      this._storage = undefined;
      this._useIothread = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._discard = value.discard;
      this._fileFormat = value.fileFormat;
      this._interfaceType = value.interfaceType;
      this._position = value.position;
      this._size = value.size;
      this._speedLimits.internalValue = value.speedLimits;
      this._ssdEmulation = value.ssdEmulation;
      this._storage = value.storage;
      this._useIothread = value.useIothread;
    }
  }

  // discard - computed: true, optional: true, required: false
  private _discard?: boolean | cdktf.IResolvable; 
  public get discard() {
    return this.getBooleanAttribute('discard');
  }
  public set discard(value: boolean | cdktf.IResolvable) {
    this._discard = value;
  }
  public resetDiscard() {
    this._discard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardInput() {
    return this._discard;
  }

  // file_format - computed: true, optional: true, required: false
  private _fileFormat?: string; 
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }
  public set fileFormat(value: string) {
    this._fileFormat = value;
  }
  public resetFileFormat() {
    this._fileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatInput() {
    return this._fileFormat;
  }

  // interface_type - computed: true, optional: false, required: true
  private _interfaceType?: string; 
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }
  public set interfaceType(value: string) {
    this._interfaceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTypeInput() {
    return this._interfaceType;
  }

  // position - computed: true, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // size - computed: true, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // speed_limits - computed: true, optional: true, required: false
  private _speedLimits = new VirtualMachineComputedDisksSpeedLimitsOutputReference(this, "speed_limits");
  public get speedLimits() {
    return this._speedLimits;
  }
  public putSpeedLimits(value: VirtualMachineComputedDisksSpeedLimits | cdktf.IResolvable) {
    this._speedLimits.internalValue = value;
  }
  public resetSpeedLimits() {
    this._speedLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedLimitsInput() {
    return this._speedLimits.internalValue;
  }

  // ssd_emulation - computed: true, optional: true, required: false
  private _ssdEmulation?: boolean | cdktf.IResolvable; 
  public get ssdEmulation() {
    return this.getBooleanAttribute('ssd_emulation');
  }
  public set ssdEmulation(value: boolean | cdktf.IResolvable) {
    this._ssdEmulation = value;
  }
  public resetSsdEmulation() {
    this._ssdEmulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssdEmulationInput() {
    return this._ssdEmulation;
  }

  // storage - computed: true, optional: false, required: true
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // use_iothread - computed: true, optional: true, required: false
  private _useIothread?: boolean | cdktf.IResolvable; 
  public get useIothread() {
    return this.getBooleanAttribute('use_iothread');
  }
  public set useIothread(value: boolean | cdktf.IResolvable) {
    this._useIothread = value;
  }
  public resetUseIothread() {
    this._useIothread = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIothreadInput() {
    return this._useIothread;
  }
}

export class VirtualMachineComputedDisksList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineComputedDisks[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VirtualMachineComputedDisksOutputReference {
    return new VirtualMachineComputedDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineComputedNetworkInterfaces {
  /**
  * The bridge the network interface is on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#bridge VirtualMachine#bridge}
  */
  readonly bridge: string;
  /**
  * Whether the network interface is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#enabled VirtualMachine#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The MAC address of the network interface.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#mac_address VirtualMachine#mac_address}
  */
  readonly macAddress?: string;
  /**
  * The model of the network interface.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#model VirtualMachine#model}
  */
  readonly model?: string;
  /**
  * The MTU of the network interface. Only valid for virtio.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#mtu VirtualMachine#mtu}
  */
  readonly mtu?: number;
  /**
  * The position of the network interface in the VM as an int. Used to determine the interface name (net0, net1, etc).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#position VirtualMachine#position}
  */
  readonly position: number;
  /**
  * The rate limit of the network interface in megabytes per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#rate_limit VirtualMachine#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * Whether the firewall for the network interface is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#use_firewall VirtualMachine#use_firewall}
  */
  readonly useFirewall?: boolean | cdktf.IResolvable;
  /**
  * The VLAN tag of the network interface.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#vlan VirtualMachine#vlan}
  */
  readonly vlan?: number;
}

export function virtualMachineComputedNetworkInterfacesToTerraform(struct?: VirtualMachineComputedNetworkInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bridge: cdktf.stringToTerraform(struct!.bridge),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    model: cdktf.stringToTerraform(struct!.model),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    position: cdktf.numberToTerraform(struct!.position),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
    use_firewall: cdktf.booleanToTerraform(struct!.useFirewall),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}

export class VirtualMachineComputedNetworkInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualMachineComputedNetworkInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bridge !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridge = this._bridge;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    if (this._useFirewall !== undefined) {
      hasAnyValues = true;
      internalValueResult.useFirewall = this._useFirewall;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineComputedNetworkInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bridge = undefined;
      this._enabled = undefined;
      this._macAddress = undefined;
      this._model = undefined;
      this._mtu = undefined;
      this._position = undefined;
      this._rateLimit = undefined;
      this._useFirewall = undefined;
      this._vlan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bridge = value.bridge;
      this._enabled = value.enabled;
      this._macAddress = value.macAddress;
      this._model = value.model;
      this._mtu = value.mtu;
      this._position = value.position;
      this._rateLimit = value.rateLimit;
      this._useFirewall = value.useFirewall;
      this._vlan = value.vlan;
    }
  }

  // bridge - computed: true, optional: false, required: true
  private _bridge?: string; 
  public get bridge() {
    return this.getStringAttribute('bridge');
  }
  public set bridge(value: string) {
    this._bridge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // model - computed: true, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // position - computed: true, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // rate_limit - computed: true, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // use_firewall - computed: true, optional: true, required: false
  private _useFirewall?: boolean | cdktf.IResolvable; 
  public get useFirewall() {
    return this.getBooleanAttribute('use_firewall');
  }
  public set useFirewall(value: boolean | cdktf.IResolvable) {
    this._useFirewall = value;
  }
  public resetUseFirewall() {
    this._useFirewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFirewallInput() {
    return this._useFirewall;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class VirtualMachineComputedNetworkInterfacesList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineComputedNetworkInterfaces[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VirtualMachineComputedNetworkInterfacesOutputReference {
    return new VirtualMachineComputedNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineComputedPciDevices {
  /**
  * The device ID of the PCI device.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#id VirtualMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The mediated device name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#mdev VirtualMachine#mdev}
  */
  readonly mdev?: string;
  /**
  * The device name of the PCI device.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#name VirtualMachine#name}
  */
  readonly name: string;
  /**
  * Whether the PCI device is PCIe.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#pcie VirtualMachine#pcie}
  */
  readonly pcie?: boolean | cdktf.IResolvable;
  /**
  * Whether the PCI device is the primary GPU.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#primary_gpu VirtualMachine#primary_gpu}
  */
  readonly primaryGpu?: boolean | cdktf.IResolvable;
  /**
  * The relative path to the ROM for the device.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#rom_file VirtualMachine#rom_file}
  */
  readonly romFile?: string;
  /**
  * Make the firmware room visible to the VM.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#rombar VirtualMachine#rombar}
  */
  readonly rombar?: boolean | cdktf.IResolvable;
}

export function virtualMachineComputedPciDevicesToTerraform(struct?: VirtualMachineComputedPciDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    mdev: cdktf.stringToTerraform(struct!.mdev),
    name: cdktf.stringToTerraform(struct!.name),
    pcie: cdktf.booleanToTerraform(struct!.pcie),
    primary_gpu: cdktf.booleanToTerraform(struct!.primaryGpu),
    rom_file: cdktf.stringToTerraform(struct!.romFile),
    rombar: cdktf.booleanToTerraform(struct!.rombar),
  }
}

export class VirtualMachineComputedPciDevicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualMachineComputedPciDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mdev !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdev = this._mdev;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pcie !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcie = this._pcie;
    }
    if (this._primaryGpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryGpu = this._primaryGpu;
    }
    if (this._romFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.romFile = this._romFile;
    }
    if (this._rombar !== undefined) {
      hasAnyValues = true;
      internalValueResult.rombar = this._rombar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineComputedPciDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._mdev = undefined;
      this._name = undefined;
      this._pcie = undefined;
      this._primaryGpu = undefined;
      this._romFile = undefined;
      this._rombar = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._mdev = value.mdev;
      this._name = value.name;
      this._pcie = value.pcie;
      this._primaryGpu = value.primaryGpu;
      this._romFile = value.romFile;
      this._rombar = value.rombar;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // mdev - computed: true, optional: true, required: false
  private _mdev?: string; 
  public get mdev() {
    return this.getStringAttribute('mdev');
  }
  public set mdev(value: string) {
    this._mdev = value;
  }
  public resetMdev() {
    this._mdev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdevInput() {
    return this._mdev;
  }

  // name - computed: true, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pcie - computed: true, optional: true, required: false
  private _pcie?: boolean | cdktf.IResolvable; 
  public get pcie() {
    return this.getBooleanAttribute('pcie');
  }
  public set pcie(value: boolean | cdktf.IResolvable) {
    this._pcie = value;
  }
  public resetPcie() {
    this._pcie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieInput() {
    return this._pcie;
  }

  // primary_gpu - computed: true, optional: true, required: false
  private _primaryGpu?: boolean | cdktf.IResolvable; 
  public get primaryGpu() {
    return this.getBooleanAttribute('primary_gpu');
  }
  public set primaryGpu(value: boolean | cdktf.IResolvable) {
    this._primaryGpu = value;
  }
  public resetPrimaryGpu() {
    this._primaryGpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryGpuInput() {
    return this._primaryGpu;
  }

  // rom_file - computed: true, optional: true, required: false
  private _romFile?: string; 
  public get romFile() {
    return this.getStringAttribute('rom_file');
  }
  public set romFile(value: string) {
    this._romFile = value;
  }
  public resetRomFile() {
    this._romFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get romFileInput() {
    return this._romFile;
  }

  // rombar - computed: true, optional: true, required: false
  private _rombar?: boolean | cdktf.IResolvable; 
  public get rombar() {
    return this.getBooleanAttribute('rombar');
  }
  public set rombar(value: boolean | cdktf.IResolvable) {
    this._rombar = value;
  }
  public resetRombar() {
    this._rombar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rombarInput() {
    return this._rombar;
  }
}

export class VirtualMachineComputedPciDevicesList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineComputedPciDevices[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VirtualMachineComputedPciDevicesOutputReference {
    return new VirtualMachineComputedPciDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineCpu {
  /**
  * The CPU architecture.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#architecture VirtualMachine#architecture}
  */
  readonly architecture?: string;
  /**
  * The number of CPU cores.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#cores VirtualMachine#cores}
  */
  readonly cores?: number;
  /**
  * The CPU units.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#cpu_units VirtualMachine#cpu_units}
  */
  readonly cpuUnits?: number;
  /**
  * The emulated CPU type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#emulated_type VirtualMachine#emulated_type}
  */
  readonly emulatedType?: string;
  /**
  * The number of CPU sockets.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#sockets VirtualMachine#sockets}
  */
  readonly sockets?: number;
}

export function virtualMachineCpuToTerraform(struct?: VirtualMachineCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    architecture: cdktf.stringToTerraform(struct!.architecture),
    cores: cdktf.numberToTerraform(struct!.cores),
    cpu_units: cdktf.numberToTerraform(struct!.cpuUnits),
    emulated_type: cdktf.stringToTerraform(struct!.emulatedType),
    sockets: cdktf.numberToTerraform(struct!.sockets),
  }
}

export class VirtualMachineCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachineCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architecture !== undefined) {
      hasAnyValues = true;
      internalValueResult.architecture = this._architecture;
    }
    if (this._cores !== undefined) {
      hasAnyValues = true;
      internalValueResult.cores = this._cores;
    }
    if (this._cpuUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUnits = this._cpuUnits;
    }
    if (this._emulatedType !== undefined) {
      hasAnyValues = true;
      internalValueResult.emulatedType = this._emulatedType;
    }
    if (this._sockets !== undefined) {
      hasAnyValues = true;
      internalValueResult.sockets = this._sockets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._architecture = undefined;
      this._cores = undefined;
      this._cpuUnits = undefined;
      this._emulatedType = undefined;
      this._sockets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._architecture = value.architecture;
      this._cores = value.cores;
      this._cpuUnits = value.cpuUnits;
      this._emulatedType = value.emulatedType;
      this._sockets = value.sockets;
    }
  }

  // architecture - computed: true, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // cores - computed: true, optional: true, required: false
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  public resetCores() {
    this._cores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
  }

  // cpu_units - computed: true, optional: true, required: false
  private _cpuUnits?: number; 
  public get cpuUnits() {
    return this.getNumberAttribute('cpu_units');
  }
  public set cpuUnits(value: number) {
    this._cpuUnits = value;
  }
  public resetCpuUnits() {
    this._cpuUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUnitsInput() {
    return this._cpuUnits;
  }

  // emulated_type - computed: true, optional: true, required: false
  private _emulatedType?: string; 
  public get emulatedType() {
    return this.getStringAttribute('emulated_type');
  }
  public set emulatedType(value: string) {
    this._emulatedType = value;
  }
  public resetEmulatedType() {
    this._emulatedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emulatedTypeInput() {
    return this._emulatedType;
  }

  // sockets - computed: true, optional: true, required: false
  private _sockets?: number; 
  public get sockets() {
    return this.getNumberAttribute('sockets');
  }
  public set sockets(value: number) {
    this._sockets = value;
  }
  public resetSockets() {
    this._sockets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketsInput() {
    return this._sockets;
  }
}
export interface VirtualMachineDisksSpeedLimits {
  /**
  * The read speed limit in bytes per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#read VirtualMachine#read}
  */
  readonly read?: number;
  /**
  * The read burstable speed limit in bytes per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#read_burstable VirtualMachine#read_burstable}
  */
  readonly readBurstable?: number;
  /**
  * The write speed limit in bytes per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#write VirtualMachine#write}
  */
  readonly write?: number;
  /**
  * The write burstable speed limit in bytes per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#write_burstable VirtualMachine#write_burstable}
  */
  readonly writeBurstable?: number;
}

export function virtualMachineDisksSpeedLimitsToTerraform(struct?: VirtualMachineDisksSpeedLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.numberToTerraform(struct!.read),
    read_burstable: cdktf.numberToTerraform(struct!.readBurstable),
    write: cdktf.numberToTerraform(struct!.write),
    write_burstable: cdktf.numberToTerraform(struct!.writeBurstable),
  }
}

export class VirtualMachineDisksSpeedLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachineDisksSpeedLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._readBurstable !== undefined) {
      hasAnyValues = true;
      internalValueResult.readBurstable = this._readBurstable;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    if (this._writeBurstable !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeBurstable = this._writeBurstable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineDisksSpeedLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._readBurstable = undefined;
      this._write = undefined;
      this._writeBurstable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._readBurstable = value.readBurstable;
      this._write = value.write;
      this._writeBurstable = value.writeBurstable;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: number; 
  public get read() {
    return this.getNumberAttribute('read');
  }
  public set read(value: number) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // read_burstable - computed: false, optional: true, required: false
  private _readBurstable?: number; 
  public get readBurstable() {
    return this.getNumberAttribute('read_burstable');
  }
  public set readBurstable(value: number) {
    this._readBurstable = value;
  }
  public resetReadBurstable() {
    this._readBurstable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readBurstableInput() {
    return this._readBurstable;
  }

  // write - computed: false, optional: true, required: false
  private _write?: number; 
  public get write() {
    return this.getNumberAttribute('write');
  }
  public set write(value: number) {
    this._write = value;
  }
  public resetWrite() {
    this._write = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }

  // write_burstable - computed: false, optional: true, required: false
  private _writeBurstable?: number; 
  public get writeBurstable() {
    return this.getNumberAttribute('write_burstable');
  }
  public set writeBurstable(value: number) {
    this._writeBurstable = value;
  }
  public resetWriteBurstable() {
    this._writeBurstable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeBurstableInput() {
    return this._writeBurstable;
  }
}
export interface VirtualMachineDisks {
  /**
  * Whether the disk has discard enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#discard VirtualMachine#discard}
  */
  readonly discard?: boolean | cdktf.IResolvable;
  /**
  * The file format of the disk.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#file_format VirtualMachine#file_format}
  */
  readonly fileFormat?: string;
  /**
  * The type of the disk.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#interface_type VirtualMachine#interface_type}
  */
  readonly interfaceType: string;
  /**
  * The position of the disk. (0, 1, 2, etc.) This is combined with the `interface_type` to determine the disk name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#position VirtualMachine#position}
  */
  readonly position: number;
  /**
  * The size of the disk in GiB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#size VirtualMachine#size}
  */
  readonly size: number;
  /**
  * The speed limits of the disk. If not set, no speed limitations are applied.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#speed_limits VirtualMachine#speed_limits}
  */
  readonly speedLimits?: VirtualMachineDisksSpeedLimits | cdktf.IResolvable;
  /**
  * Whether to use SSD emulation. conflicts with virtio disk type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#ssd_emulation VirtualMachine#ssd_emulation}
  */
  readonly ssdEmulation?: boolean | cdktf.IResolvable;
  /**
  * The storage the disk is on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#storage VirtualMachine#storage}
  */
  readonly storage: string;
  /**
  * Whether to use an iothread for the disk.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#use_iothread VirtualMachine#use_iothread}
  */
  readonly useIothread?: boolean | cdktf.IResolvable;
}

export function virtualMachineDisksToTerraform(struct?: VirtualMachineDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discard: cdktf.booleanToTerraform(struct!.discard),
    file_format: cdktf.stringToTerraform(struct!.fileFormat),
    interface_type: cdktf.stringToTerraform(struct!.interfaceType),
    position: cdktf.numberToTerraform(struct!.position),
    size: cdktf.numberToTerraform(struct!.size),
    speed_limits: virtualMachineDisksSpeedLimitsToTerraform(struct!.speedLimits),
    ssd_emulation: cdktf.booleanToTerraform(struct!.ssdEmulation),
    storage: cdktf.stringToTerraform(struct!.storage),
    use_iothread: cdktf.booleanToTerraform(struct!.useIothread),
  }
}

export class VirtualMachineDisksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualMachineDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discard !== undefined) {
      hasAnyValues = true;
      internalValueResult.discard = this._discard;
    }
    if (this._fileFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileFormat = this._fileFormat;
    }
    if (this._interfaceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceType = this._interfaceType;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._speedLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.speedLimits = this._speedLimits?.internalValue;
    }
    if (this._ssdEmulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssdEmulation = this._ssdEmulation;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    if (this._useIothread !== undefined) {
      hasAnyValues = true;
      internalValueResult.useIothread = this._useIothread;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discard = undefined;
      this._fileFormat = undefined;
      this._interfaceType = undefined;
      this._position = undefined;
      this._size = undefined;
      this._speedLimits.internalValue = undefined;
      this._ssdEmulation = undefined;
      this._storage = undefined;
      this._useIothread = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discard = value.discard;
      this._fileFormat = value.fileFormat;
      this._interfaceType = value.interfaceType;
      this._position = value.position;
      this._size = value.size;
      this._speedLimits.internalValue = value.speedLimits;
      this._ssdEmulation = value.ssdEmulation;
      this._storage = value.storage;
      this._useIothread = value.useIothread;
    }
  }

  // discard - computed: true, optional: true, required: false
  private _discard?: boolean | cdktf.IResolvable; 
  public get discard() {
    return this.getBooleanAttribute('discard');
  }
  public set discard(value: boolean | cdktf.IResolvable) {
    this._discard = value;
  }
  public resetDiscard() {
    this._discard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardInput() {
    return this._discard;
  }

  // file_format - computed: false, optional: true, required: false
  private _fileFormat?: string; 
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }
  public set fileFormat(value: string) {
    this._fileFormat = value;
  }
  public resetFileFormat() {
    this._fileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatInput() {
    return this._fileFormat;
  }

  // interface_type - computed: false, optional: false, required: true
  private _interfaceType?: string; 
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }
  public set interfaceType(value: string) {
    this._interfaceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTypeInput() {
    return this._interfaceType;
  }

  // position - computed: false, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // speed_limits - computed: false, optional: true, required: false
  private _speedLimits = new VirtualMachineDisksSpeedLimitsOutputReference(this, "speed_limits");
  public get speedLimits() {
    return this._speedLimits;
  }
  public putSpeedLimits(value: VirtualMachineDisksSpeedLimits | cdktf.IResolvable) {
    this._speedLimits.internalValue = value;
  }
  public resetSpeedLimits() {
    this._speedLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedLimitsInput() {
    return this._speedLimits.internalValue;
  }

  // ssd_emulation - computed: true, optional: true, required: false
  private _ssdEmulation?: boolean | cdktf.IResolvable; 
  public get ssdEmulation() {
    return this.getBooleanAttribute('ssd_emulation');
  }
  public set ssdEmulation(value: boolean | cdktf.IResolvable) {
    this._ssdEmulation = value;
  }
  public resetSsdEmulation() {
    this._ssdEmulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssdEmulationInput() {
    return this._ssdEmulation;
  }

  // storage - computed: false, optional: false, required: true
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // use_iothread - computed: true, optional: true, required: false
  private _useIothread?: boolean | cdktf.IResolvable; 
  public get useIothread() {
    return this.getBooleanAttribute('use_iothread');
  }
  public set useIothread(value: boolean | cdktf.IResolvable) {
    this._useIothread = value;
  }
  public resetUseIothread() {
    this._useIothread = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIothreadInput() {
    return this._useIothread;
  }
}

export class VirtualMachineDisksList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineDisks[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VirtualMachineDisksOutputReference {
    return new VirtualMachineDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineIso {
  /**
  * The image to use for install media.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#image VirtualMachine#image}
  */
  readonly image: string;
  /**
  * The storage to place install media on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#storage VirtualMachine#storage}
  */
  readonly storage: string;
}

export function virtualMachineIsoToTerraform(struct?: VirtualMachineIso | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    storage: cdktf.stringToTerraform(struct!.storage),
  }
}

export class VirtualMachineIsoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachineIso | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineIso | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._storage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._storage = value.storage;
    }
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // storage - computed: false, optional: false, required: true
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface VirtualMachineMemory {
  /**
  * The size of the memory in MB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#dedicated VirtualMachine#dedicated}
  */
  readonly dedicated?: number;
  /**
  * The floating memory in MB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#floating VirtualMachine#floating}
  */
  readonly floating?: number;
  /**
  * The shared memory in MB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#shared VirtualMachine#shared}
  */
  readonly shared?: number;
}

export function virtualMachineMemoryToTerraform(struct?: VirtualMachineMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dedicated: cdktf.numberToTerraform(struct!.dedicated),
    floating: cdktf.numberToTerraform(struct!.floating),
    shared: cdktf.numberToTerraform(struct!.shared),
  }
}

export class VirtualMachineMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachineMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dedicated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicated = this._dedicated;
    }
    if (this._floating !== undefined) {
      hasAnyValues = true;
      internalValueResult.floating = this._floating;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dedicated = undefined;
      this._floating = undefined;
      this._shared = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dedicated = value.dedicated;
      this._floating = value.floating;
      this._shared = value.shared;
    }
  }

  // dedicated - computed: true, optional: true, required: false
  private _dedicated?: number; 
  public get dedicated() {
    return this.getNumberAttribute('dedicated');
  }
  public set dedicated(value: number) {
    this._dedicated = value;
  }
  public resetDedicated() {
    this._dedicated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedInput() {
    return this._dedicated;
  }

  // floating - computed: true, optional: true, required: false
  private _floating?: number; 
  public get floating() {
    return this.getNumberAttribute('floating');
  }
  public set floating(value: number) {
    this._floating = value;
  }
  public resetFloating() {
    this._floating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingInput() {
    return this._floating;
  }

  // shared - computed: true, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }
}
export interface VirtualMachineNetworkInterfaces {
  /**
  * The bridge the network interface is on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#bridge VirtualMachine#bridge}
  */
  readonly bridge: string;
  /**
  * Whether the network interface is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#enabled VirtualMachine#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The MAC address of the network interface.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#mac_address VirtualMachine#mac_address}
  */
  readonly macAddress?: string;
  /**
  * The model of the network interface.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#model VirtualMachine#model}
  */
  readonly model?: string;
  /**
  * The MTU of the network interface. Only valid for virtio.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#mtu VirtualMachine#mtu}
  */
  readonly mtu?: number;
  /**
  * The position of the network interface in the VM as an int. Used to determine the interface name (net0, net1, etc).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#position VirtualMachine#position}
  */
  readonly position: number;
  /**
  * The rate limit of the network interface in megabytes per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#rate_limit VirtualMachine#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * Whether the firewall for the network interface is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#use_firewall VirtualMachine#use_firewall}
  */
  readonly useFirewall?: boolean | cdktf.IResolvable;
  /**
  * The VLAN tag of the network interface.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#vlan VirtualMachine#vlan}
  */
  readonly vlan?: number;
}

export function virtualMachineNetworkInterfacesToTerraform(struct?: VirtualMachineNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bridge: cdktf.stringToTerraform(struct!.bridge),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    model: cdktf.stringToTerraform(struct!.model),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    position: cdktf.numberToTerraform(struct!.position),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
    use_firewall: cdktf.booleanToTerraform(struct!.useFirewall),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}

export class VirtualMachineNetworkInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualMachineNetworkInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bridge !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridge = this._bridge;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    if (this._useFirewall !== undefined) {
      hasAnyValues = true;
      internalValueResult.useFirewall = this._useFirewall;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineNetworkInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bridge = undefined;
      this._enabled = undefined;
      this._macAddress = undefined;
      this._model = undefined;
      this._mtu = undefined;
      this._position = undefined;
      this._rateLimit = undefined;
      this._useFirewall = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bridge = value.bridge;
      this._enabled = value.enabled;
      this._macAddress = value.macAddress;
      this._model = value.model;
      this._mtu = value.mtu;
      this._position = value.position;
      this._rateLimit = value.rateLimit;
      this._useFirewall = value.useFirewall;
      this._vlan = value.vlan;
    }
  }

  // bridge - computed: false, optional: false, required: true
  private _bridge?: string; 
  public get bridge() {
    return this.getStringAttribute('bridge');
  }
  public set bridge(value: string) {
    this._bridge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // model - computed: true, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // position - computed: false, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // use_firewall - computed: true, optional: true, required: false
  private _useFirewall?: boolean | cdktf.IResolvable; 
  public get useFirewall() {
    return this.getBooleanAttribute('use_firewall');
  }
  public set useFirewall(value: boolean | cdktf.IResolvable) {
    this._useFirewall = value;
  }
  public resetUseFirewall() {
    this._useFirewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFirewallInput() {
    return this._useFirewall;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class VirtualMachineNetworkInterfacesList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineNetworkInterfaces[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VirtualMachineNetworkInterfacesOutputReference {
    return new VirtualMachineNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachinePciDevices {
  /**
  * The device ID of the PCI device.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#id VirtualMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The mediated device name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#mdev VirtualMachine#mdev}
  */
  readonly mdev?: string;
  /**
  * The device name of the PCI device.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#name VirtualMachine#name}
  */
  readonly name: string;
  /**
  * Whether the PCI device is PCIe.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#pcie VirtualMachine#pcie}
  */
  readonly pcie?: boolean | cdktf.IResolvable;
  /**
  * Whether the PCI device is the primary GPU.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#primary_gpu VirtualMachine#primary_gpu}
  */
  readonly primaryGpu?: boolean | cdktf.IResolvable;
  /**
  * The relative path to the ROM for the device.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#rom_file VirtualMachine#rom_file}
  */
  readonly romFile?: string;
  /**
  * Make the firmware room visible to the VM.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#rombar VirtualMachine#rombar}
  */
  readonly rombar?: boolean | cdktf.IResolvable;
}

export function virtualMachinePciDevicesToTerraform(struct?: VirtualMachinePciDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    mdev: cdktf.stringToTerraform(struct!.mdev),
    name: cdktf.stringToTerraform(struct!.name),
    pcie: cdktf.booleanToTerraform(struct!.pcie),
    primary_gpu: cdktf.booleanToTerraform(struct!.primaryGpu),
    rom_file: cdktf.stringToTerraform(struct!.romFile),
    rombar: cdktf.booleanToTerraform(struct!.rombar),
  }
}

export class VirtualMachinePciDevicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualMachinePciDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mdev !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdev = this._mdev;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pcie !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcie = this._pcie;
    }
    if (this._primaryGpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryGpu = this._primaryGpu;
    }
    if (this._romFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.romFile = this._romFile;
    }
    if (this._rombar !== undefined) {
      hasAnyValues = true;
      internalValueResult.rombar = this._rombar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachinePciDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._mdev = undefined;
      this._name = undefined;
      this._pcie = undefined;
      this._primaryGpu = undefined;
      this._romFile = undefined;
      this._rombar = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._mdev = value.mdev;
      this._name = value.name;
      this._pcie = value.pcie;
      this._primaryGpu = value.primaryGpu;
      this._romFile = value.romFile;
      this._rombar = value.rombar;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // mdev - computed: false, optional: true, required: false
  private _mdev?: string; 
  public get mdev() {
    return this.getStringAttribute('mdev');
  }
  public set mdev(value: string) {
    this._mdev = value;
  }
  public resetMdev() {
    this._mdev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdevInput() {
    return this._mdev;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pcie - computed: true, optional: true, required: false
  private _pcie?: boolean | cdktf.IResolvable; 
  public get pcie() {
    return this.getBooleanAttribute('pcie');
  }
  public set pcie(value: boolean | cdktf.IResolvable) {
    this._pcie = value;
  }
  public resetPcie() {
    this._pcie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcieInput() {
    return this._pcie;
  }

  // primary_gpu - computed: true, optional: true, required: false
  private _primaryGpu?: boolean | cdktf.IResolvable; 
  public get primaryGpu() {
    return this.getBooleanAttribute('primary_gpu');
  }
  public set primaryGpu(value: boolean | cdktf.IResolvable) {
    this._primaryGpu = value;
  }
  public resetPrimaryGpu() {
    this._primaryGpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryGpuInput() {
    return this._primaryGpu;
  }

  // rom_file - computed: false, optional: true, required: false
  private _romFile?: string; 
  public get romFile() {
    return this.getStringAttribute('rom_file');
  }
  public set romFile(value: string) {
    this._romFile = value;
  }
  public resetRomFile() {
    this._romFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get romFileInput() {
    return this._romFile;
  }

  // rombar - computed: true, optional: true, required: false
  private _rombar?: boolean | cdktf.IResolvable; 
  public get rombar() {
    return this.getBooleanAttribute('rombar');
  }
  public set rombar(value: boolean | cdktf.IResolvable) {
    this._rombar = value;
  }
  public resetRombar() {
    this._rombar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rombarInput() {
    return this._rombar;
  }
}

export class VirtualMachinePciDevicesList extends cdktf.ComplexList {
  public internalValue? : VirtualMachinePciDevices[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VirtualMachinePciDevicesOutputReference {
    return new VirtualMachinePciDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineTimeouts {
  /**
  * The timeout for cloning the virtual machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#clone VirtualMachine#clone}
  */
  readonly clone?: number;
  /**
  * The timeout for configuring the virtual machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#configure VirtualMachine#configure}
  */
  readonly configure?: number;
  /**
  * The timeout for creating the virtual machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#create VirtualMachine#create}
  */
  readonly create?: number;
  /**
  * The timeout for deleting the virtual machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#delete VirtualMachine#delete}
  */
  readonly delete?: number;
  /**
  * The timeout for rebooting the virtual machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#reboot VirtualMachine#reboot}
  */
  readonly reboot?: number;
  /**
  * The timeout for resizing disk the virtual machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#resize_disk VirtualMachine#resize_disk}
  */
  readonly resizeDisk?: number;
  /**
  * The timeout for shutting down the virtual machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#shutdown VirtualMachine#shutdown}
  */
  readonly shutdown?: number;
  /**
  * The timeout for starting the virtual machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#start VirtualMachine#start}
  */
  readonly start?: number;
  /**
  * The timeout for stopping the virtual machine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine#stop VirtualMachine#stop}
  */
  readonly stop?: number;
}

export function virtualMachineTimeoutsToTerraform(struct?: VirtualMachineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clone: cdktf.numberToTerraform(struct!.clone),
    configure: cdktf.numberToTerraform(struct!.configure),
    create: cdktf.numberToTerraform(struct!.create),
    delete: cdktf.numberToTerraform(struct!.delete),
    reboot: cdktf.numberToTerraform(struct!.reboot),
    resize_disk: cdktf.numberToTerraform(struct!.resizeDisk),
    shutdown: cdktf.numberToTerraform(struct!.shutdown),
    start: cdktf.numberToTerraform(struct!.start),
    stop: cdktf.numberToTerraform(struct!.stop),
  }
}

export class VirtualMachineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachineTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clone !== undefined) {
      hasAnyValues = true;
      internalValueResult.clone = this._clone;
    }
    if (this._configure !== undefined) {
      hasAnyValues = true;
      internalValueResult.configure = this._configure;
    }
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._reboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.reboot = this._reboot;
    }
    if (this._resizeDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.resizeDisk = this._resizeDisk;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._stop !== undefined) {
      hasAnyValues = true;
      internalValueResult.stop = this._stop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clone = undefined;
      this._configure = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._reboot = undefined;
      this._resizeDisk = undefined;
      this._shutdown = undefined;
      this._start = undefined;
      this._stop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clone = value.clone;
      this._configure = value.configure;
      this._create = value.create;
      this._delete = value.delete;
      this._reboot = value.reboot;
      this._resizeDisk = value.resizeDisk;
      this._shutdown = value.shutdown;
      this._start = value.start;
      this._stop = value.stop;
    }
  }

  // clone - computed: false, optional: true, required: false
  private _clone?: number; 
  public get clone() {
    return this.getNumberAttribute('clone');
  }
  public set clone(value: number) {
    this._clone = value;
  }
  public resetClone() {
    this._clone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneInput() {
    return this._clone;
  }

  // configure - computed: false, optional: true, required: false
  private _configure?: number; 
  public get configure() {
    return this.getNumberAttribute('configure');
  }
  public set configure(value: number) {
    this._configure = value;
  }
  public resetConfigure() {
    this._configure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureInput() {
    return this._configure;
  }

  // create - computed: false, optional: true, required: false
  private _create?: number; 
  public get create() {
    return this.getNumberAttribute('create');
  }
  public set create(value: number) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: number; 
  public get delete() {
    return this.getNumberAttribute('delete');
  }
  public set delete(value: number) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // reboot - computed: false, optional: true, required: false
  private _reboot?: number; 
  public get reboot() {
    return this.getNumberAttribute('reboot');
  }
  public set reboot(value: number) {
    this._reboot = value;
  }
  public resetReboot() {
    this._reboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootInput() {
    return this._reboot;
  }

  // resize_disk - computed: false, optional: true, required: false
  private _resizeDisk?: number; 
  public get resizeDisk() {
    return this.getNumberAttribute('resize_disk');
  }
  public set resizeDisk(value: number) {
    this._resizeDisk = value;
  }
  public resetResizeDisk() {
    this._resizeDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeDiskInput() {
    return this._resizeDisk;
  }

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: number; 
  public get shutdown() {
    return this.getNumberAttribute('shutdown');
  }
  public set shutdown(value: number) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // stop - computed: false, optional: true, required: false
  private _stop?: number; 
  public get stop() {
    return this.getNumberAttribute('stop');
  }
  public set stop(value: number) {
    this._stop = value;
  }
  public resetStop() {
    this._stop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopInput() {
    return this._stop;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine proxmox_virtual_machine}
*/
export class VirtualMachine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_machine";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/proxmox/r/virtual_machine proxmox_virtual_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualMachineConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_machine',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.0.9',
        providerVersionConstraint: '~> 0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agent.internalValue = config.agent;
    this._bios = config.bios;
    this._clone.internalValue = config.clone;
    this._cloudInit.internalValue = config.cloudInit;
    this._cpu.internalValue = config.cpu;
    this._description = config.description;
    this._disks.internalValue = config.disks;
    this._id = config.id;
    this._iso.internalValue = config.iso;
    this._keyboardLayout = config.keyboardLayout;
    this._kvmArguments = config.kvmArguments;
    this._machineType = config.machineType;
    this._memory.internalValue = config.memory;
    this._name = config.name;
    this._networkInterfaces.internalValue = config.networkInterfaces;
    this._node = config.nodeAttribute;
    this._pciDevices.internalValue = config.pciDevices;
    this._resourcePool = config.resourcePool;
    this._startOnCreate = config.startOnCreate;
    this._startOnNodeBoot = config.startOnNodeBoot;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent - computed: true, optional: true, required: false
  private _agent = new VirtualMachineAgentOutputReference(this, "agent");
  public get agent() {
    return this._agent;
  }
  public putAgent(value: VirtualMachineAgent | cdktf.IResolvable) {
    this._agent.internalValue = value;
  }
  public resetAgent() {
    this._agent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent.internalValue;
  }

  // bios - computed: true, optional: true, required: false
  private _bios?: string; 
  public get bios() {
    return this.getStringAttribute('bios');
  }
  public set bios(value: string) {
    this._bios = value;
  }
  public resetBios() {
    this._bios = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biosInput() {
    return this._bios;
  }

  // clone - computed: false, optional: true, required: false
  private _clone = new VirtualMachineCloneOutputReference(this, "clone");
  public get clone() {
    return this._clone;
  }
  public putClone(value: VirtualMachineClone | cdktf.IResolvable) {
    this._clone.internalValue = value;
  }
  public resetClone() {
    this._clone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneInput() {
    return this._clone.internalValue;
  }

  // cloud_init - computed: false, optional: true, required: false
  private _cloudInit = new VirtualMachineCloudInitOutputReference(this, "cloud_init");
  public get cloudInit() {
    return this._cloudInit;
  }
  public putCloudInit(value: VirtualMachineCloudInit | cdktf.IResolvable) {
    this._cloudInit.internalValue = value;
  }
  public resetCloudInit() {
    this._cloudInit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInitInput() {
    return this._cloudInit.internalValue;
  }

  // computed_disks - computed: true, optional: false, required: false
  private _computedDisks = new VirtualMachineComputedDisksList(this, "computed_disks", true);
  public get computedDisks() {
    return this._computedDisks;
  }

  // computed_network_interfaces - computed: true, optional: false, required: false
  private _computedNetworkInterfaces = new VirtualMachineComputedNetworkInterfacesList(this, "computed_network_interfaces", true);
  public get computedNetworkInterfaces() {
    return this._computedNetworkInterfaces;
  }

  // computed_pci_devices - computed: true, optional: false, required: false
  private _computedPciDevices = new VirtualMachineComputedPciDevicesList(this, "computed_pci_devices", true);
  public get computedPciDevices() {
    return this._computedPciDevices;
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu = new VirtualMachineCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: VirtualMachineCpu | cdktf.IResolvable) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disks - computed: false, optional: true, required: false
  private _disks = new VirtualMachineDisksList(this, "disks", true);
  public get disks() {
    return this._disks;
  }
  public putDisks(value: VirtualMachineDisks[] | cdktf.IResolvable) {
    this._disks.internalValue = value;
  }
  public resetDisks() {
    this._disks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks.internalValue;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // iso - computed: false, optional: true, required: false
  private _iso = new VirtualMachineIsoOutputReference(this, "iso");
  public get iso() {
    return this._iso;
  }
  public putIso(value: VirtualMachineIso | cdktf.IResolvable) {
    this._iso.internalValue = value;
  }
  public resetIso() {
    this._iso.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isoInput() {
    return this._iso.internalValue;
  }

  // keyboard_layout - computed: true, optional: true, required: false
  private _keyboardLayout?: string; 
  public get keyboardLayout() {
    return this.getStringAttribute('keyboard_layout');
  }
  public set keyboardLayout(value: string) {
    this._keyboardLayout = value;
  }
  public resetKeyboardLayout() {
    this._keyboardLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyboardLayoutInput() {
    return this._keyboardLayout;
  }

  // kvm_arguments - computed: false, optional: true, required: false
  private _kvmArguments?: string; 
  public get kvmArguments() {
    return this.getStringAttribute('kvm_arguments');
  }
  public set kvmArguments(value: string) {
    this._kvmArguments = value;
  }
  public resetKvmArguments() {
    this._kvmArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvmArgumentsInput() {
    return this._kvmArguments;
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // memory - computed: true, optional: true, required: false
  private _memory = new VirtualMachineMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: VirtualMachineMemory | cdktf.IResolvable) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_interfaces - computed: false, optional: true, required: false
  private _networkInterfaces = new VirtualMachineNetworkInterfacesList(this, "network_interfaces", true);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }
  public putNetworkInterfaces(value: VirtualMachineNetworkInterfaces[] | cdktf.IResolvable) {
    this._networkInterfaces.internalValue = value;
  }
  public resetNetworkInterfaces() {
    this._networkInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces.internalValue;
  }

  // node - computed: false, optional: false, required: true
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // pci_devices - computed: false, optional: true, required: false
  private _pciDevices = new VirtualMachinePciDevicesList(this, "pci_devices", true);
  public get pciDevices() {
    return this._pciDevices;
  }
  public putPciDevices(value: VirtualMachinePciDevices[] | cdktf.IResolvable) {
    this._pciDevices.internalValue = value;
  }
  public resetPciDevices() {
    this._pciDevices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciDevicesInput() {
    return this._pciDevices.internalValue;
  }

  // resource_pool - computed: false, optional: true, required: false
  private _resourcePool?: string; 
  public get resourcePool() {
    return this.getStringAttribute('resource_pool');
  }
  public set resourcePool(value: string) {
    this._resourcePool = value;
  }
  public resetResourcePool() {
    this._resourcePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolInput() {
    return this._resourcePool;
  }

  // start_on_create - computed: true, optional: true, required: false
  private _startOnCreate?: boolean | cdktf.IResolvable; 
  public get startOnCreate() {
    return this.getBooleanAttribute('start_on_create');
  }
  public set startOnCreate(value: boolean | cdktf.IResolvable) {
    this._startOnCreate = value;
  }
  public resetStartOnCreate() {
    this._startOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startOnCreateInput() {
    return this._startOnCreate;
  }

  // start_on_node_boot - computed: true, optional: true, required: false
  private _startOnNodeBoot?: boolean | cdktf.IResolvable; 
  public get startOnNodeBoot() {
    return this.getBooleanAttribute('start_on_node_boot');
  }
  public set startOnNodeBoot(value: boolean | cdktf.IResolvable) {
    this._startOnNodeBoot = value;
  }
  public resetStartOnNodeBoot() {
    this._startOnNodeBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startOnNodeBootInput() {
    return this._startOnNodeBoot;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualMachineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualMachineTimeouts | cdktf.IResolvable) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent: virtualMachineAgentToTerraform(this._agent.internalValue),
      bios: cdktf.stringToTerraform(this._bios),
      clone: virtualMachineCloneToTerraform(this._clone.internalValue),
      cloud_init: virtualMachineCloudInitToTerraform(this._cloudInit.internalValue),
      cpu: virtualMachineCpuToTerraform(this._cpu.internalValue),
      description: cdktf.stringToTerraform(this._description),
      disks: cdktf.listMapper(virtualMachineDisksToTerraform, false)(this._disks.internalValue),
      id: cdktf.numberToTerraform(this._id),
      iso: virtualMachineIsoToTerraform(this._iso.internalValue),
      keyboard_layout: cdktf.stringToTerraform(this._keyboardLayout),
      kvm_arguments: cdktf.stringToTerraform(this._kvmArguments),
      machine_type: cdktf.stringToTerraform(this._machineType),
      memory: virtualMachineMemoryToTerraform(this._memory.internalValue),
      name: cdktf.stringToTerraform(this._name),
      network_interfaces: cdktf.listMapper(virtualMachineNetworkInterfacesToTerraform, false)(this._networkInterfaces.internalValue),
      node: cdktf.stringToTerraform(this._node),
      pci_devices: cdktf.listMapper(virtualMachinePciDevicesToTerraform, false)(this._pciDevices.internalValue),
      resource_pool: cdktf.stringToTerraform(this._resourcePool),
      start_on_create: cdktf.booleanToTerraform(this._startOnCreate),
      start_on_node_boot: cdktf.booleanToTerraform(this._startOnNodeBoot),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      timeouts: virtualMachineTimeoutsToTerraform(this._timeouts.internalValue),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
