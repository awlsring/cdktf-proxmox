// https://www.terraform.io/docs/providers/proxmox/r/lvm_thinpool_storage_class
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LvmThinpoolStorageClassConfig extends cdktf.TerraformMetaArguments {
  /**
  * The content types that can be stored on this storage class.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/lvm_thinpool_storage_class#content_types LvmThinpoolStorageClass#content_types}
  */
  readonly contentTypes?: string[];
  /**
  * The identifier of the storage class.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/lvm_thinpool_storage_class#id LvmThinpoolStorageClass#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Nodes that implement this storage class.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/lvm_thinpool_storage_class#nodes LvmThinpoolStorageClass#nodes}
  */
  readonly nodes?: string[];
  /**
  * The LVM thinpool that should be implemented by each node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/lvm_thinpool_storage_class#thinpool LvmThinpoolStorageClass#thinpool}
  */
  readonly thinpool: string;
  /**
  * The associated volume group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/lvm_thinpool_storage_class#volume_group LvmThinpoolStorageClass#volume_group}
  */
  readonly volumeGroup: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/proxmox/r/lvm_thinpool_storage_class proxmox_lvm_thinpool_storage_class}
*/
export class LvmThinpoolStorageClass extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_lvm_thinpool_storage_class";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/proxmox/r/lvm_thinpool_storage_class proxmox_lvm_thinpool_storage_class} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LvmThinpoolStorageClassConfig
  */
  public constructor(scope: Construct, id: string, config: LvmThinpoolStorageClassConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_lvm_thinpool_storage_class',
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
    this._contentTypes = config.contentTypes;
    this._id = config.id;
    this._nodes = config.nodes;
    this._thinpool = config.thinpool;
    this._volumeGroup = config.volumeGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_types - computed: true, optional: true, required: false
  private _contentTypes?: string[]; 
  public get contentTypes() {
    return this.getListAttribute('content_types');
  }
  public set contentTypes(value: string[]) {
    this._contentTypes = value;
  }
  public resetContentTypes() {
    this._contentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypesInput() {
    return this._contentTypes;
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

  // nodes - computed: true, optional: true, required: false
  private _nodes?: string[]; 
  public get nodes() {
    return this.getListAttribute('nodes');
  }
  public set nodes(value: string[]) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // thinpool - computed: false, optional: false, required: true
  private _thinpool?: string; 
  public get thinpool() {
    return this.getStringAttribute('thinpool');
  }
  public set thinpool(value: string) {
    this._thinpool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thinpoolInput() {
    return this._thinpool;
  }

  // volume_group - computed: false, optional: false, required: true
  private _volumeGroup?: string; 
  public get volumeGroup() {
    return this.getStringAttribute('volume_group');
  }
  public set volumeGroup(value: string) {
    this._volumeGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupInput() {
    return this._volumeGroup;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contentTypes),
      id: cdktf.stringToTerraform(this._id),
      nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodes),
      thinpool: cdktf.stringToTerraform(this._thinpool),
      volume_group: cdktf.stringToTerraform(this._volumeGroup),
    };
  }
}
