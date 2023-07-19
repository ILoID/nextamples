"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "../ui/command";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import CategoriesSearch from "./CategoriesSearch";
import { SearchOptions } from "@/types/searchOptions";

// TODO: Make a real tag list
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
    const tags = useMemo(() => searchParams.get("tags")?.split(",") || [], [searchParams])
    const complexity = searchParams.get("complexity");

    const handleFilterChange = useCallback((filterName: string, filterValue: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (filterName === "tags") {
            let existingTags = params.get("tags")?.split(",") || [];

            if (existingTags.includes(filterValue)) {
                existingTags = existingTags.filter(tag => tag !== filterValue);
            } else {
                existingTags.push(filterValue);
            }

            if (existingTags.length === 0) {
                params.delete("tags");
            } else {
                params.set("tags", existingTags.join(","));
            }
        } else {
            if (params.get(filterName) === filterValue) {
                params.delete(filterName);
            } else {
                params.set(filterName, filterValue);
            }
        }

        router.push(pathname + "?" + params.toString());
    }, [router, pathname, searchParams]);

    const handleRemoveTag = useCallback((tag: string) => {
        handleFilterChange("tags", tag);
    }, [handleFilterChange]);

    const getVariant = (tag: string) => {
        switch (tag) {
            case "routes":
                return "green";
            case "controllers":
                return "orange";
            case "models":
                return "blue";
            case "views":
                return "destructive";
            case "components":
                return "secondary";
            default:
                return "outline";
        }
    }

    const handleSearch = useCallback((searchQuery: string, options: SearchOptions) => {
        console.log(searchQuery, options)
        const params = new URLSearchParams(searchParams.toString());

        if (searchQuery) {
            params.set("search", searchQuery);
        } else {
            params.delete("search");
        }

        for (const [option, value] of Object.entries(options)) {
            if (value) {
                params.set(option, "1");
            } else {
                params.delete(option);
            }
        }

        router.push(pathname + "?" + params.toString());
    }, [router, pathname, searchParams]);

    const SelectedTags: React.FC<{ tags: string[] }> = ({ tags }) => (
        <div className="flex flex-wrap gap-2 md:flex-col">
            {tags.length > 0 ? (
                tags.map((tag) => (
                    <div key={tag} className="relative group inline-flex items-center cursor-pointer hover:opacity-50" onClick={() => handleRemoveTag(tag)}>
                        <Badge variant={getVariant(tag)}>
                            {tagList.find((tagItem) => tagItem.value === tag)?.label}
                        </Badge>
                        <X className="absolute w-6 h-6 text-red-500 opacity-0 group-hover:opacity-100" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
                    </div>
                ))
            ) : (
                <div className="relative group inline-flex items-center cursor-pointer hover:opacity-50">
                    <Badge variant="outline">
                        No tags selected
                    </Badge>
                </div>
            )}
        </div>
    );

    return (
        <div className="p-4">
            <h1 className="mb-4">
                <span className="text-2xl font-extrabold">
                    Find examples
                </span>
            </h1>

            <div className="flex flex-col p-4 space-y-4 rounded-md border border-muted md:flex-row md:justify-between md:items-center md:space-y-0">
                <SelectedTags tags={tags} />

                {/* Complexity Filter */}
                <RadioGroup className="grid grid-cols-3 gap-4">
                    <Label htmlFor="easy" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-green-500">
                        <RadioGroupItem value="easy" id="easy" className="sr-only" onClick={() => handleFilterChange("complexity", "easy")} checked={complexity === "easy"} />
                        <span>Beginner</span>
                    </Label>
                    <Label htmlFor="medium" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-yellow-500">
                        <RadioGroupItem value="medium" id="medium" className="sr-only" onClick={() => handleFilterChange("complexity", "medium")} checked={complexity === "medium"} />
                        <span>Intermediate</span>
                    </Label>
                    <Label htmlFor="hard" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-red-500">
                        <RadioGroupItem value="hard" id="hard" className="sr-only" onClick={() => handleFilterChange("complexity", "hard")} checked={complexity === "hard"} />
                        <span>Advanced</span>
                    </Label>
                </RadioGroup>

                {/* Tags Filter */}
                <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:items-center md:space-x-4">
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
                                <p className="truncate">
                                    {tags.length} Tag{tags.length !== 1 ? "s" : ""} selected
                                </p>
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
                                        <CommandItem key={tagItem.value} onSelect={() => handleFilterChange("tags", tagItem.value)}>
                                            <Check className={cn("mr-2 h-4 w-4", tags.includes(tagItem.value) ? "opacity-100" : "opacity-0")} />
                                            {tagItem.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>

                {/* Search */}
                <div>
                    <CategoriesSearch onSearch={handleSearch} />
                </div>
            </div>
        </div>
    );
};

export default CategoriesFilter;