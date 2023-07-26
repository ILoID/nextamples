import ExampleCard from "../ExampleCard";
import { Example } from "@prisma/client";
import getExamples from "@/actions/getExamples";
import { FilterOptions } from "@/types";

interface ExploreContentProps {
    filters: FilterOptions;
};

const ExploreContent: React.FC<ExploreContentProps> = async ({
    filters
}) => {
    let examples: Example[] = await getExamples();

    const { category, tags, complexity, search } = filters;

    if (category) {
        examples = examples.filter(example => example.category.toLowerCase() === category);
    }
    if (tags) {
        const tagList = tags.split(",");
        tagList.forEach(tag => {
            examples = examples.filter(example => example.tags.includes(tag));
        });
    }
    if (complexity) {
        examples = examples.filter(example => example.complexity === complexity);
    }
    if (search) {
        const inCode = filters.inCode === "1";
        const matchCase = filters.matchCase === "1";
        const inText = filters.inText === "1";

        const searchFunc = (text: string) => {
            if (matchCase) {
                return text.includes(search);
            } else {
                return text.toLowerCase().includes(search.toLowerCase());
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {examples.map(example => (
                    <ExampleCard key={example.id} example={example} />
                ))}
            </div>
        </div>
    );
};

export default ExploreContent;