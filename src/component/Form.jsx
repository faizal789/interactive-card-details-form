import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ setFormData, setIsComplete }) => {
  const [inputFocus, setInputFocus] = React.useState(false);
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    setFormData(data);
    setIsComplete(true);
  };

  const handleFocus = (inputName) => {
    setInputFocus((prevFocus) => ({ ...prevFocus, [inputName]: true }));
  };

  const handleBlur = (inputName) => {
    setInputFocus((prevFocus) => ({ ...prevFocus, [inputName]: false }));
  };

  const handleInputChange = (e) => {
    const inputValueWithoutSpaces = e.target.value.replace(/\s/g, "");
    const formattedValue = inputValueWithoutSpaces.replace(/(\S{4})/g, "$1 ");

    setValue("number", formattedValue.trim());
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-auto max-sm:w-11/12 max-sm:my-20 max-xl:my-12 flex flex-col w-1/3 max-xl:w-9/12 gap-5"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="">CARDHOLDER NAME</label>
        <div
          className={`box-border p-[2px] ${
            inputFocus["name"]
              ? "bg-gradient-to-r from-middle-washed-purple to-dark-violet  rounded-lg "
              : ""
          }`}
        >
          <input
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
            onFocus={() => handleFocus("name")}
            onBlur={() => handleBlur("name")}
            type="text"
            className={`rounded-md px-3 h-10 border outline-none w-full ${
              errors.name ? " border-red-input-errors-primary" : ""
            }`}
            placeholder="e.g. Jane Appleseed"
          />
        </div>
        {errors.name?.type === "required" && (
          <p role="alert" className=" text-red-input-errors-primary">
            {`Can't`} be blank
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="">CARD NUMBER</label>
        <div
          className={`box-border p-[2px] ${
            inputFocus["number"]
              ? "bg-gradient-to-r from-middle-washed-purple to-dark-violet  rounded-lg"
              : ""
          }`}
        >
          <input
            {...register("number", {
              required: true,
              pattern: /^\d+(\s\d+)*$/,
            })}
            aria-invalid={errors.number ? "true" : "false"}
            onFocus={() => handleFocus("number")}
            onBlur={() => handleBlur("number")}
            onChange={handleInputChange}
            type="text"
            className={`rounded-md px-3 h-10 border outline-none w-full ${
              errors.number ? " border-red-input-errors-primary" : ""
            }`}
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength={19}
          />
        </div>
        {errors.number?.type === "required" && (
          <p role="alert" className=" text-red-input-errors-primary">
            {`Can't`} be blank
          </p>
        )}
        {errors.number?.type === "pattern" && (
          <p role="alert" className=" text-red-input-errors-primary">
            Wrong format, numbers only
          </p>
        )}
      </div>
      <div className="flex justify-between gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="">EXP. DATE (MM/YY)</label>
          <div className="flex gap-2">
            <div className="flex flex-col">
              <div
                className={`box-border p-[2px] h-fit w-fit ${
                  inputFocus["mm"]
                    ? "bg-gradient-to-r from-middle-washed-purple to-dark-violet  rounded-lg"
                    : ""
                }`}
              >
                <input
                  {...register("mm", { required: true })}
                  aria-invalid={errors.mm ? "true" : "false"}
                  onFocus={() => handleFocus("mm")}
                  onBlur={() => handleBlur("mm")}
                  className={`rounded-md px-3 h-10 border outline-none w-24 ${
                    errors.mm ? " border-red-input-errors-primary" : ""
                  }`}
                  type="text"
                  placeholder="MM"
                  maxLength={2}
                />
              </div>
              {errors.mm?.type === "required" && (
                <p role="alert" className="text-red-input-errors-primary">
                  {" "}
                  {`Can't`} be blank
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <div
                className={`box-border p-[2px] h-fit w-fit ${
                  inputFocus["yy"]
                    ? "bg-gradient-to-r from-middle-washed-purple to-dark-violet  rounded-lg"
                    : ""
                }`}
              >
                <input
                  {...register("yy", { required: true })}
                  aria-invalid={errors.yy ? "true" : "false"}
                  onFocus={() => handleFocus("yy")}
                  onBlur={() => handleBlur("yy")}
                  className={`rounded-md px-3 h-10 border outline-none w-24 ${
                    errors.yy ? " border-red-input-errors-primary" : ""
                  }`}
                  type="text"
                  placeholder="YY"
                  maxLength={2}
                />
              </div>
              {errors.yy?.type === "required" && (
                <p role="alert" className="text-red-input-errors-primary">
                  {" "}
                  {`Can't`} be blank
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">CVC</label>
          <div
            className={`box-border p-[2px] ${
              inputFocus["cvc"]
                ? "bg-gradient-to-r from-middle-washed-purple to-dark-violet  rounded-lg"
                : ""
            }`}
          >
            <input
              {...register("cvc", { required: true })}
              aria-invalid={errors.cvc ? "true" : "false"}
              onFocus={() => handleFocus("cvc")}
              onBlur={() => handleBlur("cvc")}
              className={`rounded-md px-3 h-10 border outline-none w-full ${
                errors.cvc ? " border-red-input-errors-primary" : ""
              }`}
              type="text"
              placeholder="e.g. 123"
            />
          </div>
          {errors.cvc?.type === "required" && (
            <p role="alert" className="text-red-input-errors-primary">
              {" "}
              {`Can't`} be blank
            </p>
          )}
        </div>
      </div>
      <button className="bg-very-dark-violet-neutral text-white rounded-lg py-3 text-lg mt-5 active:bg-gradient-to-r active:from-middle-washed-purple active:to-dark-violet w-full">
        Confirm
      </button>
    </form>
  );
};

export default Form;
