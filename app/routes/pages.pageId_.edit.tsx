import type { ActionFunctionArgs,
             LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form,
        useLoaderData,
        useNavigate,
} from "@remix-run/react";

import invariant from "tiny-invariant";

import { getPage, updatePage } from "../data";

export const action = async ({
    params,
    request,
  }: ActionFunctionArgs) => {
    invariant(params.pageId, "Missing pageId param");
    const formData = await request.formData();
    const firstName = formData.get("first");
    const lastName = formData.get("last");
    const updates = Object.fromEntries(formData);
    updates.first;
    updates.last;
    await updatePage(params.pageId, updates);
    return redirect(`/pages/${params.pageId}`);
  };

export const loader = async ({
  params,
}: LoaderFunctionArgs) => {
  invariant(params.pageId, "Missing pageId param");
  const page = await getPage(params.pageId);
  if (!page) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ page });
};

export default function EditPage() {
  const { page } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  return (
    <Form key={page.id} id="page-form" method="post">
      <p>
        <span>Title</span>
        <input
          aria-label="Title"
          defaultValue=""
          name="title"
          placeholder="Title"
          type="text"
        />
      </p>
      <p>
        <span>NumberOfLines</span>
        <input
            aria-label="NumberOfLines"
            defaultValue={1}
            name="numberOfLines"
            placeholder="NumberOfLines"
            type="integer"
            />
      </p>
      <p>
        <span>Line</span>
        <input
            aria-label="Line"
            defaultValue=""
            name="Line"
            placeholder="Line"
            type="text"
            />
      </p>

      <label>
        <span>Avatar URL</span>
        <input
          aria-label="Avatar URL"
          defaultValue={page.avatar}
          name="avatar"
          placeholder="https://example.com/avatar.jpg"
          type="text"
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          defaultValue={page.notes}
          name="notes"
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button onClick={() => navigate(-1)} type="button">
            Cancel
        </button>
      </p>
    </Form>
  );
}
