"use client";

import { Example } from "@/types";

interface ExampleCardProps {
    example: Example;
};

const ExampleCard: React.FC<ExampleCardProps> = ({
    example
}) => {
    return (
        <div>
            {example.title}
        </div>
    );
};

export default ExampleCard;