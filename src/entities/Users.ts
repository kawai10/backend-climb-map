import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'climb_map', name: 'users', database: 'climb' })
export class Users {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', unique: true, length: 15 })
	loginId: string;

	@Column({ type: 'varchar' })
	nickname: string;

	@Column({ type: 'varchar', select: false })
	password: string;

	@Column({ type: 'varchar' })
	profilePhoto: string;

	@CreateDateColumn()
	createAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
