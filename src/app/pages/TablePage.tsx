import { Table } from "antd";
import React from "react";

export const TablePage: React.FC = () => {
  return (
    <>
      <Table
        pagination={false}
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
        footer={() => (
          <div>
            <div className="kse-required">
              할인적용금액은 나의 금고에서 확인해주세요.
            </div>
            <div className="kse-required">입력할 내용을 입력해주세요</div>
          </div>
        )}
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
        ]}
        dataSource={[
          { quantity: "50개 ~ 99개", sale: "1%" },
          { quantity: "100개 ~ 149개", sale: "2%" },
          { quantity: "150개 ~ 199개", sale: "3%" },
        ]}
      />

      <br />
      <br />

      <div className="kse-table-wrapper">
        <div className="kse-table kse-table-small kse-table-bordered kse-table-layout-fixed">
          <div className="kse-table-container">
            <div className="kse-table-content">
              <table style={{ tableLayout: "fixed" }}>
                <colgroup></colgroup>
                <thead className="kse-table-thead">
                  <tr>
                    <th
                      className="kse-table-cell"
                      style={{ textAlign: "center" }}
                    >
                      수량
                    </th>
                    <th
                      className="kse-table-cell"
                      style={{ textAlign: "center" }}
                    >
                      <div>
                        <div>할인</div>
                        <div className="kse-text-secondary">(개당)</div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="kse-table-tbody">
                  <tr className="kse-table-row kse-table-row-level-0">
                    <td
                      className="kse-table-cell"
                      style={{ textAlign: "center" }}
                    >
                      50개 ~ 99개
                    </td>
                    <td
                      className="kse-table-cell"
                      style={{ textAlign: "center" }}
                    >
                      1%
                    </td>
                  </tr>
                  <tr className="kse-table-row kse-table-row-level-0">
                    <td
                      className="kse-table-cell"
                      style={{ textAlign: "center" }}
                    >
                      100개 ~ 149개
                    </td>
                    <td
                      className="kse-table-cell"
                      style={{ textAlign: "center" }}
                    >
                      2%
                    </td>
                  </tr>
                  <tr className="kse-table-row kse-table-row-level-0">
                    <td
                      className="kse-table-cell"
                      style={{ textAlign: "center" }}
                    >
                      150개 ~ 199개
                    </td>
                    <td
                      className="kse-table-cell"
                      style={{ textAlign: "center" }}
                    >
                      3%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="kse-table-footer">
            <div>
              <div className="kse-required">
                할인적용금액은 장바구니에서 확인해주세요.
              </div>
              <div className="kse-required">할인은 개당 적용됩니다.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
