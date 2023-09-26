import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { config } from "@/config/site";
import FullExample from "@/components/examples/FullExample";
import SiteMap from "@/components/examples/SiteMap";
import SubcategoryNav from "@/components/examples/SubcategoryNav";
import getExamplesBySubcategory from "@/actions/getExamplesBySubcategory";
import { Example } from "@prisma/client";

const CategoryPage = async ({ params }: { params: { category: string, subcategory: string } }) => {
    const category = config.sidebarNav.find((category) => category.href.split("/")[2].toLowerCase() === params.category)!;
    const subCategory = category.items.find((subCategory) => subCategory.href.split("/")[3].toLowerCase() === params.subcategory)!;

    const previousSubCategory = category.items[category.items.indexOf(subCategory) - 1];
    const nextSubCategory = category.items[category.items.indexOf(subCategory) + 1];

    const examples: Example[] = await getExamplesBySubcategory(subCategory.title);

    const sortedExamples = examples.sort((a, b) => {
        const order = ["easy", "medium", "hard"];
        return order.indexOf(a.complexity) - order.indexOf(b.complexity);
    });

    return (
        <div className="flex w-full lg:w-[75%] p-4 space-x-4 overflow-x-hidden">
            <div className="flex flex-col w-full lg:w-[80%] space-y-8">
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
                            <FullExample key={example.id} example={example} />
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