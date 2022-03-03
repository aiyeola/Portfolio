import { Select, TextArea } from "components";
import React from "react";
import Input from "./Input";

const options = [
  { name: "Option 1", value: "option1" },
  { name: "Option 2", value: "option2" },
  { name: "Option 2", value: "option3" },
];

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="bg-white max-w-lg p-12 rounded-md"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h3 className="text-dark text-lg md:text-2xl font-bold">Get In Touch</h3>
      <Input type="email" placeholder="You Email" />
      <Select options={[...options]} placeholder="Subject" />
      <TextArea placeholder="Your Message"></TextArea>
    </form>
  );
};

export default Form;
