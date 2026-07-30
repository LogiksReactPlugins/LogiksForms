import { default as React } from 'react';
import { SimpleFormViewProps } from '../Form.types.js';
export interface NormalFormViewHandle {
    populateForm: (payload: Record<string, any>) => void;
}
interface NormalFormViewProps extends SimpleFormViewProps {
    ref?: React.Ref<NormalFormViewHandle>;
}
export default function NormalFormView({ title, fields, data, onSubmit, onCancel, methods, sqlOpsUrls, refid, module_refid, buttons, button_labels, AttachmentPopup, filesToDelete, ref }: NormalFormViewProps): React.JSX.Element;
export {};
//# sourceMappingURL=NormalFormView.d.ts.map