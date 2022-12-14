import { v4 as uuidv4 } from 'uuid';
import { SupportCreationInfo, SupportDbInfo } from "../interfaces";

export class SupportDbInfoAdadpter {

  public static adaptFromCreationInfo(creationInfo: SupportCreationInfo): SupportDbInfo {
    return { 
      id: uuidv4(),
      ...creationInfo,
    };
  }
}