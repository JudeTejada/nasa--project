type Launch = {
  flightNumber: number;
  mission: string;
  rocket: string;
  launchDate: Date;
  target: string;
  customers: Array<string>;
  upcoming: boolean;
  success?: boolean;
};

const launches = new Map<number, Launch>();



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

function getAllLaunches(): Array<Launch> {
  return Array.from(launches.values());
}

function addNewLaunch(launch: Launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      customers: ['Zero to Mastery', 'NASA'],
      flightNumber: latestFlightNumber,
      upcoming: true,
      success: true
    })
  );
}

function existsLaunchWithId(id: number) {
  return launches.has(id);
}

function abortLaunchById(id: number) {
  const aborted = launches.get(id)!;

  aborted.upcoming = false;
  aborted.success = false;

  return aborted;
}

export {
  getAllLaunches,
  launches,
  addNewLaunch,
  abortLaunchById,
  existsLaunchWithId
};
