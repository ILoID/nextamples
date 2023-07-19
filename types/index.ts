export const categories = [
    "Routing",
    "Rendering",
    "Data Fetching",
    "Styling",
    "Optimizing",
    "Configuring",
    "Deploying",
    "Upgrading",
    "API Reference",
];

export const tagList = [
    {
        value: "routes",
        label: "Routes"
    },
    {
        value: "controllers",
        label: "Controllers"
    },
    {
        value: "models",
        label: "Models"
    },
    {
        value: "views",
        label: "Views"
    },
    {
        value: "components",
        label: "Components"
    },
];

export interface SearchOptions {
    searchInCodeOnly: boolean;
    matchCase: boolean;
    searchInExplanation: boolean;
};