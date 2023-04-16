import Character from '../Character';

export default class Undead extends Character {
  constructor(name, type = 'Undead', attack = 25, defence = 25) {
    super(name, type, attack, defence);
  }
}
