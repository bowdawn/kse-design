import { Descriptions } from "antd";
import React from "react";
import "../../core/style/css/ant-overide.css";
import rank1 from "../../core/images/rank01_min.png";
import rank2 from "../../core/images/rank02_min.png";
import rank3 from "../../core/images/rank03_min.png";
import rank4 from "../../core/images/rank04_min.png";

export const DescriptionsPage: React.FC = () => {
  return (
    <>
      <div style={{ width: 500, display: "inline-block" }}>
        <h1>등급 혜택</h1>
        <div className="kse-space-vertical-middle ranks-mobile">
          <div className="kse-descriptions kse-descriptions-small kse-descriptions-bordered">
            <div className="kse-descriptions-header">
              <div className="kse-descriptions-title">
                <div className="rank rank1 kse-row">
                  <center className="rank-image-wrapper">
                    <img src="https://kse-design.vercel.app/316c8c3492b8887cafdf60f768a27831.png" />
                    <div className="kse-title-3">클래식 문</div>
                    <div>Classic Moon</div>
                  </center>
                  <div className="kse-col-block kse-row kse-row-align-center kse-row-center">
                    <center>
                      <div>최근 1년간 구매금액</div>
                      <div>500만원 미만</div>
                    </center>
                  </div>
                </div>
              </div>
            </div>
            <div className="kse-descriptions-view">
              <table>
                <tbody>
                  <tr className="kse-descriptions-row">
                    <th className="kse-descriptions-item-label" colspan="1">
                      <span>
                        <center>
                          <strong>쿠폰</strong>
                          <div className="kse-text-primary-10 kse-text-small">
                            (매월 지급)
                          </div>
                        </center>
                      </span>
                    </th>
                    <td className="kse-descriptions-item-content" colspan="1">
                      <span>
                        <center>
                          <div>2,000원 할인</div>
                          <div>1,000원 할인</div>
                        </center>
                      </span>
                    </td>
                  </tr>
                  <tr className="kse-descriptions-row">
                    <th className="kse-descriptions-item-label" colspan="1">
                      <span>
                        <center>
                          <strong>무료배송 쿠폰</strong>
                          <div className="kse-text-primary-10 kse-text-small">
                            (매월 지급)
                          </div>
                        </center>
                      </span>
                    </th>
                    <td className="kse-descriptions-item-content" colspan="1">
                      <span>
                        <center>
                          <div>-</div>
                        </center>
                      </span>
                    </td>
                  </tr>
                  <tr className="kse-descriptions-row">
                    <th className="kse-descriptions-item-label" colspan="1">
                      <span>
                        <center>
                          <strong>
                            위탁판매 시 <br /> 수수료 면제 서비스
                          </strong>
                        </center>
                      </span>
                    </th>
                    <td className="kse-descriptions-item-content" colspan="1">
                      <span>
                        <center>
                          <div>-</div>
                        </center>
                      </span>
                    </td>
                  </tr>
                  <tr className="kse-descriptions-row">
                    <th className="kse-descriptions-item-label" colspan="1">
                      <span>
                        <center>
                          <strong>특별 혜택</strong>
                        </center>
                      </span>
                    </th>
                    <td className="kse-descriptions-item-content" colspan="1">
                      <span>
                        <center>
                          <div>-</div>
                        </center>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="kse-descriptions kse-descriptions-small kse-descriptions-bordered">
            <div className="kse-descriptions-header">
              <div className="kse-descriptions-title">
                <div className="rank rank2 kse-row">
                  <center className="rank-image-wrapper">
                    <img src="https://kse-design.vercel.app/9bda251f2869091af9a10552d9296752.png" />
                    <div className="kse-title-3">엘리트 문</div>
                    <div>Elite Moon</div>
                  </center>
                  <div className="kse-col-block kse-row kse-row-align-center kse-row-center">
                    <center>
                      <div>최근 1년간 구매금액</div>
                      <div>500만원 이상</div>
                    </center>
                  </div>
                </div>
              </div>
            </div>
            <div className="kse-descriptions-view">
              <table>
                <tbody>
                  <tr className="kse-descriptions-row">
                    <th className="kse-descriptions-item-label" colspan="1">
                      <span>
                        <center>
                          <strong>쿠폰</strong>
                          <div className="kse-text-primary-10 kse-text-small">
                            (매월 지급)
                          </div>
                        </center>
                      </span>
                    </th>
                    <td className="kse-descriptions-item-content" colspan="1">
                      <span>
                        <center>
                          <div>2,000원 할인</div>
                          <div>1,000원 할인</div>
                        </center>
                      </span>
                    </td>
                  </tr>
                  <tr className="kse-descriptions-row">
                    <th className="kse-descriptions-item-label" colspan="1">
                      <span>
                        <center>
                          <strong>무료배송 쿠폰</strong>
                          <div className="kse-text-primary-10 kse-text-small">
                            (매월 지급)
                          </div>
                        </center>
                      </span>
                    </th>
                    <td className="kse-descriptions-item-content" colspan="1">
                      <span>
                        <center>
                          <div>무료배송 쿠폰 1개</div>
                          <div></div>
                        </center>
                      </span>
                    </td>
                  </tr>
                  <tr className="kse-descriptions-row">
                    <th className="kse-descriptions-item-label" colspan="1">
                      <span>
                        <center>
                          <strong>
                            위탁판매 시 <br /> 수수료 면제 서비스
                          </strong>
                        </center>
                      </span>
                    </th>
                    <td className="kse-descriptions-item-content" colspan="1">
                      <span>
                        <center>
                          <div>-</div>
                        </center>
                      </span>
                    </td>
                  </tr>
                  <tr className="kse-descriptions-row">
                    <th className="kse-descriptions-item-label" colspan="1">
                      <span>
                        <center>
                          <strong>특별 혜택</strong>
                        </center>
                      </span>
                    </th>
                    <td className="kse-descriptions-item-content" colspan="1">
                      <span>
                        <center>
                          <div>-</div>
                        </center>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="kse-descriptions kse-descriptions-small kse-descriptions-bordered">
            <div className="kse-descriptions-header">
              <div className="kse-descriptions-title">
                <div className="rank rank3 kse-row">
                  <center className="rank-image-wrapper">
                    <img src="https://kse-design.vercel.app/b300e2419d354b0c54b8de24fd904d34.png" />
                    <div className="kse-title-3">노블 문</div>
                    <div>Noble Moon</div>
                  </center>
                  <div className="kse-col-block kse-row kse-row-align-center kse-row-center">
                    <center>
                      <div>최근 1년간 구매금액</div>
                      <div>3,000만원 이상</div>
                    </center>
                  </div>
                </div>
              </div>
            </div>
            <div className="kse-descriptions-view">
              <table>
                <tbody>
                  <tr className="kse-descriptions-row">
                    <th className="kse-descriptions-item-label" colspan="1">
                      <span>
                        <center>
                          <strong>쿠폰</strong>
                          <div className="kse-text-primary-10 kse-text-small">
                            (매월 지급)
                          </div>
                        </center>
                      </span>
                    </th>
                    <td className="kse-descriptions-item-content" colspan="1">
                      <span>
                        <center>
                          <div>5,000원 할인</div>
                          <div>2,000원 할인</div>
                          <div>1,000원 할인</div>
                        </center>
                      </span>
                    </td>
                  </tr>
                  <tr className="kse-descriptions-row">
                    <th className="kse-descriptions-item-label" colspan="1">
                      <span>
                        <center>
                          <strong>무료배송 쿠폰</strong>
                          <div className="kse-text-primary-10 kse-text-small">
                            (매월 지급)
                          </div>
                        </center>
                      </span>
                    </th>
                    <td className="kse-descriptions-item-content" colspan="1">
                      <span>
                        <center>
                          <div>무료배송 쿠폰 2개</div>
                          <div></div>
                        </center>
                      </span>
                    </td>
                  </tr>
                  <tr className="kse-descriptions-row">
                    <th className="kse-descriptions-item-label" colspan="1">
                      <span>
                        <center>
                          <strong>
                            위탁판매 시 <br /> 수수료 면제 서비스
                          </strong>
                        </center>
                      </span>
                    </th>
                    <td className="kse-descriptions-item-content" colspan="1">
                      <span>
                        <center>
                          <div>위탁판매 상품 금액 기준</div>
                          <div>총 300만원 까지 수수료 면제</div>
                        </center>
                      </span>
                    </td>
                  </tr>
                  <tr className="kse-descriptions-row">
                    <th className="kse-descriptions-item-label" colspan="1">
                      <span>
                        <center>
                          <strong>특별 혜택</strong>
                        </center>
                      </span>
                    </th>
                    <td className="kse-descriptions-item-content" colspan="1">
                      <span>
                        <center>
                          <div>-</div>
                        </center>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="kse-descriptions kse-descriptions-small kse-descriptions-bordered ">
            <div className="kse-descriptions-header">
              <div className="kse-descriptions-title">
                <div className="rank rank4 kse-row">
                  <center className="rank-image-wrapper">
                    <img src="https://kse-design.vercel.app/db4bde45a1757e8988f76173484f3ee8.png" />
                    <div className="kse-title-3">로열 문</div>
                    <div>Royal Moon</div>
                  </center>
                  <div className="kse-col-block kse-row kse-row-align-center kse-row-center">
                    <center>
                      <div>최근 1년간 구매금액</div>
                      <div>1억원 이상</div>
                    </center>
                  </div>
                </div>
              </div>
            </div>
            <div className="kse-descriptions-view">
              <table>
                <tbody>
                  <tr className="kse-descriptions-row">
                    <th className="kse-descriptions-item-label" colspan="1">
                      <span>
                        <center>
                          <strong>쿠폰</strong>
                          <div className="kse-text-primary-10 kse-text-small">
                            (매월 지급)
                          </div>
                        </center>
                      </span>
                    </th>
                    <td className="kse-descriptions-item-content" colspan="1">
                      <span>
                        <center>
                          <div>10,000원 할인</div>
                          <div>5,000원 할인</div>
                          <div>2,000원 할인</div>
                        </center>
                      </span>
                    </td>
                  </tr>
                  <tr className="kse-descriptions-row">
                    <th className="kse-descriptions-item-label" colspan="1">
                      <span>
                        <center>
                          <strong>무료배송 쿠폰</strong>
                          <div className="kse-text-primary-10 kse-text-small">
                            (매월 지급)
                          </div>
                        </center>
                      </span>
                    </th>
                    <td className="kse-descriptions-item-content" colspan="1">
                      <span>
                        <center>
                          <div>무료배송 쿠폰 3개</div>
                          <div></div>
                        </center>
                      </span>
                    </td>
                  </tr>
                  <tr className="kse-descriptions-row">
                    <th className="kse-descriptions-item-label" colspan="1">
                      <span>
                        <center>
                          <strong>
                            위탁판매 시 <br /> 수수료 면제 서비스
                          </strong>
                        </center>
                      </span>
                    </th>
                    <td className="kse-descriptions-item-content" colspan="1">
                      <span>
                        <center>
                          <div>위탁판매 상품 금액 기준</div>
                          <div>총 500만원 까지 수수료 면제</div>
                        </center>
                      </span>
                    </td>
                  </tr>
                  <tr className="kse-descriptions-row">
                    <th className="kse-descriptions-item-label" colspan="1">
                      <span>
                        <center>
                          <strong>특별 혜택</strong>
                        </center>
                      </span>
                    </th>
                    <td className="kse-descriptions-item-content" colspan="1">
                      <span>
                        <center>
                          <div>Special Gift 1회</div>
                          <div></div>
                        </center>
                      </span>
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
