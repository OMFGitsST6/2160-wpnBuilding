import BuilderUtil from "../../builder/_builderUtil";

/**
 * Weapon size.
 */
export type TWeaponSize = (
  { id: 0,  label: 'tiny',    aboveFine: 2 } |
  { id: 1,  label: 'small',   aboveFine: 3 } |
  { id: 2,  label: 'medium1', aboveFine: 4 } |
  { id: 3,  label: 'medium2', aboveFine: 4 } |
  { id: 4,  label: 'large1',  aboveFine: 5 } |
  { id: 5,  label: 'large2',  aboveFine: 5 } |
  { id: 6,  label: 'huge1',   aboveFine: 6 } |
  { id: 7,  label: 'huge2',   aboveFine: 6 } |
  { id: 8,  label: 'huge3',   aboveFine: 6 }
);

/**
 * Weapon size palette/array.
 */
export default class WeaponSize implements BuilderUtil {
  static tiny    : TWeaponSize = { id: 0,  label: 'tiny',    aboveFine: 2 };
  static small   : TWeaponSize = { id: 1,  label: 'small',   aboveFine: 3 };
  static medium1 : TWeaponSize = { id: 2,  label: 'medium1', aboveFine: 4 };
  static medium2 : TWeaponSize = { id: 3,  label: 'medium2', aboveFine: 4 };
  static large1  : TWeaponSize = { id: 4,  label: 'large1',  aboveFine: 5 };
  static large2  : TWeaponSize = { id: 5,  label: 'large2',  aboveFine: 5 };
  static huge1   : TWeaponSize = { id: 6,  label: 'huge1',   aboveFine: 6 };
  static huge2   : TWeaponSize = { id: 7,  label: 'huge2',   aboveFine: 6 };
  static huge3   : TWeaponSize = { id: 8,  label: 'huge3',   aboveFine: 6 };

  static lookup(lookupSize: TWeaponSize): {barrelMax: number, feedMax: number} {
    switch (lookupSize.id) {
      case 0: return { barrelMax: 2,    feedMax: 1   };
      case 1: return { barrelMax: 2,    feedMax: 1   };
      case 2: return { barrelMax: 2,    feedMax: 2   };
      case 3: return { barrelMax: 3.25, feedMax: 2.5 };
      case 4: return { barrelMax: 2,    feedMax: 3   };
      case 5: return { barrelMax: 4,    feedMax: 3.5 };
      case 6: return { barrelMax: 4.5,  feedMax: 4   };
      case 7: return { barrelMax: 6,    feedMax: 4.5 };
      case 8: return { barrelMax: 10,   feedMax: 5   };
    }
  }
};