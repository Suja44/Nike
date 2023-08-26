const Button = ({
  label,
  iconURL,
  bgColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={` flex items-center justify-center gap-2 ${
        bgColor
          ? `${bgColor} ${borderColor} ${textColor}`
          : "bg-coral-red text-white border-coral-red"
      }  rounded-full  py-4 px-7 font-montserrat text-lg leading-none border ${
        fullWidth && "w-full"
      }`}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="ArrowRightIcon" className="ml-2 w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
