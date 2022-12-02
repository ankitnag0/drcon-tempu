import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { ClinicTitle } from "../clinic/ClinicTitle";
import { DoctorTitle } from "../doctor/DoctorTitle";

export const ScheduleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="clinic.id" reference="Clinic" label="Clinic">
          <SelectInput optionText={ClinicTitle} />
        </ReferenceInput>
        <DateTimeInput label="Date Time" source="dateTime" />
        <ReferenceInput source="doctor.id" reference="Doctor" label="Doctor">
          <SelectInput optionText={DoctorTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Duration" source="duration" />
      </SimpleForm>
    </Create>
  );
};
