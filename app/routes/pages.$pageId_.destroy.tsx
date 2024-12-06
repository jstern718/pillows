import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import invariant from "tiny-invariant";

import { deletePage } from "../data";

export const action = async ({
  params,
}: ActionFunctionArgs) => {
  invariant(params.pageId, "Missing pageId param");
  await deletePage(params.pageId);
  return redirect("/");
};
