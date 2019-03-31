import { EntityManager } from "typeorm";

import { FileNodeEntity } from "../../../../../../entity/nodes/File";

export class ModuleFileNode {
  project: any;
  file: any;
  transaction: EntityManager;

  constructor(project: any, file: any, transaction: EntityManager) {
    this.project = project;
    this.file = file;
    this.transaction = transaction;
  }

  async save() {
    try {
      const file = new FileNodeEntity();
      file.project = this.project;
      file.name = this.file.name;
      file.kind = this.file.kind;
      file.path = this.file.path;
      return await this.transaction.save(file);
    } catch (err) {
      throw err;
    }
  }
}
