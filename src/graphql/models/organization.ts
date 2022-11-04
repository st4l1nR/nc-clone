import { Schema, model, models } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { autoIncrement } from 'mongoose-plugin-autoinc';
import mongooseAutopopulate from 'mongoose-autopopulate';

const organizationSchema = new Schema(
  {
    active: {
      type: Boolean,
      default:true
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    emailBilling: {
      type: String,
    },
    address: {
      type: Boolean,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    postCode: {
      type: String,
    },
    state: {
      type: String,
    },

    trialExpiration: {
      type: Date,
    },
    customerId: {
      type: String,
    },
    subscriptionId: {
      type: String,
    },
    personal: {
      type: Boolean,
    },
    disallowOverages: {
      type: Boolean,
    },
    disableOveragesFee: {
      type: Boolean,
    },
    ssoEnabled: {
      type: Boolean,
    },
    notifications: {
      type: Object,
    },
    notifcationSuites: {
      type: Object,
    },
    suiteCount: {
      type: Number,
    },
    testCount: {
      type: Number,
    },
    memberCount: {
      type: Number,
    },
    plan: {
      type: Schema.Types.ObjectId,
      ref: 'Plan',
      autopopulate: true,
    },
    card: {
      type: Schema.Types.ObjectId,
      ref: 'Card',
      autopopulate: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: true,
    },
  },
  { timestamps: true }
);
organizationSchema.plugin(mongoosePaginate);
organizationSchema.plugin(autoIncrement, { model: 'Organization', field: 'no' });
organizationSchema.plugin(mongooseAutopopulate);
export default models.Organization || model('Organization', organizationSchema);
