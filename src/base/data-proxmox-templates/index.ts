// https://www.terraform.io/docs/providers/proxmox/d/templates
// generated from terraform resource schema

import * as cdktf from 'cdktf';
import { Construct } from 'constructs';

// Configuration

export interface DataProxmoxTemplatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/d/templates#filters DataProxmoxTemplates#filters}
  */
  readonly filters?: DataProxmoxTemplatesFilters[] | cdktf.IResolvable;
}
export interface DataProxmoxTemplatesFilters {
  /**
  * The name of the attribute to filter on.
  *
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/d/templates#name DataProxmoxTemplates#name}
  */
  readonly name: string;
  /**
  * The value(s) to be used in the filter.
  *
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/d/templates#values DataProxmoxTemplates#values}
  */
  readonly values: string[];
}

export function dataProxmoxTemplatesFiltersToTerraform(struct?: DataProxmoxTemplatesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error('A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration');
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  };
}

export class DataProxmoxTemplatesFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxTemplatesFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProxmoxTemplatesFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    } else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    } else {
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

export class DataProxmoxTemplatesFiltersList extends cdktf.ComplexList {
  public internalValue? : DataProxmoxTemplatesFilters[] | cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataProxmoxTemplatesFiltersOutputReference {
    return new DataProxmoxTemplatesFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProxmoxTemplatesTemplatesAgent {
}

export function dataProxmoxTemplatesTemplatesAgentToTerraform(struct?: DataProxmoxTemplatesTemplatesAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error('A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration');
  }
  return {
  };
}

export class DataProxmoxTemplatesTemplatesAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxTemplatesTemplatesAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxTemplatesTemplatesAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    } else {
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
export interface DataProxmoxTemplatesTemplatesCloudInitDns {
}

export function dataProxmoxTemplatesTemplatesCloudInitDnsToTerraform(struct?: DataProxmoxTemplatesTemplatesCloudInitDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error('A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration');
  }
  return {
  };
}

export class DataProxmoxTemplatesTemplatesCloudInitDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxTemplatesTemplatesCloudInitDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxTemplatesTemplatesCloudInitDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    } else {
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
export interface DataProxmoxTemplatesTemplatesCloudInitIpV4 {
}

export function dataProxmoxTemplatesTemplatesCloudInitIpV4ToTerraform(struct?: DataProxmoxTemplatesTemplatesCloudInitIpV4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error('A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration');
  }
  return {
  };
}

export class DataProxmoxTemplatesTemplatesCloudInitIpV4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxTemplatesTemplatesCloudInitIpV4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxTemplatesTemplatesCloudInitIpV4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    } else {
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
export interface DataProxmoxTemplatesTemplatesCloudInitIpV6 {
}

export function dataProxmoxTemplatesTemplatesCloudInitIpV6ToTerraform(struct?: DataProxmoxTemplatesTemplatesCloudInitIpV6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error('A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration');
  }
  return {
  };
}

export class DataProxmoxTemplatesTemplatesCloudInitIpV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxTemplatesTemplatesCloudInitIpV6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxTemplatesTemplatesCloudInitIpV6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    } else {
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
export interface DataProxmoxTemplatesTemplatesCloudInitIp {
}

export function dataProxmoxTemplatesTemplatesCloudInitIpToTerraform(struct?: DataProxmoxTemplatesTemplatesCloudInitIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error('A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration');
  }
  return {
  };
}

export class DataProxmoxTemplatesTemplatesCloudInitIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxTemplatesTemplatesCloudInitIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxTemplatesTemplatesCloudInitIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    } else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getNumberAttribute('position');
  }

  // v4 - computed: true, optional: false, required: false
  private _v4 = new DataProxmoxTemplatesTemplatesCloudInitIpV4OutputReference(this, 'v4');
  public get v4() {
    return this._v4;
  }

  // v6 - computed: true, optional: false, required: false
  private _v6 = new DataProxmoxTemplatesTemplatesCloudInitIpV6OutputReference(this, 'v6');
  public get v6() {
    return this._v6;
  }
}

export class DataProxmoxTemplatesTemplatesCloudInitIpList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataProxmoxTemplatesTemplatesCloudInitIpOutputReference {
    return new DataProxmoxTemplatesTemplatesCloudInitIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProxmoxTemplatesTemplatesCloudInitUser {
}

export function dataProxmoxTemplatesTemplatesCloudInitUserToTerraform(struct?: DataProxmoxTemplatesTemplatesCloudInitUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error('A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration');
  }
  return {
  };
}

export class DataProxmoxTemplatesTemplatesCloudInitUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxTemplatesTemplatesCloudInitUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxTemplatesTemplatesCloudInitUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    } else {
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
export interface DataProxmoxTemplatesTemplatesCloudInit {
}

export function dataProxmoxTemplatesTemplatesCloudInitToTerraform(struct?: DataProxmoxTemplatesTemplatesCloudInit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error('A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration');
  }
  return {
  };
}

export class DataProxmoxTemplatesTemplatesCloudInitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxTemplatesTemplatesCloudInit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxTemplatesTemplatesCloudInit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    } else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new DataProxmoxTemplatesTemplatesCloudInitDnsOutputReference(this, 'dns');
  public get dns() {
    return this._dns;
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataProxmoxTemplatesTemplatesCloudInitIpList(this, 'ip', true);
  public get ip() {
    return this._ip;
  }

  // user - computed: true, optional: false, required: false
  private _user = new DataProxmoxTemplatesTemplatesCloudInitUserOutputReference(this, 'user');
  public get user() {
    return this._user;
  }
}
export interface DataProxmoxTemplatesTemplatesCpu {
}

export function dataProxmoxTemplatesTemplatesCpuToTerraform(struct?: DataProxmoxTemplatesTemplatesCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error('A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration');
  }
  return {
  };
}

export class DataProxmoxTemplatesTemplatesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxTemplatesTemplatesCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxTemplatesTemplatesCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    } else {
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
export interface DataProxmoxTemplatesTemplatesDisksSpeedLimits {
}

export function dataProxmoxTemplatesTemplatesDisksSpeedLimitsToTerraform(struct?: DataProxmoxTemplatesTemplatesDisksSpeedLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error('A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration');
  }
  return {
  };
}

export class DataProxmoxTemplatesTemplatesDisksSpeedLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxTemplatesTemplatesDisksSpeedLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxTemplatesTemplatesDisksSpeedLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    } else {
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
export interface DataProxmoxTemplatesTemplatesDisks {
}

export function dataProxmoxTemplatesTemplatesDisksToTerraform(struct?: DataProxmoxTemplatesTemplatesDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error('A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration');
  }
  return {
  };
}

export class DataProxmoxTemplatesTemplatesDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxTemplatesTemplatesDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxTemplatesTemplatesDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    } else {
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
  private _speedLimits = new DataProxmoxTemplatesTemplatesDisksSpeedLimitsOutputReference(this, 'speed_limits');
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

export class DataProxmoxTemplatesTemplatesDisksList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataProxmoxTemplatesTemplatesDisksOutputReference {
    return new DataProxmoxTemplatesTemplatesDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProxmoxTemplatesTemplatesMemory {
}

export function dataProxmoxTemplatesTemplatesMemoryToTerraform(struct?: DataProxmoxTemplatesTemplatesMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error('A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration');
  }
  return {
  };
}

export class DataProxmoxTemplatesTemplatesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxTemplatesTemplatesMemory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxTemplatesTemplatesMemory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    } else {
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
export interface DataProxmoxTemplatesTemplatesNetworkInterfaces {
}

export function dataProxmoxTemplatesTemplatesNetworkInterfacesToTerraform(struct?: DataProxmoxTemplatesTemplatesNetworkInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error('A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration');
  }
  return {
  };
}

export class DataProxmoxTemplatesTemplatesNetworkInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxTemplatesTemplatesNetworkInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxTemplatesTemplatesNetworkInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    } else {
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

export class DataProxmoxTemplatesTemplatesNetworkInterfacesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataProxmoxTemplatesTemplatesNetworkInterfacesOutputReference {
    return new DataProxmoxTemplatesTemplatesNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProxmoxTemplatesTemplatesPciDevices {
}

export function dataProxmoxTemplatesTemplatesPciDevicesToTerraform(struct?: DataProxmoxTemplatesTemplatesPciDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error('A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration');
  }
  return {
  };
}

export class DataProxmoxTemplatesTemplatesPciDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxTemplatesTemplatesPciDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxTemplatesTemplatesPciDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    } else {
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

export class DataProxmoxTemplatesTemplatesPciDevicesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataProxmoxTemplatesTemplatesPciDevicesOutputReference {
    return new DataProxmoxTemplatesTemplatesPciDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProxmoxTemplatesTemplates {
}

export function dataProxmoxTemplatesTemplatesToTerraform(struct?: DataProxmoxTemplatesTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error('A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration');
  }
  return {
  };
}

export class DataProxmoxTemplatesTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxTemplatesTemplates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxTemplatesTemplates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    } else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent - computed: true, optional: false, required: false
  private _agent = new DataProxmoxTemplatesTemplatesAgentOutputReference(this, 'agent');
  public get agent() {
    return this._agent;
  }

  // bios - computed: true, optional: false, required: false
  public get bios() {
    return this.getStringAttribute('bios');
  }

  // cloud_init - computed: true, optional: false, required: false
  private _cloudInit = new DataProxmoxTemplatesTemplatesCloudInitOutputReference(this, 'cloud_init');
  public get cloudInit() {
    return this._cloudInit;
  }

  // cpu - computed: true, optional: false, required: false
  private _cpu = new DataProxmoxTemplatesTemplatesCpuOutputReference(this, 'cpu');
  public get cpu() {
    return this._cpu;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disks - computed: true, optional: false, required: false
  private _disks = new DataProxmoxTemplatesTemplatesDisksList(this, 'disks', true);
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
  private _memory = new DataProxmoxTemplatesTemplatesMemoryOutputReference(this, 'memory');
  public get memory() {
    return this._memory;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_interfaces - computed: true, optional: false, required: false
  private _networkInterfaces = new DataProxmoxTemplatesTemplatesNetworkInterfacesList(this, 'network_interfaces', true);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }

  // node - computed: true, optional: false, required: false
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }

  // pci_devices - computed: true, optional: false, required: false
  private _pciDevices = new DataProxmoxTemplatesTemplatesPciDevicesList(this, 'pci_devices', true);
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

export class DataProxmoxTemplatesTemplatesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataProxmoxTemplatesTemplatesOutputReference {
    return new DataProxmoxTemplatesTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/proxmox/d/templates proxmox_templates}
*/
export class DataProxmoxTemplates extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = 'proxmox_templates';

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/proxmox/d/templates proxmox_templates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProxmoxTemplatesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataProxmoxTemplatesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'proxmox_templates',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.0.8',
        providerVersionConstraint: '~> 0.0.0',
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach,
    });
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters = new DataProxmoxTemplatesFiltersList(this, 'filters', false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataProxmoxTemplatesFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // templates - computed: true, optional: false, required: false
  private _templates = new DataProxmoxTemplatesTemplatesList(this, 'templates', true);
  public get templates() {
    return this._templates;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.listMapper(dataProxmoxTemplatesFiltersToTerraform, false)(this._filters.internalValue),
    };
  }
}
