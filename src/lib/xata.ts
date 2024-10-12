// Generated by Xata Codegen 0.30.1. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "User",
    columns: [
      { name: "lastName", type: "text", defaultValue: "''" },
      { name: "firstName", type: "text" },
      { name: "password", type: "text" },
      { name: "email", type: "text" },
      { name: "photoUrl", type: "file", file: { defaultPublicAccess: true } },
      { name: "plan", type: "link", link: { table: "Plan" }, unique: true },
      { name: "rol", type: "text", defaultValue: "USER" },
      { name: "posts", type: "link", link: { table: "Post" } },
      { name: "comments", type: "link", link: { table: "Comment" } },
    ],
    revLinks: [
      { column: "users", table: "Plan" },
      { column: "user", table: "Post" },
      { column: "user", table: "Comment" },
    ],
  },
  {
    name: "Plan",
    columns: [
      { name: "name", type: "text" },
      { name: "price", type: "int" },
      { name: "users", type: "link", link: { table: "User" } },
    ],
    revLinks: [{ column: "plan", table: "User" }],
  },
  {
    name: "Post",
    columns: [
      { name: "user", type: "link", link: { table: "User" }, unique: true },
    ],
    revLinks: [{ column: "posts", table: "User" }],
  },
  {
    name: "Comment",
    columns: [
      { name: "user", type: "link", link: { table: "User" }, unique: true },
    ],
    revLinks: [{ column: "comments", table: "User" }],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type User = InferredTypes["User"];
export type UserRecord = User & XataRecord;

export type Plan = InferredTypes["Plan"];
export type PlanRecord = Plan & XataRecord;

export type Post = InferredTypes["Post"];
export type PostRecord = Post & XataRecord;

export type Comment = InferredTypes["Comment"];
export type CommentRecord = Comment & XataRecord;

export type DatabaseSchema = {
  User: UserRecord;
  Plan: PlanRecord;
  Post: PostRecord;
  Comment: CommentRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://SOCIALITICOS-kfe24g.us-east-1.xata.sh/db/socialiticos",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
