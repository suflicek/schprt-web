import { createClient } from "@supabase/supabase-js"

// Use the hardcoded values that were working before
const supabaseUrl = "https://wnmefvdhikppojsuognl.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndubWVmdmRoaWtwcG9qc3VvZ25sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NTkyMDcsImV4cCI6MjA1NzUzNTIwN30.F_-htsfYr3DPXmi3pVjVLVXIYC5-Ov1X-dOaBVGY7jY"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

