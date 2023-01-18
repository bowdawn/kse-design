import React from "react";

export const ButtonPage: React.FC = () => {
  return (
    <>
      <div>default button</div>
      <button className="kse-btn kse-btn-default">default</button>
      <div>primary button</div>
      <button className="kse-btn kse-btn-primary">primary</button>
      <div>primary large button</div>
      <button className="kse-btn kse-btn-primary kse-btn-large">primary</button>
    </>
  );
};
