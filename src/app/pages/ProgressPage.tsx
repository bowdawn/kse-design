import React from "react";
import { Col, Progress, Row, Space } from "antd";

export const ProgressPage: React.FC = () => {
  return (
    <>
      <Progress
        showInfo={false}
        percent={99.9}
        status="active"
        strokeColor={{ from: "#ccc1b2", to: "#fca729" }}
      />

      <Progress
        showInfo={false}
        percent={99.9}
        status="active"
        strokeColor={{ from: "#fca729", to: "#AA4743" }}
      />

      <Progress
        showInfo={false}
        percent={99.9}
        status="active"
        strokeColor={{ from: "#AA4743", to: "#2857FA" }}
      />
      <Progress
        showInfo={false}
        percent={99.9}
        status="active"
        strokeColor={"#ccc1b2"}
      />

      <Progress
        showInfo={false}
        percent={99.9}
        status="active"
        strokeColor={"#fca729"}
      />

      <Progress
        showInfo={false}
        percent={99.9}
        status="active"
        strokeColor={"#AA4743"}
      />
      <Progress
        showInfo={false}
        percent={99.9}
        status="active"
        strokeColor={"#2857FA"}
      />

      <Row>
        <Col flex={1}>
          <Progress
            width={150}
            strokeLinecap="square"
            showInfo={false}
            percent={99.9}
            status="active"
            strokeColor={{ from: "#ccc1b2", to: "#fca729" }}
          />
        </Col>
        <Col flex={1}>
          <Progress
            width={150}
            strokeLinecap="square"
            showInfo={false}
            percent={99.9}
            status="active"
            strokeColor={{ from: "#fca729", to: "#AA4743" }}
          />
        </Col>
        <Col flex={1}>
          <Progress
            width={150}
            strokeLinecap="square"
            showInfo={false}
            percent={99.9}
            status="active"
            strokeColor={{ from: "#AA4743", to: "#2857FA" }}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col flex={1}>
          <Progress
            width={150}
            strokeLinecap="square"
            showInfo={false}
            percent={99.9}
            status="active"
            strokeColor={"#ccc1b2"}
          />
        </Col>
        <Col flex={1}>
          <Progress
            width={150}
            strokeLinecap="square"
            showInfo={false}
            percent={99.9}
            status="active"
            strokeColor={"#fca729"}
          />
        </Col>
        <Col flex={1}>
          <Progress
            width={150}
            strokeLinecap="square"
            showInfo={false}
            percent={99.9}
            status="active"
            strokeColor={"#AA4743"}
          />
        </Col>
        <Col flex={1}>
          <Progress
            width={150}
            strokeLinecap="square"
            showInfo={false}
            percent={99.9}
            status="active"
            strokeColor={"#2857FA"}
          />
        </Col>
      </Row>
    </>
  );
};
