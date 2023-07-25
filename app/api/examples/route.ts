import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function POST (req: NextRequest) {
    try {
        const body = await req.json();

        const { title, author, category, subcategory, complexity, tags, summary, text, code } = body;

        // if any of the required fields are missing, return an error
        if (!title || !author || !category || !subcategory || !complexity || !tags || !summary || !text || !code) {
            return new NextResponse("Missing required fields", { status: 400 });
        }

        const tagsString = tags.join(",");

        const example = await prisma.example.create({
            data: {
                title,
                author,
                category,
                subcategory,
                complexity,
                tags: tagsString,
                summary,
                text,
                code
            },
        });

        return NextResponse.json(example, { status: 201 })
    } catch (error) {
        return new NextResponse("Internal server error", { status: 500 });
    }
}