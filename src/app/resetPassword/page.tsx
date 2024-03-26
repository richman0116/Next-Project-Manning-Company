import React, { Suspense } from "react";
import ResetPassword from "../authentication/ResetPassword";

const page = () => {
  return (
    <Suspense>
      <ResetPassword />
    </Suspense>
  );
};

export default page;
