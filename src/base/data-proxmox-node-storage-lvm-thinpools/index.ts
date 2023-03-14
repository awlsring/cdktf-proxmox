// https://www.terraform.io/docs/providers/proxmox/d/node_storage_lvm_thinpools
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProxmoxNodeStorageLvmThinpoolsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/d/node_storage_lvm_thinpools#filters DataProxmoxNodeStorageLvmThinpools#filters}
  */
  readonly filters?: DataProxmoxNodeStorageLvmThinpoolsFilters[] | cdktf.IResolvable;
}
export interface DataProxmoxNodeStorageLvmThinpoolsFilters {
  /**
  * The name of the attribute to filter on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/d/node_storage_lvm_thinpools#name DataProxmoxNodeStorageLvmThinpools#name}
  */
  readonly name: string;
  /**
  * The value(s) to be used in the filter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/d/node_storage_lvm_thinpools#values DataProxmoxNodeStorageLvmThinpools#values}
  */
  readonly values: string[];
}

export function dataProxmoxNodeStorageLvmThinpoolsFiltersToTerraform(struct?: DataProxmoxNodeStorageLvmThinpoolsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class DataProxmoxNodeStorageLvmThinpoolsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxNodeStorageLvmThinpoolsFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProxmoxNodeStorageLvmThinpoolsFilters | cdktf.IResolvable | undefined) {
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

export class DataProxmoxNodeStorageLvmThinpoolsFiltersList extends cdktf.ComplexList {
  public internalValue? : DataProxmoxNodeStorageLvmThinpoolsFilters[] | cdktf.IResolvable

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
  public get(index: number): DataProxmoxNodeStorageLvmThinpoolsFiltersOutputReference {
    return new DataProxmoxNodeStorageLvmThinpoolsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProxmoxNodeStorageLvmThinpoolsNodeStorageLvmThinpools {
}

export function dataProxmoxNodeStorageLvmThinpoolsNodeStorageLvmThinpoolsToTerraform(struct?: DataProxmoxNodeStorageLvmThinpoolsNodeStorageLvmThinpools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataProxmoxNodeStorageLvmThinpoolsNodeStorageLvmThinpoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxNodeStorageLvmThinpoolsNodeStorageLvmThinpools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxNodeStorageLvmThinpoolsNodeStorageLvmThinpools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_types - computed: true, optional: false, required: false
  public get contentTypes() {
    return this.getListAttribute('content_types');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // node - computed: true, optional: false, required: false
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getStringAttribute('storage');
  }

  // thinpool - computed: true, optional: false, required: false
  public get thinpool() {
    return this.getStringAttribute('thinpool');
  }

  // volume_group - computed: true, optional: false, required: false
  public get volumeGroup() {
    return this.getStringAttribute('volume_group');
  }
}

export class DataProxmoxNodeStorageLvmThinpoolsNodeStorageLvmThinpoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataProxmoxNodeStorageLvmThinpoolsNodeStorageLvmThinpoolsOutputReference {
    return new DataProxmoxNodeStorageLvmThinpoolsNodeStorageLvmThinpoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/proxmox/d/node_storage_lvm_thinpools proxmox_node_storage_lvm_thinpools}
*/
export class DataProxmoxNodeStorageLvmThinpools extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_node_storage_lvm_thinpools";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/proxmox/d/node_storage_lvm_thinpools proxmox_node_storage_lvm_thinpools} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProxmoxNodeStorageLvmThinpoolsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataProxmoxNodeStorageLvmThinpoolsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'proxmox_node_storage_lvm_thinpools',
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
  private _filters = new DataProxmoxNodeStorageLvmThinpoolsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataProxmoxNodeStorageLvmThinpoolsFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // node_storage_lvm_thinpools - computed: true, optional: false, required: false
  private _nodeStorageLvmThinpools = new DataProxmoxNodeStorageLvmThinpoolsNodeStorageLvmThinpoolsList(this, "node_storage_lvm_thinpools", false);
  public get nodeStorageLvmThinpools() {
    return this._nodeStorageLvmThinpools;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.listMapper(dataProxmoxNodeStorageLvmThinpoolsFiltersToTerraform, false)(this._filters.internalValue),
    };
  }
}
