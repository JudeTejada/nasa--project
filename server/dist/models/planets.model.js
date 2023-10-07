"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPlanets = exports.loadPlanetsData = exports.habitablePlanets = void 0;
const fs_1 = __importDefault(require("fs"));
const csv_parse_1 = require("csv-parse");
exports.habitablePlanets = [];
function isHabitablePlanet(planet) {
    return (planet['koi_disposition'] === 'CONFIRMED' &&
        planet['koi_insol'] > 0.36 &&
        planet['koi_insol'] < 1.11 &&
        planet['koi_prad'] < 1.6);
}
const loadPlanetsData = async () => {
    return new Promise((resolve, reject) => {
        fs_1.default.createReadStream('src/data/kepler_data.csv')
            .pipe((0, csv_parse_1.parse)({ comment: '#', columns: true }))
            .on('data', data => {
            if (isHabitablePlanet(data)) {
                // @ts-ignore
                exports.habitablePlanets.push(data);
            }
        })
            .on('error', err => { })
            .on('end', () => {
            resolve(exports.habitablePlanets);
        });
    });
};
exports.loadPlanetsData = loadPlanetsData;
function getAllPlanets() {
    return exports.habitablePlanets;
}
exports.getAllPlanets = getAllPlanets;
