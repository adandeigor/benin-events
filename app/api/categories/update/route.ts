import { prisma } from "@/lib/prisma-client";

export async function PUT(request: Request) {
    try {
        const { category_name, category_description, category_id } = await request.json();
    
        if (!category_name || !category_description || !category_id) {
          return new Response(JSON.stringify({ error: "category_name, category_description et l'id de la catégorie sont requis" }), { status: 400 });
        }
    
        const updatedCategory = await prisma.categories.update({ 
          where: { category_id: Number(category_id) },
          data: {
            category_name: category_name,
            category_description: category_description,
          },
        });
    
        return new Response(JSON.stringify(updatedCategory), { status: 200 });
      } catch (error) {
        console.error("Error updating category:", error);
        return new Response(JSON.stringify({ error: "Erreur lors de la mise à jour de la catégorie" }), { status: 500 });
      }
}