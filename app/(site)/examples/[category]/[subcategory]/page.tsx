"use client";

import Link from "next/link";
import { Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { atomDark, solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";

import { config } from "@/config/site";
import { exampleData } from "@/constants";

const CategoryPage = ({ params }: { params: { category: string, subcategory: string } }) => {
    const { theme } = useTheme();

    const decodedCategory = decodeURIComponent(params.category);
    const decodedSubcategory = decodeURIComponent(params.subcategory);

    const category = config.sidebarNav.find((category) => category.href.split("/")[2].toLowerCase() === decodedCategory)!;
    const subCategory = category.items.find((subCategory) => subCategory.href.split("/")[3].toLowerCase() === decodedSubcategory)!;

    const previousSubCategory = category.items[category.items.indexOf(subCategory) - 1];
    const nextSubCategory = category.items[category.items.indexOf(subCategory) + 1];

    const examples = exampleData.filter((example) => example.category === category.title && example.subcategory === subCategory.title);

    return (
        <div className="flex w-[80%] p-4 space-x-4">
            <div className="flex flex-col w-[80%] space-y-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                    <Link href={category.href} className="transition duration-200 hover:text-primary">
                        {category.title}
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-primary">{subCategory.title}</span>
                </div>

                <div className="flex flex-col space-y-4">
                    <h1 className="text-4xl font-bold">
                        {subCategory.title}
                    </h1>

                    <p className="font-sans">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl eget nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl eget nisl.
                    </p>

                    <div className="flex flex-col">
                        {examples.map((example) => (
                            <div key={example.title} id={example.title} className="flex flex-col space-y-4 p-4 rounded-md shadow-md border border-muted">
                                <div className="flex items-start justify-between">
                                    <div className="flex flex-col">
                                        <h2 className="text-3xl font-mono font-semibold">
                                            {example.title}
                                        </h2>
                                        <small className="text-muted-foreground">
                                            by {example.author}
                                        </small>
                                    </div>
                                    <small className="text-muted-foreground">
                                        {example.date}
                                    </small>
                                </div>
                                <p>
                                    {example.summary}
                                </p>

                                <SyntaxHighlighter language="typescript" style={theme === "light" ? solarizedlight : atomDark} showLineNumbers wrapLines>
                                    {example.code}
                                </SyntaxHighlighter>

                                <p>
                                    {example.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    {previousSubCategory ? (
                        <Link href={previousSubCategory.href} className="flex items-center space-x-2">
                            <ChevronLeft />
                            <p>
                                {previousSubCategory.title}
                            </p>
                        </Link>
                    ) : (
                        <div />
                    )}
                    {nextSubCategory && (
                        <Link href={nextSubCategory.href} className="flex items-center space-x-2">
                            <p>
                                {nextSubCategory.title}
                            </p>
                            <ChevronRight />
                        </Link>
                    )}
                </div>
            </div>

            <div className="hidden w-[20%] lg:flex p-4 flex-col space-y-4">
                <h2 className=" font-bold">
                    On this page
                </h2>
                <ul className="flex flex-col space-y-2 ml-2">
                    {examples.map((example) => (
                        <Link key={example.title} href={`#${example.title}`} className="transition duration-200 text-muted-foreground hover:text-primary">
                            <li>
                                {example.title}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CategoryPage;