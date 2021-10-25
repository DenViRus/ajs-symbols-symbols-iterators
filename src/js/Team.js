import { Person } from "./Person.js";

export class Team {
  constructor(...objects) {
    this.team = [...objects];
  }

  [Symbol.iterator]() {
    return {
      current: 0,
      lust: this.team.length,
      teamArr: this.team,
      next() {
        return this.current <= this.lust
          ? { done: false, value: this.teamArr[this.current++] }
          : { done: true };
      },
    };
  }
}
