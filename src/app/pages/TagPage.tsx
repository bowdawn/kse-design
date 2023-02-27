import React from "react";

export const TagPage: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Presets</h1>
      <br />
      <div className="kse-space kse-space-middle">
        <div className="kse-tag kse-tag-magenta">magenta</div>
        <div className="kse-tag kse-tag-red">red</div>
        <div className="kse-tag kse-tag-volcano">volcano</div>
        <div className="kse-tag kse-tag-orange">orange</div>
        <div className="kse-tag kse-tag-gold">gold</div>
        <div className="kse-tag kse-tag-lime">lime</div>
        <div className="kse-tag kse-tag-green">green</div>
        <div className="kse-tag kse-tag-cyan">cyan</div>
        <div className="kse-tag kse-tag-blue">blue</div>
        <div className="kse-tag kse-tag-geekblue">geekblue</div>
        <div className="kse-tag kse-tag-purple">purple</div>
      </div>
      <br />
      <h1>Custom</h1>
      <div className="kse-tag kse-tag-primary">primary</div>
      <h1>Current Tags</h1>
      <div className="kse-space kse-space-middle">
        <div className="kse-tag kse-tag-primary">인기상품</div>
      </div>
      <br />
      <h1>New Tag Choice</h1>
      <div className="kse-space kse-space-middle">
        <div className="kse-tag kse-tag-magenta">대량 구매 할인</div>
        <div className="kse-tag kse-tag-red">대량 구매 할인</div>
        <div className="kse-tag kse-tag-volcano">대량 구매 할인</div>
        <div className="kse-tag kse-tag-orange">대량 구매 할인</div>
        <div className="kse-tag kse-tag-gold">대량 구매 할인</div>
        <div className="kse-tag kse-tag-lime">대량 구매 할인</div>
        <div className="kse-tag kse-tag-green">대량 구매 할인</div>
        <div className="kse-tag kse-tag-cyan">대량 구매 할인</div>
        <div className="kse-tag kse-tag-blue">대량 구매 할인</div>
        <div className="kse-tag kse-tag-geekblue">대량 구매 할인</div>
        <div className="kse-tag kse-tag-purple">대량 구매 할인</div>
        <div className="kse-tag kse-tag-primary">대량 구매 할인</div>
      </div>
    </div>
  );
};
