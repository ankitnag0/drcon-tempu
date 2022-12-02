import { ClinicWhereInput } from "./ClinicWhereInput";
import { ClinicOrderByInput } from "./ClinicOrderByInput";

export type ClinicFindManyArgs = {
  where?: ClinicWhereInput;
  orderBy?: Array<ClinicOrderByInput>;
  skip?: number;
  take?: number;
};
