import React from "react";
import { create } from "react-test-renderer";

//for test
import { LabelWrapper } from "../../form";

it("With id and label", () => {

  expect(create(
    <LabelWrapper id="hello"/>
  ).toJSON()).toMatchSnapshot();

});

it("Without id and label", () => {

  expect(create(
    <LabelWrapper id=""/>
  ).toJSON()).toMatchSnapshot();

});

it("setProps: add id='root' and id='label'", () => {

  expect(create(
    <LabelWrapper  
      id="" 
      setProps={{root:{id:"root"}, label:{id:"label"}}} 
      label="hello"/>
  ).toJSON()).toMatchSnapshot();

});

it("setClass: className=root and className=label", () => {

  expect(create(
    <LabelWrapper id="hello2" setClass={{root:"root", label:"label"}}/>
  ).toJSON()).toMatchSnapshot();

});

