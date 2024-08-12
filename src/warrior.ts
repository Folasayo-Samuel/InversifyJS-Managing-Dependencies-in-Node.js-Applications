import {  injectable, inject } from "inversify";
import { Warrior, Weapon, ThrowableWeapon } from "./types";
import { TYPES } from "./types";

@injectable()
export class Ninja implements Warrior {
  private _katana: Weapon;
  private _shuriken: ThrowableWeapon;

  public constructor(
    @inject(TYPES.Weapon) katana: Weapon,
    @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
  ) {
    this._katana = katana;
    this._shuriken = shuriken;
  }

  public fight(): string {
    return this._katana.use();
  }

  public sneak(): string {
    return this._shuriken.throw();
  }
}
