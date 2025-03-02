import session from 'express-session';

if (!process.env.HUMOR_SESSION_SECRET) {
  throw new Error('HUMOR_SESSION_SECRET is not set');
}

export const auth = session({
  secret: process.env.HUMOR_SESSION_SECRET,
  name: 'sessionID',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60, // 1 hour, in ms
    secure: false,
  },
}); 
