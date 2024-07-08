import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { MyFormData } from '../../pages/homePage/hooks/useValidation';

export interface InputProps {
    placeholder: string;
    hint?: string;
    name: keyof MyFormData;
    register: UseFormRegister<MyFormData>;
    errors: FieldErrors<MyFormData>;
    watch: UseFormWatch<MyFormData>;
    type: 'text' | 'email' | 'tel';
}
