import { Descriptions } from "antd";
import React from "react";
import "../../core/style/css/ant-overide.css";
import rank1 from "../../core/images/rank01_min.png";
import rank2 from "../../core/images/rank02_min.png";
import rank3 from "../../core/images/rank03_min.png";
import rank4 from "../../core/images/rank04_min.png";
export const DescriptionsPage: React.FC = () => {
  return (
    <div style={{ width: 500 }}>
      <h1>등급 혜택</h1>
      <div className="kse-space-vertical-middle">
        <Descriptions
          column={1}
          size="small"
          bordered
          title={
            <div className="rank rank1 kse-row">
              <center className="rank-image-wrapper">
                <img src={rank1} />
              </center>
              <div className="kse-col-block">
                <center>
                  <div className="kse-title-3">클래식 문</div>
                  <div>Classic Moon</div>
                </center>
              </div>
            </div>
          }
        >
          <Descriptions.Item
            label={
              <center>
                <strong>쿠폰</strong>
                <div class="kse-text-primary-10 kse-text-small">
                  (매월 지급)
                </div>
              </center>
            }
          >
            <center>
              <div>2,000 할인</div>
              <div>1,000 할인</div>
            </center>
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <center>
                <strong>무료배송 쿠폰</strong>
                <div class="kse-text-primary-10 kse-text-small">
                  (매월 지급)
                </div>
              </center>
            }
          >
            <center>
              <div>-</div>
            </center>
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <center>
                <strong>
                  위탁판매 시 <br /> 수수료 면제 서비스
                </strong>
              </center>
            }
          >
            <center>
              <div>-</div>
            </center>
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <center>
                <strong>특별 혜택</strong>
              </center>
            }
          >
            <center>
              <div>-</div>
            </center>
          </Descriptions.Item>
        </Descriptions>

        <Descriptions
          column={1}
          size="small"
          bordered
          title={
            <div className="rank rank2 kse-row">
              <center className="rank-image-wrapper">
                <img src={rank2} />
              </center>
              <div className="kse-col-block">
                <center>
                  <div className="kse-title-3">엘리트 문</div>
                  <div>Elite Moon</div>
                </center>
              </div>
            </div>
          }
        >
          <Descriptions.Item
            label={
              <center>
                <strong>쿠폰</strong>
                <div class="kse-text-primary-10 kse-text-small">
                  (매월 지급)
                </div>
              </center>
            }
          >
            <center>
              <div>2,000 할인</div>
              <div>1,000 할인</div>
            </center>
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <center>
                <strong>무료배송 쿠폰</strong>
                <div class="kse-text-primary-10 kse-text-small">
                  (매월 지급)
                </div>
              </center>
            }
          >
            <center>
              <div>무료배송 쿠폰</div>
              <div>1 개</div>
            </center>
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <center>
                <strong>
                  위탁판매 시 <br /> 수수료 면제 서비스
                </strong>
              </center>
            }
          >
            <center>
              <div>-</div>
            </center>
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <center>
                <strong>특별 혜택</strong>
              </center>
            }
          >
            <center>
              <div>-</div>
            </center>
          </Descriptions.Item>
        </Descriptions>
        <Descriptions
          column={1}
          size="small"
          bordered
          title={
            <div className="rank rank3 kse-row">
              <center className="rank-image-wrapper">
                <img src={rank3} />
              </center>
              <div className="kse-col-block">
                <center>
                  <div className="kse-title-3">노블 문</div>
                  <div>Noble Moon</div>
                </center>
              </div>
            </div>
          }
        >
          <Descriptions.Item
            label={
              <center>
                <strong>쿠폰</strong>
                <div class="kse-text-primary-10 kse-text-small">
                  (매월 지급)
                </div>
              </center>
            }
          >
            <center>
              <div>5,000 할인</div>
              <div>2,000 할인</div>
              <div>1,000 할인</div>
            </center>
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <center>
                <strong>무료배송 쿠폰</strong>
                <div class="kse-text-primary-10 kse-text-small">
                  (매월 지급)
                </div>
              </center>
            }
          >
            <center>
              <div>무료배송 쿠폰</div>
              <div>2 개</div>
            </center>
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <center>
                <strong>
                  위탁판매 시 <br /> 수수료 면제 서비스
                </strong>
              </center>
            }
          >
            <center>
              <div>위탁판매 상품 금액 기준</div>
              <div>총 300만원 까지 수수료 면제</div>
            </center>
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <center>
                <strong>특별 혜택</strong>
              </center>
            }
          >
            <center>
              <div>-</div>
            </center>
          </Descriptions.Item>
        </Descriptions>
        <Descriptions
          column={1}
          size="small"
          bordered
          title={
            <div className="rank rank4 kse-row">
              <center className="rank-image-wrapper">
                <img src={rank4} />
              </center>
              <div className="kse-col-block">
                <center>
                  <div className="kse-title-3">로열 문</div>
                  <div>Royal Moon</div>
                </center>
              </div>
            </div>
          }
        >
          <Descriptions.Item
            label={
              <center>
                <strong>쿠폰</strong>
                <div class="kse-text-primary-10 kse-text-small">
                  (매월 지급)
                </div>
              </center>
            }
          >
            <center>
              <div>10,000 할인</div>
              <div>5,000 할인</div>
              <div>2,000 할인</div>
            </center>
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <center>
                <strong>무료배송 쿠폰</strong>
                <div class="kse-text-primary-10 kse-text-small">
                  (매월 지급)
                </div>
              </center>
            }
          >
            <center>
              <div>무료배송 쿠폰</div>
              <div>3 개</div>
            </center>
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <center>
                <strong>
                  위탁판매 시 <br /> 수수료 면제 서비스
                </strong>
              </center>
            }
          >
            <center>
              <div>위탁판매 상품 금액 기준</div>
              <div>총 500만원 까지 수수료 면제</div>
            </center>
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <center>
                <strong>특별 혜택</strong>
              </center>
            }
          >
            <center>
              <div>Special Gift</div>
              <div>1회</div>
            </center>
          </Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
};
