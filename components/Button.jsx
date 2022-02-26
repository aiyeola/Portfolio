import React from "react";

const Button = ({ children, variant, link }) => {
  const getStyles = () => {
    let styles;
    if (variant === "dark") {
      return (styles = "bg-primary hover:bg-purple-600");
    } else if (variant == "light") {
      return (styles = "bg-white text-black shadow-md hover:shadow-xl ");
    } else if (variant == "outline") {
      return (styles = "bg-transparent text-white border-2 border-gray-600 ");
    } else {
      return (styles = "bg-accent hover:bg-red-500");
    }
  };

  const styles = getStyles();

  return (
    <button
      className={`${styles} px-10 md:px-12 py-2 md:py-3 rounded-lg text-white font-bold md:font-black uppercase text-sm hover:scale-95 duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;
