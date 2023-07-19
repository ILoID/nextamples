"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { SearchOptions } from "@/types";
import { Checkbox } from "../ui/checkbox";

interface CategoriesSearchProps {
    onSearch: (searchQuery: string, options: SearchOptions) => void;
};

const CategoriesSearch: React.FC<CategoriesSearchProps> = ({
    onSearch
}) => {
    const [searchQuery, setSearchQuery] = useState("")
    const [options, setOptions] = useState<SearchOptions>({
        searchInCodeOnly: false,
        matchCase: false,
        searchInExplanation: false
    });

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        onSearch(event.target.value, options);
    };

    const handleOptionChange = (option: keyof SearchOptions) => {
        setOptions(prevOptions => ({
            ...prevOptions,
            [option]: !prevOptions[option]
        }));

        onSearch(searchQuery, { ...options, [option]: !options[option] });
    };

    return (
        <div className="flex flex-col space-y-4">
            <Input type="text" placeholder="Search code..." onChange={handleSearchChange} value={searchQuery} />
            <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-start space-x-4">
                    <Checkbox className="h-6 w-6" checked={options.searchInCodeOnly} onClick={() => handleOptionChange("searchInCodeOnly")} />
                    <p className="text-sm font-sans">
                        Search in code only
                    </p>
                </div>
                <div className="flex items-center justify-start space-x-4">
                    <Checkbox className="h-6 w-6" checked={options.matchCase} onClick={() => handleOptionChange("matchCase")} />
                    <p className="text-sm font-sans">
                        Match case
                    </p>
                </div>
                <div className="flex items-center justify-start space-x-4">
                    <Checkbox className="h-6 w-6" checked={options.searchInExplanation} onClick={() => handleOptionChange("searchInExplanation")} />
                    <p className="text-sm font-sans">
                        Search in explanation
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CategoriesSearch;