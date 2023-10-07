"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpAbortLaunch = exports.httpGetAllLaunches = exports.httpAddNewLaunch = void 0;
const launches_model_1 = require("../../models/launches.model");
function httpGetAllLaunches(req, res) {
    return res.status(200).json((0, launches_model_1.getAllLaunches)());
}
exports.httpGetAllLaunches = httpGetAllLaunches;
function httpAddNewLaunch(req, res) {
    const launch = req.body;
    if (!launch.mission ||
        !launch.rocket ||
        !launch.launchDate ||
        !launch.target) {
        return res.status(400).json({
            error: 'Missing required launch property'
        });
    }
    launch.launchDate = new Date(launch.launchDate);
    if (launch.launchDate.toString() === 'Invalid Date')
        return res.status(400).json({ error: 'Invalid launch date' });
    (0, launches_model_1.addNewLaunch)(launch);
    return res.status(201).json({ ok: true });
}
exports.httpAddNewLaunch = httpAddNewLaunch;
function httpAbortLaunch(req, res) {
    const launchId = Number(req.params.id);
    if (!(0, launches_model_1.existsLaunchWithId)(launchId))
        return res.status(400).json({ error: 'Launch not found' });
    const aborted = (0, launches_model_1.abortLaunchById)(launchId);
    return res.status(200).json(aborted);
}
exports.httpAbortLaunch = httpAbortLaunch;
