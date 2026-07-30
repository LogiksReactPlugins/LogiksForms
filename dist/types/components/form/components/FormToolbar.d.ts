import { default as React } from 'react';
import { FormToolbar } from '../Form.types.js';
interface FormToolbarProps {
    toolbar?: FormToolbar | undefined;
    methods?: Record<string, any>;
    sqlOpsUrls?: any;
    populateForm: (data: Record<string, any>) => void;
}
export default function FormToolbar({ toolbar, methods, sqlOpsUrls, populateForm, }: FormToolbarProps): React.JSX.Element | null;
export {};
//# sourceMappingURL=FormToolbar.d.ts.map