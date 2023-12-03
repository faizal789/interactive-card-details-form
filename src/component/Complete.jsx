const Complete = () => {
  return (
    <section className="my-auto max-xl:my-20 text-center flex flex-col gap-5">
      <img src="images/icon-complete.svg" className="mx-auto" alt="" />
      <div>
        <h1 className="text-4xl text-very-dark-violet-neutral">THANK YOU!</h1>
        <p className="text-lg text-dark-grayish-violet-neutral">{`We've`} added your card details</p>
      </div>
      <button className="bg-very-dark-violet-neutral text-white rounded-lg py-3 text-lg mt-5 active:bg-gradient-to-r active:from-middle-washed-purple active:to-dark-violet w-96 max-sm:w-72 mx-auto">
        Continue
      </button>
    </section>
  );
};

export default Complete;
