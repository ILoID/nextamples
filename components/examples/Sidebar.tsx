"use client";

import { categories } from "@/constants";
import { useRouter } from "next/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const Sidebar = () => {
    const router = useRouter();

    const handleCategoryClick = (category: string, subcategory: string) => {
        router.push(`/examples/${category}/${subcategory}`);
    }

    return (
        <aside className="w-[20%] flex flex-col p-12 space-y-4 h-full overflow-y-auto">
            <Accordion type="multiple">
                {categories.map((category) => (
                    <AccordionItem key={category.name} value={category.name} className="border-none">
                        <AccordionTrigger className="text-xl font-sans">
                            {category.name}
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col space-y-1 text-lg font-sans text-muted-foreground">
                                {category.subcategories.map((subcategory) => (
                                    <p key={subcategory} onClick={() => handleCategoryClick(category.name, subcategory)} className="ml-2 hover:text-primary cursor-pointer">
                                        {subcategory}
                                    </p>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </aside>
    );
};

export default Sidebar;