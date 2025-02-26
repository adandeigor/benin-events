import {prisma} from "@/lib/prisma-client";

export  async function POST(request: Request) {
  try {
    const { rule_name, rule_description } = await request.json();

    if (!rule_name || !rule_description) {
      return new Response(
        JSON.stringify({ error: "rule_name et rule_description sont requis" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const newRule = await prisma.rule.create({
      data: {
        rule_name,
        rule_description,
      },
    });

    return new Response(JSON.stringify(newRule), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erreur lors de la création de la règle :", error);
    return new Response(
      JSON.stringify({ error: "Erreur interne du serveur" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}


export  async function GET(request: Request) {
  try {
    const rules = await prisma.rule.findMany();
    return new Response(JSON.stringify(rules), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erreur lors de la recherche des règles :", error);
    return new Response(
      JSON.stringify({ error: "Erreur interne du serveur" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}