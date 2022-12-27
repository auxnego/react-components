import React from "react";
import {create} from "react-test-renderer";

import Submit from "../../form/submit";

it("normal submit", () => {

  expect(create(
    <Submit>Enviar</Submit>
  ).toJSON()).toMatchSnapshot();

});


it("loading submit", () => {

  expect(create(
    <Submit loading={true}>Cargando</Submit>
  ).toJSON()).toMatchSnapshot();

});


it("normal submit", () => {

  expect(create(
    <Submit 
      setClass={{loading:"cargando-class"}} 
      loading={true}
      loadingLabel="Esperando Datos"
    >Enviar</Submit>
  ).toJSON()).toMatchSnapshot();

});

