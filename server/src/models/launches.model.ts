type Launch = {
  flightNumber: number;
  mission: string;
  rocket: string;
  launchDate: Date;
  destination: string;
  customers: Array<string>;
  upcoming: boolean;
  success?: boolean;
};

const launches = new Map<number, Launch>();

launches.set(0, {
  customers: ['Zero to Mastery', 'NASA'],
  destination: 'Kepler-442 b',
  flightNumber: 0,
  launchDate: new Date('December 20, 2019'),
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  success: true,
  upcoming: true
});
launches.set(2, {
  customers: ['Zero to Mastery', 'NASA'],
  destination: 'Kepler-441 b',
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

export { getAllLaunches, launches };
