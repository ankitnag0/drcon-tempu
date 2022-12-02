import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DoctorService } from "./doctor.service";
import { DoctorControllerBase } from "./base/doctor.controller.base";

@swagger.ApiTags("doctors")
@common.Controller("doctors")
export class DoctorController extends DoctorControllerBase {
  constructor(
    protected readonly service: DoctorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
