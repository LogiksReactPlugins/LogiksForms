import { default as React } from 'react';
import { GroupedFormViewPrps } from '../Form.types.js';
export interface TabFormViewHandle {
    populateForm: (payload: Record<string, any>) => void;
}
interface TabFormViewProps extends GroupedFormViewPrps {
    ref?: React.Ref<TabFormViewHandle>;
}
export default function TabFormView({ title, groupedFields, data, onSubmit, onCancel, methods, components, sqlOpsUrls, widget, refid, module_refid, buttons, button_labels, AttachmentPopup, filesToDelete, ref, }: TabFormViewProps): React.JSX.Element;
export {};
//# sourceMappingURL=TabFormView.d.ts.map