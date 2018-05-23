import * as functions from 'firebase-functions';
import * as GitHub from 'github-api';

import { env } from './services/Env';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const listRepos = functions.https.onRequest(async (request, response) => {
  const gh = new GitHub({
    username: env('GITHUB_USER'),
    password: env('GITHUB_PASSWORD')
  /* also acceptable:
    token: 'MY_OAUTH_TOKEN'
  */
  });

  const me = gh.getUser();
  const repos = await me.listRepos();
  response.send(repos.data);
});
