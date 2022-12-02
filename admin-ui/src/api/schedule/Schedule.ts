import { Clinic } from "../clinic/Clinic";
import { Doctor } from "../doctor/Doctor";

export type Schedule = {
  clinic?: Clinic;
  createdAt: Date;
  dateTime: Date;
  doctor?: Doctor;
  duration: number;
  id: string;
  updatedAt: Date;
};
