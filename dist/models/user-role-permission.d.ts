import { Permission } from "../consts";
export type UserRolePermission = Permission & {
    groupId: string;
    groupName: string;
    groupOrder: number;
    hasPermission: boolean;
};
//# sourceMappingURL=user-role-permission.d.ts.map