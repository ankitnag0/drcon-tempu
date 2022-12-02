import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ScheduleResolverBase } from "./base/schedule.resolver.base";
import { Schedule } from "./base/Schedule";
import { ScheduleService } from "./schedule.service";

@graphql.Resolver(() => Schedule)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ScheduleResolver extends ScheduleResolverBase {
  constructor(
    protected readonly service: ScheduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
