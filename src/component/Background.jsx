const Background = ({ formData }) => {
  console.log(formData);
  return (
    <section className="bg-main-desktop max-xl:bg-main-mobile max-xl:w-full max-xl:h-fit max-xl:bg-cover relative h-full bg-cover w-4/12 max-sm:py-8 bg-no-repeat flex flex-col max-xl:flex-col-reverse max-xl:items-center justify-center gap-7">
      <div className="bg-card-front z-50 max-xl:absolute max-xl:top-52 max-xl:right-0 max-xl:left-0  max-sm:mx-0 max-sm:left-32 max-[480px]:left-5 max-sm:top-44 max-xl:mx-auto bg-cover bg-no-repeat max-sm:w-[300px] max-sm:h-[200px] w-[447px] h-[245px] py-8 px-8 flex flex-col justify-between gap-16 max-sm:gap-5 text-white ml-40 shadow-2xl rounded-lg">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full w-10 h-10"></div>
          <div className=" border border-white rounded-full w-5 h-5"></div>
        </div>
        <div className="flex flex-col gap-5">
          <p className=" text-2xl max-sm:text-lg tracking-widest">{formData.number}</p>
          <div className="flex justify-between">
            <p>{formData.name.toUpperCase()}</p>
            <p>
              {formData.mm}/{formData.yy}
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-card-back ml-60 max-xl:h-[350px] max-xl:mt-10 w-[447px] h-[245px] max-sm:w-[300px] max-sm:mt-0 max-sm:mr-32 max-sm:h-[200px] bg-no-repeat shadow-2xl rounded-xl max-xl:ml-32">
        <p className="text-white font-medium absolute top-[108px] max-sm:right-3 right-16">
          {formData.cvc}
        </p>
      </div>
    </section>
  );
};

export default Background;
