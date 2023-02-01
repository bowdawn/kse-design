import React from "react";
import SearchOutlined from "../../core/svg/search-outlined.svg";
import SafeboxOutlined from "../../core/svg/safebox-outlined.svg";
import MenuOutlined from "../../core/svg/menu-outlined.svg";
import CloseOutlined from "../../core/svg/close-outlined.svg";
import HeartPlusOutlined from "../../core/svg/heart-plus-outlined.svg";

export const IconPage: React.FC = () => {
  return (
    <>
      <h1>Styles</h1>
      <div>Small Icon (size 16px)</div>
      <SearchOutlined className="kse-icon-small" />
      <div>Default Icon (size 32px)</div>
      <MenuOutlined className="kse-icon" />
      <h1>Current Assets</h1>
      <div className="kse-space kse-space-middle">
        <div>
          <div>Menu</div>
          <MenuOutlined className="kse-icon" />
        </div>

        <div>
          <div>Safe Box</div>
          <SafeboxOutlined className="kse-icon" />
        </div>
        <div>
          <div>Search</div>
          <SearchOutlined className="kse-icon" />
        </div>
        <div>
          <div>Close</div>
          <CloseOutlined className="kse-icon" />
        </div>
        <div>
          <div>Heart Plus</div>
          <HeartPlusOutlined className="kse-icon" />
        </div>
        <div>
          <div>icon 6</div>( - )
        </div>
      </div>
      <h1>Looking For More Icons?</h1>
      <h3>Antd Icons (750+ icons)</h3>
      <a href="https://ant.design/components/icon">
        https://ant.design/components/icon
      </a>
      <h3>Ant Design + Material Design Icons (5000+ icons)</h3>
      <a href="https://2fd.github.io/ant-design-icons/">
        https://2fd.github.io/ant-design-icons/
      </a>
    </>
  );
};
