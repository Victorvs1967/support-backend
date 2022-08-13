import { BaseUserInfo } from "src/features/user";
import { SupportCreationInfo } from "./support-creation-info.interface";

export interface SupportDbInfo extends SupportCreationInfo, BaseUserInfo {
}