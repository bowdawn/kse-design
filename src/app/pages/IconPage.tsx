import React from "react";
import SearchOutlined from "../../core/svg/search-outlined.svg";
import SafeboxOutlined from "../../core/svg/safebox-outlined.svg";
import MenuOutlined from "../../core/svg/menu-outlined.svg";
import CloseOutlined from "../../core/svg/close-outlined.svg";
import HeartPlusOutlined from "../../core/svg/heart-plus-outlined.svg";
import HomeOutlined from "../../core/svg/home-outlined.svg";
import LogoutOutlined from "../../core/svg/logout-outlined.svg";
import LoginOutlined from "../../core/svg/login-outlined.svg";
import UserPlusOutlined from "../../core/svg/user-plus-outlined.svg";
import SquareEditOutlined from "../../core/svg/square-edit-outlined.svg";
import TextboxSearchOutlined from "../../core/svg/textbox-search-outlined.svg";
import TimerOutlined from "../../core/svg/timer-outlined.svg";

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
          <div>Home</div>
          <HomeOutlined className="kse-icon" />
        </div>
        <div>
          <div>Logout</div>
          <LogoutOutlined className="kse-icon" />
        </div>
        <div>
          <div>Login</div>
          <LoginOutlined className="kse-icon" />
        </div>
        <div>
          <div>User Plus</div>
          <UserPlusOutlined className="kse-icon" />
        </div>
        <div>
          <div>Square Edit</div>
          <SquareEditOutlined className="kse-icon" />
        </div>
        <div>
          <div>Textbox Search</div>
          <TextboxSearchOutlined className="kse-icon" />
        </div>
        <div>
          <div>Timer</div>
          <TimerOutlined className="kse-icon" />
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
