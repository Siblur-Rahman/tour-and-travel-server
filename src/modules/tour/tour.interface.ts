import { HydratedDocument, Model, Number } from 'mongoose';

export interface ITour {
  name: string;
  durationHours: number;
  averageRating: number;
  price: number;
  coverImage: string;
  images: string[];
  startDates: Date[];
  startLocation: string;
  location: string[];
  slug: string[];
}

// export interface ITourMethods {
//   getNextNearestStartDateAndEndData(): {
//     nearestStartDate: Date | null;
//     estimatedEndDate: Date | null;
//   };
// }

// type TTourModel = Model<ITour, Record<string, unknown>, ITourMethods>;

export interface ITourMethods {
  getNextNearestStartDateAndEndData(): {
    nearestStartDate: Date | null;
    estimatedEndDate: Date | null;
  };
}

interface TTourModel
  extends Model<ITour, Record<string, unknown>, ITourMethods> {
  startDates: [Date];
  durationHours: number;
  getNextNearestStartDateAndEndData(): Promise<
    HydratedDocument<ITour, ITourMethods>
  >;
}

export default TTourModel;
