const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listSchema = new Schema(
  {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    color: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

listSchema.index({ userId: 1 });

const List = mongoose.model("List", listSchema);

module.exports = List;
