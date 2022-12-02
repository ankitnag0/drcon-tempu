import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ClinicServiceBase } from "./base/clinic.service.base";

@Injectable()
export class ClinicService extends ClinicServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
