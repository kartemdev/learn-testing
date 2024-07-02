import { expect } from '@wdio/globals';
import UsersPage from '../pages/users.page.js';

describe('My users page', () => {
  it('load data', async () => {
    await UsersPage.loadData();
  });

  it('delete user', async () => {
    await UsersPage.loadData();
    await UsersPage.deleteUser();
  });
});
