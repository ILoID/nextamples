import { NavItemWithChildren } from "@/types/nav";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

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
                <Link href={prev.href} className="flex items-center space-x-2">
                    <ChevronLeft />
                    <p>
                        {prev.title}
                    </p>
                </Link>
            ) : (
                <div />
            )}
            {next && (
                <Link href={next.href} className="flex items-center space-x-2">
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