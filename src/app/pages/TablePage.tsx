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
      <br />
      <br />
      <div className="kse-table-wrapper" style={{ width: 280 }}>
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
                      목적
                    </th>
                    <th
                      className="kse-table-cell"
                      style={{ textAlign: "center" }}
                    >
                      항목
                    </th>
                  </tr>
                </thead>
                <tbody className="kse-table-tbody kse-text-small">
                  <tr className="kse-table-row kse-table-row-level-0">
                    <td className="kse-table-cell">
                      주문자 정보 확인, 주문 내역 안내, 주문 내역 조회
                    </td>
                    <td className="kse-table-cell">
                      주문자 정보(이름, 연락처, 이메일)
                    </td>
                  </tr>
                  <tr className="kse-table-row kse-table-row-level-0">
                    <td className="kse-table-cell">
                      상품 배송(구매/환불/취소/교환)을 위한 수취인 정보
                    </td>
                    <td className="kse-table-cell">
                      수취인 정보(이름, 연락처1, 연락처2, 주소)
                    </td>
                  </tr>
                  <tr className="kse-table-row kse-table-row-level-0">
                    <td className="kse-table-cell">
                      무통장 결제 내역 확인을 위한 입금자명
                    </td>
                    <td className="kse-table-cell">
                      무통장 입금자명(미입력 시, 주문자명 사용)
                    </td>
                  </tr>
                  <tr>
                    <td className="kse-table-cell">현금영수증 발행</td>
                    <td className="kse-table-cell">
                      휴대폰번호, 국세청 현금영수증 카드번호
                    </td>
                  </tr>
                  <tr>
                    <td className="kse-table-cell">세금계산서 발행</td>
                    <td className="kse-table-cell">
                      신청자 정보(신청자명, 휴대폰번호, 이메일)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="kse-table-wrapper" style={{ width: 280 }}>
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
                      보유기간
                    </th>
                  </tr>
                </thead>
                <tbody className="kse-table-tbody kse-text-small">
                  <tr className="kse-table-row kse-table-row-level-0">
                    <td className="kse-table-cell">
                      주문일로부터 90일까지 보유하며, 관계 법령에 따라 5년간
                      보관
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
