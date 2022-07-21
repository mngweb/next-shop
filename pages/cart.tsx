import { useCart } from '../components/Cart/CartContext';

const CartContent = () => {
  const cartContext = useCart();

  return (
    <div className="col-span-2">
      <ul className="divide-y divide-gray-200">
        {cartContext.items.map((item, index) => (
          <li key={`${item.title}_${index}`} className="flex justify-between py-4">
            <div>
              {item.count} x {item.title}
            </div>
            <div>
              {item.price}$
              <button className="ml-4 text-red-400" onClick={() => cartContext.removeItemFromCart(item.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-label="Remove item"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CartSummary = () => {
  const cartContext = useCart();

  return (
    <div>
      Cart summary
      <div className="font-bold">Items count: {cartContext.items.length}</div>
      <button className="text-white bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        Checkout
      </button>
    </div>
  );
};

const CartPage = () => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="grid grid-cols-3 gap-8">
        <CartContent />
        <CartSummary />
      </div>
    </div>
  );
};

export default CartPage;
