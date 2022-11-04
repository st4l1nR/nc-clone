import { Schema, model, models } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { autoIncrement } from 'mongoose-plugin-autoinc';
import mongooseAutopopulate from 'mongoose-autopopulate';
const userSchema = new Schema(
  {
    active: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default: '/images/avatar.png',
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['client', 'admin'],
    },
    darkMode: {
      type: Boolean,
      default: false,
    },
    twoFactorAuthEnabled: {
      type: Boolean,
      default: false,
    },
    twoFactorRecoveryCodeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
userSchema.plugin(mongoosePaginate);
userSchema.plugin(autoIncrement, { model: 'User', field: 'no' });
userSchema.plugin(mongooseAutopopulate);

export default models.User || model('User', userSchema);
