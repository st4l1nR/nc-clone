import { Schema, model, models } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { autoIncrement } from 'mongoose-plugin-autoinc';
import mongooseAutopopulate from 'mongoose-autopopulate';

const planSchema = new Schema(
  {
    code: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    testRuns: {
      type: Number,
    },
    memberCount: {
      type: Number,
    },
    private: {
      type: Boolean,
    },
    yearly: {
      type: Boolean,
    },
    retentionMonths: {
      type: Number,
    },
    advanceScheduling: {
      type: Boolean,
    },
    chrome: {
      type: Boolean,
    },
    maxCsvUploadRows: {
      type: Number,
    },
    screenshotSteps: {
      type: Boolean,
    },
    overagePrice: {
      type: Number,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: true,
    },
  },
  { timestamps: true }
);
planSchema.plugin(mongoosePaginate);
planSchema.plugin(autoIncrement, { model: 'Plan', field: 'no' });
planSchema.plugin(mongooseAutopopulate);
export default models.Plan || model('Plan', planSchema);
