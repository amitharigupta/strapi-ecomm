import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "@/utils/api";
import NewsLetter from "@/components/NewsLetter/NewsLetter";

export default function Home({ products }) {

  // console.log(products);
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   const { data } = await fetchDataFromApi('/api/products');
  //   setProducts(data.data);
  // }

  return (
    <>
      <main>
        <HeroBanner />
        {/* {products?.[0]?.attributes?.name} */}
        <Wrapper>
          <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
            <div>
              Heading
            </div>
            <div>
              Paragraph
            </div>
          </div>
        </Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 my-14 ml-16 mr-16 px-5 md:px-0">

          {
            products?.data?.map((product) => {
              return <ProductCard key={product?.id} data={product} />
            })
          }
          {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
        </div>
        <NewsLetter />
      </main>
    </>
  )
}


export async function getStaticProps() {
  const products = await fetchDataFromApi('/api/products?populate=*');

  return {
    props: { products }
  }
}