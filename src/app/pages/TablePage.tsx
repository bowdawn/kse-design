import { Table } from "antd";
import React from "react";

export const TablePage: React.FC = () => {
  return (
    <>
      <Table
        columns={[
          {
            title: "등급별 혜택 안내 ",
            dataIndex: "rank",
            align: "center",
            width: "25%",
          },
          { title: "쿠폰", dataIndex: "coupon", align: "center", width: "20%" },
          {
            title: "무료배송 쿠폰",
            dataIndex: "delivery",
            align: "center",
            width: "25%",
          },

          {
            title: <div>특별 혜택</div>,
            dataIndex: "special",
            align: "center",
            width: "25%",
          },
        ]}
        dataSource={[
          {
            rank: (
              <div>
                <div>클래식 문</div>
                <div>Classic Moon</div>
              </div>
            ),
            coupon: (
              <div>
                <div>2,000원 할인</div>
                <div>1,000원 할인</div>
              </div>
            ),
            delivery: "-",

            special: <div>-</div>,
          },
          {
            rank: (
              <div>
                <div>엘리트 문</div>
                <div>Elite Moon</div>
              </div>
            ),
            coupon: (
              <div>
                <div>2,000원 할인</div>
                <div>1,000원 할인</div>
              </div>
            ),
            delivery: (
              <div>
                <div>무료배송 쿠폰</div>
                <div>1개</div>
              </div>
            ),
            fee: "-",
            special: (
              <div className="kse-row kse-row-center">
                <div style={{ textAlign: "start", width: 325 }}>
                  - 본사 직배송 서비스 (서울 / 수도권 일부 지역)
                </div>
              </div>
            ),
          },
          {
            rank: (
              <div>
                <div>노블 문</div>
                <div>Noble Moon</div>
              </div>
            ),
            coupon: (
              <div>
                <div>5,000원 할인</div>
                <div>2,000원 할인</div>
                <div>1,000원 할인</div>
              </div>
            ),
            delivery: (
              <div>
                <div>무료배송 쿠폰</div>
                <div>2개</div>
              </div>
            ),

            special: (
              <div className="kse-row kse-row-center">
                <div style={{ textAlign: "start", width: 325 }}>
                  <div>- 본사 직배송 서비스 (서울 / 수도권 일부 지역)</div>
                  <div>- 위탁판매 시 상품 금액 총 300만원까지 수수료 면제</div>
                </div>
              </div>
            ),
          },
          {
            rank: (
              <div>
                <div>로열 문</div>
                <div>Royal Moon</div>
              </div>
            ),
            coupon: (
              <div>
                <div>10,000원 할인</div>
                <div>5,000원 할인</div>
                <div>3,000원 할인</div>
              </div>
            ),
            delivery: (
              <div>
                <div>무료배송 쿠폰</div>
                <div>3개</div>
              </div>
            ),

            special: (
              <div className="kse-row kse-row-center">
                <div style={{ textAlign: "start", width: 325 }}>
                  <div>- 본사 직배송 서비스 (서울 / 수도권 일부 지역)</div>
                  <div>- 위탁판매 시 상품 금액 총 500만원까지 수수료 면제</div>
                  <div>- Special Gift 1회</div>
                </div>
              </div>
            ),
          },
        ]}
      />
      <br />
      <br />
      <br />
      <br />
      <Table
        bordered
        tableLayout="fixed"
        style={{ width: 634 }}
        size="small"
        pagination={false}
        title={() => <div>대량구매할인 동일상품 구매 시, 옵션 포함</div>}
        footer={() => <div>할인적용금액은 장바구니에서 확인해주세요.</div>}
        columns={[
          {
            title: "수량",
            dataIndex: "quantity",
            align: "center",
          },
          {
            title: (
              <div>
                <div>할인</div>
                <div className="kse-text-secondary">(개당)</div>
              </div>
            ),
            dataIndex: "sale",
            align: "center",
          },
          // {
          //   title: (
          //     <div>
          //       <div>가격</div>
          //       <div className="kse-text-secondary">(개당)</div>
          //     </div>
          //   ),
          //   dataIndex: "price",
          //   align: "center",
          // },
        ]}
        dataSource={[
          { quantity: "50개 ~ 99개", sale: "1%", price: "99,000원" },
          { quantity: "100개 ~ 149개", sale: "2%", price: "98,000원" },
          { quantity: "150개 ~ 199개", sale: "3%", price: "97,000원" },
        ]}
      />
    </>
  );
};
