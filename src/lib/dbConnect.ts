import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente
dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  console.log(MONGODB_URI, process.env.MONGODB_URI, process.env);
  throw new Error("Por favor, defina a variável MONGODB_URI no .env.local");
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

let globalCache = global as typeof globalThis & { mongoose: MongooseCache };

if (!globalCache.mongoose) {
  globalCache.mongoose = { conn: null, promise: null };
}

export default async function dbConnect(): Promise<typeof mongoose> {
  if (globalCache.mongoose.conn) return globalCache.mongoose.conn;

  if (!globalCache.mongoose.promise) {
    globalCache.mongoose.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  globalCache.mongoose.conn = await globalCache.mongoose.promise;
  return globalCache.mongoose.conn;
}
