/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Doctor, Schedule } from "@prisma/client";

export class DoctorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DoctorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DoctorFindManyArgs>
  ): Promise<number> {
    return this.prisma.doctor.count(args);
  }

  async findMany<T extends Prisma.DoctorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DoctorFindManyArgs>
  ): Promise<Doctor[]> {
    return this.prisma.doctor.findMany(args);
  }
  async findOne<T extends Prisma.DoctorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DoctorFindUniqueArgs>
  ): Promise<Doctor | null> {
    return this.prisma.doctor.findUnique(args);
  }
  async create<T extends Prisma.DoctorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DoctorCreateArgs>
  ): Promise<Doctor> {
    return this.prisma.doctor.create<T>(args);
  }
  async update<T extends Prisma.DoctorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DoctorUpdateArgs>
  ): Promise<Doctor> {
    return this.prisma.doctor.update<T>(args);
  }
  async delete<T extends Prisma.DoctorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DoctorDeleteArgs>
  ): Promise<Doctor> {
    return this.prisma.doctor.delete(args);
  }

  async findSchedules(
    parentId: string,
    args: Prisma.ScheduleFindManyArgs
  ): Promise<Schedule[]> {
    return this.prisma.doctor
      .findUnique({
        where: { id: parentId },
      })
      .schedules(args);
  }
}
