import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => (
  <main className="flex-grow grid gap-4 xl:grid-cols-2 max-w-4xl mx-auto p-6">
    {children}
  </main>
);
