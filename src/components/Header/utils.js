export const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
export const PHONE_NUMBER = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/iu;
export const checkFields = {
  name: {
    required: true,
    min: 2,
    max: 25,
  },
  phone: {
    required: true,
    type: "Phone",
  },
  company: {
    required: true,
  },
  "privacy-policy": {
    value: true,
  }
};

export const textErrors = (key, value) => {
  switch (key) {
    case "min":
      return `Minimum number of characters ${value}`;
    case "max":
      return `Maximum number of characters ${value}`;
    case "required":
      return "Required field";
    case "type":
      return `Invalid ${value}`;
    case "value":
      return `You need to check`;
    default:
      return "";
  }
};

export const validation = (formValues) => {
  const result = {};

  Object.entries(formValues).forEach((item) => {
    if (checkFields[item[0]]) {
      const errors = Object.keys(checkFields[item[0]]).find((key) => {
        switch (key) {
          case "required":
            if (!item[1]) {
              return true;
            }
            break;
          case "min":
            if (item[1].length < checkFields[item[0]][key]) {
              return true;
            }
            break;
          case "max":
            if (item[1].length > checkFields[item[0]][key]) {
              return true;
            }
            break;
          case "type":
            if (!PHONE_NUMBER.test(item[1])) {
              return true;
            }
            break;
          case "value":
            if (!item[1]) {
              return true;
            }
            break;
          default:
            return false;
        }
        return false;
      });
  
      if (errors) {
        result[item[0]] = errors;
      }
    }
  });

  return result;
};
