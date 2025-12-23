import type { WeaponBase } from "../builderWeapon";
import type { TCaliber } from "../../common/game/caliber";
import WeaponSize, { type TWeaponSize } from "../../common/game/weaponSize";
import { BooleanOption, IntegerOption, type OptionPropertyBoolean, type OptionPropertyNumber } from "./option";

/* * * STAGE 1 CHASSIS * * */
export class ChassisOption extends BooleanOption {
  readonly caliber: TCaliber;
  readonly dmgGrade: number;
  readonly range: number;
  readonly rofGrade: number;
  readonly volume: number;
  readonly size: TWeaponSize;
  readonly weight: number;
  readonly absorption: number;
  readonly crCost: number;

  constructor(
    name: string,
    allow: OptionPropertyBoolean,
    error: OptionPropertyBoolean,

    caliber: TCaliber,
    dmgGrade: number,
    range: number,
    rofGrade: number,
    volume: number,
    size: TWeaponSize,
    weight: number,
    absorption: number,
    crCost: number,
    
    userValue?: boolean,
    special?: string[]
  ) {
    super(name, allow, error, userValue, special);

    this.caliber = caliber;
    this.dmgGrade = dmgGrade;
    this.range = range;
    this.rofGrade = rofGrade;
    this.volume = volume;
    this.size = size;
    this.weight = weight;
    this.absorption = absorption;
    this.crCost = crCost;
  }
}

/* * * STAGE 1 BARREL NUMBER * * */
export class NumBarrelsOption extends IntegerOption {
  rofGrade: OptionPropertyNumber;

  constructor(
    name: string,
    allow: OptionPropertyBoolean,
    error: OptionPropertyBoolean,

    rofGrade: OptionPropertyNumber,

    userValue?: number
  ) {
    super(name, allow, error, userValue, undefined);
    this.userValue = undefined;
    this.userValueMin = 1;
    this.userValueMax = 99;

    this.rofGrade = rofGrade;
  }

  /* UNIQUE HELPERS */
  update(stage1Data: WeaponBase) {   
    //Update max barrels
    this.userValueMax = WeaponSize.lookup(stage1Data.size).barrelMax;

    //Recalculate RoF
    if (this.rofGrade.update) this.rofGrade.value = this.rofGrade.update(stage1Data); // this.rofGrade.value = stage1Data.rofGrade + (this.userValue || 0);
  }
}