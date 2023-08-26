import { star } from "../assets/icons";

const ReviewCard = ({
  customerName1,
  customerName2,
  id,
  rating,
  neymar,
  ronaldo,
  imgURL,
  feedback,
}) => {
  console.log(customerName1);
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={id == 0 ? neymar : ronaldo}
        className="rounded-full object-cover w-[120px] h-[120px]"
        alt=""
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          className="object-contain m-0"
          alt=""
        />
        <p className="text-lg font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="font-bold font-palanquin text-2xl mt-2">
        {id === 1 ? customerName1 : customerName2}
      </h3>
    </div>
  );
};

export default ReviewCard;
