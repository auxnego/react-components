import React from "react";
import {create} from "react-test-renderer";

import { Menu } from "../../list";

let items = [{id:"i-1", content:"elemento 1"}, {id:2, content:React.createElement("i",{},"elemento2")}, {id:"id-3", content:"el3"}];

it("Menu without elements", () => {

  expect(create(
    <Menu items={[]} />
  ).toJSON()).toMatchSnapshot();

});

it("Menu without elements and empty indicator", () => {

  expect(create(
    <Menu items={[]} onEmpty="No hay Elementos" />
  ).toJSON()).toMatchSnapshot();

});

it("Menu with elements", () => {

  expect(create(
    <Menu items={items} />
  ).toJSON()).toMatchSnapshot();

});

it("Menu with classPrefix and ordered", () => {

  expect(create(
    <Menu items={items} classPrefix="custom" ordered/>
  ).toJSON()).toMatchSnapshot();

});
