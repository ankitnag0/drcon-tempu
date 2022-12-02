import { SortOrder } from "../../util/SortOrder";

export type ScheduleOrderByInput = {
  clinicId?: SortOrder;
  createdAt?: SortOrder;
  dateTime?: SortOrder;
  doctorId?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
