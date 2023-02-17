import React from "react";

const Button = (props: React.ComponentPropsWithoutRef<"button">) => {
  return (
    <button
      {...props}
      className="py-2 px-4 outline-none border border-blue-700 bg-blue-600 text-white rounded text-center"
    >
      {props.children}
    </button>
  );
};

export default Button;
