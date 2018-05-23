"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const GitHub = require("github-api");
const Env_1 = require("./services/Env");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.listRepos = functions.https.onRequest((request, response) => __awaiter(this, void 0, void 0, function* () {
    const gh = new GitHub({
        username: Env_1.env('GITHUB_USER'),
        password: Env_1.env('GITHUB_PASSWORD')
        /* also acceptable:
          token: 'MY_OAUTH_TOKEN'
        */
    });
    const me = gh.getUser();
    const repos = yield me.listRepos();
    response.send(repos.data);
}));
//# sourceMappingURL=index.js.map