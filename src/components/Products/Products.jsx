import CardProduct from "./CardProduct";
import { products } from "@/utils/mockData";

const Products = () => {
  return (
    <section
      className="text-gray-600 body-font text-pretty  relative"
      style={{
        backgroundImage: "url(/assets/b2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container px-5 py-3 mx-auto">
        <div className="flex flex-col justify-center items-center h-full text-gray-900">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-10 mt-10">
            Nuestras creaciones
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <CardProduct
              key={product.title}
              title={product.title}
              subtitle={product.subtitle}
              text={product.text}
              img={product.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
