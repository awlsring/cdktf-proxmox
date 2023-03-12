// https://www.terraform.io/docs/providers/proxmox/d/zfs_storage_classes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProxmoxZfsStorageClassesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/d/zfs_storage_classes#filters DataProxmoxZfsStorageClasses#filters}
  */
  readonly filters?: DataProxmoxZfsStorageClassesFilters[] | cdktf.IResolvable;
}
export interface DataProxmoxZfsStorageClassesFilters {
  /**
  * The name of the attribute to filter on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/d/zfs_storage_classes#name DataProxmoxZfsStorageClasses#name}
  */
  readonly name: string;
  /**
  * The value(s) to be used in the filter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/d/zfs_storage_classes#values DataProxmoxZfsStorageClasses#values}
  */
  readonly values: string[];
}

export function dataProxmoxZfsStorageClassesFiltersToTerraform(struct?: DataProxmoxZfsStorageClassesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class DataProxmoxZfsStorageClassesFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxZfsStorageClassesFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProxmoxZfsStorageClassesFilters | cdktf.IResolvable | undefined) {
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

export class DataProxmoxZfsStorageClassesFiltersList extends cdktf.ComplexList {
  public internalValue? : DataProxmoxZfsStorageClassesFilters[] | cdktf.IResolvable

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
  public get(index: number): DataProxmoxZfsStorageClassesFiltersOutputReference {
    return new DataProxmoxZfsStorageClassesFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProxmoxZfsStorageClassesZfsStorageClasses {
}

export function dataProxmoxZfsStorageClassesZfsStorageClassesToTerraform(struct?: DataProxmoxZfsStorageClassesZfsStorageClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataProxmoxZfsStorageClassesZfsStorageClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxZfsStorageClassesZfsStorageClasses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxZfsStorageClassesZfsStorageClasses | undefined) {
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

  // mount - computed: true, optional: false, required: false
  public get mount() {
    return this.getStringAttribute('mount');
  }

  // nodes - computed: true, optional: false, required: false
  public get nodes() {
    return this.getListAttribute('nodes');
  }

  // pool - computed: true, optional: false, required: false
  public get pool() {
    return this.getStringAttribute('pool');
  }
}

export class DataProxmoxZfsStorageClassesZfsStorageClassesList extends cdktf.ComplexList {

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
  public get(index: number): DataProxmoxZfsStorageClassesZfsStorageClassesOutputReference {
    return new DataProxmoxZfsStorageClassesZfsStorageClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/proxmox/d/zfs_storage_classes proxmox_zfs_storage_classes}
*/
export class DataProxmoxZfsStorageClasses extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_zfs_storage_classes";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/proxmox/d/zfs_storage_classes proxmox_zfs_storage_classes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProxmoxZfsStorageClassesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataProxmoxZfsStorageClassesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'proxmox_zfs_storage_classes',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.0.10',
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
  private _filters = new DataProxmoxZfsStorageClassesFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataProxmoxZfsStorageClassesFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // zfs_storage_classes - computed: true, optional: false, required: false
  private _zfsStorageClasses = new DataProxmoxZfsStorageClassesZfsStorageClassesList(this, "zfs_storage_classes", false);
  public get zfsStorageClasses() {
    return this._zfsStorageClasses;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.listMapper(dataProxmoxZfsStorageClassesFiltersToTerraform, false)(this._filters.internalValue),
    };
  }
}
