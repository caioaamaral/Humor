import { UUIDTypes as UUID, NIL as NIL_UUID } from 'uuid';
import { Schema, model, Document } from 'mongoose';

export interface IMessage extends Document {
    user_id: UUID;
    content: string;
    createdAt: Date;
}

const newUserId = NIL_UUID;

const MessageSchema = new Schema({
    user_id: { type: String, default: () => newUserId },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Message = model<IMessage>('Message', MessageSchema);

export default Message;
