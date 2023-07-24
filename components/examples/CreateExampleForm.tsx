"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { config } from "@/config/site";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { tagList } from "@/constants";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
    title: z.string().min(3).max(255),
    date: z.date(),
    author: z.string().min(3).max(255),
    category: z.string().min(2),
    subcategory: z.string().min(2),
    complexity: z.string(),
    tags: z.array(z.string()),
    summary: z.string().min(10, { message: "Summary must be at least 10 characters long." }),
    text: z.string().min(10, { message: "Text must be at least 10 characters long." }),
    code: z.string().min(30, { message: "Code must be at least 30 characters long." }),
})

const CreateExampleForm = () => {
    const categories = config.sidebarNav;
    const tags = tagList;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            date: new Date(),
            author: "",
            category: "",
            subcategory: "",
            complexity: "easy",
            tags: [],
            summary: "",
            text: "",
            code: "",
        },
    })

    const selectedCategory = form.watch("category");
    const selectedComplexity = form.watch("complexity");

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(JSON.stringify(values, null, 2));

        // TODO: Submit to API
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid space-y-6 md:space-y-0 md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:gap-y-8 ">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Title
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="Title" {...field} />
                            </FormControl>
                            <FormDescription>
                                Give your example a descriptive title.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="author"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Author
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="Author" {...field} />
                            </FormControl>
                            <FormDescription>
                                Who wrote this example?
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Category
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {categories.map((category) => (
                                        <SelectItem key={category.title} value={category.title}>
                                            {category.title}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subcategory"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Subcategory
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a subcategory" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {selectedCategory && categories.find((category) => category.title === selectedCategory)?.items.map((subcategory) => (
                                        <SelectItem key={subcategory.title} value={subcategory.title}>
                                            {subcategory.title}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="complexity"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Complexity
                            </FormLabel>
                            <FormControl>
                                <RadioGroup className="flex" onValueChange={field.onChange} defaultValue={field.value}>
                                    <Label htmlFor="easy" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 cursor-pointer hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-green-500">
                                        <RadioGroupItem value="easy" id="easy" className="sr-only" checked={selectedComplexity === "easy"} />
                                        <span>Beginner</span>
                                    </Label>
                                    <Label htmlFor="medium" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 cursor-pointer hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-yellow-500">
                                        <RadioGroupItem value="medium" id="medium" className="sr-only" checked={selectedComplexity === "medium"} />
                                        <span>Intermediate</span>
                                    </Label>
                                    <Label htmlFor="hard" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 cursor-pointer hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-red-500">
                                        <RadioGroupItem value="hard" id="hard" className="sr-only" checked={selectedComplexity === "hard"} />
                                        <span>Advanced</span>
                                    </Label>
                                </RadioGroup>
                            </FormControl>
                            <FormDescription>
                                What level of experience is required to understand this example?
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="tags"
                    render={() => (
                        <FormItem>
                            <div>
                                <FormLabel>
                                    Tags
                                </FormLabel>
                                <FormDescription>
                                    What tags apply to this example?
                                </FormDescription>
                            </div>
                            {tags.map((tag) => (
                                <FormField key={tag.label} control={form.control} name="tags" render={({ field }) => {
                                    return (
                                        <FormItem key={tag.label} className="flex items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox checked={field.value?.includes(tag.label)} onCheckedChange={(checked) => {
                                                    return checked
                                                        ? field.onChange([...field.value, tag.label])
                                                        : field.onChange(
                                                            field.value?.filter((value) => value !== tag.label)
                                                        )
                                                }} />
                                            </FormControl>
                                            <FormLabel>
                                                {tag.label}
                                            </FormLabel>
                                        </FormItem>
                                    )
                                }} />
                            ))}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="summary"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Summary
                            </FormLabel>
                            <FormControl>
                                <Textarea placeholder="Summary" className="resize-none" {...field} />
                            </FormControl>
                            <FormDescription>
                                Give a brief summary of your example.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Text
                            </FormLabel>
                            <FormControl>
                                <Textarea placeholder="Text" className="resize-none" {...field} />
                            </FormControl>
                            <FormDescription>
                                Give a detailed explanation of your example.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Code
                            </FormLabel>
                            <FormControl>
                                <Textarea placeholder="Code" className="resize-none" {...field} />
                            </FormControl>
                            <FormDescription>
                                Provide the code for your example.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="md:col-span-2 lg:col-span-3">
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default CreateExampleForm;