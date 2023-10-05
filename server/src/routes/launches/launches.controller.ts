import e, { Request, Response } from 'express';
import {
  abortLaunchById,
  addNewLaunch,
  existsLaunchWithId,
  getAllLaunches
} from '../../models/launches.model';

function httpGetAllLaunches(req: Request, res: Response) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req: Request, res: Response) {
  const launch = req.body;

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: 'Missing required launch property'
    });
  }

  launch.launchDate = new Date(launch.launchDate);
  if (launch.launchDate.toString() === 'Invalid Date')
    return res.status(400).json({ error: 'Invalid launch date' });

  addNewLaunch(launch);
  return res.status(201).json({ ok: true });
}

function httpAbortLaunch(req: Request, res: Response) {
  const launchId = Number(req.params.id);

  if (!existsLaunchWithId(launchId))
    return res.status(400).json({ error: 'Launch not found' });

  const aborted = abortLaunchById(launchId);
  return res.status(200).json(aborted);
}

export { httpAddNewLaunch, httpGetAllLaunches, httpAbortLaunch };
