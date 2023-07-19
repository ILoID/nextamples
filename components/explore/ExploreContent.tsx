"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ExampleCard from "../ExampleCard";
import { exampleData } from "@/constants";
import { Example } from "@/types";

interface ExploreContentProps {};

const ExploreContent: React.FC<ExploreContentProps> = ({}) => {
    const searchParams = useSearchParams();
    const [examples, setExamples] = useState<Example[]>(exampleData);

    useEffect(() => {
        // TODO: Fetch categories from API
    }, [searchParams]);

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