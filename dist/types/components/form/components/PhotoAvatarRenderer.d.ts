import { default as React } from 'react';
import { FormikProps } from 'formik';
import { FormField, SqlEndpoints } from '../Form.types.js';
type PhotoAvatarRendererProps = {
    field: FormField;
    formik: FormikProps<Record<string, any>>;
    sqlOpsUrls?: SqlEndpoints | undefined;
    module_refid?: string | undefined;
    filesToDelete?: React.RefObject<string[]> | undefined;
};
export default function PhotoAvatarRenderer({ formik, field, sqlOpsUrls, module_refid, filesToDelete }: PhotoAvatarRendererProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PhotoAvatarRenderer.d.ts.map