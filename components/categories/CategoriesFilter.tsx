"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "../ui/command";
import { cn } from "@/lib/utils";

const tagList = [
    {
        value: "routes",
        label: "Routes"
    },
    {
        value: "controllers",
        label: "Controllers"
    },
    {
        value: "models",
        label: "Models"
    },
    {
        value: "views",
        label: "Views"
    },
    {
        value: "components",
        label: "Components"
    },
]

interface CategoriesFilterProps { };

const CategoriesFilter: React.FC<CategoriesFilterProps> = ({ }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [open, setOpen] = useState(false);

    const category = searchParams.get("category");
    const tags = searchParams.get("tags");
    const complexity = searchParams.get("complexity");
    const code = searchParams.get("code");

    const handleFilterChange = (filterName: string, filterValue: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (filterName === "tag") {
            let existingTags = params.get("tag")?.split(",") || [];
            if (existingTags.includes(filterValue)) {
                existingTags = existingTags.filter(tag => tag !== filterValue);
            } else {
                existingTags.push(filterValue);
            }
            if (existingTags.length === 0) {
                params.delete("tag");
            } else {
                params.set("tag", existingTags.join(","));
            }
        } else {
            if (params.get(filterName) === filterValue) {
                params.delete(filterName);
            } else {
                params.set(filterName, filterValue);
            }
        }
        router.push(pathname + "?" + params.toString());
    };

    return (
        <div className="p-4">
            <h1 className="mb-4">
                <span className="text-2xl font-bold">Filters</span>
            </h1>

            <div className="flex flex-col p-4 space-y-4 rounded-md border border-muted md:flex-row md:justify-around md:items-center md:space-y-0">
                {/* Complexity Filter */}
                <RadioGroup className="grid grid-cols-3 gap-4">
                    <Label htmlFor="easy" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">
                        <RadioGroupItem value="easy" id="easy" className="sr-only" onClick={() => handleFilterChange("complexity", "easy")} checked={complexity === "easy"} />
                        <span>Easy</span>
                    </Label>
                    <Label htmlFor="medium" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">
                        <RadioGroupItem value="medium" id="medium" className="sr-only" onClick={() => handleFilterChange("complexity", "medium")} checked={complexity === "medium"} />
                        <span>Medium</span>
                    </Label>
                    <Label htmlFor="hard" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">
                        <RadioGroupItem value="hard" id="hard" className="sr-only" onClick={() => handleFilterChange("complexity", "hard")} checked={complexity === "hard"} />
                        <span>Hard</span>
                    </Label>
                </RadioGroup>

                {/* Tags Filter */}
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
                            {tags ? tags.split(",").map(tagValue => tagList.find((tagItem) => tagItem.value === tagValue)?.label).join(", ") : "Tags"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandInput placeholder="Search tags..." />
                            <CommandEmpty>
                                No tag found.
                            </CommandEmpty>
                            <CommandGroup>
                                {tagList.map((tagItem) => (
                                    <CommandItem key={tagItem.value} onSelect={() => handleFilterChange("tag", tagItem.value)}>
                                        <Check className={cn("mr-2 h-4 w-4", tags?.split(",").includes(tagItem.value) ? "opacity-100" : "opacity-0")} />
                                        {tagItem.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};

export default CategoriesFilter;