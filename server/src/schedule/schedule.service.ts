import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ScheduleServiceBase } from "./base/schedule.service.base";

@Injectable()
export class ScheduleService extends ScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
