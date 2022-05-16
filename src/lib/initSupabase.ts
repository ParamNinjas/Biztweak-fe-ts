import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  "https://ifxblygwbylbecbsjjvm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmeGJseWd3YnlsYmVjYnNqanZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA0NjAzNTQsImV4cCI6MTk2NjAzNjM1NH0.G3gTrxlRtKfPFqLPyi4WczSlhp1_q0A83r4X0ot_vcE"
)
