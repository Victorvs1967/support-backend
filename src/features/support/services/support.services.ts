import { Injectable } from "@nestjs/common";
import { SupportAdapter, SupportDbInfoAdadpter } from "../adapters";
import { SupportCreationInfo } from "../interfaces";
import { Support } from "../models";
import { SupportRepository } from "../repositories";

@Injectable()
export class SupportServices {

  constructor(
    private readonly supportRepository: SupportRepository,
  ) {}

    public getAll(): Support[] {
      return this.supportRepository.getAll();
    }

  public getById(id: string): Support {
    return this.supportRepository.getById(id);
  }
  
  public create(ceationInfo: SupportCreationInfo): Support {
    const dbInfo = SupportDbInfoAdadpter.adaptFromCreationInfo(ceationInfo);
    this.supportRepository.create(dbInfo);

    return SupportAdapter.adaptFromDbInfo(dbInfo);
    ;
  }

}