import React from "react";

const Button = ({text,className,onClick}) => {
  return (
    
      <button  onClick={onClick}  className={`${className} border-1 rounded-full  w-full  px-4 py-2 `}>
        {text}
      </button>
    
  );
};

export default Button;
