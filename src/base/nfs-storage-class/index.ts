// https://www.terraform.io/docs/providers/proxmox/r/nfs_storage_class
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NfsStorageClassConfig extends cdktf.TerraformMetaArguments {
  /**
  * The content types that can be stored on this storage class.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/nfs_storage_class#content_types NfsStorageClass#content_types}
  */
  readonly contentTypes?: string[];
  /**
  * The remote export path of the NFS server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/nfs_storage_class#export NfsStorageClass#export}
  */
  readonly export: string;
  /**
  * The identifier of the storage class.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/nfs_storage_class#id NfsStorageClass#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Nodes that implement this storage class.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/nfs_storage_class#nodes NfsStorageClass#nodes}
  */
  readonly nodes?: string[];
  /**
  * The NFS server used in the storage class.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/nfs_storage_class#server NfsStorageClass#server}
  */
  readonly server: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/proxmox/r/nfs_storage_class proxmox_nfs_storage_class}
*/
export class NfsStorageClass extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_nfs_storage_class";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/proxmox/r/nfs_storage_class proxmox_nfs_storage_class} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NfsStorageClassConfig
  */
  public constructor(scope: Construct, id: string, config: NfsStorageClassConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_nfs_storage_class',
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
    this._export = config.export;
    this._id = config.id;
    this._nodes = config.nodes;
    this._server = config.server;
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

  // export - computed: false, optional: false, required: true
  private _export?: string; 
  public get export() {
    return this.getStringAttribute('export');
  }
  public set export(value: string) {
    this._export = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export;
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

  // mount - computed: true, optional: false, required: false
  public get mount() {
    return this.getStringAttribute('mount');
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

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contentTypes),
      export: cdktf.stringToTerraform(this._export),
      id: cdktf.stringToTerraform(this._id),
      nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodes),
      server: cdktf.stringToTerraform(this._server),
    };
  }
}
