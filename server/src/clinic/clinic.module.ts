import { Module } from "@nestjs/common";
import { ClinicModuleBase } from "./base/clinic.module.base";
import { ClinicService } from "./clinic.service";
import { ClinicController } from "./clinic.controller";
import { ClinicResolver } from "./clinic.resolver";

@Module({
  imports: [ClinicModuleBase],
  controllers: [ClinicController],
  providers: [ClinicService, ClinicResolver],
  exports: [ClinicService],
})
export class ClinicModule {}
