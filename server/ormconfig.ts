import { ConnectionOptions } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

const {
  TYPEORM_HOST,
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_DATABASE,
  TYPEORM_PORT,
} = process.env;

const options: ConnectionOptions = {
  type: "postgres",
  host: TYPEORM_HOST,
  username: TYPEORM_USERNAME,
  password: TYPEORM_PASSWORD,
  database: TYPEORM_DATABASE,
  port: Number(TYPEORM_PORT),
  migrationsRun: process.env.NODE_ENV === "production",
  synchronize: false,
  logging: false,
  entities: ["entity/**/*.ts"],
  migrations: ["migration/**/*.ts"],
  cli: {
    migrationsDir: "migration",
    subscribersDir: "subscriber",
    entitiesDir: "entity",
  },
};

export = options;
