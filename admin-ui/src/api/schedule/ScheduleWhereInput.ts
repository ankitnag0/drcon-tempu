import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type ScheduleWhereInput = {
  clinic?: ClinicWhereUniqueInput;
  dateTime?: DateTimeFilter;
  doctor?: DoctorWhereUniqueInput;
  duration?: IntFilter;
  id?: StringFilter;
};
