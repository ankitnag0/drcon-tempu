import { ScheduleCreateNestedManyWithoutDoctorsInput } from "./ScheduleCreateNestedManyWithoutDoctorsInput";
import { InputJsonValue } from "../../types";

export type DoctorCreateInput = {
  city: string;
  name: string;
  password: string;
  schedules?: ScheduleCreateNestedManyWithoutDoctorsInput;
  username?: string | null;
  userRole: InputJsonValue;
};
