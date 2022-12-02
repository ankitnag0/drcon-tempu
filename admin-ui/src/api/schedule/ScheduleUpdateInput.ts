import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";

export type ScheduleUpdateInput = {
  clinic?: ClinicWhereUniqueInput;
  dateTime?: Date;
  doctor?: DoctorWhereUniqueInput;
  duration?: number;
};
