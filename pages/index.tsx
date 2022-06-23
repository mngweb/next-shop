import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { ProductDetails } from '../components/Product';

const DATA = [
  {
    id: '1',
    title: 'Deleniti magnam a ducimus enim!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti magnam a ducimus enim! Reprehenderit quisquam molestias nihil dolor ducimus! Sapiente aspernatur dolore ssimus, veritatis soluta consectetur commodi fugiat ducimus iusto!',
    imageUrl: 'https://picsum.photos/1080/640',
    imageAlt: 'Random picture',
    rating: 4.5,
  },
  {
    id: '2',
    title: 'Deleniti magnam a ducimus enim!',
    description:
      'Deleniti magnam a ducimus enim! Reprehenderit quisquam molestias nihil dolor ducimus! Sapiente aspernatur dolore ssimus, veritatis soluta consectetur commodi fugiat ducimus iusto!',
    imageUrl: 'https://picsum.photos/1080/640',
    imageAlt: 'Random picture',
    rating: 3.5,
  },
];

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        {DATA.map((product) => (
          <div key={product.id}>
            <ProductDetails data={product} />
          </div>
        ))}
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
