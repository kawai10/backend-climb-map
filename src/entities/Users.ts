import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'climb_map', name: 'users', database: 'climb' })
export class Users {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', unique: true })
	email: string;

	@Column({ type: 'varchar', length: 15 })
	nickname: string;

	@Column({ type: 'string' })
	password: string;

	@CreateDateColumn()
	createAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@DeleteDateColumn()
	deletedAt: Date;
}
