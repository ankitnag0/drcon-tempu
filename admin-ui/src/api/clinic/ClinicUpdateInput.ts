import { ScheduleUpdateManyWithoutClinicsInput } from "./ScheduleUpdateManyWithoutClinicsInput";

export type ClinicUpdateInput = {
  city?: string | null;
  name?: string;
  schedules?: ScheduleUpdateManyWithoutClinicsInput;
};
