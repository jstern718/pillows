////////////////////////////////////////////////////////////////////////////////
// 🛑 Nothing in here has anything to do with Remix, it's just a fake database
////////////////////////////////////////////////////////////////////////////////

import { matchSorter } from "match-sorter";
// @ts-expect-error - no types, but it's a tiny function
import sortBy from "sort-by";
import invariant from "tiny-invariant";

type PageMutation = {
  id?: string;
  name?: string;
  link?: string;
};

export type PageRecord = PageMutation & {
  id: string;
  createdAt: string;
};

////////////////////////////////////////////////////////////////////////////////
// This is just a fake DB table. In a real app you'd be talking to a real db or
// fetching from an existing API.
const fakePages = {
  records: {} as Record<string, PageRecord>,

  async getAll(): Promise<PageRecord[]> {
    return Object.keys(fakePages.records)
      .map((key) => fakePages.records[key])
      .sort(sortBy("-createdAt", "last"));
  },

  async get(id: string): Promise<PageRecord | null> {
    return fakePages.records[id] || null;
  },

  async create(values: PageMutation): Promise<PageRecord> {
    const id = values.id || Math.random().toString(36).substring(2, 9);
    const createdAt = new Date().toISOString();
    const newPage = { id, createdAt, ...values };
    fakePages.records[id] = newPage;
    return newPage;
  },

  async set(id: string, values: PageMutation): Promise<PageRecord> {
    const page = await fakePages.get(id);
    invariant(page, `No page found for ${id}`);
    const updatedPage = { ...page, ...values };
    fakePages.records[id] = updatedPage;
    return updatedPage;
  },

  destroy(id: string): null {
    delete fakePages.records[id];
    return null;
  },
};

////////////////////////////////////////////////////////////////////////////////
// Handful of helper functions to be called from route loaders and actions
export async function getPages(query?: string | null) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  let pages = await fakePages.getAll();
  if (query) {
    pages = matchSorter(pages, query, {
      keys: ["name"],
    });
  }
  return pages.sort(sortBy("last", "createdAt"));
}

export async function createEmptyPage() {
  const page = await fakePages.create({});
  return page;
}

export async function getPage(id: string) {
  return fakePages.get(id);
}

export async function updatePage(id: string, updates: PageMutation) {
  const page = await fakePages.get(id);
  if (!page) {
    throw new Error(`No page found for ${id}`);
  }
  await fakePages.set(id, { ...page, ...updates });
  return page;
}

export async function deletePage(id: string) {
  fakePages.destroy(id);
}

[
  {
    name: "Main Page",
    link: "/",
  },
  {
    name: "Most Popular",
    link: "/mostpopular",
  },
  {
    name: "Cooling Pillows",
    link: "/cooling",
  },
  {
    name: "Thin Pillows",
    link: "/thin",
  },
  {
    name: "Memory Foam",
    link: "/memoryfoam",
  },
  {
    name: "Shredded Foam",
    link: "/shreddedfoam",
  },
  {
    name: "Pillowcases",
    link: "/pillowcases",
  }
].forEach((page) => {
  fakePages.create({
    ...page,
    id: `${page.name}-id`,
  });
});
