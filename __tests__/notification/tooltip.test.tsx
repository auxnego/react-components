import React from "react";
import {create} from "react-test-renderer";

import Tooltip from "../../notification/tooltip";

it("No open tooltip", () => {

  expect(create(
    <Tooltip open={false} >Tooltip Base</Tooltip>
  ).toJSON()).toMatchSnapshot();

});

it("opened tooltip", () => {

  expect(create(
    <Tooltip open={true} >Tooltip Base</Tooltip>
  ).toJSON()).toMatchSnapshot();

});

it("opened tooltip with setClass , setEl and setProps", () => {

  expect(create(
    <Tooltip open={true} 
     setClass={{root:"custom"}}
     setEl={{arrow:"span"}}
    >Tooltip Base</Tooltip>
  ).toJSON()).toMatchSnapshot();

});
