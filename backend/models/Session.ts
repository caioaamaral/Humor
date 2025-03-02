import { v4 as uuidv4, UUIDTypes as UUID, NIL as NIL_UUID } from 'uuid';
import { Schema, model, Document } from 'mongoose';

export interface ISession extends Document {
    user_id: UUID;
    session_id: UUID;
    content: string;
    createdAt: Date;
}

const newUserId = NIL_UUID;

const SessionSchema = new Schema({
    user_id: { type: String, required: true, default: newUserId },
    session_id: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Session = model<ISession>('Session', SessionSchema);

export default Session;
