import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

@Entity("module_comments")
export class ModuleComment extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text", { nullable: true })
  text: string;

  @Column("text", { nullable: true })
  shortText: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
