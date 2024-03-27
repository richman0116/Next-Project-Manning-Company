import React, { Suspense } from "react";
import ResetPassword from "@/app/authentication/Resetpassword";

const page = () => {
  return (
    <Suspense>
      <ResetPassword />
    </Suspense>
  );
};

export default page;
