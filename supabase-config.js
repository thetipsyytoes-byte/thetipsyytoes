// Supabase connection for The Tipssy Toe Makeover Studio
const SUPABASE_URL = "https://atguufqezpzvqiovbvff.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_pDH8rg_qn-8YRPMZWt1MtQ_SV72CQyp";
window.tipssySupabase = supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
