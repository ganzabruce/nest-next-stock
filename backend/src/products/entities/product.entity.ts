import { Entity , Column } from "typeorm"
import { PrimaryGeneratedColumn , CreateDateColumn , UpdateDateColumn } from "typeorm"

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    price: number

    @Column()
    quantity: number

    @Column()
    image: string

    @Column()
    category: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
