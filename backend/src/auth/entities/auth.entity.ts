import { Entity } from 'typeorm';
import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
export enum UserRole {
    ADMIN = 'admin',
    MANAGER = 'manager',
    STOREKEEPER = 'storekeeper',
}

@Entity()
export class Auth {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    fullNames: string;

    @Column()
    phone: string;

    @Column({ type: 'enum', enum: UserRole, default: UserRole.STOREKEEPER })
    role: UserRole;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
