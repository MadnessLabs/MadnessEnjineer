import * as path from 'path';
import * as dotenv from 'dotenv';
import * as functions from 'firebase-functions';

declare var self;

const resolve = function (obj: any, keyPath: string) {
  return keyPath.split('.').reduce(function (prev, curr) {
    return prev ? prev[curr] : undefined
  }, obj || self)
};

export function env(key: string, fallback?: any, envPath?: string) {
  dotenv.config({ path: envPath ? path.resolve(process.cwd(), envPath) : path.resolve(process.cwd(), '..', '.env') });
  let response: any = false;
  try {
    response = resolve(functions.config(), key.toLowerCase().replace(/_/g, '.'));
    if (!response) {
      response = process.env[key];
    }
  } catch (error) {
    response = process.env[key];
  }

  return response ? response : fallback;
};