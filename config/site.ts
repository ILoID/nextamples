import { MainNavItem, SidebarNavItem } from "@/types/nav";
import { ArrowUpCircle, Book, Brush, Cog, Database, Eye, Home, Rocket, UploadCloud } from "lucide-react";

export const siteConfig = {
    name: "Nextamples",
    url: "https://nextamples.com",
    description: "Next.js examples",
}

export type SiteConfig = typeof siteConfig;

interface Config {
    mainNav: MainNavItem[];
    sidebarNav: SidebarNavItem[];
};

export const config: Config = {
    mainNav: [
        {
            title: "What's this?",
            href: "/introduction",
        },
        {
            title: "Explore",
            href: "/explore",
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
            title: "Routing",
            href: "/examples/routing",
            icon: Home,
            items: [
                {
                    title: "Defining Routes",
                    href: "/examples/routing/defining",
                    items: [],
                },
                {
                    title: "Pages and Layouts",
                    href: "/examples/routing/pages",
                    items: [],
                },
                {
                    title: "Linking and Navigating",
                    href: "/examples/routing/linking",
                    items: [],
                },
                {
                    title: "Route Groups",
                    href: "/examples/routing/groups",
                    items: [],
                },
                {
                    title: "Dynamic Routes",
                    href: "/examples/routing/dynamic",
                    items: [],
                },
                {
                    title: "Loading UI and Streaming",
                    href: "/examples/routing/loading",
                    items: [],
                },
                {
                    title: "Error Handling",
                    href: "/examples/routing/error",
                    items: [],
                },
                {
                    title: "Parallel Routes",
                    href: "/examples/routing/parallel",
                    items: [],
                },
                {
                    title: "Intercepting Routes",
                    href: "/examples/routing/intercepting",
                    items: [],
                },
                {
                    title: "Route Handlers",
                    href: "/examples/routing/handlers",
                    items: [],
                },
                {
                    title: "Middleware",
                    href: "/examples/routing/middleware",
                    items: [],
                },
                {
                    title: "Project Organization",
                    href: "/examples/routing/organization",
                    items: [],
                },
                {
                    title: "Internationalization",
                    href: "/examples/routing/i18n",
                    items: [],
                },
            ],
        },
        {
            title: "Rendering",
            href: "/examples/rendering",
            icon: Eye,
            items: [
                {
                    title: "Static and Dynamic",
                    href: "/examples/rendering/static",
                    items: [],
                },
                {
                    title: "Edge and Node.js Runtimes",
                    href: "/examples/rendering/runtimes",
                    items: [],
                },
            ],
        },
        {
            title: "Data Fetching",
            href: "/examples/data-fetching",
            icon: Database,
            items: [
                {
                    title: "Fetching",
                    href: "/examples/data-fetching/fetching",
                    items: [],
                },
                {
                    title: "Caching",
                    href: "/examples/data-fetching/caching",
                    items: [],
                },
                {
                    title: "Revalidating",
                    href: "/examples/data-fetching/revalidating",
                    items: [],
                },
                {
                    title: "Server Actions",
                    href: "/examples/data-fetching/server-actions",
                    items: [],
                },
            ],
        },
        {
            title: "Styling",
            href: "/examples/styling",
            icon: Brush,
            items: [
                {
                    title: "CSS Modules",
                    href: "/examples/styling/css-modules",
                    items: [],
                },
                {
                    title: "Tailwind CSS",
                    href: "/examples/styling/tailwind-css",
                    items: [],
                },
                {
                    title: "CSS-in-JS",
                    href: "/examples/styling/css-in-js",
                    items: [],
                },
                {
                    title: "Sass",
                    href: "/examples/styling/sass",
                    items: [],
                },
            ],
        },
        {
            title: "Optimizing",
            href: "/examples/optimizing",
            icon: Rocket,
            items: [
                {
                    title: "Images",
                    href: "/examples/optimizing/images",
                    items: [],
                },
                {
                    title: "Fonts",
                    href: "/examples/optimizing/fonts",
                    items: [],
                },
                {
                    title: "Scripts",
                    href: "/examples/optimizing/scripts",
                    items: [],
                },
                {
                    title: "Metadata",
                    href: "/examples/optimizing/metadata",
                    items: [],
                },
                {
                    title: "Static Assets",
                    href: "/examples/optimizing/static-assets",
                    items: [],
                },
                {
                    title: "Lazy Loading",
                    href: "/examples/optimizing/lazy-loading",
                    items: [],
                },
                {
                    title: "Analytics",
                    href: "/examples/optimizing/analytics",
                    items: [],
                },
                {
                    title: "OpenTelemetry",
                    href: "/examples/optimizing/opentelemetry",
                    items: [],
                },
                {
                    title: "Instrumentation",
                    href: "/examples/optimizing/instrumentation",
                    items: [],
                },
            ],
        },
        {
            title: "Configuring",
            href: "/examples/configuring",
            icon: Cog,
            items: [
                {
                    title: "TypeScript",
                    href: "/examples/configuring/typescript",
                    items: [],
                },
                {
                    title: "ESLint",
                    href: "/examples/configuring/eslint",
                    items: [],
                },
                {
                    title: "Environment Variables",
                    href: "/examples/configuring/environment-variables",
                    items: [],
                },
                {
                    title: "Absolute Imports and Module Path Aliases",
                    href: "/examples/configuring/absolute-imports-and-module-path-aliases",
                    items: [],
                },
                {
                    title: "MDX",
                    href: "/examples/configuring/mdx",
                    items: [],
                },
                {
                    title: "src Directory",
                    href: "/examples/configuring/src-directory",
                    items: [],
                },
                {
                    title: "Draft Mode",
                    href: "/examples/configuring/draft-mode",
                    items: [],
                },
            ],
        },
        {
            title: "Deploying",
            href: "/examples/deploying",
            icon: UploadCloud,
            items: [
                {
                    title: "Static Exports",
                    href: "/examples/deploying/static-exports",
                    items: [],
                },
            ],
        },
        {
            title: "Upgrading",
            href: "/examples/upgrading",
            icon: ArrowUpCircle,
            items: [
                {
                    title: "Codemods",
                    href: "/examples/upgrading/codemods",
                    items: [],
                },
                {
                    title: "App Router Migration",
                    href: "/examples/upgrading/app-router-migration",
                    items: [],
                },
            ],
        },
        {
            title: "API Reference",
            href: "/examples/api-reference",
            icon: Book,
            items: [
                {
                    title: "Components",
                    href: "/examples/api-reference/components",
                    items: [],
                },
                {
                    title: "File Conventions",
                    href: "/examples/api-reference/file-conventions",
                    items: [],
                },
                {
                    title: "Functions",
                    href: "/examples/api-reference/functions",
                    items: [],
                },
                {
                    title: "next.config.js Options",
                    href: "/examples/api-reference/next-config-js-options",
                    items: [],
                },
                {
                    title: "create-next-app",
                    href: "/examples/api-reference/create-next-app",
                    items: [],
                },
            ],
        },
    ],
}