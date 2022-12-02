import { Schedule } from "../schedule/Schedule";

export type Clinic = {
  city: string | null;
  createdAt: Date;
  id: string;
  name: string;
  schedules?: Array<Schedule>;
  updatedAt: Date;
};
