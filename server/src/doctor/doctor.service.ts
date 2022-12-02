import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DoctorServiceBase } from "./base/doctor.service.base";

@Injectable()
export class DoctorService extends DoctorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
