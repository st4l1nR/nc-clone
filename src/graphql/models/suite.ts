import { Schema, model, models } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { autoIncrement } from 'mongoose-plugin-autoinc';
import mongooseAutopopulate from 'mongoose-autopopulate';

const suiteSchema = new Schema(
  {
    name: {
      type: String,
    },
    abortOnTestFailure: {
      type: Boolean,
    },
    autoRetry: {
      type: Boolean,
    },
    browser: {
      type: String,
    },
    dataSource: {
      type: String,
    },
    disabledVisuals: {
      type: Boolean,
    },
    disabledInsecureCertificates: {
      type: Boolean,
    },
    failOnJavascriptError: {
      type: Boolean,
    },
    finalDelay: {
      type: Number,
    },
    golabalStepDelay: {
      type: Number,
    },
    language: {
      type: String,
    },
    maxAjaxDelay: {
      type: Number,
    },
    maxConcurrentDataRows: {
      type: Number,
    },
    maxConcurrentTests: {
      type: Number,
    },
    maxWaitDelay: {
      type: Number,
    },
    folder: {
      type: Schema.Types.ObjectId,
      ref: 'Folder',
      autopopulate: true,
    },
    executedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);
suiteSchema.plugin(mongoosePaginate);
suiteSchema.plugin(autoIncrement, { model: 'Suite', field: 'no' });
suiteSchema.plugin(mongooseAutopopulate);
export default models.Suite || model('Suite', suiteSchema);
