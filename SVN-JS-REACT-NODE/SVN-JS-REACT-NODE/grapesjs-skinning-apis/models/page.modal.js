const mongoose = require('mongoose');
const { Schema } = mongoose;

const Page = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    slug: {
      type: String,
      required: true,
    },
    engagement: {
      type: String,
    },
    deleted: {
      type: Boolean,
      default: false
    },
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    content: Object,
    fonts: Array
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Pages', Page);
