import Navbar from "@/components/layout/navbar";
import React, { PropsWithChildren } from "react";

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default AppLayout;
