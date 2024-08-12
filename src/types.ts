export const TYPES = {
    Warrior: Symbol.for("Warrior"),
    Weapon: Symbol.for("Weapon"),
    ThrowableWeapon: Symbol.for("ThrowableWeapon")
  };
  
  export interface Weapon {
    use(): string;
  }
  
  export interface ThrowableWeapon {
    throw(): string;
  }
  
  export interface Warrior {
    fight(): string;
    sneak(): string;
  }