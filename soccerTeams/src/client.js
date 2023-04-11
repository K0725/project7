import { createClient } from '@supabase/supabase-js'

const URL = 'https://hombjltyatfljmfjawab.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbWJqbHR5YXRmbGptZmphd2FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNzAwMzUsImV4cCI6MTk5Njc0NjAzNX0.yOCRtalkSRN6Gqi75aRJV3FqGxq4rhBPmlipiGsRz7A';

export const supabase = createClient(URL, API_KEY);