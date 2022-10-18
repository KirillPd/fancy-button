import * as React from 'react';

interface FormData {
  [key: string]: string;
}

export const useForm = () => {
  const [data, setData] = React.useState<FormData>();

  const register = (inputName: string) => {
    return {
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        setData((prevData) => ({
          ...prevData,
          [inputName]: event.target.value,
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
  };
};
