import { useState } from "react";

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(initialValue),
    bind: {
      value,
      onChange: event => {
        if (event.target) {
          setValue(event.target.value);
        } else {
          setValue(event);
        }
      }
    }
  };
};
