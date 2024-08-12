import { injectable } from "inversify";
import { Weapon, ThrowableWeapon } from "./types";

@injectable()
export class Katana implements Weapon {
  public use(): string {
    return "A sharp katana slice!";
  }
}

@injectable()
export class Shuriken implements ThrowableWeapon {
  public throw(): string {
    return "A deadly shuriken throw!";
  }
}