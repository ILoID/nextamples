"use client";

import { Example } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { cn, getVariant } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { categories } from "@/constants";

interface ExampleCardProps {
    example: Example;
};

const ExampleCard: React.FC<ExampleCardProps> = ({
    example
}) => {
    const router = useRouter();

    // TODO: Make sure category exists
    const categoryItem = categories.find(category => category.name === example.category);
    const CategoryIcon = categoryItem?.icon || categories[0].icon;

    let borderColor = "border-green-500"; // default
    if (example.complexity == "medium") borderColor = "border-yellow-500";
    if (example.complexity == "hard") borderColor = "border-red-500";

    return (
        <Card onClick={() => router.push(`/example/${example.title}`)} className={cn("flex flex-col justify-between shadow-md bg-secondary border-2 transition duration-300 ease-in-out cursor-pointer hover:scale-105", borderColor)}>
            <CardHeader>
                <CardTitle className="flex items-start justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-light leading-6 mb-1">
                            {example.title}
                        </h1>
                        <small className="font-normal text-muted-foreground">
                            {example.author}
                        </small>
                    </div>
                    <div className="flex flex-col text-right">
                        <h2 className="flex items-center space-x-2 text-xl font-mono leading-6 mb-1 font-extralight">
                            <span>{example.category}</span>
                            <CategoryIcon />
                        </h2>
                        <small className="font-normal text-muted-foreground">
                            {example.date}
                        </small>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between">
                <p className="text-primary">
                    {example.summary}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
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