// https://www.terraform.io/docs/providers/proxmox/d/virtual_machines
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProxmoxVirtualMachinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/d/virtual_machines#filters DataProxmoxVirtualMachines#filters}
  */
  readonly filters?: DataProxmoxVirtualMachinesFilters[] | cdktf.IResolvable;
}
export interface DataProxmoxVirtualMachinesFilters {
  /**
  * The name of the attribute to filter on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/d/virtual_machines#name DataProxmoxVirtualMachines#name}
  */
  readonly name: string;
  /**
  * The value(s) to be used in the filter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/d/virtual_machines#values DataProxmoxVirtualMachines#values}
  */
  readonly values: string[];
}

export function dataProxmoxVirtualMachinesFiltersToTerraform(struct?: DataProxmoxVirtualMachinesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class DataProxmoxVirtualMachinesFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxVirtualMachinesFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualMachinesFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataProxmoxVirtualMachinesFiltersList extends cdktf.ComplexList {
  public internalValue? : DataProxmoxVirtualMachinesFilters[] | cdktf.IResolvable

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
  public get(index: number): DataProxmoxVirtualMachinesFiltersOutputReference {
    return new DataProxmoxVirtualMachinesFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProxmoxVirtualMachinesVirtualMachinesAgent {
}

export function dataProxmoxVirtualMachinesVirtualMachinesAgentToTerraform(struct?: DataProxmoxVirtualMachinesVirtualMachinesAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataProxmoxVirtualMachinesVirtualMachinesAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxVirtualMachinesVirtualMachinesAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualMachinesVirtualMachinesAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_fstrim - computed: true, optional: false, required: false
  public get useFstrim() {
    return this.getBooleanAttribute('use_fstrim');
  }
}
export interface DataProxmoxVirtualMachinesVirtualMachinesCloudInitDns {
}

export function dataProxmoxVirtualMachinesVirtualMachinesCloudInitDnsToTerraform(struct?: DataProxmoxVirtualMachinesVirtualMachinesCloudInitDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataProxmoxVirtualMachinesVirtualMachinesCloudInitDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxVirtualMachinesVirtualMachinesCloudInitDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualMachinesVirtualMachinesCloudInitDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // nameserver - computed: true, optional: false, required: false
  public get nameserver() {
    return this.getStringAttribute('nameserver');
  }
}
export interface DataProxmoxVirtualMachinesVirtualMachinesCloudInitIpV4 {
}

export function dataProxmoxVirtualMachinesVirtualMachinesCloudInitIpV4ToTerraform(struct?: DataProxmoxVirtualMachinesVirtualMachinesCloudInitIpV4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataProxmoxVirtualMachinesVirtualMachinesCloudInitIpV4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxVirtualMachinesVirtualMachinesCloudInitIpV4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualMachinesVirtualMachinesCloudInitIpV4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // dhcp - computed: true, optional: false, required: false
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
}
export interface DataProxmoxVirtualMachinesVirtualMachinesCloudInitIpV6 {
}

export function dataProxmoxVirtualMachinesVirtualMachinesCloudInitIpV6ToTerraform(struct?: DataProxmoxVirtualMachinesVirtualMachinesCloudInitIpV6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataProxmoxVirtualMachinesVirtualMachinesCloudInitIpV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxVirtualMachinesVirtualMachinesCloudInitIpV6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualMachinesVirtualMachinesCloudInitIpV6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // dhcp - computed: true, optional: false, required: false
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
}
export interface DataProxmoxVirtualMachinesVirtualMachinesCloudInitIp {
}

export function dataProxmoxVirtualMachinesVirtualMachinesCloudInitIpToTerraform(struct?: DataProxmoxVirtualMachinesVirtualMachinesCloudInitIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataProxmoxVirtualMachinesVirtualMachinesCloudInitIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxVirtualMachinesVirtualMachinesCloudInitIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualMachinesVirtualMachinesCloudInitIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getNumberAttribute('position');
  }

  // v4 - computed: true, optional: false, required: false
  private _v4 = new DataProxmoxVirtualMachinesVirtualMachinesCloudInitIpV4OutputReference(this, "v4");
  public get v4() {
    return this._v4;
  }

  // v6 - computed: true, optional: false, required: false
  private _v6 = new DataProxmoxVirtualMachinesVirtualMachinesCloudInitIpV6OutputReference(this, "v6");
  public get v6() {
    return this._v6;
  }
}

export class DataProxmoxVirtualMachinesVirtualMachinesCloudInitIpList extends cdktf.ComplexList {

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
  public get(index: number): DataProxmoxVirtualMachinesVirtualMachinesCloudInitIpOutputReference {
    return new DataProxmoxVirtualMachinesVirtualMachinesCloudInitIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProxmoxVirtualMachinesVirtualMachinesCloudInitUser {
}

export function dataProxmoxVirtualMachinesVirtualMachinesCloudInitUserToTerraform(struct?: DataProxmoxVirtualMachinesVirtualMachinesCloudInitUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataProxmoxVirtualMachinesVirtualMachinesCloudInitUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxVirtualMachinesVirtualMachinesCloudInitUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualMachinesVirtualMachinesCloudInitUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // public_keys - computed: true, optional: false, required: false
  public get publicKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('public_keys'));
  }
}
export interface DataProxmoxVirtualMachinesVirtualMachinesCloudInit {
}

export function dataProxmoxVirtualMachinesVirtualMachinesCloudInitToTerraform(struct?: DataProxmoxVirtualMachinesVirtualMachinesCloudInit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataProxmoxVirtualMachinesVirtualMachinesCloudInitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxVirtualMachinesVirtualMachinesCloudInit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualMachinesVirtualMachinesCloudInit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new DataProxmoxVirtualMachinesVirtualMachinesCloudInitDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataProxmoxVirtualMachinesVirtualMachinesCloudInitIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }

  // user - computed: true, optional: false, required: false
  private _user = new DataProxmoxVirtualMachinesVirtualMachinesCloudInitUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
}
export interface DataProxmoxVirtualMachinesVirtualMachinesCpu {
}

export function dataProxmoxVirtualMachinesVirtualMachinesCpuToTerraform(struct?: DataProxmoxVirtualMachinesVirtualMachinesCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataProxmoxVirtualMachinesVirtualMachinesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxVirtualMachinesVirtualMachinesCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualMachinesVirtualMachinesCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // cores - computed: true, optional: false, required: false
  public get cores() {
    return this.getNumberAttribute('cores');
  }

  // cpu_units - computed: true, optional: false, required: false
  public get cpuUnits() {
    return this.getNumberAttribute('cpu_units');
  }

  // emulated_type - computed: true, optional: false, required: false
  public get emulatedType() {
    return this.getStringAttribute('emulated_type');
  }

  // sockets - computed: true, optional: false, required: false
  public get sockets() {
    return this.getNumberAttribute('sockets');
  }
}
export interface DataProxmoxVirtualMachinesVirtualMachinesDisksSpeedLimits {
}

export function dataProxmoxVirtualMachinesVirtualMachinesDisksSpeedLimitsToTerraform(struct?: DataProxmoxVirtualMachinesVirtualMachinesDisksSpeedLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataProxmoxVirtualMachinesVirtualMachinesDisksSpeedLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxVirtualMachinesVirtualMachinesDisksSpeedLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualMachinesVirtualMachinesDisksSpeedLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getNumberAttribute('read');
  }

  // read_burstable - computed: true, optional: false, required: false
  public get readBurstable() {
    return this.getNumberAttribute('read_burstable');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getNumberAttribute('write');
  }

  // write_burstable - computed: true, optional: false, required: false
  public get writeBurstable() {
    return this.getNumberAttribute('write_burstable');
  }
}
export interface DataProxmoxVirtualMachinesVirtualMachinesDisks {
}

export function dataProxmoxVirtualMachinesVirtualMachinesDisksToTerraform(struct?: DataProxmoxVirtualMachinesVirtualMachinesDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataProxmoxVirtualMachinesVirtualMachinesDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxVirtualMachinesVirtualMachinesDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualMachinesVirtualMachinesDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // discard - computed: true, optional: false, required: false
  public get discard() {
    return this.getBooleanAttribute('discard');
  }

  // file_format - computed: true, optional: false, required: false
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }

  // interface_type - computed: true, optional: false, required: false
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getNumberAttribute('position');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // speed_limits - computed: true, optional: false, required: false
  private _speedLimits = new DataProxmoxVirtualMachinesVirtualMachinesDisksSpeedLimitsOutputReference(this, "speed_limits");
  public get speedLimits() {
    return this._speedLimits;
  }

  // ssd_emulation - computed: true, optional: false, required: false
  public get ssdEmulation() {
    return this.getBooleanAttribute('ssd_emulation');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getStringAttribute('storage');
  }

  // use_iothread - computed: true, optional: false, required: false
  public get useIothread() {
    return this.getBooleanAttribute('use_iothread');
  }
}

export class DataProxmoxVirtualMachinesVirtualMachinesDisksList extends cdktf.ComplexList {

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
  public get(index: number): DataProxmoxVirtualMachinesVirtualMachinesDisksOutputReference {
    return new DataProxmoxVirtualMachinesVirtualMachinesDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProxmoxVirtualMachinesVirtualMachinesMemory {
}

export function dataProxmoxVirtualMachinesVirtualMachinesMemoryToTerraform(struct?: DataProxmoxVirtualMachinesVirtualMachinesMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataProxmoxVirtualMachinesVirtualMachinesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxVirtualMachinesVirtualMachinesMemory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualMachinesVirtualMachinesMemory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dedicated - computed: true, optional: false, required: false
  public get dedicated() {
    return this.getNumberAttribute('dedicated');
  }

  // floating - computed: true, optional: false, required: false
  public get floating() {
    return this.getNumberAttribute('floating');
  }

  // shared - computed: true, optional: false, required: false
  public get shared() {
    return this.getNumberAttribute('shared');
  }
}
export interface DataProxmoxVirtualMachinesVirtualMachinesNetworkInterfaces {
}

export function dataProxmoxVirtualMachinesVirtualMachinesNetworkInterfacesToTerraform(struct?: DataProxmoxVirtualMachinesVirtualMachinesNetworkInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataProxmoxVirtualMachinesVirtualMachinesNetworkInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxVirtualMachinesVirtualMachinesNetworkInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualMachinesVirtualMachinesNetworkInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bridge - computed: true, optional: false, required: false
  public get bridge() {
    return this.getStringAttribute('bridge');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getNumberAttribute('position');
  }

  // rate_limit - computed: true, optional: false, required: false
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }

  // use_firewall - computed: true, optional: false, required: false
  public get useFirewall() {
    return this.getBooleanAttribute('use_firewall');
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
}

export class DataProxmoxVirtualMachinesVirtualMachinesNetworkInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataProxmoxVirtualMachinesVirtualMachinesNetworkInterfacesOutputReference {
    return new DataProxmoxVirtualMachinesVirtualMachinesNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProxmoxVirtualMachinesVirtualMachinesPciDevices {
}

export function dataProxmoxVirtualMachinesVirtualMachinesPciDevicesToTerraform(struct?: DataProxmoxVirtualMachinesVirtualMachinesPciDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataProxmoxVirtualMachinesVirtualMachinesPciDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxVirtualMachinesVirtualMachinesPciDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualMachinesVirtualMachinesPciDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mdev - computed: true, optional: false, required: false
  public get mdev() {
    return this.getStringAttribute('mdev');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pcie - computed: true, optional: false, required: false
  public get pcie() {
    return this.getBooleanAttribute('pcie');
  }

  // primary_gpu - computed: true, optional: false, required: false
  public get primaryGpu() {
    return this.getBooleanAttribute('primary_gpu');
  }

  // rom_file - computed: true, optional: false, required: false
  public get romFile() {
    return this.getStringAttribute('rom_file');
  }

  // rombar - computed: true, optional: false, required: false
  public get rombar() {
    return this.getBooleanAttribute('rombar');
  }
}

export class DataProxmoxVirtualMachinesVirtualMachinesPciDevicesList extends cdktf.ComplexList {

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
  public get(index: number): DataProxmoxVirtualMachinesVirtualMachinesPciDevicesOutputReference {
    return new DataProxmoxVirtualMachinesVirtualMachinesPciDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProxmoxVirtualMachinesVirtualMachines {
}

export function dataProxmoxVirtualMachinesVirtualMachinesToTerraform(struct?: DataProxmoxVirtualMachinesVirtualMachines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataProxmoxVirtualMachinesVirtualMachinesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxVirtualMachinesVirtualMachines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualMachinesVirtualMachines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent - computed: true, optional: false, required: false
  private _agent = new DataProxmoxVirtualMachinesVirtualMachinesAgentOutputReference(this, "agent");
  public get agent() {
    return this._agent;
  }

  // bios - computed: true, optional: false, required: false
  public get bios() {
    return this.getStringAttribute('bios');
  }

  // cloud_init - computed: true, optional: false, required: false
  private _cloudInit = new DataProxmoxVirtualMachinesVirtualMachinesCloudInitOutputReference(this, "cloud_init");
  public get cloudInit() {
    return this._cloudInit;
  }

  // cpu - computed: true, optional: false, required: false
  private _cpu = new DataProxmoxVirtualMachinesVirtualMachinesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disks - computed: true, optional: false, required: false
  private _disks = new DataProxmoxVirtualMachinesVirtualMachinesDisksList(this, "disks", true);
  public get disks() {
    return this._disks;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // keyboard_layout - computed: true, optional: false, required: false
  public get keyboardLayout() {
    return this.getStringAttribute('keyboard_layout');
  }

  // kvm_arguments - computed: true, optional: false, required: false
  public get kvmArguments() {
    return this.getStringAttribute('kvm_arguments');
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // memory - computed: true, optional: false, required: false
  private _memory = new DataProxmoxVirtualMachinesVirtualMachinesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_interfaces - computed: true, optional: false, required: false
  private _networkInterfaces = new DataProxmoxVirtualMachinesVirtualMachinesNetworkInterfacesList(this, "network_interfaces", true);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }

  // node - computed: true, optional: false, required: false
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }

  // pci_devices - computed: true, optional: false, required: false
  private _pciDevices = new DataProxmoxVirtualMachinesVirtualMachinesPciDevicesList(this, "pci_devices", true);
  public get pciDevices() {
    return this._pciDevices;
  }

  // resource_pool - computed: true, optional: false, required: false
  public get resourcePool() {
    return this.getStringAttribute('resource_pool');
  }

  // start_on_node_boot - computed: true, optional: false, required: false
  public get startOnNodeBoot() {
    return this.getBooleanAttribute('start_on_node_boot');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataProxmoxVirtualMachinesVirtualMachinesList extends cdktf.ComplexList {

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
  public get(index: number): DataProxmoxVirtualMachinesVirtualMachinesOutputReference {
    return new DataProxmoxVirtualMachinesVirtualMachinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/proxmox/d/virtual_machines proxmox_virtual_machines}
*/
export class DataProxmoxVirtualMachines extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_machines";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/proxmox/d/virtual_machines proxmox_virtual_machines} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProxmoxVirtualMachinesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataProxmoxVirtualMachinesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_machines',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.0.11',
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
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters = new DataProxmoxVirtualMachinesFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataProxmoxVirtualMachinesFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // virtual_machines - computed: true, optional: false, required: false
  private _virtualMachines = new DataProxmoxVirtualMachinesVirtualMachinesList(this, "virtual_machines", true);
  public get virtualMachines() {
    return this._virtualMachines;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.listMapper(dataProxmoxVirtualMachinesFiltersToTerraform, false)(this._filters.internalValue),
    };
  }
}
