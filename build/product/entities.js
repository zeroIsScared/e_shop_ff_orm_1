var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Money } from "../Financial/entities.js";
let Product = class Product {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    Column(() => Money),
    __metadata("design:type", Money)
], Product.prototype, "price", void 0);
Product = __decorate([
    Entity({ name: 'product' })
], Product);
export { Product };
// in the product module - create the entities.ts - which will hold the product entity class - 
// use typeorm docs to set the next fields : id, name, price - where price will be of type Money - 
// which is an embeddable entity (check the docs) 
// - consisting of amount and currency (the Money entity should be declared in a separate file - 
//     entities.ts in the module - "financial")
