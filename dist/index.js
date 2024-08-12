"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_config_1 = require("./inversify.config");
const types_1 = require("./types");
const ninja = inversify_config_1.container.get(types_1.TYPES.Warrior);
console.log(ninja.fight());
console.log(ninja.sneak());
