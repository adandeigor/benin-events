import supabase from "@/lib/supabase-client";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const folder = url.searchParams.get('folder');
    const fileName = url.searchParams.get('file');

    if (!folder || !fileName) {
      return new Response(JSON.stringify({ error: 'Missing folder or file parameter' }), { status: 400 });
    }

    const filePath = `${folder}/${fileName}`;
    const { data } = supabase.storage.from('benin-event').getPublicUrl(filePath);

    if (!data) {
      return new Response(JSON.stringify({ error: 'Failed to get public URL' }), { status: 500 });
    }

    return new Response(JSON.stringify({ url: data.publicUrl }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400 });
  }
}