import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const DATA = {
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti magnam a ducimus enim! Reprehenderit quisquam molestias nihil dolor ducimus! Sapiente aspernatur dolore ssimus, veritatis soluta consectetur commodi fugiat ducimus iusto!',
  imageUrl: 'https://picsum.photos/1080/640',
  imageAlt: 'Random picture',
  rating: 4.5,
}

const Home = () => {
  return (
    <div className="flex flex-col bg-teal-200 min-h-screen">
      <Header />
      <main className="flex-grow max-w-2xl mx-auto p-6 grid gap-4 sm:grid-cols-2">
        <img src={DATA.imageUrl} alt={DATA.imageAlt} />
        {/* <Image src="https://picsum.photos/1080/640" alt="Random picture" width='100%' height='100%' objectFit='contain'/> */}
        <p>{DATA.description}</p>
        <div className='text-blue-500 font-bold'>{DATA.rating}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
