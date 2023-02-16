import React from "react";
import HeartPlusOutlined from "../../core/svg/heart-plus-outlined.svg";
import ShareVariantOutlined from "../../core/svg/share-variant-outlined.svg";
import KakaoTalkIcon from "../../core/svg/kakao-talk-icon.svg";
import NaverIcon from "../../core/svg/naver-icon.svg";

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
        <button className="kse-btn  kse-btn-large kse-btn-circle kse-btn-danger">
          <HeartPlusOutlined
            style={{ display: "block", height: 18, width: 18 }}
          />
        </button>
        <button className="kse-btn kse-btn-default kse-btn-large kse-btn-circle">
          <ShareVariantOutlined
            style={{ display: "block", height: 18, width: 18 }}
          />
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
      <div>kakaotalk button</div>
      <div className="kse-btn kse-btn-default  kse-btn-kakao-talk">
        <KakaoTalkIcon className="kse-icon-small" />
        kakaotalk login
      </div>
      <div>naver button</div>
      <div className="kse-btn kse-btn-default  kse-btn-naver">
        <NaverIcon className="kse-icon-small" />
        naver login
      </div>
      <div>row of buttons (size 2)</div>
      <div className="kse-row-btn">
        <div className="kse-btn kse-btn-default kse-btn-prefix">option 1</div>
        <div className="kse-btn kse-btn-default kse-btn-suffix">option 2</div>
      </div>
      <div>row of buttons (size 2)</div>
      <div className="kse-row-btn">
        <div className="kse-btn kse-btn-default kse-btn-prefix">option 1</div>
        <div className="kse-btn kse-btn-default kse-btn-compact">option 2</div>
        <div className="kse-btn kse-btn-default kse-btn-default-active kse-btn-suffix ">
          option 3
        </div>
      </div>
      <div>danger button</div>
      <div className="kse-btn kse-btn-danger-primary">button primary</div>
    </>
  );
};
