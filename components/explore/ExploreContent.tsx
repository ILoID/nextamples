"use client";

import { useSearchParams } from "next/navigation";
import ExampleCard from "../ExampleCard";
import { exampleData } from "@/constants";
import { Example } from "@/types";

interface ExploreContentProps {};

const ExploreContent: React.FC<ExploreContentProps> = ({}) => {
    const searchParams = useSearchParams();

    const category = searchParams.get("category") || "";
    const tags = searchParams.get("tags")?.split(",") || [];
    const complexity = searchParams.get("complexity") || "";
    const searchQuery = searchParams.get("search") || "";

    let examples: Example[] = exampleData;

    if (category) {
        examples = examples.filter(example => example.category.toLowerCase() === category);
    }
    if (tags.length > 0) {
        examples = examples.filter(example => tags.every(tag => example.tags.includes(tag)));
    }
    if (complexity) {
        examples = examples.filter(example => example.complexity === complexity);
    }
    if (searchQuery) {
        const inCode = searchParams.get("inCode") === "1";
        const matchCase = searchParams.get("matchCase") === "1";
        const inText = searchParams.get("inText") === "1";

        const searchFunc = (text: string) => {
            if (matchCase) {
                return text.includes(searchQuery);
            } else {
                return text.toLowerCase().includes(searchQuery.toLowerCase());
            }
        };

        examples = examples.filter((example) => {
            const searchInCode = inCode && searchFunc(example.code);
            const searchInText = inText && searchFunc(example.text);
            const searchEverywhere = !inCode && !inText &&  (
                searchFunc(example.title) || searchFunc(example.summary) ||
                searchFunc(example.text) || searchFunc(example.code)
            );

            return searchInCode || searchInText || searchEverywhere;
        });
    } 

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {examples.map(example => (
                    <ExampleCard key={example.title} example={example} />
                ))}
            </div>
        </div>
    );
};

export default ExploreContent;