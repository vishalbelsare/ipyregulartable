/******************************************************************************
 *
 * Copyright (c) 2020, the ipyregulartable authors.
 *
 * This file is part of the jupyterlab_templates library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import "isomorphic-fetch";

import examplePlugin from "../src/plugin";

describe("Checks activate", () => {
  test("Check activate", () => {
    expect(examplePlugin);
  });
});
