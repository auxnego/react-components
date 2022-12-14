import React from "react";
import {create} from "react-test-renderer";

import Toast from "../../notification/toast";

it("No timer toats and open", () => {

  expect(create(
    <Toast open={true} >First Toast</Toast>
  ).toJSON()).toMatchSnapshot();

});

it("closed toast", () => {

  expect(create(
    <Toast open={false} >Never shown</Toast>
  ).toJSON()).toMatchSnapshot();

});
