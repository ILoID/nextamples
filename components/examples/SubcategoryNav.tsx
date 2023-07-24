import { cn } from "@/lib/utils";
import { NavItemWithChildren } from "@/types/nav";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

interface SubcategoryNavProps {
    prev: NavItemWithChildren;
    next: NavItemWithChildren;
};

const SubcategoryNav: React.FC<SubcategoryNavProps> = ({
    prev,
    next
}) => {
    return (
        <div className="flex items-center justify-between">
            {prev ? (
                <Link href={prev.href} className={cn("flex items-center space-x-2", buttonVariants({ variant: "ghost" }))}>
                    <ChevronLeft />
                    <p>
                        {prev.title}
                    </p>
                </Link>
            ) : (
                <div />
            )}
            {next && (
                <Link href={next.href} className={cn("flex items-center space-x-2", buttonVariants({ variant: "ghost" }))}>
                    <p>
                        {next.title}
                    </p>
                    <ChevronRight />
                </Link>
            )}
        </div>
    );
};

export default SubcategoryNav;