import prisma from "@/lib/prisma";

const getExamples = async () => {
    const examples = await prisma.example.findMany();

    return examples;
}

export default getExamples;