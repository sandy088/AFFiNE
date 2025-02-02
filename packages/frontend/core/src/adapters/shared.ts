import { lazy } from 'react';

export const Provider = lazy(() =>
  import('../components/cloud/provider').then(({ Provider }) => ({
    default: Provider,
  }))
);

export const NewWorkspaceSettingDetail = lazy(() =>
  import('../components/affine/new-workspace-setting-detail').then(
    ({ WorkspaceSettingDetail }) => ({
      default: WorkspaceSettingDetail,
    })
  )
);
