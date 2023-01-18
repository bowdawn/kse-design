import { Layout, Row, Space, Typography } from "antd";
import React from "react";
import { getRowClassName } from "src/core/style/helpers/antd/Row/RowProps";
import { getTypographyClassName } from "src/core/style/helpers/antd/Typography/TypographyProps";

const cartQuantity = 0;
export const Header: React.FC = () => {
  return (
    <Layout.Header>
      <Row
        justify={"space-between"}
        className={getRowClassName(["ant-row-lg"])}
      >
        <div>
          <Typography.Link
            className={getTypographyClassName(["ant-typography-primary-bg"])}
          >
            한국은거래소는 건전한 투자와 수집문화 발전에 앞장서고 있습니다.
          </Typography.Link>
        </div>
        <Space size={"middle"}>
          <Typography.Link
            className={getTypographyClassName(["ant-typography-primary-bg"])}
          >
            로그인
          </Typography.Link>
          <Typography.Link
            className={getTypographyClassName(["ant-typography-primary-bg"])}
          >
            회원가입
          </Typography.Link>
          <Typography.Link
            className={getTypographyClassName(["ant-typography-primary-bg"])}
          >
            라운지
          </Typography.Link>
          <Typography.Link
            className={getTypographyClassName(["ant-typography-primary-bg"])}
          >
            주문조회
          </Typography.Link>
          <Typography.Link
            className={getTypographyClassName(["ant-typography-primary-bg"])}
          >
            나의 금고 ({cartQuantity})
          </Typography.Link>
        </Space>
      </Row>
    </Layout.Header>
  );
};
