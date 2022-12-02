import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ClinicResolverBase } from "./base/clinic.resolver.base";
import { Clinic } from "./base/Clinic";
import { ClinicService } from "./clinic.service";

@graphql.Resolver(() => Clinic)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ClinicResolver extends ClinicResolverBase {
  constructor(
    protected readonly service: ClinicService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
