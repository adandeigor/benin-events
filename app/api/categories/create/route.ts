import { prisma } from "@/lib/prisma-client";

export async function POST(request: Request) {
  try {
    const { category_name, category_description } = await request.json();

    if (!category_name || !category_description) {
      return new Response(JSON.stringify({ error: "category_name et category_description sont requis" }), { status: 400 });
    }

    const newCategory = await prisma.categories.create({
      data: {
        category_name: category_name,
        category_description: category_description,
      },
    });

    return new Response(JSON.stringify(newCategory), { status: 201 });
  } catch (error) {
    console.error("Error creating category:", error);
    return new Response(JSON.stringify({ error: "Erreur lors de la création de la catégorie" }), { status: 500 });
  }
}