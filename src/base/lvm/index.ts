// https://www.terraform.io/docs/providers/proxmox/r/lvm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LvmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Device the LVM is on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/lvm#device Lvm#device}
  */
  readonly device: string;
  /**
  * The name of the LVM.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/lvm#name Lvm#name}
  */
  readonly name: string;
  /**
  * The node the LVM is on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/lvm#node Lvm#node}
  */
  readonly nodeAttribute: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/proxmox/r/lvm proxmox_lvm}
*/
export class Lvm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_lvm";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/proxmox/r/lvm proxmox_lvm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LvmConfig
  */
  public constructor(scope: Construct, id: string, config: LvmConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_lvm',
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
    this._device = config.device;
    this._name = config.name;
    this._node = config.nodeAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
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

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
      node: cdktf.stringToTerraform(this._node),
    };
  }
}
