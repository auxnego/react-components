import React from "react";
import {create} from "react-test-renderer";

import FontAwesome from "../../icon";

it("check icon", () => {

  expect(create(
    <FontAwesome to="check" />
  ).toJSON()).toMatchSnapshot();

});

it("check icon and changing base", () => {

  expect(create(
    <FontAwesome to="check" base="fas"/>
  ).toJSON()).toMatchSnapshot();

});

it("check icon and changing setEl", () => {

  expect(create(
    <FontAwesome to="check" setEl="div"/>
  ).toJSON()).toMatchSnapshot();

});
