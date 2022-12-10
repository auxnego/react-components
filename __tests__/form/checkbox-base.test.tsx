import React from "react";
import {create} from "react-test-renderer";
import { render,act } from "@testing-library/react";

import CheckboxBase from "../../form/checkbox-base";

it("Only id and value", () => {

  expect(create(
    <CheckboxBase id="example" value="ejemplo" />
  ).toJSON()).toMatchSnapshot();

});

it("with id, name, value and checked", () => {

  expect(create(
    <CheckboxBase id="ex2" name="example2" value="ejemplo2" checked />
  ).toJSON()).toMatchSnapshot();

});

it("Adding setProps for input and click event", () => {
  let { container } = render(<CheckboxBase 
                               id="example3" 
                               value="ejemplo3"
                               setProps = {{input:{role:"checkbox"}, root:{role:"box"}}}
                             />);
  act(() => {
    let target = container.querySelector('#example3') as HTMLInputElement;
    target.click();
  });
 
  expect(container).toMatchSnapshot();

});
