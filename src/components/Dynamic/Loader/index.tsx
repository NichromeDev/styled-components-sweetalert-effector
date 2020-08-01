import React from "react";
import { Spin } from "antd";

import { TSize } from "../../../types";

type Props = {
  size: TSize;
};

export default ({ size = "default" }: Props): JSX.Element => (
  <Spin size={size} />
);
