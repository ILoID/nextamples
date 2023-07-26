import { Example } from "@prisma/client";
import Link from "next/link";

interface SiteMapProps {
    examples: Example[];
};

const SiteMap: React.FC<SiteMapProps> = ({
    examples
}) => {
    const groupByComplexity = (examples: Example[]) => {
        return examples.reduce((grouped, example) => {
            (grouped[example.complexity] = grouped[example.complexity] || []).push(example);
            return grouped;
        }, {} as Record<Example["complexity"], Example[]>);
    };

    const groupedExamples = groupByComplexity(examples);

    return (
        <aside className="hidden w-[20%] lg:flex h-screen sticky top-[calc(100vh-91%)] py-16 px-4 flex-col space-y-4">
            <h2 className="font-bold">
                On this page
            </h2>
            {Object.entries(groupedExamples).map(([complexity, examples]) => (
                <div key={complexity}>
                    <h3 className="capitalize font-sans mb-2">
                        {complexity}
                    </h3>
                    <ul className="flex flex-col space-y-2 ml-2">
                        {examples.map((example) => (
                            <Link key={example.id} href={`#${example.title}`} className="transition duration-200 text-muted-foreground hover:text-primary">
                                <li>
                                    {example.title}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    );
};

export default SiteMap;