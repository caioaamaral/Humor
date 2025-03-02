import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import Message from '../models/Message'

export const router = Router()

router.get('/', (req, res) => {
  res.send('API is running...')
})

router.post('/entry', async (req: Request, res: Response) => {
  const { entry } = req.body
  let userId = req.session.userId
  if (!userId) {
    req.session.userId = uuidv4()
    userId = req.session.userId
  }

  const newMessage = new Message({ content: entry, user_id: userId })
  const saved = await newMessage.save()

  res.status(201).json(saved);
})
