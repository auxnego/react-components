import React from "react";
import {create} from "react-test-renderer";

import Link from "../../link/link";

it("normal link", () => {

  expect(create(
    <Link href="#active-link">actived Link</Link>
  ).toJSON()).toMatchSnapshot();

});

it("disabled link", () => {

  expect(create(
    <Link disabled>Disabled Link</Link>
  ).toJSON()).toMatchSnapshot();

});
