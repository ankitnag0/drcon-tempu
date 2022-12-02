import { Doctor as TDoctor } from "../api/doctor/Doctor";

export const DOCTOR_TITLE_FIELD = "name";

export const DoctorTitle = (record: TDoctor): string => {
  return record.name || record.id;
};
