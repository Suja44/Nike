const ShoeCard = ({ shoe, handleClick, bigShoe }) => {
  return (
    <div
      className={`${
        bigShoe === shoe.bigShoe ? "border-coral-red" : "border-transparent"
      } border-2 rounded-xl cursor-pointer max-sm:flex-1  bg-center bg-card bg-cover sm:h-40 sm:w-40 max-sm:p-4 flex justify-center items-center hover:border-black`}
      onClick={() => handleClick(shoe.bigShoe)}
    >
      <img
        src={shoe.thumbnail}
        width={127}
        height={103}
        className="object-contain"
        alt=""
      />
    </div>
  );
};

export default ShoeCard;
