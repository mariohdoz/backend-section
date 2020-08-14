const mongoose = require("mongoose");
const { Schema } = mongoose;

const IdeaSchema = new Schema({
  idea: { type: String, required: true },
  description: { type: String },
  upvotes: [{ type: Boolean }],
  upvotes: [{ type: Boolean }],
  author: { type: Schema.Types.ObjectId, ref: "User", required: true, autopopulate: true },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment", required: true, autopopulate: true }]
});

IdeaSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Idea", IdeaSchema);