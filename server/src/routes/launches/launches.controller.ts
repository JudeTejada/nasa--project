import { Request, Response } from 'express';
import { getAllLaunches } from '../../models/launches.model';

export function httpGetAllLaunches(req: Request, res: Response) {
  return res.status(200).json(getAllLaunches());
}

export function CancelLaunch(req: Request, res: Response) {}
