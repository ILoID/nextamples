import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { config } from "@/config/site";
import { exampleData } from "@/constants";
import FullExample from "@/components/examples/FullExample";
import SiteMap from "@/components/examples/SiteMap";
import SubcategoryNav from "@/components/examples/SubcategoryNav";

const CategoryPage = ({ params }: { params: { category: string, subcategory: string } }) => {
    const decodedCategory = decodeURIComponent(params.category);
    const decodedSubcategory = decodeURIComponent(params.subcategory);

    const category = config.sidebarNav.find((category) => category.href.split("/")[2].toLowerCase() === decodedCategory)!;
    const subCategory = category.items.find((subCategory) => subCategory.href.split("/")[3].toLowerCase() === decodedSubcategory)!;

    const previousSubCategory = category.items[category.items.indexOf(subCategory) - 1];
    const nextSubCategory = category.items[category.items.indexOf(subCategory) + 1];

    const examples = exampleData.filter((example) => example.category === category.title && example.subcategory === subCategory.title);

    const sortedExamples = examples.sort((a, b) => {
        const order = ["easy", "medium", "hard"];
        return order.indexOf(a.complexity) - order.indexOf(b.complexity);
    });

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

                    <div className="flex flex-col space-y-4">
                        {sortedExamples.map((example) => (
                            <FullExample key={example.title} example={example} />
                        ))}
                    </div>
                </div>

                <SubcategoryNav prev={previousSubCategory} next={nextSubCategory} />
            </div>

            <SiteMap examples={examples} />
        </div>
    );
};

export default CategoryPage;