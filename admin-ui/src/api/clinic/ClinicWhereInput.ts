import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ScheduleListRelationFilter } from "../schedule/ScheduleListRelationFilter";

export type ClinicWhereInput = {
  city?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  schedules?: ScheduleListRelationFilter;
};
