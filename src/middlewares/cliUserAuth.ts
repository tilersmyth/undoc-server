import { cliUserAuthMiddleware } from "../modules/cli/middleware";

export const cliUserAuth = {
  Query: {
    cliMe: cliUserAuthMiddleware,
    cliUserProjects: cliUserAuthMiddleware,
    cliLastCommit: cliUserAuthMiddleware
  },
  Mutation: {
    cliCreateProject: cliUserAuthMiddleware
  }
};