import { Request, Response } from 'express';
import { tourService } from './tour.service';

const createTour = async (req: Request, res: Response) => {
  try {
    const tourData = req.body;
    const result = await tourService.createTour(tourData);
    res.send({
      success: true,
      message: 'Tour created Successfully',
      result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const getAllTour = async (req: Request, res: Response) => {
  try {
    const result = await tourService.getAllTour();
    res.send({
      success: true,
      message: 'Tour got Successfully',
      result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};
const getSingleTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await tourService.getSingleTour(id);
    res.send({
      success: true,
      message: 'SingleTour got Successfully',
      result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};
const updateTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const tourData = req.body;
    const result = await tourService.updateTour(id, tourData);
    res.send({
      success: true,
      message: 'Tour updated Successfully',
      result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};
const deleteTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await tourService.deleteTour(id);
    res.send({
      success: true,
      message: 'Tour deleted Successfully',
      result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const getNextSchedule = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await tourService.getNextSchedule(id);
    res.send({
      success: true,
      message: 'Tour nextSchedule got Successfully',
      result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

export const tourController = {
  createTour,
  getAllTour,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
};
