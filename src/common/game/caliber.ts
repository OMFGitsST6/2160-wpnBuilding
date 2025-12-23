import BuilderUtil from "../../builder/_builderUtil";

/**
 * Ammo caliber.
 */
export type TCaliber = (
  { id: 0, label: 'small',   labelExact: 'small',         level: 1, atkBonus: 0 } |
  { id: 1, label: 'medium',  labelExact: 'medium',        level: 2, atkBonus: 0 } |
  { id: 2, label: 'high',    labelExact: 'high, short',   level: 3, atkBonus: 0 } |
  { id: 3, label: 'high',    labelExact: 'high',          level: 3, atkBonus: 0 } |
  { id: 4, label: 'high',    labelExact: 'high, shotgun', level: 3, atkBonus: 0 } |
  { id: 5, label: 'heavy',   labelExact: 'heavy',         level: 4, atkBonus: 1 } |
  { id: 6, label: 'super',   labelExact: 'super',         level: 5, atkBonus: 2 } |
  { id: 7, label: 'warhead', labelExact: 'warhead',       level: 6, atkBonus: 0 }
);


/**
 * Ammo caliber palette/array.
 */
export default class Caliber implements BuilderUtil {
  static small       : TCaliber = { id: 0, label: 'small',   labelExact: 'small',         level: 1, atkBonus: 0 };
  static medium      : TCaliber = { id: 1, label: 'medium',  labelExact: 'medium',        level: 2, atkBonus: 0 };
  static highShort   : TCaliber = { id: 2, label: 'high',    labelExact: 'high, short',   level: 3, atkBonus: 0 };
  static high        : TCaliber = { id: 3, label: 'high',    labelExact: 'high',          level: 3, atkBonus: 0 };
  static highShotgun : TCaliber = { id: 4, label: 'high',    labelExact: 'high, shotgun', level: 3, atkBonus: 0 };
  static heavy       : TCaliber = { id: 5, label: 'heavy',   labelExact: 'heavy',         level: 4, atkBonus: 1 };
  static super       : TCaliber = { id: 6, label: 'super',   labelExact: 'super',         level: 5, atkBonus: 2 };
  static warhead     : TCaliber = { id: 7, label: 'warhead', labelExact: 'warhead',       level: 6, atkBonus: 0 };

  static lookup(lookupCaliber: TCaliber): {caliberMod: number} {
    switch (lookupCaliber.id) {
      case 0: return {caliberMod: 1};
      case 1: return {caliberMod: 2};
      case 2: return {caliberMod: 2};
      case 3: return {caliberMod: 3};
      case 4: return {caliberMod: 3};
      case 5: return {caliberMod: 4};
      case 6: return {caliberMod: 5};
      case 7: return {caliberMod: 5};
    }
  }
};