import React, { Children } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      Navbar{children}
      Footer
    </div>
  );
};

export default layout;
