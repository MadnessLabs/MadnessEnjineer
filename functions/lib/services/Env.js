"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const dotenv = require("dotenv");
const functions = require("firebase-functions");
const resolve = function (obj, keyPath) {
    return keyPath.split('.').reduce(function (prev, curr) {
        return prev ? prev[curr] : undefined;
    }, obj || self);
};
function env(key, fallback, envPath) {
    dotenv.config({ path: envPath ? path.resolve(process.cwd(), envPath) : path.resolve(process.cwd(), '..', '.env') });
    let response = false;
    try {
        response = resolve(functions.config(), key.toLowerCase().replace(/_/g, '.'));
        if (!response) {
            response = process.env[key];
        }
    }
    catch (error) {
        response = process.env[key];
    }
    return response ? response : fallback;
}
exports.env = env;
;
//# sourceMappingURL=Env.js.map