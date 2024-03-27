import React, { Suspense } from "react";
import VerifyEmail from "@/app/authentication/Verifyemail";
const page = () => {
  return (
    <Suspense>
      <VerifyEmail />
    </Suspense>
  );
};

export default page;
