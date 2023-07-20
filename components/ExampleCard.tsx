"use client";

import { Example } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { cn, getVariant } from "@/lib/utils";

interface ExampleCardProps {
    example: Example;
};

const ExampleCard: React.FC<ExampleCardProps> = ({
    example
}) => {
    let borderColor = "border-green-500"; // default
    if (example.complexity == "medium") borderColor = "border-yellow-500";
    if (example.complexity == "hard") borderColor = "border-red-500";

    return (
        <Card className={cn("shadow-md border-2 transition hover:scale-105", borderColor)}>
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-xl font-mono">
                            {example.title}
                        </h1>
                        <small className="font-normal">
                            by {example.author}
                        </small>
                    </div>
                    <div>
                        <h1 className="text-xl font-sans">
                            {example.category}
                        </h1>
                        <small className="font-normal">
                            {example.date}
                        </small>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between">
                <p className="text-primary mb-4">
                    {example.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                    {example.tags.map(tag => (
                        <Badge key={tag} variant={getVariant(tag)} className="capitalize">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default ExampleCard;