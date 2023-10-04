import fs from 'fs';
import { parse } from 'csv-parse';

export const habitablePlanets: [] = [];

function isHabitablePlanet(planet: any) {
  return (
    planet['koi_disposition'] === 'CONFIRMED' &&
    planet['koi_insol'] > 0.36 &&
    planet['koi_insol'] < 1.11 &&
    planet['koi_prad'] < 1.6
  );
}

export const loadPlanetsData = async () => {
  return new Promise((resolve, reject) => {
    fs.createReadStream('src/data/kepler_data.csv')
      .pipe(parse({ comment: '#', columns: true }))
      .on('data', data => {
        if (isHabitablePlanet(data)) {
          // @ts-ignore
          habitablePlanets.push(data as any);
        }
      })
      .on('error', err => {})
      .on('end', () => {
        console.log(
          habitablePlanets.map(planet => {
            return planet['kepler_name'];
          })
        );
        resolve(habitablePlanets);
      });
  });
};
