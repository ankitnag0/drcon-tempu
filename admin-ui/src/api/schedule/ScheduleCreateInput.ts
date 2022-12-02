import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";

export type ScheduleCreateInput = {
  clinic: ClinicWhereUniqueInput;
  dateTime: Date;
  doctor: DoctorWhereUniqueInput;
  duration: number;
};
