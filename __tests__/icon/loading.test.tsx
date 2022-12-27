import React from "react";
import {create} from "react-test-renderer";

import LoadingIcon from "../../icon/loading";

it("simple loading icon", () => {

  expect(create(
    <LoadingIcon />
  ).toJSON()).toMatchSnapshot();

});
