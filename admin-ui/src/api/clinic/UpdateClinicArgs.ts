import { ClinicWhereUniqueInput } from "./ClinicWhereUniqueInput";
import { ClinicUpdateInput } from "./ClinicUpdateInput";

export type UpdateClinicArgs = {
  where: ClinicWhereUniqueInput;
  data: ClinicUpdateInput;
};
