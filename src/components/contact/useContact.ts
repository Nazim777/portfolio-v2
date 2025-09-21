import React from "react";
import emailjs from "@emailjs/browser";

interface ContactValues {
  name: string;
  email: string;
  message: string;
  loading: boolean;
  status: boolean | null;
}

const initContactValues = {
  name: "",
  email: "",
  message: "",
  loading: false,
  status: null,
};

const useContact = () => {
  const [contactValues, setContactValues] =
    React.useState<ContactValues>(initContactValues);

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setContactValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.MouseEvent | React.FormEvent) => {
    e.preventDefault();

    setContactValues((prev) => ({
      ...prev,
      name: "",
      email: "",
      message: "",
      loading: true,
      status: null,
    }));

    try {
      const result = await emailjs.send(
        process.env.yourServiceID === undefined
          ? "service_uovbbmq"
          : process.env.yourServiceID,
        process.env.yourTemplateID === undefined
          ? "template_6r7bjk5"
          : process.env.yourTemplateID,
        {
          from_name: contactValues.name,
          to_name: "Mohammad Nazim Hossain",
          user_email: contactValues.email,
          message: contactValues.message,
        },
        process.env.userID === undefined ? "uzjGb2XRbX733mV6S" : process.env.userID
      );
      console.log(result)
      setContactValues((prev) => ({ ...prev, loading: false, status: true }));
    } catch (err) {
      setContactValues((prev) => ({ ...prev, loading: false, status: false }));
    }
  };

  return { contactValues, handleChange, handleSubmit };
};
export default useContact;
