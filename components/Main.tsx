import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => (
  <main className="bg-teal-100 flex-grow grid gap-4 max-w-5xl mx-auto p-6">{children}</main>
);
