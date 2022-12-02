import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClinicService } from "./clinic.service";
import { ClinicControllerBase } from "./base/clinic.controller.base";

@swagger.ApiTags("clinics")
@common.Controller("clinics")
export class ClinicController extends ClinicControllerBase {
  constructor(
    protected readonly service: ClinicService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
