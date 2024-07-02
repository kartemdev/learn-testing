import { $, $$ } from '@wdio/globals';
import Page from './page.js';

class UsersPage extends Page {
  get loadingTitle() {
    return $('#users-loading');
  }

  get usersList() {
    return $('#users-list');
  }

  get usersItems() {
    return $$('#user-item');
  }

  async loadData() {
    try {
      await this.open();
      await this.loadingTitle.waitForDisplayed({timeout: 2000});
      await this.usersList.waitForDisplayed({timeout: 2000});
    } catch {
      throw new Error('not loading users data!')
    }
  }

  async deleteUser() {
    try {
      const usersCount = await this.usersItems.length;

      if (!usersCount) {
        throw new Error('user not found')
      }

      await this.usersItems[0].$('#user-delete').click();

      const usersCountAfterDelete = await this.usersItems.length;

      if (usersCount - usersCountAfterDelete !== 1) {
        throw new Error('user count after delete !== 1');
      }
    } catch {
      throw new Error('not deleting user');
    }
  }

  open() {
    return super.open('/users-e2e');
  }
}

export default new UsersPage();
