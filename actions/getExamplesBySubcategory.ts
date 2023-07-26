import prisma from "@/lib/prisma";

const getExamplesBySubcategory = async (subcategory: string) => {
    const examples = await prisma.example.findMany({
        where: {
            subcategory: subcategory
        },
    });

    return examples;
}

export default getExamplesBySubcategory;