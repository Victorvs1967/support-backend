import { Injectable } from "@nestjs/common";
import { StorageKeyEnum, StorageService } from "src/core";
import { Support } from "../models";

@Injectable()
export class SupportRepository {

  constructor(
    private readonly storageService: StorageService,
  ) {
    this.initDefaultValueIfNeeded();
  }

  public getAll(): Support[] {
    return this.storageService.get(StorageKeyEnum.Supports);
  }

  public getById(id: string): Support {
    const support = this.getAll();

    return support.find(currentSupport => currentSupport.id === id);
  }

  public create(support: Support): void {
    const supports = this.getAll();
    supports.push(support);

    this.storageService.set(StorageKeyEnum.Supports, supports);
  }

  private initDefaultValueIfNeeded(): void {
    if (!this.storageService.has(StorageKeyEnum.Supports)) this.storageService.set(StorageKeyEnum.Supports, []);
  }
}