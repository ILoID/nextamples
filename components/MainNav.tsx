"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Icons } from "./Icons";
import { cn } from "@/lib/utils";

const MainNav = () => {
    const pathname = usePathname();

    return (
        <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-24 flex items-center space-x-2">
                <Icons.logo className="w-6 h-6" />
                <span className="hidden font-bold sm:inline-block">
                    Nextamples
                </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link href="/explore" className={cn("transition-colors hover:text-foreground/80", pathname === "/explore" ? "text-foreground" : "text-foreground/60")}>
                    Explore
                </Link>
                <Link href="/examples" className={cn("transition-colors hover:text-foreground/80", pathname === "/examples" ? "text-foreground" : "text-foreground/60")}>
                    Examples
                </Link>
                <Link href="/docs" className={cn("transition-colors hover:text-foreground/80", pathname === "/docs" ? "text-foreground" : "text-foreground/60")}>
                    Docs
                </Link>
                <Link href="/about" className={cn("transition-colors hover:text-foreground/80", pathname === "/about" ? "text-foreground" : "text-foreground/60")}>
                    About
                </Link>
            </nav>
        </div>
    );
};

export default MainNav;