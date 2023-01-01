import React from "react";
import {create} from "react-test-renderer";
import { render, act } from "@testing-library/react";
import TogglerBase from "../../form/toggler-base";

it("normal name=basic", () => {

  expect(create(
    <TogglerBase name="basic" />
  ).toJSON()).toMatchSnapshot();

});

it("normal name=basic and initialStatus=true", () => {

  expect(create(
    <TogglerBase name="basic" initialStatus={true} />
  ).toJSON()).toMatchSnapshot();

});

it("normal name=basic and statusText Encendido/Apagado", () => {

  expect(create(
    <TogglerBase name="basic" statusText={{on:"Encendido", off:"Apagado"}}/>
  ).toJSON()).toMatchSnapshot();

});

it("normal name=basic and onValue=true and offValue=false", () => {

  expect(create(
    <TogglerBase name="basic" onValue="true" offValue="false" />
  ).toJSON()).toMatchSnapshot();

});

it("change state with click", () => {

  let { container }  = render(<TogglerBase name="basic"/>);

  act(() => {
   let tree =  container.querySelector(".toggler-base__root") as HTMLElement;
   tree.click();
  });

  expect(container).toMatchSnapshot();

});
