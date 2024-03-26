import React, { Suspense } from "react";
import VerifyEmail from "../authentication/VerifyEmail";
const page = () => {
  return (
    <Suspense>
      <VerifyEmail />
    </Suspense>
  );
};

export default page;
