import React, { Suspense } from "react";
import Verifyemail from "../authentication/Verifyemail";
const page = () => {
  return (
    <Suspense>
      <Verifyemail />
    </Suspense>
  );
};

export default page;
