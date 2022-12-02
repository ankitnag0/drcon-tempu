import { Schedule } from "../schedule/Schedule";
import { JsonValue } from "type-fest";

export type Doctor = {
  city: string;
  createdAt: Date;
  id: string;
  name: string;
  password: string;
  schedules?: Array<Schedule>;
  updatedAt: Date;
  username: string | null;
  userRole: JsonValue;
};
