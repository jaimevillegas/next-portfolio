import React from "react";

function SectionHeader({ children }: { children: string }) {
  return (
    <h2 className="text-3xl text-center mb-8 font-medium capitalize">
      {children}
    </h2>
  );
}

export default SectionHeader;
