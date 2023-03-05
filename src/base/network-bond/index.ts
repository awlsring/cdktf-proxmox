// https://www.terraform.io/docs/providers/proxmox/r/network_bond
// generated from terraform resource schema

import * as cdktf from 'cdktf';
import { Construct } from 'constructs';

// Configuration

export interface NetworkBondConfig extends cdktf.TerraformMetaArguments {
  /**
  * If the bond is set to autostart.
  *
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/network_bond#autostart NetworkBond#autostart}
  */
  readonly autostart?: boolean | cdktf.IResolvable;
  /**
  * Primary interface on the bond.
  *
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/network_bond#bond_primary NetworkBond#bond_primary}
  */
  readonly bondPrimary?: string;
  /**
  * Comment in the bond.
  *
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/network_bond#comments NetworkBond#comments}
  */
  readonly comments?: string;
  /**
  * Hash policy used on the bond.
  *
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/network_bond#hash_policy NetworkBond#hash_policy}
  */
  readonly hashPolicy?: string;
  /**
  * List of interfaces on the bond.
  *
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/network_bond#interfaces NetworkBond#interfaces}
  */
  readonly interfaces: string[];
  /**
  * Information of the ipv4 address.
  *
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/network_bond#ipv4 NetworkBond#ipv4}
  */
  readonly ipv4?: NetworkBondIpv4 | cdktf.IResolvable;
  /**
  * The ipv4 gateway.
  *
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/network_bond#ipv4_gateway NetworkBond#ipv4_gateway}
  */
  readonly ipv4Gateway?: string;
  /**
  * Information of the ipv6 address.
  *
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/network_bond#ipv6 NetworkBond#ipv6}
  */
  readonly ipv6?: NetworkBondIpv6 | cdktf.IResolvable;
  /**
  * The ipv6 gateway.
  *
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/network_bond#ipv6_gateway NetworkBond#ipv6_gateway}
  */
  readonly ipv6Gateway?: string;
  /**
  * Mode of the bond.
  *
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/network_bond#mode NetworkBond#mode}
  */
  readonly mode: string;
  /**
  * The name of the bond.
  *
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/network_bond#name NetworkBond#name}
  */
  readonly name?: string;
  /**
  * The node the bond is on.
  *
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/network_bond#node NetworkBond#node}
  */
  readonly nodeAttribute: string;
}
export interface NetworkBondIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/network_bond#address NetworkBond#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/network_bond#netmask NetworkBond#netmask}
  */
  readonly netmask?: string;
}

export function networkBondIpv4ToTerraform(struct?: NetworkBondIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error('A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration');
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    netmask: cdktf.stringToTerraform(struct!.netmask),
  };
}

export class NetworkBondIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkBondIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkBondIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._netmask = undefined;
    } else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    } else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
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
export interface NetworkBondIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/network_bond#address NetworkBond#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/proxmox/r/network_bond#netmask NetworkBond#netmask}
  */
  readonly netmask?: string;
}

export function networkBondIpv6ToTerraform(struct?: NetworkBondIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error('A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration');
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    netmask: cdktf.stringToTerraform(struct!.netmask),
  };
}

export class NetworkBondIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkBondIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkBondIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._netmask = undefined;
    } else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    } else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/proxmox/r/network_bond proxmox_network_bond}
*/
export class NetworkBond extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = 'proxmox_network_bond';

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/proxmox/r/network_bond proxmox_network_bond} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkBondConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkBondConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_network_bond',
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
    this._autostart = config.autostart;
    this._bondPrimary = config.bondPrimary;
    this._comments = config.comments;
    this._hashPolicy = config.hashPolicy;
    this._interfaces = config.interfaces;
    this._ipv4 = config.ipv4;
    this._ipv4Gateway = config.ipv4Gateway;
    this._ipv6 = config.ipv6;
    this._ipv6Gateway = config.ipv6Gateway;
    this._mode = config.mode;
    this._name = config.name;
    this._node = config.nodeAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // autostart - computed: false, optional: true, required: false
  private _autostart?: boolean | cdktf.IResolvable;
  public get autostart() {
    return this.getBooleanAttribute('autostart');
  }
  public set autostart(value: boolean | cdktf.IResolvable) {
    this._autostart = value;
  }
  public resetAutostart() {
    this._autostart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autostartInput() {
    return this._autostart;
  }

  // bond_primary - computed: false, optional: true, required: false
  private _bondPrimary?: string;
  public get bondPrimary() {
    return this.getStringAttribute('bond_primary');
  }
  public set bondPrimary(value: string) {
    this._bondPrimary = value;
  }
  public resetBondPrimary() {
    this._bondPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondPrimaryInput() {
    return this._bondPrimary;
  }

  // comments - computed: false, optional: true, required: false
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

  // hash_policy - computed: false, optional: true, required: false
  private _hashPolicy?: string;
  public get hashPolicy() {
    return this.getStringAttribute('hash_policy');
  }
  public set hashPolicy(value: string) {
    this._hashPolicy = value;
  }
  public resetHashPolicy() {
    this._hashPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashPolicyInput() {
    return this._hashPolicy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: false, optional: false, required: true
  private _interfaces?: string[];
  public get interfaces() {
    return this.getListAttribute('interfaces');
  }
  public set interfaces(value: string[]) {
    this._interfaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: NetworkBondIpv4 | cdktf.IResolvable;
  public get ipv4() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ipv4');
  }
  public set ipv4(value: NetworkBondIpv4 | cdktf.IResolvable) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv4_gateway - computed: false, optional: true, required: false
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

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: NetworkBondIpv6 | cdktf.IResolvable;
  public get ipv6() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ipv6');
  }
  public set ipv6(value: NetworkBondIpv6 | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // ipv6_gateway - computed: false, optional: true, required: false
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

  // mii_mon - computed: true, optional: false, required: false
  public get miiMon() {
    return this.getStringAttribute('mii_mon');
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string;
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autostart: cdktf.booleanToTerraform(this._autostart),
      bond_primary: cdktf.stringToTerraform(this._bondPrimary),
      comments: cdktf.stringToTerraform(this._comments),
      hash_policy: cdktf.stringToTerraform(this._hashPolicy),
      interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interfaces),
      ipv4: networkBondIpv4ToTerraform(this._ipv4),
      ipv4_gateway: cdktf.stringToTerraform(this._ipv4Gateway),
      ipv6: networkBondIpv6ToTerraform(this._ipv6),
      ipv6_gateway: cdktf.stringToTerraform(this._ipv6Gateway),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      node: cdktf.stringToTerraform(this._node),
    };
  }
}
