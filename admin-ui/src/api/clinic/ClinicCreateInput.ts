import { ScheduleCreateNestedManyWithoutClinicsInput } from "./ScheduleCreateNestedManyWithoutClinicsInput";

export type ClinicCreateInput = {
  city?: string | null;
  name: string;
  schedules?: ScheduleCreateNestedManyWithoutClinicsInput;
};
