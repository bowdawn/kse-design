import React from "react";
import HeartPlusOutlined from "../../core/svg/heart-plus-outlined.svg";
export const ButtonPage: React.FC = () => {
  return (
    <>
      <h1>Styles</h1>
      <div>primary button</div>
      <button className="kse-btn kse-btn-primary">primary</button>
      <div>default button</div>
      <button className="kse-btn kse-btn-default">default</button>
      <div>danger button</div>
      <button className="kse-btn kse-btn-danger">danger</button>
      <div>icon button</div>
      <div className="kse-space kse-space-middle">
        <button className="kse-btn kse-btn-default kse-btn-large kse-btn-circle">
          <HeartPlusOutlined style={{ display: "block", height: 18 }} />
        </button>
        <button className="kse-btn  kse-btn-large kse-btn-circle kse-btn-danger">
          <HeartPlusOutlined style={{ display: "block", height: 18 }} />
        </button>
      </div>
      <div>default active button</div>
      <button className="kse-btn kse-btn-default-active">default active</button>
      <div>primary large button</div>
      <button className="kse-btn kse-btn-primary kse-btn-large">primary</button>
      <div>compact default button (border-radius: 0px)</div>
      <button className="kse-btn kse-btn-default kse-btn-compact">
        default compact
      </button>
      <div>disabled button </div>
      <button className="kse-btn kse-btn-default kse-btn-disabled">
        disabled
      </button>
    </>
  );
};
