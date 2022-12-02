import { DoctorWhereInput } from "./DoctorWhereInput";
import { DoctorOrderByInput } from "./DoctorOrderByInput";

export type DoctorFindManyArgs = {
  where?: DoctorWhereInput;
  orderBy?: Array<DoctorOrderByInput>;
  skip?: number;
  take?: number;
};
