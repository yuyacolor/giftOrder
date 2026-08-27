// ⚠️ 請填入你自己 Supabase 專案的資訊
// 位置：Supabase Dashboard → Settings → API
// SUPABASE_URL      → Project URL
// SUPABASE_ANON_KEY → anon / public key（不是 service_role key！）

const SUPABASE_URL = "https://hjuujqidzpetprmiqmgt.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqdXVqcWlkenBldHBybWlxbWd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc3Nzc0NTAsImV4cCI6MjEwMzM1MzQ1MH0.qmmmQsRrlu1IDZfBW-rvewnQIr5SklUbUPkPL5d8t1Y";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
