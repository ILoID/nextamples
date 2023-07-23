import { Example } from "@/types";

export const tagList = [
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
];

export const exampleData: Example[] = [
    {
        "title": "Static Exports Example 0",
        "date": "23-07-2023",
        "author": "Tracy Hayes",
        "category": "Deploying",
        "subcategory": "Static Exports",
        "complexity": "easy",
        "tags": [
            "controllers"
        ],
        "summary": "Letter Congress question view quality stop.",
        "text": "Assume ok mother Mrs thought professor same. Go ahead situation arm ok put this. Bed wide take top.",
        "code": "return (\n        <aside className=\"hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto\">\n            <Accordion type=\"multiple\">\n                {categories.map((category) => (\n                    <AccordionItem key={category.title} value={category.title} className=\"border-none\">\n                        <AccordionTrigger className=\"text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary\">\n                            {category.title}\n                        </AccordionTrigger>\n                        <AccordionContent>\n                            <div className=\"flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted\">\n                                {category.items.map((subcategory) => (\n                                    <p \n                                        key={subcategory.title}\n                                        onClick={() => router.push(subcategory.href)}\n                                        className={cn(\"px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer\", pathname === subcategory.href && \"font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900\")}>\n                                        {subcategory.title}\n                                    </p>\n                                ))}\n                            </div>\n                        </AccordionContent>\n                    </AccordionItem>\n                ))}\n            </Accordion>\n        </aside>\n    );"
    },
    {
        "title": "Absolute Imports and Module Path Aliases Example 1",
        "date": "23-07-2023",
        "author": "Tracy Hayes",
        "category": "Configuring",
        "subcategory": "Absolute Imports and Module Path Aliases",
        "complexity": "hard",
        "tags": [
            "routes"
        ],
        "summary": "Word which agree coach performance simple.",
        "text": "Story thousand contain. Bag then machine instead small.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "Static Exports Example 2",
        "date": "23-07-2023",
        "author": "Sara Campbell",
        "category": "Deploying",
        "subcategory": "Static Exports",
        "complexity": "medium",
        "tags": [
            "components"
        ],
        "summary": "Must treatment occur site build.",
        "text": "Follow away trouble not true. Face especially although space couple. Student do likely rich face.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "Server Actions Example 3",
        "date": "23-07-2023",
        "author": "Sara Campbell",
        "category": "Data Fetching",
        "subcategory": "Server Actions",
        "complexity": "medium",
        "tags": [
            "components"
        ],
        "summary": "Exist fight information.",
        "text": "Fact myself officer my. Wait final past back agent resource. Coach from visit center rest real enter house.",
        "code": "return (\n        <aside className=\"hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto\">\n            <Accordion type=\"multiple\">\n                {categories.map((category) => (\n                    <AccordionItem key={category.title} value={category.title} className=\"border-none\">\n                        <AccordionTrigger className=\"text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary\">\n                            {category.title}\n                        </AccordionTrigger>\n                        <AccordionContent>\n                            <div className=\"flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted\">\n                                {category.items.map((subcategory) => (\n                                    <p \n                                        key={subcategory.title}\n                                        onClick={() => router.push(subcategory.href)}\n                                        className={cn(\"px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer\", pathname === subcategory.href && \"font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900\")}>\n                                        {subcategory.title}\n                                    </p>\n                                ))}\n                            </div>\n                        </AccordionContent>\n                    </AccordionItem>\n                ))}\n            </Accordion>\n        </aside>\n    );"
    },
    {
        "title": "Static Exports Example 4",
        "date": "23-07-2023",
        "author": "Richard Rivera",
        "category": "Deploying",
        "subcategory": "Static Exports",
        "complexity": "medium",
        "tags": [
            "routes"
        ],
        "summary": "Happen degree summer write.",
        "text": "Cost dream indicate all admit back.",
        "code": "return (\n        <aside className=\"hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto\">\n            <Accordion type=\"multiple\">\n                {categories.map((category) => (\n                    <AccordionItem key={category.title} value={category.title} className=\"border-none\">\n                        <AccordionTrigger className=\"text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary\">\n                            {category.title}\n                        </AccordionTrigger>\n                        <AccordionContent>\n                            <div className=\"flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted\">\n                                {category.items.map((subcategory) => (\n                                    <p \n                                        key={subcategory.title}\n                                        onClick={() => router.push(subcategory.href)}\n                                        className={cn(\"px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer\", pathname === subcategory.href && \"font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900\")}>\n                                        {subcategory.title}\n                                    </p>\n                                ))}\n                            </div>\n                        </AccordionContent>\n                    </AccordionItem>\n                ))}\n            </Accordion>\n        </aside>\n    );"
    },
    {
        "title": "Fonts Example 5",
        "date": "23-07-2023",
        "author": "Shelia Estes",
        "category": "Optimizing",
        "subcategory": "Fonts",
        "complexity": "hard",
        "tags": [
            "controllers"
        ],
        "summary": "Man east last attack our detail whatever.",
        "text": "She recognize style today should education today.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "Sass Example 6",
        "date": "23-07-2023",
        "author": "Daniel Stevenson",
        "category": "Styling",
        "subcategory": "Sass",
        "complexity": "hard",
        "tags": [
            "components"
        ],
        "summary": "Issue near should thought above large.",
        "text": "Until thank run take set news its. Act later assume mouth understand. Treat note imagine plant agree rock bank same.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "Absolute Imports and Module Path Aliases Example 7",
        "date": "23-07-2023",
        "author": "Tracy Hayes",
        "category": "Configuring",
        "subcategory": "Absolute Imports and Module Path Aliases",
        "complexity": "hard",
        "tags": [
            "models"
        ],
        "summary": "Task reduce by over but heavy return.",
        "text": "Feel others price. Question detail million foot.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "Absolute Imports and Module Path Aliases Example 8",
        "date": "23-07-2023",
        "author": "James Lester",
        "category": "Configuring",
        "subcategory": "Absolute Imports and Module Path Aliases",
        "complexity": "easy",
        "tags": [
            "controllers"
        ],
        "summary": "Scientist full force once everybody.",
        "text": "Important area final born dog. View so only discuss their only interview soldier. World right street field event teacher.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "CSS Modules Example 9",
        "date": "23-07-2023",
        "author": "Calvin Zimmerman",
        "category": "Styling",
        "subcategory": "CSS Modules",
        "complexity": "medium",
        "tags": [
            "views"
        ],
        "summary": "Suffer dog maintain property.",
        "text": "Lose field opportunity time its.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "Sass Example 10",
        "date": "23-07-2023",
        "author": "Mark Baker",
        "category": "Styling",
        "subcategory": "Sass",
        "complexity": "easy",
        "tags": [
            "routes"
        ],
        "summary": "Single account door black official go.",
        "text": "Leave include compare friend meet. Few computer start to.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "OpenTelemetry Example 11",
        "date": "23-07-2023",
        "author": "Tracy Hayes",
        "category": "Optimizing",
        "subcategory": "OpenTelemetry",
        "complexity": "medium",
        "tags": [
            "controllers"
        ],
        "summary": "Card accept some list.",
        "text": "Budget recent artist Mrs dream. Ready available meet account simple consider still arrive. Organization issue hotel scientist enjoy.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "Scripts Example 12",
        "date": "23-07-2023",
        "author": "Calvin Zimmerman",
        "category": "Optimizing",
        "subcategory": "Scripts",
        "complexity": "hard",
        "tags": [
            "components"
        ],
        "summary": "Product say foreign air.",
        "text": "Around ago next argue agency leg. Front hand right other tonight decade left reason. Artist decide money office teach sell.",
        "code": "return (\n        <aside className=\"hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto\">\n            <Accordion type=\"multiple\">\n                {categories.map((category) => (\n                    <AccordionItem key={category.title} value={category.title} className=\"border-none\">\n                        <AccordionTrigger className=\"text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary\">\n                            {category.title}\n                        </AccordionTrigger>\n                        <AccordionContent>\n                            <div className=\"flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted\">\n                                {category.items.map((subcategory) => (\n                                    <p \n                                        key={subcategory.title}\n                                        onClick={() => router.push(subcategory.href)}\n                                        className={cn(\"px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer\", pathname === subcategory.href && \"font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900\")}>\n                                        {subcategory.title}\n                                    </p>\n                                ))}\n                            </div>\n                        </AccordionContent>\n                    </AccordionItem>\n                ))}\n            </Accordion>\n        </aside>\n    );"
    },
    {
        "title": "Edge and Node.js Runtimes Example 13",
        "date": "23-07-2023",
        "author": "Calvin Zimmerman",
        "category": "Rendering",
        "subcategory": "Edge and Node.js Runtimes",
        "complexity": "easy",
        "tags": [
            "controllers"
        ],
        "summary": "Before join part peace give president.",
        "text": "Investment laugh strategy image. West minute knowledge early office cup.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "Scripts Example 14",
        "date": "23-07-2023",
        "author": "Tracy Hayes",
        "category": "Optimizing",
        "subcategory": "Scripts",
        "complexity": "medium",
        "tags": [
            "routes"
        ],
        "summary": "Before deal television try.",
        "text": "Because job floor design thousand short. Practice right buy pull cultural.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "Functions Example 15",
        "date": "23-07-2023",
        "author": "James Lester",
        "category": "API Reference",
        "subcategory": "Functions",
        "complexity": "easy",
        "tags": [
            "controllers"
        ],
        "summary": "Impact local natural edge.",
        "text": "Daughter or concern audience show above true. Provide wife account student. Paper upon just our writer. Fish money heart information learn.",
        "code": "return (\n        <aside className=\"hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto\">\n            <Accordion type=\"multiple\">\n                {categories.map((category) => (\n                    <AccordionItem key={category.title} value={category.title} className=\"border-none\">\n                        <AccordionTrigger className=\"text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary\">\n                            {category.title}\n                        </AccordionTrigger>\n                        <AccordionContent>\n                            <div className=\"flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted\">\n                                {category.items.map((subcategory) => (\n                                    <p \n                                        key={subcategory.title}\n                                        onClick={() => router.push(subcategory.href)}\n                                        className={cn(\"px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer\", pathname === subcategory.href && \"font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900\")}>\n                                        {subcategory.title}\n                                    </p>\n                                ))}\n                            </div>\n                        </AccordionContent>\n                    </AccordionItem>\n                ))}\n            </Accordion>\n        </aside>\n    );"
    },
    {
        "title": "Codemods Example 16",
        "date": "23-07-2023",
        "author": "Michael Miller",
        "category": "Upgrading",
        "subcategory": "Codemods",
        "complexity": "medium",
        "tags": [
            "components"
        ],
        "summary": "Pressure can north everybody.",
        "text": "End very where beyond democratic decade. Pm single start age need catch. Realize answer movie five.",
        "code": "return (\n        <aside className=\"hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto\">\n            <Accordion type=\"multiple\">\n                {categories.map((category) => (\n                    <AccordionItem key={category.title} value={category.title} className=\"border-none\">\n                        <AccordionTrigger className=\"text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary\">\n                            {category.title}\n                        </AccordionTrigger>\n                        <AccordionContent>\n                            <div className=\"flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted\">\n                                {category.items.map((subcategory) => (\n                                    <p \n                                        key={subcategory.title}\n                                        onClick={() => router.push(subcategory.href)}\n                                        className={cn(\"px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer\", pathname === subcategory.href && \"font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900\")}>\n                                        {subcategory.title}\n                                    </p>\n                                ))}\n                            </div>\n                        </AccordionContent>\n                    </AccordionItem>\n                ))}\n            </Accordion>\n        </aside>\n    );"
    },
    {
        "title": "Parallel Routes Example 17",
        "date": "23-07-2023",
        "author": "Michael Miller",
        "category": "Routing",
        "subcategory": "Parallel Routes",
        "complexity": "medium",
        "tags": [
            "views"
        ],
        "summary": "Cultural space record smile low strategy night hot.",
        "text": "Anything stay religious against. A score including look spring.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "App Router Migration Example 18",
        "date": "23-07-2023",
        "author": "Mark Baker",
        "category": "Upgrading",
        "subcategory": "App Router Migration",
        "complexity": "hard",
        "tags": [
            "views"
        ],
        "summary": "Work itself tough science.",
        "text": "Write be now listen pull show smile. Character trade during. Lay second final deep air president form stand.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "Revalidating Example 19",
        "date": "23-07-2023",
        "author": "Shelia Estes",
        "category": "Data Fetching",
        "subcategory": "Revalidating",
        "complexity": "medium",
        "tags": [
            "models"
        ],
        "summary": "Technology recent somebody movie attorney.",
        "text": "Away military star degree dog describe. Book drug maintain American.",
        "code": "return (\n        <aside className=\"hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto\">\n            <Accordion type=\"multiple\">\n                {categories.map((category) => (\n                    <AccordionItem key={category.title} value={category.title} className=\"border-none\">\n                        <AccordionTrigger className=\"text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary\">\n                            {category.title}\n                        </AccordionTrigger>\n                        <AccordionContent>\n                            <div className=\"flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted\">\n                                {category.items.map((subcategory) => (\n                                    <p \n                                        key={subcategory.title}\n                                        onClick={() => router.push(subcategory.href)}\n                                        className={cn(\"px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer\", pathname === subcategory.href && \"font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900\")}>\n                                        {subcategory.title}\n                                    </p>\n                                ))}\n                            </div>\n                        </AccordionContent>\n                    </AccordionItem>\n                ))}\n            </Accordion>\n        </aside>\n    );"
    },
    {
        "title": "App Router Migration Example 20",
        "date": "23-07-2023",
        "author": "Shelia Estes",
        "category": "Upgrading",
        "subcategory": "App Router Migration",
        "complexity": "medium",
        "tags": [
            "models"
        ],
        "summary": "Worry government risk.",
        "text": "Point hair say local skill baby. We toward adult run for watch draw.",
        "code": "return (\n        <aside className=\"hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto\">\n            <Accordion type=\"multiple\">\n                {categories.map((category) => (\n                    <AccordionItem key={category.title} value={category.title} className=\"border-none\">\n                        <AccordionTrigger className=\"text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary\">\n                            {category.title}\n                        </AccordionTrigger>\n                        <AccordionContent>\n                            <div className=\"flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted\">\n                                {category.items.map((subcategory) => (\n                                    <p \n                                        key={subcategory.title}\n                                        onClick={() => router.push(subcategory.href)}\n                                        className={cn(\"px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer\", pathname === subcategory.href && \"font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900\")}>\n                                        {subcategory.title}\n                                    </p>\n                                ))}\n                            </div>\n                        </AccordionContent>\n                    </AccordionItem>\n                ))}\n            </Accordion>\n        </aside>\n    );"
    },
    {
        "title": "ESLint Example 21",
        "date": "23-07-2023",
        "author": "Calvin Zimmerman",
        "category": "Configuring",
        "subcategory": "ESLint",
        "complexity": "easy",
        "tags": [
            "routes"
        ],
        "summary": "Ball sit imagine since finish building after.",
        "text": "Movie probably line tell focus toward language expert. Hair person professor interest parent. Eight financial little none.",
        "code": "return (\n        <aside className=\"hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto\">\n            <Accordion type=\"multiple\">\n                {categories.map((category) => (\n                    <AccordionItem key={category.title} value={category.title} className=\"border-none\">\n                        <AccordionTrigger className=\"text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary\">\n                            {category.title}\n                        </AccordionTrigger>\n                        <AccordionContent>\n                            <div className=\"flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted\">\n                                {category.items.map((subcategory) => (\n                                    <p \n                                        key={subcategory.title}\n                                        onClick={() => router.push(subcategory.href)}\n                                        className={cn(\"px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer\", pathname === subcategory.href && \"font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900\")}>\n                                        {subcategory.title}\n                                    </p>\n                                ))}\n                            </div>\n                        </AccordionContent>\n                    </AccordionItem>\n                ))}\n            </Accordion>\n        </aside>\n    );"
    },
    {
        "title": "Linking and Navigating Example 22",
        "date": "23-07-2023",
        "author": "Calvin Zimmerman",
        "category": "Routing",
        "subcategory": "Linking and Navigating",
        "complexity": "medium",
        "tags": [
            "controllers"
        ],
        "summary": "Consumer others where past degree hospital network least.",
        "text": "Computer market employee top base population. Vote arrive vote imagine. Sort word never.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "Edge and Node.js Runtimes Example 23",
        "date": "23-07-2023",
        "author": "Marc Jackson",
        "category": "Rendering",
        "subcategory": "Edge and Node.js Runtimes",
        "complexity": "easy",
        "tags": [
            "components"
        ],
        "summary": "Last newspaper sense woman small certainly figure.",
        "text": "Ready eye begin sea rise per. So class later fire. Back voice around daughter act yes team. Member nor policy send gas.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "Parallel Routes Example 24",
        "date": "23-07-2023",
        "author": "Mark Baker",
        "category": "Routing",
        "subcategory": "Parallel Routes",
        "complexity": "medium",
        "tags": [
            "components"
        ],
        "summary": "Notice every action visit write turn business.",
        "text": "Travel she film. Drug style grow tough reach store. Visit development movie statement save consumer popular.",
        "code": "return (\n        <aside className=\"hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto\">\n            <Accordion type=\"multiple\">\n                {categories.map((category) => (\n                    <AccordionItem key={category.title} value={category.title} className=\"border-none\">\n                        <AccordionTrigger className=\"text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary\">\n                            {category.title}\n                        </AccordionTrigger>\n                        <AccordionContent>\n                            <div className=\"flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted\">\n                                {category.items.map((subcategory) => (\n                                    <p \n                                        key={subcategory.title}\n                                        onClick={() => router.push(subcategory.href)}\n                                        className={cn(\"px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer\", pathname === subcategory.href && \"font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900\")}>\n                                        {subcategory.title}\n                                    </p>\n                                ))}\n                            </div>\n                        </AccordionContent>\n                    </AccordionItem>\n                ))}\n            </Accordion>\n        </aside>\n    );"
    },
    {
        "title": "Static Exports Example 25",
        "date": "23-07-2023",
        "author": "Sara Campbell",
        "category": "Deploying",
        "subcategory": "Static Exports",
        "complexity": "hard",
        "tags": [
            "views"
        ],
        "summary": "Close art same program.",
        "text": "Beat fight area tax two themselves. Pattern bed almost role court after office.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "CSS-in-JS Example 26",
        "date": "23-07-2023",
        "author": "James Lester",
        "category": "Styling",
        "subcategory": "CSS-in-JS",
        "complexity": "medium",
        "tags": [
            "components"
        ],
        "summary": "Strategy major these across yourself center.",
        "text": "Pick daughter standard collection drop structure often. Exactly several born still computer since carry. Specific key change institution as wife break.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "Static Exports Example 27",
        "date": "23-07-2023",
        "author": "James Lester",
        "category": "Deploying",
        "subcategory": "Static Exports",
        "complexity": "easy",
        "tags": [
            "views"
        ],
        "summary": "Everything the run computer article.",
        "text": "Put notice understand quality force gas. Feeling far economy nature TV.",
        "code": "return (\n        <aside className=\"hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto\">\n            <Accordion type=\"multiple\">\n                {categories.map((category) => (\n                    <AccordionItem key={category.title} value={category.title} className=\"border-none\">\n                        <AccordionTrigger className=\"text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary\">\n                            {category.title}\n                        </AccordionTrigger>\n                        <AccordionContent>\n                            <div className=\"flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted\">\n                                {category.items.map((subcategory) => (\n                                    <p \n                                        key={subcategory.title}\n                                        onClick={() => router.push(subcategory.href)}\n                                        className={cn(\"px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer\", pathname === subcategory.href && \"font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900\")}>\n                                        {subcategory.title}\n                                    </p>\n                                ))}\n                            </div>\n                        </AccordionContent>\n                    </AccordionItem>\n                ))}\n            </Accordion>\n        </aside>\n    );"
    },
    {
        "title": "Server Actions Example 28",
        "date": "23-07-2023",
        "author": "Sara Campbell",
        "category": "Data Fetching",
        "subcategory": "Server Actions",
        "complexity": "easy",
        "tags": [
            "views"
        ],
        "summary": "Third laugh final often again.",
        "text": "Data remain general beat. Off attention able. Development player first none. Deep though quite receive also speech job.",
        "code": "return (\n        <aside className=\"hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto\">\n            <Accordion type=\"multiple\">\n                {categories.map((category) => (\n                    <AccordionItem key={category.title} value={category.title} className=\"border-none\">\n                        <AccordionTrigger className=\"text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary\">\n                            {category.title}\n                        </AccordionTrigger>\n                        <AccordionContent>\n                            <div className=\"flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted\">\n                                {category.items.map((subcategory) => (\n                                    <p \n                                        key={subcategory.title}\n                                        onClick={() => router.push(subcategory.href)}\n                                        className={cn(\"px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer\", pathname === subcategory.href && \"font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900\")}>\n                                        {subcategory.title}\n                                    </p>\n                                ))}\n                            </div>\n                        </AccordionContent>\n                    </AccordionItem>\n                ))}\n            </Accordion>\n        </aside>\n    );"
    },
    {
        "title": "Draft Mode Example 29",
        "date": "23-07-2023",
        "author": "Mark Baker",
        "category": "Configuring",
        "subcategory": "Draft Mode",
        "complexity": "easy",
        "tags": [
            "components"
        ],
        "summary": "Decade heart food as break whom east suffer.",
        "text": "Until situation my situation. Catch growth American Democrat us watch we talk.",
        "code": "return (\n        <aside className=\"hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto\">\n            <Accordion type=\"multiple\">\n                {categories.map((category) => (\n                    <AccordionItem key={category.title} value={category.title} className=\"border-none\">\n                        <AccordionTrigger className=\"text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary\">\n                            {category.title}\n                        </AccordionTrigger>\n                        <AccordionContent>\n                            <div className=\"flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted\">\n                                {category.items.map((subcategory) => (\n                                    <p \n                                        key={subcategory.title}\n                                        onClick={() => router.push(subcategory.href)}\n                                        className={cn(\"px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer\", pathname === subcategory.href && \"font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900\")}>\n                                        {subcategory.title}\n                                    </p>\n                                ))}\n                            </div>\n                        </AccordionContent>\n                    </AccordionItem>\n                ))}\n            </Accordion>\n        </aside>\n    );"
    },
    {
        "title": "CSS Modules Example 30",
        "date": "23-07-2023",
        "author": "Marc Jackson",
        "category": "Styling",
        "subcategory": "CSS Modules",
        "complexity": "medium",
        "tags": [
            "routes"
        ],
        "summary": "Talk any middle.",
        "text": "Consumer cold late force increase miss indicate. Fish write center care six general.",
        "code": "return (\n        <aside className=\"hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto\">\n            <Accordion type=\"multiple\">\n                {categories.map((category) => (\n                    <AccordionItem key={category.title} value={category.title} className=\"border-none\">\n                        <AccordionTrigger className=\"text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary\">\n                            {category.title}\n                        </AccordionTrigger>\n                        <AccordionContent>\n                            <div className=\"flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted\">\n                                {category.items.map((subcategory) => (\n                                    <p \n                                        key={subcategory.title}\n                                        onClick={() => router.push(subcategory.href)}\n                                        className={cn(\"px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer\", pathname === subcategory.href && \"font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900\")}>\n                                        {subcategory.title}\n                                    </p>\n                                ))}\n                            </div>\n                        </AccordionContent>\n                    </AccordionItem>\n                ))}\n            </Accordion>\n        </aside>\n    );"
    },
    {
        "title": "Sass Example 31",
        "date": "23-07-2023",
        "author": "Calvin Zimmerman",
        "category": "Styling",
        "subcategory": "Sass",
        "complexity": "medium",
        "tags": [
            "routes"
        ],
        "summary": "Argue water magazine money move direction.",
        "text": "Sure style system one though. Expert yes say under because card. We always work billion rule reason. Data through wide manage this door.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "Server Actions Example 32",
        "date": "23-07-2023",
        "author": "Mark Baker",
        "category": "Data Fetching",
        "subcategory": "Server Actions",
        "complexity": "medium",
        "tags": [
            "views"
        ],
        "summary": "After if look admit forget significant listen.",
        "text": "Sing necessary field actually fear art personal. Position live need its use.",
        "code": "return (\n        <aside className=\"hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto\">\n            <Accordion type=\"multiple\">\n                {categories.map((category) => (\n                    <AccordionItem key={category.title} value={category.title} className=\"border-none\">\n                        <AccordionTrigger className=\"text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary\">\n                            {category.title}\n                        </AccordionTrigger>\n                        <AccordionContent>\n                            <div className=\"flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted\">\n                                {category.items.map((subcategory) => (\n                                    <p \n                                        key={subcategory.title}\n                                        onClick={() => router.push(subcategory.href)}\n                                        className={cn(\"px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer\", pathname === subcategory.href && \"font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900\")}>\n                                        {subcategory.title}\n                                    </p>\n                                ))}\n                            </div>\n                        </AccordionContent>\n                    </AccordionItem>\n                ))}\n            </Accordion>\n        </aside>\n    );"
    },
    {
        "title": "Static and Dynamic Example 33",
        "date": "23-07-2023",
        "author": "Daniel Stevenson",
        "category": "Rendering",
        "subcategory": "Static and Dynamic",
        "complexity": "medium",
        "tags": [
            "controllers"
        ],
        "summary": "Front operation continue whatever garden name.",
        "text": "Strong control these. Control scene Mrs music garden military usually. Along bring same condition great middle.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "Functions Example 34",
        "date": "23-07-2023",
        "author": "James Lester",
        "category": "API Reference",
        "subcategory": "Functions",
        "complexity": "medium",
        "tags": [
            "views"
        ],
        "summary": "Down surface someone mission mind.",
        "text": "Letter measure not assume activity once. History mean compare.",
        "code": "return (\n        <aside className=\"hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto\">\n            <Accordion type=\"multiple\">\n                {categories.map((category) => (\n                    <AccordionItem key={category.title} value={category.title} className=\"border-none\">\n                        <AccordionTrigger className=\"text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary\">\n                            {category.title}\n                        </AccordionTrigger>\n                        <AccordionContent>\n                            <div className=\"flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted\">\n                                {category.items.map((subcategory) => (\n                                    <p \n                                        key={subcategory.title}\n                                        onClick={() => router.push(subcategory.href)}\n                                        className={cn(\"px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer\", pathname === subcategory.href && \"font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900\")}>\n                                        {subcategory.title}\n                                    </p>\n                                ))}\n                            </div>\n                        </AccordionContent>\n                    </AccordionItem>\n                ))}\n            </Accordion>\n        </aside>\n    );"
    },
    {
        "title": "Absolute Imports and Module Path Aliases Example 35",
        "date": "23-07-2023",
        "author": "Shelia Estes",
        "category": "Configuring",
        "subcategory": "Absolute Imports and Module Path Aliases",
        "complexity": "hard",
        "tags": [
            "models"
        ],
        "summary": "Analysis all adult something audience history professor store.",
        "text": "Support us research receive tonight. Election a official stuff stock. Site discussion water environment along movie.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "Static Exports Example 36",
        "date": "23-07-2023",
        "author": "Daniel Stevenson",
        "category": "Deploying",
        "subcategory": "Static Exports",
        "complexity": "hard",
        "tags": [
            "routes"
        ],
        "summary": "College direction clearly vote see.",
        "text": "Collection hope what describe to prevent your mention. Very space girl head manager. Republican manage commercial let type guess traditional. Inside drive eat avoid put.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "Components Example 37",
        "date": "23-07-2023",
        "author": "Michael Miller",
        "category": "API Reference",
        "subcategory": "Components",
        "complexity": "medium",
        "tags": [
            "views"
        ],
        "summary": "Management model result in decide her sound.",
        "text": "Second guess staff detail. Picture network necessary of ten.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "App Router Migration Example 38",
        "date": "23-07-2023",
        "author": "Mark Baker",
        "category": "Upgrading",
        "subcategory": "App Router Migration",
        "complexity": "medium",
        "tags": [
            "models"
        ],
        "summary": "Scientist social when another.",
        "text": "Training less degree indeed value. Entire campaign a anyone data.",
        "code": "return (\n        <aside className=\"hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto\">\n            <Accordion type=\"multiple\">\n                {categories.map((category) => (\n                    <AccordionItem key={category.title} value={category.title} className=\"border-none\">\n                        <AccordionTrigger className=\"text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary\">\n                            {category.title}\n                        </AccordionTrigger>\n                        <AccordionContent>\n                            <div className=\"flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted\">\n                                {category.items.map((subcategory) => (\n                                    <p \n                                        key={subcategory.title}\n                                        onClick={() => router.push(subcategory.href)}\n                                        className={cn(\"px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer\", pathname === subcategory.href && \"font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900\")}>\n                                        {subcategory.title}\n                                    </p>\n                                ))}\n                            </div>\n                        </AccordionContent>\n                    </AccordionItem>\n                ))}\n            </Accordion>\n        </aside>\n    );"
    },
    {
        "title": "Fonts Example 39",
        "date": "23-07-2023",
        "author": "Marc Jackson",
        "category": "Optimizing",
        "subcategory": "Fonts",
        "complexity": "easy",
        "tags": [
            "controllers"
        ],
        "summary": "Notice edge piece director plan check.",
        "text": "Cause current economy region message main. Someone prove question man stay through.",
        "code": "return (\n        <aside className=\"hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto\">\n            <Accordion type=\"multiple\">\n                {categories.map((category) => (\n                    <AccordionItem key={category.title} value={category.title} className=\"border-none\">\n                        <AccordionTrigger className=\"text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary\">\n                            {category.title}\n                        </AccordionTrigger>\n                        <AccordionContent>\n                            <div className=\"flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted\">\n                                {category.items.map((subcategory) => (\n                                    <p \n                                        key={subcategory.title}\n                                        onClick={() => router.push(subcategory.href)}\n                                        className={cn(\"px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer\", pathname === subcategory.href && \"font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900\")}>\n                                        {subcategory.title}\n                                    </p>\n                                ))}\n                            </div>\n                        </AccordionContent>\n                    </AccordionItem>\n                ))}\n            </Accordion>\n        </aside>\n    );"
    },
    {
        "title": "Route Groups Example 40",
        "date": "23-07-2023",
        "author": "Calvin Zimmerman",
        "category": "Routing",
        "subcategory": "Route Groups",
        "complexity": "hard",
        "tags": [
            "views"
        ],
        "summary": "Turn maintain partner hundred.",
        "text": "Before make like result. Pass six rule range. Enjoy spring prove conference.",
        "code": "return (\n        <aside className=\"hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto\">\n            <Accordion type=\"multiple\">\n                {categories.map((category) => (\n                    <AccordionItem key={category.title} value={category.title} className=\"border-none\">\n                        <AccordionTrigger className=\"text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary\">\n                            {category.title}\n                        </AccordionTrigger>\n                        <AccordionContent>\n                            <div className=\"flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted\">\n                                {category.items.map((subcategory) => (\n                                    <p \n                                        key={subcategory.title}\n                                        onClick={() => router.push(subcategory.href)}\n                                        className={cn(\"px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer\", pathname === subcategory.href && \"font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900\")}>\n                                        {subcategory.title}\n                                    </p>\n                                ))}\n                            </div>\n                        </AccordionContent>\n                    </AccordionItem>\n                ))}\n            </Accordion>\n        </aside>\n    );"
    },
    {
        "title": "Tailwind CSS Example 41",
        "date": "23-07-2023",
        "author": "Daniel Stevenson",
        "category": "Styling",
        "subcategory": "Tailwind CSS",
        "complexity": "medium",
        "tags": [
            "views"
        ],
        "summary": "Husband less offer chair often draw north.",
        "text": "Without determine money listen those.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "Images Example 42",
        "date": "23-07-2023",
        "author": "Mark Baker",
        "category": "Optimizing",
        "subcategory": "Images",
        "complexity": "easy",
        "tags": [
            "models"
        ],
        "summary": "Piece economic red skin decide catch.",
        "text": "Eat major majority teacher method. Boy top north particular.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "MDX Example 43",
        "date": "23-07-2023",
        "author": "Calvin Zimmerman",
        "category": "Configuring",
        "subcategory": "MDX",
        "complexity": "hard",
        "tags": [
            "controllers"
        ],
        "summary": "Market magazine industry.",
        "text": "Away catch conference speak song start similar. Spend attack natural author.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "App Router Migration Example 44",
        "date": "23-07-2023",
        "author": "Michael Miller",
        "category": "Upgrading",
        "subcategory": "App Router Migration",
        "complexity": "hard",
        "tags": [
            "components"
        ],
        "summary": "Bit require common public experience.",
        "text": "Up section a seven which. Poor run teach network.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "CSS Modules Example 45",
        "date": "23-07-2023",
        "author": "Daniel Stevenson",
        "category": "Styling",
        "subcategory": "CSS Modules",
        "complexity": "easy",
        "tags": [
            "components"
        ],
        "summary": "Television meeting somebody condition pick recent capital.",
        "text": "Economic hot through majority they dinner science hold. Pull teacher entire. Authority kitchen might value help decision alone.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "Caching Example 46",
        "date": "23-07-2023",
        "author": "Richard Rivera",
        "category": "Data Fetching",
        "subcategory": "Caching",
        "complexity": "medium",
        "tags": [
            "models"
        ],
        "summary": "Few agency realize seek pattern.",
        "text": "Leave term prove myself her will cell. Animal term writer send.",
        "code": "return (\n        <aside className=\"hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto\">\n            <Accordion type=\"multiple\">\n                {categories.map((category) => (\n                    <AccordionItem key={category.title} value={category.title} className=\"border-none\">\n                        <AccordionTrigger className=\"text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary\">\n                            {category.title}\n                        </AccordionTrigger>\n                        <AccordionContent>\n                            <div className=\"flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted\">\n                                {category.items.map((subcategory) => (\n                                    <p \n                                        key={subcategory.title}\n                                        onClick={() => router.push(subcategory.href)}\n                                        className={cn(\"px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer\", pathname === subcategory.href && \"font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900\")}>\n                                        {subcategory.title}\n                                    </p>\n                                ))}\n                            </div>\n                        </AccordionContent>\n                    </AccordionItem>\n                ))}\n            </Accordion>\n        </aside>\n    );"
    },
    {
        "title": "Intercepting Routes Example 47",
        "date": "23-07-2023",
        "author": "Michael Miller",
        "category": "Routing",
        "subcategory": "Intercepting Routes",
        "complexity": "medium",
        "tags": [
            "models"
        ],
        "summary": "Sport perform fine industry daughter already.",
        "text": "Each chair art around parent today. Life production system wear history number positive. Evidence right effect key state.",
        "code": "return (\n        <aside className=\"hidden md:flex flex-col w-[30%] p-12 space-y-4 h-full overflow-y-auto\">\n            <Accordion type=\"multiple\">\n                {categories.map((category) => (\n                    <AccordionItem key={category.title} value={category.title} className=\"border-none\">\n                        <AccordionTrigger className=\"text-lg font-sans text-muted-foreground px-2 py-1.5 mb-2 rounded-md transition duration-200 hover:text-primary hover:bg-muted [&[data-state=open]]:text-primary\">\n                            {category.title}\n                        </AccordionTrigger>\n                        <AccordionContent>\n                            <div className=\"flex flex-col space-y-1 text-base font-sans text-muted-foreground ml-2 pl-4 border-l-2 border-muted\">\n                                {category.items.map((subcategory) => (\n                                    <p \n                                        key={subcategory.title}\n                                        onClick={() => router.push(subcategory.href)}\n                                        className={cn(\"px-2 py-1.5 rounded-md transition duration-200 hover:text-primary hover:bg-muted cursor-pointer\", pathname === subcategory.href && \"font-semibold text-blue-500 bg-slate-200 dark:bg-slate-900 hover:text-blue-500 hover:bg-slate-200 dark:hover:bg-slate-900\")}>\n                                        {subcategory.title}\n                                    </p>\n                                ))}\n                            </div>\n                        </AccordionContent>\n                    </AccordionItem>\n                ))}\n            </Accordion>\n        </aside>\n    );"
    },
    {
        "title": "Route Groups Example 48",
        "date": "23-07-2023",
        "author": "Mark Baker",
        "category": "Routing",
        "subcategory": "Route Groups",
        "complexity": "easy",
        "tags": [
            "controllers"
        ],
        "summary": "Floor discussion PM sometimes.",
        "text": "Strategy stop serious difference nothing character less use.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    },
    {
        "title": "create-next-app Example 49",
        "date": "23-07-2023",
        "author": "Calvin Zimmerman",
        "category": "API Reference",
        "subcategory": "create-next-app",
        "complexity": "hard",
        "tags": [
            "models"
        ],
        "summary": "Yet senior power like ago.",
        "text": "Kid half condition figure business their.",
        "code": "if (searchQuery) {\n        const inCode = searchParams.get(\"inCode\") === \"1\";\n        const matchCase = searchParams.get(\"matchCase\") === \"1\";\n        const inText = searchParams.get(\"inText\") === \"1\";\n\n        const searchFunc = (text: string) => {\n            if (matchCase) {\n                return text.includes(searchQuery);\n            } else {\n                return text.toLowerCase().includes(searchQuery.toLowerCase());\n            }\n        };\n\n        examples = examples.filter((example) => {\n            const searchInCode = inCode && searchFunc(example.code);\n            const searchInText = inText && searchFunc(example.text);\n            const searchEverywhere = !inCode && !inText &&  (\n                searchFunc(example.title) || searchFunc(example.summary) ||\n                searchFunc(example.text) || searchFunc(example.code)\n            );\n\n            return searchInCode || searchInText || searchEverywhere;\n        });\n    } \n\n    return (\n        <div className=\"p-4\">\n            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">\n                {examples.map(example => (\n                    <ExampleCard key={example.title} example={example} />\n                ))}\n            </div>\n        </div>\n    );"
    }
];