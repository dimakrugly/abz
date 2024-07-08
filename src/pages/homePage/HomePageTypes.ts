import {
  FieldErrors, UseFormRegister, UseFormSetValue, UseFormWatch,
} from 'react-hook-form';
import { User } from '../../store/models/User';
import { Position } from '../../store/models/Position';
import { MyFormData } from './hooks/useValidation';

export interface HomePageViewProps {
    users: User[];
    handleLoadNextPage: () => void;
    isLoadingUsers: boolean;
    isLastPage: boolean;
    positions: Position[];
    register: UseFormRegister<MyFormData>;
    errors: FieldErrors<MyFormData>;
    watch: UseFormWatch<MyFormData>;
    handleSubmit: () => void;
    setValue: UseFormSetValue<MyFormData>;
    isValid: boolean;
}
