import mongoose, { Schema, model, models } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { autoIncrement } from 'mongoose-plugin-autoinc';

const stepSchema = new Schema({
  command: {
    type: String,
  },
  condition: {
    type: String,
  },
  optional: {
    type: Boolean,
  },
  private: {
    type: Boolean,
  },
  sequence: {
    type: Number,
  },
  value: {
    type: String,
  },
  variableName: {
    type: String,
  },
  notes: {
    type: String,
  },
  extra: {
    simulated: {
      type: Boolean,
    },
    shift: {
      type: Boolean,
    },
    alt: {
      type: Boolean,
    },
  },
  file: {
    type: String,
  },
});
const testSechema = new Schema(
  {
    name: {
      type: String,
    },
    startUrl: {
      type: String,
    },
    steps: [stepSchema],
    status: {
      type: Number,
    },
    autoRetry: {
      type: Boolean,
    },
    autoRetryTriggered: {
      type: Boolean,
    },
    browser: {
      type: String,
    },
    commentCount: {
      type: Number,
    },
    console: [
      {
        type: Object,
      },
    ],
    deleted: {
      type: Boolean,
    },
    disableVisuals: {
      type: Boolean,
    },
    endUrl: {
      type: String,
    },
    executionTime: {
      type: Number,
    },
    failOnJavascrtipError: {
      type: Boolean,
    },
    filters: [
      {
        type: Object,
      },
    ],
    finalDelay: {
      type: Number,
    },
    language: {
      type: String,
    },
    maxAjaxDelay: {
      type: Number,
    },
    maxWaitDelay: {
      type: Number,
    },
    notifications: {
      type: Object,
    },
    passing: {
      type: Boolean,
    },
    screnshotCompareDifference: {
      type: Object,
    },
    screenshotComparePassing: {
      type: Object,
    },
    screenshot: {
      type: String,
    },
    video: {
      type: String,
    },
    executedStartDate: {
      type: Date,
    },
    executedFinishDate: {
      type: Date,
    },
    suite: {
      type: Schema.Types.ObjectId,
      ref: 'Suite',
      autopopulate: true,
    },
  },
  { timestamps: true }
);
testSechema.plugin(mongoosePaginate);
testSechema.plugin(autoIncrement, { model: 'Test', field: 'id' });
export default models.Test || model('Test', testSechema);
