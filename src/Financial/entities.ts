import { Column } from "typeorm";

export class Money {
    @Column()
    amount: number; 

    @Column()
    currency: string;
}
