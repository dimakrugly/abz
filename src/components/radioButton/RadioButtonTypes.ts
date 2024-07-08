import { UseFormRegister } from 'react-hook-form';
import { MyFormData } from '../../pages/homePage/hooks/useValidation';

export interface RadioButtonProps {
    id: string;
    position: string;
    register: UseFormRegister<MyFormData>
}
