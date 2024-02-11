import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: async (values) => {
      try {
        await submit("your-api-endpoint", values);

        if (response.type === "success") {
          formik.resetForm();
          onOpen("success", response.message);
        } else {
          onOpen("error", response.message);
        }
      } catch (error) {
        console.error("API call failed:", error);
        onOpen(
          "error",
          "An unexpected error occurred. Please try again later."
        );
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      type: Yup.string().required("Type of enquiry is required"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Your message is required"),
    }),
  });

  return (
    <FullScreenSection isDarkBackground className="mt-16">
      <div id="contact-section" className="container p-16 flex flex-col w-full sm:w-3/4 md:w-2/3 xl:w-1/2 px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="mt-8 text-center text-3xl md:text-4xl font-bold text-white">Contact Me</h2>
        <div className="m-8">
          <form onSubmit={formik.handleSubmit}>
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-0.5 text-sm font-medium text-white"
                >
                  Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                  className="block w-full rounded-md bg-gray-800 px-3 py-2 border border-gray-300 focus:ring-purple-500 focus:outline-purple-500 focus:outline-2"
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.firstName}
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-0.5 text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  className="block w-full rounded-md bg-gray-800 px-3 py-2 border border-gray-300 focus:ring-purple-500 focus:outline-purple-500 focus:outline-2"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="type"
                  className="block mb-0.5 text-sm font-medium text-white"
                >
                  Type of enquiry
                </label>
                <select
                  id="type"
                  name="type"
                  {...formik.getFieldProps("type")}
                  className="block w-full rounded-md bg-gray-800 px-3 py-2 border border-gray-300 focus:ring-purple-500 focus:outline-purple-500 focus:outline-2"
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="comment"
                  className="block mb-0.5 text-sm font-medium text-white"
                >
                  Your message
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  {...formik.getFieldProps("comment")}
                  className="block w-full rounded-md bg-gray-800 px-3 py-2 border border-gray-300 focus:ring-purple-500 focus:outline-purple-500 focus:outline-2 h-40"
                />
                {formik.touched.comment && formik.errors.comment && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.comment}
                  </div>
                )}
              </div>
              <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center px-12 py-2 rounded-md text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
              >
                Submit
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </FullScreenSection>
  );
};

export default LandingSection;
