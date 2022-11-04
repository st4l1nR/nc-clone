import { Schema, model, models } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { autoIncrement } from 'mongoose-plugin-autoinc';
import mongooseAutopopulate from 'mongoose-autopopulate';

const memberSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: true,
    },
    role: {
      type: String,
      enum: ['owner', 'admin', 'user'],
    },
  },
  { timestamps: true }
);
memberSchema.plugin(mongoosePaginate);
memberSchema.plugin(autoIncrement, { model: 'Member', field: 'no' });
memberSchema.plugin(mongooseAutopopulate);
export default models.Member || model('Member', memberSchema);
