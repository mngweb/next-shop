import { useCart } from '../components/Cart/CartContext';

const CartPage = () => {
  const cartContext = useCart();

  return (
    <div>
      <ul>
        {cartContext.items.map((item, index) => (
          <li key={`${item.title}_${index}`}>
            {item.title} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
