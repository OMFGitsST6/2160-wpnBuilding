/* * * OPTION PROPERTIES * * */
interface OptionPropertyBase {
  value: undefined | boolean | number | string;
  readonly update?: (...args: any[]) => undefined | boolean | number | string;
}
export interface OptionPropertyBoolean extends OptionPropertyBase {
  value: undefined | boolean;
  readonly update?: (...args: any[]) => undefined | boolean;
}

/* * * BASE OPTIONS * * */
class BaseOption {
  readonly name: string;
  allow: OptionPropertyBoolean;
  error: OptionPropertyBoolean;
  userValue?: boolean | number;
  special?: string[];

  constructor(
    name: string,
    allow: OptionPropertyBoolean,
    error: OptionPropertyBoolean,
    userValue?: boolean | number,
    special?: string[]
  ) {
    this.name = name;
    this.allow = allow;
    this.error = error;
    this.userValue = userValue;
    this.special = special;
  }
}
export class BooleanOption extends BaseOption {
  userValue?: boolean;

  constructor(
    name: string,
    allow: OptionPropertyBoolean,
    error: OptionPropertyBoolean,
    userValue?: boolean,
    special?: string[]
  ) {
    super(name, allow, error, userValue, special);
    this.userValue = userValue;
  }
}
export class IntegerOption extends BaseOption {
  userValue?: number;
  userValueMin?: number;
  userValueMax?: number;

    constructor(
    name: string,
    allow: OptionPropertyBoolean,
    error: OptionPropertyBoolean,
    userValue?: number,
    special?: string[]
  ) {
    super(name, allow, error, userValue, special);
    this.userValue = userValue;
  }
}