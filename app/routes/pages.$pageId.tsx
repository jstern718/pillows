import type {
    ActionFunctionArgs,
    LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
    Form,
    useFetcher,
    useLoaderData,
} from "@remix-run/react";
import type { FunctionComponent } from "react";
import invariant from "tiny-invariant";

import type { PageRecord } from "../data";

import { getPage, updatePage } from "../data";

export const action = async ({
    params,
    request,
  }: ActionFunctionArgs) => {
    invariant(params.pageId, "Missing pageId param");
    const formData = await request.formData();
    return updatePage(params.pageId, {
      favorite: formData.get("favorite") === "true",
    });
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

export default function Page() {
  const { page } = useLoaderData<typeof loader>();

  return (
    <div id="page">
      <div>
        <img
          alt={`${page.first} ${page.last} avatar`}
          key={page.avatar}
          src={page.avatar}
        />
      </div>

      <div>
        <h1>
          {page.first || page.last ? (
            <>
              {page.first} {page.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite page={page} />
        </h1>

        {page.twitter ? (
          <p>
            <a
              href={`https://twitter.com/${page.twitter}`}
            >
              {page.twitter}
            </a>
          </p>
        ) : null}

        {page.notes ? <p>{page.notes}</p> : null}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>

          <Form
            action="destroy"
            method="post"
            onSubmit={(event) => {
              const response = confirm(
                "Please confirm you want to delete this record."
              );
              if (!response) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

const Favorite: FunctionComponent<{
  page: Pick<PageRecord, "favorite">;
}> = ({ page }) => {
    const fetcher = useFetcher();
    const favorite = fetcher.formData
    ? fetcher.formData.get("favorite") === "true"
    : page.favorite;

    return (
        <fetcher.Form method="post">
        <button
            aria-label={
            favorite
                ? "Remove from favorites"
                : "Add to favorites"
            }
            name="favorite"
            value={favorite ? "false" : "true"}
        >
            {favorite ? "★" : "☆"}
        </button>
        </fetcher.Form>
    );
};
