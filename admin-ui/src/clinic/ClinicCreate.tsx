import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ScheduleTitle } from "../schedule/ScheduleTitle";

export const ClinicCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="schedules"
          reference="Schedule"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScheduleTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
