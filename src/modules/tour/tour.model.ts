import { model, Schema } from 'mongoose';

const tourSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  durationHours: {
    type: String,
    requiered: true,
  },
  averageRating: {
    type: Number,
    default: 5,
  },
  price: {
    type: Number,
    required: true,
  },
  coverImage: { type: String, required: true },
  image: [String],
  startDate: { type: Date },
  startLocation: { type: String },
  location: [String],
  slug: [String],
});

const Tour = model('tour', tourSchema);

export default Tour;
// 21: 27
