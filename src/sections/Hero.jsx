import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from "../constants";
import ShoeCard from "../components/ShoeCard";
import Button from "../components/Button";
import { useState } from "react";
const Hero = () => {
  const [CurrentShoe, SetShoe] = useState(bigShoe1);
  const ChangeBigShoeImage = (shoe) => {
    SetShoe(shoe);
  };

  return (
    <section
      id="home"
      className="w-full flex max-lg:flex-col justify-evenly min-h-screen  max-container"
    >
      <div className="  w-1/2 max-lg:w-full relative  flex flex-col justify-center items-start px-[4rem] flex-shrink-0 pt-[7.5rem]  ">
        <p className="text-2xl font-montserrat text-coral-red">
          Our summer collections
        </p>
        <h1 className="text-[6.8rem]  max-xl:text-[85px] font-bold mt-10  font-palanquin ">
          <span className="bg-white relative z-10 lg:whitespace-nowrap ">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>
          <span> Shoes</span>
        </h1>
        <p className="font-montserrat text-slate-gray leading-8 text-lg mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight}></Button>
        <div className="flex justify-start items-start flex-1 flex-nowrap w-full mt-10 mb-10 gap-12">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative max-lg:w-full max-lg:h-[80vh] w-1/2 max-lg:pt-10 bg-primary bg-hero bg-cover bg-center px-10 flex flex-col max-lg:justify-start  justify-center gap-10 items-center">
        <img
          src={CurrentShoe}
          className="object-contain relative z-10 "
          alt="shoe collection"
          width={510}
          height={400}
        />
        <div className="flex absolute -bottom-[5%] gap-6 max-sm:gap-4 ">
          {shoes.map((shoe, index) => (
            <div key={shoe}>
              <ShoeCard
                shoe={shoe}
                handleClick={ChangeBigShoeImage}
                bigShoe={CurrentShoe}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
