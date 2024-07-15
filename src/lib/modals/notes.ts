import { Schema, model, models } from "mongoose";

const NoteSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: String, required: true },
});

const Note = models.Note || model("Note", NoteSchema);

export default Note;