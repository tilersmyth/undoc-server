import { EntityManager } from "typeorm";

import { ChildrenNodeConnector } from "../../../../../entity";
import { ChildrenNode } from "../nodes/Children";

interface ConnectorRelation {
  [index: string]: any;
}

export class ChildrenConnector extends ChildrenNode {
  commit: any;
  transaction: EntityManager;

  constructor(commit: any, transaction: EntityManager) {
    super(commit, transaction);
    this.transaction = transaction;
  }

  private static relations: any = [
    {
      key: "file",
      instance: "FileEntity",
      array: false
    },
    {
      key: "parent",
      instance: "ChildrenNodeConnector",
      array: false
    },
    {
      key: "comment",
      instance: "CommentNodeConnector",
      array: false
    }
  ];

  create(parent: any) {
    const connector: ConnectorRelation = new ChildrenNodeConnector();

    const { name } = parent.constructor;

    const relations = ChildrenConnector.relations.find(
      (relation: any) => relation.instance === name
    );

    if (!relations) {
      throw Error(`relation ${name} not joined on ChildrenNodeConnector`);
    }

    if (relations) {
      connector[relations.key] = relations.array ? [parent] : parent;
    }

    return this.transaction.save(connector);
  }
}