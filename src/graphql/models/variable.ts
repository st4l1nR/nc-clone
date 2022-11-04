import { Schema, model, models } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { autoIncrement } from 'mongoose-plugin-autoinc';
import mongooseAutopopulate from 'mongoose-autopopulate';

const variableSchema = new Schema(
  {
    name: {
      type: String,
    },
    value: {
      type: String,
    },
    private: {
      type: Boolean,
    },
    organization: {
      type: Schema.Types.ObjectId,
      ref: 'Organization',
      autopopulate: true,
    },
    suite: {
      type: Schema.Types.ObjectId,
      ref: 'Suite',
      autopopulate: true,
    },
  },
  { timestamps: true }
);
variableSchema.plugin(mongoosePaginate);
variableSchema.plugin(autoIncrement, { model: 'Variable', field: 'no' });
variableSchema.plugin(mongooseAutopopulate);
export default models.Variable || model('Variable', variableSchema);
