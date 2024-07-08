import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { Position } from '../../../../store/models/Position';
import { MyFormData } from '../../hooks/useValidation';

export interface PostFormProps {
    positions: Position[];
    register: UseFormRegister<MyFormData>;
    errors: FieldErrors<MyFormData>;
    watch: UseFormWatch<MyFormData>;
    handleSubmit: () => void;
    setValue: UseFormSetValue<MyFormData>;
    isValid: boolean;
}
