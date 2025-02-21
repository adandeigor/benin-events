import supabase from "@/lib/supabase-client";

export async function POST(request: Request) {
  try {
    const { file, folder } = await request.json();
    const filePath = `${folder}/${file.name}`;
    const { data, error } = await supabase.storage.from('benin-event').upload(filePath, file);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    const { publicUrl } = supabase.storage.from('benin-event').getPublicUrl(filePath).data;

    return new Response(JSON.stringify({ data, url: publicUrl }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400 });
  }
}