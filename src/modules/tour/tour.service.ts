import { ITour } from './tour.interface';
import Tour from './tour.model';

const createTour = async (tourData: ITour) => {
  const result = await Tour.create(tourData);
  return result;
};
const getAllTour = async () => {
  const result = await Tour.find();
  return result;
};
const getSingleTour = async (id: string) => {
  const result = await Tour.findById(id);
  return result;
};
const updateTour = async (id: string, tourData: Partial<ITour>) => {
  const result = await Tour.findByIdAndUpdate(id, tourData, { new: true });
  return result;
};
const deleteTour = async (id: string) => {
  const result = await Tour.findByIdAndDelete(id);
  return result;
};

const getNextSchedule = async (id: string) => {
  const tour = await Tour.findById(id);
  const nextSchedule = tour?.getNextNearestStartDateAndEndData();
  return {
    tour,
    nextSchedule,
  };
};

export const tourService = {
  createTour,
  getAllTour,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
};
