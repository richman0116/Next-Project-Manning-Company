import React, { Suspense } from "react";
import Resetpassword from "../authentication/Resetpassword";
const page = () => {
  return (
    <Suspense>
      <Resetpassword />
    </Suspense>
  );
};

export default page;
