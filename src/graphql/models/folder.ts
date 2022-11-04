import { Schema, model, models } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { autoIncrement } from 'mongoose-plugin-autoinc';
import mongooseAutopopulate from 'mongoose-autopopulate';

const folderSchema = new Schema(
  {
    name: {
      type: String,
    },
    organization: {
      type: Schema.Types.ObjectId,
      ref: 'Organization',
      autopopulate: true,
    },
  },
  { timestamps: true }
);
folderSchema.plugin(mongoosePaginate);
folderSchema.plugin(autoIncrement, { model: 'Folder', field: 'no' });
folderSchema.plugin(mongooseAutopopulate);
export default models.Folder || model('Folder', folderSchema);
