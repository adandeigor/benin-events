import { createClient } from '@supabase/supabase-js'

const project_url:string = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const api_key:string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

// Create Supabase client
const supabase = createClient(project_url, api_key);

export default supabase