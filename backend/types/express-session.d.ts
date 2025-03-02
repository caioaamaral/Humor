import 'express-session';
import { UUIDTypes as UUID } from 'uuid';

declare module 'express-session' {
  interface SessionData {
    userId?: UUID;
  }
}
