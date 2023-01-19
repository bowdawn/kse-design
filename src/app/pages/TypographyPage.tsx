import React from "react";
import { primaryColor } from "src/core/constants/color";

export const TypographyPage: React.FC = () => {
  return (
    <>
      <div className="kse-text-small">Small Text</div>
      <br />
      <div className="kse-text">Basic Text</div>
      <br />
      <div className="kse-text-middle">Middle Text</div>
      <br />
      <div className="kse-text-large">Large Text</div>
      <br />
      <div className="kse-text-primary-bg" style={{ background: primaryColor }}>
        Primary Background Text
      </div>
      <br />
      <div className="kse-link-hover">Link Text</div>
      <br />
      <div className="kse-link-bold-hover">Bold Link</div>
    </>
  );
};
