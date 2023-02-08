import React from "react";

export const SelectPage: React.FC = () => {
  return (
    <>
      <div>basic select</div>
      <div style={{ width: 150 }}>
        <select className="kse-select">
          <option value="direct">Enter Email</option>
          <option value="naver.com">naver.com</option>
          <option value="hotmail.com">hotmail.com</option>
          <option value="hanmail.net">hanmail.net</option>
          <option value="yahoo.com">yahoo.com</option>
          <option value="nate.com">nate.com</option>
          <option value="korea.com">korea.com</option>
          <option value="chol.com">chol.com</option>
          <option value="gmail.com">gmail.com</option>
          <option value="netian.com">netian.com</option>
        </select>
      </div>
    </>
  );
};
