import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    videFile: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    tags: [
      {
        type: String,
        required: true,
        trim: true,
        index: true,
      },
    ],
    category: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      trim: true,
      default: 0,
    },
    ispublshed: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likes: {
      type: Number,
      trim: true,
      index: true,
    },
  },
  { timestamps: true }
);

export const Video = mongoose.model("Video", videoSchema);
