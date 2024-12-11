
import type { LinksFunction,
             LoaderFunctionArgs,
            } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";

import { useEffect, useState } from "react";

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
import indexStylesHref from "./index.css?url";
import tail from "./tailwind.css?url";
import { createEmptyPage, getPages } from "./data";

import catImageMobile from "./assets/PillowsmithMobile.png"
import pillowsmithLogo from "./assets/Pillowsmith_logo.png"

import { affiliateText } from '../utils-text.jsx';
const affiliateWording = affiliateText();

export const action = async () => {
  const page = await createEmptyPage();
  return redirect(`/pages/${page.id}/edit`);
};

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: indexStylesHref },
    { rel: "stylesheet", href: tail },
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
    const [isNavOpen, setIsNavOpen] = useState(false);
    const submit = useSubmit();
    const searching = navigation.location
        && new URLSearchParams(navigation.location.search).has(
            "q"
        );

    console.log("pages", pages, "q", q);

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
                <NavLink to="/">
                    <h1>PILLOWSMITH</h1>
                </NavLink>

                <div className="search-row">
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
                    <button type="submit" className="p-2 bg-blue-300">New</button>
                    </Form>
                </div>
                <div>
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
                <div className="flex flex-col" >
                    <img src={pillowsmithLogo} className="m-3" alt="Pillowsmith's logo: Two white pillows on a blue background that has feathers on it. The word Pillowsmith is printed over the pillows in blue." />
                </div>

            </div>
            <div className="main-page">
                <p className = "affiliate-mobile">{affiliateWording}</p>
                <div className="flex flex-col">
                    <div className="mobile-header">
                        <div className="hamburger-holder">
                            <button type='button' className="HAMBURGER-ICON space-y-2"
                                    onClick={() => setIsNavOpen((prev) => !prev)}>
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            </button>
                        </div>
                        <div className="image-div">
                            <img src={catImageMobile} alt="Pillowsmith banner with multiple illustrated pillows and a real orang cat on a purlpe pillow. The text reads 'Pillowsith: Sleep like a kitten'" className="cat-image"/>
                        </div>
                    </div>
                    <div className={isNavOpen ? "showMenuNav wide-open" : "hideMenuNav wide-open"}>
                        <div className="menu-div">
                            <button type="button" className="x-div absolute top-8 right-8"
                                onClick={() => setIsNavOpen(false)}>
                                <svg
                                    className="h-8 w-8 text-gray-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                            <nav>
                                {pages.length ? (
                                    <ul className="mobile-nav-list">
                                        {pages.map((page) => (
                                        <li key={page.id} className="mobile-nav">
                                            <NavLink className={
                                                ({isActive, isPending }) => isActive
                                                ? "active "
                                                : isPending
                                                ? "pending"
                                                : ""
                                            }
                                            onClick={() => setIsNavOpen(false)}
                                            to={`${page.link}`}>
                                                {page.name ? (
                                                    <>
                                                    {page.name}
                                                    </>
                                                ) : (
                                                    <i>No Name</i>
                                                )}{" "}
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
                    </div>
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
            </div>
            <ScrollRestoration />
            <Scripts />
        </body>
        </html>
    );
}
