import React, { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="   max-w-[2000px] mx-auto">{children}</div>;
};

export default Wrapper;
