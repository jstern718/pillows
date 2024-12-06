
import type { LinksFunction,
             LoaderFunctionArgs,
            } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";

import { useEffect } from "react";

import {
  Form,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import appStylesHref from "./app.css?url";
import indexStylesHref from "./index.css?url";
import { createEmptyPage, getPages } from "./data";

export const action = async () => {
  const page = await createEmptyPage();
  return redirect(`/pages/${page.id}/edit`);
};

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: appStylesHref },
    { rel: "stylesheet", href: indexStylesHref },
  ];

export const loader = async ({
     request,
}: LoaderFunctionArgs) => {
     const url = new URL(request.url);
     const q = url.searchParams.get("q");
     const pages = await getPages(q);
     return json({ pages, q });
};

export default function App() {
    const { pages, q } = useLoaderData<typeof loader>();
    const navigation = useNavigation();
    const submit = useSubmit();
    const searching = navigation.location
        && new URLSearchParams(navigation.location.search).has(
            "q"
        );

    useEffect(() => {
        const searchField = document.getElementById("q");
        if (searchField instanceof HTMLInputElement) {
          searchField.value = q || "";
        }
      }, [q]);


    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Meta />
            <Links />
        </head>
        <body>
            <div id="sidebar">
            <h1>Remix Pages</h1>
            <div>
                <Form id="search-form"
                onChange={(event) => {
                    const isFirstSearch = q === null;
                    submit(event.currentTarget, {
                        replace: !isFirstSearch,
                    });
                }}
                role="search">
                <input
                    id="q"
                    aria-label="Search pages"
                    className={searching ? "loading" : ""}
                    defaultValue={q || ""}
                    placeholder="Search"
                    type="search"
                    name="q"
                />
                <div id="search-spinner"
                    aria-hidden
                    hidden={!searching}
                />
                </Form>
                <Form method="post">
                <button type="submit">New</button>
                </Form>
            </div>
            <nav>
              {pages.length ? (
                <ul>
                    {pages.map((page) => (
                    <li key={page.id}>
                        <NavLink className={
                            ({isActive, isPending }) => isActive
                            ? "active"
                            : isPending
                            ? "pending"
                            : ""
                        } to={`${page.link}`}>
                            {page.name ? (
                                <>
                                {page.name}
                                </>
                            ) : (
                                <i>No Name</i>
                            )}{" "}
                            {page.favorite ? (
                                <span>★</span>
                            ) : null}
                        </NavLink>
                    </li>
                    ))}
                </ul>
              ) : (
                <p>
                    <i>No pages</i>
                </p>
              )}
            </nav>
            </div>
            <div
                className={
                    navigation.state === "loading" && !searching
                    ? "loading" : ""
                }
                id="detail"
            >
                <Outlet />
            </div>

            <ScrollRestoration />
            <Scripts />
        </body>
        </html>
    );
}
