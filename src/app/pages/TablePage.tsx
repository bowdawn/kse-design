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
      />
    </>
  );
};
