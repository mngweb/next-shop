// import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useForm } from 'react-hook-form';
// import {validateCreditCardDate } from '../../utils/validation';
import { RegExpressions, InvalidMessages } from '../../utils/validations';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormInput } from './FormInput';

const products = [
  {
    id: 1,
    name: 't-shirt with logo',
    href: '#',
    price: '$30.00',
    color: 'black',
    size: 'M',
    imageSrc: 'https://media.graphassets.com/Y5CO7QQURzeLWx8QyxZT',
    imageAlt: 'black t-shirt',
  },
  {
    id: 2,
    name: 't-shirt with cat',
    href: '#',
    price: '$40.00',
    color: 'ecru',
    size: 'S',
    imageSrc: 'https://media.graphassets.com/07prUwNwSWeKndVLfECQ',
    imageAlt: 'ecru t-shirt with cat',
  },
];

//// using react-hook-form, without yup
// interface CheckoutFormData {
//   emailAddress: string;
//   nameOnCard: string;
//   cardNumber: string;
//   expirationDate: string;
//   cvc: string;
//   company: string;
//   address: string;
//   apartament: string;
//   city: string;
//   region: string;
//   postalCode: string;
//   asShipping: boolean;
// }

//// using react-hook-form, with yup
yup.setLocale({
  mixed: {
    required: InvalidMessages.REQUIRED,
  },
  string: {
    email: InvalidMessages.EMAIL,
    length: InvalidMessages.LENGTH,
  },
});

const checkoutFormSchema = yup
  .object({
    emailAddress: yup.string().email().trim().required(),
    nameOnCard: yup.string().trim().required(),
    cardNumber: yup.string().trim().length(16).required(),
    expirationDate: yup
      .string()
      .matches(RegExpressions.EXPIRATION_DATE, InvalidMessages.EXPIRATION_DATE)
      .trim()
      .required(),
    cvc: yup.string().trim().matches(RegExpressions.CVC, InvalidMessages.CVC).required(),
    company: yup.string().trim().required(),
    address: yup.string().trim().required(),
    apartament: yup.string().trim().required(),
    city: yup.string().trim().required(),
    region: yup.string().trim().required(),
    postalCode: yup.string().trim().matches(RegExpressions.POSTAL_CODE, InvalidMessages.POSTAL_CODE).required(),
    asShipping: yup.boolean().required(),
  })
  .required();

export type CheckoutFormData = yup.InferType<typeof checkoutFormSchema>;

export const CheckoutForm = () => {
  //// using react-hook-form, without yup
  // const { register, setValue, handleSubmit, formState } = useForm<CheckoutFormData>({
  //   mode: 'onBlur',
  // });
  //// using react-hook-form, with yup
  const { register, setValue, handleSubmit, formState } = useForm<CheckoutFormData>({
    mode: 'onBlur',
    resolver: yupResolver(checkoutFormSchema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  //// form trial with controlled form, without using react-hook-form
  // const [email, setEmail] = useState('');
  // const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
  //   e.preventDefault();
  //   console.log({ email });
  // };

  return (
    <div className="bg-white flex justify-center flex-col-reverse lg:flex-row lg:space-x-10 m-5">
      <div className="flex flex-col mx-auto w-full max-w-lg lg:max-w-none lg:w-1/2 p-4">
        <form onSubmit={onSubmit}>
          <section aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-lg font-bold text-gray-800 mt-8 mb-5">
              Contact information
            </h2>

            <FormInput
              type="email"
              name="emailAddress"
              labelText="Email address"
              useForm={{ register, formState }}
              autoComplete="email"
            />
            {/* <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-600 my-1">
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email-address"
                  autoComplete="email"
                  className="block w-full border-gray-500 focus:ring-green-500 focus:border-green-500 text-sm"
                  {...register(
                    'emailAddress',
                    // { required: 'This field is required' }
                  )}
                />
                <span role="alert" className="inline-block w-full text-sm text-red-500 min-h-[1.25]">
                  {formState.errors.emailAddress?.message}
                </span>
              </div>
            </div> */}
          </section>

          <section aria-labelledby="payment-heading">
            <h2 id="payment-heading" className="text-lg font-bold text-gray-800 mt-8 mb-5">
              Payment details
            </h2>

            <FormInput
              type="text"
              name="nameOnCard"
              labelText="Name on card"
              useForm={{ register, formState }}
              autoComplete="cc-name"
            />

            <FormInput
              type="text"
              name="cardNumber"
              labelText="Card number"
              useForm={{ register, formState }}
              autoComplete="cc-number"
            />

            <div className="sm:flex sm:justify-between sm:space-x-4">
              <div className="w-full sm:w-1/2">
                <FormInput
                  type="text"
                  name="expirationDate"
                  labelText="Expiration date (MM/YY)"
                  useForm={{ register, formState }}
                  autoComplete="cc-exp"
                />
                {/* <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-600 my-1">
                  Expiration date (MM/YY)
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="expiration-date"
                    {...register(
                      'expirationDate',
                      // {
                      //   required: true,
                      //   // pattern: /^\d\d\/\d\d$/
                      //   validate: validateCreditCardDate,
                      // }
                    )}
                    autoComplete="cc-exp"
                    className="block border-gray-500 focus:ring-green-500 focus:border-green-500 text-sm"
                  />
                  <span role="alert" className="inline-block w-full text-sm text-red-500 min-h-[1.25]">
                    {formState.errors.expirationDate?.message}
                  </span>
                </div> */}
              </div>

              <div className="w-full sm:w-1/2">
                <FormInput
                  type="text"
                  name="cvc"
                  labelText="CVC"
                  useForm={{ register, formState }}
                  autoComplete="csc"
                />
              </div>
            </div>
          </section>

          <section aria-labelledby="shipping-heading">
            <h2 id="shipping-heading" className="text-lg font-bold text-gray-800 mt-8 mb-5">
              Shipping address
            </h2>

            <FormInput type="text" name="company" labelText="Company" useForm={{ register, formState }} />

            <FormInput type="text" name="address" labelText="Address" useForm={{ register, formState }} />

            <FormInput
              type="text"
              name="apartament"
              labelText="Apartament, suite, etc."
              useForm={{ register, formState }}
            />

            <FormInput type="text" name="city" labelText="City" useForm={{ register, formState }} />

            <div className="sm:flex sm:justify-between sm:space-x-4">
              <div className="w-full sm:w-1/2">
                <FormInput type="text" name="region" labelText="State / Province" useForm={{ register, formState }} />
              </div>

              <div className="w-full sm:w-1/2">
                <FormInput type="text" name="postalCode" labelText="Postal code" useForm={{ register, formState }} />
              </div>
            </div>
          </section>

          <section aria-labelledby="billing-heading">
            <h2 id="billing-heading" className="text-lg font-bold text-gray-800 mt-8 mb-5">
              Billing information
            </h2>

            <FormInput
              type="checkbox"
              name="asShipping"
              labelText="Same as shipping information"
              useForm={{ register, formState }}
              defaultChecked={true}
            />
            {/* <div className="mt-5 flex items-center">
              <input id="as-shipping" {...register('asShipping')} type="checkbox" defaultChecked />
              <label htmlFor="as-shipping" className="block text-sm font-medium text-gray-600 my-1">
                Same as shipping information
              </label>
            </div> */}
          </section>

          <div className="flex justify-center my-5">
            <button type="submit" className="w-1/2 bg-green-400 border py-2">
              Continue
            </button>
          </div>
        </form>
      </div>

      <hr className="my-10" />

      <div className="flex flex-col mx-auto w-full max-w-lg lg:max-w-none lg:w-1/2 p-4">
        <section aria-labelledby="summary-heading">
          <h2 id="summary-heading" className="text-lg font-bold text-gray-800 mt-8 mb-5">
            Order Summary
          </h2>

          <ul className="font-medium text-sm text-gray-800 divide-y divide-gray-300">
            {products.map((product) => (
              <li key={product.id} className="flex space-x-4 py-3">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-20 h-20 rounded-md object-center object-cover"
                />
                <div className="flex-auto space-y-1">
                  <h3>{product.name}</h3>
                  <p className="text-gray-400">{product.color}</p>
                  <p className="text-gray-400">{product.size}</p>
                </div>
                <p className="text-base">{product.price}</p>
              </li>
            ))}
          </ul>

          <dl className="text-sm font-medium text-gray-800 space-y-5 mt-4">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd>$70.00</dd>
            </div>

            <div className="flex justify-between">
              <dt>Shipping</dt>
              <dd>$15.00</dd>
            </div>

            <div className="flex justify-between">
              <dt>Taxes</dt>
              <dd>$16.80</dd>
            </div>

            <div className="flex justify-between text-base">
              <dt>Total</dt>
              <dd>$101.80</dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
};
