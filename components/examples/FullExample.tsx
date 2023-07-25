"use client";

import { atomDark, solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Example } from "@/types";
import { useTheme } from "next-themes";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { cn, getVariant } from "@/lib/utils";
import dynamic from "next/dynamic";
import { Button } from "../ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

const SyntaxHighlighter = dynamic(() => import('react-syntax-highlighter').then(mod => mod.Prism), { ssr: false });

interface FullExampleProps {
    example: Example;
};

const FullExample: React.FC<FullExampleProps> = ({
    example
}) => {
    const { theme } = useTheme();
    const [isCopied, setIsCopied] = useState(false);

    let borderColor = "border-green-500"; // default
    if (example.complexity == "medium") borderColor = "border-yellow-500";
    if (example.complexity == "hard") borderColor = "border-red-500";

    const onCopy = (code: string) => {
        navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div id={example.title} className={cn("flex flex-col space-y-4 p-4 rounded-md shadow-md border", borderColor)}>
            <div className="flex items-start justify-between">
                <div className="flex flex-col">
                    <h2 className="text-3xl font-mono font-semibold">
                        {example.title}
                    </h2>
                    <small className="text-muted-foreground">
                        by {example.author}
                    </small>
                </div>
                <small className="text-muted-foreground">
                    {example.date}
                </small>

            </div>
            
            <div>
                {example.tags.map((tag) => (
                    <Badge key={tag} variant={getVariant(tag)} className="capitalize cursor-default">
                        {tag}
                    </Badge>
                ))}
            </div>

            <Separator />
            <p className="p-2 font-sans">
                {example.summary}
            </p>

            <div className="relative">
                <div onClick={() => onCopy(example.code)} className="absolute top-4 right-2 p-2 rounded-md cursor-pointer transition duration-200 hover:bg-[#ffebb4] dark:hover:bg-muted">
                    {!isCopied ? (
                        <Copy className="h-4 w-4" />
                    ) : (
                        <Check className="h-4 w-4" />
                    )}
                </div>
                <SyntaxHighlighter language="typescript" style={theme === "light" ? solarizedlight : atomDark} showLineNumbers wrapLines>
                    {example.code}
                </SyntaxHighlighter>
            </div>

            <p>
                {example.text}
            </p>
        </div>
    );
};

export default FullExample;