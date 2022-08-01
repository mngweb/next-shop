import { FormState, UseFormRegister } from 'react-hook-form';
import { CheckoutFormData } from '../CheckoutForm/CheckoutForm';

interface FormInputProps {
  type: React.HTMLInputTypeAttribute;
  name: keyof CheckoutFormData;
  labelText: string;
  useForm: {
    register: UseFormRegister<CheckoutFormData>;
    formState: FormState<CheckoutFormData>;
  };
  autoComplete?: string;
  defaultChecked?: boolean;
}

export const FormInput = ({
  type,
  name,
  labelText,
  useForm: { register, formState },
  autoComplete,
  defaultChecked,
}: FormInputProps) => {
  return (
    <>
      <div className={`mt-1 ${type === 'checkbox' ? 'flex items-center' : ''}`}>
        {!(type === 'checkbox') && Label(name, labelText)}

        <input
          type={type}
          id={name}
          {...register(name, { required: 'Please enter a valid value' })}
          autoComplete={autoComplete ? autoComplete : 'off'}
          className={`${
            type === 'checkbox' ? 'mr-2' : 'block w-full'
          } border-gray-500 focus:ring-green-500 focus:border-green-500 text-sm`}
          defaultChecked={defaultChecked}
        />

        {type === 'checkbox' && Label(name, labelText)}
      </div>

      <span role="alert" className="inline-block w-full text-sm text-red-500 min-h-[1.25]">
        {formState.errors[name]?.message}
      </span>
    </>
  );
};

const Label = (name: string, labelText: string) => {
  return (
    <label htmlFor={name} className="block text-sm font-medium text-gray-600 my-1">
      {labelText}
    </label>
  );
};
