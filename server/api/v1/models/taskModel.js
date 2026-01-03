const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    completed: { type: Boolean, default: false },
    tags: [
      {
        text: { type: String, required: true },
        color: {
          type: String,
          required: true,
          default: "blue",
          enum: [
            "gray",
            "red",
            "yellow",
            "blue",
            "green",
            "indigo",
            "purple",
            "pink",
          ],
        },
      },
    ],
    listId: { type: Schema.Types.ObjectId, ref: "List", required: false },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

taskSchema.index({ userId: 1 });

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
