import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tsfipgdzbjjdbgbfbwmq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzZmlwZ2R6YmpqZGJnYmZid21xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAxOTMzMjgsImV4cCI6MjEwNTc2OTMyOH0.qIxyPHNvo5veuOIa1hwOaD-7W6LyKuuMMhQdViMUOBw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
