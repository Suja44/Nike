import Button from "../components/Button";
const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex max-lg:flex-col gap-10 justify-evenly items-center"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-lg font-palanquin font-bold">
        Sign Up from <span className="text-coral-red">Updates</span> &
        Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subsribe@nike.com"
          name=""
          id=""
          className="input"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full ">
          <Button label="Sign Up" fullWidth></Button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
