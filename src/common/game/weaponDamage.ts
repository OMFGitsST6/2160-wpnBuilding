import BuilderUtil from "../../builder/_builderUtil";
import Dice from "./dice";


/**
 * Weapon damage palette/array.
 */
export default class WeaponDamage implements BuilderUtil {
  static lookup(lookupGrade: number) {
    const gradeDamage = [
      new Dice( 1,  1    ), //0
      new Dice( 1,  6    ), //1  -> 1d6
      new Dice( 1,  8    ), //2  -> 1d8
      new Dice( 2,  4    ), //3  -> 2d4
      new Dice( 2,  6    ), //4  -> 2d6
      new Dice( 2,  8    ), //5  -> 2d8
      new Dice( 2, 10    ), //6  -> 2d10
      new Dice( 3,  6    ), //7  -> 3d6
      new Dice( 2, 12    ), //8  -> 2d12
      new Dice( 2,  8, 4 ), //9  -> 2d8+4
      new Dice( 4,  6    ), //10 -> 4d6
      new Dice( 2, 10, 4 ), //11 -> 2d10+4
      new Dice( 3, 10    ), //12 -> 3d10
      new Dice( 3, 12    ), //13 -> 3d12
      new Dice( 3, 12, 4 ), //14 -> 3d12+4
      new Dice( 4, 12    ), //15 -> 4d12
      new Dice( 4, 12, 4 ), //16 -> 4d12+4
      new Dice( 5, 12, 4 ), //17 -> 5d12+4
      new Dice( 4, 12, 10), //18 -> 4d12+10
      new Dice( 6, 10, 6 ), //19 -> 6d10+6
      new Dice( 4, 10, 20), //20 -> 4d10+20
      new Dice(10,  8    ), //21 -> 10d8
      new Dice( 4, 12, 20), //22 -> 4d12+20
      new Dice( 5, 10, 20), //23 -> 5d10+20
      new Dice( 6, 12, 10), //24 -> 6d12+10
      new Dice(10, 10    ), //25 -> 10d10
      new Dice(10, 12    ), //26 -> 10d12
    ];
    return gradeDamage[lookupGrade]
  }
};

//TODO: determine if this class is needed