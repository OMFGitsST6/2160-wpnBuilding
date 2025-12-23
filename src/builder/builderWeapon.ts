import Dice from "../common/game/dice";
import type WeaponSize from "../common/game/weaponSize";
import type { TWeaponSize } from "../common/game/weaponSize";

export interface Weapon {
  name: string;
  attackBonus: number;
  damage: Dice;
  critical: [number, number];
  effect: string[];
  range: number;
  rof: string;
  ammo: string;
  magazine: string;
  size: string;
  weight: number;
  absorption: number;
  crCost: number;
  specRules: string[];
}

export interface WeaponBase {
  name: string;
  range: number;
  rof: string;
  size: TWeaponSize;
  weight: number;
  absorption: number;
  crCost: number;
}

export interface WeaponStage {
  name: string;
  attackBonus: number;
  damage: Dice;
  critical: [number, number];
  effect: string[];
  range: number;
  rof: string;
  ammo: string;
  size: string;
  weight: number;
  absorption: number;
  crCost: number;
  specRules: string[];
}

/**
 * Stage 1 end weapon data.
 */
export interface Stage1Data {
  chassisName: string;
  dmgGrade: number;
  range: number;
  modes: string[];
  rofGrade: number; //J$55 = chassisRofGrade + numBarrels
  volume: number;
  size: TWeaponSize;
  weight: number;
  absorption: number;
  crCost: number;
  special: string[];

  /* Helper values */
  numBarrels: number;
}