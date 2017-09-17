import {Injectable} from '@angular/core';

export class users {
  username: string;
  password: string;
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
