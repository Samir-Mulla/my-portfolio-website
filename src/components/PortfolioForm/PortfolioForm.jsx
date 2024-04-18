import React, { useState } from "react";
import { useForm } from "react-hook-form";

function PortfolioForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  // Use state to manage the phone number value
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, ""); // Remove non-numeric characters
    setPhoneNumber(numericValue);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("access_key", "4dada8b0-74af-4d7f-be2b-731eb1829698");

    // Append form data to FormData object
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error("Error submitting form:", error);
      });

    if (res.success) {
      console.log("Success", res);
      reset(); // Reset the form
      setPhoneNumber(""); // Clear the phone number state
      alert(`Form data sent successfully!`);
    }
  };

  return (
    <>
      <section
        id="contactMe"
        className="mt-32 bg-background3 bg-no-repeat scroll-mt-20"
      >
        <h1 className="text-center font-thin italic text-8xl font-customFont">
          Contact<span className="underline">Me</span> :
        </h1>

        <div className="py-20 font-customFont">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 max-w-md mx-auto p-6 rounded-md shadow-md border"
          >
            <div className="mb-4">
              <label
                htmlFor="FullName"
                className="block text-2xl font-medium text-gray-700"
              >
                <span className="text-red-600">*</span> Full Name
              </label>
              <input
                type="text"
                id="FullName"
                {...register("FullName", { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border text-xl px-3 py-3"
                placeholder="Enter your full name"
              />
              {errors.FullName && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="Email ID"
                className="block text-2xl font-medium text-gray-700"
              >
                <span className="text-red-600">*</span> Email ID
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border text-xl px-3 py-3"
                placeholder="Enter your email id"
              />
              {errors.email && (
                <span className="text-red-500">Please enter a valid email</span>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="Phone Number"
                className="block text-2xl font-medium text-gray-700"
              >
                <span className="text-red-600">*</span> Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+91 12345-67890"
                {...register("phone", {
                  required: true,
                })}
                value={phoneNumber} // Use state value for the input
                onChange={handlePhoneNumberChange}
                maxLength={10}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border text-xl px-3 py-3"
              />
              {errors.phone && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="BusinessSector"
                className="block text-2xl font-medium text-gray-700"
              >
                Business Sector or Industry
              </label>
              <input
                type="text"
                id="BusinessSector"
                {...register("BusinessSector", { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border text-xl px-3 py-3"
                placeholder="Enter your Sector eg: Ecommerce, Healthcare."
              />
              {errors.BusinessSector && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="BusinessRequirements"
                className="block text-2xl font-medium text-gray-700"
              >
                <span className="text-red-600">*</span> Your Business
                Requirements
              </label>
              <textarea
                id="BusinessRequirements"
                {...register("BusinessRequirements", { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border text-xl px-3 py-3 h-36"
                placeholder="eg : Our company sells high-quality fans for homes and businesses. We want to showcase these products on our website and enable transactions to occur."
              />
              {errors.BusinessRequirements && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="Deadline"
                className="block text-2xl font-medium text-gray-700"
              >
                Deadline for Completion
              </label>
              <input
                type="date"
                id="Deadline"
                {...register("Deadline")}
                className="border px-4 mt-3"
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 my-3 rounded-md  focus:outline-none text-xl"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default PortfolioForm;
