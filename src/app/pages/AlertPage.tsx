import React from "react";

import InfoIcon from "../../core/svg/info-icon.svg";
import SuccessIcon from "../../core/svg/success-icon.svg";
import WarningIcon from "../../core/svg/warning-icon.svg";
import ErrorIcon from "../../core/svg/error-icon.svg";
import CloseOutlined from "../../core/svg/close-outlined.svg";

export const AlertPage: React.FC = () => {
  return (
    <>
      <h1>Styles</h1>
      <h2>Title Alert</h2>
      <div>Primary</div>
      <br />
      <div className="kse-alert kse-alert-primary" role="alert">
        <div className="kse-alert-content">
          <div className="kse-alert-message">금융사기주의안내</div>
          <div className="kse-alert-description">
            금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
            금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
          </div>
        </div>
      </div>
      <div>Info</div>
      <div className="kse-alert kse-alert-info" role="alert">
        <div className="kse-alert-content">
          <div className="kse-alert-message">금융사기주의안내</div>
          <div className="kse-alert-description">
            금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
            금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
          </div>
        </div>
      </div>
      <div>Success</div>
      <div className="kse-alert kse-alert-success" role="alert">
        <div className="kse-alert-content">
          <div className="kse-alert-message">금융사기주의안내</div>
          <div className="kse-alert-description">
            금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
            금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
          </div>
        </div>
      </div>
      <div>Error</div>
      <div className="kse-alert kse-alert-error" role="alert">
        <div className="kse-alert-content">
          <div className="kse-alert-message">금융사기주의안내</div>
          <div className="kse-alert-description">
            금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
            금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
          </div>
        </div>
      </div>
      <div>Warning</div>
      <div className="kse-alert kse-alert-warning" role="alert">
        <div className="kse-alert-content">
          <div className="kse-alert-message">금융사기주의안내</div>
          <div className="kse-alert-description">
            금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
            금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
          </div>
        </div>
      </div>
      <h2>Message Alert</h2>
      <div>Primary</div>
      <div className="kse-alert kse-alert-primary" role="alert">
        <div className="kse-alert-content">
          <div className="kse-alert-description">
            금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
            금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
          </div>
        </div>
      </div>
      <div>Info</div>
      <div className="kse-alert kse-alert-info" role="alert">
        <div className="kse-alert-content">
          <div className="kse-alert-description">
            금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
            금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
          </div>
        </div>
      </div>
      <div>Success</div>
      <div className="kse-alert kse-alert-success" role="alert">
        <div className="kse-alert-content">
          <div className="kse-alert-description">
            금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
            금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
          </div>
        </div>
      </div>
      <div>Error</div>
      <div className="kse-alert kse-alert-error" role="alert">
        <div className="kse-alert-content">
          <div className="kse-alert-description">
            금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
            금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
          </div>
        </div>
      </div>
      <div>Warning</div>
      <div className="kse-alert kse-alert-warning" role="alert">
        <div className="kse-alert-content">
          <div className="kse-alert-description">
            금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
            금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
          </div>
        </div>
      </div>
      <h2>Title Alert (Icon)</h2>

      <div>Info</div>
      <div className="kse-alert kse-alert-info" role="alert">
        <InfoIcon className="kse-alert-icon" />
        <div className="kse-alert-content">
          <div className="kse-alert-message">금융사기주의안내</div>
          <div className="kse-alert-description">
            금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
            금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
          </div>
        </div>
      </div>
      <div>Success</div>
      <div className="kse-alert kse-alert-success" role="alert">
        <SuccessIcon className="kse-alert-icon" />
        <div className="kse-alert-content">
          <div className="kse-alert-message">금융사기주의안내</div>
          <div className="kse-alert-description">
            금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
            금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
          </div>
        </div>
      </div>
      <div>Error</div>

      <div className="kse-alert kse-alert-error" role="alert">
        <ErrorIcon className="kse-alert-icon" />
        <div className="kse-alert-content">
          <div className="kse-alert-message">금융사기주의안내</div>
          <div className="kse-alert-description">
            금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
            금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
          </div>
        </div>
      </div>
      <div>Warning</div>

      <div className="kse-alert kse-alert-warning" role="alert">
        <WarningIcon className="kse-alert-icon" />
        <div className="kse-alert-content">
          <div className="kse-alert-message">금융사기주의안내</div>
          <div className="kse-alert-description">
            금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
            금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
          </div>
        </div>
      </div>
      <h2>Message Alert (Icon)</h2>

      <div>Info</div>
      <div className="kse-alert kse-alert-info" role="alert">
        <div className="kse-alert-content">
          <div className="kse-alert-description">
            <div>
              <InfoIcon className="kse-alert-icon" />
            </div>
            금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
            금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
          </div>
        </div>
      </div>
      <div>Success</div>
      <div className="kse-alert kse-alert-success" role="alert">
        <div className="kse-alert-content">
          <div className="kse-alert-description">
            <div>
              <SuccessIcon className="kse-alert-icon" />
            </div>
            금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
            금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
          </div>
        </div>
      </div>
      <div>Error</div>
      <div className="kse-alert kse-alert-error" role="alert">
        <div className="kse-alert-content">
          <div className="kse-alert-description">
            <div>
              <ErrorIcon className="kse-alert-icon" />
            </div>
            금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
            금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
          </div>
        </div>
      </div>
      <div>Warning</div>
      <div className="kse-alert kse-alert-warning" role="alert">
        <div className="kse-alert-content">
          <div className="kse-alert-description">
            <div>
              <WarningIcon className="kse-alert-icon" />
            </div>
            금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
            금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
          </div>
        </div>
      </div>
      <h1>Closables</h1>
      <br />
      <br />
      <br />
      <div className="kse-alert kse-alert-primary" role="alert">
        <div
          className="kse-row kse-row-space-between kse-block
        "
        >
          <div className="kse-alert-content">
            <div className="kse-alert-message">금융사기주의안내</div>
            <div className="kse-alert-description">
              금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
              금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
            </div>
          </div>
          <CloseOutlined className="kse-alert-close" />
        </div>
      </div>
      <br />
      <div className="kse-alert kse-alert-primary" role="alert">
        <div
          className="kse-row kse-row-space-between kse-row-align-center kse-block
        "
        >
          <div className="kse-alert-content">
            <div className="kse-alert-description">
              금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
              금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
            </div>
          </div>
          <CloseOutlined className="kse-alert-close" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="kse-alert kse-alert-info" role="alert">
        <div
          className="kse-row kse-row-space-between kse-block
        "
        >
          <div className="kse-alert-content">
            <div className="kse-alert-message">금융사기주의안내</div>
            <div className="kse-alert-description">
              금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
              금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
            </div>
          </div>
          <CloseOutlined className="kse-alert-close" />
        </div>
      </div>
      <br />
      <div className="kse-alert kse-alert-info" role="alert">
        <div
          className="kse-row kse-row-space-between kse-row-align-center kse-block
        "
        >
          <div className="kse-alert-content">
            <div className="kse-alert-description">
              금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
              금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
            </div>
          </div>
          <CloseOutlined className="kse-alert-close" />
        </div>
      </div>
      <br />
      <div className="kse-alert kse-alert-info" role="alert">
        <div
          className="kse-row kse-row-space-between kse-block
        "
        >
          <div className="kse-row kse-alert-closeable-block">
            <InfoIcon className="kse-alert-icon" />
            <div className="kse-alert-content">
              <div className="kse-alert-message">금융사기주의안내</div>
              <div className="kse-alert-description">
                금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
                금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
              </div>
            </div>
          </div>
          <CloseOutlined className="kse-alert-close" />
        </div>
      </div>
      <br />
      <div className="kse-alert kse-alert-info" role="alert">
        <div
          className="kse-row kse-row-space-between kse-row-align-center kse-block
        "
        >
          <div className="kse-alert-content">
            <div className="kse-alert-description">
              <div>
                <InfoIcon className="kse-alert-icon" />
              </div>
              금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
              금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
            </div>
          </div>
          <CloseOutlined className="kse-alert-close" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="kse-alert kse-alert-success" role="alert">
        <div
          className="kse-row kse-row-space-between kse-block
        "
        >
          <div className="kse-alert-content">
            <div className="kse-alert-message">금융사기주의안내</div>
            <div className="kse-alert-description">
              금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
              금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
            </div>
          </div>
          <CloseOutlined className="kse-alert-close" />
        </div>
      </div>
      <br />
      <div className="kse-alert kse-alert-success" role="alert">
        <div
          className="kse-row kse-row-space-between kse-row-align-center kse-block
        "
        >
          <div className="kse-alert-content">
            <div className="kse-alert-description">
              금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
              금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
            </div>
          </div>
          <CloseOutlined className="kse-alert-close" />
        </div>
      </div>
      <br />
      <div className="kse-alert kse-alert-success" role="alert">
        <div
          className="kse-row kse-row-space-between kse-block
        "
        >
          <div className="kse-row kse-alert-closeable-block">
            <SuccessIcon className="kse-alert-icon" />
            <div className="kse-alert-content">
              <div className="kse-alert-message">금융사기주의안내</div>
              <div className="kse-alert-description">
                금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
                금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
              </div>
            </div>
          </div>
          <CloseOutlined className="kse-alert-close" />
        </div>
      </div>
      <br />
      <div className="kse-alert kse-alert-success" role="alert">
        <div
          className="kse-row kse-row-space-between kse-row-align-center kse-block
        "
        >
          <div className="kse-alert-content">
            <div className="kse-alert-description">
              <div>
                <SuccessIcon className="kse-alert-icon" />
              </div>
              금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
              금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
            </div>
          </div>
          <CloseOutlined className="kse-alert-close" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="kse-alert kse-alert-error" role="alert">
        <div
          className="kse-row kse-row-space-between kse-block
        "
        >
          <div className="kse-alert-content">
            <div className="kse-alert-message">금융사기주의안내</div>
            <div className="kse-alert-description">
              금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
              금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
            </div>
          </div>
          <CloseOutlined className="kse-alert-close" />
        </div>
      </div>
      <br />
      <div className="kse-alert kse-alert-error" role="alert">
        <div
          className="kse-row kse-row-space-between kse-row-align-center kse-block
        "
        >
          <div className="kse-alert-content">
            <div className="kse-alert-description">
              금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
              금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
            </div>
          </div>
          <CloseOutlined className="kse-alert-close" />
        </div>
      </div>
      <br />
      <div className="kse-alert kse-alert-error" role="alert">
        <div
          className="kse-row kse-row-space-between kse-block
        "
        >
          <div className="kse-row kse-alert-closeable-block">
            <ErrorIcon className="kse-alert-icon" />
            <div className="kse-alert-content">
              <div className="kse-alert-message">금융사기주의안내</div>
              <div className="kse-alert-description">
                금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
                금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
              </div>
            </div>
          </div>
          <CloseOutlined className="kse-alert-close" />
        </div>
      </div>
      <br />
      <div className="kse-alert kse-alert-error" role="alert">
        <div
          className="kse-row kse-row-space-between kse-row-align-center kse-block
        "
        >
          <div className="kse-alert-content">
            <div className="kse-alert-description">
              <div>
                <ErrorIcon className="kse-alert-icon" />
              </div>
              금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
              금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
            </div>
          </div>
          <CloseOutlined className="kse-alert-close" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="kse-alert kse-alert-warning" role="alert">
        <div
          className="kse-row kse-row-space-between kse-block
        "
        >
          <div className="kse-alert-content">
            <div className="kse-alert-message">금융사기주의안내</div>
            <div className="kse-alert-description">
              금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
              금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
            </div>
          </div>
          <CloseOutlined className="kse-alert-close" />
        </div>
      </div>
      <br />
      <div className="kse-alert kse-alert-warning" role="alert">
        <div
          className="kse-row kse-row-space-between kse-row-align-center kse-block
        "
        >
          <div className="kse-alert-content">
            <div className="kse-alert-description">
              금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
              금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
            </div>
          </div>
          <CloseOutlined className="kse-alert-close" />
        </div>
      </div>
      <br />
      <div className="kse-alert kse-alert-warning" role="alert">
        <div
          className="kse-row kse-row-space-between kse-block
        "
        >
          <div className="kse-row kse-alert-closeable-block">
            <WarningIcon className="kse-alert-icon" />
            <div className="kse-alert-content">
              <div className="kse-alert-message">금융사기주의안내</div>
              <div className="kse-alert-description">
                금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
                금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
              </div>
            </div>
          </div>
          <CloseOutlined className="kse-alert-close" />
        </div>
      </div>
      <br />
      <div className="kse-alert kse-alert-warning" role="alert">
        <div
          className="kse-row kse-row-space-between kse-row-align-center kse-block
        "
        >
          <div className="kse-alert-content">
            <div className="kse-alert-description">
              <div>
                <WarningIcon className="kse-alert-icon" />
              </div>
              금융기관 및 수사기관, 감독기관 등 어떠한 공공기관도 개인정보나
              금융거래정보, 현금 입금을 요구하는 경우는 없습니다.
            </div>
          </div>
          <CloseOutlined className="kse-alert-close" />
        </div>
      </div>
    </>
  );
};
