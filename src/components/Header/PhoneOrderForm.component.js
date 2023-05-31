import { useCallback, useEffect, useState } from "react";
import { validation, textErrors, checkFields } from "./utils";

const initialValues = {
  name: "",
  phone: "",
  company: "",
  "privacy-policy": false,
};

const PhoneOrderForm = ({ isOpen, setIsOpen }) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isCheck, setIsCheck] = useState(false);

  const closeWindow = useCallback(() => {
    setIsOpen(false);
    setFormValues(initialValues);
    setFormErrors({});
    setIsCheck(false);
  }, [setIsOpen]);

  useEffect(() => {
    if (isCheck && !Object.keys(formErrors).length) {
      closeWindow();
    }
  }, [closeWindow, formErrors, isCheck]);

  const handelChange = (e) => {
    const { name, value, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: name === "privacy-policy" ? checked : value,
    });
  };

  const handelSubmit = () => {
    setIsCheck(true);
    setFormErrors(validation(formValues));
  };

  return (
    <>
      {isOpen && (
        <div className="absolute flex flex-col w-[540px] text-center top-0 right-0 bg-gray rounded-md p-14 font-medium text-xl">
          <button onClick={closeWindow} className="absolute right-10 top-10">
            <img src="./images/cross.svg" alt="cross" />
          </button>
          <h3 className="text-green text-3xl font-medium mb-7">
            Phone Order Form
          </h3>
          <p className="mb-7 text-base font-normal">
            Please provide the information below. We will contact you as soon as
            possible regarding your order.
          </p>
          <input
            className="rounded bg-[#515151] text-green p-3 text-sm font-normal mb-1"
            name="name"
            placeholder="Name*"
            value={formValues.name}
            onChange={handelChange}
          />
          {formErrors.name && (
            <p className="text-red-500">
              {textErrors(formErrors.name, checkFields.name[formErrors.name])}
            </p>
          )}
          <input
            className="rounded bg-[#515151] text-green p-3 text-sm font-normal mb-1 mt-5"
            placeholder="Phone*"
            name="phone"
            value={formValues.phone}
            onChange={handelChange}
          />
          {formErrors.phone && (
            <p className="text-red-500">
              {textErrors(
                formErrors.phone,
                checkFields.phone[formErrors.phone]
              )}
            </p>
          )}
          <input
            className="rounded bg-[#515151] text-green p-3 text-sm font-normal mb-1 mt-5"
            placeholder="Company*"
            name="company"
            value={formValues.company}
            onChange={handelChange}
          />
          {formErrors.company && (
            <p className="text-red-500">
              {textErrors(
                formErrors.company,
                checkFields.company[formErrors.company]
              )}
            </p>
          )}
          <button
            onClick={handelSubmit}
            className="bg-green py-4 rounded mb-7 mt-7"
          >
            Send
          </button>
          <div>
            <input
              type="checkbox"
              name="privacy-policy"
              value={formValues["privacy-policy"]}
              onChange={handelChange}
            />
            <span className="text-base font-normal ml-2">
              I have read and accepted Privacy Policy
            </span>
          </div>
          {formErrors["privacy-policy"] && (
            <p className="text-red-500">
              {textErrors(
                formErrors["privacy-policy"],
                checkFields["privacy-policy"][formErrors["privacy-policy"]]
              )}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default PhoneOrderForm;
