import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const About = () => {
  return (
    <div className="flex flex-col bg-teal-200 min-h-screen">
      <Header />
      <main className="flex-grow max-w-2xl mx-auto p-6 grid gap-4 sm:grid-cols-2">
        <p>
          About page
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
