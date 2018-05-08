import { Injectable } from '@angular/core';

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Injectable()
export class UserData {
  _favorites: string[] = [];
  HAS_SENDDED_IN = 'hasSenddedIn';
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
  HAS_ADDED_IN = 'hasAddedIn';

  constructor(
    public events: Events,
    public storage: Storage
  ) {}

  hasFavorite(sessionName: string): boolean {
    return (this._favorites.indexOf(sessionName) > -1);
  };

  addFavorite(sessionName: string): void {
    this._favorites.push(sessionName);
  };

  removeFavorite(sessionName: string): void {
    let index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  };

  login(username: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:login');
  };
   help(subject: string): void {
    this.storage.set(this.HAS_SENDDED_IN, true);
    this.setSubject(subject);
    this.events.publish('subject:help');
  };
  walllet(coin: string): void {
    this.storage.set(this.HAS_ADDED_IN, true);
    this.setCoin(coin);
    this.events.publish('coin:wallet');
  };
  send(address: string): void {
    this.storage.set(this.HAS_SENDDED_IN, true);
    this.setSubject(address);
    this.events.publish('address:send');
  };

  signup(username: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setSubject(username);
    this.events.publish('user:signup');
  };

  logout(): void {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  };
  logoutS(): void {
    this.storage.remove(this.HAS_SENDDED_IN);
    this.storage.remove('subject');
    this.events.publish('user:logout');
  };
  logoutW(): void {
    this.storage.remove(this.HAS_ADDED_IN);
    this.storage.remove('coin');
    this.events.publish('user:logout');
  };


  setUsername(username: string): void {
    this.storage.set('username', username);
  };
  setSubject(subject: string): void {
    this.storage.set('subject', subject);
  };
  setCoin(coin: string): void {
    this.storage.set('coin', coin);
  };
   setsend(send: string): void {
    this.storage.set('send', send);
  };

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };
   getSubject(): Promise<string> {
    return this.storage.get('subject').then((value) => {
      return value;
    });
  };
  getCoin(): Promise<string> {
    return this.storage.get('coin').then((value) => {
      return value;
    });
  };

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };
  hasSenddedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_SENDDED_IN).then((value) => {
      return value === true;
    });
  };
  hasAddedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_ADDED_IN).then((value) => {
      return value === true;
    });
  };

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  };
}
