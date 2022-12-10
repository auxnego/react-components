import React from "react";
import {create} from "react-test-renderer";
import { render, act } from "@testing-library/react";
import Toggler from "../../form/toggler";

it("normal name=basic", () => {

  expect(create(
    <Toggler name="basic" />
  ).toJSON()).toMatchSnapshot();

});

it("normal name=basic and initialStatus=true", () => {

  expect(create(
    <Toggler name="basic" initialStatus={true} />
  ).toJSON()).toMatchSnapshot();

});

it("normal name=basic and statusText Encendido/Apagado", () => {

  expect(create(
    <Toggler name="basic" statusText={{on:"Encendido", off:"Apagado"}}/>
  ).toJSON()).toMatchSnapshot();

});

it("normal name=basic and onValue=true and offValue=false", () => {

  expect(create(
    <Toggler name="basic" onValue="true" offValue="false" />
  ).toJSON()).toMatchSnapshot();

});

it("change state with click", () => {

  let { container }  = render(<Toggler name="basic"/>);

  act(() => {
   let tree =  container.querySelector(".toggler__root") as HTMLElement;
   tree.click();
  });

  expect(container).toMatchSnapshot();

});
