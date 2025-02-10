import {Permission} from "../consts";

export type UserRolePermission = Permission & {
    groupId: string;
    groupName: string;
    groupOrder: number;
    hasPermission: boolean;
};



