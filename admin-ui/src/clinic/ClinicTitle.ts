import { Clinic as TClinic } from "../api/clinic/Clinic";

export const CLINIC_TITLE_FIELD = "name";

export const ClinicTitle = (record: TClinic): string => {
  return record.name || record.id;
};
