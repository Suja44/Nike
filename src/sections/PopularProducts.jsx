import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";
const PopularProducts = () => {
  return (
    <section id="products" className=" max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-10">
        <h1 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p className="font-montserrat lg:max-w-lg text-slate-gray text-lg ">
          Experience top-notch quality and style with our sought-after
          selections.Discover a world of comfort, design and value
        </p>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-16">
          {products.map((product, index) => (
            <PopularProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
