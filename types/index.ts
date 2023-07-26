export interface Example {
    title: string;
    date: string;
    author: string;
    category: string;
    subcategory: string;
    complexity: "easy" | "medium" | "hard";
    tags: string[];
    summary: string;
    text: string;
    code: string;
}

export interface FilterOptions {
    category: string;
    tags: string;
    complexity: string;
    search: string;
    inCode: string;
    matchCase: string;
    inText: string;
};

export interface SearchOptions {
    inCode: boolean;
    matchCase: boolean;
    inText: boolean;
};