import { Database } from "@/lib/database.types";

declare global {
  type DatabaseType = Database;
}