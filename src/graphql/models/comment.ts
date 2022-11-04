import { Schema, model, models } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { autoIncrement } from 'mongoose-plugin-autoinc';
import mongooseAutopopulate from 'mongoose-autopopulate';

const commentSchema = new Schema(
  {
    message: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: true,
    },
  },
  { timestamps: true }
);
commentSchema.plugin(mongoosePaginate);
commentSchema.plugin(autoIncrement, { model: 'Comment', field: 'no' });
commentSchema.plugin(mongooseAutopopulate);
export default models.Comment || model('Comment', commentSchema);
