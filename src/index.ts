import "reflect-metadata";
import { container } from "./inversify.config";
import { TYPES } from "./types";
import { Warrior } from "./types";

const ninja = container.get<Warrior>(TYPES.Warrior);

console.log(ninja.fight());
console.log(ninja.sneak());