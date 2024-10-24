const { model, Schema } = require("mongoose");

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  content: [{ title: String, body: String }],
  students: [{ type: Schema.Types.ObjectId, ref: "User" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

const Course = model("Course", courseSchema);

module.exports = Course;
