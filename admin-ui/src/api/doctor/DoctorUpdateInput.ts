import { ScheduleUpdateManyWithoutDoctorsInput } from "./ScheduleUpdateManyWithoutDoctorsInput";
import { InputJsonValue } from "../../types";

export type DoctorUpdateInput = {
  city?: string;
  name?: string;
  password?: string;
  schedules?: ScheduleUpdateManyWithoutDoctorsInput;
  username?: string | null;
  userRole?: InputJsonValue;
};
