import { Space, Typography } from "antd";
import React from "react";
import colorpalette from "../../core/images/kse-color-palette.png";

export const ColorPage: React.FC = () => {
  return (
    <>
      <div>
        <img src={colorpalette} />
      </div>
      <Space size={"large"}>
        <div>
          <div>color-1</div>
          <Typography.Text copyable>#e6faff</Typography.Text>
        </div>
        <div>
          <div>color-2</div>
          <Typography.Text copyable>#a3ebff</Typography.Text>
        </div>
        <div>
          <div>color-3</div>
          <Typography.Text copyable>#7adeff</Typography.Text>
        </div>
        <div>
          <div>color-4</div>
          <Typography.Text copyable>#52ceff</Typography.Text>
        </div>
        <div>
          <div>color-5</div>
          <Typography.Text copyable>#27b2f2</Typography.Text>
        </div>
        <div>
          <div>color-6</div>
          <Typography.Text copyable>#0097e6</Typography.Text>
        </div>
        <div>
          <div>color-7</div>
          <Typography.Text copyable>#0076bf</Typography.Text>
        </div>
        <div>
          <div>color-8</div>
          <Typography.Text copyable>#005999</Typography.Text>
        </div>
        <div>
          <div>color-9</div>
          <Typography.Text copyable>#003f73</Typography.Text>
        </div>
        <div>
          <div>color-10</div>
          <Typography.Text copyable>#00284d</Typography.Text>
        </div>
      </Space>
      <h1>Looking For More Information Related To Colors?</h1>
      <h2>Go Check Out These Ant Design Resources :)!</h2>
      <a href="https://ant.design/docs/spec/colors">
        https://ant.design/docs/spec/colors
      </a>
    </>
  );
};
