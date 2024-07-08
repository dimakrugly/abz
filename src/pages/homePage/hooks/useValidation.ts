import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';

const validateImageDimensions = (file: File) => new Promise((resolve) => {
  const img = new Image();
  img.src = URL.createObjectURL(file);
  img.onload = () => {
    if (img.width >= 70 && img.height >= 70) {
      resolve(true);
    } else {
      resolve(false);
    }
  };
});

const schema = z.object({
  name: z.string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(50, { message: 'Name must be at most 50 characters long' }),
  email: z.string()
    .email({ message: 'Invalid email address' }),
  tel: z.string()
    .min(13, { message: 'Telephone number must be 13 characters long' })
    .max(13, { message: 'Telephone number must be 13 characters long' })
    .refine((value) => /^(\+380\d{9})$/.test(value), {
      message: 'Should be +38 (XXX) XXX - XX - XX)',
    }),
  position: z.string().min(1, 'Please select a position'),
  file: z.instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, 'File size should be less than 5MB')
    .refine((file) => ['image/jpeg', 'image/jpg'].includes(file.type), 'Only JPG/JPEG files are allowed')
    .refine(async (file) => validateImageDimensions(file), 'Image dimensions should be at least 70x70 pixels'),
});

export type MyFormData = z.infer<typeof schema>;
export const useValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm<MyFormData>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    reValidateMode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      tel: '',
    },
  });

  const onSubmit: SubmitHandler<MyFormData> = (data) => {
    console.log(data);
  };

  return {
    register, handleSubmit: handleSubmit(onSubmit), errors, isValid, watch, setValue,
  };
};
