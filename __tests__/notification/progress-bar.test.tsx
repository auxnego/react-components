import React from "react"
import {create} from "react-test-renderer";

import ProgressBar from "../../notification/progress-bar";

it("Indeterminated progress bar", () => {

  expect(create(
    <ProgressBar indeterminate />
  ).toJSON()).toMatchSnapshot();

});

it("With total and current=0", () => {

  expect(create(
    <ProgressBar total={124} />
  ).toJSON()).toMatchSnapshot();

});

it("with total=200 and current=100", () => {

  expect(create(
    <ProgressBar current={100} total={200}/>
  ).toJSON()).toMatchSnapshot();

});

it(" with total=200 and current=200 and indicatorFn", () => {

  expect(create(
    <ProgressBar total={200} current={200} indicatorFn={(current, total, indeterminate) => {
      return <i>{current} / {total}</i>;
    }}/>
  ).toJSON()).toMatchSnapshot();

});
