// 手動 print schema
import { NestFactory } from "@nestjs/core";
import { GraphQLSchemaFactory, GraphQLSchemaBuilderModule } from "@nestjs/graphql";
import { printSchema } from "graphql";
import { AuthorsResolver } from "./authors/authors.resolver";

async function generateSchema() {
  const app = await NestFactory.create(GraphQLSchemaBuilderModule);
  await app.init();

  const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
  const schema = await gqlSchemaFactory.create([AuthorsResolver]);
  console.log(printSchema(schema));
}

generateSchema();
