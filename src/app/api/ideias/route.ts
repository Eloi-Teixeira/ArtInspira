import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { Ideia } from '@/models/Ideia';

export async function GET() {
  await dbConnect();

  try {
    const count = await Ideia.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const randomIdeia = await Ideia.findOne().skip(randomIndex);

    if (!randomIdeia) {
      return NextResponse.json({ success: false, message: 'Nenhuma ideia encontrada' }, {
        status: 404,
        headers: {
          'Cache-Control': 'no-store',
        },
      });
    }

    return NextResponse.json({ success: true, data: randomIdeia }, {
      status: 200,
      headers: {
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: `Erro interno: ${error}` }, {
      status: 500,
      headers: {
        'Cache-Control': 'no-store',
      },
    });
  }
}
