import { default as React } from 'react';
import { GroupedFormViewPrps } from '../Form.types.js';
export interface AccordionFormViewHandle {
    populateForm: (payload: Record<string, any>) => void;
}
interface AccordionFormViewProps extends GroupedFormViewPrps {
    ref?: React.Ref<AccordionFormViewHandle>;
}
export default function AccordionFormView({ title, groupedFields, data, onSubmit, onCancel, methods, components, sqlOpsUrls, refid, module_refid, buttons, button_labels, AttachmentPopup, filesToDelete, ref, }: AccordionFormViewProps): React.JSX.Element;
export {};
//# sourceMappingURL=AccordionFormView.d.ts.map