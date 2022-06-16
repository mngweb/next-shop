import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full mx-auto">
      <nav className="bg-gray-700 text-white px-4 py-2">
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>     
      </nav>
    </header>
  );
};
