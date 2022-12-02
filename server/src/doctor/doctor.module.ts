import { Module } from "@nestjs/common";
import { DoctorModuleBase } from "./base/doctor.module.base";
import { DoctorService } from "./doctor.service";
import { DoctorController } from "./doctor.controller";
import { DoctorResolver } from "./doctor.resolver";

@Module({
  imports: [DoctorModuleBase],
  controllers: [DoctorController],
  providers: [DoctorService, DoctorResolver],
  exports: [DoctorService],
})
export class DoctorModule {}
