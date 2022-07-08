import { ActiveLink } from './ActiveLink';
import { CartBar } from './Cart/CartBar';

export const Header = () => {
  return (
    <header className="flex items-center justify-between w-full mx-auto px-4 bg-gray-700">
      <nav className="text-white py-2">
        <ActiveLink href="/" classes="mx-4">
          Home
        </ActiveLink>
        <ActiveLink href="/products" classes="mx-4">
          Products
        </ActiveLink>
        <ActiveLink href="/about" classes="mx-4">
          About
        </ActiveLink>
      </nav>
      <CartBar />
    </header>
  );
};
