import supabase from "@/lib/supabase-client";

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const folder = url.searchParams.get('folder');
    const fileName = url.searchParams.get('file');

    if (!folder || !fileName) {
      return new Response(JSON.stringify({ error: 'Missing folder or file parameter' }), { status: 400 });
    }

    const filePath = `${folder}/${fileName}`;
    const { data, error } = await supabase.storage.from('benin-event').remove([filePath]);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: 'File deleted successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400 });
  }
}