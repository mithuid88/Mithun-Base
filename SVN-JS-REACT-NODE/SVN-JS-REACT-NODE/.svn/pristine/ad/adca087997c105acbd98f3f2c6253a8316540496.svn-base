import crypto from "crypto";
const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
    },
    hash: {
      type: String,
      required: true
    },
    token: {
      type: String
    },
    salt: String,
    isAdmin: {
      type: Boolean,
      default: false
    },
    engagement: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  },
);

User.methods.setPassword = function (password) {
  // Creating a unique salt for a particular user
  this.salt = crypto.randomBytes(16).toString('hex');

  // Hashing user's salt and password with 1000 iterations, 64 length and sha512 digest
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
};

User.methods.validPassword = function (password) {
  let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
  return this.hash === hash;
};

export default mongoose.model('User', User);
