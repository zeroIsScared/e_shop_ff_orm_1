import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Money } from "../Financial/entities.js";


@Entity({name:'product'})

export class Product {
@PrimaryGeneratedColumn ()
id:number

@Column()
name: string

@Column( () => Money )
    price: Money;
}



// in the product module - create the entities.ts - which will hold the product entity class - 
// use typeorm docs to set the next fields : id, name, price - where price will be of type Money - 
// which is an embeddable entity (check the docs) 
// - consisting of amount and currency (the Money entity should be declared in a separate file - 
//     entities.ts in the module - "financial")