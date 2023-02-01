import React from "react";
import SearchOutlined from "../../core/svg/search-outlined.svg";

export const IconInput = (
  <div className="kse-input-suffix-wrapper">
    <input className="kse-input" />
    <div>
      <button className="kse-input-btn-suffix kse-btn kse-btn-default">
        <SearchOutlined className="kse-icon-small" />
      </button>
    </div>
  </div>
);

export const InputPage: React.FC = () => {
  return (
    <>
      <div>basic input</div>
      <input className="kse-input" />
      <div>icon input</div>
      {IconInput}
      <div>icon input (wrapper)</div>
      <div className="kse-input-suffix-wrapper kse-input-wrapper">
        <input />
        <a>
          <button className="kse-input-btn-suffix kse-btn kse-btn-default">
            <SearchOutlined className="kse-icon-small" />
          </button>
        </a>
      </div>
    </>
  );
};
