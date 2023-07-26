"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "../ui/command";
import { cn, getVariant } from "@/lib/utils";
import { Badge } from "../ui/badge";
import ExploreSearch from "./ExploreSearch";
import { SearchOptions } from "@/types";
import { Separator } from "../ui/separator";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { tagList } from "@/constants";
import { config } from "@/config/site";

const ExploreFilter = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [open, setOpen] = useState(false);

    const category = searchParams.get("category") || "";
    const tags = useMemo(() => searchParams.get("tags")?.split(",") || [], [searchParams])
    const complexity = searchParams.get("complexity");

    const categories = config.sidebarNav;

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

    const handleSearchChange = useCallback((searchQuery: string, options: SearchOptions) => {
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
        <div className="flex flex-wrap gap-2 md:max-w-[200px]">
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
                <div className="relative group flex items-center cursor-pointer hover:opacity-50">
                    <Badge variant="outline">
                        No tags selected
                    </Badge>
                </div>
            )}
        </div>
    );

    return (
        <div className="p-4">
            <div className="flex justify-between">
                <h1 className="text-3xl font-extrabold mb-4">
                    Explore examples
                </h1>

                {/* Clear filters */}
                <Button variant="default" onClick={() => router.push(pathname)}>
                    Clear filters
                </Button>
            </div>

            <div className="flex flex-col border border-muted p-4 rounded-md shadow-md">
                {/* Desktop Categories */}
                <RadioGroup className="hidden md:flex md:items-center md:justify-between md:overflow-x-auto">
                    {categories.map((categoryItem) => {
                        return (
                            <Label key={categoryItem.title} htmlFor={categoryItem.title} className="flex flex-col items-center justify-between w-full rounded-md border-2 border-muted bg-popover p-4 cursor-pointer hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-blue-500">
                                <RadioGroupItem value={categoryItem.title} id={categoryItem.title} className="sr-only" onClick={() => handleFilterChange("category", categoryItem.title.toLowerCase())} checked={category === categoryItem.title.toLowerCase()} />
                                <div className="flex items-center space-x-2">
                                    {categoryItem.icon && <categoryItem.icon />}
                                    <span>{categoryItem.title}</span>
                                </div>
                            </Label>
                        );
                    })}
                </RadioGroup>


                <Separator className="hidden md:block my-4" />

                {/* Mobile Categories */}
                <div className="mb-4 z-100 md:hidden">
                    <Select onValueChange={(value) => handleFilterChange("category", value.toLowerCase())}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {categories.map(((categoryItem) => {
                                    return (
                                        <SelectItem key={categoryItem.title} value={categoryItem.title}>
                                            <div className="flex items-center space-x-2">
                                                {categoryItem.icon && <categoryItem.icon />}
                                                <span>{categoryItem.title}</span>
                                            </div>
                                        </SelectItem>
                                    );
                                }))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
                    {/* Search */}
                    <ExploreSearch onSearch={handleSearchChange} />

                    {/* Complexity Filter */}
                    <RadioGroup className="flex justify-around md:flex-col">
                        <Label htmlFor="easy" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 cursor-pointer hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-green-500">
                            <RadioGroupItem value="easy" id="easy" className="sr-only" onClick={() => handleFilterChange("complexity", "easy")} checked={complexity === "easy"} />
                            <span>Beginner</span>
                        </Label>
                        <Label htmlFor="medium" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 cursor-pointer hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-yellow-500">
                            <RadioGroupItem value="medium" id="medium" className="sr-only" onClick={() => handleFilterChange("complexity", "medium")} checked={complexity === "medium"} />
                            <span>Intermediate</span>
                        </Label>
                        <Label htmlFor="hard" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 cursor-pointer hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-red-500">
                            <RadioGroupItem value="hard" id="hard" className="sr-only" onClick={() => handleFilterChange("complexity", "hard")} checked={complexity === "hard"} />
                            <span>Advanced</span>
                        </Label>
                    </RadioGroup>

                    {/* Tags Filter */}
                    <div className="flex flex-col justify-between space-y-4">
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

                        <SelectedTags tags={tags} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreFilter;