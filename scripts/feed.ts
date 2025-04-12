import dbConnect from '../src/lib/dbConnect';
import { Ideia } from '../src/models/Ideia';
const fs = require('fs');

async function seed() {
  await dbConnect();

  const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf8'));

  try {
    await Ideia.create(data);
    console.log('✅ Dados inseridos com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao inserir dados:', error);
  }

  process.exit();
}

seed();
