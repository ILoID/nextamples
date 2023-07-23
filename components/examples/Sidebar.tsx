"use client";

import { usePathname, useRouter } from "next/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { cn } from "@/lib/utils";
import { config } from "@/config/site";

const Sidebar = () => {
    const router = useRouter();
    const pathname = usePathname();

    const categories = config.sidebarNav;

    return (
        <aside className="hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto">
            <Accordion type="multiple">
                {categories.map((category) => (
                    <AccordionItem key={category.title} value={category.title} className="border-none">
                        <AccordionTrigger className="text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary">
                            {category.title}
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted">
                                {category.items.map((subcategory) => (
                                    <p 
                                        key={subcategory.title}
                                        onClick={() => router.push(subcategory.href)}
                                        className={cn("px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer", pathname === subcategory.href && "font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900")}>
                                        {subcategory.title}
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