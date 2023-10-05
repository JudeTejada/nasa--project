"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPlanets = void 0;
const planets_model_1 = require("../../models/planets.model");
function getAllPlanets(req, res) {
    return res.status(200).json(planets_model_1.habitablePlanets);
}
exports.getAllPlanets = getAllPlanets;
