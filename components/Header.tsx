import { ActiveLink } from "./ActiveLink";

export const Header = () => {
  return (
    <header className="w-full mx-auto">
      <nav className="bg-gray-700 text-white px-4 py-2">
        <ActiveLink href='/' classes='mx-4'>Home</ActiveLink>
        <ActiveLink href='/about' classes='mx-4'>About</ActiveLink>        
      </nav>
    </header>
  );
};
