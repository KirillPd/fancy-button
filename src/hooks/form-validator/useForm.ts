import * as React from 'react';

interface FormData {
  [key: string]: string;
}

export interface FormConfig {
  validation: {
    rules: {
      [key: string]: (value?: string) => boolean;
    };
  };
}

export const useForm = ({ validation }: FormConfig) => {
  const [data, setData] = React.useState<FormData>();
  const [isValid, setIsValid] = React.useState(false);

  const register = (inputName: string) => {
    return {
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = event.target.value;

        if (validation.rules[inputName]) {

        }

          setData((prevData) => ({
            ...prevData,
            [inputName]: ,
          }));
      },
    };
  };

  const handleSubmit = (callback: (data?: FormData) => Promise<void>) => {
    return (event: React.SyntheticEvent) => {
      event.preventDefault();
      callback(data);
    };
  };

  return {
    register,
    handleSubmit,
    isValid,
  };
};
