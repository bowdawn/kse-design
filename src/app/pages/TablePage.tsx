import { Table } from "antd";
import React from "react";

export const TablePage: React.FC = () => {
  return (
    <>
      {/* <Table
        columns={[
          {
            title: "등급별 혜택 안내 ",
            dataIndex: "rank",
            align: "center",
            width: "20%",
          },
          { title: "쿠폰", dataIndex: "coupon", align: "center", width: "20%" },
          {
            title: "무료배송 쿠폰",
            dataIndex: "delivery",
            align: "center",
            width: "20%",
          },
          {
            title: "위탁판매 시 수수료 면제 서비스",
            dataIndex: "fee",
            align: "center",
            width: "20%",
          },
          {
            title: "특별 혜택",
            dataIndex: "special",
            align: "center",
            width: "20%",
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
            fee: "-",
            special: "-",
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
            special: "-",
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
            fee: (
              <div>
                <div>위탁판매 상품 금액 기준 </div>
                <div>총 300만원 까지 수수료 면제</div>
              </div>
            ),
            special: "-",
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
            fee: (
              <div>
                <div>위탁판매 상품 금액 기준 </div>
                <div>총 500만원 까지 수수료 면제</div>
              </div>
            ),
            special: (
              <div>
                <div>Special Gift</div>
                <div>1 회</div>
              </div>
            ),
          },
        ]}
      /> */}
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
          { title: "할인", dataIndex: "sale", align: "center" },
        ]}
        dataSource={[
          { quantity: "50 ~ 99개 개당", sale: "1%" },
          { quantity: "100 ~ 149 개당", sale: "2%" },
          { quantity: "150 ~ 199 개당", sale: "3%" },
        ]}
      />
    </>
  );
};
