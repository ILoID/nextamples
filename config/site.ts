import { MainNavItem, SidebarNavItem } from "@/types/nav";

export const siteConfig = {
    name: "Nextamples",
    url: "https://nextamples.com",
    description: "Next.js examples",
}

export type SiteConfig = typeof siteConfig;

interface ExConfig {
    mainNav: MainNavItem[];
    sidebarNav: SidebarNavItem[];
};

export const exConfig: ExConfig = {
    mainNav: [
        {
            title: "Categories",
            href: "/categories",
        },
        {
            title: "Examples",
            href: "/examples",
        },
        {
            title: "Docs",
            href: "/docs",
        },
        {
            title: "About",
            href: "/about",
        },
    ],
    sidebarNav: [
        {
            title: "Getting Started",
            items: [
                {
                    title: "Introduction",
                    href: "/examples/",
                    items: [],
                },
                {
                    title: "Installation",
                    href: "/examples/installation",
                    items: [],
                },
            ],
        },
        {
            title: "Examples",
            items: [
                {
                    title: "Basic",
                    href: "/examples/basic",
                    items: [],
                },
                {
                    title: "Advanced",
                    href: "/examples/advanced",
                    items: [],
                },
            ],
        },
    ],
}