import { StringFilter } from "../../util/StringFilter";
import { ScheduleListRelationFilter } from "../schedule/ScheduleListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DoctorWhereInput = {
  city?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  schedules?: ScheduleListRelationFilter;
  username?: StringNullableFilter;
};
