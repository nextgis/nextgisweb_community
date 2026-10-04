/** @plugin */

import { registry } from "@nextgisweb/pyramid/cblock/registry";

import { CEAddon } from "./CEAddon";

registry.register(COMP_ID, {
  slot: "pyramid.sidebar",
  func: () => <CEAddon />,
});
