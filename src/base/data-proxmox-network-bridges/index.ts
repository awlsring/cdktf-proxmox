// https://www.terraform.io/docs/providers/proxmox/d/network_bridges
// generated from terraform resource schema

import * as cdktf from 'cdktf';
import { Construct } from 'constructs';

// Configuration

export interface DataProxmoxNetworkBridgesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/d/network_bridges#filters DataProxmoxNetworkBridges#filters}
  */
  readonly filters?: DataProxmoxNetworkBridgesFilters[] | cdktf.IResolvable;
}
export interface DataProxmoxNetworkBridgesFilters {
  /**
  * The name of the attribute to filter on.
  *
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/d/network_bridges#name DataProxmoxNetworkBridges#name}
  */
  readonly name: string;
  /**
  * The value(s) to be used in the filter.
  *
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/d/network_bridges#values DataProxmoxNetworkBridges#values}
  */
  readonly values: string[];
}

export function dataProxmoxNetworkBridgesFiltersToTerraform(struct?: DataProxmoxNetworkBridgesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error('A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration');
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  };
}

export class DataProxmoxNetworkBridgesFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxNetworkBridgesFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProxmoxNetworkBridgesFilters | cdktf.IResolvable | undefined) {
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

export class DataProxmoxNetworkBridgesFiltersList extends cdktf.ComplexList {
  public internalValue? : DataProxmoxNetworkBridgesFilters[] | cdktf.IResolvable;

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
  public get(index: number): DataProxmoxNetworkBridgesFiltersOutputReference {
    return new DataProxmoxNetworkBridgesFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProxmoxNetworkBridgesNetworkBridgesIpv4 {
}

export function dataProxmoxNetworkBridgesNetworkBridgesIpv4ToTerraform(struct?: DataProxmoxNetworkBridgesNetworkBridgesIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error('A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration');
  }
  return {
  };
}

export class DataProxmoxNetworkBridgesNetworkBridgesIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxNetworkBridgesNetworkBridgesIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxNetworkBridgesNetworkBridgesIpv4 | undefined) {
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

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
}
export interface DataProxmoxNetworkBridgesNetworkBridgesIpv6 {
}

export function dataProxmoxNetworkBridgesNetworkBridgesIpv6ToTerraform(struct?: DataProxmoxNetworkBridgesNetworkBridgesIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error('A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration');
  }
  return {
  };
}

export class DataProxmoxNetworkBridgesNetworkBridgesIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxNetworkBridgesNetworkBridgesIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxNetworkBridgesNetworkBridgesIpv6 | undefined) {
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

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
}
export interface DataProxmoxNetworkBridgesNetworkBridges {
  /**
  * Comment in the bond.
  *
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/d/network_bridges#comments DataProxmoxNetworkBridges#comments}
  */
  readonly comments?: string;
  /**
  * The ipv4 gateway.
  *
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/d/network_bridges#ipv4_gateway DataProxmoxNetworkBridges#ipv4_gateway}
  */
  readonly ipv4Gateway?: string;
  /**
  * The ipv6 gateway.
  *
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/d/network_bridges#ipv6_gateway DataProxmoxNetworkBridges#ipv6_gateway}
  */
  readonly ipv6Gateway?: string;
}

export function dataProxmoxNetworkBridgesNetworkBridgesToTerraform(struct?: DataProxmoxNetworkBridgesNetworkBridges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error('A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration');
  }
  return {
    comments: cdktf.stringToTerraform(struct!.comments),
    ipv4_gateway: cdktf.stringToTerraform(struct!.ipv4Gateway),
    ipv6_gateway: cdktf.stringToTerraform(struct!.ipv6Gateway),
  };
}

export class DataProxmoxNetworkBridgesNetworkBridgesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxNetworkBridgesNetworkBridges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comments !== undefined) {
      hasAnyValues = true;
      internalValueResult.comments = this._comments;
    }
    if (this._ipv4Gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Gateway = this._ipv4Gateway;
    }
    if (this._ipv6Gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Gateway = this._ipv6Gateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxNetworkBridgesNetworkBridges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comments = undefined;
      this._ipv4Gateway = undefined;
      this._ipv6Gateway = undefined;
    } else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comments = value.comments;
      this._ipv4Gateway = value.ipv4Gateway;
      this._ipv6Gateway = value.ipv6Gateway;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // autostart - computed: true, optional: false, required: false
  public get autostart() {
    return this.getBooleanAttribute('autostart');
  }

  // comments - computed: true, optional: true, required: false
  private _comments?: string;
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: true, optional: false, required: false
  public get interfaces() {
    return this.getListAttribute('interfaces');
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ipv4');
  }

  // ipv4_gateway - computed: true, optional: true, required: false
  private _ipv4Gateway?: string;
  public get ipv4Gateway() {
    return this.getStringAttribute('ipv4_gateway');
  }
  public set ipv4Gateway(value: string) {
    this._ipv4Gateway = value;
  }
  public resetIpv4Gateway() {
    this._ipv4Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4GatewayInput() {
    return this._ipv4Gateway;
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ipv6');
  }

  // ipv6_gateway - computed: true, optional: true, required: false
  private _ipv6Gateway?: string;
  public get ipv6Gateway() {
    return this.getStringAttribute('ipv6_gateway');
  }
  public set ipv6Gateway(value: string) {
    this._ipv6Gateway = value;
  }
  public resetIpv6Gateway() {
    this._ipv6Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GatewayInput() {
    return this._ipv6Gateway;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node - computed: true, optional: false, required: false
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }

  // vlan_aware - computed: true, optional: false, required: false
  public get vlanAware() {
    return this.getBooleanAttribute('vlan_aware');
  }
}

export class DataProxmoxNetworkBridgesNetworkBridgesList extends cdktf.ComplexList {
  public internalValue? : DataProxmoxNetworkBridgesNetworkBridges[] | cdktf.IResolvable;

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
  public get(index: number): DataProxmoxNetworkBridgesNetworkBridgesOutputReference {
    return new DataProxmoxNetworkBridgesNetworkBridgesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/proxmox/d/network_bridges proxmox_network_bridges}
*/
export class DataProxmoxNetworkBridges extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = 'proxmox_network_bridges';

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/proxmox/d/network_bridges proxmox_network_bridges} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProxmoxNetworkBridgesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataProxmoxNetworkBridgesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'proxmox_network_bridges',
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
  private _filters = new DataProxmoxNetworkBridgesFiltersList(this, 'filters', false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataProxmoxNetworkBridgesFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // network_bridges - computed: true, optional: false, required: false
  private _networkBridges = new DataProxmoxNetworkBridgesNetworkBridgesList(this, 'network_bridges', false);
  public get networkBridges() {
    return this._networkBridges;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.listMapper(dataProxmoxNetworkBridgesFiltersToTerraform, false)(this._filters.internalValue),
    };
  }
}
