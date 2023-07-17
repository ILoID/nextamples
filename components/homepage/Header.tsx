import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const Header = () => {
    return (
        <header className="flex flex-col items-center py-48">
            <h1 className="text-4xl text-primary font-bold text-center mb-5">
                Welcome to <br />
                <span className="text-6xl text-sky-600 font-sans">
                    Nextamples
                </span>
            </h1>
            <h3 className="text-center text-muted-foreground px-16">
                Learn how to use Next.js&apos;s newest features by example
            </h3>

            <Link href="/examples" className={cn("mt-5", buttonVariants({ variant: "default", size: "lg" }))}>
                <p className="font-sans">
                    Get Started
                </p>
            </Link>
        </header>
    );
};

export default Header;