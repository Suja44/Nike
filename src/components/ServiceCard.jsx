const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="bg-coral-red w-11 h-11 rounded-full flex justify-center items-center">
        <img src={imgURL} alt="" />
      </div>
      <h3 className="mt-5 font-palanquin font-bold text-2xl leading-normal">
        {label}
      </h3>
      <p className="mt-2 break-words text-slate-gray leading-normal ">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
