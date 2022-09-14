import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient({
  log: ['query']
});

app.get('/games' , async (request, response) =>{
  const games = await prisma.game.findMany({
    include:{
      _count:{
        select:{
          ads:true,
        }
      }
    }
  });

  return response.json(games);
})

app.post('/ads' , (request, response) =>{
  return response.json([]);
})

app.get('/games/:id/ads', (request, response) => {
  // const gameId = request.params.id;
  return response.json([
    { id: 1, name: 'Ads 1' },
    { id: 2, name: 'Ads 2' },
    { id: 3, name: 'Ads 3' },
    { id: 4, name: 'Ads 4' },
  ]);
});

app.get('/ads/:id/discord', (request, response) => {
  // const gameId = request.params.id;
  return response.json([]);
});

app.listen(3333);
