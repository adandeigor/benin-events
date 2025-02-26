import {prisma} from "@/lib/prisma-client";

export async function PATCH(request: Request, id: {id: string}) {
    try {
        const { rule_name, rule_description } = await request.json();

        const updatedRule = await prisma.rule.update({
            where: { rule_id: Number(id) },
            data: {
                rule_name,
                rule_description,
            },
        });

        return new Response(JSON.stringify(updatedRule), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Erreur lors de la mise à jour de la règle :", error);
        return new Response(
            JSON.stringify({ error: "Erreur interne du serveur" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

export async function DELETE(request: Request, id: {id: string}) {
    try {
        const deletedRule = await prisma.rule.delete({
            where: { rule_id: Number(id) },
        });

        return new Response(JSON.stringify(deletedRule), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Erreur lors de la suppression de la règle :", error);
        return new Response(
            JSON.stringify({ error: "Erreur interne du serveur" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}