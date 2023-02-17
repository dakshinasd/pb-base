import React from "react";

const Input = (props: React.ComponentPropsWithoutRef<"input">) => {
  return (
    <input
      {...props}
      className="p-2 outline-none border border-slate-200 rounded"
    />
  );
};

export default Input;
