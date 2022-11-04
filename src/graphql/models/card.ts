import { Schema, model, models } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { autoIncrement } from 'mongoose-plugin-autoinc';
import mongooseAutopopulate from 'mongoose-autopopulate';

const cardSchema = new Schema(
  {
    id: {
      type: String,
    },
    cardType: {
      type: String,
    },
    last4: {
      type: String,
    },
    expMonth: {
      type: Number,
    },
    expYear: {
      type: Number,
    },
    country: {
      type: String,
    },
  },
  { timestamps: true }
);
cardSchema.plugin(mongoosePaginate);
cardSchema.plugin(autoIncrement, { model: 'Card', field: 'no' });
cardSchema.plugin(mongooseAutopopulate);
export default models.Card || model('Card', cardSchema);
