'use server';

import { IIdeia } from '@/models/Ideia';

interface ResponseIdea {
  success: boolean;
  data: IIdeia;
  message?: string;
}

export async function generateIdeia() {
  const res = await fetch('http://localhost:3000/api/ideias', {
    cache: 'no-store',
    next: { revalidate: 0 },
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.API_SECRET_KEY || '',
    },
  });

  if (!res.ok) {
    console.error(res);
    throw new Error('Failed to fetch data');
  }

  const json = (await res.json()) as ResponseIdea;
  return json;
}
