// https://www.terraform.io/docs/providers/proxmox/r/zfs_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZfsPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of disks that make the ZFS pool.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/zfs_pool#disks ZfsPool#disks}
  */
  readonly disks: string[];
  /**
  * The name of the ZFS pool.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/zfs_pool#name ZfsPool#name}
  */
  readonly name: string;
  /**
  * The node the ZFS pool is on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/zfs_pool#node ZfsPool#node}
  */
  readonly nodeAttribute: string;
  /**
  * The RAID level of the ZFS pool.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/zfs_pool#raid_level ZfsPool#raid_level}
  */
  readonly raidLevel: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/proxmox/r/zfs_pool proxmox_zfs_pool}
*/
export class ZfsPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_zfs_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/proxmox/r/zfs_pool proxmox_zfs_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZfsPoolConfig
  */
  public constructor(scope: Construct, id: string, config: ZfsPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_zfs_pool',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.0.12',
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
    this._disks = config.disks;
    this._name = config.name;
    this._node = config.nodeAttribute;
    this._raidLevel = config.raidLevel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disks - computed: false, optional: false, required: true
  private _disks?: string[]; 
  public get disks() {
    return this.getListAttribute('disks');
  }
  public set disks(value: string[]) {
    this._disks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks;
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // raid_level - computed: false, optional: false, required: true
  private _raidLevel?: string; 
  public get raidLevel() {
    return this.getStringAttribute('raid_level');
  }
  public set raidLevel(value: string) {
    this._raidLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get raidLevelInput() {
    return this._raidLevel;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disks),
      name: cdktf.stringToTerraform(this._name),
      node: cdktf.stringToTerraform(this._node),
      raid_level: cdktf.stringToTerraform(this._raidLevel),
    };
  }
}
