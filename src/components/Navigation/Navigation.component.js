import { useState, useEffect } from "react";
import UDropdown from "../UI/UDropdown/UDropdown.component";
import { checkFields, textErrors, validation } from "../Header/utils";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  company: "",
  position: "",
  textarea: "",
  "privacy-policy": false,
};

const Navigation = () => {
  const [value, setValue] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    if (isCheck && !Object.keys(formErrors).length) {
      closeContactUs();
    }
  }, [formErrors, isCheck]);

  const handelChange = (e) => {
    const { name, value, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: name === "privacy-policy" ? checked : value,
    });
  };

  const handelSubmit = () => {
    setFormErrors(validation(formValues));
    setIsCheck(true);
  };

  const openContactUs = () => {
    setValue(true);
    document.querySelector("body").style.overflow = "hidden";
  };

  const closeContactUs = () => {
    setValue(false);
    setFormValues(initialValues);
    setFormErrors({});
    setIsCheck(false);
    document.querySelector("body").style.removeProperty("overflow");
  };

  return (
    <nav>
      <ul className="flex gap-7 xl:gap-[50px]">
        <li>
          <a className="hover:text-green active:text-[#16DB33]" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-green active:text-[#16DB33]" href="/">
            About us
          </a>
        </li>
        <li>
          <a className="hover:text-green active:text-[#16DB33]" href="/">
            Аchievements
          </a>
        </li>
        <UDropdown />
        <li>
          <button
            onClick={openContactUs}
            className="hover:text-green active:text-[#16DB33]"
          >
            Contact Us
          </button>
        </li>
        <div
          className={`${
            value ? "bg-opacity-1 " : "opacity-0 invisible "
          }w-screen h-screen fixed right-0 top-0 z-10 flex items-center justify-center transition duration-300 bg-black`}
        >
          <div className="flex flex-col w-[750px] text-left p-14">
            <button
              onClick={closeContactUs}
              className="absolute right-10 top-10"
            >
              <img src="./images/cross.svg" alt="cross" />
            </button>
            <p className="text-xl font-medium text-green mb-7">Contact us</p>
            <h3 className="text-5xl mb-5">Send us a message</h3>
            <p className="mb-7">
              We are always here to help. Our consultation is totally free!
            </p>
            <div className="flex w-full">
              <div className="flex flex-col grow mr-5">
                <input
                  className="rounded bg-[#515151] text-green p-3 text-sm font-normal"
                  name="name"
                  placeholder="Name*"
                  value={formValues.name}
                  onChange={handelChange}
                />
                {formErrors.name && (
                  <p className="text-red-500">
                    {textErrors(
                      formErrors.name,
                      checkFields.name[formErrors.name]
                    )}
                  </p>
                )}
                <input
                  className="rounded bg-[#515151] text-green p-3 text-sm font-normal mt-5"
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
                  className="rounded bg-[#515151] text-green p-3 text-sm font-normal mt-5"
                  name="email"
                  placeholder="E-mail"
                  value={formValues.email}
                  onChange={handelChange}
                />
                <input
                  className="rounded bg-[#515151] text-green p-3 text-sm font-normal mt-5"
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
                <input
                  className="rounded bg-[#515151] text-green p-3 text-sm font-normal mt-5"
                  name="position"
                  placeholder="Position"
                  value={formValues.position}
                  onChange={handelChange}
                />
              </div>
              <div className="grow">
                <textarea
                  className="rounded bg-[#515151] text-green p-3 text-sm font-normal w-full h-full"
                  placeholder="I need help. I need advice on labeling equipment."
                  name="textarea"
                  value={formValues.textarea}
                  onChange={handelChange}
                />
              </div>
            </div>
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
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
