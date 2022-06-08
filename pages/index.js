import { Heading } from "../src/components/Heading";
import Catalog from "../src/components/Catalog";


export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/data");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { items: data.items },
  };
};

const Home = ({ items }) => {


  return (
    <>
      <Heading>Catalog</Heading>
      <Catalog items={items} />
    </>
  );
};

export default Home;
