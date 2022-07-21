import { gql, useQuery } from '@apollo/client';
import { Main } from '../components/Main';

const Home = () => {
  //// querying graphql in React component
  // const { loading, error, data } = useQuery(gql`
  //   query GetProductsList {
  //     products {
  //       id
  //       slug
  //       name
  //       price
  //       images(first: 1) {
  //         url
  //       }
  //     }
  //   }
  // `);

  // if (loading) {
  //   return <Main>Loading..</Main>;
  // }

  // if (loading) {
  //   return <Main>{JSON.stringify(error)}</Main>;
  // }

  // return (
  //   <Main>
  //     <pre>{JSON.stringify(data, null, 2)}</pre>
  //   </Main>
  // );

  return <Main>Hello in the Store!</Main>;
};

export default Home;
