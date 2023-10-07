"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.existsLaunchWithId = exports.abortLaunchById = exports.addNewLaunch = exports.launches = exports.getAllLaunches = void 0;
const launches = new Map();
exports.launches = launches;
let latestFlightNumber = 100;
launches.set(0, {
    customers: ['Zero to Mastery', 'NASA'],
    target: 'Kepler-442 b',
    flightNumber: 0,
    launchDate: new Date('December 20, 2019'),
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    success: true,
    upcoming: true
});
launches.set(2, {
    customers: ['Zero to Mastery', 'NASA'],
    target: 'Kepler-441 b',
    flightNumber: 2,
    launchDate: new Date('December 20, 2021'),
    mission: 'Kepler Exploration Y',
    rocket: 'Explorer IS3',
    success: true,
    upcoming: true
});
function getAllLaunches() {
    return Array.from(launches.values());
}
exports.getAllLaunches = getAllLaunches;
function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch, {
        customers: ['Zero to Mastery', 'NASA'],
        flightNumber: latestFlightNumber,
        upcoming: true,
        success: true
    }));
}
exports.addNewLaunch = addNewLaunch;
function existsLaunchWithId(id) {
    return launches.has(id);
}
exports.existsLaunchWithId = existsLaunchWithId;
function abortLaunchById(id) {
    const aborted = launches.get(id);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}
exports.abortLaunchById = abortLaunchById;
