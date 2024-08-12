"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const inversify_1 = require("inversify");
const types_1 = require("./types");
const warrior_1 = require("./warrior");
const services_1 = require("./services");
const container = new inversify_1.Container();
exports.container = container;
container.bind(types_1.TYPES.Warrior).to(warrior_1.Ninja);
container.bind(types_1.TYPES.Weapon).to(services_1.Katana);
container.bind(types_1.TYPES.ThrowableWeapon).to(services_1.Shuriken);
