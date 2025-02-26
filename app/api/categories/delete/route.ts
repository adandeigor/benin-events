import { prisma } from "@/lib/prisma-client";

export async function DELETE(request: Request) {
    try {
        const { category_id } = await request.json();
        const deletedCategory = await prisma.categories.delete({
            where: { category_id: Number(category_id) },
        });
        return new Response(JSON.stringify(deletedCategory), { status: 200 });
    } catch (error) {
        console.error("Error deleting category:", error);
        return new Response(JSON.stringify({ error: "Error deleting category" }), { status: 500 });
    }
}