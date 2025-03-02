import { Router, Request, Response } from 'express';

import Message from '../models/Message'

export const router = Router()

router.get('/', (req, res) => {
  res.send('API is running...')
})

router.post('/entry', async (req: Request, res: Response) => {
  const { entry } = req.body

  const newMessage = new Message({ content: entry })
  const saved = await newMessage.save()

  res.status(201).json(saved);
})