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
      <div className="kse-text-primary">Primary Text</div>
      <br />
      <div className="kse-text-bold">Bold Text</div>
      <br />
      <div className="kse-text-bold kse-text-primary-10">
        Dark Primary Bold Text
      </div>
      <br />
      <div className="kse-text-primary-bg" style={{ background: primaryColor }}>
        Primary Background Text
      </div>
      <br />
      <div className="kse-row" style={{ background: primaryColor }}>
        <div className="kse-link-primary-bg-hover" style={{ padding: 8 }}>
          Primary Background Link
        </div>
      </div>

      <br />
      <div className="kse-link-hover">Link Text</div>
      <br />
      <div className="kse-link-bold-hover">Bold Link</div>
      <br />
      <div className="kse-title-1">Title 1</div>
      <br />
      <div className="kse-title-2">Title 2</div>
      <br />
      <div className="kse-title-3">Title 3</div>
      <br />
      <div className="kse-title-4">Title 4</div>
      <br />
      <div className="kse-title-5">Title 5</div>
      <br />
      <div className="kse-content">
        <div>
          <div className="kse-required">required text</div>
          <input className="kse-input" />
        </div>
        <br />
        <div>
          <div className="kse-required kse-required-absolute">
            required absolute text
          </div>
          <input className="kse-input" />
        </div>
      </div>
    </>
  );
};
