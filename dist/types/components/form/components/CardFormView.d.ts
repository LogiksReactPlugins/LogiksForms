import { default as React } from 'react';
import { GroupedFormViewPrps } from '../Form.types.js';
export interface CardFormViewwHandle {
    populateForm: (payload: Record<string, any>) => void;
}
interface CardFormViewProps extends GroupedFormViewPrps {
    ref?: React.Ref<CardFormViewwHandle>;
}
export default function CardFormView({ title, groupedFields, data, onSubmit, onCancel, methods, components, sqlOpsUrls, refid, module_refid, buttons, button_labels, AttachmentPopup, filesToDelete, ref }: CardFormViewProps): React.JSX.Element;
export {};
//# sourceMappingURL=CardFormView.d.ts.map