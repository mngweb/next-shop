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

export const CheckoutForm = () => {
  return (
    <div className="bg-white flex justify-center flex-col-reverse lg:flex-row lg:space-x-10 m-5">
      <div className="flex flex-col mx-auto w-full max-w-lg lg:max-w-none lg:w-1/2 p-4">
        <form>
          <section aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-lg font-bold text-gray-800 mt-8 mb-5">
              Contact information
            </h2>

            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-600 my-1">
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email-address"
                  name="emailAddress"
                  autoComplete="email"
                  className="block w-full border-gray-500 focus:ring-green-500 focus:border-green-500 text-sm"
                />
              </div>
            </div>
          </section>

          <section aria-labelledby="payment-heading">
            <h2 id="payment-heading" className="text-lg font-bold text-gray-800 mt-8 mb-5">
              Payment details
            </h2>

            <div>
              <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-600 my-1">
                Name on card
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="name-on-card"
                  name="nameOnCard"
                  autoComplete="cc-name"
                  className="block w-full border-gray-500 focus:ring-green-500 focus:border-green-500 text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="card-number" className="block text-sm font-medium text-gray-600 my-1">
                Card number
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="card-number"
                  name="cardNumber"
                  autoComplete="cc-number"
                  className="block w-full border-gray-500 focus:ring-green-500 focus:border-green-500 text-sm"
                />
              </div>
            </div>

            <div className="sm:flex sm:justify-between sm:space-x-4">
              <div className="w-full sm:w-1/2">
                <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-600 my-1">
                  Expiration date (MM/YY)
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="expiration-date"
                    name="expirationDate"
                    autoComplete="cc-exp"
                    className="block border-gray-500 focus:ring-green-500 focus:border-green-500 text-sm"
                  />
                </div>
              </div>

              <div className="w-full sm:w-1/2">
                <label htmlFor="cvc" className="block text-sm font-medium text-gray-600 my-1">
                  CVC
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="cvc"
                    name="cvc"
                    autoComplete="csc"
                    className="block border-gray-500 focus:ring-green-500 focus:border-green-500 text-sm"
                  />
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="shipping-heading">
            <h2 id="shipping-heading" className="text-lg font-bold text-gray-800 mt-8 mb-5">
              Shipping address
            </h2>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-600 my-1">
                Company
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="block w-full border-gray-500 focus:ring-green-500 focus:border-green-500 text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-600 my-1">
                Address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="address"
                  name="address"
                  autoComplete="street-address"
                  className="block w-full border-gray-500 focus:ring-green-500 focus:border-green-500 text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="apartament" className="block text-sm font-medium text-gray-600 my-1">
                Apartament, suite, etc.
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="apartament"
                  name="apartament"
                  className="block w-full border-gray-500 focus:ring-green-500 focus:border-green-500 text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-600 my-1s">
                City
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="city"
                  name="city"
                  autoComplete="address-level2"
                  className="block w-full border-gray-500 focus:ring-green-500 focus:border-green-500 text-sm"
                />
              </div>
            </div>

            <div className="sm:flex sm:justify-between sm:space-x-4">
              <div className="w-full sm:w-1/2">
                <label htmlFor="region" className="block text-sm font-medium text-gray-600 my-1">
                  State / Province
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="region"
                    name="region"
                    className="block w-full border-gray-500 focus:ring-green-500 focus:border-green-500 text-sm"
                  />
                </div>
              </div>

              <div className="w-full sm:w-1/2">
                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-600 my-1">
                  Postal code
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="postal-code"
                    name="postalCode"
                    className="block w-full border-gray-500 focus:ring-green-500 focus:border-green-500 text-sm"
                  />
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="billing-heading">
            <h2 id="billing-heading" className="text-lg font-bold text-gray-800 mt-8 mb-5">
              Billing information
            </h2>

            <div className="mt-5 flex items-center">
              <input id="as-shipping" name="asShipping" type="checkbox" defaultChecked />
              <label htmlFor="as-shipping" className="block text-sm font-medium text-gray-600 my-1">
                Same as shipping information
              </label>
            </div>
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
