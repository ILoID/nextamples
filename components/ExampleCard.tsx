"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { cn, getVariant } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { config } from "@/config/site";
import { Example } from "@prisma/client";

interface ExampleCardProps {
    example: Example;
};

const ExampleCard: React.FC<ExampleCardProps> = ({
    example
}) => {
    const router = useRouter();

    const categories = config.sidebarNav;
    const categoryItem = categories.find(category => category.title === example.category);

    let borderColor = "border-green-500"; // default
    if (example.complexity == "medium") borderColor = "border-yellow-500";
    if (example.complexity == "hard") borderColor = "border-red-500";

    const tagList = example.tags.split(",");

    const handleCardClick = () => {
        const category = decodeURIComponent(example.category).toLowerCase().replace(/\s+/g, "-");
        const subcategory = decodeURIComponent(example.subcategory).toLowerCase().replace(/\s+/g, "-");

        const path = `/examples/${category}/${subcategory}#${example.title}`;

        router.push(path);
    }

    return (
        <Card onClick={handleCardClick} className={cn("flex flex-col justify-between shadow-md bg-secondary border-2 transition duration-300 ease-in-out cursor-pointer hover:scale-105", borderColor)}>
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
                            {categoryItem?.icon && <categoryItem.icon />}
                        </h2>
                        <small className="font-normal text-muted-foreground">
                            {example.createdAt.toLocaleDateString()}
                        </small>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between">
                <p className="text-primary">
                    {example.summary}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {tagList.map(tag => (
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