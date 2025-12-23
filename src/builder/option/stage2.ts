import type { Stage1Data } from "../builderWeapon";
import CritRange from "../../common/game/critRange";
import type { TCaliber } from "../../common/game/caliber";
import type Dice from "../../common/game/dice";
import WeaponSize, { type TWeaponSize } from "../../common/game/weaponSize";
import { BooleanOption, IntegerOption, type OptionPropertyBoolean } from "./option";
import WeaponDamage from "../../common/game/weaponDamage";
import MiscUtil from "../../common/_miscUtil";
import Caliber from "../../common/game/caliber";

/* * * STAGE 1 OPTIONS * * */
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
export class NumBarrelsOption extends IntegerOption {
  constructor(
    name: string,
    allow: OptionPropertyBoolean,
    error: OptionPropertyBoolean,

    userValue?: number
  ) {
    super(name, allow, error, userValue, undefined);
    this.userValue = undefined;
    this.userValueMin = 1;
    this.userValueMax = 99;
  }

  /* UNIQUE HELPERS */
  update(stage1Data: Stage1Data) {   
    //Update max barrels
    this.userValueMax = WeaponSize.lookup(stage1Data.size).barrelMax;
  }
}

/* * * STAGE 2 OPTIONS * * */
export class AmmoOption extends BooleanOption {
  readonly caliber: TCaliber;
  readonly bulk: number;
  readonly dmgGrade: number;
  readonly type: string;

  damage: Dice;
  critical: CritRange;
  range: number;
  rofGrade: number;
  capacity: number;

  constructor(
    name: string,
    allow: OptionPropertyBoolean,
    error: OptionPropertyBoolean,

    caliber: TCaliber,
    bulk: number,
    dmgGrade: number,
    type: string,

    damage: Dice,
    critical: CritRange,
    range: number,
    rofGrade: number,
    capacity: number,

    userValue?: boolean
  ) {
    super(name, allow, error, userValue, undefined);
    this.userValue = undefined;

    this.caliber = caliber;
    this.bulk = bulk;
    this.dmgGrade = dmgGrade;
    this.type = type;

    this.damage = damage;
    this.critical = critical;
    this.range = range;
    this.rofGrade = rofGrade;
    this.capacity = capacity;
  }

  //TODO: This
  update(stage1Data: Stage1Data) {
    /* Update damage dice if option has a grade */
    this.damage = this.dmgGrade ? WeaponDamage.lookup(this.dmgGrade) : this.damage;

    /* Update critical */
    this.critical = new CritRange(20, MiscUtil.median(
      2,
      Math.floor((this.dmgGrade + stage1Data.dmgGrade) / Math.min(this.bulk, 2) / 5),
      4
    ));

    /* Update range */
    this.range = MiscUtil.mround(Math.min(
      80,
      stage1Data.range / (this.bulk + (Caliber.lookup(this.caliber).caliberMod / 20))
    ), 10);

    /* Update rate of fire grade */
    this.rofGrade = Math.round(
      stage1Data.rofGrade / (this.bulk * Math.sqrt(Caliber.lookup(this.caliber).caliberMod))
    );

    /* Update ammo capacity */
    this.capacity = Math.max(
      Math.floor(stage1Data.volume / (Caliber.lookup(this.caliber).caliberMod * this.bulk) / stage1Data.numBarrels)
    );
  }
}