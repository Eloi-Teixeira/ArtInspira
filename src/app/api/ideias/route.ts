import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { Ideia, IIdeia } from '@/models/Ideia';
// import { Ratelimit } from '@upstash/ratelimit';
// import { Redis } from '@upstash/redis';

// Conecta com o Redis da Upstash
// const redis = new Redis({
//   url: process.env.UPSTASH_REDIS_REST_URL!,
//   token: process.env.UPSTASH_REDIS_REST_TOKEN!,
// });

// Limite: 10 requisições por IP a cada 60s
// const ratelimit = new Ratelimit({
//   redis,
//   limiter: Ratelimit.fixedWindow(10, '60 s'),
//   analytics: true,
// });

export async function GET(req: Request) {
  const apiKey = req.headers.get('x-api-key');
  const ip = req.headers.get('x-forwarded-for') || 'unknown';
  // const { success } = await ratelimit.limit(ip);

  if (apiKey !== process.env.API_SECRET_KEY) {
    return NextResponse.json(
      { success: false, message: 'Chave inválida' },
      { status: 401 },
    );
  }

  // if (!success) {
  //   return NextResponse.json(
  //     { success: false, message: 'Muitas requisições' },
  //     { status: 429 },
  //   );
  // }

  await dbConnect();

  try {
    const count = await Ideia.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const randomIdeia = await Ideia.findOne().skip(randomIndex);

    if (!randomIdeia) {
      return NextResponse.json(
        { success: false, message: 'Nenhuma ideia encontrada' },
        {
          status: 404,
          headers: {
            'Cache-Control': 'no-store',
          },
        },
      );
    }

    return NextResponse.json(
      { success: true, data: randomIdeia },
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store',
        },
      },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: `Erro interno: ${error}` },
      {
        status: 500,
        headers: {
          'Cache-Control': 'no-store',
        },
      },
    );
  }
}
