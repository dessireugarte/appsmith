import { ReduxActionTypes } from "@appsmith/constants/ReduxActionConstants";

export type CreatePackageFromWorkspacePayload = {
  workspaceId: string;
};

export const fetchAllPackages = () => {
  return {
    type: ReduxActionTypes.FETCH_ALL_PACKAGES_INIT,
  };
};

export const createPackageFromWorkspace = (
  payload: CreatePackageFromWorkspacePayload,
) => {
  return {
    type: ReduxActionTypes.CREATE_PACKAGE_FROM_WORKSPACE_INIT,
    payload,
  };
};