
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model address
 */

export type address = {
  registration_no: string
  address: string
  phone_no: string | null
  mobile_no: string | null
  latitude: Prisma.Decimal | null
  longitude: Prisma.Decimal | null
}

/**
 * Model booking
 */

export type booking = {
  id: string
  booked_at: Date
  mobile_no: string
  name: string | null
  sex: booking_sex
  bed_type: booking_bed_type
  booked_for: booking_booked_for | null
  cancelled_at: Date | null
  registration_no: string
  status: booking_status
  remarks: string | null
  last_updated: Date
}

/**
 * Model capacity
 */

export type capacity = {
  registration_no: string
  total_capacity: number
  ward: number | null
  special_ward: number | null
  cabin: number | null
  vip_cabin: number | null
  icu: number | null
  ccu: number | null
  hdu: number | null
  hfncu: number | null
  emergency: number | null
  covid: number | null
  extra: number | null
}

/**
 * Model hospital
 */

export type hospital = {
  registration_no: string
  hospital_name: string
  description: string | null
  hospital_type: hospital_hospital_type
  bed_type: string
  image_source: string
  website: string | null
  joined_on: Date
  status: hospital_status
}

/**
 * Model log
 */

export type log = {
  logged_at: Date
  registration_no: string
  task: string
  mobile_no: string
  role: log_role
}

/**
 * Model staff
 */

export type staff = {
  mobile_no: string
  password: string
  name: string
  email: string
  role: staff_role
  status: staff_status
  registration_no: string
  joined_on: Date
  last_updated: Date
}

/**
 * Model user
 */

export type user = {
  mobile_no: string
  password: string
  name: string
  sex: user_sex
  dob: Date
  email: string | null
  document_id: string | null
  joined_on: Date
}

/**
 * Model vacant_bed_log
 */

export type vacant_bed_log = {
  registration_no: string
  last_updated: Date
  ward: number | null
  special_ward: number | null
  cabin: number | null
  vip_cabin: number | null
  icu: number | null
  ccu: number | null
  hdu: number | null
  hfncu: number | null
  emergency: number | null
  covid: number | null
  extra: number | null
}

/**
 * Model amenity
 */

export type amenity = {
  registration_no: string
  atm: boolean | null
  baby_corner: boolean | null
  cafeteria: boolean | null
  gift_shop: boolean | null
  locker: boolean | null
  parking: boolean | null
  pharmacy: boolean | null
  prayer_area: boolean | null
  wheelchair: boolean | null
  wifi: boolean | null
}

/**
 * Model blood_analytical_service
 */

export type blood_analytical_service = {
  registration_no: string
  antibody_analysis: boolean | null
  cbc: boolean | null
  creatinine_analysis: boolean | null
  crp: boolean | null
  esr: boolean | null
  fobt: boolean | null
  hematocrit: boolean | null
  kidney_function_analysis: boolean | null
  lipid_profile: boolean | null
  liver_function_analysis: boolean | null
  rf: boolean | null
  serum_analysis: boolean | null
  sr: boolean | null
}

/**
 * Model diagnostic_imaging_service
 */

export type diagnostic_imaging_service = {
  registration_no: string
  angiocardiography: boolean | null
  angiography: boolean | null
  cta: boolean | null
  ct: boolean | null
  coloscopy: boolean | null
  cystoscopy: boolean | null
  echocardiography: boolean | null
  endoscopy: boolean | null
  fluoroscopy: boolean | null
  mra: boolean | null
  mri: boolean | null
  mrs: boolean | null
  mammography: boolean | null
  pet: boolean | null
  pet_ct: boolean | null
  spect: boolean | null
  ultrasound: boolean | null
  x_ray: boolean | null
}

/**
 * Model doctor
 */

export type doctor = {
  id: string
  registration_no: string
  name: string
  designation: string
  chamber: string | null
  bio: string | null
  joined_on: Date
}

/**
 * Model general_service
 */

export type general_service = {
  registration_no: string
  autopsy: boolean | null
  biopsy: boolean | null
  blood_bank: boolean | null
  bronchoscopy: boolean | null
  ecg: boolean | null
  echocardiography: boolean | null
  emg: boolean | null
  laparoscopy: boolean | null
  phonocardiography: boolean | null
  urinalysis: boolean | null
}

/**
 * Model schedule
 */

export type schedule = {
  id: string
  day: schedule_day
  start_time: Date
  end_time: Date
  last_updated: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const booking_sex: {
  M: 'M',
  F: 'F',
  T: 'T',
  S: 'S'
};

export type booking_sex = (typeof booking_sex)[keyof typeof booking_sex]


export const booking_bed_type: {
  Ward: 'Ward',
  Special_Ward: 'Special_Ward',
  Cabin: 'Cabin',
  VIP_Cabin: 'VIP_Cabin',
  ICU: 'ICU',
  CCU: 'CCU',
  HDU: 'HDU',
  HFNCU: 'HFNCU',
  Emergency: 'Emergency',
  COVID: 'COVID',
  Extra: 'Extra'
};

export type booking_bed_type = (typeof booking_bed_type)[keyof typeof booking_bed_type]


export const booking_booked_for: {
  Self: 'Self',
  Father: 'Father',
  Mother: 'Mother',
  Brother: 'Brother',
  Sister: 'Sister',
  Relative: 'Relative',
  Friend: 'Friend',
  Stranger: 'Stranger'
};

export type booking_booked_for = (typeof booking_booked_for)[keyof typeof booking_booked_for]


export const booking_status: {
  Requested: 'Requested',
  Booked: 'Booked',
  Served: 'Served',
  Cancelled: 'Cancelled'
};

export type booking_status = (typeof booking_status)[keyof typeof booking_status]


export const hospital_hospital_type: {
  Public: 'Public',
  Private: 'Private'
};

export type hospital_hospital_type = (typeof hospital_hospital_type)[keyof typeof hospital_hospital_type]


export const hospital_status: {
  public: 'public',
  private: 'private',
  deleted: 'deleted'
};

export type hospital_status = (typeof hospital_status)[keyof typeof hospital_status]


export const log_role: {
  Admin: 'Admin',
  DB_Manager: 'DB_Manager',
  Moderator: 'Moderator'
};

export type log_role = (typeof log_role)[keyof typeof log_role]


export const staff_role: {
  Admin: 'Admin',
  DB_Manager: 'DB_Manager',
  Moderator: 'Moderator'
};

export type staff_role = (typeof staff_role)[keyof typeof staff_role]


export const staff_status: {
  Active: 'Active',
  Inactive: 'Inactive'
};

export type staff_status = (typeof staff_status)[keyof typeof staff_status]


export const user_sex: {
  M: 'M',
  F: 'F',
  T: 'T',
  S: 'S'
};

export type user_sex = (typeof user_sex)[keyof typeof user_sex]


export const schedule_day: {
  R: 'R',
  S: 'S',
  M: 'M',
  T: 'T',
  W: 'W',
  A: 'A',
  F: 'F'
};

export type schedule_day = (typeof schedule_day)[keyof typeof schedule_day]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Addresses
 * const addresses = await prisma.address.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Addresses
   * const addresses = await prisma.address.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.address`: Exposes CRUD operations for the **address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.addressDelegate<GlobalReject>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.bookingDelegate<GlobalReject>;

  /**
   * `prisma.capacity`: Exposes CRUD operations for the **capacity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Capacities
    * const capacities = await prisma.capacity.findMany()
    * ```
    */
  get capacity(): Prisma.capacityDelegate<GlobalReject>;

  /**
   * `prisma.hospital`: Exposes CRUD operations for the **hospital** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hospitals
    * const hospitals = await prisma.hospital.findMany()
    * ```
    */
  get hospital(): Prisma.hospitalDelegate<GlobalReject>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.logDelegate<GlobalReject>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.staffDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<GlobalReject>;

  /**
   * `prisma.vacant_bed_log`: Exposes CRUD operations for the **vacant_bed_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vacant_bed_logs
    * const vacant_bed_logs = await prisma.vacant_bed_log.findMany()
    * ```
    */
  get vacant_bed_log(): Prisma.vacant_bed_logDelegate<GlobalReject>;

  /**
   * `prisma.amenity`: Exposes CRUD operations for the **amenity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Amenities
    * const amenities = await prisma.amenity.findMany()
    * ```
    */
  get amenity(): Prisma.amenityDelegate<GlobalReject>;

  /**
   * `prisma.blood_analytical_service`: Exposes CRUD operations for the **blood_analytical_service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blood_analytical_services
    * const blood_analytical_services = await prisma.blood_analytical_service.findMany()
    * ```
    */
  get blood_analytical_service(): Prisma.blood_analytical_serviceDelegate<GlobalReject>;

  /**
   * `prisma.diagnostic_imaging_service`: Exposes CRUD operations for the **diagnostic_imaging_service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diagnostic_imaging_services
    * const diagnostic_imaging_services = await prisma.diagnostic_imaging_service.findMany()
    * ```
    */
  get diagnostic_imaging_service(): Prisma.diagnostic_imaging_serviceDelegate<GlobalReject>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.doctorDelegate<GlobalReject>;

  /**
   * `prisma.general_service`: Exposes CRUD operations for the **general_service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more General_services
    * const general_services = await prisma.general_service.findMany()
    * ```
    */
  get general_service(): Prisma.general_serviceDelegate<GlobalReject>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.scheduleDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.0.1
   * Query Engine version: 2452cc6313d52b8b9a96999ac0e974d0aedf88db
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    address: 'address',
    booking: 'booking',
    capacity: 'capacity',
    hospital: 'hospital',
    log: 'log',
    staff: 'staff',
    user: 'user',
    vacant_bed_log: 'vacant_bed_log',
    amenity: 'amenity',
    blood_analytical_service: 'blood_analytical_service',
    diagnostic_imaging_service: 'diagnostic_imaging_service',
    doctor: 'doctor',
    general_service: 'general_service',
    schedule: 'schedule'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type HospitalCountOutputType
   */


  export type HospitalCountOutputType = {
    booking: number
    doctor: number
    log: number
    staff: number
    vacant_bed_log: number
  }

  export type HospitalCountOutputTypeSelect = {
    booking?: boolean
    doctor?: boolean
    log?: boolean
    staff?: boolean
    vacant_bed_log?: boolean
  }

  export type HospitalCountOutputTypeGetPayload<
    S extends boolean | null | undefined | HospitalCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? HospitalCountOutputType
    : S extends undefined
    ? never
    : S extends HospitalCountOutputTypeArgs
    ?'include' extends U
    ? HospitalCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof HospitalCountOutputType ?HospitalCountOutputType [P]
  : 
     never
  } 
    : HospitalCountOutputType
  : HospitalCountOutputType




  // Custom InputTypes

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the HospitalCountOutputType
     * 
    **/
    select?: HospitalCountOutputTypeSelect | null
  }



  /**
   * Count Type StaffCountOutputType
   */


  export type StaffCountOutputType = {
    log: number
  }

  export type StaffCountOutputTypeSelect = {
    log?: boolean
  }

  export type StaffCountOutputTypeGetPayload<
    S extends boolean | null | undefined | StaffCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? StaffCountOutputType
    : S extends undefined
    ? never
    : S extends StaffCountOutputTypeArgs
    ?'include' extends U
    ? StaffCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof StaffCountOutputType ?StaffCountOutputType [P]
  : 
     never
  } 
    : StaffCountOutputType
  : StaffCountOutputType




  // Custom InputTypes

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     * 
    **/
    select?: StaffCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    booking: number
  }

  export type UserCountOutputTypeSelect = {
    booking?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UserCountOutputType ?UserCountOutputType [P]
  : 
     never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type DoctorCountOutputType
   */


  export type DoctorCountOutputType = {
    schedule: number
  }

  export type DoctorCountOutputTypeSelect = {
    schedule?: boolean
  }

  export type DoctorCountOutputTypeGetPayload<
    S extends boolean | null | undefined | DoctorCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? DoctorCountOutputType
    : S extends undefined
    ? never
    : S extends DoctorCountOutputTypeArgs
    ?'include' extends U
    ? DoctorCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof DoctorCountOutputType ?DoctorCountOutputType [P]
  : 
     never
  } 
    : DoctorCountOutputType
  : DoctorCountOutputType




  // Custom InputTypes

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     * 
    **/
    select?: DoctorCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model address
   */


  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type AddressSumAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type AddressMinAggregateOutputType = {
    registration_no: string | null
    address: string | null
    phone_no: string | null
    mobile_no: string | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type AddressMaxAggregateOutputType = {
    registration_no: string | null
    address: string | null
    phone_no: string | null
    mobile_no: string | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type AddressCountAggregateOutputType = {
    registration_no: number
    address: number
    phone_no: number
    mobile_no: number
    latitude: number
    longitude: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type AddressSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type AddressMinAggregateInputType = {
    registration_no?: true
    address?: true
    phone_no?: true
    mobile_no?: true
    latitude?: true
    longitude?: true
  }

  export type AddressMaxAggregateInputType = {
    registration_no?: true
    address?: true
    phone_no?: true
    mobile_no?: true
    latitude?: true
    longitude?: true
  }

  export type AddressCountAggregateInputType = {
    registration_no?: true
    address?: true
    phone_no?: true
    mobile_no?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type AddressAggregateArgs = {
    /**
     * Filter which address to aggregate.
     * 
    **/
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<addressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }


    
    
  export type AddressGroupByArgs = {
    where?: addressWhereInput
    orderBy?: Enumerable<addressOrderByWithAggregationInput>
    by: Array<AddressScalarFieldEnum>
    having?: addressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }


  export type AddressGroupByOutputType = {
    registration_no: string
    address: string
    phone_no: string | null
    mobile_no: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Promise<
    Array<
      PickArray<AddressGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], AddressGroupByOutputType[P]> 
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      > 
    >


  export type addressSelect = {
    registration_no?: boolean
    address?: boolean
    phone_no?: boolean
    mobile_no?: boolean
    latitude?: boolean
    longitude?: boolean
    hospital?: boolean | hospitalArgs
  }

  export type addressInclude = {
    hospital?: boolean | hospitalArgs
  }

  export type addressGetPayload<
    S extends boolean | null | undefined | addressArgs,
    U = keyof S
      > = S extends true
        ? address
    : S extends undefined
    ? never
    : S extends addressArgs | addressFindManyArgs
    ?'include' extends U
    ? address  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'hospital'
        ? hospitalGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof address ?address [P]
  : 
          P extends 'hospital'
        ? hospitalGetPayload<S['select'][P]> : never
  } 
    : address
  : address


  type addressCountArgs = Merge<
    Omit<addressFindManyArgs, 'select' | 'include'> & {
      select?: AddressCountAggregateInputType | true
    }
  >

  export interface addressDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Address that matches the filter.
     * @param {addressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends addressFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, addressFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'address'> extends True ? CheckSelect<T, Prisma__addressClient<address>, Prisma__addressClient<addressGetPayload<T>>> : CheckSelect<T, Prisma__addressClient<address | null >, Prisma__addressClient<addressGetPayload<T> | null >>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends addressFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, addressFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'address'> extends True ? CheckSelect<T, Prisma__addressClient<address>, Prisma__addressClient<addressGetPayload<T>>> : CheckSelect<T, Prisma__addressClient<address | null >, Prisma__addressClient<addressGetPayload<T> | null >>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `registration_no`
     * const addressWithRegistration_noOnly = await prisma.address.findMany({ select: { registration_no: true } })
     * 
    **/
    findMany<T extends addressFindManyArgs>(
      args?: SelectSubset<T, addressFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<address>>, PrismaPromise<Array<addressGetPayload<T>>>>

    /**
     * Create a Address.
     * @param {addressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
    **/
    create<T extends addressCreateArgs>(
      args: SelectSubset<T, addressCreateArgs>
    ): CheckSelect<T, Prisma__addressClient<address>, Prisma__addressClient<addressGetPayload<T>>>

    /**
     * Create many Addresses.
     *     @param {addressCreateManyArgs} args - Arguments to create many Addresses.
     *     @example
     *     // Create many Addresses
     *     const address = await prisma.address.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends addressCreateManyArgs>(
      args?: SelectSubset<T, addressCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {addressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
    **/
    delete<T extends addressDeleteArgs>(
      args: SelectSubset<T, addressDeleteArgs>
    ): CheckSelect<T, Prisma__addressClient<address>, Prisma__addressClient<addressGetPayload<T>>>

    /**
     * Update one Address.
     * @param {addressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends addressUpdateArgs>(
      args: SelectSubset<T, addressUpdateArgs>
    ): CheckSelect<T, Prisma__addressClient<address>, Prisma__addressClient<addressGetPayload<T>>>

    /**
     * Delete zero or more Addresses.
     * @param {addressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends addressDeleteManyArgs>(
      args?: SelectSubset<T, addressDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends addressUpdateManyArgs>(
      args: SelectSubset<T, addressUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {addressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
    **/
    upsert<T extends addressUpsertArgs>(
      args: SelectSubset<T, addressUpsertArgs>
    ): CheckSelect<T, Prisma__addressClient<address>, Prisma__addressClient<addressGetPayload<T>>>

    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends addressCountArgs>(
      args?: Subset<T, addressCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__addressClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    hospital<T extends hospitalArgs = {}>(args?: Subset<T, hospitalArgs>): CheckSelect<T, Prisma__hospitalClient<hospital | null >, Prisma__hospitalClient<hospitalGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * address findUnique
   */
  export type addressFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the address
     * 
    **/
    select?: addressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: addressInclude | null
    /**
     * Throw an Error if a address can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which address to fetch.
     * 
    **/
    where: addressWhereUniqueInput
  }


  /**
   * address findFirst
   */
  export type addressFindFirstArgs = {
    /**
     * Select specific fields to fetch from the address
     * 
    **/
    select?: addressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: addressInclude | null
    /**
     * Throw an Error if a address can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which address to fetch.
     * 
    **/
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<addressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     * 
    **/
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     * 
    **/
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * address findMany
   */
  export type addressFindManyArgs = {
    /**
     * Select specific fields to fetch from the address
     * 
    **/
    select?: addressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: addressInclude | null
    /**
     * Filter, which addresses to fetch.
     * 
    **/
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<addressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing addresses.
     * 
    **/
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * address create
   */
  export type addressCreateArgs = {
    /**
     * Select specific fields to fetch from the address
     * 
    **/
    select?: addressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: addressInclude | null
    /**
     * The data needed to create a address.
     * 
    **/
    data: XOR<addressCreateInput, addressUncheckedCreateInput>
  }


  /**
   * address createMany
   */
  export type addressCreateManyArgs = {
    data: Enumerable<addressCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * address update
   */
  export type addressUpdateArgs = {
    /**
     * Select specific fields to fetch from the address
     * 
    **/
    select?: addressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: addressInclude | null
    /**
     * The data needed to update a address.
     * 
    **/
    data: XOR<addressUpdateInput, addressUncheckedUpdateInput>
    /**
     * Choose, which address to update.
     * 
    **/
    where: addressWhereUniqueInput
  }


  /**
   * address updateMany
   */
  export type addressUpdateManyArgs = {
    data: XOR<addressUpdateManyMutationInput, addressUncheckedUpdateManyInput>
    where?: addressWhereInput
  }


  /**
   * address upsert
   */
  export type addressUpsertArgs = {
    /**
     * Select specific fields to fetch from the address
     * 
    **/
    select?: addressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: addressInclude | null
    /**
     * The filter to search for the address to update in case it exists.
     * 
    **/
    where: addressWhereUniqueInput
    /**
     * In case the address found by the `where` argument doesn't exist, create a new address with this data.
     * 
    **/
    create: XOR<addressCreateInput, addressUncheckedCreateInput>
    /**
     * In case the address was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<addressUpdateInput, addressUncheckedUpdateInput>
  }


  /**
   * address delete
   */
  export type addressDeleteArgs = {
    /**
     * Select specific fields to fetch from the address
     * 
    **/
    select?: addressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: addressInclude | null
    /**
     * Filter which address to delete.
     * 
    **/
    where: addressWhereUniqueInput
  }


  /**
   * address deleteMany
   */
  export type addressDeleteManyArgs = {
    where?: addressWhereInput
  }


  /**
   * address without action
   */
  export type addressArgs = {
    /**
     * Select specific fields to fetch from the address
     * 
    **/
    select?: addressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: addressInclude | null
  }



  /**
   * Model booking
   */


  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    booked_at: Date | null
    mobile_no: string | null
    name: string | null
    sex: booking_sex | null
    bed_type: booking_bed_type | null
    booked_for: booking_booked_for | null
    cancelled_at: Date | null
    registration_no: string | null
    status: booking_status | null
    remarks: string | null
    last_updated: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    booked_at: Date | null
    mobile_no: string | null
    name: string | null
    sex: booking_sex | null
    bed_type: booking_bed_type | null
    booked_for: booking_booked_for | null
    cancelled_at: Date | null
    registration_no: string | null
    status: booking_status | null
    remarks: string | null
    last_updated: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    booked_at: number
    mobile_no: number
    name: number
    sex: number
    bed_type: number
    booked_for: number
    cancelled_at: number
    registration_no: number
    status: number
    remarks: number
    last_updated: number
    _all: number
  }


  export type BookingMinAggregateInputType = {
    id?: true
    booked_at?: true
    mobile_no?: true
    name?: true
    sex?: true
    bed_type?: true
    booked_for?: true
    cancelled_at?: true
    registration_no?: true
    status?: true
    remarks?: true
    last_updated?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    booked_at?: true
    mobile_no?: true
    name?: true
    sex?: true
    bed_type?: true
    booked_for?: true
    cancelled_at?: true
    registration_no?: true
    status?: true
    remarks?: true
    last_updated?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    booked_at?: true
    mobile_no?: true
    name?: true
    sex?: true
    bed_type?: true
    booked_for?: true
    cancelled_at?: true
    registration_no?: true
    status?: true
    remarks?: true
    last_updated?: true
    _all?: true
  }

  export type BookingAggregateArgs = {
    /**
     * Filter which booking to aggregate.
     * 
    **/
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     * 
    **/
    orderBy?: Enumerable<bookingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }


    
    
  export type BookingGroupByArgs = {
    where?: bookingWhereInput
    orderBy?: Enumerable<bookingOrderByWithAggregationInput>
    by: Array<BookingScalarFieldEnum>
    having?: bookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }


  export type BookingGroupByOutputType = {
    id: string
    booked_at: Date
    mobile_no: string
    name: string | null
    sex: booking_sex
    bed_type: booking_bed_type
    booked_for: booking_booked_for | null
    cancelled_at: Date | null
    registration_no: string
    status: booking_status
    remarks: string | null
    last_updated: Date
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Promise<
    Array<
      PickArray<BookingGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], BookingGroupByOutputType[P]> 
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      > 
    >


  export type bookingSelect = {
    id?: boolean
    booked_at?: boolean
    mobile_no?: boolean
    name?: boolean
    sex?: boolean
    bed_type?: boolean
    booked_for?: boolean
    cancelled_at?: boolean
    registration_no?: boolean
    status?: boolean
    remarks?: boolean
    last_updated?: boolean
    user?: boolean | userArgs
    hospital?: boolean | hospitalArgs
  }

  export type bookingInclude = {
    user?: boolean | userArgs
    hospital?: boolean | hospitalArgs
  }

  export type bookingGetPayload<
    S extends boolean | null | undefined | bookingArgs,
    U = keyof S
      > = S extends true
        ? booking
    : S extends undefined
    ? never
    : S extends bookingArgs | bookingFindManyArgs
    ?'include' extends U
    ? booking  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? userGetPayload<S['include'][P]> :
        P extends 'hospital'
        ? hospitalGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof booking ?booking [P]
  : 
          P extends 'user'
        ? userGetPayload<S['select'][P]> :
        P extends 'hospital'
        ? hospitalGetPayload<S['select'][P]> : never
  } 
    : booking
  : booking


  type bookingCountArgs = Merge<
    Omit<bookingFindManyArgs, 'select' | 'include'> & {
      select?: BookingCountAggregateInputType | true
    }
  >

  export interface bookingDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Booking that matches the filter.
     * @param {bookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends bookingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, bookingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'booking'> extends True ? CheckSelect<T, Prisma__bookingClient<booking>, Prisma__bookingClient<bookingGetPayload<T>>> : CheckSelect<T, Prisma__bookingClient<booking | null >, Prisma__bookingClient<bookingGetPayload<T> | null >>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends bookingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, bookingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'booking'> extends True ? CheckSelect<T, Prisma__bookingClient<booking>, Prisma__bookingClient<bookingGetPayload<T>>> : CheckSelect<T, Prisma__bookingClient<booking | null >, Prisma__bookingClient<bookingGetPayload<T> | null >>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends bookingFindManyArgs>(
      args?: SelectSubset<T, bookingFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<booking>>, PrismaPromise<Array<bookingGetPayload<T>>>>

    /**
     * Create a Booking.
     * @param {bookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
    **/
    create<T extends bookingCreateArgs>(
      args: SelectSubset<T, bookingCreateArgs>
    ): CheckSelect<T, Prisma__bookingClient<booking>, Prisma__bookingClient<bookingGetPayload<T>>>

    /**
     * Create many Bookings.
     *     @param {bookingCreateManyArgs} args - Arguments to create many Bookings.
     *     @example
     *     // Create many Bookings
     *     const booking = await prisma.booking.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends bookingCreateManyArgs>(
      args?: SelectSubset<T, bookingCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {bookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
    **/
    delete<T extends bookingDeleteArgs>(
      args: SelectSubset<T, bookingDeleteArgs>
    ): CheckSelect<T, Prisma__bookingClient<booking>, Prisma__bookingClient<bookingGetPayload<T>>>

    /**
     * Update one Booking.
     * @param {bookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends bookingUpdateArgs>(
      args: SelectSubset<T, bookingUpdateArgs>
    ): CheckSelect<T, Prisma__bookingClient<booking>, Prisma__bookingClient<bookingGetPayload<T>>>

    /**
     * Delete zero or more Bookings.
     * @param {bookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends bookingDeleteManyArgs>(
      args?: SelectSubset<T, bookingDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends bookingUpdateManyArgs>(
      args: SelectSubset<T, bookingUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {bookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
    **/
    upsert<T extends bookingUpsertArgs>(
      args: SelectSubset<T, bookingUpsertArgs>
    ): CheckSelect<T, Prisma__bookingClient<booking>, Prisma__bookingClient<bookingGetPayload<T>>>

    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends bookingCountArgs>(
      args?: Subset<T, bookingCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__bookingClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends userArgs = {}>(args?: Subset<T, userArgs>): CheckSelect<T, Prisma__userClient<user | null >, Prisma__userClient<userGetPayload<T> | null >>;

    hospital<T extends hospitalArgs = {}>(args?: Subset<T, hospitalArgs>): CheckSelect<T, Prisma__hospitalClient<hospital | null >, Prisma__hospitalClient<hospitalGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * booking findUnique
   */
  export type bookingFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the booking
     * 
    **/
    select?: bookingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: bookingInclude | null
    /**
     * Throw an Error if a booking can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which booking to fetch.
     * 
    **/
    where: bookingWhereUniqueInput
  }


  /**
   * booking findFirst
   */
  export type bookingFindFirstArgs = {
    /**
     * Select specific fields to fetch from the booking
     * 
    **/
    select?: bookingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: bookingInclude | null
    /**
     * Throw an Error if a booking can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which booking to fetch.
     * 
    **/
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     * 
    **/
    orderBy?: Enumerable<bookingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     * 
    **/
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     * 
    **/
    distinct?: Enumerable<BookingScalarFieldEnum>
  }


  /**
   * booking findMany
   */
  export type bookingFindManyArgs = {
    /**
     * Select specific fields to fetch from the booking
     * 
    **/
    select?: bookingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: bookingInclude | null
    /**
     * Filter, which bookings to fetch.
     * 
    **/
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     * 
    **/
    orderBy?: Enumerable<bookingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookings.
     * 
    **/
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BookingScalarFieldEnum>
  }


  /**
   * booking create
   */
  export type bookingCreateArgs = {
    /**
     * Select specific fields to fetch from the booking
     * 
    **/
    select?: bookingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: bookingInclude | null
    /**
     * The data needed to create a booking.
     * 
    **/
    data: XOR<bookingCreateInput, bookingUncheckedCreateInput>
  }


  /**
   * booking createMany
   */
  export type bookingCreateManyArgs = {
    data: Enumerable<bookingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * booking update
   */
  export type bookingUpdateArgs = {
    /**
     * Select specific fields to fetch from the booking
     * 
    **/
    select?: bookingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: bookingInclude | null
    /**
     * The data needed to update a booking.
     * 
    **/
    data: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>
    /**
     * Choose, which booking to update.
     * 
    **/
    where: bookingWhereUniqueInput
  }


  /**
   * booking updateMany
   */
  export type bookingUpdateManyArgs = {
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyInput>
    where?: bookingWhereInput
  }


  /**
   * booking upsert
   */
  export type bookingUpsertArgs = {
    /**
     * Select specific fields to fetch from the booking
     * 
    **/
    select?: bookingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: bookingInclude | null
    /**
     * The filter to search for the booking to update in case it exists.
     * 
    **/
    where: bookingWhereUniqueInput
    /**
     * In case the booking found by the `where` argument doesn't exist, create a new booking with this data.
     * 
    **/
    create: XOR<bookingCreateInput, bookingUncheckedCreateInput>
    /**
     * In case the booking was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>
  }


  /**
   * booking delete
   */
  export type bookingDeleteArgs = {
    /**
     * Select specific fields to fetch from the booking
     * 
    **/
    select?: bookingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: bookingInclude | null
    /**
     * Filter which booking to delete.
     * 
    **/
    where: bookingWhereUniqueInput
  }


  /**
   * booking deleteMany
   */
  export type bookingDeleteManyArgs = {
    where?: bookingWhereInput
  }


  /**
   * booking without action
   */
  export type bookingArgs = {
    /**
     * Select specific fields to fetch from the booking
     * 
    **/
    select?: bookingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: bookingInclude | null
  }



  /**
   * Model capacity
   */


  export type AggregateCapacity = {
    _count: CapacityCountAggregateOutputType | null
    _avg: CapacityAvgAggregateOutputType | null
    _sum: CapacitySumAggregateOutputType | null
    _min: CapacityMinAggregateOutputType | null
    _max: CapacityMaxAggregateOutputType | null
  }

  export type CapacityAvgAggregateOutputType = {
    total_capacity: number | null
    ward: number | null
    special_ward: number | null
    cabin: number | null
    vip_cabin: number | null
    icu: number | null
    ccu: number | null
    hdu: number | null
    hfncu: number | null
    emergency: number | null
    covid: number | null
    extra: number | null
  }

  export type CapacitySumAggregateOutputType = {
    total_capacity: number | null
    ward: number | null
    special_ward: number | null
    cabin: number | null
    vip_cabin: number | null
    icu: number | null
    ccu: number | null
    hdu: number | null
    hfncu: number | null
    emergency: number | null
    covid: number | null
    extra: number | null
  }

  export type CapacityMinAggregateOutputType = {
    registration_no: string | null
    total_capacity: number | null
    ward: number | null
    special_ward: number | null
    cabin: number | null
    vip_cabin: number | null
    icu: number | null
    ccu: number | null
    hdu: number | null
    hfncu: number | null
    emergency: number | null
    covid: number | null
    extra: number | null
  }

  export type CapacityMaxAggregateOutputType = {
    registration_no: string | null
    total_capacity: number | null
    ward: number | null
    special_ward: number | null
    cabin: number | null
    vip_cabin: number | null
    icu: number | null
    ccu: number | null
    hdu: number | null
    hfncu: number | null
    emergency: number | null
    covid: number | null
    extra: number | null
  }

  export type CapacityCountAggregateOutputType = {
    registration_no: number
    total_capacity: number
    ward: number
    special_ward: number
    cabin: number
    vip_cabin: number
    icu: number
    ccu: number
    hdu: number
    hfncu: number
    emergency: number
    covid: number
    extra: number
    _all: number
  }


  export type CapacityAvgAggregateInputType = {
    total_capacity?: true
    ward?: true
    special_ward?: true
    cabin?: true
    vip_cabin?: true
    icu?: true
    ccu?: true
    hdu?: true
    hfncu?: true
    emergency?: true
    covid?: true
    extra?: true
  }

  export type CapacitySumAggregateInputType = {
    total_capacity?: true
    ward?: true
    special_ward?: true
    cabin?: true
    vip_cabin?: true
    icu?: true
    ccu?: true
    hdu?: true
    hfncu?: true
    emergency?: true
    covid?: true
    extra?: true
  }

  export type CapacityMinAggregateInputType = {
    registration_no?: true
    total_capacity?: true
    ward?: true
    special_ward?: true
    cabin?: true
    vip_cabin?: true
    icu?: true
    ccu?: true
    hdu?: true
    hfncu?: true
    emergency?: true
    covid?: true
    extra?: true
  }

  export type CapacityMaxAggregateInputType = {
    registration_no?: true
    total_capacity?: true
    ward?: true
    special_ward?: true
    cabin?: true
    vip_cabin?: true
    icu?: true
    ccu?: true
    hdu?: true
    hfncu?: true
    emergency?: true
    covid?: true
    extra?: true
  }

  export type CapacityCountAggregateInputType = {
    registration_no?: true
    total_capacity?: true
    ward?: true
    special_ward?: true
    cabin?: true
    vip_cabin?: true
    icu?: true
    ccu?: true
    hdu?: true
    hfncu?: true
    emergency?: true
    covid?: true
    extra?: true
    _all?: true
  }

  export type CapacityAggregateArgs = {
    /**
     * Filter which capacity to aggregate.
     * 
    **/
    where?: capacityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of capacities to fetch.
     * 
    **/
    orderBy?: Enumerable<capacityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: capacityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` capacities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` capacities.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned capacities
    **/
    _count?: true | CapacityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CapacityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CapacitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CapacityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CapacityMaxAggregateInputType
  }

  export type GetCapacityAggregateType<T extends CapacityAggregateArgs> = {
        [P in keyof T & keyof AggregateCapacity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCapacity[P]>
      : GetScalarType<T[P], AggregateCapacity[P]>
  }


    
    
  export type CapacityGroupByArgs = {
    where?: capacityWhereInput
    orderBy?: Enumerable<capacityOrderByWithAggregationInput>
    by: Array<CapacityScalarFieldEnum>
    having?: capacityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CapacityCountAggregateInputType | true
    _avg?: CapacityAvgAggregateInputType
    _sum?: CapacitySumAggregateInputType
    _min?: CapacityMinAggregateInputType
    _max?: CapacityMaxAggregateInputType
  }


  export type CapacityGroupByOutputType = {
    registration_no: string
    total_capacity: number
    ward: number | null
    special_ward: number | null
    cabin: number | null
    vip_cabin: number | null
    icu: number | null
    ccu: number | null
    hdu: number | null
    hfncu: number | null
    emergency: number | null
    covid: number | null
    extra: number | null
    _count: CapacityCountAggregateOutputType | null
    _avg: CapacityAvgAggregateOutputType | null
    _sum: CapacitySumAggregateOutputType | null
    _min: CapacityMinAggregateOutputType | null
    _max: CapacityMaxAggregateOutputType | null
  }

  type GetCapacityGroupByPayload<T extends CapacityGroupByArgs> = Promise<
    Array<
      PickArray<CapacityGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof CapacityGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], CapacityGroupByOutputType[P]> 
            : GetScalarType<T[P], CapacityGroupByOutputType[P]>
        }
      > 
    >


  export type capacitySelect = {
    registration_no?: boolean
    total_capacity?: boolean
    ward?: boolean
    special_ward?: boolean
    cabin?: boolean
    vip_cabin?: boolean
    icu?: boolean
    ccu?: boolean
    hdu?: boolean
    hfncu?: boolean
    emergency?: boolean
    covid?: boolean
    extra?: boolean
    hospital?: boolean | hospitalArgs
  }

  export type capacityInclude = {
    hospital?: boolean | hospitalArgs
  }

  export type capacityGetPayload<
    S extends boolean | null | undefined | capacityArgs,
    U = keyof S
      > = S extends true
        ? capacity
    : S extends undefined
    ? never
    : S extends capacityArgs | capacityFindManyArgs
    ?'include' extends U
    ? capacity  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'hospital'
        ? hospitalGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof capacity ?capacity [P]
  : 
          P extends 'hospital'
        ? hospitalGetPayload<S['select'][P]> : never
  } 
    : capacity
  : capacity


  type capacityCountArgs = Merge<
    Omit<capacityFindManyArgs, 'select' | 'include'> & {
      select?: CapacityCountAggregateInputType | true
    }
  >

  export interface capacityDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Capacity that matches the filter.
     * @param {capacityFindUniqueArgs} args - Arguments to find a Capacity
     * @example
     * // Get one Capacity
     * const capacity = await prisma.capacity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends capacityFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, capacityFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'capacity'> extends True ? CheckSelect<T, Prisma__capacityClient<capacity>, Prisma__capacityClient<capacityGetPayload<T>>> : CheckSelect<T, Prisma__capacityClient<capacity | null >, Prisma__capacityClient<capacityGetPayload<T> | null >>

    /**
     * Find the first Capacity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {capacityFindFirstArgs} args - Arguments to find a Capacity
     * @example
     * // Get one Capacity
     * const capacity = await prisma.capacity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends capacityFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, capacityFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'capacity'> extends True ? CheckSelect<T, Prisma__capacityClient<capacity>, Prisma__capacityClient<capacityGetPayload<T>>> : CheckSelect<T, Prisma__capacityClient<capacity | null >, Prisma__capacityClient<capacityGetPayload<T> | null >>

    /**
     * Find zero or more Capacities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {capacityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Capacities
     * const capacities = await prisma.capacity.findMany()
     * 
     * // Get first 10 Capacities
     * const capacities = await prisma.capacity.findMany({ take: 10 })
     * 
     * // Only select the `registration_no`
     * const capacityWithRegistration_noOnly = await prisma.capacity.findMany({ select: { registration_no: true } })
     * 
    **/
    findMany<T extends capacityFindManyArgs>(
      args?: SelectSubset<T, capacityFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<capacity>>, PrismaPromise<Array<capacityGetPayload<T>>>>

    /**
     * Create a Capacity.
     * @param {capacityCreateArgs} args - Arguments to create a Capacity.
     * @example
     * // Create one Capacity
     * const Capacity = await prisma.capacity.create({
     *   data: {
     *     // ... data to create a Capacity
     *   }
     * })
     * 
    **/
    create<T extends capacityCreateArgs>(
      args: SelectSubset<T, capacityCreateArgs>
    ): CheckSelect<T, Prisma__capacityClient<capacity>, Prisma__capacityClient<capacityGetPayload<T>>>

    /**
     * Create many Capacities.
     *     @param {capacityCreateManyArgs} args - Arguments to create many Capacities.
     *     @example
     *     // Create many Capacities
     *     const capacity = await prisma.capacity.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends capacityCreateManyArgs>(
      args?: SelectSubset<T, capacityCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Capacity.
     * @param {capacityDeleteArgs} args - Arguments to delete one Capacity.
     * @example
     * // Delete one Capacity
     * const Capacity = await prisma.capacity.delete({
     *   where: {
     *     // ... filter to delete one Capacity
     *   }
     * })
     * 
    **/
    delete<T extends capacityDeleteArgs>(
      args: SelectSubset<T, capacityDeleteArgs>
    ): CheckSelect<T, Prisma__capacityClient<capacity>, Prisma__capacityClient<capacityGetPayload<T>>>

    /**
     * Update one Capacity.
     * @param {capacityUpdateArgs} args - Arguments to update one Capacity.
     * @example
     * // Update one Capacity
     * const capacity = await prisma.capacity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends capacityUpdateArgs>(
      args: SelectSubset<T, capacityUpdateArgs>
    ): CheckSelect<T, Prisma__capacityClient<capacity>, Prisma__capacityClient<capacityGetPayload<T>>>

    /**
     * Delete zero or more Capacities.
     * @param {capacityDeleteManyArgs} args - Arguments to filter Capacities to delete.
     * @example
     * // Delete a few Capacities
     * const { count } = await prisma.capacity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends capacityDeleteManyArgs>(
      args?: SelectSubset<T, capacityDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Capacities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {capacityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Capacities
     * const capacity = await prisma.capacity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends capacityUpdateManyArgs>(
      args: SelectSubset<T, capacityUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Capacity.
     * @param {capacityUpsertArgs} args - Arguments to update or create a Capacity.
     * @example
     * // Update or create a Capacity
     * const capacity = await prisma.capacity.upsert({
     *   create: {
     *     // ... data to create a Capacity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Capacity we want to update
     *   }
     * })
    **/
    upsert<T extends capacityUpsertArgs>(
      args: SelectSubset<T, capacityUpsertArgs>
    ): CheckSelect<T, Prisma__capacityClient<capacity>, Prisma__capacityClient<capacityGetPayload<T>>>

    /**
     * Count the number of Capacities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {capacityCountArgs} args - Arguments to filter Capacities to count.
     * @example
     * // Count the number of Capacities
     * const count = await prisma.capacity.count({
     *   where: {
     *     // ... the filter for the Capacities we want to count
     *   }
     * })
    **/
    count<T extends capacityCountArgs>(
      args?: Subset<T, capacityCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CapacityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Capacity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CapacityAggregateArgs>(args: Subset<T, CapacityAggregateArgs>): PrismaPromise<GetCapacityAggregateType<T>>

    /**
     * Group by Capacity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CapacityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CapacityGroupByArgs['orderBy'] }
        : { orderBy?: CapacityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CapacityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCapacityGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for capacity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__capacityClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    hospital<T extends hospitalArgs = {}>(args?: Subset<T, hospitalArgs>): CheckSelect<T, Prisma__hospitalClient<hospital | null >, Prisma__hospitalClient<hospitalGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * capacity findUnique
   */
  export type capacityFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the capacity
     * 
    **/
    select?: capacitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: capacityInclude | null
    /**
     * Throw an Error if a capacity can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which capacity to fetch.
     * 
    **/
    where: capacityWhereUniqueInput
  }


  /**
   * capacity findFirst
   */
  export type capacityFindFirstArgs = {
    /**
     * Select specific fields to fetch from the capacity
     * 
    **/
    select?: capacitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: capacityInclude | null
    /**
     * Throw an Error if a capacity can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which capacity to fetch.
     * 
    **/
    where?: capacityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of capacities to fetch.
     * 
    **/
    orderBy?: Enumerable<capacityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for capacities.
     * 
    **/
    cursor?: capacityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` capacities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` capacities.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of capacities.
     * 
    **/
    distinct?: Enumerable<CapacityScalarFieldEnum>
  }


  /**
   * capacity findMany
   */
  export type capacityFindManyArgs = {
    /**
     * Select specific fields to fetch from the capacity
     * 
    **/
    select?: capacitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: capacityInclude | null
    /**
     * Filter, which capacities to fetch.
     * 
    **/
    where?: capacityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of capacities to fetch.
     * 
    **/
    orderBy?: Enumerable<capacityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing capacities.
     * 
    **/
    cursor?: capacityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` capacities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` capacities.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CapacityScalarFieldEnum>
  }


  /**
   * capacity create
   */
  export type capacityCreateArgs = {
    /**
     * Select specific fields to fetch from the capacity
     * 
    **/
    select?: capacitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: capacityInclude | null
    /**
     * The data needed to create a capacity.
     * 
    **/
    data: XOR<capacityCreateInput, capacityUncheckedCreateInput>
  }


  /**
   * capacity createMany
   */
  export type capacityCreateManyArgs = {
    data: Enumerable<capacityCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * capacity update
   */
  export type capacityUpdateArgs = {
    /**
     * Select specific fields to fetch from the capacity
     * 
    **/
    select?: capacitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: capacityInclude | null
    /**
     * The data needed to update a capacity.
     * 
    **/
    data: XOR<capacityUpdateInput, capacityUncheckedUpdateInput>
    /**
     * Choose, which capacity to update.
     * 
    **/
    where: capacityWhereUniqueInput
  }


  /**
   * capacity updateMany
   */
  export type capacityUpdateManyArgs = {
    data: XOR<capacityUpdateManyMutationInput, capacityUncheckedUpdateManyInput>
    where?: capacityWhereInput
  }


  /**
   * capacity upsert
   */
  export type capacityUpsertArgs = {
    /**
     * Select specific fields to fetch from the capacity
     * 
    **/
    select?: capacitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: capacityInclude | null
    /**
     * The filter to search for the capacity to update in case it exists.
     * 
    **/
    where: capacityWhereUniqueInput
    /**
     * In case the capacity found by the `where` argument doesn't exist, create a new capacity with this data.
     * 
    **/
    create: XOR<capacityCreateInput, capacityUncheckedCreateInput>
    /**
     * In case the capacity was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<capacityUpdateInput, capacityUncheckedUpdateInput>
  }


  /**
   * capacity delete
   */
  export type capacityDeleteArgs = {
    /**
     * Select specific fields to fetch from the capacity
     * 
    **/
    select?: capacitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: capacityInclude | null
    /**
     * Filter which capacity to delete.
     * 
    **/
    where: capacityWhereUniqueInput
  }


  /**
   * capacity deleteMany
   */
  export type capacityDeleteManyArgs = {
    where?: capacityWhereInput
  }


  /**
   * capacity without action
   */
  export type capacityArgs = {
    /**
     * Select specific fields to fetch from the capacity
     * 
    **/
    select?: capacitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: capacityInclude | null
  }



  /**
   * Model hospital
   */


  export type AggregateHospital = {
    _count: HospitalCountAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  export type HospitalMinAggregateOutputType = {
    registration_no: string | null
    hospital_name: string | null
    description: string | null
    hospital_type: hospital_hospital_type | null
    bed_type: string | null
    image_source: string | null
    website: string | null
    joined_on: Date | null
    status: hospital_status | null
  }

  export type HospitalMaxAggregateOutputType = {
    registration_no: string | null
    hospital_name: string | null
    description: string | null
    hospital_type: hospital_hospital_type | null
    bed_type: string | null
    image_source: string | null
    website: string | null
    joined_on: Date | null
    status: hospital_status | null
  }

  export type HospitalCountAggregateOutputType = {
    registration_no: number
    hospital_name: number
    description: number
    hospital_type: number
    bed_type: number
    image_source: number
    website: number
    joined_on: number
    status: number
    _all: number
  }


  export type HospitalMinAggregateInputType = {
    registration_no?: true
    hospital_name?: true
    description?: true
    hospital_type?: true
    bed_type?: true
    image_source?: true
    website?: true
    joined_on?: true
    status?: true
  }

  export type HospitalMaxAggregateInputType = {
    registration_no?: true
    hospital_name?: true
    description?: true
    hospital_type?: true
    bed_type?: true
    image_source?: true
    website?: true
    joined_on?: true
    status?: true
  }

  export type HospitalCountAggregateInputType = {
    registration_no?: true
    hospital_name?: true
    description?: true
    hospital_type?: true
    bed_type?: true
    image_source?: true
    website?: true
    joined_on?: true
    status?: true
    _all?: true
  }

  export type HospitalAggregateArgs = {
    /**
     * Filter which hospital to aggregate.
     * 
    **/
    where?: hospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hospitals to fetch.
     * 
    **/
    orderBy?: Enumerable<hospitalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: hospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hospitals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hospitals.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hospitals
    **/
    _count?: true | HospitalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospitalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospitalMaxAggregateInputType
  }

  export type GetHospitalAggregateType<T extends HospitalAggregateArgs> = {
        [P in keyof T & keyof AggregateHospital]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospital[P]>
      : GetScalarType<T[P], AggregateHospital[P]>
  }


    
    
  export type HospitalGroupByArgs = {
    where?: hospitalWhereInput
    orderBy?: Enumerable<hospitalOrderByWithAggregationInput>
    by: Array<HospitalScalarFieldEnum>
    having?: hospitalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospitalCountAggregateInputType | true
    _min?: HospitalMinAggregateInputType
    _max?: HospitalMaxAggregateInputType
  }


  export type HospitalGroupByOutputType = {
    registration_no: string
    hospital_name: string
    description: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website: string | null
    joined_on: Date
    status: hospital_status
    _count: HospitalCountAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  type GetHospitalGroupByPayload<T extends HospitalGroupByArgs> = Promise<
    Array<
      PickArray<HospitalGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof HospitalGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], HospitalGroupByOutputType[P]> 
            : GetScalarType<T[P], HospitalGroupByOutputType[P]>
        }
      > 
    >


  export type hospitalSelect = {
    registration_no?: boolean
    hospital_name?: boolean
    description?: boolean
    hospital_type?: boolean
    bed_type?: boolean
    image_source?: boolean
    website?: boolean
    joined_on?: boolean
    status?: boolean
    address?: boolean | addressArgs
    amenity?: boolean | amenityArgs
    blood_analytical_service?: boolean | blood_analytical_serviceArgs
    booking?: boolean | bookingFindManyArgs
    capacity?: boolean | capacityArgs
    diagnostic_imaging_service?: boolean | diagnostic_imaging_serviceArgs
    doctor?: boolean | doctorFindManyArgs
    general_service?: boolean | general_serviceArgs
    log?: boolean | logFindManyArgs
    staff?: boolean | staffFindManyArgs
    vacant_bed_log?: boolean | vacant_bed_logFindManyArgs
    _count?: boolean | HospitalCountOutputTypeArgs
  }

  export type hospitalInclude = {
    address?: boolean | addressArgs
    amenity?: boolean | amenityArgs
    blood_analytical_service?: boolean | blood_analytical_serviceArgs
    booking?: boolean | bookingFindManyArgs
    capacity?: boolean | capacityArgs
    diagnostic_imaging_service?: boolean | diagnostic_imaging_serviceArgs
    doctor?: boolean | doctorFindManyArgs
    general_service?: boolean | general_serviceArgs
    log?: boolean | logFindManyArgs
    staff?: boolean | staffFindManyArgs
    vacant_bed_log?: boolean | vacant_bed_logFindManyArgs
    _count?: boolean | HospitalCountOutputTypeArgs
  }

  export type hospitalGetPayload<
    S extends boolean | null | undefined | hospitalArgs,
    U = keyof S
      > = S extends true
        ? hospital
    : S extends undefined
    ? never
    : S extends hospitalArgs | hospitalFindManyArgs
    ?'include' extends U
    ? hospital  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'address'
        ? addressGetPayload<S['include'][P]> | null :
        P extends 'amenity'
        ? amenityGetPayload<S['include'][P]> | null :
        P extends 'blood_analytical_service'
        ? blood_analytical_serviceGetPayload<S['include'][P]> | null :
        P extends 'booking'
        ? Array < bookingGetPayload<S['include'][P]>>  :
        P extends 'capacity'
        ? capacityGetPayload<S['include'][P]> | null :
        P extends 'diagnostic_imaging_service'
        ? diagnostic_imaging_serviceGetPayload<S['include'][P]> | null :
        P extends 'doctor'
        ? Array < doctorGetPayload<S['include'][P]>>  :
        P extends 'general_service'
        ? general_serviceGetPayload<S['include'][P]> | null :
        P extends 'log'
        ? Array < logGetPayload<S['include'][P]>>  :
        P extends 'staff'
        ? Array < staffGetPayload<S['include'][P]>>  :
        P extends 'vacant_bed_log'
        ? Array < vacant_bed_logGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? HospitalCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof hospital ?hospital [P]
  : 
          P extends 'address'
        ? addressGetPayload<S['select'][P]> | null :
        P extends 'amenity'
        ? amenityGetPayload<S['select'][P]> | null :
        P extends 'blood_analytical_service'
        ? blood_analytical_serviceGetPayload<S['select'][P]> | null :
        P extends 'booking'
        ? Array < bookingGetPayload<S['select'][P]>>  :
        P extends 'capacity'
        ? capacityGetPayload<S['select'][P]> | null :
        P extends 'diagnostic_imaging_service'
        ? diagnostic_imaging_serviceGetPayload<S['select'][P]> | null :
        P extends 'doctor'
        ? Array < doctorGetPayload<S['select'][P]>>  :
        P extends 'general_service'
        ? general_serviceGetPayload<S['select'][P]> | null :
        P extends 'log'
        ? Array < logGetPayload<S['select'][P]>>  :
        P extends 'staff'
        ? Array < staffGetPayload<S['select'][P]>>  :
        P extends 'vacant_bed_log'
        ? Array < vacant_bed_logGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? HospitalCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : hospital
  : hospital


  type hospitalCountArgs = Merge<
    Omit<hospitalFindManyArgs, 'select' | 'include'> & {
      select?: HospitalCountAggregateInputType | true
    }
  >

  export interface hospitalDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Hospital that matches the filter.
     * @param {hospitalFindUniqueArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends hospitalFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, hospitalFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'hospital'> extends True ? CheckSelect<T, Prisma__hospitalClient<hospital>, Prisma__hospitalClient<hospitalGetPayload<T>>> : CheckSelect<T, Prisma__hospitalClient<hospital | null >, Prisma__hospitalClient<hospitalGetPayload<T> | null >>

    /**
     * Find the first Hospital that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalFindFirstArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends hospitalFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, hospitalFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'hospital'> extends True ? CheckSelect<T, Prisma__hospitalClient<hospital>, Prisma__hospitalClient<hospitalGetPayload<T>>> : CheckSelect<T, Prisma__hospitalClient<hospital | null >, Prisma__hospitalClient<hospitalGetPayload<T> | null >>

    /**
     * Find zero or more Hospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospitals
     * const hospitals = await prisma.hospital.findMany()
     * 
     * // Get first 10 Hospitals
     * const hospitals = await prisma.hospital.findMany({ take: 10 })
     * 
     * // Only select the `registration_no`
     * const hospitalWithRegistration_noOnly = await prisma.hospital.findMany({ select: { registration_no: true } })
     * 
    **/
    findMany<T extends hospitalFindManyArgs>(
      args?: SelectSubset<T, hospitalFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<hospital>>, PrismaPromise<Array<hospitalGetPayload<T>>>>

    /**
     * Create a Hospital.
     * @param {hospitalCreateArgs} args - Arguments to create a Hospital.
     * @example
     * // Create one Hospital
     * const Hospital = await prisma.hospital.create({
     *   data: {
     *     // ... data to create a Hospital
     *   }
     * })
     * 
    **/
    create<T extends hospitalCreateArgs>(
      args: SelectSubset<T, hospitalCreateArgs>
    ): CheckSelect<T, Prisma__hospitalClient<hospital>, Prisma__hospitalClient<hospitalGetPayload<T>>>

    /**
     * Create many Hospitals.
     *     @param {hospitalCreateManyArgs} args - Arguments to create many Hospitals.
     *     @example
     *     // Create many Hospitals
     *     const hospital = await prisma.hospital.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends hospitalCreateManyArgs>(
      args?: SelectSubset<T, hospitalCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Hospital.
     * @param {hospitalDeleteArgs} args - Arguments to delete one Hospital.
     * @example
     * // Delete one Hospital
     * const Hospital = await prisma.hospital.delete({
     *   where: {
     *     // ... filter to delete one Hospital
     *   }
     * })
     * 
    **/
    delete<T extends hospitalDeleteArgs>(
      args: SelectSubset<T, hospitalDeleteArgs>
    ): CheckSelect<T, Prisma__hospitalClient<hospital>, Prisma__hospitalClient<hospitalGetPayload<T>>>

    /**
     * Update one Hospital.
     * @param {hospitalUpdateArgs} args - Arguments to update one Hospital.
     * @example
     * // Update one Hospital
     * const hospital = await prisma.hospital.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends hospitalUpdateArgs>(
      args: SelectSubset<T, hospitalUpdateArgs>
    ): CheckSelect<T, Prisma__hospitalClient<hospital>, Prisma__hospitalClient<hospitalGetPayload<T>>>

    /**
     * Delete zero or more Hospitals.
     * @param {hospitalDeleteManyArgs} args - Arguments to filter Hospitals to delete.
     * @example
     * // Delete a few Hospitals
     * const { count } = await prisma.hospital.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends hospitalDeleteManyArgs>(
      args?: SelectSubset<T, hospitalDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends hospitalUpdateManyArgs>(
      args: SelectSubset<T, hospitalUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Hospital.
     * @param {hospitalUpsertArgs} args - Arguments to update or create a Hospital.
     * @example
     * // Update or create a Hospital
     * const hospital = await prisma.hospital.upsert({
     *   create: {
     *     // ... data to create a Hospital
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospital we want to update
     *   }
     * })
    **/
    upsert<T extends hospitalUpsertArgs>(
      args: SelectSubset<T, hospitalUpsertArgs>
    ): CheckSelect<T, Prisma__hospitalClient<hospital>, Prisma__hospitalClient<hospitalGetPayload<T>>>

    /**
     * Count the number of Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalCountArgs} args - Arguments to filter Hospitals to count.
     * @example
     * // Count the number of Hospitals
     * const count = await prisma.hospital.count({
     *   where: {
     *     // ... the filter for the Hospitals we want to count
     *   }
     * })
    **/
    count<T extends hospitalCountArgs>(
      args?: Subset<T, hospitalCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HospitalAggregateArgs>(args: Subset<T, HospitalAggregateArgs>): PrismaPromise<GetHospitalAggregateType<T>>

    /**
     * Group by Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HospitalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HospitalGroupByArgs['orderBy'] }
        : { orderBy?: HospitalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HospitalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for hospital.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__hospitalClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    address<T extends addressArgs = {}>(args?: Subset<T, addressArgs>): CheckSelect<T, Prisma__addressClient<address | null >, Prisma__addressClient<addressGetPayload<T> | null >>;

    amenity<T extends amenityArgs = {}>(args?: Subset<T, amenityArgs>): CheckSelect<T, Prisma__amenityClient<amenity | null >, Prisma__amenityClient<amenityGetPayload<T> | null >>;

    blood_analytical_service<T extends blood_analytical_serviceArgs = {}>(args?: Subset<T, blood_analytical_serviceArgs>): CheckSelect<T, Prisma__blood_analytical_serviceClient<blood_analytical_service | null >, Prisma__blood_analytical_serviceClient<blood_analytical_serviceGetPayload<T> | null >>;

    booking<T extends bookingFindManyArgs = {}>(args?: Subset<T, bookingFindManyArgs>): CheckSelect<T, PrismaPromise<Array<booking>>, PrismaPromise<Array<bookingGetPayload<T>>>>;

    capacity<T extends capacityArgs = {}>(args?: Subset<T, capacityArgs>): CheckSelect<T, Prisma__capacityClient<capacity | null >, Prisma__capacityClient<capacityGetPayload<T> | null >>;

    diagnostic_imaging_service<T extends diagnostic_imaging_serviceArgs = {}>(args?: Subset<T, diagnostic_imaging_serviceArgs>): CheckSelect<T, Prisma__diagnostic_imaging_serviceClient<diagnostic_imaging_service | null >, Prisma__diagnostic_imaging_serviceClient<diagnostic_imaging_serviceGetPayload<T> | null >>;

    doctor<T extends doctorFindManyArgs = {}>(args?: Subset<T, doctorFindManyArgs>): CheckSelect<T, PrismaPromise<Array<doctor>>, PrismaPromise<Array<doctorGetPayload<T>>>>;

    general_service<T extends general_serviceArgs = {}>(args?: Subset<T, general_serviceArgs>): CheckSelect<T, Prisma__general_serviceClient<general_service | null >, Prisma__general_serviceClient<general_serviceGetPayload<T> | null >>;

    log<T extends logFindManyArgs = {}>(args?: Subset<T, logFindManyArgs>): CheckSelect<T, PrismaPromise<Array<log>>, PrismaPromise<Array<logGetPayload<T>>>>;

    staff<T extends staffFindManyArgs = {}>(args?: Subset<T, staffFindManyArgs>): CheckSelect<T, PrismaPromise<Array<staff>>, PrismaPromise<Array<staffGetPayload<T>>>>;

    vacant_bed_log<T extends vacant_bed_logFindManyArgs = {}>(args?: Subset<T, vacant_bed_logFindManyArgs>): CheckSelect<T, PrismaPromise<Array<vacant_bed_log>>, PrismaPromise<Array<vacant_bed_logGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * hospital findUnique
   */
  export type hospitalFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the hospital
     * 
    **/
    select?: hospitalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hospitalInclude | null
    /**
     * Throw an Error if a hospital can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which hospital to fetch.
     * 
    **/
    where: hospitalWhereUniqueInput
  }


  /**
   * hospital findFirst
   */
  export type hospitalFindFirstArgs = {
    /**
     * Select specific fields to fetch from the hospital
     * 
    **/
    select?: hospitalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hospitalInclude | null
    /**
     * Throw an Error if a hospital can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which hospital to fetch.
     * 
    **/
    where?: hospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hospitals to fetch.
     * 
    **/
    orderBy?: Enumerable<hospitalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hospitals.
     * 
    **/
    cursor?: hospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hospitals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hospitals.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hospitals.
     * 
    **/
    distinct?: Enumerable<HospitalScalarFieldEnum>
  }


  /**
   * hospital findMany
   */
  export type hospitalFindManyArgs = {
    /**
     * Select specific fields to fetch from the hospital
     * 
    **/
    select?: hospitalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hospitalInclude | null
    /**
     * Filter, which hospitals to fetch.
     * 
    **/
    where?: hospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hospitals to fetch.
     * 
    **/
    orderBy?: Enumerable<hospitalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hospitals.
     * 
    **/
    cursor?: hospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hospitals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hospitals.
     * 
    **/
    skip?: number
    distinct?: Enumerable<HospitalScalarFieldEnum>
  }


  /**
   * hospital create
   */
  export type hospitalCreateArgs = {
    /**
     * Select specific fields to fetch from the hospital
     * 
    **/
    select?: hospitalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hospitalInclude | null
    /**
     * The data needed to create a hospital.
     * 
    **/
    data: XOR<hospitalCreateInput, hospitalUncheckedCreateInput>
  }


  /**
   * hospital createMany
   */
  export type hospitalCreateManyArgs = {
    data: Enumerable<hospitalCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * hospital update
   */
  export type hospitalUpdateArgs = {
    /**
     * Select specific fields to fetch from the hospital
     * 
    **/
    select?: hospitalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hospitalInclude | null
    /**
     * The data needed to update a hospital.
     * 
    **/
    data: XOR<hospitalUpdateInput, hospitalUncheckedUpdateInput>
    /**
     * Choose, which hospital to update.
     * 
    **/
    where: hospitalWhereUniqueInput
  }


  /**
   * hospital updateMany
   */
  export type hospitalUpdateManyArgs = {
    data: XOR<hospitalUpdateManyMutationInput, hospitalUncheckedUpdateManyInput>
    where?: hospitalWhereInput
  }


  /**
   * hospital upsert
   */
  export type hospitalUpsertArgs = {
    /**
     * Select specific fields to fetch from the hospital
     * 
    **/
    select?: hospitalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hospitalInclude | null
    /**
     * The filter to search for the hospital to update in case it exists.
     * 
    **/
    where: hospitalWhereUniqueInput
    /**
     * In case the hospital found by the `where` argument doesn't exist, create a new hospital with this data.
     * 
    **/
    create: XOR<hospitalCreateInput, hospitalUncheckedCreateInput>
    /**
     * In case the hospital was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<hospitalUpdateInput, hospitalUncheckedUpdateInput>
  }


  /**
   * hospital delete
   */
  export type hospitalDeleteArgs = {
    /**
     * Select specific fields to fetch from the hospital
     * 
    **/
    select?: hospitalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hospitalInclude | null
    /**
     * Filter which hospital to delete.
     * 
    **/
    where: hospitalWhereUniqueInput
  }


  /**
   * hospital deleteMany
   */
  export type hospitalDeleteManyArgs = {
    where?: hospitalWhereInput
  }


  /**
   * hospital without action
   */
  export type hospitalArgs = {
    /**
     * Select specific fields to fetch from the hospital
     * 
    **/
    select?: hospitalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hospitalInclude | null
  }



  /**
   * Model log
   */


  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogMinAggregateOutputType = {
    logged_at: Date | null
    registration_no: string | null
    task: string | null
    mobile_no: string | null
    role: log_role | null
  }

  export type LogMaxAggregateOutputType = {
    logged_at: Date | null
    registration_no: string | null
    task: string | null
    mobile_no: string | null
    role: log_role | null
  }

  export type LogCountAggregateOutputType = {
    logged_at: number
    registration_no: number
    task: number
    mobile_no: number
    role: number
    _all: number
  }


  export type LogMinAggregateInputType = {
    logged_at?: true
    registration_no?: true
    task?: true
    mobile_no?: true
    role?: true
  }

  export type LogMaxAggregateInputType = {
    logged_at?: true
    registration_no?: true
    task?: true
    mobile_no?: true
    role?: true
  }

  export type LogCountAggregateInputType = {
    logged_at?: true
    registration_no?: true
    task?: true
    mobile_no?: true
    role?: true
    _all?: true
  }

  export type LogAggregateArgs = {
    /**
     * Filter which log to aggregate.
     * 
    **/
    where?: logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     * 
    **/
    orderBy?: Enumerable<logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }


    
    
  export type LogGroupByArgs = {
    where?: logWhereInput
    orderBy?: Enumerable<logOrderByWithAggregationInput>
    by: Array<LogScalarFieldEnum>
    having?: logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }


  export type LogGroupByOutputType = {
    logged_at: Date
    registration_no: string
    task: string
    mobile_no: string
    role: log_role
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Promise<
    Array<
      PickArray<LogGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], LogGroupByOutputType[P]> 
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      > 
    >


  export type logSelect = {
    logged_at?: boolean
    registration_no?: boolean
    task?: boolean
    mobile_no?: boolean
    role?: boolean
    staff?: boolean | staffArgs
    hospital?: boolean | hospitalArgs
  }

  export type logInclude = {
    staff?: boolean | staffArgs
    hospital?: boolean | hospitalArgs
  }

  export type logGetPayload<
    S extends boolean | null | undefined | logArgs,
    U = keyof S
      > = S extends true
        ? log
    : S extends undefined
    ? never
    : S extends logArgs | logFindManyArgs
    ?'include' extends U
    ? log  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'staff'
        ? staffGetPayload<S['include'][P]> :
        P extends 'hospital'
        ? hospitalGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof log ?log [P]
  : 
          P extends 'staff'
        ? staffGetPayload<S['select'][P]> :
        P extends 'hospital'
        ? hospitalGetPayload<S['select'][P]> : never
  } 
    : log
  : log


  type logCountArgs = Merge<
    Omit<logFindManyArgs, 'select' | 'include'> & {
      select?: LogCountAggregateInputType | true
    }
  >

  export interface logDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Log that matches the filter.
     * @param {logFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends logFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, logFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'log'> extends True ? CheckSelect<T, Prisma__logClient<log>, Prisma__logClient<logGetPayload<T>>> : CheckSelect<T, Prisma__logClient<log | null >, Prisma__logClient<logGetPayload<T> | null >>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends logFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, logFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'log'> extends True ? CheckSelect<T, Prisma__logClient<log>, Prisma__logClient<logGetPayload<T>>> : CheckSelect<T, Prisma__logClient<log | null >, Prisma__logClient<logGetPayload<T> | null >>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `logged_at`
     * const logWithLogged_atOnly = await prisma.log.findMany({ select: { logged_at: true } })
     * 
    **/
    findMany<T extends logFindManyArgs>(
      args?: SelectSubset<T, logFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<log>>, PrismaPromise<Array<logGetPayload<T>>>>

    /**
     * Create a Log.
     * @param {logCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
    **/
    create<T extends logCreateArgs>(
      args: SelectSubset<T, logCreateArgs>
    ): CheckSelect<T, Prisma__logClient<log>, Prisma__logClient<logGetPayload<T>>>

    /**
     * Create many Logs.
     *     @param {logCreateManyArgs} args - Arguments to create many Logs.
     *     @example
     *     // Create many Logs
     *     const log = await prisma.log.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends logCreateManyArgs>(
      args?: SelectSubset<T, logCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Log.
     * @param {logDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
    **/
    delete<T extends logDeleteArgs>(
      args: SelectSubset<T, logDeleteArgs>
    ): CheckSelect<T, Prisma__logClient<log>, Prisma__logClient<logGetPayload<T>>>

    /**
     * Update one Log.
     * @param {logUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends logUpdateArgs>(
      args: SelectSubset<T, logUpdateArgs>
    ): CheckSelect<T, Prisma__logClient<log>, Prisma__logClient<logGetPayload<T>>>

    /**
     * Delete zero or more Logs.
     * @param {logDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends logDeleteManyArgs>(
      args?: SelectSubset<T, logDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends logUpdateManyArgs>(
      args: SelectSubset<T, logUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Log.
     * @param {logUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
    **/
    upsert<T extends logUpsertArgs>(
      args: SelectSubset<T, logUpsertArgs>
    ): CheckSelect<T, Prisma__logClient<log>, Prisma__logClient<logGetPayload<T>>>

    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends logCountArgs>(
      args?: Subset<T, logCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__logClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    staff<T extends staffArgs = {}>(args?: Subset<T, staffArgs>): CheckSelect<T, Prisma__staffClient<staff | null >, Prisma__staffClient<staffGetPayload<T> | null >>;

    hospital<T extends hospitalArgs = {}>(args?: Subset<T, hospitalArgs>): CheckSelect<T, Prisma__hospitalClient<hospital | null >, Prisma__hospitalClient<hospitalGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * log findUnique
   */
  export type logFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the log
     * 
    **/
    select?: logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: logInclude | null
    /**
     * Throw an Error if a log can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which log to fetch.
     * 
    **/
    where: logWhereUniqueInput
  }


  /**
   * log findFirst
   */
  export type logFindFirstArgs = {
    /**
     * Select specific fields to fetch from the log
     * 
    **/
    select?: logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: logInclude | null
    /**
     * Throw an Error if a log can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which log to fetch.
     * 
    **/
    where?: logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     * 
    **/
    orderBy?: Enumerable<logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     * 
    **/
    cursor?: logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     * 
    **/
    distinct?: Enumerable<LogScalarFieldEnum>
  }


  /**
   * log findMany
   */
  export type logFindManyArgs = {
    /**
     * Select specific fields to fetch from the log
     * 
    **/
    select?: logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: logInclude | null
    /**
     * Filter, which logs to fetch.
     * 
    **/
    where?: logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     * 
    **/
    orderBy?: Enumerable<logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logs.
     * 
    **/
    cursor?: logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LogScalarFieldEnum>
  }


  /**
   * log create
   */
  export type logCreateArgs = {
    /**
     * Select specific fields to fetch from the log
     * 
    **/
    select?: logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: logInclude | null
    /**
     * The data needed to create a log.
     * 
    **/
    data: XOR<logCreateInput, logUncheckedCreateInput>
  }


  /**
   * log createMany
   */
  export type logCreateManyArgs = {
    data: Enumerable<logCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * log update
   */
  export type logUpdateArgs = {
    /**
     * Select specific fields to fetch from the log
     * 
    **/
    select?: logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: logInclude | null
    /**
     * The data needed to update a log.
     * 
    **/
    data: XOR<logUpdateInput, logUncheckedUpdateInput>
    /**
     * Choose, which log to update.
     * 
    **/
    where: logWhereUniqueInput
  }


  /**
   * log updateMany
   */
  export type logUpdateManyArgs = {
    data: XOR<logUpdateManyMutationInput, logUncheckedUpdateManyInput>
    where?: logWhereInput
  }


  /**
   * log upsert
   */
  export type logUpsertArgs = {
    /**
     * Select specific fields to fetch from the log
     * 
    **/
    select?: logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: logInclude | null
    /**
     * The filter to search for the log to update in case it exists.
     * 
    **/
    where: logWhereUniqueInput
    /**
     * In case the log found by the `where` argument doesn't exist, create a new log with this data.
     * 
    **/
    create: XOR<logCreateInput, logUncheckedCreateInput>
    /**
     * In case the log was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<logUpdateInput, logUncheckedUpdateInput>
  }


  /**
   * log delete
   */
  export type logDeleteArgs = {
    /**
     * Select specific fields to fetch from the log
     * 
    **/
    select?: logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: logInclude | null
    /**
     * Filter which log to delete.
     * 
    **/
    where: logWhereUniqueInput
  }


  /**
   * log deleteMany
   */
  export type logDeleteManyArgs = {
    where?: logWhereInput
  }


  /**
   * log without action
   */
  export type logArgs = {
    /**
     * Select specific fields to fetch from the log
     * 
    **/
    select?: logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: logInclude | null
  }



  /**
   * Model staff
   */


  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffMinAggregateOutputType = {
    mobile_no: string | null
    password: string | null
    name: string | null
    email: string | null
    role: staff_role | null
    status: staff_status | null
    registration_no: string | null
    joined_on: Date | null
    last_updated: Date | null
  }

  export type StaffMaxAggregateOutputType = {
    mobile_no: string | null
    password: string | null
    name: string | null
    email: string | null
    role: staff_role | null
    status: staff_status | null
    registration_no: string | null
    joined_on: Date | null
    last_updated: Date | null
  }

  export type StaffCountAggregateOutputType = {
    mobile_no: number
    password: number
    name: number
    email: number
    role: number
    status: number
    registration_no: number
    joined_on: number
    last_updated: number
    _all: number
  }


  export type StaffMinAggregateInputType = {
    mobile_no?: true
    password?: true
    name?: true
    email?: true
    role?: true
    status?: true
    registration_no?: true
    joined_on?: true
    last_updated?: true
  }

  export type StaffMaxAggregateInputType = {
    mobile_no?: true
    password?: true
    name?: true
    email?: true
    role?: true
    status?: true
    registration_no?: true
    joined_on?: true
    last_updated?: true
  }

  export type StaffCountAggregateInputType = {
    mobile_no?: true
    password?: true
    name?: true
    email?: true
    role?: true
    status?: true
    registration_no?: true
    joined_on?: true
    last_updated?: true
    _all?: true
  }

  export type StaffAggregateArgs = {
    /**
     * Filter which staff to aggregate.
     * 
    **/
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     * 
    **/
    orderBy?: Enumerable<staffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }


    
    
  export type StaffGroupByArgs = {
    where?: staffWhereInput
    orderBy?: Enumerable<staffOrderByWithAggregationInput>
    by: Array<StaffScalarFieldEnum>
    having?: staffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }


  export type StaffGroupByOutputType = {
    mobile_no: string
    password: string
    name: string
    email: string
    role: staff_role
    status: staff_status
    registration_no: string
    joined_on: Date
    last_updated: Date
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Promise<
    Array<
      PickArray<StaffGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], StaffGroupByOutputType[P]> 
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      > 
    >


  export type staffSelect = {
    mobile_no?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    status?: boolean
    registration_no?: boolean
    joined_on?: boolean
    last_updated?: boolean
    hospital?: boolean | hospitalArgs
    log?: boolean | logFindManyArgs
    _count?: boolean | StaffCountOutputTypeArgs
  }

  export type staffInclude = {
    hospital?: boolean | hospitalArgs
    log?: boolean | logFindManyArgs
    _count?: boolean | StaffCountOutputTypeArgs
  }

  export type staffGetPayload<
    S extends boolean | null | undefined | staffArgs,
    U = keyof S
      > = S extends true
        ? staff
    : S extends undefined
    ? never
    : S extends staffArgs | staffFindManyArgs
    ?'include' extends U
    ? staff  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'hospital'
        ? hospitalGetPayload<S['include'][P]> :
        P extends 'log'
        ? Array < logGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? StaffCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof staff ?staff [P]
  : 
          P extends 'hospital'
        ? hospitalGetPayload<S['select'][P]> :
        P extends 'log'
        ? Array < logGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? StaffCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : staff
  : staff


  type staffCountArgs = Merge<
    Omit<staffFindManyArgs, 'select' | 'include'> & {
      select?: StaffCountAggregateInputType | true
    }
  >

  export interface staffDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Staff that matches the filter.
     * @param {staffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends staffFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, staffFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'staff'> extends True ? CheckSelect<T, Prisma__staffClient<staff>, Prisma__staffClient<staffGetPayload<T>>> : CheckSelect<T, Prisma__staffClient<staff | null >, Prisma__staffClient<staffGetPayload<T> | null >>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends staffFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, staffFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'staff'> extends True ? CheckSelect<T, Prisma__staffClient<staff>, Prisma__staffClient<staffGetPayload<T>>> : CheckSelect<T, Prisma__staffClient<staff | null >, Prisma__staffClient<staffGetPayload<T> | null >>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `mobile_no`
     * const staffWithMobile_noOnly = await prisma.staff.findMany({ select: { mobile_no: true } })
     * 
    **/
    findMany<T extends staffFindManyArgs>(
      args?: SelectSubset<T, staffFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<staff>>, PrismaPromise<Array<staffGetPayload<T>>>>

    /**
     * Create a Staff.
     * @param {staffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
    **/
    create<T extends staffCreateArgs>(
      args: SelectSubset<T, staffCreateArgs>
    ): CheckSelect<T, Prisma__staffClient<staff>, Prisma__staffClient<staffGetPayload<T>>>

    /**
     * Create many Staff.
     *     @param {staffCreateManyArgs} args - Arguments to create many Staff.
     *     @example
     *     // Create many Staff
     *     const staff = await prisma.staff.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends staffCreateManyArgs>(
      args?: SelectSubset<T, staffCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Staff.
     * @param {staffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
    **/
    delete<T extends staffDeleteArgs>(
      args: SelectSubset<T, staffDeleteArgs>
    ): CheckSelect<T, Prisma__staffClient<staff>, Prisma__staffClient<staffGetPayload<T>>>

    /**
     * Update one Staff.
     * @param {staffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends staffUpdateArgs>(
      args: SelectSubset<T, staffUpdateArgs>
    ): CheckSelect<T, Prisma__staffClient<staff>, Prisma__staffClient<staffGetPayload<T>>>

    /**
     * Delete zero or more Staff.
     * @param {staffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends staffDeleteManyArgs>(
      args?: SelectSubset<T, staffDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends staffUpdateManyArgs>(
      args: SelectSubset<T, staffUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Staff.
     * @param {staffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
    **/
    upsert<T extends staffUpsertArgs>(
      args: SelectSubset<T, staffUpsertArgs>
    ): CheckSelect<T, Prisma__staffClient<staff>, Prisma__staffClient<staffGetPayload<T>>>

    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends staffCountArgs>(
      args?: Subset<T, staffCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__staffClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    hospital<T extends hospitalArgs = {}>(args?: Subset<T, hospitalArgs>): CheckSelect<T, Prisma__hospitalClient<hospital | null >, Prisma__hospitalClient<hospitalGetPayload<T> | null >>;

    log<T extends logFindManyArgs = {}>(args?: Subset<T, logFindManyArgs>): CheckSelect<T, PrismaPromise<Array<log>>, PrismaPromise<Array<logGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * staff findUnique
   */
  export type staffFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the staff
     * 
    **/
    select?: staffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: staffInclude | null
    /**
     * Throw an Error if a staff can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which staff to fetch.
     * 
    **/
    where: staffWhereUniqueInput
  }


  /**
   * staff findFirst
   */
  export type staffFindFirstArgs = {
    /**
     * Select specific fields to fetch from the staff
     * 
    **/
    select?: staffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: staffInclude | null
    /**
     * Throw an Error if a staff can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which staff to fetch.
     * 
    **/
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     * 
    **/
    orderBy?: Enumerable<staffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staff.
     * 
    **/
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff.
     * 
    **/
    distinct?: Enumerable<StaffScalarFieldEnum>
  }


  /**
   * staff findMany
   */
  export type staffFindManyArgs = {
    /**
     * Select specific fields to fetch from the staff
     * 
    **/
    select?: staffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: staffInclude | null
    /**
     * Filter, which staff to fetch.
     * 
    **/
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     * 
    **/
    orderBy?: Enumerable<staffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing staff.
     * 
    **/
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StaffScalarFieldEnum>
  }


  /**
   * staff create
   */
  export type staffCreateArgs = {
    /**
     * Select specific fields to fetch from the staff
     * 
    **/
    select?: staffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: staffInclude | null
    /**
     * The data needed to create a staff.
     * 
    **/
    data: XOR<staffCreateInput, staffUncheckedCreateInput>
  }


  /**
   * staff createMany
   */
  export type staffCreateManyArgs = {
    data: Enumerable<staffCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * staff update
   */
  export type staffUpdateArgs = {
    /**
     * Select specific fields to fetch from the staff
     * 
    **/
    select?: staffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: staffInclude | null
    /**
     * The data needed to update a staff.
     * 
    **/
    data: XOR<staffUpdateInput, staffUncheckedUpdateInput>
    /**
     * Choose, which staff to update.
     * 
    **/
    where: staffWhereUniqueInput
  }


  /**
   * staff updateMany
   */
  export type staffUpdateManyArgs = {
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyInput>
    where?: staffWhereInput
  }


  /**
   * staff upsert
   */
  export type staffUpsertArgs = {
    /**
     * Select specific fields to fetch from the staff
     * 
    **/
    select?: staffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: staffInclude | null
    /**
     * The filter to search for the staff to update in case it exists.
     * 
    **/
    where: staffWhereUniqueInput
    /**
     * In case the staff found by the `where` argument doesn't exist, create a new staff with this data.
     * 
    **/
    create: XOR<staffCreateInput, staffUncheckedCreateInput>
    /**
     * In case the staff was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<staffUpdateInput, staffUncheckedUpdateInput>
  }


  /**
   * staff delete
   */
  export type staffDeleteArgs = {
    /**
     * Select specific fields to fetch from the staff
     * 
    **/
    select?: staffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: staffInclude | null
    /**
     * Filter which staff to delete.
     * 
    **/
    where: staffWhereUniqueInput
  }


  /**
   * staff deleteMany
   */
  export type staffDeleteManyArgs = {
    where?: staffWhereInput
  }


  /**
   * staff without action
   */
  export type staffArgs = {
    /**
     * Select specific fields to fetch from the staff
     * 
    **/
    select?: staffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: staffInclude | null
  }



  /**
   * Model user
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    mobile_no: string | null
    password: string | null
    name: string | null
    sex: user_sex | null
    dob: Date | null
    email: string | null
    document_id: string | null
    joined_on: Date | null
  }

  export type UserMaxAggregateOutputType = {
    mobile_no: string | null
    password: string | null
    name: string | null
    sex: user_sex | null
    dob: Date | null
    email: string | null
    document_id: string | null
    joined_on: Date | null
  }

  export type UserCountAggregateOutputType = {
    mobile_no: number
    password: number
    name: number
    sex: number
    dob: number
    email: number
    document_id: number
    joined_on: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    mobile_no?: true
    password?: true
    name?: true
    sex?: true
    dob?: true
    email?: true
    document_id?: true
    joined_on?: true
  }

  export type UserMaxAggregateInputType = {
    mobile_no?: true
    password?: true
    name?: true
    sex?: true
    dob?: true
    email?: true
    document_id?: true
    joined_on?: true
  }

  export type UserCountAggregateInputType = {
    mobile_no?: true
    password?: true
    name?: true
    sex?: true
    dob?: true
    email?: true
    document_id?: true
    joined_on?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which user to aggregate.
     * 
    **/
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }


    
    
  export type UserGroupByArgs = {
    where?: userWhereInput
    orderBy?: Enumerable<userOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    mobile_no: string
    password: string
    name: string
    sex: user_sex
    dob: Date
    email: string | null
    document_id: string | null
    joined_on: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], UserGroupByOutputType[P]> 
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      > 
    >


  export type userSelect = {
    mobile_no?: boolean
    password?: boolean
    name?: boolean
    sex?: boolean
    dob?: boolean
    email?: boolean
    document_id?: boolean
    joined_on?: boolean
    booking?: boolean | bookingFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type userInclude = {
    booking?: boolean | bookingFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type userGetPayload<
    S extends boolean | null | undefined | userArgs,
    U = keyof S
      > = S extends true
        ? user
    : S extends undefined
    ? never
    : S extends userArgs | userFindManyArgs
    ?'include' extends U
    ? user  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'booking'
        ? Array < bookingGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof user ?user [P]
  : 
          P extends 'booking'
        ? Array < bookingGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : user
  : user


  type userCountArgs = Merge<
    Omit<userFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface userDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, userFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user'> extends True ? CheckSelect<T, Prisma__userClient<user>, Prisma__userClient<userGetPayload<T>>> : CheckSelect<T, Prisma__userClient<user | null >, Prisma__userClient<userGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, userFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user'> extends True ? CheckSelect<T, Prisma__userClient<user>, Prisma__userClient<userGetPayload<T>>> : CheckSelect<T, Prisma__userClient<user | null >, Prisma__userClient<userGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `mobile_no`
     * const userWithMobile_noOnly = await prisma.user.findMany({ select: { mobile_no: true } })
     * 
    **/
    findMany<T extends userFindManyArgs>(
      args?: SelectSubset<T, userFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<user>>, PrismaPromise<Array<userGetPayload<T>>>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs>(
      args: SelectSubset<T, userCreateArgs>
    ): CheckSelect<T, Prisma__userClient<user>, Prisma__userClient<userGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userCreateManyArgs>(
      args?: SelectSubset<T, userCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs>(
      args: SelectSubset<T, userDeleteArgs>
    ): CheckSelect<T, Prisma__userClient<user>, Prisma__userClient<userGetPayload<T>>>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userUpdateArgs>(
      args: SelectSubset<T, userUpdateArgs>
    ): CheckSelect<T, Prisma__userClient<user>, Prisma__userClient<userGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs>(
      args?: SelectSubset<T, userDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userUpdateManyArgs>(
      args: SelectSubset<T, userUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends userUpsertArgs>(
      args: SelectSubset<T, userUpsertArgs>
    ): CheckSelect<T, Prisma__userClient<user>, Prisma__userClient<userGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__userClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    booking<T extends bookingFindManyArgs = {}>(args?: Subset<T, bookingFindManyArgs>): CheckSelect<T, PrismaPromise<Array<booking>>, PrismaPromise<Array<bookingGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * Throw an Error if a user can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which user to fetch.
     * 
    **/
    where: userWhereUniqueInput
  }


  /**
   * user findFirst
   */
  export type userFindFirstArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * Throw an Error if a user can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which user to fetch.
     * 
    **/
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     * 
    **/
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * user findMany
   */
  export type userFindManyArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     * 
    **/
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * user create
   */
  export type userCreateArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * The data needed to create a user.
     * 
    **/
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }


  /**
   * user createMany
   */
  export type userCreateManyArgs = {
    data: Enumerable<userCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * user update
   */
  export type userUpdateArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * The data needed to update a user.
     * 
    **/
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     * 
    **/
    where: userWhereUniqueInput
  }


  /**
   * user updateMany
   */
  export type userUpdateManyArgs = {
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    where?: userWhereInput
  }


  /**
   * user upsert
   */
  export type userUpsertArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * The filter to search for the user to update in case it exists.
     * 
    **/
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     * 
    **/
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }


  /**
   * user delete
   */
  export type userDeleteArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
    /**
     * Filter which user to delete.
     * 
    **/
    where: userWhereUniqueInput
  }


  /**
   * user deleteMany
   */
  export type userDeleteManyArgs = {
    where?: userWhereInput
  }


  /**
   * user without action
   */
  export type userArgs = {
    /**
     * Select specific fields to fetch from the user
     * 
    **/
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userInclude | null
  }



  /**
   * Model vacant_bed_log
   */


  export type AggregateVacant_bed_log = {
    _count: Vacant_bed_logCountAggregateOutputType | null
    _avg: Vacant_bed_logAvgAggregateOutputType | null
    _sum: Vacant_bed_logSumAggregateOutputType | null
    _min: Vacant_bed_logMinAggregateOutputType | null
    _max: Vacant_bed_logMaxAggregateOutputType | null
  }

  export type Vacant_bed_logAvgAggregateOutputType = {
    ward: number | null
    special_ward: number | null
    cabin: number | null
    vip_cabin: number | null
    icu: number | null
    ccu: number | null
    hdu: number | null
    hfncu: number | null
    emergency: number | null
    covid: number | null
    extra: number | null
  }

  export type Vacant_bed_logSumAggregateOutputType = {
    ward: number | null
    special_ward: number | null
    cabin: number | null
    vip_cabin: number | null
    icu: number | null
    ccu: number | null
    hdu: number | null
    hfncu: number | null
    emergency: number | null
    covid: number | null
    extra: number | null
  }

  export type Vacant_bed_logMinAggregateOutputType = {
    registration_no: string | null
    last_updated: Date | null
    ward: number | null
    special_ward: number | null
    cabin: number | null
    vip_cabin: number | null
    icu: number | null
    ccu: number | null
    hdu: number | null
    hfncu: number | null
    emergency: number | null
    covid: number | null
    extra: number | null
  }

  export type Vacant_bed_logMaxAggregateOutputType = {
    registration_no: string | null
    last_updated: Date | null
    ward: number | null
    special_ward: number | null
    cabin: number | null
    vip_cabin: number | null
    icu: number | null
    ccu: number | null
    hdu: number | null
    hfncu: number | null
    emergency: number | null
    covid: number | null
    extra: number | null
  }

  export type Vacant_bed_logCountAggregateOutputType = {
    registration_no: number
    last_updated: number
    ward: number
    special_ward: number
    cabin: number
    vip_cabin: number
    icu: number
    ccu: number
    hdu: number
    hfncu: number
    emergency: number
    covid: number
    extra: number
    _all: number
  }


  export type Vacant_bed_logAvgAggregateInputType = {
    ward?: true
    special_ward?: true
    cabin?: true
    vip_cabin?: true
    icu?: true
    ccu?: true
    hdu?: true
    hfncu?: true
    emergency?: true
    covid?: true
    extra?: true
  }

  export type Vacant_bed_logSumAggregateInputType = {
    ward?: true
    special_ward?: true
    cabin?: true
    vip_cabin?: true
    icu?: true
    ccu?: true
    hdu?: true
    hfncu?: true
    emergency?: true
    covid?: true
    extra?: true
  }

  export type Vacant_bed_logMinAggregateInputType = {
    registration_no?: true
    last_updated?: true
    ward?: true
    special_ward?: true
    cabin?: true
    vip_cabin?: true
    icu?: true
    ccu?: true
    hdu?: true
    hfncu?: true
    emergency?: true
    covid?: true
    extra?: true
  }

  export type Vacant_bed_logMaxAggregateInputType = {
    registration_no?: true
    last_updated?: true
    ward?: true
    special_ward?: true
    cabin?: true
    vip_cabin?: true
    icu?: true
    ccu?: true
    hdu?: true
    hfncu?: true
    emergency?: true
    covid?: true
    extra?: true
  }

  export type Vacant_bed_logCountAggregateInputType = {
    registration_no?: true
    last_updated?: true
    ward?: true
    special_ward?: true
    cabin?: true
    vip_cabin?: true
    icu?: true
    ccu?: true
    hdu?: true
    hfncu?: true
    emergency?: true
    covid?: true
    extra?: true
    _all?: true
  }

  export type Vacant_bed_logAggregateArgs = {
    /**
     * Filter which vacant_bed_log to aggregate.
     * 
    **/
    where?: vacant_bed_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vacant_bed_logs to fetch.
     * 
    **/
    orderBy?: Enumerable<vacant_bed_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: vacant_bed_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vacant_bed_logs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vacant_bed_logs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vacant_bed_logs
    **/
    _count?: true | Vacant_bed_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vacant_bed_logAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vacant_bed_logSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vacant_bed_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vacant_bed_logMaxAggregateInputType
  }

  export type GetVacant_bed_logAggregateType<T extends Vacant_bed_logAggregateArgs> = {
        [P in keyof T & keyof AggregateVacant_bed_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVacant_bed_log[P]>
      : GetScalarType<T[P], AggregateVacant_bed_log[P]>
  }


    
    
  export type Vacant_bed_logGroupByArgs = {
    where?: vacant_bed_logWhereInput
    orderBy?: Enumerable<vacant_bed_logOrderByWithAggregationInput>
    by: Array<Vacant_bed_logScalarFieldEnum>
    having?: vacant_bed_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vacant_bed_logCountAggregateInputType | true
    _avg?: Vacant_bed_logAvgAggregateInputType
    _sum?: Vacant_bed_logSumAggregateInputType
    _min?: Vacant_bed_logMinAggregateInputType
    _max?: Vacant_bed_logMaxAggregateInputType
  }


  export type Vacant_bed_logGroupByOutputType = {
    registration_no: string
    last_updated: Date
    ward: number | null
    special_ward: number | null
    cabin: number | null
    vip_cabin: number | null
    icu: number | null
    ccu: number | null
    hdu: number | null
    hfncu: number | null
    emergency: number | null
    covid: number | null
    extra: number | null
    _count: Vacant_bed_logCountAggregateOutputType | null
    _avg: Vacant_bed_logAvgAggregateOutputType | null
    _sum: Vacant_bed_logSumAggregateOutputType | null
    _min: Vacant_bed_logMinAggregateOutputType | null
    _max: Vacant_bed_logMaxAggregateOutputType | null
  }

  type GetVacant_bed_logGroupByPayload<T extends Vacant_bed_logGroupByArgs> = Promise<
    Array<
      PickArray<Vacant_bed_logGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof Vacant_bed_logGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], Vacant_bed_logGroupByOutputType[P]> 
            : GetScalarType<T[P], Vacant_bed_logGroupByOutputType[P]>
        }
      > 
    >


  export type vacant_bed_logSelect = {
    registration_no?: boolean
    last_updated?: boolean
    ward?: boolean
    special_ward?: boolean
    cabin?: boolean
    vip_cabin?: boolean
    icu?: boolean
    ccu?: boolean
    hdu?: boolean
    hfncu?: boolean
    emergency?: boolean
    covid?: boolean
    extra?: boolean
    hospital?: boolean | hospitalArgs
  }

  export type vacant_bed_logInclude = {
    hospital?: boolean | hospitalArgs
  }

  export type vacant_bed_logGetPayload<
    S extends boolean | null | undefined | vacant_bed_logArgs,
    U = keyof S
      > = S extends true
        ? vacant_bed_log
    : S extends undefined
    ? never
    : S extends vacant_bed_logArgs | vacant_bed_logFindManyArgs
    ?'include' extends U
    ? vacant_bed_log  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'hospital'
        ? hospitalGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof vacant_bed_log ?vacant_bed_log [P]
  : 
          P extends 'hospital'
        ? hospitalGetPayload<S['select'][P]> : never
  } 
    : vacant_bed_log
  : vacant_bed_log


  type vacant_bed_logCountArgs = Merge<
    Omit<vacant_bed_logFindManyArgs, 'select' | 'include'> & {
      select?: Vacant_bed_logCountAggregateInputType | true
    }
  >

  export interface vacant_bed_logDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Vacant_bed_log that matches the filter.
     * @param {vacant_bed_logFindUniqueArgs} args - Arguments to find a Vacant_bed_log
     * @example
     * // Get one Vacant_bed_log
     * const vacant_bed_log = await prisma.vacant_bed_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends vacant_bed_logFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, vacant_bed_logFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'vacant_bed_log'> extends True ? CheckSelect<T, Prisma__vacant_bed_logClient<vacant_bed_log>, Prisma__vacant_bed_logClient<vacant_bed_logGetPayload<T>>> : CheckSelect<T, Prisma__vacant_bed_logClient<vacant_bed_log | null >, Prisma__vacant_bed_logClient<vacant_bed_logGetPayload<T> | null >>

    /**
     * Find the first Vacant_bed_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacant_bed_logFindFirstArgs} args - Arguments to find a Vacant_bed_log
     * @example
     * // Get one Vacant_bed_log
     * const vacant_bed_log = await prisma.vacant_bed_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends vacant_bed_logFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, vacant_bed_logFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'vacant_bed_log'> extends True ? CheckSelect<T, Prisma__vacant_bed_logClient<vacant_bed_log>, Prisma__vacant_bed_logClient<vacant_bed_logGetPayload<T>>> : CheckSelect<T, Prisma__vacant_bed_logClient<vacant_bed_log | null >, Prisma__vacant_bed_logClient<vacant_bed_logGetPayload<T> | null >>

    /**
     * Find zero or more Vacant_bed_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacant_bed_logFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vacant_bed_logs
     * const vacant_bed_logs = await prisma.vacant_bed_log.findMany()
     * 
     * // Get first 10 Vacant_bed_logs
     * const vacant_bed_logs = await prisma.vacant_bed_log.findMany({ take: 10 })
     * 
     * // Only select the `registration_no`
     * const vacant_bed_logWithRegistration_noOnly = await prisma.vacant_bed_log.findMany({ select: { registration_no: true } })
     * 
    **/
    findMany<T extends vacant_bed_logFindManyArgs>(
      args?: SelectSubset<T, vacant_bed_logFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<vacant_bed_log>>, PrismaPromise<Array<vacant_bed_logGetPayload<T>>>>

    /**
     * Create a Vacant_bed_log.
     * @param {vacant_bed_logCreateArgs} args - Arguments to create a Vacant_bed_log.
     * @example
     * // Create one Vacant_bed_log
     * const Vacant_bed_log = await prisma.vacant_bed_log.create({
     *   data: {
     *     // ... data to create a Vacant_bed_log
     *   }
     * })
     * 
    **/
    create<T extends vacant_bed_logCreateArgs>(
      args: SelectSubset<T, vacant_bed_logCreateArgs>
    ): CheckSelect<T, Prisma__vacant_bed_logClient<vacant_bed_log>, Prisma__vacant_bed_logClient<vacant_bed_logGetPayload<T>>>

    /**
     * Create many Vacant_bed_logs.
     *     @param {vacant_bed_logCreateManyArgs} args - Arguments to create many Vacant_bed_logs.
     *     @example
     *     // Create many Vacant_bed_logs
     *     const vacant_bed_log = await prisma.vacant_bed_log.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends vacant_bed_logCreateManyArgs>(
      args?: SelectSubset<T, vacant_bed_logCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Vacant_bed_log.
     * @param {vacant_bed_logDeleteArgs} args - Arguments to delete one Vacant_bed_log.
     * @example
     * // Delete one Vacant_bed_log
     * const Vacant_bed_log = await prisma.vacant_bed_log.delete({
     *   where: {
     *     // ... filter to delete one Vacant_bed_log
     *   }
     * })
     * 
    **/
    delete<T extends vacant_bed_logDeleteArgs>(
      args: SelectSubset<T, vacant_bed_logDeleteArgs>
    ): CheckSelect<T, Prisma__vacant_bed_logClient<vacant_bed_log>, Prisma__vacant_bed_logClient<vacant_bed_logGetPayload<T>>>

    /**
     * Update one Vacant_bed_log.
     * @param {vacant_bed_logUpdateArgs} args - Arguments to update one Vacant_bed_log.
     * @example
     * // Update one Vacant_bed_log
     * const vacant_bed_log = await prisma.vacant_bed_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends vacant_bed_logUpdateArgs>(
      args: SelectSubset<T, vacant_bed_logUpdateArgs>
    ): CheckSelect<T, Prisma__vacant_bed_logClient<vacant_bed_log>, Prisma__vacant_bed_logClient<vacant_bed_logGetPayload<T>>>

    /**
     * Delete zero or more Vacant_bed_logs.
     * @param {vacant_bed_logDeleteManyArgs} args - Arguments to filter Vacant_bed_logs to delete.
     * @example
     * // Delete a few Vacant_bed_logs
     * const { count } = await prisma.vacant_bed_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends vacant_bed_logDeleteManyArgs>(
      args?: SelectSubset<T, vacant_bed_logDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vacant_bed_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacant_bed_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vacant_bed_logs
     * const vacant_bed_log = await prisma.vacant_bed_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends vacant_bed_logUpdateManyArgs>(
      args: SelectSubset<T, vacant_bed_logUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Vacant_bed_log.
     * @param {vacant_bed_logUpsertArgs} args - Arguments to update or create a Vacant_bed_log.
     * @example
     * // Update or create a Vacant_bed_log
     * const vacant_bed_log = await prisma.vacant_bed_log.upsert({
     *   create: {
     *     // ... data to create a Vacant_bed_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vacant_bed_log we want to update
     *   }
     * })
    **/
    upsert<T extends vacant_bed_logUpsertArgs>(
      args: SelectSubset<T, vacant_bed_logUpsertArgs>
    ): CheckSelect<T, Prisma__vacant_bed_logClient<vacant_bed_log>, Prisma__vacant_bed_logClient<vacant_bed_logGetPayload<T>>>

    /**
     * Count the number of Vacant_bed_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacant_bed_logCountArgs} args - Arguments to filter Vacant_bed_logs to count.
     * @example
     * // Count the number of Vacant_bed_logs
     * const count = await prisma.vacant_bed_log.count({
     *   where: {
     *     // ... the filter for the Vacant_bed_logs we want to count
     *   }
     * })
    **/
    count<T extends vacant_bed_logCountArgs>(
      args?: Subset<T, vacant_bed_logCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vacant_bed_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vacant_bed_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vacant_bed_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Vacant_bed_logAggregateArgs>(args: Subset<T, Vacant_bed_logAggregateArgs>): PrismaPromise<GetVacant_bed_logAggregateType<T>>

    /**
     * Group by Vacant_bed_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vacant_bed_logGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Vacant_bed_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Vacant_bed_logGroupByArgs['orderBy'] }
        : { orderBy?: Vacant_bed_logGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Vacant_bed_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVacant_bed_logGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for vacant_bed_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__vacant_bed_logClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    hospital<T extends hospitalArgs = {}>(args?: Subset<T, hospitalArgs>): CheckSelect<T, Prisma__hospitalClient<hospital | null >, Prisma__hospitalClient<hospitalGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * vacant_bed_log findUnique
   */
  export type vacant_bed_logFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the vacant_bed_log
     * 
    **/
    select?: vacant_bed_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: vacant_bed_logInclude | null
    /**
     * Throw an Error if a vacant_bed_log can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which vacant_bed_log to fetch.
     * 
    **/
    where: vacant_bed_logWhereUniqueInput
  }


  /**
   * vacant_bed_log findFirst
   */
  export type vacant_bed_logFindFirstArgs = {
    /**
     * Select specific fields to fetch from the vacant_bed_log
     * 
    **/
    select?: vacant_bed_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: vacant_bed_logInclude | null
    /**
     * Throw an Error if a vacant_bed_log can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which vacant_bed_log to fetch.
     * 
    **/
    where?: vacant_bed_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vacant_bed_logs to fetch.
     * 
    **/
    orderBy?: Enumerable<vacant_bed_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vacant_bed_logs.
     * 
    **/
    cursor?: vacant_bed_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vacant_bed_logs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vacant_bed_logs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vacant_bed_logs.
     * 
    **/
    distinct?: Enumerable<Vacant_bed_logScalarFieldEnum>
  }


  /**
   * vacant_bed_log findMany
   */
  export type vacant_bed_logFindManyArgs = {
    /**
     * Select specific fields to fetch from the vacant_bed_log
     * 
    **/
    select?: vacant_bed_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: vacant_bed_logInclude | null
    /**
     * Filter, which vacant_bed_logs to fetch.
     * 
    **/
    where?: vacant_bed_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vacant_bed_logs to fetch.
     * 
    **/
    orderBy?: Enumerable<vacant_bed_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vacant_bed_logs.
     * 
    **/
    cursor?: vacant_bed_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vacant_bed_logs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vacant_bed_logs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Vacant_bed_logScalarFieldEnum>
  }


  /**
   * vacant_bed_log create
   */
  export type vacant_bed_logCreateArgs = {
    /**
     * Select specific fields to fetch from the vacant_bed_log
     * 
    **/
    select?: vacant_bed_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: vacant_bed_logInclude | null
    /**
     * The data needed to create a vacant_bed_log.
     * 
    **/
    data: XOR<vacant_bed_logCreateInput, vacant_bed_logUncheckedCreateInput>
  }


  /**
   * vacant_bed_log createMany
   */
  export type vacant_bed_logCreateManyArgs = {
    data: Enumerable<vacant_bed_logCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * vacant_bed_log update
   */
  export type vacant_bed_logUpdateArgs = {
    /**
     * Select specific fields to fetch from the vacant_bed_log
     * 
    **/
    select?: vacant_bed_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: vacant_bed_logInclude | null
    /**
     * The data needed to update a vacant_bed_log.
     * 
    **/
    data: XOR<vacant_bed_logUpdateInput, vacant_bed_logUncheckedUpdateInput>
    /**
     * Choose, which vacant_bed_log to update.
     * 
    **/
    where: vacant_bed_logWhereUniqueInput
  }


  /**
   * vacant_bed_log updateMany
   */
  export type vacant_bed_logUpdateManyArgs = {
    data: XOR<vacant_bed_logUpdateManyMutationInput, vacant_bed_logUncheckedUpdateManyInput>
    where?: vacant_bed_logWhereInput
  }


  /**
   * vacant_bed_log upsert
   */
  export type vacant_bed_logUpsertArgs = {
    /**
     * Select specific fields to fetch from the vacant_bed_log
     * 
    **/
    select?: vacant_bed_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: vacant_bed_logInclude | null
    /**
     * The filter to search for the vacant_bed_log to update in case it exists.
     * 
    **/
    where: vacant_bed_logWhereUniqueInput
    /**
     * In case the vacant_bed_log found by the `where` argument doesn't exist, create a new vacant_bed_log with this data.
     * 
    **/
    create: XOR<vacant_bed_logCreateInput, vacant_bed_logUncheckedCreateInput>
    /**
     * In case the vacant_bed_log was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<vacant_bed_logUpdateInput, vacant_bed_logUncheckedUpdateInput>
  }


  /**
   * vacant_bed_log delete
   */
  export type vacant_bed_logDeleteArgs = {
    /**
     * Select specific fields to fetch from the vacant_bed_log
     * 
    **/
    select?: vacant_bed_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: vacant_bed_logInclude | null
    /**
     * Filter which vacant_bed_log to delete.
     * 
    **/
    where: vacant_bed_logWhereUniqueInput
  }


  /**
   * vacant_bed_log deleteMany
   */
  export type vacant_bed_logDeleteManyArgs = {
    where?: vacant_bed_logWhereInput
  }


  /**
   * vacant_bed_log without action
   */
  export type vacant_bed_logArgs = {
    /**
     * Select specific fields to fetch from the vacant_bed_log
     * 
    **/
    select?: vacant_bed_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: vacant_bed_logInclude | null
  }



  /**
   * Model amenity
   */


  export type AggregateAmenity = {
    _count: AmenityCountAggregateOutputType | null
    _min: AmenityMinAggregateOutputType | null
    _max: AmenityMaxAggregateOutputType | null
  }

  export type AmenityMinAggregateOutputType = {
    registration_no: string | null
    atm: boolean | null
    baby_corner: boolean | null
    cafeteria: boolean | null
    gift_shop: boolean | null
    locker: boolean | null
    parking: boolean | null
    pharmacy: boolean | null
    prayer_area: boolean | null
    wheelchair: boolean | null
    wifi: boolean | null
  }

  export type AmenityMaxAggregateOutputType = {
    registration_no: string | null
    atm: boolean | null
    baby_corner: boolean | null
    cafeteria: boolean | null
    gift_shop: boolean | null
    locker: boolean | null
    parking: boolean | null
    pharmacy: boolean | null
    prayer_area: boolean | null
    wheelchair: boolean | null
    wifi: boolean | null
  }

  export type AmenityCountAggregateOutputType = {
    registration_no: number
    atm: number
    baby_corner: number
    cafeteria: number
    gift_shop: number
    locker: number
    parking: number
    pharmacy: number
    prayer_area: number
    wheelchair: number
    wifi: number
    _all: number
  }


  export type AmenityMinAggregateInputType = {
    registration_no?: true
    atm?: true
    baby_corner?: true
    cafeteria?: true
    gift_shop?: true
    locker?: true
    parking?: true
    pharmacy?: true
    prayer_area?: true
    wheelchair?: true
    wifi?: true
  }

  export type AmenityMaxAggregateInputType = {
    registration_no?: true
    atm?: true
    baby_corner?: true
    cafeteria?: true
    gift_shop?: true
    locker?: true
    parking?: true
    pharmacy?: true
    prayer_area?: true
    wheelchair?: true
    wifi?: true
  }

  export type AmenityCountAggregateInputType = {
    registration_no?: true
    atm?: true
    baby_corner?: true
    cafeteria?: true
    gift_shop?: true
    locker?: true
    parking?: true
    pharmacy?: true
    prayer_area?: true
    wheelchair?: true
    wifi?: true
    _all?: true
  }

  export type AmenityAggregateArgs = {
    /**
     * Filter which amenity to aggregate.
     * 
    **/
    where?: amenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of amenities to fetch.
     * 
    **/
    orderBy?: Enumerable<amenityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: amenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` amenities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` amenities.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned amenities
    **/
    _count?: true | AmenityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmenityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmenityMaxAggregateInputType
  }

  export type GetAmenityAggregateType<T extends AmenityAggregateArgs> = {
        [P in keyof T & keyof AggregateAmenity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmenity[P]>
      : GetScalarType<T[P], AggregateAmenity[P]>
  }


    
    
  export type AmenityGroupByArgs = {
    where?: amenityWhereInput
    orderBy?: Enumerable<amenityOrderByWithAggregationInput>
    by: Array<AmenityScalarFieldEnum>
    having?: amenityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmenityCountAggregateInputType | true
    _min?: AmenityMinAggregateInputType
    _max?: AmenityMaxAggregateInputType
  }


  export type AmenityGroupByOutputType = {
    registration_no: string
    atm: boolean | null
    baby_corner: boolean | null
    cafeteria: boolean | null
    gift_shop: boolean | null
    locker: boolean | null
    parking: boolean | null
    pharmacy: boolean | null
    prayer_area: boolean | null
    wheelchair: boolean | null
    wifi: boolean | null
    _count: AmenityCountAggregateOutputType | null
    _min: AmenityMinAggregateOutputType | null
    _max: AmenityMaxAggregateOutputType | null
  }

  type GetAmenityGroupByPayload<T extends AmenityGroupByArgs> = Promise<
    Array<
      PickArray<AmenityGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof AmenityGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], AmenityGroupByOutputType[P]> 
            : GetScalarType<T[P], AmenityGroupByOutputType[P]>
        }
      > 
    >


  export type amenitySelect = {
    registration_no?: boolean
    atm?: boolean
    baby_corner?: boolean
    cafeteria?: boolean
    gift_shop?: boolean
    locker?: boolean
    parking?: boolean
    pharmacy?: boolean
    prayer_area?: boolean
    wheelchair?: boolean
    wifi?: boolean
    hospital?: boolean | hospitalArgs
  }

  export type amenityInclude = {
    hospital?: boolean | hospitalArgs
  }

  export type amenityGetPayload<
    S extends boolean | null | undefined | amenityArgs,
    U = keyof S
      > = S extends true
        ? amenity
    : S extends undefined
    ? never
    : S extends amenityArgs | amenityFindManyArgs
    ?'include' extends U
    ? amenity  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'hospital'
        ? hospitalGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof amenity ?amenity [P]
  : 
          P extends 'hospital'
        ? hospitalGetPayload<S['select'][P]> : never
  } 
    : amenity
  : amenity


  type amenityCountArgs = Merge<
    Omit<amenityFindManyArgs, 'select' | 'include'> & {
      select?: AmenityCountAggregateInputType | true
    }
  >

  export interface amenityDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Amenity that matches the filter.
     * @param {amenityFindUniqueArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends amenityFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, amenityFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'amenity'> extends True ? CheckSelect<T, Prisma__amenityClient<amenity>, Prisma__amenityClient<amenityGetPayload<T>>> : CheckSelect<T, Prisma__amenityClient<amenity | null >, Prisma__amenityClient<amenityGetPayload<T> | null >>

    /**
     * Find the first Amenity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {amenityFindFirstArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends amenityFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, amenityFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'amenity'> extends True ? CheckSelect<T, Prisma__amenityClient<amenity>, Prisma__amenityClient<amenityGetPayload<T>>> : CheckSelect<T, Prisma__amenityClient<amenity | null >, Prisma__amenityClient<amenityGetPayload<T> | null >>

    /**
     * Find zero or more Amenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {amenityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Amenities
     * const amenities = await prisma.amenity.findMany()
     * 
     * // Get first 10 Amenities
     * const amenities = await prisma.amenity.findMany({ take: 10 })
     * 
     * // Only select the `registration_no`
     * const amenityWithRegistration_noOnly = await prisma.amenity.findMany({ select: { registration_no: true } })
     * 
    **/
    findMany<T extends amenityFindManyArgs>(
      args?: SelectSubset<T, amenityFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<amenity>>, PrismaPromise<Array<amenityGetPayload<T>>>>

    /**
     * Create a Amenity.
     * @param {amenityCreateArgs} args - Arguments to create a Amenity.
     * @example
     * // Create one Amenity
     * const Amenity = await prisma.amenity.create({
     *   data: {
     *     // ... data to create a Amenity
     *   }
     * })
     * 
    **/
    create<T extends amenityCreateArgs>(
      args: SelectSubset<T, amenityCreateArgs>
    ): CheckSelect<T, Prisma__amenityClient<amenity>, Prisma__amenityClient<amenityGetPayload<T>>>

    /**
     * Create many Amenities.
     *     @param {amenityCreateManyArgs} args - Arguments to create many Amenities.
     *     @example
     *     // Create many Amenities
     *     const amenity = await prisma.amenity.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends amenityCreateManyArgs>(
      args?: SelectSubset<T, amenityCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Amenity.
     * @param {amenityDeleteArgs} args - Arguments to delete one Amenity.
     * @example
     * // Delete one Amenity
     * const Amenity = await prisma.amenity.delete({
     *   where: {
     *     // ... filter to delete one Amenity
     *   }
     * })
     * 
    **/
    delete<T extends amenityDeleteArgs>(
      args: SelectSubset<T, amenityDeleteArgs>
    ): CheckSelect<T, Prisma__amenityClient<amenity>, Prisma__amenityClient<amenityGetPayload<T>>>

    /**
     * Update one Amenity.
     * @param {amenityUpdateArgs} args - Arguments to update one Amenity.
     * @example
     * // Update one Amenity
     * const amenity = await prisma.amenity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends amenityUpdateArgs>(
      args: SelectSubset<T, amenityUpdateArgs>
    ): CheckSelect<T, Prisma__amenityClient<amenity>, Prisma__amenityClient<amenityGetPayload<T>>>

    /**
     * Delete zero or more Amenities.
     * @param {amenityDeleteManyArgs} args - Arguments to filter Amenities to delete.
     * @example
     * // Delete a few Amenities
     * const { count } = await prisma.amenity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends amenityDeleteManyArgs>(
      args?: SelectSubset<T, amenityDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {amenityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Amenities
     * const amenity = await prisma.amenity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends amenityUpdateManyArgs>(
      args: SelectSubset<T, amenityUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Amenity.
     * @param {amenityUpsertArgs} args - Arguments to update or create a Amenity.
     * @example
     * // Update or create a Amenity
     * const amenity = await prisma.amenity.upsert({
     *   create: {
     *     // ... data to create a Amenity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Amenity we want to update
     *   }
     * })
    **/
    upsert<T extends amenityUpsertArgs>(
      args: SelectSubset<T, amenityUpsertArgs>
    ): CheckSelect<T, Prisma__amenityClient<amenity>, Prisma__amenityClient<amenityGetPayload<T>>>

    /**
     * Count the number of Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {amenityCountArgs} args - Arguments to filter Amenities to count.
     * @example
     * // Count the number of Amenities
     * const count = await prisma.amenity.count({
     *   where: {
     *     // ... the filter for the Amenities we want to count
     *   }
     * })
    **/
    count<T extends amenityCountArgs>(
      args?: Subset<T, amenityCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmenityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Amenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AmenityAggregateArgs>(args: Subset<T, AmenityAggregateArgs>): PrismaPromise<GetAmenityAggregateType<T>>

    /**
     * Group by Amenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AmenityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmenityGroupByArgs['orderBy'] }
        : { orderBy?: AmenityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AmenityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmenityGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for amenity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__amenityClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    hospital<T extends hospitalArgs = {}>(args?: Subset<T, hospitalArgs>): CheckSelect<T, Prisma__hospitalClient<hospital | null >, Prisma__hospitalClient<hospitalGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * amenity findUnique
   */
  export type amenityFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the amenity
     * 
    **/
    select?: amenitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: amenityInclude | null
    /**
     * Throw an Error if a amenity can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which amenity to fetch.
     * 
    **/
    where: amenityWhereUniqueInput
  }


  /**
   * amenity findFirst
   */
  export type amenityFindFirstArgs = {
    /**
     * Select specific fields to fetch from the amenity
     * 
    **/
    select?: amenitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: amenityInclude | null
    /**
     * Throw an Error if a amenity can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which amenity to fetch.
     * 
    **/
    where?: amenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of amenities to fetch.
     * 
    **/
    orderBy?: Enumerable<amenityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for amenities.
     * 
    **/
    cursor?: amenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` amenities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` amenities.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of amenities.
     * 
    **/
    distinct?: Enumerable<AmenityScalarFieldEnum>
  }


  /**
   * amenity findMany
   */
  export type amenityFindManyArgs = {
    /**
     * Select specific fields to fetch from the amenity
     * 
    **/
    select?: amenitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: amenityInclude | null
    /**
     * Filter, which amenities to fetch.
     * 
    **/
    where?: amenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of amenities to fetch.
     * 
    **/
    orderBy?: Enumerable<amenityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing amenities.
     * 
    **/
    cursor?: amenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` amenities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` amenities.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AmenityScalarFieldEnum>
  }


  /**
   * amenity create
   */
  export type amenityCreateArgs = {
    /**
     * Select specific fields to fetch from the amenity
     * 
    **/
    select?: amenitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: amenityInclude | null
    /**
     * The data needed to create a amenity.
     * 
    **/
    data: XOR<amenityCreateInput, amenityUncheckedCreateInput>
  }


  /**
   * amenity createMany
   */
  export type amenityCreateManyArgs = {
    data: Enumerable<amenityCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * amenity update
   */
  export type amenityUpdateArgs = {
    /**
     * Select specific fields to fetch from the amenity
     * 
    **/
    select?: amenitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: amenityInclude | null
    /**
     * The data needed to update a amenity.
     * 
    **/
    data: XOR<amenityUpdateInput, amenityUncheckedUpdateInput>
    /**
     * Choose, which amenity to update.
     * 
    **/
    where: amenityWhereUniqueInput
  }


  /**
   * amenity updateMany
   */
  export type amenityUpdateManyArgs = {
    data: XOR<amenityUpdateManyMutationInput, amenityUncheckedUpdateManyInput>
    where?: amenityWhereInput
  }


  /**
   * amenity upsert
   */
  export type amenityUpsertArgs = {
    /**
     * Select specific fields to fetch from the amenity
     * 
    **/
    select?: amenitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: amenityInclude | null
    /**
     * The filter to search for the amenity to update in case it exists.
     * 
    **/
    where: amenityWhereUniqueInput
    /**
     * In case the amenity found by the `where` argument doesn't exist, create a new amenity with this data.
     * 
    **/
    create: XOR<amenityCreateInput, amenityUncheckedCreateInput>
    /**
     * In case the amenity was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<amenityUpdateInput, amenityUncheckedUpdateInput>
  }


  /**
   * amenity delete
   */
  export type amenityDeleteArgs = {
    /**
     * Select specific fields to fetch from the amenity
     * 
    **/
    select?: amenitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: amenityInclude | null
    /**
     * Filter which amenity to delete.
     * 
    **/
    where: amenityWhereUniqueInput
  }


  /**
   * amenity deleteMany
   */
  export type amenityDeleteManyArgs = {
    where?: amenityWhereInput
  }


  /**
   * amenity without action
   */
  export type amenityArgs = {
    /**
     * Select specific fields to fetch from the amenity
     * 
    **/
    select?: amenitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: amenityInclude | null
  }



  /**
   * Model blood_analytical_service
   */


  export type AggregateBlood_analytical_service = {
    _count: Blood_analytical_serviceCountAggregateOutputType | null
    _min: Blood_analytical_serviceMinAggregateOutputType | null
    _max: Blood_analytical_serviceMaxAggregateOutputType | null
  }

  export type Blood_analytical_serviceMinAggregateOutputType = {
    registration_no: string | null
    antibody_analysis: boolean | null
    cbc: boolean | null
    creatinine_analysis: boolean | null
    crp: boolean | null
    esr: boolean | null
    fobt: boolean | null
    hematocrit: boolean | null
    kidney_function_analysis: boolean | null
    lipid_profile: boolean | null
    liver_function_analysis: boolean | null
    rf: boolean | null
    serum_analysis: boolean | null
    sr: boolean | null
  }

  export type Blood_analytical_serviceMaxAggregateOutputType = {
    registration_no: string | null
    antibody_analysis: boolean | null
    cbc: boolean | null
    creatinine_analysis: boolean | null
    crp: boolean | null
    esr: boolean | null
    fobt: boolean | null
    hematocrit: boolean | null
    kidney_function_analysis: boolean | null
    lipid_profile: boolean | null
    liver_function_analysis: boolean | null
    rf: boolean | null
    serum_analysis: boolean | null
    sr: boolean | null
  }

  export type Blood_analytical_serviceCountAggregateOutputType = {
    registration_no: number
    antibody_analysis: number
    cbc: number
    creatinine_analysis: number
    crp: number
    esr: number
    fobt: number
    hematocrit: number
    kidney_function_analysis: number
    lipid_profile: number
    liver_function_analysis: number
    rf: number
    serum_analysis: number
    sr: number
    _all: number
  }


  export type Blood_analytical_serviceMinAggregateInputType = {
    registration_no?: true
    antibody_analysis?: true
    cbc?: true
    creatinine_analysis?: true
    crp?: true
    esr?: true
    fobt?: true
    hematocrit?: true
    kidney_function_analysis?: true
    lipid_profile?: true
    liver_function_analysis?: true
    rf?: true
    serum_analysis?: true
    sr?: true
  }

  export type Blood_analytical_serviceMaxAggregateInputType = {
    registration_no?: true
    antibody_analysis?: true
    cbc?: true
    creatinine_analysis?: true
    crp?: true
    esr?: true
    fobt?: true
    hematocrit?: true
    kidney_function_analysis?: true
    lipid_profile?: true
    liver_function_analysis?: true
    rf?: true
    serum_analysis?: true
    sr?: true
  }

  export type Blood_analytical_serviceCountAggregateInputType = {
    registration_no?: true
    antibody_analysis?: true
    cbc?: true
    creatinine_analysis?: true
    crp?: true
    esr?: true
    fobt?: true
    hematocrit?: true
    kidney_function_analysis?: true
    lipid_profile?: true
    liver_function_analysis?: true
    rf?: true
    serum_analysis?: true
    sr?: true
    _all?: true
  }

  export type Blood_analytical_serviceAggregateArgs = {
    /**
     * Filter which blood_analytical_service to aggregate.
     * 
    **/
    where?: blood_analytical_serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blood_analytical_services to fetch.
     * 
    **/
    orderBy?: Enumerable<blood_analytical_serviceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: blood_analytical_serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blood_analytical_services from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blood_analytical_services.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blood_analytical_services
    **/
    _count?: true | Blood_analytical_serviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Blood_analytical_serviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Blood_analytical_serviceMaxAggregateInputType
  }

  export type GetBlood_analytical_serviceAggregateType<T extends Blood_analytical_serviceAggregateArgs> = {
        [P in keyof T & keyof AggregateBlood_analytical_service]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlood_analytical_service[P]>
      : GetScalarType<T[P], AggregateBlood_analytical_service[P]>
  }


    
    
  export type Blood_analytical_serviceGroupByArgs = {
    where?: blood_analytical_serviceWhereInput
    orderBy?: Enumerable<blood_analytical_serviceOrderByWithAggregationInput>
    by: Array<Blood_analytical_serviceScalarFieldEnum>
    having?: blood_analytical_serviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Blood_analytical_serviceCountAggregateInputType | true
    _min?: Blood_analytical_serviceMinAggregateInputType
    _max?: Blood_analytical_serviceMaxAggregateInputType
  }


  export type Blood_analytical_serviceGroupByOutputType = {
    registration_no: string
    antibody_analysis: boolean | null
    cbc: boolean | null
    creatinine_analysis: boolean | null
    crp: boolean | null
    esr: boolean | null
    fobt: boolean | null
    hematocrit: boolean | null
    kidney_function_analysis: boolean | null
    lipid_profile: boolean | null
    liver_function_analysis: boolean | null
    rf: boolean | null
    serum_analysis: boolean | null
    sr: boolean | null
    _count: Blood_analytical_serviceCountAggregateOutputType | null
    _min: Blood_analytical_serviceMinAggregateOutputType | null
    _max: Blood_analytical_serviceMaxAggregateOutputType | null
  }

  type GetBlood_analytical_serviceGroupByPayload<T extends Blood_analytical_serviceGroupByArgs> = Promise<
    Array<
      PickArray<Blood_analytical_serviceGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof Blood_analytical_serviceGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], Blood_analytical_serviceGroupByOutputType[P]> 
            : GetScalarType<T[P], Blood_analytical_serviceGroupByOutputType[P]>
        }
      > 
    >


  export type blood_analytical_serviceSelect = {
    registration_no?: boolean
    antibody_analysis?: boolean
    cbc?: boolean
    creatinine_analysis?: boolean
    crp?: boolean
    esr?: boolean
    fobt?: boolean
    hematocrit?: boolean
    kidney_function_analysis?: boolean
    lipid_profile?: boolean
    liver_function_analysis?: boolean
    rf?: boolean
    serum_analysis?: boolean
    sr?: boolean
    hospital?: boolean | hospitalArgs
  }

  export type blood_analytical_serviceInclude = {
    hospital?: boolean | hospitalArgs
  }

  export type blood_analytical_serviceGetPayload<
    S extends boolean | null | undefined | blood_analytical_serviceArgs,
    U = keyof S
      > = S extends true
        ? blood_analytical_service
    : S extends undefined
    ? never
    : S extends blood_analytical_serviceArgs | blood_analytical_serviceFindManyArgs
    ?'include' extends U
    ? blood_analytical_service  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'hospital'
        ? hospitalGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof blood_analytical_service ?blood_analytical_service [P]
  : 
          P extends 'hospital'
        ? hospitalGetPayload<S['select'][P]> : never
  } 
    : blood_analytical_service
  : blood_analytical_service


  type blood_analytical_serviceCountArgs = Merge<
    Omit<blood_analytical_serviceFindManyArgs, 'select' | 'include'> & {
      select?: Blood_analytical_serviceCountAggregateInputType | true
    }
  >

  export interface blood_analytical_serviceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Blood_analytical_service that matches the filter.
     * @param {blood_analytical_serviceFindUniqueArgs} args - Arguments to find a Blood_analytical_service
     * @example
     * // Get one Blood_analytical_service
     * const blood_analytical_service = await prisma.blood_analytical_service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends blood_analytical_serviceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, blood_analytical_serviceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'blood_analytical_service'> extends True ? CheckSelect<T, Prisma__blood_analytical_serviceClient<blood_analytical_service>, Prisma__blood_analytical_serviceClient<blood_analytical_serviceGetPayload<T>>> : CheckSelect<T, Prisma__blood_analytical_serviceClient<blood_analytical_service | null >, Prisma__blood_analytical_serviceClient<blood_analytical_serviceGetPayload<T> | null >>

    /**
     * Find the first Blood_analytical_service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blood_analytical_serviceFindFirstArgs} args - Arguments to find a Blood_analytical_service
     * @example
     * // Get one Blood_analytical_service
     * const blood_analytical_service = await prisma.blood_analytical_service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends blood_analytical_serviceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, blood_analytical_serviceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'blood_analytical_service'> extends True ? CheckSelect<T, Prisma__blood_analytical_serviceClient<blood_analytical_service>, Prisma__blood_analytical_serviceClient<blood_analytical_serviceGetPayload<T>>> : CheckSelect<T, Prisma__blood_analytical_serviceClient<blood_analytical_service | null >, Prisma__blood_analytical_serviceClient<blood_analytical_serviceGetPayload<T> | null >>

    /**
     * Find zero or more Blood_analytical_services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blood_analytical_serviceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blood_analytical_services
     * const blood_analytical_services = await prisma.blood_analytical_service.findMany()
     * 
     * // Get first 10 Blood_analytical_services
     * const blood_analytical_services = await prisma.blood_analytical_service.findMany({ take: 10 })
     * 
     * // Only select the `registration_no`
     * const blood_analytical_serviceWithRegistration_noOnly = await prisma.blood_analytical_service.findMany({ select: { registration_no: true } })
     * 
    **/
    findMany<T extends blood_analytical_serviceFindManyArgs>(
      args?: SelectSubset<T, blood_analytical_serviceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<blood_analytical_service>>, PrismaPromise<Array<blood_analytical_serviceGetPayload<T>>>>

    /**
     * Create a Blood_analytical_service.
     * @param {blood_analytical_serviceCreateArgs} args - Arguments to create a Blood_analytical_service.
     * @example
     * // Create one Blood_analytical_service
     * const Blood_analytical_service = await prisma.blood_analytical_service.create({
     *   data: {
     *     // ... data to create a Blood_analytical_service
     *   }
     * })
     * 
    **/
    create<T extends blood_analytical_serviceCreateArgs>(
      args: SelectSubset<T, blood_analytical_serviceCreateArgs>
    ): CheckSelect<T, Prisma__blood_analytical_serviceClient<blood_analytical_service>, Prisma__blood_analytical_serviceClient<blood_analytical_serviceGetPayload<T>>>

    /**
     * Create many Blood_analytical_services.
     *     @param {blood_analytical_serviceCreateManyArgs} args - Arguments to create many Blood_analytical_services.
     *     @example
     *     // Create many Blood_analytical_services
     *     const blood_analytical_service = await prisma.blood_analytical_service.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends blood_analytical_serviceCreateManyArgs>(
      args?: SelectSubset<T, blood_analytical_serviceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Blood_analytical_service.
     * @param {blood_analytical_serviceDeleteArgs} args - Arguments to delete one Blood_analytical_service.
     * @example
     * // Delete one Blood_analytical_service
     * const Blood_analytical_service = await prisma.blood_analytical_service.delete({
     *   where: {
     *     // ... filter to delete one Blood_analytical_service
     *   }
     * })
     * 
    **/
    delete<T extends blood_analytical_serviceDeleteArgs>(
      args: SelectSubset<T, blood_analytical_serviceDeleteArgs>
    ): CheckSelect<T, Prisma__blood_analytical_serviceClient<blood_analytical_service>, Prisma__blood_analytical_serviceClient<blood_analytical_serviceGetPayload<T>>>

    /**
     * Update one Blood_analytical_service.
     * @param {blood_analytical_serviceUpdateArgs} args - Arguments to update one Blood_analytical_service.
     * @example
     * // Update one Blood_analytical_service
     * const blood_analytical_service = await prisma.blood_analytical_service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends blood_analytical_serviceUpdateArgs>(
      args: SelectSubset<T, blood_analytical_serviceUpdateArgs>
    ): CheckSelect<T, Prisma__blood_analytical_serviceClient<blood_analytical_service>, Prisma__blood_analytical_serviceClient<blood_analytical_serviceGetPayload<T>>>

    /**
     * Delete zero or more Blood_analytical_services.
     * @param {blood_analytical_serviceDeleteManyArgs} args - Arguments to filter Blood_analytical_services to delete.
     * @example
     * // Delete a few Blood_analytical_services
     * const { count } = await prisma.blood_analytical_service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends blood_analytical_serviceDeleteManyArgs>(
      args?: SelectSubset<T, blood_analytical_serviceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blood_analytical_services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blood_analytical_serviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blood_analytical_services
     * const blood_analytical_service = await prisma.blood_analytical_service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends blood_analytical_serviceUpdateManyArgs>(
      args: SelectSubset<T, blood_analytical_serviceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Blood_analytical_service.
     * @param {blood_analytical_serviceUpsertArgs} args - Arguments to update or create a Blood_analytical_service.
     * @example
     * // Update or create a Blood_analytical_service
     * const blood_analytical_service = await prisma.blood_analytical_service.upsert({
     *   create: {
     *     // ... data to create a Blood_analytical_service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blood_analytical_service we want to update
     *   }
     * })
    **/
    upsert<T extends blood_analytical_serviceUpsertArgs>(
      args: SelectSubset<T, blood_analytical_serviceUpsertArgs>
    ): CheckSelect<T, Prisma__blood_analytical_serviceClient<blood_analytical_service>, Prisma__blood_analytical_serviceClient<blood_analytical_serviceGetPayload<T>>>

    /**
     * Count the number of Blood_analytical_services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blood_analytical_serviceCountArgs} args - Arguments to filter Blood_analytical_services to count.
     * @example
     * // Count the number of Blood_analytical_services
     * const count = await prisma.blood_analytical_service.count({
     *   where: {
     *     // ... the filter for the Blood_analytical_services we want to count
     *   }
     * })
    **/
    count<T extends blood_analytical_serviceCountArgs>(
      args?: Subset<T, blood_analytical_serviceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Blood_analytical_serviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blood_analytical_service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Blood_analytical_serviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Blood_analytical_serviceAggregateArgs>(args: Subset<T, Blood_analytical_serviceAggregateArgs>): PrismaPromise<GetBlood_analytical_serviceAggregateType<T>>

    /**
     * Group by Blood_analytical_service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Blood_analytical_serviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Blood_analytical_serviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Blood_analytical_serviceGroupByArgs['orderBy'] }
        : { orderBy?: Blood_analytical_serviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Blood_analytical_serviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlood_analytical_serviceGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for blood_analytical_service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__blood_analytical_serviceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    hospital<T extends hospitalArgs = {}>(args?: Subset<T, hospitalArgs>): CheckSelect<T, Prisma__hospitalClient<hospital | null >, Prisma__hospitalClient<hospitalGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * blood_analytical_service findUnique
   */
  export type blood_analytical_serviceFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the blood_analytical_service
     * 
    **/
    select?: blood_analytical_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: blood_analytical_serviceInclude | null
    /**
     * Throw an Error if a blood_analytical_service can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which blood_analytical_service to fetch.
     * 
    **/
    where: blood_analytical_serviceWhereUniqueInput
  }


  /**
   * blood_analytical_service findFirst
   */
  export type blood_analytical_serviceFindFirstArgs = {
    /**
     * Select specific fields to fetch from the blood_analytical_service
     * 
    **/
    select?: blood_analytical_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: blood_analytical_serviceInclude | null
    /**
     * Throw an Error if a blood_analytical_service can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which blood_analytical_service to fetch.
     * 
    **/
    where?: blood_analytical_serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blood_analytical_services to fetch.
     * 
    **/
    orderBy?: Enumerable<blood_analytical_serviceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blood_analytical_services.
     * 
    **/
    cursor?: blood_analytical_serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blood_analytical_services from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blood_analytical_services.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blood_analytical_services.
     * 
    **/
    distinct?: Enumerable<Blood_analytical_serviceScalarFieldEnum>
  }


  /**
   * blood_analytical_service findMany
   */
  export type blood_analytical_serviceFindManyArgs = {
    /**
     * Select specific fields to fetch from the blood_analytical_service
     * 
    **/
    select?: blood_analytical_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: blood_analytical_serviceInclude | null
    /**
     * Filter, which blood_analytical_services to fetch.
     * 
    **/
    where?: blood_analytical_serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blood_analytical_services to fetch.
     * 
    **/
    orderBy?: Enumerable<blood_analytical_serviceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blood_analytical_services.
     * 
    **/
    cursor?: blood_analytical_serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blood_analytical_services from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blood_analytical_services.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Blood_analytical_serviceScalarFieldEnum>
  }


  /**
   * blood_analytical_service create
   */
  export type blood_analytical_serviceCreateArgs = {
    /**
     * Select specific fields to fetch from the blood_analytical_service
     * 
    **/
    select?: blood_analytical_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: blood_analytical_serviceInclude | null
    /**
     * The data needed to create a blood_analytical_service.
     * 
    **/
    data: XOR<blood_analytical_serviceCreateInput, blood_analytical_serviceUncheckedCreateInput>
  }


  /**
   * blood_analytical_service createMany
   */
  export type blood_analytical_serviceCreateManyArgs = {
    data: Enumerable<blood_analytical_serviceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * blood_analytical_service update
   */
  export type blood_analytical_serviceUpdateArgs = {
    /**
     * Select specific fields to fetch from the blood_analytical_service
     * 
    **/
    select?: blood_analytical_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: blood_analytical_serviceInclude | null
    /**
     * The data needed to update a blood_analytical_service.
     * 
    **/
    data: XOR<blood_analytical_serviceUpdateInput, blood_analytical_serviceUncheckedUpdateInput>
    /**
     * Choose, which blood_analytical_service to update.
     * 
    **/
    where: blood_analytical_serviceWhereUniqueInput
  }


  /**
   * blood_analytical_service updateMany
   */
  export type blood_analytical_serviceUpdateManyArgs = {
    data: XOR<blood_analytical_serviceUpdateManyMutationInput, blood_analytical_serviceUncheckedUpdateManyInput>
    where?: blood_analytical_serviceWhereInput
  }


  /**
   * blood_analytical_service upsert
   */
  export type blood_analytical_serviceUpsertArgs = {
    /**
     * Select specific fields to fetch from the blood_analytical_service
     * 
    **/
    select?: blood_analytical_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: blood_analytical_serviceInclude | null
    /**
     * The filter to search for the blood_analytical_service to update in case it exists.
     * 
    **/
    where: blood_analytical_serviceWhereUniqueInput
    /**
     * In case the blood_analytical_service found by the `where` argument doesn't exist, create a new blood_analytical_service with this data.
     * 
    **/
    create: XOR<blood_analytical_serviceCreateInput, blood_analytical_serviceUncheckedCreateInput>
    /**
     * In case the blood_analytical_service was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<blood_analytical_serviceUpdateInput, blood_analytical_serviceUncheckedUpdateInput>
  }


  /**
   * blood_analytical_service delete
   */
  export type blood_analytical_serviceDeleteArgs = {
    /**
     * Select specific fields to fetch from the blood_analytical_service
     * 
    **/
    select?: blood_analytical_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: blood_analytical_serviceInclude | null
    /**
     * Filter which blood_analytical_service to delete.
     * 
    **/
    where: blood_analytical_serviceWhereUniqueInput
  }


  /**
   * blood_analytical_service deleteMany
   */
  export type blood_analytical_serviceDeleteManyArgs = {
    where?: blood_analytical_serviceWhereInput
  }


  /**
   * blood_analytical_service without action
   */
  export type blood_analytical_serviceArgs = {
    /**
     * Select specific fields to fetch from the blood_analytical_service
     * 
    **/
    select?: blood_analytical_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: blood_analytical_serviceInclude | null
  }



  /**
   * Model diagnostic_imaging_service
   */


  export type AggregateDiagnostic_imaging_service = {
    _count: Diagnostic_imaging_serviceCountAggregateOutputType | null
    _min: Diagnostic_imaging_serviceMinAggregateOutputType | null
    _max: Diagnostic_imaging_serviceMaxAggregateOutputType | null
  }

  export type Diagnostic_imaging_serviceMinAggregateOutputType = {
    registration_no: string | null
    angiocardiography: boolean | null
    angiography: boolean | null
    cta: boolean | null
    ct: boolean | null
    coloscopy: boolean | null
    cystoscopy: boolean | null
    echocardiography: boolean | null
    endoscopy: boolean | null
    fluoroscopy: boolean | null
    mra: boolean | null
    mri: boolean | null
    mrs: boolean | null
    mammography: boolean | null
    pet: boolean | null
    pet_ct: boolean | null
    spect: boolean | null
    ultrasound: boolean | null
    x_ray: boolean | null
  }

  export type Diagnostic_imaging_serviceMaxAggregateOutputType = {
    registration_no: string | null
    angiocardiography: boolean | null
    angiography: boolean | null
    cta: boolean | null
    ct: boolean | null
    coloscopy: boolean | null
    cystoscopy: boolean | null
    echocardiography: boolean | null
    endoscopy: boolean | null
    fluoroscopy: boolean | null
    mra: boolean | null
    mri: boolean | null
    mrs: boolean | null
    mammography: boolean | null
    pet: boolean | null
    pet_ct: boolean | null
    spect: boolean | null
    ultrasound: boolean | null
    x_ray: boolean | null
  }

  export type Diagnostic_imaging_serviceCountAggregateOutputType = {
    registration_no: number
    angiocardiography: number
    angiography: number
    cta: number
    ct: number
    coloscopy: number
    cystoscopy: number
    echocardiography: number
    endoscopy: number
    fluoroscopy: number
    mra: number
    mri: number
    mrs: number
    mammography: number
    pet: number
    pet_ct: number
    spect: number
    ultrasound: number
    x_ray: number
    _all: number
  }


  export type Diagnostic_imaging_serviceMinAggregateInputType = {
    registration_no?: true
    angiocardiography?: true
    angiography?: true
    cta?: true
    ct?: true
    coloscopy?: true
    cystoscopy?: true
    echocardiography?: true
    endoscopy?: true
    fluoroscopy?: true
    mra?: true
    mri?: true
    mrs?: true
    mammography?: true
    pet?: true
    pet_ct?: true
    spect?: true
    ultrasound?: true
    x_ray?: true
  }

  export type Diagnostic_imaging_serviceMaxAggregateInputType = {
    registration_no?: true
    angiocardiography?: true
    angiography?: true
    cta?: true
    ct?: true
    coloscopy?: true
    cystoscopy?: true
    echocardiography?: true
    endoscopy?: true
    fluoroscopy?: true
    mra?: true
    mri?: true
    mrs?: true
    mammography?: true
    pet?: true
    pet_ct?: true
    spect?: true
    ultrasound?: true
    x_ray?: true
  }

  export type Diagnostic_imaging_serviceCountAggregateInputType = {
    registration_no?: true
    angiocardiography?: true
    angiography?: true
    cta?: true
    ct?: true
    coloscopy?: true
    cystoscopy?: true
    echocardiography?: true
    endoscopy?: true
    fluoroscopy?: true
    mra?: true
    mri?: true
    mrs?: true
    mammography?: true
    pet?: true
    pet_ct?: true
    spect?: true
    ultrasound?: true
    x_ray?: true
    _all?: true
  }

  export type Diagnostic_imaging_serviceAggregateArgs = {
    /**
     * Filter which diagnostic_imaging_service to aggregate.
     * 
    **/
    where?: diagnostic_imaging_serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnostic_imaging_services to fetch.
     * 
    **/
    orderBy?: Enumerable<diagnostic_imaging_serviceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: diagnostic_imaging_serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnostic_imaging_services from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnostic_imaging_services.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned diagnostic_imaging_services
    **/
    _count?: true | Diagnostic_imaging_serviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Diagnostic_imaging_serviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Diagnostic_imaging_serviceMaxAggregateInputType
  }

  export type GetDiagnostic_imaging_serviceAggregateType<T extends Diagnostic_imaging_serviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnostic_imaging_service]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnostic_imaging_service[P]>
      : GetScalarType<T[P], AggregateDiagnostic_imaging_service[P]>
  }


    
    
  export type Diagnostic_imaging_serviceGroupByArgs = {
    where?: diagnostic_imaging_serviceWhereInput
    orderBy?: Enumerable<diagnostic_imaging_serviceOrderByWithAggregationInput>
    by: Array<Diagnostic_imaging_serviceScalarFieldEnum>
    having?: diagnostic_imaging_serviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Diagnostic_imaging_serviceCountAggregateInputType | true
    _min?: Diagnostic_imaging_serviceMinAggregateInputType
    _max?: Diagnostic_imaging_serviceMaxAggregateInputType
  }


  export type Diagnostic_imaging_serviceGroupByOutputType = {
    registration_no: string
    angiocardiography: boolean | null
    angiography: boolean | null
    cta: boolean | null
    ct: boolean | null
    coloscopy: boolean | null
    cystoscopy: boolean | null
    echocardiography: boolean | null
    endoscopy: boolean | null
    fluoroscopy: boolean | null
    mra: boolean | null
    mri: boolean | null
    mrs: boolean | null
    mammography: boolean | null
    pet: boolean | null
    pet_ct: boolean | null
    spect: boolean | null
    ultrasound: boolean | null
    x_ray: boolean | null
    _count: Diagnostic_imaging_serviceCountAggregateOutputType | null
    _min: Diagnostic_imaging_serviceMinAggregateOutputType | null
    _max: Diagnostic_imaging_serviceMaxAggregateOutputType | null
  }

  type GetDiagnostic_imaging_serviceGroupByPayload<T extends Diagnostic_imaging_serviceGroupByArgs> = Promise<
    Array<
      PickArray<Diagnostic_imaging_serviceGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof Diagnostic_imaging_serviceGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], Diagnostic_imaging_serviceGroupByOutputType[P]> 
            : GetScalarType<T[P], Diagnostic_imaging_serviceGroupByOutputType[P]>
        }
      > 
    >


  export type diagnostic_imaging_serviceSelect = {
    registration_no?: boolean
    angiocardiography?: boolean
    angiography?: boolean
    cta?: boolean
    ct?: boolean
    coloscopy?: boolean
    cystoscopy?: boolean
    echocardiography?: boolean
    endoscopy?: boolean
    fluoroscopy?: boolean
    mra?: boolean
    mri?: boolean
    mrs?: boolean
    mammography?: boolean
    pet?: boolean
    pet_ct?: boolean
    spect?: boolean
    ultrasound?: boolean
    x_ray?: boolean
    hospital?: boolean | hospitalArgs
  }

  export type diagnostic_imaging_serviceInclude = {
    hospital?: boolean | hospitalArgs
  }

  export type diagnostic_imaging_serviceGetPayload<
    S extends boolean | null | undefined | diagnostic_imaging_serviceArgs,
    U = keyof S
      > = S extends true
        ? diagnostic_imaging_service
    : S extends undefined
    ? never
    : S extends diagnostic_imaging_serviceArgs | diagnostic_imaging_serviceFindManyArgs
    ?'include' extends U
    ? diagnostic_imaging_service  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'hospital'
        ? hospitalGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof diagnostic_imaging_service ?diagnostic_imaging_service [P]
  : 
          P extends 'hospital'
        ? hospitalGetPayload<S['select'][P]> : never
  } 
    : diagnostic_imaging_service
  : diagnostic_imaging_service


  type diagnostic_imaging_serviceCountArgs = Merge<
    Omit<diagnostic_imaging_serviceFindManyArgs, 'select' | 'include'> & {
      select?: Diagnostic_imaging_serviceCountAggregateInputType | true
    }
  >

  export interface diagnostic_imaging_serviceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Diagnostic_imaging_service that matches the filter.
     * @param {diagnostic_imaging_serviceFindUniqueArgs} args - Arguments to find a Diagnostic_imaging_service
     * @example
     * // Get one Diagnostic_imaging_service
     * const diagnostic_imaging_service = await prisma.diagnostic_imaging_service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends diagnostic_imaging_serviceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, diagnostic_imaging_serviceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'diagnostic_imaging_service'> extends True ? CheckSelect<T, Prisma__diagnostic_imaging_serviceClient<diagnostic_imaging_service>, Prisma__diagnostic_imaging_serviceClient<diagnostic_imaging_serviceGetPayload<T>>> : CheckSelect<T, Prisma__diagnostic_imaging_serviceClient<diagnostic_imaging_service | null >, Prisma__diagnostic_imaging_serviceClient<diagnostic_imaging_serviceGetPayload<T> | null >>

    /**
     * Find the first Diagnostic_imaging_service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnostic_imaging_serviceFindFirstArgs} args - Arguments to find a Diagnostic_imaging_service
     * @example
     * // Get one Diagnostic_imaging_service
     * const diagnostic_imaging_service = await prisma.diagnostic_imaging_service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends diagnostic_imaging_serviceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, diagnostic_imaging_serviceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'diagnostic_imaging_service'> extends True ? CheckSelect<T, Prisma__diagnostic_imaging_serviceClient<diagnostic_imaging_service>, Prisma__diagnostic_imaging_serviceClient<diagnostic_imaging_serviceGetPayload<T>>> : CheckSelect<T, Prisma__diagnostic_imaging_serviceClient<diagnostic_imaging_service | null >, Prisma__diagnostic_imaging_serviceClient<diagnostic_imaging_serviceGetPayload<T> | null >>

    /**
     * Find zero or more Diagnostic_imaging_services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnostic_imaging_serviceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diagnostic_imaging_services
     * const diagnostic_imaging_services = await prisma.diagnostic_imaging_service.findMany()
     * 
     * // Get first 10 Diagnostic_imaging_services
     * const diagnostic_imaging_services = await prisma.diagnostic_imaging_service.findMany({ take: 10 })
     * 
     * // Only select the `registration_no`
     * const diagnostic_imaging_serviceWithRegistration_noOnly = await prisma.diagnostic_imaging_service.findMany({ select: { registration_no: true } })
     * 
    **/
    findMany<T extends diagnostic_imaging_serviceFindManyArgs>(
      args?: SelectSubset<T, diagnostic_imaging_serviceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<diagnostic_imaging_service>>, PrismaPromise<Array<diagnostic_imaging_serviceGetPayload<T>>>>

    /**
     * Create a Diagnostic_imaging_service.
     * @param {diagnostic_imaging_serviceCreateArgs} args - Arguments to create a Diagnostic_imaging_service.
     * @example
     * // Create one Diagnostic_imaging_service
     * const Diagnostic_imaging_service = await prisma.diagnostic_imaging_service.create({
     *   data: {
     *     // ... data to create a Diagnostic_imaging_service
     *   }
     * })
     * 
    **/
    create<T extends diagnostic_imaging_serviceCreateArgs>(
      args: SelectSubset<T, diagnostic_imaging_serviceCreateArgs>
    ): CheckSelect<T, Prisma__diagnostic_imaging_serviceClient<diagnostic_imaging_service>, Prisma__diagnostic_imaging_serviceClient<diagnostic_imaging_serviceGetPayload<T>>>

    /**
     * Create many Diagnostic_imaging_services.
     *     @param {diagnostic_imaging_serviceCreateManyArgs} args - Arguments to create many Diagnostic_imaging_services.
     *     @example
     *     // Create many Diagnostic_imaging_services
     *     const diagnostic_imaging_service = await prisma.diagnostic_imaging_service.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends diagnostic_imaging_serviceCreateManyArgs>(
      args?: SelectSubset<T, diagnostic_imaging_serviceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Diagnostic_imaging_service.
     * @param {diagnostic_imaging_serviceDeleteArgs} args - Arguments to delete one Diagnostic_imaging_service.
     * @example
     * // Delete one Diagnostic_imaging_service
     * const Diagnostic_imaging_service = await prisma.diagnostic_imaging_service.delete({
     *   where: {
     *     // ... filter to delete one Diagnostic_imaging_service
     *   }
     * })
     * 
    **/
    delete<T extends diagnostic_imaging_serviceDeleteArgs>(
      args: SelectSubset<T, diagnostic_imaging_serviceDeleteArgs>
    ): CheckSelect<T, Prisma__diagnostic_imaging_serviceClient<diagnostic_imaging_service>, Prisma__diagnostic_imaging_serviceClient<diagnostic_imaging_serviceGetPayload<T>>>

    /**
     * Update one Diagnostic_imaging_service.
     * @param {diagnostic_imaging_serviceUpdateArgs} args - Arguments to update one Diagnostic_imaging_service.
     * @example
     * // Update one Diagnostic_imaging_service
     * const diagnostic_imaging_service = await prisma.diagnostic_imaging_service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends diagnostic_imaging_serviceUpdateArgs>(
      args: SelectSubset<T, diagnostic_imaging_serviceUpdateArgs>
    ): CheckSelect<T, Prisma__diagnostic_imaging_serviceClient<diagnostic_imaging_service>, Prisma__diagnostic_imaging_serviceClient<diagnostic_imaging_serviceGetPayload<T>>>

    /**
     * Delete zero or more Diagnostic_imaging_services.
     * @param {diagnostic_imaging_serviceDeleteManyArgs} args - Arguments to filter Diagnostic_imaging_services to delete.
     * @example
     * // Delete a few Diagnostic_imaging_services
     * const { count } = await prisma.diagnostic_imaging_service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends diagnostic_imaging_serviceDeleteManyArgs>(
      args?: SelectSubset<T, diagnostic_imaging_serviceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnostic_imaging_services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnostic_imaging_serviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diagnostic_imaging_services
     * const diagnostic_imaging_service = await prisma.diagnostic_imaging_service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends diagnostic_imaging_serviceUpdateManyArgs>(
      args: SelectSubset<T, diagnostic_imaging_serviceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Diagnostic_imaging_service.
     * @param {diagnostic_imaging_serviceUpsertArgs} args - Arguments to update or create a Diagnostic_imaging_service.
     * @example
     * // Update or create a Diagnostic_imaging_service
     * const diagnostic_imaging_service = await prisma.diagnostic_imaging_service.upsert({
     *   create: {
     *     // ... data to create a Diagnostic_imaging_service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diagnostic_imaging_service we want to update
     *   }
     * })
    **/
    upsert<T extends diagnostic_imaging_serviceUpsertArgs>(
      args: SelectSubset<T, diagnostic_imaging_serviceUpsertArgs>
    ): CheckSelect<T, Prisma__diagnostic_imaging_serviceClient<diagnostic_imaging_service>, Prisma__diagnostic_imaging_serviceClient<diagnostic_imaging_serviceGetPayload<T>>>

    /**
     * Count the number of Diagnostic_imaging_services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnostic_imaging_serviceCountArgs} args - Arguments to filter Diagnostic_imaging_services to count.
     * @example
     * // Count the number of Diagnostic_imaging_services
     * const count = await prisma.diagnostic_imaging_service.count({
     *   where: {
     *     // ... the filter for the Diagnostic_imaging_services we want to count
     *   }
     * })
    **/
    count<T extends diagnostic_imaging_serviceCountArgs>(
      args?: Subset<T, diagnostic_imaging_serviceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Diagnostic_imaging_serviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diagnostic_imaging_service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Diagnostic_imaging_serviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Diagnostic_imaging_serviceAggregateArgs>(args: Subset<T, Diagnostic_imaging_serviceAggregateArgs>): PrismaPromise<GetDiagnostic_imaging_serviceAggregateType<T>>

    /**
     * Group by Diagnostic_imaging_service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Diagnostic_imaging_serviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Diagnostic_imaging_serviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Diagnostic_imaging_serviceGroupByArgs['orderBy'] }
        : { orderBy?: Diagnostic_imaging_serviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Diagnostic_imaging_serviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnostic_imaging_serviceGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for diagnostic_imaging_service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__diagnostic_imaging_serviceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    hospital<T extends hospitalArgs = {}>(args?: Subset<T, hospitalArgs>): CheckSelect<T, Prisma__hospitalClient<hospital | null >, Prisma__hospitalClient<hospitalGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * diagnostic_imaging_service findUnique
   */
  export type diagnostic_imaging_serviceFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the diagnostic_imaging_service
     * 
    **/
    select?: diagnostic_imaging_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: diagnostic_imaging_serviceInclude | null
    /**
     * Throw an Error if a diagnostic_imaging_service can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which diagnostic_imaging_service to fetch.
     * 
    **/
    where: diagnostic_imaging_serviceWhereUniqueInput
  }


  /**
   * diagnostic_imaging_service findFirst
   */
  export type diagnostic_imaging_serviceFindFirstArgs = {
    /**
     * Select specific fields to fetch from the diagnostic_imaging_service
     * 
    **/
    select?: diagnostic_imaging_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: diagnostic_imaging_serviceInclude | null
    /**
     * Throw an Error if a diagnostic_imaging_service can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which diagnostic_imaging_service to fetch.
     * 
    **/
    where?: diagnostic_imaging_serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnostic_imaging_services to fetch.
     * 
    **/
    orderBy?: Enumerable<diagnostic_imaging_serviceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for diagnostic_imaging_services.
     * 
    **/
    cursor?: diagnostic_imaging_serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnostic_imaging_services from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnostic_imaging_services.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diagnostic_imaging_services.
     * 
    **/
    distinct?: Enumerable<Diagnostic_imaging_serviceScalarFieldEnum>
  }


  /**
   * diagnostic_imaging_service findMany
   */
  export type diagnostic_imaging_serviceFindManyArgs = {
    /**
     * Select specific fields to fetch from the diagnostic_imaging_service
     * 
    **/
    select?: diagnostic_imaging_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: diagnostic_imaging_serviceInclude | null
    /**
     * Filter, which diagnostic_imaging_services to fetch.
     * 
    **/
    where?: diagnostic_imaging_serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnostic_imaging_services to fetch.
     * 
    **/
    orderBy?: Enumerable<diagnostic_imaging_serviceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing diagnostic_imaging_services.
     * 
    **/
    cursor?: diagnostic_imaging_serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnostic_imaging_services from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnostic_imaging_services.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Diagnostic_imaging_serviceScalarFieldEnum>
  }


  /**
   * diagnostic_imaging_service create
   */
  export type diagnostic_imaging_serviceCreateArgs = {
    /**
     * Select specific fields to fetch from the diagnostic_imaging_service
     * 
    **/
    select?: diagnostic_imaging_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: diagnostic_imaging_serviceInclude | null
    /**
     * The data needed to create a diagnostic_imaging_service.
     * 
    **/
    data: XOR<diagnostic_imaging_serviceCreateInput, diagnostic_imaging_serviceUncheckedCreateInput>
  }


  /**
   * diagnostic_imaging_service createMany
   */
  export type diagnostic_imaging_serviceCreateManyArgs = {
    data: Enumerable<diagnostic_imaging_serviceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * diagnostic_imaging_service update
   */
  export type diagnostic_imaging_serviceUpdateArgs = {
    /**
     * Select specific fields to fetch from the diagnostic_imaging_service
     * 
    **/
    select?: diagnostic_imaging_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: diagnostic_imaging_serviceInclude | null
    /**
     * The data needed to update a diagnostic_imaging_service.
     * 
    **/
    data: XOR<diagnostic_imaging_serviceUpdateInput, diagnostic_imaging_serviceUncheckedUpdateInput>
    /**
     * Choose, which diagnostic_imaging_service to update.
     * 
    **/
    where: diagnostic_imaging_serviceWhereUniqueInput
  }


  /**
   * diagnostic_imaging_service updateMany
   */
  export type diagnostic_imaging_serviceUpdateManyArgs = {
    data: XOR<diagnostic_imaging_serviceUpdateManyMutationInput, diagnostic_imaging_serviceUncheckedUpdateManyInput>
    where?: diagnostic_imaging_serviceWhereInput
  }


  /**
   * diagnostic_imaging_service upsert
   */
  export type diagnostic_imaging_serviceUpsertArgs = {
    /**
     * Select specific fields to fetch from the diagnostic_imaging_service
     * 
    **/
    select?: diagnostic_imaging_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: diagnostic_imaging_serviceInclude | null
    /**
     * The filter to search for the diagnostic_imaging_service to update in case it exists.
     * 
    **/
    where: diagnostic_imaging_serviceWhereUniqueInput
    /**
     * In case the diagnostic_imaging_service found by the `where` argument doesn't exist, create a new diagnostic_imaging_service with this data.
     * 
    **/
    create: XOR<diagnostic_imaging_serviceCreateInput, diagnostic_imaging_serviceUncheckedCreateInput>
    /**
     * In case the diagnostic_imaging_service was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<diagnostic_imaging_serviceUpdateInput, diagnostic_imaging_serviceUncheckedUpdateInput>
  }


  /**
   * diagnostic_imaging_service delete
   */
  export type diagnostic_imaging_serviceDeleteArgs = {
    /**
     * Select specific fields to fetch from the diagnostic_imaging_service
     * 
    **/
    select?: diagnostic_imaging_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: diagnostic_imaging_serviceInclude | null
    /**
     * Filter which diagnostic_imaging_service to delete.
     * 
    **/
    where: diagnostic_imaging_serviceWhereUniqueInput
  }


  /**
   * diagnostic_imaging_service deleteMany
   */
  export type diagnostic_imaging_serviceDeleteManyArgs = {
    where?: diagnostic_imaging_serviceWhereInput
  }


  /**
   * diagnostic_imaging_service without action
   */
  export type diagnostic_imaging_serviceArgs = {
    /**
     * Select specific fields to fetch from the diagnostic_imaging_service
     * 
    **/
    select?: diagnostic_imaging_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: diagnostic_imaging_serviceInclude | null
  }



  /**
   * Model doctor
   */


  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorMinAggregateOutputType = {
    id: string | null
    registration_no: string | null
    name: string | null
    designation: string | null
    chamber: string | null
    bio: string | null
    joined_on: Date | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: string | null
    registration_no: string | null
    name: string | null
    designation: string | null
    chamber: string | null
    bio: string | null
    joined_on: Date | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    registration_no: number
    name: number
    designation: number
    chamber: number
    bio: number
    joined_on: number
    _all: number
  }


  export type DoctorMinAggregateInputType = {
    id?: true
    registration_no?: true
    name?: true
    designation?: true
    chamber?: true
    bio?: true
    joined_on?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    registration_no?: true
    name?: true
    designation?: true
    chamber?: true
    bio?: true
    joined_on?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    registration_no?: true
    name?: true
    designation?: true
    chamber?: true
    bio?: true
    joined_on?: true
    _all?: true
  }

  export type DoctorAggregateArgs = {
    /**
     * Filter which doctor to aggregate.
     * 
    **/
    where?: doctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     * 
    **/
    orderBy?: Enumerable<doctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: doctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }


    
    
  export type DoctorGroupByArgs = {
    where?: doctorWhereInput
    orderBy?: Enumerable<doctorOrderByWithAggregationInput>
    by: Array<DoctorScalarFieldEnum>
    having?: doctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }


  export type DoctorGroupByOutputType = {
    id: string
    registration_no: string
    name: string
    designation: string
    chamber: string | null
    bio: string | null
    joined_on: Date
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Promise<
    Array<
      PickArray<DoctorGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], DoctorGroupByOutputType[P]> 
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      > 
    >


  export type doctorSelect = {
    id?: boolean
    registration_no?: boolean
    name?: boolean
    designation?: boolean
    chamber?: boolean
    bio?: boolean
    joined_on?: boolean
    hospital?: boolean | hospitalArgs
    schedule?: boolean | scheduleFindManyArgs
    _count?: boolean | DoctorCountOutputTypeArgs
  }

  export type doctorInclude = {
    hospital?: boolean | hospitalArgs
    schedule?: boolean | scheduleFindManyArgs
    _count?: boolean | DoctorCountOutputTypeArgs
  }

  export type doctorGetPayload<
    S extends boolean | null | undefined | doctorArgs,
    U = keyof S
      > = S extends true
        ? doctor
    : S extends undefined
    ? never
    : S extends doctorArgs | doctorFindManyArgs
    ?'include' extends U
    ? doctor  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'hospital'
        ? hospitalGetPayload<S['include'][P]> :
        P extends 'schedule'
        ? Array < scheduleGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? DoctorCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof doctor ?doctor [P]
  : 
          P extends 'hospital'
        ? hospitalGetPayload<S['select'][P]> :
        P extends 'schedule'
        ? Array < scheduleGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? DoctorCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : doctor
  : doctor


  type doctorCountArgs = Merge<
    Omit<doctorFindManyArgs, 'select' | 'include'> & {
      select?: DoctorCountAggregateInputType | true
    }
  >

  export interface doctorDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {doctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends doctorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, doctorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'doctor'> extends True ? CheckSelect<T, Prisma__doctorClient<doctor>, Prisma__doctorClient<doctorGetPayload<T>>> : CheckSelect<T, Prisma__doctorClient<doctor | null >, Prisma__doctorClient<doctorGetPayload<T> | null >>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends doctorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, doctorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'doctor'> extends True ? CheckSelect<T, Prisma__doctorClient<doctor>, Prisma__doctorClient<doctorGetPayload<T>>> : CheckSelect<T, Prisma__doctorClient<doctor | null >, Prisma__doctorClient<doctorGetPayload<T> | null >>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends doctorFindManyArgs>(
      args?: SelectSubset<T, doctorFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<doctor>>, PrismaPromise<Array<doctorGetPayload<T>>>>

    /**
     * Create a Doctor.
     * @param {doctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
    **/
    create<T extends doctorCreateArgs>(
      args: SelectSubset<T, doctorCreateArgs>
    ): CheckSelect<T, Prisma__doctorClient<doctor>, Prisma__doctorClient<doctorGetPayload<T>>>

    /**
     * Create many Doctors.
     *     @param {doctorCreateManyArgs} args - Arguments to create many Doctors.
     *     @example
     *     // Create many Doctors
     *     const doctor = await prisma.doctor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends doctorCreateManyArgs>(
      args?: SelectSubset<T, doctorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Doctor.
     * @param {doctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
    **/
    delete<T extends doctorDeleteArgs>(
      args: SelectSubset<T, doctorDeleteArgs>
    ): CheckSelect<T, Prisma__doctorClient<doctor>, Prisma__doctorClient<doctorGetPayload<T>>>

    /**
     * Update one Doctor.
     * @param {doctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends doctorUpdateArgs>(
      args: SelectSubset<T, doctorUpdateArgs>
    ): CheckSelect<T, Prisma__doctorClient<doctor>, Prisma__doctorClient<doctorGetPayload<T>>>

    /**
     * Delete zero or more Doctors.
     * @param {doctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends doctorDeleteManyArgs>(
      args?: SelectSubset<T, doctorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends doctorUpdateManyArgs>(
      args: SelectSubset<T, doctorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Doctor.
     * @param {doctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
    **/
    upsert<T extends doctorUpsertArgs>(
      args: SelectSubset<T, doctorUpsertArgs>
    ): CheckSelect<T, Prisma__doctorClient<doctor>, Prisma__doctorClient<doctorGetPayload<T>>>

    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends doctorCountArgs>(
      args?: Subset<T, doctorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__doctorClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    hospital<T extends hospitalArgs = {}>(args?: Subset<T, hospitalArgs>): CheckSelect<T, Prisma__hospitalClient<hospital | null >, Prisma__hospitalClient<hospitalGetPayload<T> | null >>;

    schedule<T extends scheduleFindManyArgs = {}>(args?: Subset<T, scheduleFindManyArgs>): CheckSelect<T, PrismaPromise<Array<schedule>>, PrismaPromise<Array<scheduleGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * doctor findUnique
   */
  export type doctorFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the doctor
     * 
    **/
    select?: doctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: doctorInclude | null
    /**
     * Throw an Error if a doctor can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which doctor to fetch.
     * 
    **/
    where: doctorWhereUniqueInput
  }


  /**
   * doctor findFirst
   */
  export type doctorFindFirstArgs = {
    /**
     * Select specific fields to fetch from the doctor
     * 
    **/
    select?: doctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: doctorInclude | null
    /**
     * Throw an Error if a doctor can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which doctor to fetch.
     * 
    **/
    where?: doctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     * 
    **/
    orderBy?: Enumerable<doctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doctors.
     * 
    **/
    cursor?: doctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doctors.
     * 
    **/
    distinct?: Enumerable<DoctorScalarFieldEnum>
  }


  /**
   * doctor findMany
   */
  export type doctorFindManyArgs = {
    /**
     * Select specific fields to fetch from the doctor
     * 
    **/
    select?: doctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: doctorInclude | null
    /**
     * Filter, which doctors to fetch.
     * 
    **/
    where?: doctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     * 
    **/
    orderBy?: Enumerable<doctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing doctors.
     * 
    **/
    cursor?: doctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DoctorScalarFieldEnum>
  }


  /**
   * doctor create
   */
  export type doctorCreateArgs = {
    /**
     * Select specific fields to fetch from the doctor
     * 
    **/
    select?: doctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: doctorInclude | null
    /**
     * The data needed to create a doctor.
     * 
    **/
    data: XOR<doctorCreateInput, doctorUncheckedCreateInput>
  }


  /**
   * doctor createMany
   */
  export type doctorCreateManyArgs = {
    data: Enumerable<doctorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * doctor update
   */
  export type doctorUpdateArgs = {
    /**
     * Select specific fields to fetch from the doctor
     * 
    **/
    select?: doctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: doctorInclude | null
    /**
     * The data needed to update a doctor.
     * 
    **/
    data: XOR<doctorUpdateInput, doctorUncheckedUpdateInput>
    /**
     * Choose, which doctor to update.
     * 
    **/
    where: doctorWhereUniqueInput
  }


  /**
   * doctor updateMany
   */
  export type doctorUpdateManyArgs = {
    data: XOR<doctorUpdateManyMutationInput, doctorUncheckedUpdateManyInput>
    where?: doctorWhereInput
  }


  /**
   * doctor upsert
   */
  export type doctorUpsertArgs = {
    /**
     * Select specific fields to fetch from the doctor
     * 
    **/
    select?: doctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: doctorInclude | null
    /**
     * The filter to search for the doctor to update in case it exists.
     * 
    **/
    where: doctorWhereUniqueInput
    /**
     * In case the doctor found by the `where` argument doesn't exist, create a new doctor with this data.
     * 
    **/
    create: XOR<doctorCreateInput, doctorUncheckedCreateInput>
    /**
     * In case the doctor was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<doctorUpdateInput, doctorUncheckedUpdateInput>
  }


  /**
   * doctor delete
   */
  export type doctorDeleteArgs = {
    /**
     * Select specific fields to fetch from the doctor
     * 
    **/
    select?: doctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: doctorInclude | null
    /**
     * Filter which doctor to delete.
     * 
    **/
    where: doctorWhereUniqueInput
  }


  /**
   * doctor deleteMany
   */
  export type doctorDeleteManyArgs = {
    where?: doctorWhereInput
  }


  /**
   * doctor without action
   */
  export type doctorArgs = {
    /**
     * Select specific fields to fetch from the doctor
     * 
    **/
    select?: doctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: doctorInclude | null
  }



  /**
   * Model general_service
   */


  export type AggregateGeneral_service = {
    _count: General_serviceCountAggregateOutputType | null
    _min: General_serviceMinAggregateOutputType | null
    _max: General_serviceMaxAggregateOutputType | null
  }

  export type General_serviceMinAggregateOutputType = {
    registration_no: string | null
    autopsy: boolean | null
    biopsy: boolean | null
    blood_bank: boolean | null
    bronchoscopy: boolean | null
    ecg: boolean | null
    echocardiography: boolean | null
    emg: boolean | null
    laparoscopy: boolean | null
    phonocardiography: boolean | null
    urinalysis: boolean | null
  }

  export type General_serviceMaxAggregateOutputType = {
    registration_no: string | null
    autopsy: boolean | null
    biopsy: boolean | null
    blood_bank: boolean | null
    bronchoscopy: boolean | null
    ecg: boolean | null
    echocardiography: boolean | null
    emg: boolean | null
    laparoscopy: boolean | null
    phonocardiography: boolean | null
    urinalysis: boolean | null
  }

  export type General_serviceCountAggregateOutputType = {
    registration_no: number
    autopsy: number
    biopsy: number
    blood_bank: number
    bronchoscopy: number
    ecg: number
    echocardiography: number
    emg: number
    laparoscopy: number
    phonocardiography: number
    urinalysis: number
    _all: number
  }


  export type General_serviceMinAggregateInputType = {
    registration_no?: true
    autopsy?: true
    biopsy?: true
    blood_bank?: true
    bronchoscopy?: true
    ecg?: true
    echocardiography?: true
    emg?: true
    laparoscopy?: true
    phonocardiography?: true
    urinalysis?: true
  }

  export type General_serviceMaxAggregateInputType = {
    registration_no?: true
    autopsy?: true
    biopsy?: true
    blood_bank?: true
    bronchoscopy?: true
    ecg?: true
    echocardiography?: true
    emg?: true
    laparoscopy?: true
    phonocardiography?: true
    urinalysis?: true
  }

  export type General_serviceCountAggregateInputType = {
    registration_no?: true
    autopsy?: true
    biopsy?: true
    blood_bank?: true
    bronchoscopy?: true
    ecg?: true
    echocardiography?: true
    emg?: true
    laparoscopy?: true
    phonocardiography?: true
    urinalysis?: true
    _all?: true
  }

  export type General_serviceAggregateArgs = {
    /**
     * Filter which general_service to aggregate.
     * 
    **/
    where?: general_serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of general_services to fetch.
     * 
    **/
    orderBy?: Enumerable<general_serviceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: general_serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` general_services from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` general_services.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned general_services
    **/
    _count?: true | General_serviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: General_serviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: General_serviceMaxAggregateInputType
  }

  export type GetGeneral_serviceAggregateType<T extends General_serviceAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneral_service]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneral_service[P]>
      : GetScalarType<T[P], AggregateGeneral_service[P]>
  }


    
    
  export type General_serviceGroupByArgs = {
    where?: general_serviceWhereInput
    orderBy?: Enumerable<general_serviceOrderByWithAggregationInput>
    by: Array<General_serviceScalarFieldEnum>
    having?: general_serviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: General_serviceCountAggregateInputType | true
    _min?: General_serviceMinAggregateInputType
    _max?: General_serviceMaxAggregateInputType
  }


  export type General_serviceGroupByOutputType = {
    registration_no: string
    autopsy: boolean | null
    biopsy: boolean | null
    blood_bank: boolean | null
    bronchoscopy: boolean | null
    ecg: boolean | null
    echocardiography: boolean | null
    emg: boolean | null
    laparoscopy: boolean | null
    phonocardiography: boolean | null
    urinalysis: boolean | null
    _count: General_serviceCountAggregateOutputType | null
    _min: General_serviceMinAggregateOutputType | null
    _max: General_serviceMaxAggregateOutputType | null
  }

  type GetGeneral_serviceGroupByPayload<T extends General_serviceGroupByArgs> = Promise<
    Array<
      PickArray<General_serviceGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof General_serviceGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], General_serviceGroupByOutputType[P]> 
            : GetScalarType<T[P], General_serviceGroupByOutputType[P]>
        }
      > 
    >


  export type general_serviceSelect = {
    registration_no?: boolean
    autopsy?: boolean
    biopsy?: boolean
    blood_bank?: boolean
    bronchoscopy?: boolean
    ecg?: boolean
    echocardiography?: boolean
    emg?: boolean
    laparoscopy?: boolean
    phonocardiography?: boolean
    urinalysis?: boolean
    hospital?: boolean | hospitalArgs
  }

  export type general_serviceInclude = {
    hospital?: boolean | hospitalArgs
  }

  export type general_serviceGetPayload<
    S extends boolean | null | undefined | general_serviceArgs,
    U = keyof S
      > = S extends true
        ? general_service
    : S extends undefined
    ? never
    : S extends general_serviceArgs | general_serviceFindManyArgs
    ?'include' extends U
    ? general_service  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'hospital'
        ? hospitalGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof general_service ?general_service [P]
  : 
          P extends 'hospital'
        ? hospitalGetPayload<S['select'][P]> : never
  } 
    : general_service
  : general_service


  type general_serviceCountArgs = Merge<
    Omit<general_serviceFindManyArgs, 'select' | 'include'> & {
      select?: General_serviceCountAggregateInputType | true
    }
  >

  export interface general_serviceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one General_service that matches the filter.
     * @param {general_serviceFindUniqueArgs} args - Arguments to find a General_service
     * @example
     * // Get one General_service
     * const general_service = await prisma.general_service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends general_serviceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, general_serviceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'general_service'> extends True ? CheckSelect<T, Prisma__general_serviceClient<general_service>, Prisma__general_serviceClient<general_serviceGetPayload<T>>> : CheckSelect<T, Prisma__general_serviceClient<general_service | null >, Prisma__general_serviceClient<general_serviceGetPayload<T> | null >>

    /**
     * Find the first General_service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {general_serviceFindFirstArgs} args - Arguments to find a General_service
     * @example
     * // Get one General_service
     * const general_service = await prisma.general_service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends general_serviceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, general_serviceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'general_service'> extends True ? CheckSelect<T, Prisma__general_serviceClient<general_service>, Prisma__general_serviceClient<general_serviceGetPayload<T>>> : CheckSelect<T, Prisma__general_serviceClient<general_service | null >, Prisma__general_serviceClient<general_serviceGetPayload<T> | null >>

    /**
     * Find zero or more General_services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {general_serviceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all General_services
     * const general_services = await prisma.general_service.findMany()
     * 
     * // Get first 10 General_services
     * const general_services = await prisma.general_service.findMany({ take: 10 })
     * 
     * // Only select the `registration_no`
     * const general_serviceWithRegistration_noOnly = await prisma.general_service.findMany({ select: { registration_no: true } })
     * 
    **/
    findMany<T extends general_serviceFindManyArgs>(
      args?: SelectSubset<T, general_serviceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<general_service>>, PrismaPromise<Array<general_serviceGetPayload<T>>>>

    /**
     * Create a General_service.
     * @param {general_serviceCreateArgs} args - Arguments to create a General_service.
     * @example
     * // Create one General_service
     * const General_service = await prisma.general_service.create({
     *   data: {
     *     // ... data to create a General_service
     *   }
     * })
     * 
    **/
    create<T extends general_serviceCreateArgs>(
      args: SelectSubset<T, general_serviceCreateArgs>
    ): CheckSelect<T, Prisma__general_serviceClient<general_service>, Prisma__general_serviceClient<general_serviceGetPayload<T>>>

    /**
     * Create many General_services.
     *     @param {general_serviceCreateManyArgs} args - Arguments to create many General_services.
     *     @example
     *     // Create many General_services
     *     const general_service = await prisma.general_service.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends general_serviceCreateManyArgs>(
      args?: SelectSubset<T, general_serviceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a General_service.
     * @param {general_serviceDeleteArgs} args - Arguments to delete one General_service.
     * @example
     * // Delete one General_service
     * const General_service = await prisma.general_service.delete({
     *   where: {
     *     // ... filter to delete one General_service
     *   }
     * })
     * 
    **/
    delete<T extends general_serviceDeleteArgs>(
      args: SelectSubset<T, general_serviceDeleteArgs>
    ): CheckSelect<T, Prisma__general_serviceClient<general_service>, Prisma__general_serviceClient<general_serviceGetPayload<T>>>

    /**
     * Update one General_service.
     * @param {general_serviceUpdateArgs} args - Arguments to update one General_service.
     * @example
     * // Update one General_service
     * const general_service = await prisma.general_service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends general_serviceUpdateArgs>(
      args: SelectSubset<T, general_serviceUpdateArgs>
    ): CheckSelect<T, Prisma__general_serviceClient<general_service>, Prisma__general_serviceClient<general_serviceGetPayload<T>>>

    /**
     * Delete zero or more General_services.
     * @param {general_serviceDeleteManyArgs} args - Arguments to filter General_services to delete.
     * @example
     * // Delete a few General_services
     * const { count } = await prisma.general_service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends general_serviceDeleteManyArgs>(
      args?: SelectSubset<T, general_serviceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more General_services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {general_serviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many General_services
     * const general_service = await prisma.general_service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends general_serviceUpdateManyArgs>(
      args: SelectSubset<T, general_serviceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one General_service.
     * @param {general_serviceUpsertArgs} args - Arguments to update or create a General_service.
     * @example
     * // Update or create a General_service
     * const general_service = await prisma.general_service.upsert({
     *   create: {
     *     // ... data to create a General_service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the General_service we want to update
     *   }
     * })
    **/
    upsert<T extends general_serviceUpsertArgs>(
      args: SelectSubset<T, general_serviceUpsertArgs>
    ): CheckSelect<T, Prisma__general_serviceClient<general_service>, Prisma__general_serviceClient<general_serviceGetPayload<T>>>

    /**
     * Count the number of General_services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {general_serviceCountArgs} args - Arguments to filter General_services to count.
     * @example
     * // Count the number of General_services
     * const count = await prisma.general_service.count({
     *   where: {
     *     // ... the filter for the General_services we want to count
     *   }
     * })
    **/
    count<T extends general_serviceCountArgs>(
      args?: Subset<T, general_serviceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], General_serviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a General_service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {General_serviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends General_serviceAggregateArgs>(args: Subset<T, General_serviceAggregateArgs>): PrismaPromise<GetGeneral_serviceAggregateType<T>>

    /**
     * Group by General_service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {General_serviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends General_serviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: General_serviceGroupByArgs['orderBy'] }
        : { orderBy?: General_serviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, General_serviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneral_serviceGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for general_service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__general_serviceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    hospital<T extends hospitalArgs = {}>(args?: Subset<T, hospitalArgs>): CheckSelect<T, Prisma__hospitalClient<hospital | null >, Prisma__hospitalClient<hospitalGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * general_service findUnique
   */
  export type general_serviceFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the general_service
     * 
    **/
    select?: general_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: general_serviceInclude | null
    /**
     * Throw an Error if a general_service can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which general_service to fetch.
     * 
    **/
    where: general_serviceWhereUniqueInput
  }


  /**
   * general_service findFirst
   */
  export type general_serviceFindFirstArgs = {
    /**
     * Select specific fields to fetch from the general_service
     * 
    **/
    select?: general_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: general_serviceInclude | null
    /**
     * Throw an Error if a general_service can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which general_service to fetch.
     * 
    **/
    where?: general_serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of general_services to fetch.
     * 
    **/
    orderBy?: Enumerable<general_serviceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for general_services.
     * 
    **/
    cursor?: general_serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` general_services from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` general_services.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of general_services.
     * 
    **/
    distinct?: Enumerable<General_serviceScalarFieldEnum>
  }


  /**
   * general_service findMany
   */
  export type general_serviceFindManyArgs = {
    /**
     * Select specific fields to fetch from the general_service
     * 
    **/
    select?: general_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: general_serviceInclude | null
    /**
     * Filter, which general_services to fetch.
     * 
    **/
    where?: general_serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of general_services to fetch.
     * 
    **/
    orderBy?: Enumerable<general_serviceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing general_services.
     * 
    **/
    cursor?: general_serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` general_services from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` general_services.
     * 
    **/
    skip?: number
    distinct?: Enumerable<General_serviceScalarFieldEnum>
  }


  /**
   * general_service create
   */
  export type general_serviceCreateArgs = {
    /**
     * Select specific fields to fetch from the general_service
     * 
    **/
    select?: general_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: general_serviceInclude | null
    /**
     * The data needed to create a general_service.
     * 
    **/
    data: XOR<general_serviceCreateInput, general_serviceUncheckedCreateInput>
  }


  /**
   * general_service createMany
   */
  export type general_serviceCreateManyArgs = {
    data: Enumerable<general_serviceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * general_service update
   */
  export type general_serviceUpdateArgs = {
    /**
     * Select specific fields to fetch from the general_service
     * 
    **/
    select?: general_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: general_serviceInclude | null
    /**
     * The data needed to update a general_service.
     * 
    **/
    data: XOR<general_serviceUpdateInput, general_serviceUncheckedUpdateInput>
    /**
     * Choose, which general_service to update.
     * 
    **/
    where: general_serviceWhereUniqueInput
  }


  /**
   * general_service updateMany
   */
  export type general_serviceUpdateManyArgs = {
    data: XOR<general_serviceUpdateManyMutationInput, general_serviceUncheckedUpdateManyInput>
    where?: general_serviceWhereInput
  }


  /**
   * general_service upsert
   */
  export type general_serviceUpsertArgs = {
    /**
     * Select specific fields to fetch from the general_service
     * 
    **/
    select?: general_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: general_serviceInclude | null
    /**
     * The filter to search for the general_service to update in case it exists.
     * 
    **/
    where: general_serviceWhereUniqueInput
    /**
     * In case the general_service found by the `where` argument doesn't exist, create a new general_service with this data.
     * 
    **/
    create: XOR<general_serviceCreateInput, general_serviceUncheckedCreateInput>
    /**
     * In case the general_service was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<general_serviceUpdateInput, general_serviceUncheckedUpdateInput>
  }


  /**
   * general_service delete
   */
  export type general_serviceDeleteArgs = {
    /**
     * Select specific fields to fetch from the general_service
     * 
    **/
    select?: general_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: general_serviceInclude | null
    /**
     * Filter which general_service to delete.
     * 
    **/
    where: general_serviceWhereUniqueInput
  }


  /**
   * general_service deleteMany
   */
  export type general_serviceDeleteManyArgs = {
    where?: general_serviceWhereInput
  }


  /**
   * general_service without action
   */
  export type general_serviceArgs = {
    /**
     * Select specific fields to fetch from the general_service
     * 
    **/
    select?: general_serviceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: general_serviceInclude | null
  }



  /**
   * Model schedule
   */


  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: string | null
    day: schedule_day | null
    start_time: Date | null
    end_time: Date | null
    last_updated: Date | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: string | null
    day: schedule_day | null
    start_time: Date | null
    end_time: Date | null
    last_updated: Date | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    day: number
    start_time: number
    end_time: number
    last_updated: number
    _all: number
  }


  export type ScheduleMinAggregateInputType = {
    id?: true
    day?: true
    start_time?: true
    end_time?: true
    last_updated?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    day?: true
    start_time?: true
    end_time?: true
    last_updated?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    day?: true
    start_time?: true
    end_time?: true
    last_updated?: true
    _all?: true
  }

  export type ScheduleAggregateArgs = {
    /**
     * Filter which schedule to aggregate.
     * 
    **/
    where?: scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     * 
    **/
    orderBy?: Enumerable<scheduleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }


    
    
  export type ScheduleGroupByArgs = {
    where?: scheduleWhereInput
    orderBy?: Enumerable<scheduleOrderByWithAggregationInput>
    by: Array<ScheduleScalarFieldEnum>
    having?: scheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }


  export type ScheduleGroupByOutputType = {
    id: string
    day: schedule_day
    start_time: Date
    end_time: Date
    last_updated: Date
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Promise<
    Array<
      PickArray<ScheduleGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]> 
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      > 
    >


  export type scheduleSelect = {
    id?: boolean
    day?: boolean
    start_time?: boolean
    end_time?: boolean
    last_updated?: boolean
    doctor?: boolean | doctorArgs
  }

  export type scheduleInclude = {
    doctor?: boolean | doctorArgs
  }

  export type scheduleGetPayload<
    S extends boolean | null | undefined | scheduleArgs,
    U = keyof S
      > = S extends true
        ? schedule
    : S extends undefined
    ? never
    : S extends scheduleArgs | scheduleFindManyArgs
    ?'include' extends U
    ? schedule  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'doctor'
        ? doctorGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof schedule ?schedule [P]
  : 
          P extends 'doctor'
        ? doctorGetPayload<S['select'][P]> : never
  } 
    : schedule
  : schedule


  type scheduleCountArgs = Merge<
    Omit<scheduleFindManyArgs, 'select' | 'include'> & {
      select?: ScheduleCountAggregateInputType | true
    }
  >

  export interface scheduleDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {scheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends scheduleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, scheduleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'schedule'> extends True ? CheckSelect<T, Prisma__scheduleClient<schedule>, Prisma__scheduleClient<scheduleGetPayload<T>>> : CheckSelect<T, Prisma__scheduleClient<schedule | null >, Prisma__scheduleClient<scheduleGetPayload<T> | null >>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends scheduleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, scheduleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'schedule'> extends True ? CheckSelect<T, Prisma__scheduleClient<schedule>, Prisma__scheduleClient<scheduleGetPayload<T>>> : CheckSelect<T, Prisma__scheduleClient<schedule | null >, Prisma__scheduleClient<scheduleGetPayload<T> | null >>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends scheduleFindManyArgs>(
      args?: SelectSubset<T, scheduleFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<schedule>>, PrismaPromise<Array<scheduleGetPayload<T>>>>

    /**
     * Create a Schedule.
     * @param {scheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
    **/
    create<T extends scheduleCreateArgs>(
      args: SelectSubset<T, scheduleCreateArgs>
    ): CheckSelect<T, Prisma__scheduleClient<schedule>, Prisma__scheduleClient<scheduleGetPayload<T>>>

    /**
     * Create many Schedules.
     *     @param {scheduleCreateManyArgs} args - Arguments to create many Schedules.
     *     @example
     *     // Create many Schedules
     *     const schedule = await prisma.schedule.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends scheduleCreateManyArgs>(
      args?: SelectSubset<T, scheduleCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Schedule.
     * @param {scheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
    **/
    delete<T extends scheduleDeleteArgs>(
      args: SelectSubset<T, scheduleDeleteArgs>
    ): CheckSelect<T, Prisma__scheduleClient<schedule>, Prisma__scheduleClient<scheduleGetPayload<T>>>

    /**
     * Update one Schedule.
     * @param {scheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends scheduleUpdateArgs>(
      args: SelectSubset<T, scheduleUpdateArgs>
    ): CheckSelect<T, Prisma__scheduleClient<schedule>, Prisma__scheduleClient<scheduleGetPayload<T>>>

    /**
     * Delete zero or more Schedules.
     * @param {scheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends scheduleDeleteManyArgs>(
      args?: SelectSubset<T, scheduleDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends scheduleUpdateManyArgs>(
      args: SelectSubset<T, scheduleUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Schedule.
     * @param {scheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
    **/
    upsert<T extends scheduleUpsertArgs>(
      args: SelectSubset<T, scheduleUpsertArgs>
    ): CheckSelect<T, Prisma__scheduleClient<schedule>, Prisma__scheduleClient<scheduleGetPayload<T>>>

    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends scheduleCountArgs>(
      args?: Subset<T, scheduleCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__scheduleClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    doctor<T extends doctorArgs = {}>(args?: Subset<T, doctorArgs>): CheckSelect<T, Prisma__doctorClient<doctor | null >, Prisma__doctorClient<doctorGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * schedule findUnique
   */
  export type scheduleFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the schedule
     * 
    **/
    select?: scheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scheduleInclude | null
    /**
     * Throw an Error if a schedule can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which schedule to fetch.
     * 
    **/
    where: scheduleWhereUniqueInput
  }


  /**
   * schedule findFirst
   */
  export type scheduleFindFirstArgs = {
    /**
     * Select specific fields to fetch from the schedule
     * 
    **/
    select?: scheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scheduleInclude | null
    /**
     * Throw an Error if a schedule can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which schedule to fetch.
     * 
    **/
    where?: scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     * 
    **/
    orderBy?: Enumerable<scheduleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schedules.
     * 
    **/
    cursor?: scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schedules.
     * 
    **/
    distinct?: Enumerable<ScheduleScalarFieldEnum>
  }


  /**
   * schedule findMany
   */
  export type scheduleFindManyArgs = {
    /**
     * Select specific fields to fetch from the schedule
     * 
    **/
    select?: scheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scheduleInclude | null
    /**
     * Filter, which schedules to fetch.
     * 
    **/
    where?: scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     * 
    **/
    orderBy?: Enumerable<scheduleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing schedules.
     * 
    **/
    cursor?: scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ScheduleScalarFieldEnum>
  }


  /**
   * schedule create
   */
  export type scheduleCreateArgs = {
    /**
     * Select specific fields to fetch from the schedule
     * 
    **/
    select?: scheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scheduleInclude | null
    /**
     * The data needed to create a schedule.
     * 
    **/
    data: XOR<scheduleCreateInput, scheduleUncheckedCreateInput>
  }


  /**
   * schedule createMany
   */
  export type scheduleCreateManyArgs = {
    data: Enumerable<scheduleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * schedule update
   */
  export type scheduleUpdateArgs = {
    /**
     * Select specific fields to fetch from the schedule
     * 
    **/
    select?: scheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scheduleInclude | null
    /**
     * The data needed to update a schedule.
     * 
    **/
    data: XOR<scheduleUpdateInput, scheduleUncheckedUpdateInput>
    /**
     * Choose, which schedule to update.
     * 
    **/
    where: scheduleWhereUniqueInput
  }


  /**
   * schedule updateMany
   */
  export type scheduleUpdateManyArgs = {
    data: XOR<scheduleUpdateManyMutationInput, scheduleUncheckedUpdateManyInput>
    where?: scheduleWhereInput
  }


  /**
   * schedule upsert
   */
  export type scheduleUpsertArgs = {
    /**
     * Select specific fields to fetch from the schedule
     * 
    **/
    select?: scheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scheduleInclude | null
    /**
     * The filter to search for the schedule to update in case it exists.
     * 
    **/
    where: scheduleWhereUniqueInput
    /**
     * In case the schedule found by the `where` argument doesn't exist, create a new schedule with this data.
     * 
    **/
    create: XOR<scheduleCreateInput, scheduleUncheckedCreateInput>
    /**
     * In case the schedule was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<scheduleUpdateInput, scheduleUncheckedUpdateInput>
  }


  /**
   * schedule delete
   */
  export type scheduleDeleteArgs = {
    /**
     * Select specific fields to fetch from the schedule
     * 
    **/
    select?: scheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scheduleInclude | null
    /**
     * Filter which schedule to delete.
     * 
    **/
    where: scheduleWhereUniqueInput
  }


  /**
   * schedule deleteMany
   */
  export type scheduleDeleteManyArgs = {
    where?: scheduleWhereInput
  }


  /**
   * schedule without action
   */
  export type scheduleArgs = {
    /**
     * Select specific fields to fetch from the schedule
     * 
    **/
    select?: scheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: scheduleInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AddressScalarFieldEnum: {
    registration_no: 'registration_no',
    address: 'address',
    phone_no: 'phone_no',
    mobile_no: 'mobile_no',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    booked_at: 'booked_at',
    mobile_no: 'mobile_no',
    name: 'name',
    sex: 'sex',
    bed_type: 'bed_type',
    booked_for: 'booked_for',
    cancelled_at: 'cancelled_at',
    registration_no: 'registration_no',
    status: 'status',
    remarks: 'remarks',
    last_updated: 'last_updated'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const CapacityScalarFieldEnum: {
    registration_no: 'registration_no',
    total_capacity: 'total_capacity',
    ward: 'ward',
    special_ward: 'special_ward',
    cabin: 'cabin',
    vip_cabin: 'vip_cabin',
    icu: 'icu',
    ccu: 'ccu',
    hdu: 'hdu',
    hfncu: 'hfncu',
    emergency: 'emergency',
    covid: 'covid',
    extra: 'extra'
  };

  export type CapacityScalarFieldEnum = (typeof CapacityScalarFieldEnum)[keyof typeof CapacityScalarFieldEnum]


  export const HospitalScalarFieldEnum: {
    registration_no: 'registration_no',
    hospital_name: 'hospital_name',
    description: 'description',
    hospital_type: 'hospital_type',
    bed_type: 'bed_type',
    image_source: 'image_source',
    website: 'website',
    joined_on: 'joined_on',
    status: 'status'
  };

  export type HospitalScalarFieldEnum = (typeof HospitalScalarFieldEnum)[keyof typeof HospitalScalarFieldEnum]


  export const LogScalarFieldEnum: {
    logged_at: 'logged_at',
    registration_no: 'registration_no',
    task: 'task',
    mobile_no: 'mobile_no',
    role: 'role'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    mobile_no: 'mobile_no',
    password: 'password',
    name: 'name',
    email: 'email',
    role: 'role',
    status: 'status',
    registration_no: 'registration_no',
    joined_on: 'joined_on',
    last_updated: 'last_updated'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const UserScalarFieldEnum: {
    mobile_no: 'mobile_no',
    password: 'password',
    name: 'name',
    sex: 'sex',
    dob: 'dob',
    email: 'email',
    document_id: 'document_id',
    joined_on: 'joined_on'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Vacant_bed_logScalarFieldEnum: {
    registration_no: 'registration_no',
    last_updated: 'last_updated',
    ward: 'ward',
    special_ward: 'special_ward',
    cabin: 'cabin',
    vip_cabin: 'vip_cabin',
    icu: 'icu',
    ccu: 'ccu',
    hdu: 'hdu',
    hfncu: 'hfncu',
    emergency: 'emergency',
    covid: 'covid',
    extra: 'extra'
  };

  export type Vacant_bed_logScalarFieldEnum = (typeof Vacant_bed_logScalarFieldEnum)[keyof typeof Vacant_bed_logScalarFieldEnum]


  export const AmenityScalarFieldEnum: {
    registration_no: 'registration_no',
    atm: 'atm',
    baby_corner: 'baby_corner',
    cafeteria: 'cafeteria',
    gift_shop: 'gift_shop',
    locker: 'locker',
    parking: 'parking',
    pharmacy: 'pharmacy',
    prayer_area: 'prayer_area',
    wheelchair: 'wheelchair',
    wifi: 'wifi'
  };

  export type AmenityScalarFieldEnum = (typeof AmenityScalarFieldEnum)[keyof typeof AmenityScalarFieldEnum]


  export const Blood_analytical_serviceScalarFieldEnum: {
    registration_no: 'registration_no',
    antibody_analysis: 'antibody_analysis',
    cbc: 'cbc',
    creatinine_analysis: 'creatinine_analysis',
    crp: 'crp',
    esr: 'esr',
    fobt: 'fobt',
    hematocrit: 'hematocrit',
    kidney_function_analysis: 'kidney_function_analysis',
    lipid_profile: 'lipid_profile',
    liver_function_analysis: 'liver_function_analysis',
    rf: 'rf',
    serum_analysis: 'serum_analysis',
    sr: 'sr'
  };

  export type Blood_analytical_serviceScalarFieldEnum = (typeof Blood_analytical_serviceScalarFieldEnum)[keyof typeof Blood_analytical_serviceScalarFieldEnum]


  export const Diagnostic_imaging_serviceScalarFieldEnum: {
    registration_no: 'registration_no',
    angiocardiography: 'angiocardiography',
    angiography: 'angiography',
    cta: 'cta',
    ct: 'ct',
    coloscopy: 'coloscopy',
    cystoscopy: 'cystoscopy',
    echocardiography: 'echocardiography',
    endoscopy: 'endoscopy',
    fluoroscopy: 'fluoroscopy',
    mra: 'mra',
    mri: 'mri',
    mrs: 'mrs',
    mammography: 'mammography',
    pet: 'pet',
    pet_ct: 'pet_ct',
    spect: 'spect',
    ultrasound: 'ultrasound',
    x_ray: 'x_ray'
  };

  export type Diagnostic_imaging_serviceScalarFieldEnum = (typeof Diagnostic_imaging_serviceScalarFieldEnum)[keyof typeof Diagnostic_imaging_serviceScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    registration_no: 'registration_no',
    name: 'name',
    designation: 'designation',
    chamber: 'chamber',
    bio: 'bio',
    joined_on: 'joined_on'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const General_serviceScalarFieldEnum: {
    registration_no: 'registration_no',
    autopsy: 'autopsy',
    biopsy: 'biopsy',
    blood_bank: 'blood_bank',
    bronchoscopy: 'bronchoscopy',
    ecg: 'ecg',
    echocardiography: 'echocardiography',
    emg: 'emg',
    laparoscopy: 'laparoscopy',
    phonocardiography: 'phonocardiography',
    urinalysis: 'urinalysis'
  };

  export type General_serviceScalarFieldEnum = (typeof General_serviceScalarFieldEnum)[keyof typeof General_serviceScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    day: 'day',
    start_time: 'start_time',
    end_time: 'end_time',
    last_updated: 'last_updated'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type addressWhereInput = {
    AND?: Enumerable<addressWhereInput>
    OR?: Enumerable<addressWhereInput>
    NOT?: Enumerable<addressWhereInput>
    registration_no?: StringFilter | string
    address?: StringFilter | string
    phone_no?: StringNullableFilter | string | null
    mobile_no?: StringNullableFilter | string | null
    latitude?: DecimalNullableFilter | Decimal | number | string | null
    longitude?: DecimalNullableFilter | Decimal | number | string | null
    hospital?: XOR<HospitalRelationFilter, hospitalWhereInput>
  }

  export type addressOrderByWithRelationInput = {
    registration_no?: SortOrder
    address?: SortOrder
    phone_no?: SortOrder
    mobile_no?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    hospital?: hospitalOrderByWithRelationInput
  }

  export type addressWhereUniqueInput = {
    registration_no?: string
  }

  export type addressOrderByWithAggregationInput = {
    registration_no?: SortOrder
    address?: SortOrder
    phone_no?: SortOrder
    mobile_no?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    _count?: addressCountOrderByAggregateInput
    _avg?: addressAvgOrderByAggregateInput
    _max?: addressMaxOrderByAggregateInput
    _min?: addressMinOrderByAggregateInput
    _sum?: addressSumOrderByAggregateInput
  }

  export type addressScalarWhereWithAggregatesInput = {
    AND?: Enumerable<addressScalarWhereWithAggregatesInput>
    OR?: Enumerable<addressScalarWhereWithAggregatesInput>
    NOT?: Enumerable<addressScalarWhereWithAggregatesInput>
    registration_no?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    phone_no?: StringNullableWithAggregatesFilter | string | null
    mobile_no?: StringNullableWithAggregatesFilter | string | null
    latitude?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
  }

  export type bookingWhereInput = {
    AND?: Enumerable<bookingWhereInput>
    OR?: Enumerable<bookingWhereInput>
    NOT?: Enumerable<bookingWhereInput>
    id?: StringFilter | string
    booked_at?: DateTimeFilter | Date | string
    mobile_no?: StringFilter | string
    name?: StringNullableFilter | string | null
    sex?: Enumbooking_sexFilter | booking_sex
    bed_type?: Enumbooking_bed_typeFilter | booking_bed_type
    booked_for?: Enumbooking_booked_forNullableFilter | booking_booked_for | null
    cancelled_at?: DateTimeNullableFilter | Date | string | null
    registration_no?: StringFilter | string
    status?: Enumbooking_statusFilter | booking_status
    remarks?: StringNullableFilter | string | null
    last_updated?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, userWhereInput>
    hospital?: XOR<HospitalRelationFilter, hospitalWhereInput>
  }

  export type bookingOrderByWithRelationInput = {
    id?: SortOrder
    booked_at?: SortOrder
    mobile_no?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    bed_type?: SortOrder
    booked_for?: SortOrder
    cancelled_at?: SortOrder
    registration_no?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    last_updated?: SortOrder
    user?: userOrderByWithRelationInput
    hospital?: hospitalOrderByWithRelationInput
  }

  export type bookingWhereUniqueInput = {
    id?: string
  }

  export type bookingOrderByWithAggregationInput = {
    id?: SortOrder
    booked_at?: SortOrder
    mobile_no?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    bed_type?: SortOrder
    booked_for?: SortOrder
    cancelled_at?: SortOrder
    registration_no?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    last_updated?: SortOrder
    _count?: bookingCountOrderByAggregateInput
    _max?: bookingMaxOrderByAggregateInput
    _min?: bookingMinOrderByAggregateInput
  }

  export type bookingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<bookingScalarWhereWithAggregatesInput>
    OR?: Enumerable<bookingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<bookingScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    booked_at?: DateTimeWithAggregatesFilter | Date | string
    mobile_no?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    sex?: Enumbooking_sexWithAggregatesFilter | booking_sex
    bed_type?: Enumbooking_bed_typeWithAggregatesFilter | booking_bed_type
    booked_for?: Enumbooking_booked_forNullableWithAggregatesFilter | booking_booked_for | null
    cancelled_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    registration_no?: StringWithAggregatesFilter | string
    status?: Enumbooking_statusWithAggregatesFilter | booking_status
    remarks?: StringNullableWithAggregatesFilter | string | null
    last_updated?: DateTimeWithAggregatesFilter | Date | string
  }

  export type capacityWhereInput = {
    AND?: Enumerable<capacityWhereInput>
    OR?: Enumerable<capacityWhereInput>
    NOT?: Enumerable<capacityWhereInput>
    registration_no?: StringFilter | string
    total_capacity?: IntFilter | number
    ward?: IntNullableFilter | number | null
    special_ward?: IntNullableFilter | number | null
    cabin?: IntNullableFilter | number | null
    vip_cabin?: IntNullableFilter | number | null
    icu?: IntNullableFilter | number | null
    ccu?: IntNullableFilter | number | null
    hdu?: IntNullableFilter | number | null
    hfncu?: IntNullableFilter | number | null
    emergency?: IntNullableFilter | number | null
    covid?: IntNullableFilter | number | null
    extra?: IntNullableFilter | number | null
    hospital?: XOR<HospitalRelationFilter, hospitalWhereInput>
  }

  export type capacityOrderByWithRelationInput = {
    registration_no?: SortOrder
    total_capacity?: SortOrder
    ward?: SortOrder
    special_ward?: SortOrder
    cabin?: SortOrder
    vip_cabin?: SortOrder
    icu?: SortOrder
    ccu?: SortOrder
    hdu?: SortOrder
    hfncu?: SortOrder
    emergency?: SortOrder
    covid?: SortOrder
    extra?: SortOrder
    hospital?: hospitalOrderByWithRelationInput
  }

  export type capacityWhereUniqueInput = {
    registration_no?: string
  }

  export type capacityOrderByWithAggregationInput = {
    registration_no?: SortOrder
    total_capacity?: SortOrder
    ward?: SortOrder
    special_ward?: SortOrder
    cabin?: SortOrder
    vip_cabin?: SortOrder
    icu?: SortOrder
    ccu?: SortOrder
    hdu?: SortOrder
    hfncu?: SortOrder
    emergency?: SortOrder
    covid?: SortOrder
    extra?: SortOrder
    _count?: capacityCountOrderByAggregateInput
    _avg?: capacityAvgOrderByAggregateInput
    _max?: capacityMaxOrderByAggregateInput
    _min?: capacityMinOrderByAggregateInput
    _sum?: capacitySumOrderByAggregateInput
  }

  export type capacityScalarWhereWithAggregatesInput = {
    AND?: Enumerable<capacityScalarWhereWithAggregatesInput>
    OR?: Enumerable<capacityScalarWhereWithAggregatesInput>
    NOT?: Enumerable<capacityScalarWhereWithAggregatesInput>
    registration_no?: StringWithAggregatesFilter | string
    total_capacity?: IntWithAggregatesFilter | number
    ward?: IntNullableWithAggregatesFilter | number | null
    special_ward?: IntNullableWithAggregatesFilter | number | null
    cabin?: IntNullableWithAggregatesFilter | number | null
    vip_cabin?: IntNullableWithAggregatesFilter | number | null
    icu?: IntNullableWithAggregatesFilter | number | null
    ccu?: IntNullableWithAggregatesFilter | number | null
    hdu?: IntNullableWithAggregatesFilter | number | null
    hfncu?: IntNullableWithAggregatesFilter | number | null
    emergency?: IntNullableWithAggregatesFilter | number | null
    covid?: IntNullableWithAggregatesFilter | number | null
    extra?: IntNullableWithAggregatesFilter | number | null
  }

  export type hospitalWhereInput = {
    AND?: Enumerable<hospitalWhereInput>
    OR?: Enumerable<hospitalWhereInput>
    NOT?: Enumerable<hospitalWhereInput>
    registration_no?: StringFilter | string
    hospital_name?: StringFilter | string
    description?: StringNullableFilter | string | null
    hospital_type?: Enumhospital_hospital_typeFilter | hospital_hospital_type
    bed_type?: StringFilter | string
    image_source?: StringFilter | string
    website?: StringNullableFilter | string | null
    joined_on?: DateTimeFilter | Date | string
    status?: Enumhospital_statusFilter | hospital_status
    address?: XOR<AddressRelationFilter, addressWhereInput> | null
    amenity?: XOR<AmenityRelationFilter, amenityWhereInput> | null
    blood_analytical_service?: XOR<Blood_analytical_serviceRelationFilter, blood_analytical_serviceWhereInput> | null
    booking?: BookingListRelationFilter
    capacity?: XOR<CapacityRelationFilter, capacityWhereInput> | null
    diagnostic_imaging_service?: XOR<Diagnostic_imaging_serviceRelationFilter, diagnostic_imaging_serviceWhereInput> | null
    doctor?: DoctorListRelationFilter
    general_service?: XOR<General_serviceRelationFilter, general_serviceWhereInput> | null
    log?: LogListRelationFilter
    staff?: StaffListRelationFilter
    vacant_bed_log?: Vacant_bed_logListRelationFilter
  }

  export type hospitalOrderByWithRelationInput = {
    registration_no?: SortOrder
    hospital_name?: SortOrder
    description?: SortOrder
    hospital_type?: SortOrder
    bed_type?: SortOrder
    image_source?: SortOrder
    website?: SortOrder
    joined_on?: SortOrder
    status?: SortOrder
    address?: addressOrderByWithRelationInput
    amenity?: amenityOrderByWithRelationInput
    blood_analytical_service?: blood_analytical_serviceOrderByWithRelationInput
    booking?: bookingOrderByRelationAggregateInput
    capacity?: capacityOrderByWithRelationInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceOrderByWithRelationInput
    doctor?: doctorOrderByRelationAggregateInput
    general_service?: general_serviceOrderByWithRelationInput
    log?: logOrderByRelationAggregateInput
    staff?: staffOrderByRelationAggregateInput
    vacant_bed_log?: vacant_bed_logOrderByRelationAggregateInput
  }

  export type hospitalWhereUniqueInput = {
    registration_no?: string
    hospital_name?: string
    image_source?: string
  }

  export type hospitalOrderByWithAggregationInput = {
    registration_no?: SortOrder
    hospital_name?: SortOrder
    description?: SortOrder
    hospital_type?: SortOrder
    bed_type?: SortOrder
    image_source?: SortOrder
    website?: SortOrder
    joined_on?: SortOrder
    status?: SortOrder
    _count?: hospitalCountOrderByAggregateInput
    _max?: hospitalMaxOrderByAggregateInput
    _min?: hospitalMinOrderByAggregateInput
  }

  export type hospitalScalarWhereWithAggregatesInput = {
    AND?: Enumerable<hospitalScalarWhereWithAggregatesInput>
    OR?: Enumerable<hospitalScalarWhereWithAggregatesInput>
    NOT?: Enumerable<hospitalScalarWhereWithAggregatesInput>
    registration_no?: StringWithAggregatesFilter | string
    hospital_name?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    hospital_type?: Enumhospital_hospital_typeWithAggregatesFilter | hospital_hospital_type
    bed_type?: StringWithAggregatesFilter | string
    image_source?: StringWithAggregatesFilter | string
    website?: StringNullableWithAggregatesFilter | string | null
    joined_on?: DateTimeWithAggregatesFilter | Date | string
    status?: Enumhospital_statusWithAggregatesFilter | hospital_status
  }

  export type logWhereInput = {
    AND?: Enumerable<logWhereInput>
    OR?: Enumerable<logWhereInput>
    NOT?: Enumerable<logWhereInput>
    logged_at?: DateTimeFilter | Date | string
    registration_no?: StringFilter | string
    task?: StringFilter | string
    mobile_no?: StringFilter | string
    role?: Enumlog_roleFilter | log_role
    staff?: XOR<StaffRelationFilter, staffWhereInput>
    hospital?: XOR<HospitalRelationFilter, hospitalWhereInput>
  }

  export type logOrderByWithRelationInput = {
    logged_at?: SortOrder
    registration_no?: SortOrder
    task?: SortOrder
    mobile_no?: SortOrder
    role?: SortOrder
    staff?: staffOrderByWithRelationInput
    hospital?: hospitalOrderByWithRelationInput
  }

  export type logWhereUniqueInput = {
    logged_at_registration_no?: logLogged_atRegistration_noCompoundUniqueInput
  }

  export type logOrderByWithAggregationInput = {
    logged_at?: SortOrder
    registration_no?: SortOrder
    task?: SortOrder
    mobile_no?: SortOrder
    role?: SortOrder
    _count?: logCountOrderByAggregateInput
    _max?: logMaxOrderByAggregateInput
    _min?: logMinOrderByAggregateInput
  }

  export type logScalarWhereWithAggregatesInput = {
    AND?: Enumerable<logScalarWhereWithAggregatesInput>
    OR?: Enumerable<logScalarWhereWithAggregatesInput>
    NOT?: Enumerable<logScalarWhereWithAggregatesInput>
    logged_at?: DateTimeWithAggregatesFilter | Date | string
    registration_no?: StringWithAggregatesFilter | string
    task?: StringWithAggregatesFilter | string
    mobile_no?: StringWithAggregatesFilter | string
    role?: Enumlog_roleWithAggregatesFilter | log_role
  }

  export type staffWhereInput = {
    AND?: Enumerable<staffWhereInput>
    OR?: Enumerable<staffWhereInput>
    NOT?: Enumerable<staffWhereInput>
    mobile_no?: StringFilter | string
    password?: StringFilter | string
    name?: StringFilter | string
    email?: StringFilter | string
    role?: Enumstaff_roleFilter | staff_role
    status?: Enumstaff_statusFilter | staff_status
    registration_no?: StringFilter | string
    joined_on?: DateTimeFilter | Date | string
    last_updated?: DateTimeFilter | Date | string
    hospital?: XOR<HospitalRelationFilter, hospitalWhereInput>
    log?: LogListRelationFilter
  }

  export type staffOrderByWithRelationInput = {
    mobile_no?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    status?: SortOrder
    registration_no?: SortOrder
    joined_on?: SortOrder
    last_updated?: SortOrder
    hospital?: hospitalOrderByWithRelationInput
    log?: logOrderByRelationAggregateInput
  }

  export type staffWhereUniqueInput = {
    email?: string
    mobile_no_registration_no_joined_on?: staffMobile_noRegistration_noJoined_onCompoundUniqueInput
  }

  export type staffOrderByWithAggregationInput = {
    mobile_no?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    status?: SortOrder
    registration_no?: SortOrder
    joined_on?: SortOrder
    last_updated?: SortOrder
    _count?: staffCountOrderByAggregateInput
    _max?: staffMaxOrderByAggregateInput
    _min?: staffMinOrderByAggregateInput
  }

  export type staffScalarWhereWithAggregatesInput = {
    AND?: Enumerable<staffScalarWhereWithAggregatesInput>
    OR?: Enumerable<staffScalarWhereWithAggregatesInput>
    NOT?: Enumerable<staffScalarWhereWithAggregatesInput>
    mobile_no?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    role?: Enumstaff_roleWithAggregatesFilter | staff_role
    status?: Enumstaff_statusWithAggregatesFilter | staff_status
    registration_no?: StringWithAggregatesFilter | string
    joined_on?: DateTimeWithAggregatesFilter | Date | string
    last_updated?: DateTimeWithAggregatesFilter | Date | string
  }

  export type userWhereInput = {
    AND?: Enumerable<userWhereInput>
    OR?: Enumerable<userWhereInput>
    NOT?: Enumerable<userWhereInput>
    mobile_no?: StringFilter | string
    password?: StringFilter | string
    name?: StringFilter | string
    sex?: Enumuser_sexFilter | user_sex
    dob?: DateTimeFilter | Date | string
    email?: StringNullableFilter | string | null
    document_id?: StringNullableFilter | string | null
    joined_on?: DateTimeFilter | Date | string
    booking?: BookingListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    mobile_no?: SortOrder
    password?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    dob?: SortOrder
    email?: SortOrder
    document_id?: SortOrder
    joined_on?: SortOrder
    booking?: bookingOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = {
    mobile_no?: string
    email?: string
    document_id?: string
  }

  export type userOrderByWithAggregationInput = {
    mobile_no?: SortOrder
    password?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    dob?: SortOrder
    email?: SortOrder
    document_id?: SortOrder
    joined_on?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: Enumerable<userScalarWhereWithAggregatesInput>
    OR?: Enumerable<userScalarWhereWithAggregatesInput>
    NOT?: Enumerable<userScalarWhereWithAggregatesInput>
    mobile_no?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    sex?: Enumuser_sexWithAggregatesFilter | user_sex
    dob?: DateTimeWithAggregatesFilter | Date | string
    email?: StringNullableWithAggregatesFilter | string | null
    document_id?: StringNullableWithAggregatesFilter | string | null
    joined_on?: DateTimeWithAggregatesFilter | Date | string
  }

  export type vacant_bed_logWhereInput = {
    AND?: Enumerable<vacant_bed_logWhereInput>
    OR?: Enumerable<vacant_bed_logWhereInput>
    NOT?: Enumerable<vacant_bed_logWhereInput>
    registration_no?: StringFilter | string
    last_updated?: DateTimeFilter | Date | string
    ward?: IntNullableFilter | number | null
    special_ward?: IntNullableFilter | number | null
    cabin?: IntNullableFilter | number | null
    vip_cabin?: IntNullableFilter | number | null
    icu?: IntNullableFilter | number | null
    ccu?: IntNullableFilter | number | null
    hdu?: IntNullableFilter | number | null
    hfncu?: IntNullableFilter | number | null
    emergency?: IntNullableFilter | number | null
    covid?: IntNullableFilter | number | null
    extra?: IntNullableFilter | number | null
    hospital?: XOR<HospitalRelationFilter, hospitalWhereInput>
  }

  export type vacant_bed_logOrderByWithRelationInput = {
    registration_no?: SortOrder
    last_updated?: SortOrder
    ward?: SortOrder
    special_ward?: SortOrder
    cabin?: SortOrder
    vip_cabin?: SortOrder
    icu?: SortOrder
    ccu?: SortOrder
    hdu?: SortOrder
    hfncu?: SortOrder
    emergency?: SortOrder
    covid?: SortOrder
    extra?: SortOrder
    hospital?: hospitalOrderByWithRelationInput
  }

  export type vacant_bed_logWhereUniqueInput = {
    registration_no_last_updated?: vacant_bed_logRegistration_noLast_updatedCompoundUniqueInput
  }

  export type vacant_bed_logOrderByWithAggregationInput = {
    registration_no?: SortOrder
    last_updated?: SortOrder
    ward?: SortOrder
    special_ward?: SortOrder
    cabin?: SortOrder
    vip_cabin?: SortOrder
    icu?: SortOrder
    ccu?: SortOrder
    hdu?: SortOrder
    hfncu?: SortOrder
    emergency?: SortOrder
    covid?: SortOrder
    extra?: SortOrder
    _count?: vacant_bed_logCountOrderByAggregateInput
    _avg?: vacant_bed_logAvgOrderByAggregateInput
    _max?: vacant_bed_logMaxOrderByAggregateInput
    _min?: vacant_bed_logMinOrderByAggregateInput
    _sum?: vacant_bed_logSumOrderByAggregateInput
  }

  export type vacant_bed_logScalarWhereWithAggregatesInput = {
    AND?: Enumerable<vacant_bed_logScalarWhereWithAggregatesInput>
    OR?: Enumerable<vacant_bed_logScalarWhereWithAggregatesInput>
    NOT?: Enumerable<vacant_bed_logScalarWhereWithAggregatesInput>
    registration_no?: StringWithAggregatesFilter | string
    last_updated?: DateTimeWithAggregatesFilter | Date | string
    ward?: IntNullableWithAggregatesFilter | number | null
    special_ward?: IntNullableWithAggregatesFilter | number | null
    cabin?: IntNullableWithAggregatesFilter | number | null
    vip_cabin?: IntNullableWithAggregatesFilter | number | null
    icu?: IntNullableWithAggregatesFilter | number | null
    ccu?: IntNullableWithAggregatesFilter | number | null
    hdu?: IntNullableWithAggregatesFilter | number | null
    hfncu?: IntNullableWithAggregatesFilter | number | null
    emergency?: IntNullableWithAggregatesFilter | number | null
    covid?: IntNullableWithAggregatesFilter | number | null
    extra?: IntNullableWithAggregatesFilter | number | null
  }

  export type amenityWhereInput = {
    AND?: Enumerable<amenityWhereInput>
    OR?: Enumerable<amenityWhereInput>
    NOT?: Enumerable<amenityWhereInput>
    registration_no?: StringFilter | string
    atm?: BoolNullableFilter | boolean | null
    baby_corner?: BoolNullableFilter | boolean | null
    cafeteria?: BoolNullableFilter | boolean | null
    gift_shop?: BoolNullableFilter | boolean | null
    locker?: BoolNullableFilter | boolean | null
    parking?: BoolNullableFilter | boolean | null
    pharmacy?: BoolNullableFilter | boolean | null
    prayer_area?: BoolNullableFilter | boolean | null
    wheelchair?: BoolNullableFilter | boolean | null
    wifi?: BoolNullableFilter | boolean | null
    hospital?: XOR<HospitalRelationFilter, hospitalWhereInput>
  }

  export type amenityOrderByWithRelationInput = {
    registration_no?: SortOrder
    atm?: SortOrder
    baby_corner?: SortOrder
    cafeteria?: SortOrder
    gift_shop?: SortOrder
    locker?: SortOrder
    parking?: SortOrder
    pharmacy?: SortOrder
    prayer_area?: SortOrder
    wheelchair?: SortOrder
    wifi?: SortOrder
    hospital?: hospitalOrderByWithRelationInput
  }

  export type amenityWhereUniqueInput = {
    registration_no?: string
  }

  export type amenityOrderByWithAggregationInput = {
    registration_no?: SortOrder
    atm?: SortOrder
    baby_corner?: SortOrder
    cafeteria?: SortOrder
    gift_shop?: SortOrder
    locker?: SortOrder
    parking?: SortOrder
    pharmacy?: SortOrder
    prayer_area?: SortOrder
    wheelchair?: SortOrder
    wifi?: SortOrder
    _count?: amenityCountOrderByAggregateInput
    _max?: amenityMaxOrderByAggregateInput
    _min?: amenityMinOrderByAggregateInput
  }

  export type amenityScalarWhereWithAggregatesInput = {
    AND?: Enumerable<amenityScalarWhereWithAggregatesInput>
    OR?: Enumerable<amenityScalarWhereWithAggregatesInput>
    NOT?: Enumerable<amenityScalarWhereWithAggregatesInput>
    registration_no?: StringWithAggregatesFilter | string
    atm?: BoolNullableWithAggregatesFilter | boolean | null
    baby_corner?: BoolNullableWithAggregatesFilter | boolean | null
    cafeteria?: BoolNullableWithAggregatesFilter | boolean | null
    gift_shop?: BoolNullableWithAggregatesFilter | boolean | null
    locker?: BoolNullableWithAggregatesFilter | boolean | null
    parking?: BoolNullableWithAggregatesFilter | boolean | null
    pharmacy?: BoolNullableWithAggregatesFilter | boolean | null
    prayer_area?: BoolNullableWithAggregatesFilter | boolean | null
    wheelchair?: BoolNullableWithAggregatesFilter | boolean | null
    wifi?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type blood_analytical_serviceWhereInput = {
    AND?: Enumerable<blood_analytical_serviceWhereInput>
    OR?: Enumerable<blood_analytical_serviceWhereInput>
    NOT?: Enumerable<blood_analytical_serviceWhereInput>
    registration_no?: StringFilter | string
    antibody_analysis?: BoolNullableFilter | boolean | null
    cbc?: BoolNullableFilter | boolean | null
    creatinine_analysis?: BoolNullableFilter | boolean | null
    crp?: BoolNullableFilter | boolean | null
    esr?: BoolNullableFilter | boolean | null
    fobt?: BoolNullableFilter | boolean | null
    hematocrit?: BoolNullableFilter | boolean | null
    kidney_function_analysis?: BoolNullableFilter | boolean | null
    lipid_profile?: BoolNullableFilter | boolean | null
    liver_function_analysis?: BoolNullableFilter | boolean | null
    rf?: BoolNullableFilter | boolean | null
    serum_analysis?: BoolNullableFilter | boolean | null
    sr?: BoolNullableFilter | boolean | null
    hospital?: XOR<HospitalRelationFilter, hospitalWhereInput>
  }

  export type blood_analytical_serviceOrderByWithRelationInput = {
    registration_no?: SortOrder
    antibody_analysis?: SortOrder
    cbc?: SortOrder
    creatinine_analysis?: SortOrder
    crp?: SortOrder
    esr?: SortOrder
    fobt?: SortOrder
    hematocrit?: SortOrder
    kidney_function_analysis?: SortOrder
    lipid_profile?: SortOrder
    liver_function_analysis?: SortOrder
    rf?: SortOrder
    serum_analysis?: SortOrder
    sr?: SortOrder
    hospital?: hospitalOrderByWithRelationInput
  }

  export type blood_analytical_serviceWhereUniqueInput = {
    registration_no?: string
  }

  export type blood_analytical_serviceOrderByWithAggregationInput = {
    registration_no?: SortOrder
    antibody_analysis?: SortOrder
    cbc?: SortOrder
    creatinine_analysis?: SortOrder
    crp?: SortOrder
    esr?: SortOrder
    fobt?: SortOrder
    hematocrit?: SortOrder
    kidney_function_analysis?: SortOrder
    lipid_profile?: SortOrder
    liver_function_analysis?: SortOrder
    rf?: SortOrder
    serum_analysis?: SortOrder
    sr?: SortOrder
    _count?: blood_analytical_serviceCountOrderByAggregateInput
    _max?: blood_analytical_serviceMaxOrderByAggregateInput
    _min?: blood_analytical_serviceMinOrderByAggregateInput
  }

  export type blood_analytical_serviceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<blood_analytical_serviceScalarWhereWithAggregatesInput>
    OR?: Enumerable<blood_analytical_serviceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<blood_analytical_serviceScalarWhereWithAggregatesInput>
    registration_no?: StringWithAggregatesFilter | string
    antibody_analysis?: BoolNullableWithAggregatesFilter | boolean | null
    cbc?: BoolNullableWithAggregatesFilter | boolean | null
    creatinine_analysis?: BoolNullableWithAggregatesFilter | boolean | null
    crp?: BoolNullableWithAggregatesFilter | boolean | null
    esr?: BoolNullableWithAggregatesFilter | boolean | null
    fobt?: BoolNullableWithAggregatesFilter | boolean | null
    hematocrit?: BoolNullableWithAggregatesFilter | boolean | null
    kidney_function_analysis?: BoolNullableWithAggregatesFilter | boolean | null
    lipid_profile?: BoolNullableWithAggregatesFilter | boolean | null
    liver_function_analysis?: BoolNullableWithAggregatesFilter | boolean | null
    rf?: BoolNullableWithAggregatesFilter | boolean | null
    serum_analysis?: BoolNullableWithAggregatesFilter | boolean | null
    sr?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type diagnostic_imaging_serviceWhereInput = {
    AND?: Enumerable<diagnostic_imaging_serviceWhereInput>
    OR?: Enumerable<diagnostic_imaging_serviceWhereInput>
    NOT?: Enumerable<diagnostic_imaging_serviceWhereInput>
    registration_no?: StringFilter | string
    angiocardiography?: BoolNullableFilter | boolean | null
    angiography?: BoolNullableFilter | boolean | null
    cta?: BoolNullableFilter | boolean | null
    ct?: BoolNullableFilter | boolean | null
    coloscopy?: BoolNullableFilter | boolean | null
    cystoscopy?: BoolNullableFilter | boolean | null
    echocardiography?: BoolNullableFilter | boolean | null
    endoscopy?: BoolNullableFilter | boolean | null
    fluoroscopy?: BoolNullableFilter | boolean | null
    mra?: BoolNullableFilter | boolean | null
    mri?: BoolNullableFilter | boolean | null
    mrs?: BoolNullableFilter | boolean | null
    mammography?: BoolNullableFilter | boolean | null
    pet?: BoolNullableFilter | boolean | null
    pet_ct?: BoolNullableFilter | boolean | null
    spect?: BoolNullableFilter | boolean | null
    ultrasound?: BoolNullableFilter | boolean | null
    x_ray?: BoolNullableFilter | boolean | null
    hospital?: XOR<HospitalRelationFilter, hospitalWhereInput>
  }

  export type diagnostic_imaging_serviceOrderByWithRelationInput = {
    registration_no?: SortOrder
    angiocardiography?: SortOrder
    angiography?: SortOrder
    cta?: SortOrder
    ct?: SortOrder
    coloscopy?: SortOrder
    cystoscopy?: SortOrder
    echocardiography?: SortOrder
    endoscopy?: SortOrder
    fluoroscopy?: SortOrder
    mra?: SortOrder
    mri?: SortOrder
    mrs?: SortOrder
    mammography?: SortOrder
    pet?: SortOrder
    pet_ct?: SortOrder
    spect?: SortOrder
    ultrasound?: SortOrder
    x_ray?: SortOrder
    hospital?: hospitalOrderByWithRelationInput
  }

  export type diagnostic_imaging_serviceWhereUniqueInput = {
    registration_no?: string
  }

  export type diagnostic_imaging_serviceOrderByWithAggregationInput = {
    registration_no?: SortOrder
    angiocardiography?: SortOrder
    angiography?: SortOrder
    cta?: SortOrder
    ct?: SortOrder
    coloscopy?: SortOrder
    cystoscopy?: SortOrder
    echocardiography?: SortOrder
    endoscopy?: SortOrder
    fluoroscopy?: SortOrder
    mra?: SortOrder
    mri?: SortOrder
    mrs?: SortOrder
    mammography?: SortOrder
    pet?: SortOrder
    pet_ct?: SortOrder
    spect?: SortOrder
    ultrasound?: SortOrder
    x_ray?: SortOrder
    _count?: diagnostic_imaging_serviceCountOrderByAggregateInput
    _max?: diagnostic_imaging_serviceMaxOrderByAggregateInput
    _min?: diagnostic_imaging_serviceMinOrderByAggregateInput
  }

  export type diagnostic_imaging_serviceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<diagnostic_imaging_serviceScalarWhereWithAggregatesInput>
    OR?: Enumerable<diagnostic_imaging_serviceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<diagnostic_imaging_serviceScalarWhereWithAggregatesInput>
    registration_no?: StringWithAggregatesFilter | string
    angiocardiography?: BoolNullableWithAggregatesFilter | boolean | null
    angiography?: BoolNullableWithAggregatesFilter | boolean | null
    cta?: BoolNullableWithAggregatesFilter | boolean | null
    ct?: BoolNullableWithAggregatesFilter | boolean | null
    coloscopy?: BoolNullableWithAggregatesFilter | boolean | null
    cystoscopy?: BoolNullableWithAggregatesFilter | boolean | null
    echocardiography?: BoolNullableWithAggregatesFilter | boolean | null
    endoscopy?: BoolNullableWithAggregatesFilter | boolean | null
    fluoroscopy?: BoolNullableWithAggregatesFilter | boolean | null
    mra?: BoolNullableWithAggregatesFilter | boolean | null
    mri?: BoolNullableWithAggregatesFilter | boolean | null
    mrs?: BoolNullableWithAggregatesFilter | boolean | null
    mammography?: BoolNullableWithAggregatesFilter | boolean | null
    pet?: BoolNullableWithAggregatesFilter | boolean | null
    pet_ct?: BoolNullableWithAggregatesFilter | boolean | null
    spect?: BoolNullableWithAggregatesFilter | boolean | null
    ultrasound?: BoolNullableWithAggregatesFilter | boolean | null
    x_ray?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type doctorWhereInput = {
    AND?: Enumerable<doctorWhereInput>
    OR?: Enumerable<doctorWhereInput>
    NOT?: Enumerable<doctorWhereInput>
    id?: StringFilter | string
    registration_no?: StringFilter | string
    name?: StringFilter | string
    designation?: StringFilter | string
    chamber?: StringNullableFilter | string | null
    bio?: StringNullableFilter | string | null
    joined_on?: DateTimeFilter | Date | string
    hospital?: XOR<HospitalRelationFilter, hospitalWhereInput>
    schedule?: ScheduleListRelationFilter
  }

  export type doctorOrderByWithRelationInput = {
    id?: SortOrder
    registration_no?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    chamber?: SortOrder
    bio?: SortOrder
    joined_on?: SortOrder
    hospital?: hospitalOrderByWithRelationInput
    schedule?: scheduleOrderByRelationAggregateInput
  }

  export type doctorWhereUniqueInput = {
    id_registration_no_joined_on?: doctorIdRegistration_noJoined_onCompoundUniqueInput
  }

  export type doctorOrderByWithAggregationInput = {
    id?: SortOrder
    registration_no?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    chamber?: SortOrder
    bio?: SortOrder
    joined_on?: SortOrder
    _count?: doctorCountOrderByAggregateInput
    _max?: doctorMaxOrderByAggregateInput
    _min?: doctorMinOrderByAggregateInput
  }

  export type doctorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<doctorScalarWhereWithAggregatesInput>
    OR?: Enumerable<doctorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<doctorScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    registration_no?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    designation?: StringWithAggregatesFilter | string
    chamber?: StringNullableWithAggregatesFilter | string | null
    bio?: StringNullableWithAggregatesFilter | string | null
    joined_on?: DateTimeWithAggregatesFilter | Date | string
  }

  export type general_serviceWhereInput = {
    AND?: Enumerable<general_serviceWhereInput>
    OR?: Enumerable<general_serviceWhereInput>
    NOT?: Enumerable<general_serviceWhereInput>
    registration_no?: StringFilter | string
    autopsy?: BoolNullableFilter | boolean | null
    biopsy?: BoolNullableFilter | boolean | null
    blood_bank?: BoolNullableFilter | boolean | null
    bronchoscopy?: BoolNullableFilter | boolean | null
    ecg?: BoolNullableFilter | boolean | null
    echocardiography?: BoolNullableFilter | boolean | null
    emg?: BoolNullableFilter | boolean | null
    laparoscopy?: BoolNullableFilter | boolean | null
    phonocardiography?: BoolNullableFilter | boolean | null
    urinalysis?: BoolNullableFilter | boolean | null
    hospital?: XOR<HospitalRelationFilter, hospitalWhereInput>
  }

  export type general_serviceOrderByWithRelationInput = {
    registration_no?: SortOrder
    autopsy?: SortOrder
    biopsy?: SortOrder
    blood_bank?: SortOrder
    bronchoscopy?: SortOrder
    ecg?: SortOrder
    echocardiography?: SortOrder
    emg?: SortOrder
    laparoscopy?: SortOrder
    phonocardiography?: SortOrder
    urinalysis?: SortOrder
    hospital?: hospitalOrderByWithRelationInput
  }

  export type general_serviceWhereUniqueInput = {
    registration_no?: string
  }

  export type general_serviceOrderByWithAggregationInput = {
    registration_no?: SortOrder
    autopsy?: SortOrder
    biopsy?: SortOrder
    blood_bank?: SortOrder
    bronchoscopy?: SortOrder
    ecg?: SortOrder
    echocardiography?: SortOrder
    emg?: SortOrder
    laparoscopy?: SortOrder
    phonocardiography?: SortOrder
    urinalysis?: SortOrder
    _count?: general_serviceCountOrderByAggregateInput
    _max?: general_serviceMaxOrderByAggregateInput
    _min?: general_serviceMinOrderByAggregateInput
  }

  export type general_serviceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<general_serviceScalarWhereWithAggregatesInput>
    OR?: Enumerable<general_serviceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<general_serviceScalarWhereWithAggregatesInput>
    registration_no?: StringWithAggregatesFilter | string
    autopsy?: BoolNullableWithAggregatesFilter | boolean | null
    biopsy?: BoolNullableWithAggregatesFilter | boolean | null
    blood_bank?: BoolNullableWithAggregatesFilter | boolean | null
    bronchoscopy?: BoolNullableWithAggregatesFilter | boolean | null
    ecg?: BoolNullableWithAggregatesFilter | boolean | null
    echocardiography?: BoolNullableWithAggregatesFilter | boolean | null
    emg?: BoolNullableWithAggregatesFilter | boolean | null
    laparoscopy?: BoolNullableWithAggregatesFilter | boolean | null
    phonocardiography?: BoolNullableWithAggregatesFilter | boolean | null
    urinalysis?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type scheduleWhereInput = {
    AND?: Enumerable<scheduleWhereInput>
    OR?: Enumerable<scheduleWhereInput>
    NOT?: Enumerable<scheduleWhereInput>
    id?: StringFilter | string
    day?: Enumschedule_dayFilter | schedule_day
    start_time?: DateTimeFilter | Date | string
    end_time?: DateTimeFilter | Date | string
    last_updated?: DateTimeFilter | Date | string
    doctor?: XOR<DoctorRelationFilter, doctorWhereInput>
  }

  export type scheduleOrderByWithRelationInput = {
    id?: SortOrder
    day?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    last_updated?: SortOrder
    doctor?: doctorOrderByWithRelationInput
  }

  export type scheduleWhereUniqueInput = {
    id_day?: scheduleIdDayCompoundUniqueInput
  }

  export type scheduleOrderByWithAggregationInput = {
    id?: SortOrder
    day?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    last_updated?: SortOrder
    _count?: scheduleCountOrderByAggregateInput
    _max?: scheduleMaxOrderByAggregateInput
    _min?: scheduleMinOrderByAggregateInput
  }

  export type scheduleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<scheduleScalarWhereWithAggregatesInput>
    OR?: Enumerable<scheduleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<scheduleScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    day?: Enumschedule_dayWithAggregatesFilter | schedule_day
    start_time?: DateTimeWithAggregatesFilter | Date | string
    end_time?: DateTimeWithAggregatesFilter | Date | string
    last_updated?: DateTimeWithAggregatesFilter | Date | string
  }

  export type addressCreateInput = {
    address: string
    phone_no?: string | null
    mobile_no?: string | null
    latitude?: Decimal | number | string | null
    longitude?: Decimal | number | string | null
    hospital: hospitalCreateNestedOneWithoutAddressInput
  }

  export type addressUncheckedCreateInput = {
    registration_no: string
    address: string
    phone_no?: string | null
    mobile_no?: string | null
    latitude?: Decimal | number | string | null
    longitude?: Decimal | number | string | null
  }

  export type addressUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    hospital?: hospitalUpdateOneRequiredWithoutAddressInput
  }

  export type addressUncheckedUpdateInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
  }

  export type addressCreateManyInput = {
    registration_no: string
    address: string
    phone_no?: string | null
    mobile_no?: string | null
    latitude?: Decimal | number | string | null
    longitude?: Decimal | number | string | null
  }

  export type addressUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
  }

  export type addressUncheckedUpdateManyInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
  }

  export type bookingCreateInput = {
    id: string
    booked_at?: Date | string
    name?: string | null
    sex: booking_sex
    bed_type: booking_bed_type
    booked_for?: booking_booked_for | null
    cancelled_at?: Date | string | null
    status: booking_status
    remarks?: string | null
    last_updated?: Date | string
    user: userCreateNestedOneWithoutBookingInput
    hospital: hospitalCreateNestedOneWithoutBookingInput
  }

  export type bookingUncheckedCreateInput = {
    id: string
    booked_at?: Date | string
    mobile_no: string
    name?: string | null
    sex: booking_sex
    bed_type: booking_bed_type
    booked_for?: booking_booked_for | null
    cancelled_at?: Date | string | null
    registration_no: string
    status: booking_status
    remarks?: string | null
    last_updated?: Date | string
  }

  export type bookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    booked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: Enumbooking_sexFieldUpdateOperationsInput | booking_sex
    bed_type?: Enumbooking_bed_typeFieldUpdateOperationsInput | booking_bed_type
    booked_for?: NullableEnumbooking_booked_forFieldUpdateOperationsInput | booking_booked_for | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumbooking_statusFieldUpdateOperationsInput | booking_status
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutBookingInput
    hospital?: hospitalUpdateOneRequiredWithoutBookingInput
  }

  export type bookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    booked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mobile_no?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: Enumbooking_sexFieldUpdateOperationsInput | booking_sex
    bed_type?: Enumbooking_bed_typeFieldUpdateOperationsInput | booking_bed_type
    booked_for?: NullableEnumbooking_booked_forFieldUpdateOperationsInput | booking_booked_for | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registration_no?: StringFieldUpdateOperationsInput | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | booking_status
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingCreateManyInput = {
    id: string
    booked_at?: Date | string
    mobile_no: string
    name?: string | null
    sex: booking_sex
    bed_type: booking_bed_type
    booked_for?: booking_booked_for | null
    cancelled_at?: Date | string | null
    registration_no: string
    status: booking_status
    remarks?: string | null
    last_updated?: Date | string
  }

  export type bookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    booked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: Enumbooking_sexFieldUpdateOperationsInput | booking_sex
    bed_type?: Enumbooking_bed_typeFieldUpdateOperationsInput | booking_bed_type
    booked_for?: NullableEnumbooking_booked_forFieldUpdateOperationsInput | booking_booked_for | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumbooking_statusFieldUpdateOperationsInput | booking_status
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    booked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mobile_no?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: Enumbooking_sexFieldUpdateOperationsInput | booking_sex
    bed_type?: Enumbooking_bed_typeFieldUpdateOperationsInput | booking_bed_type
    booked_for?: NullableEnumbooking_booked_forFieldUpdateOperationsInput | booking_booked_for | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registration_no?: StringFieldUpdateOperationsInput | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | booking_status
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type capacityCreateInput = {
    total_capacity: number
    ward?: number | null
    special_ward?: number | null
    cabin?: number | null
    vip_cabin?: number | null
    icu?: number | null
    ccu?: number | null
    hdu?: number | null
    hfncu?: number | null
    emergency?: number | null
    covid?: number | null
    extra?: number | null
    hospital: hospitalCreateNestedOneWithoutCapacityInput
  }

  export type capacityUncheckedCreateInput = {
    registration_no: string
    total_capacity: number
    ward?: number | null
    special_ward?: number | null
    cabin?: number | null
    vip_cabin?: number | null
    icu?: number | null
    ccu?: number | null
    hdu?: number | null
    hfncu?: number | null
    emergency?: number | null
    covid?: number | null
    extra?: number | null
  }

  export type capacityUpdateInput = {
    total_capacity?: IntFieldUpdateOperationsInput | number
    ward?: NullableIntFieldUpdateOperationsInput | number | null
    special_ward?: NullableIntFieldUpdateOperationsInput | number | null
    cabin?: NullableIntFieldUpdateOperationsInput | number | null
    vip_cabin?: NullableIntFieldUpdateOperationsInput | number | null
    icu?: NullableIntFieldUpdateOperationsInput | number | null
    ccu?: NullableIntFieldUpdateOperationsInput | number | null
    hdu?: NullableIntFieldUpdateOperationsInput | number | null
    hfncu?: NullableIntFieldUpdateOperationsInput | number | null
    emergency?: NullableIntFieldUpdateOperationsInput | number | null
    covid?: NullableIntFieldUpdateOperationsInput | number | null
    extra?: NullableIntFieldUpdateOperationsInput | number | null
    hospital?: hospitalUpdateOneRequiredWithoutCapacityInput
  }

  export type capacityUncheckedUpdateInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    total_capacity?: IntFieldUpdateOperationsInput | number
    ward?: NullableIntFieldUpdateOperationsInput | number | null
    special_ward?: NullableIntFieldUpdateOperationsInput | number | null
    cabin?: NullableIntFieldUpdateOperationsInput | number | null
    vip_cabin?: NullableIntFieldUpdateOperationsInput | number | null
    icu?: NullableIntFieldUpdateOperationsInput | number | null
    ccu?: NullableIntFieldUpdateOperationsInput | number | null
    hdu?: NullableIntFieldUpdateOperationsInput | number | null
    hfncu?: NullableIntFieldUpdateOperationsInput | number | null
    emergency?: NullableIntFieldUpdateOperationsInput | number | null
    covid?: NullableIntFieldUpdateOperationsInput | number | null
    extra?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type capacityCreateManyInput = {
    registration_no: string
    total_capacity: number
    ward?: number | null
    special_ward?: number | null
    cabin?: number | null
    vip_cabin?: number | null
    icu?: number | null
    ccu?: number | null
    hdu?: number | null
    hfncu?: number | null
    emergency?: number | null
    covid?: number | null
    extra?: number | null
  }

  export type capacityUpdateManyMutationInput = {
    total_capacity?: IntFieldUpdateOperationsInput | number
    ward?: NullableIntFieldUpdateOperationsInput | number | null
    special_ward?: NullableIntFieldUpdateOperationsInput | number | null
    cabin?: NullableIntFieldUpdateOperationsInput | number | null
    vip_cabin?: NullableIntFieldUpdateOperationsInput | number | null
    icu?: NullableIntFieldUpdateOperationsInput | number | null
    ccu?: NullableIntFieldUpdateOperationsInput | number | null
    hdu?: NullableIntFieldUpdateOperationsInput | number | null
    hfncu?: NullableIntFieldUpdateOperationsInput | number | null
    emergency?: NullableIntFieldUpdateOperationsInput | number | null
    covid?: NullableIntFieldUpdateOperationsInput | number | null
    extra?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type capacityUncheckedUpdateManyInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    total_capacity?: IntFieldUpdateOperationsInput | number
    ward?: NullableIntFieldUpdateOperationsInput | number | null
    special_ward?: NullableIntFieldUpdateOperationsInput | number | null
    cabin?: NullableIntFieldUpdateOperationsInput | number | null
    vip_cabin?: NullableIntFieldUpdateOperationsInput | number | null
    icu?: NullableIntFieldUpdateOperationsInput | number | null
    ccu?: NullableIntFieldUpdateOperationsInput | number | null
    hdu?: NullableIntFieldUpdateOperationsInput | number | null
    hfncu?: NullableIntFieldUpdateOperationsInput | number | null
    emergency?: NullableIntFieldUpdateOperationsInput | number | null
    covid?: NullableIntFieldUpdateOperationsInput | number | null
    extra?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type hospitalCreateInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressCreateNestedOneWithoutHospitalInput
    amenity?: amenityCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceCreateNestedOneWithoutHospitalInput
    booking?: bookingCreateNestedManyWithoutHospitalInput
    capacity?: capacityCreateNestedOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceCreateNestedOneWithoutHospitalInput
    doctor?: doctorCreateNestedManyWithoutHospitalInput
    general_service?: general_serviceCreateNestedOneWithoutHospitalInput
    log?: logCreateNestedManyWithoutHospitalInput
    staff?: staffCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logCreateNestedManyWithoutHospitalInput
  }

  export type hospitalUncheckedCreateInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressUncheckedCreateNestedOneWithoutHospitalInput
    amenity?: amenityUncheckedCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedCreateNestedOneWithoutHospitalInput
    booking?: bookingUncheckedCreateNestedManyWithoutHospitalInput
    capacity?: capacityUncheckedCreateNestedOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedCreateNestedOneWithoutHospitalInput
    doctor?: doctorUncheckedCreateNestedManyWithoutHospitalInput
    general_service?: general_serviceUncheckedCreateNestedOneWithoutHospitalInput
    log?: logUncheckedCreateNestedManyWithoutHospitalInput
    staff?: staffUncheckedCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type hospitalUpdateInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUpdateOneWithoutHospitalInput
    amenity?: amenityUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUpdateOneWithoutHospitalInput
    booking?: bookingUpdateManyWithoutHospitalInput
    capacity?: capacityUpdateOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUpdateOneWithoutHospitalInput
    doctor?: doctorUpdateManyWithoutHospitalInput
    general_service?: general_serviceUpdateOneWithoutHospitalInput
    log?: logUpdateManyWithoutHospitalInput
    staff?: staffUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUpdateManyWithoutHospitalInput
  }

  export type hospitalUncheckedUpdateInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUncheckedUpdateOneWithoutHospitalInput
    amenity?: amenityUncheckedUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedUpdateOneWithoutHospitalInput
    booking?: bookingUncheckedUpdateManyWithoutHospitalInput
    capacity?: capacityUncheckedUpdateOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedUpdateOneWithoutHospitalInput
    doctor?: doctorUncheckedUpdateManyWithoutHospitalInput
    general_service?: general_serviceUncheckedUpdateOneWithoutHospitalInput
    log?: logUncheckedUpdateManyWithoutHospitalInput
    staff?: staffUncheckedUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedUpdateManyWithoutHospitalInput
  }

  export type hospitalCreateManyInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
  }

  export type hospitalUpdateManyMutationInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
  }

  export type hospitalUncheckedUpdateManyInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
  }

  export type logCreateInput = {
    logged_at?: Date | string
    task: string
    role: log_role
    staff: staffCreateNestedOneWithoutLogInput
    hospital: hospitalCreateNestedOneWithoutLogInput
  }

  export type logUncheckedCreateInput = {
    logged_at?: Date | string
    registration_no: string
    task: string
    mobile_no: string
    role: log_role
  }

  export type logUpdateInput = {
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: StringFieldUpdateOperationsInput | string
    role?: Enumlog_roleFieldUpdateOperationsInput | log_role
    staff?: staffUpdateOneRequiredWithoutLogInput
    hospital?: hospitalUpdateOneRequiredWithoutLogInput
  }

  export type logUncheckedUpdateInput = {
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registration_no?: StringFieldUpdateOperationsInput | string
    task?: StringFieldUpdateOperationsInput | string
    mobile_no?: StringFieldUpdateOperationsInput | string
    role?: Enumlog_roleFieldUpdateOperationsInput | log_role
  }

  export type logCreateManyInput = {
    logged_at?: Date | string
    registration_no: string
    task: string
    mobile_no: string
    role: log_role
  }

  export type logUpdateManyMutationInput = {
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: StringFieldUpdateOperationsInput | string
    role?: Enumlog_roleFieldUpdateOperationsInput | log_role
  }

  export type logUncheckedUpdateManyInput = {
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registration_no?: StringFieldUpdateOperationsInput | string
    task?: StringFieldUpdateOperationsInput | string
    mobile_no?: StringFieldUpdateOperationsInput | string
    role?: Enumlog_roleFieldUpdateOperationsInput | log_role
  }

  export type staffCreateInput = {
    mobile_no: string
    password: string
    name: string
    email: string
    role: staff_role
    status: staff_status
    joined_on?: Date | string
    last_updated?: Date | string
    hospital: hospitalCreateNestedOneWithoutStaffInput
    log?: logCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateInput = {
    mobile_no: string
    password: string
    name: string
    email: string
    role: staff_role
    status: staff_status
    registration_no: string
    joined_on?: Date | string
    last_updated?: Date | string
    log?: logUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffUpdateInput = {
    mobile_no?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstaff_roleFieldUpdateOperationsInput | staff_role
    status?: Enumstaff_statusFieldUpdateOperationsInput | staff_status
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: hospitalUpdateOneRequiredWithoutStaffInput
    log?: logUpdateManyWithoutStaffInput
  }

  export type staffUncheckedUpdateInput = {
    mobile_no?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstaff_roleFieldUpdateOperationsInput | staff_role
    status?: Enumstaff_statusFieldUpdateOperationsInput | staff_status
    registration_no?: StringFieldUpdateOperationsInput | string
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: logUncheckedUpdateManyWithoutStaffInput
  }

  export type staffCreateManyInput = {
    mobile_no: string
    password: string
    name: string
    email: string
    role: staff_role
    status: staff_status
    registration_no: string
    joined_on?: Date | string
    last_updated?: Date | string
  }

  export type staffUpdateManyMutationInput = {
    mobile_no?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstaff_roleFieldUpdateOperationsInput | staff_role
    status?: Enumstaff_statusFieldUpdateOperationsInput | staff_status
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type staffUncheckedUpdateManyInput = {
    mobile_no?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstaff_roleFieldUpdateOperationsInput | staff_role
    status?: Enumstaff_statusFieldUpdateOperationsInput | staff_status
    registration_no?: StringFieldUpdateOperationsInput | string
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateInput = {
    mobile_no: string
    password: string
    name: string
    sex: user_sex
    dob: Date | string
    email?: string | null
    document_id?: string | null
    joined_on?: Date | string
    booking?: bookingCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    mobile_no: string
    password: string
    name: string
    sex: user_sex
    dob: Date | string
    email?: string | null
    document_id?: string | null
    joined_on?: Date | string
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    mobile_no?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: Enumuser_sexFieldUpdateOperationsInput | user_sex
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    document_id?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUpdateManyWithoutUserInput
  }

  export type userUncheckedUpdateInput = {
    mobile_no?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: Enumuser_sexFieldUpdateOperationsInput | user_sex
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    document_id?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUncheckedUpdateManyWithoutUserInput
  }

  export type userCreateManyInput = {
    mobile_no: string
    password: string
    name: string
    sex: user_sex
    dob: Date | string
    email?: string | null
    document_id?: string | null
    joined_on?: Date | string
  }

  export type userUpdateManyMutationInput = {
    mobile_no?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: Enumuser_sexFieldUpdateOperationsInput | user_sex
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    document_id?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    mobile_no?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: Enumuser_sexFieldUpdateOperationsInput | user_sex
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    document_id?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vacant_bed_logCreateInput = {
    last_updated?: Date | string
    ward?: number | null
    special_ward?: number | null
    cabin?: number | null
    vip_cabin?: number | null
    icu?: number | null
    ccu?: number | null
    hdu?: number | null
    hfncu?: number | null
    emergency?: number | null
    covid?: number | null
    extra?: number | null
    hospital: hospitalCreateNestedOneWithoutVacant_bed_logInput
  }

  export type vacant_bed_logUncheckedCreateInput = {
    registration_no: string
    last_updated?: Date | string
    ward?: number | null
    special_ward?: number | null
    cabin?: number | null
    vip_cabin?: number | null
    icu?: number | null
    ccu?: number | null
    hdu?: number | null
    hfncu?: number | null
    emergency?: number | null
    covid?: number | null
    extra?: number | null
  }

  export type vacant_bed_logUpdateInput = {
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    ward?: NullableIntFieldUpdateOperationsInput | number | null
    special_ward?: NullableIntFieldUpdateOperationsInput | number | null
    cabin?: NullableIntFieldUpdateOperationsInput | number | null
    vip_cabin?: NullableIntFieldUpdateOperationsInput | number | null
    icu?: NullableIntFieldUpdateOperationsInput | number | null
    ccu?: NullableIntFieldUpdateOperationsInput | number | null
    hdu?: NullableIntFieldUpdateOperationsInput | number | null
    hfncu?: NullableIntFieldUpdateOperationsInput | number | null
    emergency?: NullableIntFieldUpdateOperationsInput | number | null
    covid?: NullableIntFieldUpdateOperationsInput | number | null
    extra?: NullableIntFieldUpdateOperationsInput | number | null
    hospital?: hospitalUpdateOneRequiredWithoutVacant_bed_logInput
  }

  export type vacant_bed_logUncheckedUpdateInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    ward?: NullableIntFieldUpdateOperationsInput | number | null
    special_ward?: NullableIntFieldUpdateOperationsInput | number | null
    cabin?: NullableIntFieldUpdateOperationsInput | number | null
    vip_cabin?: NullableIntFieldUpdateOperationsInput | number | null
    icu?: NullableIntFieldUpdateOperationsInput | number | null
    ccu?: NullableIntFieldUpdateOperationsInput | number | null
    hdu?: NullableIntFieldUpdateOperationsInput | number | null
    hfncu?: NullableIntFieldUpdateOperationsInput | number | null
    emergency?: NullableIntFieldUpdateOperationsInput | number | null
    covid?: NullableIntFieldUpdateOperationsInput | number | null
    extra?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type vacant_bed_logCreateManyInput = {
    registration_no: string
    last_updated?: Date | string
    ward?: number | null
    special_ward?: number | null
    cabin?: number | null
    vip_cabin?: number | null
    icu?: number | null
    ccu?: number | null
    hdu?: number | null
    hfncu?: number | null
    emergency?: number | null
    covid?: number | null
    extra?: number | null
  }

  export type vacant_bed_logUpdateManyMutationInput = {
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    ward?: NullableIntFieldUpdateOperationsInput | number | null
    special_ward?: NullableIntFieldUpdateOperationsInput | number | null
    cabin?: NullableIntFieldUpdateOperationsInput | number | null
    vip_cabin?: NullableIntFieldUpdateOperationsInput | number | null
    icu?: NullableIntFieldUpdateOperationsInput | number | null
    ccu?: NullableIntFieldUpdateOperationsInput | number | null
    hdu?: NullableIntFieldUpdateOperationsInput | number | null
    hfncu?: NullableIntFieldUpdateOperationsInput | number | null
    emergency?: NullableIntFieldUpdateOperationsInput | number | null
    covid?: NullableIntFieldUpdateOperationsInput | number | null
    extra?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type vacant_bed_logUncheckedUpdateManyInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    ward?: NullableIntFieldUpdateOperationsInput | number | null
    special_ward?: NullableIntFieldUpdateOperationsInput | number | null
    cabin?: NullableIntFieldUpdateOperationsInput | number | null
    vip_cabin?: NullableIntFieldUpdateOperationsInput | number | null
    icu?: NullableIntFieldUpdateOperationsInput | number | null
    ccu?: NullableIntFieldUpdateOperationsInput | number | null
    hdu?: NullableIntFieldUpdateOperationsInput | number | null
    hfncu?: NullableIntFieldUpdateOperationsInput | number | null
    emergency?: NullableIntFieldUpdateOperationsInput | number | null
    covid?: NullableIntFieldUpdateOperationsInput | number | null
    extra?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type amenityCreateInput = {
    atm?: boolean | null
    baby_corner?: boolean | null
    cafeteria?: boolean | null
    gift_shop?: boolean | null
    locker?: boolean | null
    parking?: boolean | null
    pharmacy?: boolean | null
    prayer_area?: boolean | null
    wheelchair?: boolean | null
    wifi?: boolean | null
    hospital: hospitalCreateNestedOneWithoutAmenityInput
  }

  export type amenityUncheckedCreateInput = {
    registration_no: string
    atm?: boolean | null
    baby_corner?: boolean | null
    cafeteria?: boolean | null
    gift_shop?: boolean | null
    locker?: boolean | null
    parking?: boolean | null
    pharmacy?: boolean | null
    prayer_area?: boolean | null
    wheelchair?: boolean | null
    wifi?: boolean | null
  }

  export type amenityUpdateInput = {
    atm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    baby_corner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cafeteria?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gift_shop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    locker?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pharmacy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prayer_area?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wheelchair?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wifi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hospital?: hospitalUpdateOneRequiredWithoutAmenityInput
  }

  export type amenityUncheckedUpdateInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    atm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    baby_corner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cafeteria?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gift_shop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    locker?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pharmacy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prayer_area?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wheelchair?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wifi?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type amenityCreateManyInput = {
    registration_no: string
    atm?: boolean | null
    baby_corner?: boolean | null
    cafeteria?: boolean | null
    gift_shop?: boolean | null
    locker?: boolean | null
    parking?: boolean | null
    pharmacy?: boolean | null
    prayer_area?: boolean | null
    wheelchair?: boolean | null
    wifi?: boolean | null
  }

  export type amenityUpdateManyMutationInput = {
    atm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    baby_corner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cafeteria?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gift_shop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    locker?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pharmacy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prayer_area?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wheelchair?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wifi?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type amenityUncheckedUpdateManyInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    atm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    baby_corner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cafeteria?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gift_shop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    locker?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pharmacy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prayer_area?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wheelchair?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wifi?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type blood_analytical_serviceCreateInput = {
    antibody_analysis?: boolean | null
    cbc?: boolean | null
    creatinine_analysis?: boolean | null
    crp?: boolean | null
    esr?: boolean | null
    fobt?: boolean | null
    hematocrit?: boolean | null
    kidney_function_analysis?: boolean | null
    lipid_profile?: boolean | null
    liver_function_analysis?: boolean | null
    rf?: boolean | null
    serum_analysis?: boolean | null
    sr?: boolean | null
    hospital: hospitalCreateNestedOneWithoutBlood_analytical_serviceInput
  }

  export type blood_analytical_serviceUncheckedCreateInput = {
    registration_no: string
    antibody_analysis?: boolean | null
    cbc?: boolean | null
    creatinine_analysis?: boolean | null
    crp?: boolean | null
    esr?: boolean | null
    fobt?: boolean | null
    hematocrit?: boolean | null
    kidney_function_analysis?: boolean | null
    lipid_profile?: boolean | null
    liver_function_analysis?: boolean | null
    rf?: boolean | null
    serum_analysis?: boolean | null
    sr?: boolean | null
  }

  export type blood_analytical_serviceUpdateInput = {
    antibody_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cbc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creatinine_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    crp?: NullableBoolFieldUpdateOperationsInput | boolean | null
    esr?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fobt?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hematocrit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kidney_function_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lipid_profile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liver_function_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rf?: NullableBoolFieldUpdateOperationsInput | boolean | null
    serum_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sr?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hospital?: hospitalUpdateOneRequiredWithoutBlood_analytical_serviceInput
  }

  export type blood_analytical_serviceUncheckedUpdateInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    antibody_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cbc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creatinine_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    crp?: NullableBoolFieldUpdateOperationsInput | boolean | null
    esr?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fobt?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hematocrit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kidney_function_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lipid_profile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liver_function_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rf?: NullableBoolFieldUpdateOperationsInput | boolean | null
    serum_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sr?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type blood_analytical_serviceCreateManyInput = {
    registration_no: string
    antibody_analysis?: boolean | null
    cbc?: boolean | null
    creatinine_analysis?: boolean | null
    crp?: boolean | null
    esr?: boolean | null
    fobt?: boolean | null
    hematocrit?: boolean | null
    kidney_function_analysis?: boolean | null
    lipid_profile?: boolean | null
    liver_function_analysis?: boolean | null
    rf?: boolean | null
    serum_analysis?: boolean | null
    sr?: boolean | null
  }

  export type blood_analytical_serviceUpdateManyMutationInput = {
    antibody_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cbc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creatinine_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    crp?: NullableBoolFieldUpdateOperationsInput | boolean | null
    esr?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fobt?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hematocrit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kidney_function_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lipid_profile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liver_function_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rf?: NullableBoolFieldUpdateOperationsInput | boolean | null
    serum_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sr?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type blood_analytical_serviceUncheckedUpdateManyInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    antibody_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cbc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creatinine_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    crp?: NullableBoolFieldUpdateOperationsInput | boolean | null
    esr?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fobt?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hematocrit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kidney_function_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lipid_profile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liver_function_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rf?: NullableBoolFieldUpdateOperationsInput | boolean | null
    serum_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sr?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type diagnostic_imaging_serviceCreateInput = {
    angiocardiography?: boolean | null
    angiography?: boolean | null
    cta?: boolean | null
    ct?: boolean | null
    coloscopy?: boolean | null
    cystoscopy?: boolean | null
    echocardiography?: boolean | null
    endoscopy?: boolean | null
    fluoroscopy?: boolean | null
    mra?: boolean | null
    mri?: boolean | null
    mrs?: boolean | null
    mammography?: boolean | null
    pet?: boolean | null
    pet_ct?: boolean | null
    spect?: boolean | null
    ultrasound?: boolean | null
    x_ray?: boolean | null
    hospital: hospitalCreateNestedOneWithoutDiagnostic_imaging_serviceInput
  }

  export type diagnostic_imaging_serviceUncheckedCreateInput = {
    registration_no: string
    angiocardiography?: boolean | null
    angiography?: boolean | null
    cta?: boolean | null
    ct?: boolean | null
    coloscopy?: boolean | null
    cystoscopy?: boolean | null
    echocardiography?: boolean | null
    endoscopy?: boolean | null
    fluoroscopy?: boolean | null
    mra?: boolean | null
    mri?: boolean | null
    mrs?: boolean | null
    mammography?: boolean | null
    pet?: boolean | null
    pet_ct?: boolean | null
    spect?: boolean | null
    ultrasound?: boolean | null
    x_ray?: boolean | null
  }

  export type diagnostic_imaging_serviceUpdateInput = {
    angiocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    angiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cta?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    coloscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cystoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    echocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    endoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fluoroscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mra?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mri?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mrs?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mammography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pet_ct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    spect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ultrasound?: NullableBoolFieldUpdateOperationsInput | boolean | null
    x_ray?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hospital?: hospitalUpdateOneRequiredWithoutDiagnostic_imaging_serviceInput
  }

  export type diagnostic_imaging_serviceUncheckedUpdateInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    angiocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    angiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cta?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    coloscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cystoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    echocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    endoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fluoroscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mra?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mri?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mrs?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mammography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pet_ct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    spect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ultrasound?: NullableBoolFieldUpdateOperationsInput | boolean | null
    x_ray?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type diagnostic_imaging_serviceCreateManyInput = {
    registration_no: string
    angiocardiography?: boolean | null
    angiography?: boolean | null
    cta?: boolean | null
    ct?: boolean | null
    coloscopy?: boolean | null
    cystoscopy?: boolean | null
    echocardiography?: boolean | null
    endoscopy?: boolean | null
    fluoroscopy?: boolean | null
    mra?: boolean | null
    mri?: boolean | null
    mrs?: boolean | null
    mammography?: boolean | null
    pet?: boolean | null
    pet_ct?: boolean | null
    spect?: boolean | null
    ultrasound?: boolean | null
    x_ray?: boolean | null
  }

  export type diagnostic_imaging_serviceUpdateManyMutationInput = {
    angiocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    angiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cta?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    coloscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cystoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    echocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    endoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fluoroscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mra?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mri?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mrs?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mammography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pet_ct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    spect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ultrasound?: NullableBoolFieldUpdateOperationsInput | boolean | null
    x_ray?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type diagnostic_imaging_serviceUncheckedUpdateManyInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    angiocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    angiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cta?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    coloscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cystoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    echocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    endoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fluoroscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mra?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mri?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mrs?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mammography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pet_ct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    spect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ultrasound?: NullableBoolFieldUpdateOperationsInput | boolean | null
    x_ray?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type doctorCreateInput = {
    id: string
    name: string
    designation: string
    chamber?: string | null
    bio?: string | null
    joined_on?: Date | string
    hospital: hospitalCreateNestedOneWithoutDoctorInput
    schedule?: scheduleCreateNestedManyWithoutDoctorInput
  }

  export type doctorUncheckedCreateInput = {
    id: string
    registration_no: string
    name: string
    designation: string
    chamber?: string | null
    bio?: string | null
    joined_on?: Date | string
    schedule?: scheduleUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type doctorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    chamber?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: hospitalUpdateOneRequiredWithoutDoctorInput
    schedule?: scheduleUpdateManyWithoutDoctorInput
  }

  export type doctorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration_no?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    chamber?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: scheduleUncheckedUpdateManyWithoutDoctorInput
  }

  export type doctorCreateManyInput = {
    id: string
    registration_no: string
    name: string
    designation: string
    chamber?: string | null
    bio?: string | null
    joined_on?: Date | string
  }

  export type doctorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    chamber?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type doctorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration_no?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    chamber?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type general_serviceCreateInput = {
    autopsy?: boolean | null
    biopsy?: boolean | null
    blood_bank?: boolean | null
    bronchoscopy?: boolean | null
    ecg?: boolean | null
    echocardiography?: boolean | null
    emg?: boolean | null
    laparoscopy?: boolean | null
    phonocardiography?: boolean | null
    urinalysis?: boolean | null
    hospital: hospitalCreateNestedOneWithoutGeneral_serviceInput
  }

  export type general_serviceUncheckedCreateInput = {
    registration_no: string
    autopsy?: boolean | null
    biopsy?: boolean | null
    blood_bank?: boolean | null
    bronchoscopy?: boolean | null
    ecg?: boolean | null
    echocardiography?: boolean | null
    emg?: boolean | null
    laparoscopy?: boolean | null
    phonocardiography?: boolean | null
    urinalysis?: boolean | null
  }

  export type general_serviceUpdateInput = {
    autopsy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    biopsy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blood_bank?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bronchoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ecg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    echocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    laparoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phonocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urinalysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hospital?: hospitalUpdateOneRequiredWithoutGeneral_serviceInput
  }

  export type general_serviceUncheckedUpdateInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    autopsy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    biopsy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blood_bank?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bronchoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ecg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    echocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    laparoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phonocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urinalysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type general_serviceCreateManyInput = {
    registration_no: string
    autopsy?: boolean | null
    biopsy?: boolean | null
    blood_bank?: boolean | null
    bronchoscopy?: boolean | null
    ecg?: boolean | null
    echocardiography?: boolean | null
    emg?: boolean | null
    laparoscopy?: boolean | null
    phonocardiography?: boolean | null
    urinalysis?: boolean | null
  }

  export type general_serviceUpdateManyMutationInput = {
    autopsy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    biopsy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blood_bank?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bronchoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ecg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    echocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    laparoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phonocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urinalysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type general_serviceUncheckedUpdateManyInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    autopsy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    biopsy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blood_bank?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bronchoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ecg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    echocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    laparoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phonocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urinalysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type scheduleCreateInput = {
    day: schedule_day
    start_time: Date | string
    end_time: Date | string
    last_updated?: Date | string
    doctor: doctorCreateNestedOneWithoutScheduleInput
  }

  export type scheduleUncheckedCreateInput = {
    id: string
    day: schedule_day
    start_time: Date | string
    end_time: Date | string
    last_updated?: Date | string
  }

  export type scheduleUpdateInput = {
    day?: Enumschedule_dayFieldUpdateOperationsInput | schedule_day
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: doctorUpdateOneRequiredWithoutScheduleInput
  }

  export type scheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: Enumschedule_dayFieldUpdateOperationsInput | schedule_day
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type scheduleCreateManyInput = {
    id: string
    day: schedule_day
    start_time: Date | string
    end_time: Date | string
    last_updated?: Date | string
  }

  export type scheduleUpdateManyMutationInput = {
    day?: Enumschedule_dayFieldUpdateOperationsInput | schedule_day
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type scheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: Enumschedule_dayFieldUpdateOperationsInput | schedule_day
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type DecimalNullableFilter = {
    equals?: Decimal | number | string | null
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalNullableFilter | Decimal | number | string | null
  }

  export type HospitalRelationFilter = {
    is?: hospitalWhereInput
    isNot?: hospitalWhereInput
  }

  export type addressCountOrderByAggregateInput = {
    registration_no?: SortOrder
    address?: SortOrder
    phone_no?: SortOrder
    mobile_no?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type addressAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type addressMaxOrderByAggregateInput = {
    registration_no?: SortOrder
    address?: SortOrder
    phone_no?: SortOrder
    mobile_no?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type addressMinOrderByAggregateInput = {
    registration_no?: SortOrder
    address?: SortOrder
    phone_no?: SortOrder
    mobile_no?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type addressSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DecimalNullableWithAggregatesFilter = {
    equals?: Decimal | number | string | null
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type Enumbooking_sexFilter = {
    equals?: booking_sex
    in?: Enumerable<booking_sex>
    notIn?: Enumerable<booking_sex>
    not?: NestedEnumbooking_sexFilter | booking_sex
  }

  export type Enumbooking_bed_typeFilter = {
    equals?: booking_bed_type
    in?: Enumerable<booking_bed_type>
    notIn?: Enumerable<booking_bed_type>
    not?: NestedEnumbooking_bed_typeFilter | booking_bed_type
  }

  export type Enumbooking_booked_forNullableFilter = {
    equals?: booking_booked_for | null
    in?: Enumerable<booking_booked_for> | null
    notIn?: Enumerable<booking_booked_for> | null
    not?: NestedEnumbooking_booked_forNullableFilter | booking_booked_for | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type Enumbooking_statusFilter = {
    equals?: booking_status
    in?: Enumerable<booking_status>
    notIn?: Enumerable<booking_status>
    not?: NestedEnumbooking_statusFilter | booking_status
  }

  export type UserRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type bookingCountOrderByAggregateInput = {
    id?: SortOrder
    booked_at?: SortOrder
    mobile_no?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    bed_type?: SortOrder
    booked_for?: SortOrder
    cancelled_at?: SortOrder
    registration_no?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    last_updated?: SortOrder
  }

  export type bookingMaxOrderByAggregateInput = {
    id?: SortOrder
    booked_at?: SortOrder
    mobile_no?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    bed_type?: SortOrder
    booked_for?: SortOrder
    cancelled_at?: SortOrder
    registration_no?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    last_updated?: SortOrder
  }

  export type bookingMinOrderByAggregateInput = {
    id?: SortOrder
    booked_at?: SortOrder
    mobile_no?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    bed_type?: SortOrder
    booked_for?: SortOrder
    cancelled_at?: SortOrder
    registration_no?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    last_updated?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type Enumbooking_sexWithAggregatesFilter = {
    equals?: booking_sex
    in?: Enumerable<booking_sex>
    notIn?: Enumerable<booking_sex>
    not?: NestedEnumbooking_sexWithAggregatesFilter | booking_sex
    _count?: NestedIntFilter
    _min?: NestedEnumbooking_sexFilter
    _max?: NestedEnumbooking_sexFilter
  }

  export type Enumbooking_bed_typeWithAggregatesFilter = {
    equals?: booking_bed_type
    in?: Enumerable<booking_bed_type>
    notIn?: Enumerable<booking_bed_type>
    not?: NestedEnumbooking_bed_typeWithAggregatesFilter | booking_bed_type
    _count?: NestedIntFilter
    _min?: NestedEnumbooking_bed_typeFilter
    _max?: NestedEnumbooking_bed_typeFilter
  }

  export type Enumbooking_booked_forNullableWithAggregatesFilter = {
    equals?: booking_booked_for | null
    in?: Enumerable<booking_booked_for> | null
    notIn?: Enumerable<booking_booked_for> | null
    not?: NestedEnumbooking_booked_forNullableWithAggregatesFilter | booking_booked_for | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumbooking_booked_forNullableFilter
    _max?: NestedEnumbooking_booked_forNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type Enumbooking_statusWithAggregatesFilter = {
    equals?: booking_status
    in?: Enumerable<booking_status>
    notIn?: Enumerable<booking_status>
    not?: NestedEnumbooking_statusWithAggregatesFilter | booking_status
    _count?: NestedIntFilter
    _min?: NestedEnumbooking_statusFilter
    _max?: NestedEnumbooking_statusFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type capacityCountOrderByAggregateInput = {
    registration_no?: SortOrder
    total_capacity?: SortOrder
    ward?: SortOrder
    special_ward?: SortOrder
    cabin?: SortOrder
    vip_cabin?: SortOrder
    icu?: SortOrder
    ccu?: SortOrder
    hdu?: SortOrder
    hfncu?: SortOrder
    emergency?: SortOrder
    covid?: SortOrder
    extra?: SortOrder
  }

  export type capacityAvgOrderByAggregateInput = {
    total_capacity?: SortOrder
    ward?: SortOrder
    special_ward?: SortOrder
    cabin?: SortOrder
    vip_cabin?: SortOrder
    icu?: SortOrder
    ccu?: SortOrder
    hdu?: SortOrder
    hfncu?: SortOrder
    emergency?: SortOrder
    covid?: SortOrder
    extra?: SortOrder
  }

  export type capacityMaxOrderByAggregateInput = {
    registration_no?: SortOrder
    total_capacity?: SortOrder
    ward?: SortOrder
    special_ward?: SortOrder
    cabin?: SortOrder
    vip_cabin?: SortOrder
    icu?: SortOrder
    ccu?: SortOrder
    hdu?: SortOrder
    hfncu?: SortOrder
    emergency?: SortOrder
    covid?: SortOrder
    extra?: SortOrder
  }

  export type capacityMinOrderByAggregateInput = {
    registration_no?: SortOrder
    total_capacity?: SortOrder
    ward?: SortOrder
    special_ward?: SortOrder
    cabin?: SortOrder
    vip_cabin?: SortOrder
    icu?: SortOrder
    ccu?: SortOrder
    hdu?: SortOrder
    hfncu?: SortOrder
    emergency?: SortOrder
    covid?: SortOrder
    extra?: SortOrder
  }

  export type capacitySumOrderByAggregateInput = {
    total_capacity?: SortOrder
    ward?: SortOrder
    special_ward?: SortOrder
    cabin?: SortOrder
    vip_cabin?: SortOrder
    icu?: SortOrder
    ccu?: SortOrder
    hdu?: SortOrder
    hfncu?: SortOrder
    emergency?: SortOrder
    covid?: SortOrder
    extra?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type Enumhospital_hospital_typeFilter = {
    equals?: hospital_hospital_type
    in?: Enumerable<hospital_hospital_type>
    notIn?: Enumerable<hospital_hospital_type>
    not?: NestedEnumhospital_hospital_typeFilter | hospital_hospital_type
  }

  export type Enumhospital_statusFilter = {
    equals?: hospital_status
    in?: Enumerable<hospital_status>
    notIn?: Enumerable<hospital_status>
    not?: NestedEnumhospital_statusFilter | hospital_status
  }

  export type AddressRelationFilter = {
    is?: addressWhereInput | null
    isNot?: addressWhereInput | null
  }

  export type AmenityRelationFilter = {
    is?: amenityWhereInput | null
    isNot?: amenityWhereInput | null
  }

  export type Blood_analytical_serviceRelationFilter = {
    is?: blood_analytical_serviceWhereInput | null
    isNot?: blood_analytical_serviceWhereInput | null
  }

  export type BookingListRelationFilter = {
    every?: bookingWhereInput
    some?: bookingWhereInput
    none?: bookingWhereInput
  }

  export type CapacityRelationFilter = {
    is?: capacityWhereInput | null
    isNot?: capacityWhereInput | null
  }

  export type Diagnostic_imaging_serviceRelationFilter = {
    is?: diagnostic_imaging_serviceWhereInput | null
    isNot?: diagnostic_imaging_serviceWhereInput | null
  }

  export type DoctorListRelationFilter = {
    every?: doctorWhereInput
    some?: doctorWhereInput
    none?: doctorWhereInput
  }

  export type General_serviceRelationFilter = {
    is?: general_serviceWhereInput | null
    isNot?: general_serviceWhereInput | null
  }

  export type LogListRelationFilter = {
    every?: logWhereInput
    some?: logWhereInput
    none?: logWhereInput
  }

  export type StaffListRelationFilter = {
    every?: staffWhereInput
    some?: staffWhereInput
    none?: staffWhereInput
  }

  export type Vacant_bed_logListRelationFilter = {
    every?: vacant_bed_logWhereInput
    some?: vacant_bed_logWhereInput
    none?: vacant_bed_logWhereInput
  }

  export type bookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type doctorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type logOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type staffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type vacant_bed_logOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hospitalCountOrderByAggregateInput = {
    registration_no?: SortOrder
    hospital_name?: SortOrder
    description?: SortOrder
    hospital_type?: SortOrder
    bed_type?: SortOrder
    image_source?: SortOrder
    website?: SortOrder
    joined_on?: SortOrder
    status?: SortOrder
  }

  export type hospitalMaxOrderByAggregateInput = {
    registration_no?: SortOrder
    hospital_name?: SortOrder
    description?: SortOrder
    hospital_type?: SortOrder
    bed_type?: SortOrder
    image_source?: SortOrder
    website?: SortOrder
    joined_on?: SortOrder
    status?: SortOrder
  }

  export type hospitalMinOrderByAggregateInput = {
    registration_no?: SortOrder
    hospital_name?: SortOrder
    description?: SortOrder
    hospital_type?: SortOrder
    bed_type?: SortOrder
    image_source?: SortOrder
    website?: SortOrder
    joined_on?: SortOrder
    status?: SortOrder
  }

  export type Enumhospital_hospital_typeWithAggregatesFilter = {
    equals?: hospital_hospital_type
    in?: Enumerable<hospital_hospital_type>
    notIn?: Enumerable<hospital_hospital_type>
    not?: NestedEnumhospital_hospital_typeWithAggregatesFilter | hospital_hospital_type
    _count?: NestedIntFilter
    _min?: NestedEnumhospital_hospital_typeFilter
    _max?: NestedEnumhospital_hospital_typeFilter
  }

  export type Enumhospital_statusWithAggregatesFilter = {
    equals?: hospital_status
    in?: Enumerable<hospital_status>
    notIn?: Enumerable<hospital_status>
    not?: NestedEnumhospital_statusWithAggregatesFilter | hospital_status
    _count?: NestedIntFilter
    _min?: NestedEnumhospital_statusFilter
    _max?: NestedEnumhospital_statusFilter
  }

  export type Enumlog_roleFilter = {
    equals?: log_role
    in?: Enumerable<log_role>
    notIn?: Enumerable<log_role>
    not?: NestedEnumlog_roleFilter | log_role
  }

  export type StaffRelationFilter = {
    is?: staffWhereInput
    isNot?: staffWhereInput
  }

  export type logLogged_atRegistration_noCompoundUniqueInput = {
    logged_at: Date | string
    registration_no: string
  }

  export type logCountOrderByAggregateInput = {
    logged_at?: SortOrder
    registration_no?: SortOrder
    task?: SortOrder
    mobile_no?: SortOrder
    role?: SortOrder
  }

  export type logMaxOrderByAggregateInput = {
    logged_at?: SortOrder
    registration_no?: SortOrder
    task?: SortOrder
    mobile_no?: SortOrder
    role?: SortOrder
  }

  export type logMinOrderByAggregateInput = {
    logged_at?: SortOrder
    registration_no?: SortOrder
    task?: SortOrder
    mobile_no?: SortOrder
    role?: SortOrder
  }

  export type Enumlog_roleWithAggregatesFilter = {
    equals?: log_role
    in?: Enumerable<log_role>
    notIn?: Enumerable<log_role>
    not?: NestedEnumlog_roleWithAggregatesFilter | log_role
    _count?: NestedIntFilter
    _min?: NestedEnumlog_roleFilter
    _max?: NestedEnumlog_roleFilter
  }

  export type Enumstaff_roleFilter = {
    equals?: staff_role
    in?: Enumerable<staff_role>
    notIn?: Enumerable<staff_role>
    not?: NestedEnumstaff_roleFilter | staff_role
  }

  export type Enumstaff_statusFilter = {
    equals?: staff_status
    in?: Enumerable<staff_status>
    notIn?: Enumerable<staff_status>
    not?: NestedEnumstaff_statusFilter | staff_status
  }

  export type staffMobile_noRegistration_noJoined_onCompoundUniqueInput = {
    mobile_no: string
    registration_no: string
    joined_on: Date | string
  }

  export type staffCountOrderByAggregateInput = {
    mobile_no?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    status?: SortOrder
    registration_no?: SortOrder
    joined_on?: SortOrder
    last_updated?: SortOrder
  }

  export type staffMaxOrderByAggregateInput = {
    mobile_no?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    status?: SortOrder
    registration_no?: SortOrder
    joined_on?: SortOrder
    last_updated?: SortOrder
  }

  export type staffMinOrderByAggregateInput = {
    mobile_no?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    status?: SortOrder
    registration_no?: SortOrder
    joined_on?: SortOrder
    last_updated?: SortOrder
  }

  export type Enumstaff_roleWithAggregatesFilter = {
    equals?: staff_role
    in?: Enumerable<staff_role>
    notIn?: Enumerable<staff_role>
    not?: NestedEnumstaff_roleWithAggregatesFilter | staff_role
    _count?: NestedIntFilter
    _min?: NestedEnumstaff_roleFilter
    _max?: NestedEnumstaff_roleFilter
  }

  export type Enumstaff_statusWithAggregatesFilter = {
    equals?: staff_status
    in?: Enumerable<staff_status>
    notIn?: Enumerable<staff_status>
    not?: NestedEnumstaff_statusWithAggregatesFilter | staff_status
    _count?: NestedIntFilter
    _min?: NestedEnumstaff_statusFilter
    _max?: NestedEnumstaff_statusFilter
  }

  export type Enumuser_sexFilter = {
    equals?: user_sex
    in?: Enumerable<user_sex>
    notIn?: Enumerable<user_sex>
    not?: NestedEnumuser_sexFilter | user_sex
  }

  export type userCountOrderByAggregateInput = {
    mobile_no?: SortOrder
    password?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    dob?: SortOrder
    email?: SortOrder
    document_id?: SortOrder
    joined_on?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    mobile_no?: SortOrder
    password?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    dob?: SortOrder
    email?: SortOrder
    document_id?: SortOrder
    joined_on?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    mobile_no?: SortOrder
    password?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    dob?: SortOrder
    email?: SortOrder
    document_id?: SortOrder
    joined_on?: SortOrder
  }

  export type Enumuser_sexWithAggregatesFilter = {
    equals?: user_sex
    in?: Enumerable<user_sex>
    notIn?: Enumerable<user_sex>
    not?: NestedEnumuser_sexWithAggregatesFilter | user_sex
    _count?: NestedIntFilter
    _min?: NestedEnumuser_sexFilter
    _max?: NestedEnumuser_sexFilter
  }

  export type vacant_bed_logRegistration_noLast_updatedCompoundUniqueInput = {
    registration_no: string
    last_updated: Date | string
  }

  export type vacant_bed_logCountOrderByAggregateInput = {
    registration_no?: SortOrder
    last_updated?: SortOrder
    ward?: SortOrder
    special_ward?: SortOrder
    cabin?: SortOrder
    vip_cabin?: SortOrder
    icu?: SortOrder
    ccu?: SortOrder
    hdu?: SortOrder
    hfncu?: SortOrder
    emergency?: SortOrder
    covid?: SortOrder
    extra?: SortOrder
  }

  export type vacant_bed_logAvgOrderByAggregateInput = {
    ward?: SortOrder
    special_ward?: SortOrder
    cabin?: SortOrder
    vip_cabin?: SortOrder
    icu?: SortOrder
    ccu?: SortOrder
    hdu?: SortOrder
    hfncu?: SortOrder
    emergency?: SortOrder
    covid?: SortOrder
    extra?: SortOrder
  }

  export type vacant_bed_logMaxOrderByAggregateInput = {
    registration_no?: SortOrder
    last_updated?: SortOrder
    ward?: SortOrder
    special_ward?: SortOrder
    cabin?: SortOrder
    vip_cabin?: SortOrder
    icu?: SortOrder
    ccu?: SortOrder
    hdu?: SortOrder
    hfncu?: SortOrder
    emergency?: SortOrder
    covid?: SortOrder
    extra?: SortOrder
  }

  export type vacant_bed_logMinOrderByAggregateInput = {
    registration_no?: SortOrder
    last_updated?: SortOrder
    ward?: SortOrder
    special_ward?: SortOrder
    cabin?: SortOrder
    vip_cabin?: SortOrder
    icu?: SortOrder
    ccu?: SortOrder
    hdu?: SortOrder
    hfncu?: SortOrder
    emergency?: SortOrder
    covid?: SortOrder
    extra?: SortOrder
  }

  export type vacant_bed_logSumOrderByAggregateInput = {
    ward?: SortOrder
    special_ward?: SortOrder
    cabin?: SortOrder
    vip_cabin?: SortOrder
    icu?: SortOrder
    ccu?: SortOrder
    hdu?: SortOrder
    hfncu?: SortOrder
    emergency?: SortOrder
    covid?: SortOrder
    extra?: SortOrder
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type amenityCountOrderByAggregateInput = {
    registration_no?: SortOrder
    atm?: SortOrder
    baby_corner?: SortOrder
    cafeteria?: SortOrder
    gift_shop?: SortOrder
    locker?: SortOrder
    parking?: SortOrder
    pharmacy?: SortOrder
    prayer_area?: SortOrder
    wheelchair?: SortOrder
    wifi?: SortOrder
  }

  export type amenityMaxOrderByAggregateInput = {
    registration_no?: SortOrder
    atm?: SortOrder
    baby_corner?: SortOrder
    cafeteria?: SortOrder
    gift_shop?: SortOrder
    locker?: SortOrder
    parking?: SortOrder
    pharmacy?: SortOrder
    prayer_area?: SortOrder
    wheelchair?: SortOrder
    wifi?: SortOrder
  }

  export type amenityMinOrderByAggregateInput = {
    registration_no?: SortOrder
    atm?: SortOrder
    baby_corner?: SortOrder
    cafeteria?: SortOrder
    gift_shop?: SortOrder
    locker?: SortOrder
    parking?: SortOrder
    pharmacy?: SortOrder
    prayer_area?: SortOrder
    wheelchair?: SortOrder
    wifi?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type blood_analytical_serviceCountOrderByAggregateInput = {
    registration_no?: SortOrder
    antibody_analysis?: SortOrder
    cbc?: SortOrder
    creatinine_analysis?: SortOrder
    crp?: SortOrder
    esr?: SortOrder
    fobt?: SortOrder
    hematocrit?: SortOrder
    kidney_function_analysis?: SortOrder
    lipid_profile?: SortOrder
    liver_function_analysis?: SortOrder
    rf?: SortOrder
    serum_analysis?: SortOrder
    sr?: SortOrder
  }

  export type blood_analytical_serviceMaxOrderByAggregateInput = {
    registration_no?: SortOrder
    antibody_analysis?: SortOrder
    cbc?: SortOrder
    creatinine_analysis?: SortOrder
    crp?: SortOrder
    esr?: SortOrder
    fobt?: SortOrder
    hematocrit?: SortOrder
    kidney_function_analysis?: SortOrder
    lipid_profile?: SortOrder
    liver_function_analysis?: SortOrder
    rf?: SortOrder
    serum_analysis?: SortOrder
    sr?: SortOrder
  }

  export type blood_analytical_serviceMinOrderByAggregateInput = {
    registration_no?: SortOrder
    antibody_analysis?: SortOrder
    cbc?: SortOrder
    creatinine_analysis?: SortOrder
    crp?: SortOrder
    esr?: SortOrder
    fobt?: SortOrder
    hematocrit?: SortOrder
    kidney_function_analysis?: SortOrder
    lipid_profile?: SortOrder
    liver_function_analysis?: SortOrder
    rf?: SortOrder
    serum_analysis?: SortOrder
    sr?: SortOrder
  }

  export type diagnostic_imaging_serviceCountOrderByAggregateInput = {
    registration_no?: SortOrder
    angiocardiography?: SortOrder
    angiography?: SortOrder
    cta?: SortOrder
    ct?: SortOrder
    coloscopy?: SortOrder
    cystoscopy?: SortOrder
    echocardiography?: SortOrder
    endoscopy?: SortOrder
    fluoroscopy?: SortOrder
    mra?: SortOrder
    mri?: SortOrder
    mrs?: SortOrder
    mammography?: SortOrder
    pet?: SortOrder
    pet_ct?: SortOrder
    spect?: SortOrder
    ultrasound?: SortOrder
    x_ray?: SortOrder
  }

  export type diagnostic_imaging_serviceMaxOrderByAggregateInput = {
    registration_no?: SortOrder
    angiocardiography?: SortOrder
    angiography?: SortOrder
    cta?: SortOrder
    ct?: SortOrder
    coloscopy?: SortOrder
    cystoscopy?: SortOrder
    echocardiography?: SortOrder
    endoscopy?: SortOrder
    fluoroscopy?: SortOrder
    mra?: SortOrder
    mri?: SortOrder
    mrs?: SortOrder
    mammography?: SortOrder
    pet?: SortOrder
    pet_ct?: SortOrder
    spect?: SortOrder
    ultrasound?: SortOrder
    x_ray?: SortOrder
  }

  export type diagnostic_imaging_serviceMinOrderByAggregateInput = {
    registration_no?: SortOrder
    angiocardiography?: SortOrder
    angiography?: SortOrder
    cta?: SortOrder
    ct?: SortOrder
    coloscopy?: SortOrder
    cystoscopy?: SortOrder
    echocardiography?: SortOrder
    endoscopy?: SortOrder
    fluoroscopy?: SortOrder
    mra?: SortOrder
    mri?: SortOrder
    mrs?: SortOrder
    mammography?: SortOrder
    pet?: SortOrder
    pet_ct?: SortOrder
    spect?: SortOrder
    ultrasound?: SortOrder
    x_ray?: SortOrder
  }

  export type ScheduleListRelationFilter = {
    every?: scheduleWhereInput
    some?: scheduleWhereInput
    none?: scheduleWhereInput
  }

  export type scheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type doctorIdRegistration_noJoined_onCompoundUniqueInput = {
    id: string
    registration_no: string
    joined_on: Date | string
  }

  export type doctorCountOrderByAggregateInput = {
    id?: SortOrder
    registration_no?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    chamber?: SortOrder
    bio?: SortOrder
    joined_on?: SortOrder
  }

  export type doctorMaxOrderByAggregateInput = {
    id?: SortOrder
    registration_no?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    chamber?: SortOrder
    bio?: SortOrder
    joined_on?: SortOrder
  }

  export type doctorMinOrderByAggregateInput = {
    id?: SortOrder
    registration_no?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    chamber?: SortOrder
    bio?: SortOrder
    joined_on?: SortOrder
  }

  export type general_serviceCountOrderByAggregateInput = {
    registration_no?: SortOrder
    autopsy?: SortOrder
    biopsy?: SortOrder
    blood_bank?: SortOrder
    bronchoscopy?: SortOrder
    ecg?: SortOrder
    echocardiography?: SortOrder
    emg?: SortOrder
    laparoscopy?: SortOrder
    phonocardiography?: SortOrder
    urinalysis?: SortOrder
  }

  export type general_serviceMaxOrderByAggregateInput = {
    registration_no?: SortOrder
    autopsy?: SortOrder
    biopsy?: SortOrder
    blood_bank?: SortOrder
    bronchoscopy?: SortOrder
    ecg?: SortOrder
    echocardiography?: SortOrder
    emg?: SortOrder
    laparoscopy?: SortOrder
    phonocardiography?: SortOrder
    urinalysis?: SortOrder
  }

  export type general_serviceMinOrderByAggregateInput = {
    registration_no?: SortOrder
    autopsy?: SortOrder
    biopsy?: SortOrder
    blood_bank?: SortOrder
    bronchoscopy?: SortOrder
    ecg?: SortOrder
    echocardiography?: SortOrder
    emg?: SortOrder
    laparoscopy?: SortOrder
    phonocardiography?: SortOrder
    urinalysis?: SortOrder
  }

  export type Enumschedule_dayFilter = {
    equals?: schedule_day
    in?: Enumerable<schedule_day>
    notIn?: Enumerable<schedule_day>
    not?: NestedEnumschedule_dayFilter | schedule_day
  }

  export type DoctorRelationFilter = {
    is?: doctorWhereInput
    isNot?: doctorWhereInput
  }

  export type scheduleIdDayCompoundUniqueInput = {
    id: string
    day: schedule_day
  }

  export type scheduleCountOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    last_updated?: SortOrder
  }

  export type scheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    last_updated?: SortOrder
  }

  export type scheduleMinOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    last_updated?: SortOrder
  }

  export type Enumschedule_dayWithAggregatesFilter = {
    equals?: schedule_day
    in?: Enumerable<schedule_day>
    notIn?: Enumerable<schedule_day>
    not?: NestedEnumschedule_dayWithAggregatesFilter | schedule_day
    _count?: NestedIntFilter
    _min?: NestedEnumschedule_dayFilter
    _max?: NestedEnumschedule_dayFilter
  }

  export type hospitalCreateNestedOneWithoutAddressInput = {
    create?: XOR<hospitalCreateWithoutAddressInput, hospitalUncheckedCreateWithoutAddressInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutAddressInput
    connect?: hospitalWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | number | string | null
    increment?: Decimal | number | string
    decrement?: Decimal | number | string
    multiply?: Decimal | number | string
    divide?: Decimal | number | string
  }

  export type hospitalUpdateOneRequiredWithoutAddressInput = {
    create?: XOR<hospitalCreateWithoutAddressInput, hospitalUncheckedCreateWithoutAddressInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutAddressInput
    upsert?: hospitalUpsertWithoutAddressInput
    connect?: hospitalWhereUniqueInput
    update?: XOR<hospitalUpdateWithoutAddressInput, hospitalUncheckedUpdateWithoutAddressInput>
  }

  export type userCreateNestedOneWithoutBookingInput = {
    create?: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>
    connectOrCreate?: userCreateOrConnectWithoutBookingInput
    connect?: userWhereUniqueInput
  }

  export type hospitalCreateNestedOneWithoutBookingInput = {
    create?: XOR<hospitalCreateWithoutBookingInput, hospitalUncheckedCreateWithoutBookingInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutBookingInput
    connect?: hospitalWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Enumbooking_sexFieldUpdateOperationsInput = {
    set?: booking_sex
  }

  export type Enumbooking_bed_typeFieldUpdateOperationsInput = {
    set?: booking_bed_type
  }

  export type NullableEnumbooking_booked_forFieldUpdateOperationsInput = {
    set?: booking_booked_for | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Enumbooking_statusFieldUpdateOperationsInput = {
    set?: booking_status
  }

  export type userUpdateOneRequiredWithoutBookingInput = {
    create?: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>
    connectOrCreate?: userCreateOrConnectWithoutBookingInput
    upsert?: userUpsertWithoutBookingInput
    connect?: userWhereUniqueInput
    update?: XOR<userUpdateWithoutBookingInput, userUncheckedUpdateWithoutBookingInput>
  }

  export type hospitalUpdateOneRequiredWithoutBookingInput = {
    create?: XOR<hospitalCreateWithoutBookingInput, hospitalUncheckedCreateWithoutBookingInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutBookingInput
    upsert?: hospitalUpsertWithoutBookingInput
    connect?: hospitalWhereUniqueInput
    update?: XOR<hospitalUpdateWithoutBookingInput, hospitalUncheckedUpdateWithoutBookingInput>
  }

  export type hospitalCreateNestedOneWithoutCapacityInput = {
    create?: XOR<hospitalCreateWithoutCapacityInput, hospitalUncheckedCreateWithoutCapacityInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutCapacityInput
    connect?: hospitalWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type hospitalUpdateOneRequiredWithoutCapacityInput = {
    create?: XOR<hospitalCreateWithoutCapacityInput, hospitalUncheckedCreateWithoutCapacityInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutCapacityInput
    upsert?: hospitalUpsertWithoutCapacityInput
    connect?: hospitalWhereUniqueInput
    update?: XOR<hospitalUpdateWithoutCapacityInput, hospitalUncheckedUpdateWithoutCapacityInput>
  }

  export type addressCreateNestedOneWithoutHospitalInput = {
    create?: XOR<addressCreateWithoutHospitalInput, addressUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: addressCreateOrConnectWithoutHospitalInput
    connect?: addressWhereUniqueInput
  }

  export type amenityCreateNestedOneWithoutHospitalInput = {
    create?: XOR<amenityCreateWithoutHospitalInput, amenityUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: amenityCreateOrConnectWithoutHospitalInput
    connect?: amenityWhereUniqueInput
  }

  export type blood_analytical_serviceCreateNestedOneWithoutHospitalInput = {
    create?: XOR<blood_analytical_serviceCreateWithoutHospitalInput, blood_analytical_serviceUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: blood_analytical_serviceCreateOrConnectWithoutHospitalInput
    connect?: blood_analytical_serviceWhereUniqueInput
  }

  export type bookingCreateNestedManyWithoutHospitalInput = {
    create?: XOR<Enumerable<bookingCreateWithoutHospitalInput>, Enumerable<bookingUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<bookingCreateOrConnectWithoutHospitalInput>
    createMany?: bookingCreateManyHospitalInputEnvelope
    connect?: Enumerable<bookingWhereUniqueInput>
  }

  export type capacityCreateNestedOneWithoutHospitalInput = {
    create?: XOR<capacityCreateWithoutHospitalInput, capacityUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: capacityCreateOrConnectWithoutHospitalInput
    connect?: capacityWhereUniqueInput
  }

  export type diagnostic_imaging_serviceCreateNestedOneWithoutHospitalInput = {
    create?: XOR<diagnostic_imaging_serviceCreateWithoutHospitalInput, diagnostic_imaging_serviceUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: diagnostic_imaging_serviceCreateOrConnectWithoutHospitalInput
    connect?: diagnostic_imaging_serviceWhereUniqueInput
  }

  export type doctorCreateNestedManyWithoutHospitalInput = {
    create?: XOR<Enumerable<doctorCreateWithoutHospitalInput>, Enumerable<doctorUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<doctorCreateOrConnectWithoutHospitalInput>
    createMany?: doctorCreateManyHospitalInputEnvelope
    connect?: Enumerable<doctorWhereUniqueInput>
  }

  export type general_serviceCreateNestedOneWithoutHospitalInput = {
    create?: XOR<general_serviceCreateWithoutHospitalInput, general_serviceUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: general_serviceCreateOrConnectWithoutHospitalInput
    connect?: general_serviceWhereUniqueInput
  }

  export type logCreateNestedManyWithoutHospitalInput = {
    create?: XOR<Enumerable<logCreateWithoutHospitalInput>, Enumerable<logUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<logCreateOrConnectWithoutHospitalInput>
    createMany?: logCreateManyHospitalInputEnvelope
    connect?: Enumerable<logWhereUniqueInput>
  }

  export type staffCreateNestedManyWithoutHospitalInput = {
    create?: XOR<Enumerable<staffCreateWithoutHospitalInput>, Enumerable<staffUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<staffCreateOrConnectWithoutHospitalInput>
    createMany?: staffCreateManyHospitalInputEnvelope
    connect?: Enumerable<staffWhereUniqueInput>
  }

  export type vacant_bed_logCreateNestedManyWithoutHospitalInput = {
    create?: XOR<Enumerable<vacant_bed_logCreateWithoutHospitalInput>, Enumerable<vacant_bed_logUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<vacant_bed_logCreateOrConnectWithoutHospitalInput>
    createMany?: vacant_bed_logCreateManyHospitalInputEnvelope
    connect?: Enumerable<vacant_bed_logWhereUniqueInput>
  }

  export type addressUncheckedCreateNestedOneWithoutHospitalInput = {
    create?: XOR<addressCreateWithoutHospitalInput, addressUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: addressCreateOrConnectWithoutHospitalInput
    connect?: addressWhereUniqueInput
  }

  export type amenityUncheckedCreateNestedOneWithoutHospitalInput = {
    create?: XOR<amenityCreateWithoutHospitalInput, amenityUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: amenityCreateOrConnectWithoutHospitalInput
    connect?: amenityWhereUniqueInput
  }

  export type blood_analytical_serviceUncheckedCreateNestedOneWithoutHospitalInput = {
    create?: XOR<blood_analytical_serviceCreateWithoutHospitalInput, blood_analytical_serviceUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: blood_analytical_serviceCreateOrConnectWithoutHospitalInput
    connect?: blood_analytical_serviceWhereUniqueInput
  }

  export type bookingUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<Enumerable<bookingCreateWithoutHospitalInput>, Enumerable<bookingUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<bookingCreateOrConnectWithoutHospitalInput>
    createMany?: bookingCreateManyHospitalInputEnvelope
    connect?: Enumerable<bookingWhereUniqueInput>
  }

  export type capacityUncheckedCreateNestedOneWithoutHospitalInput = {
    create?: XOR<capacityCreateWithoutHospitalInput, capacityUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: capacityCreateOrConnectWithoutHospitalInput
    connect?: capacityWhereUniqueInput
  }

  export type diagnostic_imaging_serviceUncheckedCreateNestedOneWithoutHospitalInput = {
    create?: XOR<diagnostic_imaging_serviceCreateWithoutHospitalInput, diagnostic_imaging_serviceUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: diagnostic_imaging_serviceCreateOrConnectWithoutHospitalInput
    connect?: diagnostic_imaging_serviceWhereUniqueInput
  }

  export type doctorUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<Enumerable<doctorCreateWithoutHospitalInput>, Enumerable<doctorUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<doctorCreateOrConnectWithoutHospitalInput>
    createMany?: doctorCreateManyHospitalInputEnvelope
    connect?: Enumerable<doctorWhereUniqueInput>
  }

  export type general_serviceUncheckedCreateNestedOneWithoutHospitalInput = {
    create?: XOR<general_serviceCreateWithoutHospitalInput, general_serviceUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: general_serviceCreateOrConnectWithoutHospitalInput
    connect?: general_serviceWhereUniqueInput
  }

  export type logUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<Enumerable<logCreateWithoutHospitalInput>, Enumerable<logUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<logCreateOrConnectWithoutHospitalInput>
    createMany?: logCreateManyHospitalInputEnvelope
    connect?: Enumerable<logWhereUniqueInput>
  }

  export type staffUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<Enumerable<staffCreateWithoutHospitalInput>, Enumerable<staffUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<staffCreateOrConnectWithoutHospitalInput>
    createMany?: staffCreateManyHospitalInputEnvelope
    connect?: Enumerable<staffWhereUniqueInput>
  }

  export type vacant_bed_logUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<Enumerable<vacant_bed_logCreateWithoutHospitalInput>, Enumerable<vacant_bed_logUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<vacant_bed_logCreateOrConnectWithoutHospitalInput>
    createMany?: vacant_bed_logCreateManyHospitalInputEnvelope
    connect?: Enumerable<vacant_bed_logWhereUniqueInput>
  }

  export type Enumhospital_hospital_typeFieldUpdateOperationsInput = {
    set?: hospital_hospital_type
  }

  export type Enumhospital_statusFieldUpdateOperationsInput = {
    set?: hospital_status
  }

  export type addressUpdateOneWithoutHospitalInput = {
    create?: XOR<addressCreateWithoutHospitalInput, addressUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: addressCreateOrConnectWithoutHospitalInput
    upsert?: addressUpsertWithoutHospitalInput
    connect?: addressWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<addressUpdateWithoutHospitalInput, addressUncheckedUpdateWithoutHospitalInput>
  }

  export type amenityUpdateOneWithoutHospitalInput = {
    create?: XOR<amenityCreateWithoutHospitalInput, amenityUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: amenityCreateOrConnectWithoutHospitalInput
    upsert?: amenityUpsertWithoutHospitalInput
    connect?: amenityWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<amenityUpdateWithoutHospitalInput, amenityUncheckedUpdateWithoutHospitalInput>
  }

  export type blood_analytical_serviceUpdateOneWithoutHospitalInput = {
    create?: XOR<blood_analytical_serviceCreateWithoutHospitalInput, blood_analytical_serviceUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: blood_analytical_serviceCreateOrConnectWithoutHospitalInput
    upsert?: blood_analytical_serviceUpsertWithoutHospitalInput
    connect?: blood_analytical_serviceWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<blood_analytical_serviceUpdateWithoutHospitalInput, blood_analytical_serviceUncheckedUpdateWithoutHospitalInput>
  }

  export type bookingUpdateManyWithoutHospitalInput = {
    create?: XOR<Enumerable<bookingCreateWithoutHospitalInput>, Enumerable<bookingUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<bookingCreateOrConnectWithoutHospitalInput>
    upsert?: Enumerable<bookingUpsertWithWhereUniqueWithoutHospitalInput>
    createMany?: bookingCreateManyHospitalInputEnvelope
    connect?: Enumerable<bookingWhereUniqueInput>
    set?: Enumerable<bookingWhereUniqueInput>
    disconnect?: Enumerable<bookingWhereUniqueInput>
    delete?: Enumerable<bookingWhereUniqueInput>
    update?: Enumerable<bookingUpdateWithWhereUniqueWithoutHospitalInput>
    updateMany?: Enumerable<bookingUpdateManyWithWhereWithoutHospitalInput>
    deleteMany?: Enumerable<bookingScalarWhereInput>
  }

  export type capacityUpdateOneWithoutHospitalInput = {
    create?: XOR<capacityCreateWithoutHospitalInput, capacityUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: capacityCreateOrConnectWithoutHospitalInput
    upsert?: capacityUpsertWithoutHospitalInput
    connect?: capacityWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<capacityUpdateWithoutHospitalInput, capacityUncheckedUpdateWithoutHospitalInput>
  }

  export type diagnostic_imaging_serviceUpdateOneWithoutHospitalInput = {
    create?: XOR<diagnostic_imaging_serviceCreateWithoutHospitalInput, diagnostic_imaging_serviceUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: diagnostic_imaging_serviceCreateOrConnectWithoutHospitalInput
    upsert?: diagnostic_imaging_serviceUpsertWithoutHospitalInput
    connect?: diagnostic_imaging_serviceWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<diagnostic_imaging_serviceUpdateWithoutHospitalInput, diagnostic_imaging_serviceUncheckedUpdateWithoutHospitalInput>
  }

  export type doctorUpdateManyWithoutHospitalInput = {
    create?: XOR<Enumerable<doctorCreateWithoutHospitalInput>, Enumerable<doctorUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<doctorCreateOrConnectWithoutHospitalInput>
    upsert?: Enumerable<doctorUpsertWithWhereUniqueWithoutHospitalInput>
    createMany?: doctorCreateManyHospitalInputEnvelope
    connect?: Enumerable<doctorWhereUniqueInput>
    set?: Enumerable<doctorWhereUniqueInput>
    disconnect?: Enumerable<doctorWhereUniqueInput>
    delete?: Enumerable<doctorWhereUniqueInput>
    update?: Enumerable<doctorUpdateWithWhereUniqueWithoutHospitalInput>
    updateMany?: Enumerable<doctorUpdateManyWithWhereWithoutHospitalInput>
    deleteMany?: Enumerable<doctorScalarWhereInput>
  }

  export type general_serviceUpdateOneWithoutHospitalInput = {
    create?: XOR<general_serviceCreateWithoutHospitalInput, general_serviceUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: general_serviceCreateOrConnectWithoutHospitalInput
    upsert?: general_serviceUpsertWithoutHospitalInput
    connect?: general_serviceWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<general_serviceUpdateWithoutHospitalInput, general_serviceUncheckedUpdateWithoutHospitalInput>
  }

  export type logUpdateManyWithoutHospitalInput = {
    create?: XOR<Enumerable<logCreateWithoutHospitalInput>, Enumerable<logUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<logCreateOrConnectWithoutHospitalInput>
    upsert?: Enumerable<logUpsertWithWhereUniqueWithoutHospitalInput>
    createMany?: logCreateManyHospitalInputEnvelope
    connect?: Enumerable<logWhereUniqueInput>
    set?: Enumerable<logWhereUniqueInput>
    disconnect?: Enumerable<logWhereUniqueInput>
    delete?: Enumerable<logWhereUniqueInput>
    update?: Enumerable<logUpdateWithWhereUniqueWithoutHospitalInput>
    updateMany?: Enumerable<logUpdateManyWithWhereWithoutHospitalInput>
    deleteMany?: Enumerable<logScalarWhereInput>
  }

  export type staffUpdateManyWithoutHospitalInput = {
    create?: XOR<Enumerable<staffCreateWithoutHospitalInput>, Enumerable<staffUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<staffCreateOrConnectWithoutHospitalInput>
    upsert?: Enumerable<staffUpsertWithWhereUniqueWithoutHospitalInput>
    createMany?: staffCreateManyHospitalInputEnvelope
    connect?: Enumerable<staffWhereUniqueInput>
    set?: Enumerable<staffWhereUniqueInput>
    disconnect?: Enumerable<staffWhereUniqueInput>
    delete?: Enumerable<staffWhereUniqueInput>
    update?: Enumerable<staffUpdateWithWhereUniqueWithoutHospitalInput>
    updateMany?: Enumerable<staffUpdateManyWithWhereWithoutHospitalInput>
    deleteMany?: Enumerable<staffScalarWhereInput>
  }

  export type vacant_bed_logUpdateManyWithoutHospitalInput = {
    create?: XOR<Enumerable<vacant_bed_logCreateWithoutHospitalInput>, Enumerable<vacant_bed_logUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<vacant_bed_logCreateOrConnectWithoutHospitalInput>
    upsert?: Enumerable<vacant_bed_logUpsertWithWhereUniqueWithoutHospitalInput>
    createMany?: vacant_bed_logCreateManyHospitalInputEnvelope
    connect?: Enumerable<vacant_bed_logWhereUniqueInput>
    set?: Enumerable<vacant_bed_logWhereUniqueInput>
    disconnect?: Enumerable<vacant_bed_logWhereUniqueInput>
    delete?: Enumerable<vacant_bed_logWhereUniqueInput>
    update?: Enumerable<vacant_bed_logUpdateWithWhereUniqueWithoutHospitalInput>
    updateMany?: Enumerable<vacant_bed_logUpdateManyWithWhereWithoutHospitalInput>
    deleteMany?: Enumerable<vacant_bed_logScalarWhereInput>
  }

  export type addressUncheckedUpdateOneWithoutHospitalInput = {
    create?: XOR<addressCreateWithoutHospitalInput, addressUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: addressCreateOrConnectWithoutHospitalInput
    upsert?: addressUpsertWithoutHospitalInput
    connect?: addressWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<addressUpdateWithoutHospitalInput, addressUncheckedUpdateWithoutHospitalInput>
  }

  export type amenityUncheckedUpdateOneWithoutHospitalInput = {
    create?: XOR<amenityCreateWithoutHospitalInput, amenityUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: amenityCreateOrConnectWithoutHospitalInput
    upsert?: amenityUpsertWithoutHospitalInput
    connect?: amenityWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<amenityUpdateWithoutHospitalInput, amenityUncheckedUpdateWithoutHospitalInput>
  }

  export type blood_analytical_serviceUncheckedUpdateOneWithoutHospitalInput = {
    create?: XOR<blood_analytical_serviceCreateWithoutHospitalInput, blood_analytical_serviceUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: blood_analytical_serviceCreateOrConnectWithoutHospitalInput
    upsert?: blood_analytical_serviceUpsertWithoutHospitalInput
    connect?: blood_analytical_serviceWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<blood_analytical_serviceUpdateWithoutHospitalInput, blood_analytical_serviceUncheckedUpdateWithoutHospitalInput>
  }

  export type bookingUncheckedUpdateManyWithoutHospitalInput = {
    create?: XOR<Enumerable<bookingCreateWithoutHospitalInput>, Enumerable<bookingUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<bookingCreateOrConnectWithoutHospitalInput>
    upsert?: Enumerable<bookingUpsertWithWhereUniqueWithoutHospitalInput>
    createMany?: bookingCreateManyHospitalInputEnvelope
    connect?: Enumerable<bookingWhereUniqueInput>
    set?: Enumerable<bookingWhereUniqueInput>
    disconnect?: Enumerable<bookingWhereUniqueInput>
    delete?: Enumerable<bookingWhereUniqueInput>
    update?: Enumerable<bookingUpdateWithWhereUniqueWithoutHospitalInput>
    updateMany?: Enumerable<bookingUpdateManyWithWhereWithoutHospitalInput>
    deleteMany?: Enumerable<bookingScalarWhereInput>
  }

  export type capacityUncheckedUpdateOneWithoutHospitalInput = {
    create?: XOR<capacityCreateWithoutHospitalInput, capacityUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: capacityCreateOrConnectWithoutHospitalInput
    upsert?: capacityUpsertWithoutHospitalInput
    connect?: capacityWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<capacityUpdateWithoutHospitalInput, capacityUncheckedUpdateWithoutHospitalInput>
  }

  export type diagnostic_imaging_serviceUncheckedUpdateOneWithoutHospitalInput = {
    create?: XOR<diagnostic_imaging_serviceCreateWithoutHospitalInput, diagnostic_imaging_serviceUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: diagnostic_imaging_serviceCreateOrConnectWithoutHospitalInput
    upsert?: diagnostic_imaging_serviceUpsertWithoutHospitalInput
    connect?: diagnostic_imaging_serviceWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<diagnostic_imaging_serviceUpdateWithoutHospitalInput, diagnostic_imaging_serviceUncheckedUpdateWithoutHospitalInput>
  }

  export type doctorUncheckedUpdateManyWithoutHospitalInput = {
    create?: XOR<Enumerable<doctorCreateWithoutHospitalInput>, Enumerable<doctorUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<doctorCreateOrConnectWithoutHospitalInput>
    upsert?: Enumerable<doctorUpsertWithWhereUniqueWithoutHospitalInput>
    createMany?: doctorCreateManyHospitalInputEnvelope
    connect?: Enumerable<doctorWhereUniqueInput>
    set?: Enumerable<doctorWhereUniqueInput>
    disconnect?: Enumerable<doctorWhereUniqueInput>
    delete?: Enumerable<doctorWhereUniqueInput>
    update?: Enumerable<doctorUpdateWithWhereUniqueWithoutHospitalInput>
    updateMany?: Enumerable<doctorUpdateManyWithWhereWithoutHospitalInput>
    deleteMany?: Enumerable<doctorScalarWhereInput>
  }

  export type general_serviceUncheckedUpdateOneWithoutHospitalInput = {
    create?: XOR<general_serviceCreateWithoutHospitalInput, general_serviceUncheckedCreateWithoutHospitalInput>
    connectOrCreate?: general_serviceCreateOrConnectWithoutHospitalInput
    upsert?: general_serviceUpsertWithoutHospitalInput
    connect?: general_serviceWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<general_serviceUpdateWithoutHospitalInput, general_serviceUncheckedUpdateWithoutHospitalInput>
  }

  export type logUncheckedUpdateManyWithoutHospitalInput = {
    create?: XOR<Enumerable<logCreateWithoutHospitalInput>, Enumerable<logUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<logCreateOrConnectWithoutHospitalInput>
    upsert?: Enumerable<logUpsertWithWhereUniqueWithoutHospitalInput>
    createMany?: logCreateManyHospitalInputEnvelope
    connect?: Enumerable<logWhereUniqueInput>
    set?: Enumerable<logWhereUniqueInput>
    disconnect?: Enumerable<logWhereUniqueInput>
    delete?: Enumerable<logWhereUniqueInput>
    update?: Enumerable<logUpdateWithWhereUniqueWithoutHospitalInput>
    updateMany?: Enumerable<logUpdateManyWithWhereWithoutHospitalInput>
    deleteMany?: Enumerable<logScalarWhereInput>
  }

  export type staffUncheckedUpdateManyWithoutHospitalInput = {
    create?: XOR<Enumerable<staffCreateWithoutHospitalInput>, Enumerable<staffUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<staffCreateOrConnectWithoutHospitalInput>
    upsert?: Enumerable<staffUpsertWithWhereUniqueWithoutHospitalInput>
    createMany?: staffCreateManyHospitalInputEnvelope
    connect?: Enumerable<staffWhereUniqueInput>
    set?: Enumerable<staffWhereUniqueInput>
    disconnect?: Enumerable<staffWhereUniqueInput>
    delete?: Enumerable<staffWhereUniqueInput>
    update?: Enumerable<staffUpdateWithWhereUniqueWithoutHospitalInput>
    updateMany?: Enumerable<staffUpdateManyWithWhereWithoutHospitalInput>
    deleteMany?: Enumerable<staffScalarWhereInput>
  }

  export type vacant_bed_logUncheckedUpdateManyWithoutHospitalInput = {
    create?: XOR<Enumerable<vacant_bed_logCreateWithoutHospitalInput>, Enumerable<vacant_bed_logUncheckedCreateWithoutHospitalInput>>
    connectOrCreate?: Enumerable<vacant_bed_logCreateOrConnectWithoutHospitalInput>
    upsert?: Enumerable<vacant_bed_logUpsertWithWhereUniqueWithoutHospitalInput>
    createMany?: vacant_bed_logCreateManyHospitalInputEnvelope
    connect?: Enumerable<vacant_bed_logWhereUniqueInput>
    set?: Enumerable<vacant_bed_logWhereUniqueInput>
    disconnect?: Enumerable<vacant_bed_logWhereUniqueInput>
    delete?: Enumerable<vacant_bed_logWhereUniqueInput>
    update?: Enumerable<vacant_bed_logUpdateWithWhereUniqueWithoutHospitalInput>
    updateMany?: Enumerable<vacant_bed_logUpdateManyWithWhereWithoutHospitalInput>
    deleteMany?: Enumerable<vacant_bed_logScalarWhereInput>
  }

  export type staffCreateNestedOneWithoutLogInput = {
    create?: XOR<staffCreateWithoutLogInput, staffUncheckedCreateWithoutLogInput>
    connectOrCreate?: staffCreateOrConnectWithoutLogInput
    connect?: staffWhereUniqueInput
  }

  export type hospitalCreateNestedOneWithoutLogInput = {
    create?: XOR<hospitalCreateWithoutLogInput, hospitalUncheckedCreateWithoutLogInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutLogInput
    connect?: hospitalWhereUniqueInput
  }

  export type Enumlog_roleFieldUpdateOperationsInput = {
    set?: log_role
  }

  export type staffUpdateOneRequiredWithoutLogInput = {
    create?: XOR<staffCreateWithoutLogInput, staffUncheckedCreateWithoutLogInput>
    connectOrCreate?: staffCreateOrConnectWithoutLogInput
    upsert?: staffUpsertWithoutLogInput
    connect?: staffWhereUniqueInput
    update?: XOR<staffUpdateWithoutLogInput, staffUncheckedUpdateWithoutLogInput>
  }

  export type hospitalUpdateOneRequiredWithoutLogInput = {
    create?: XOR<hospitalCreateWithoutLogInput, hospitalUncheckedCreateWithoutLogInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutLogInput
    upsert?: hospitalUpsertWithoutLogInput
    connect?: hospitalWhereUniqueInput
    update?: XOR<hospitalUpdateWithoutLogInput, hospitalUncheckedUpdateWithoutLogInput>
  }

  export type hospitalCreateNestedOneWithoutStaffInput = {
    create?: XOR<hospitalCreateWithoutStaffInput, hospitalUncheckedCreateWithoutStaffInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutStaffInput
    connect?: hospitalWhereUniqueInput
  }

  export type logCreateNestedManyWithoutStaffInput = {
    create?: XOR<Enumerable<logCreateWithoutStaffInput>, Enumerable<logUncheckedCreateWithoutStaffInput>>
    connectOrCreate?: Enumerable<logCreateOrConnectWithoutStaffInput>
    createMany?: logCreateManyStaffInputEnvelope
    connect?: Enumerable<logWhereUniqueInput>
  }

  export type logUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<Enumerable<logCreateWithoutStaffInput>, Enumerable<logUncheckedCreateWithoutStaffInput>>
    connectOrCreate?: Enumerable<logCreateOrConnectWithoutStaffInput>
    createMany?: logCreateManyStaffInputEnvelope
    connect?: Enumerable<logWhereUniqueInput>
  }

  export type Enumstaff_roleFieldUpdateOperationsInput = {
    set?: staff_role
  }

  export type Enumstaff_statusFieldUpdateOperationsInput = {
    set?: staff_status
  }

  export type hospitalUpdateOneRequiredWithoutStaffInput = {
    create?: XOR<hospitalCreateWithoutStaffInput, hospitalUncheckedCreateWithoutStaffInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutStaffInput
    upsert?: hospitalUpsertWithoutStaffInput
    connect?: hospitalWhereUniqueInput
    update?: XOR<hospitalUpdateWithoutStaffInput, hospitalUncheckedUpdateWithoutStaffInput>
  }

  export type logUpdateManyWithoutStaffInput = {
    create?: XOR<Enumerable<logCreateWithoutStaffInput>, Enumerable<logUncheckedCreateWithoutStaffInput>>
    connectOrCreate?: Enumerable<logCreateOrConnectWithoutStaffInput>
    upsert?: Enumerable<logUpsertWithWhereUniqueWithoutStaffInput>
    createMany?: logCreateManyStaffInputEnvelope
    connect?: Enumerable<logWhereUniqueInput>
    set?: Enumerable<logWhereUniqueInput>
    disconnect?: Enumerable<logWhereUniqueInput>
    delete?: Enumerable<logWhereUniqueInput>
    update?: Enumerable<logUpdateWithWhereUniqueWithoutStaffInput>
    updateMany?: Enumerable<logUpdateManyWithWhereWithoutStaffInput>
    deleteMany?: Enumerable<logScalarWhereInput>
  }

  export type logUncheckedUpdateManyWithoutStaffInput = {
    create?: XOR<Enumerable<logCreateWithoutStaffInput>, Enumerable<logUncheckedCreateWithoutStaffInput>>
    connectOrCreate?: Enumerable<logCreateOrConnectWithoutStaffInput>
    upsert?: Enumerable<logUpsertWithWhereUniqueWithoutStaffInput>
    createMany?: logCreateManyStaffInputEnvelope
    connect?: Enumerable<logWhereUniqueInput>
    set?: Enumerable<logWhereUniqueInput>
    disconnect?: Enumerable<logWhereUniqueInput>
    delete?: Enumerable<logWhereUniqueInput>
    update?: Enumerable<logUpdateWithWhereUniqueWithoutStaffInput>
    updateMany?: Enumerable<logUpdateManyWithWhereWithoutStaffInput>
    deleteMany?: Enumerable<logScalarWhereInput>
  }

  export type bookingCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<bookingCreateWithoutUserInput>, Enumerable<bookingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<bookingCreateOrConnectWithoutUserInput>
    createMany?: bookingCreateManyUserInputEnvelope
    connect?: Enumerable<bookingWhereUniqueInput>
  }

  export type bookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<bookingCreateWithoutUserInput>, Enumerable<bookingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<bookingCreateOrConnectWithoutUserInput>
    createMany?: bookingCreateManyUserInputEnvelope
    connect?: Enumerable<bookingWhereUniqueInput>
  }

  export type Enumuser_sexFieldUpdateOperationsInput = {
    set?: user_sex
  }

  export type bookingUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<bookingCreateWithoutUserInput>, Enumerable<bookingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<bookingCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<bookingUpsertWithWhereUniqueWithoutUserInput>
    createMany?: bookingCreateManyUserInputEnvelope
    connect?: Enumerable<bookingWhereUniqueInput>
    set?: Enumerable<bookingWhereUniqueInput>
    disconnect?: Enumerable<bookingWhereUniqueInput>
    delete?: Enumerable<bookingWhereUniqueInput>
    update?: Enumerable<bookingUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<bookingUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<bookingScalarWhereInput>
  }

  export type bookingUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<bookingCreateWithoutUserInput>, Enumerable<bookingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<bookingCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<bookingUpsertWithWhereUniqueWithoutUserInput>
    createMany?: bookingCreateManyUserInputEnvelope
    connect?: Enumerable<bookingWhereUniqueInput>
    set?: Enumerable<bookingWhereUniqueInput>
    disconnect?: Enumerable<bookingWhereUniqueInput>
    delete?: Enumerable<bookingWhereUniqueInput>
    update?: Enumerable<bookingUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<bookingUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<bookingScalarWhereInput>
  }

  export type hospitalCreateNestedOneWithoutVacant_bed_logInput = {
    create?: XOR<hospitalCreateWithoutVacant_bed_logInput, hospitalUncheckedCreateWithoutVacant_bed_logInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutVacant_bed_logInput
    connect?: hospitalWhereUniqueInput
  }

  export type hospitalUpdateOneRequiredWithoutVacant_bed_logInput = {
    create?: XOR<hospitalCreateWithoutVacant_bed_logInput, hospitalUncheckedCreateWithoutVacant_bed_logInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutVacant_bed_logInput
    upsert?: hospitalUpsertWithoutVacant_bed_logInput
    connect?: hospitalWhereUniqueInput
    update?: XOR<hospitalUpdateWithoutVacant_bed_logInput, hospitalUncheckedUpdateWithoutVacant_bed_logInput>
  }

  export type hospitalCreateNestedOneWithoutAmenityInput = {
    create?: XOR<hospitalCreateWithoutAmenityInput, hospitalUncheckedCreateWithoutAmenityInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutAmenityInput
    connect?: hospitalWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type hospitalUpdateOneRequiredWithoutAmenityInput = {
    create?: XOR<hospitalCreateWithoutAmenityInput, hospitalUncheckedCreateWithoutAmenityInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutAmenityInput
    upsert?: hospitalUpsertWithoutAmenityInput
    connect?: hospitalWhereUniqueInput
    update?: XOR<hospitalUpdateWithoutAmenityInput, hospitalUncheckedUpdateWithoutAmenityInput>
  }

  export type hospitalCreateNestedOneWithoutBlood_analytical_serviceInput = {
    create?: XOR<hospitalCreateWithoutBlood_analytical_serviceInput, hospitalUncheckedCreateWithoutBlood_analytical_serviceInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutBlood_analytical_serviceInput
    connect?: hospitalWhereUniqueInput
  }

  export type hospitalUpdateOneRequiredWithoutBlood_analytical_serviceInput = {
    create?: XOR<hospitalCreateWithoutBlood_analytical_serviceInput, hospitalUncheckedCreateWithoutBlood_analytical_serviceInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutBlood_analytical_serviceInput
    upsert?: hospitalUpsertWithoutBlood_analytical_serviceInput
    connect?: hospitalWhereUniqueInput
    update?: XOR<hospitalUpdateWithoutBlood_analytical_serviceInput, hospitalUncheckedUpdateWithoutBlood_analytical_serviceInput>
  }

  export type hospitalCreateNestedOneWithoutDiagnostic_imaging_serviceInput = {
    create?: XOR<hospitalCreateWithoutDiagnostic_imaging_serviceInput, hospitalUncheckedCreateWithoutDiagnostic_imaging_serviceInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutDiagnostic_imaging_serviceInput
    connect?: hospitalWhereUniqueInput
  }

  export type hospitalUpdateOneRequiredWithoutDiagnostic_imaging_serviceInput = {
    create?: XOR<hospitalCreateWithoutDiagnostic_imaging_serviceInput, hospitalUncheckedCreateWithoutDiagnostic_imaging_serviceInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutDiagnostic_imaging_serviceInput
    upsert?: hospitalUpsertWithoutDiagnostic_imaging_serviceInput
    connect?: hospitalWhereUniqueInput
    update?: XOR<hospitalUpdateWithoutDiagnostic_imaging_serviceInput, hospitalUncheckedUpdateWithoutDiagnostic_imaging_serviceInput>
  }

  export type hospitalCreateNestedOneWithoutDoctorInput = {
    create?: XOR<hospitalCreateWithoutDoctorInput, hospitalUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutDoctorInput
    connect?: hospitalWhereUniqueInput
  }

  export type scheduleCreateNestedManyWithoutDoctorInput = {
    create?: XOR<Enumerable<scheduleCreateWithoutDoctorInput>, Enumerable<scheduleUncheckedCreateWithoutDoctorInput>>
    connectOrCreate?: Enumerable<scheduleCreateOrConnectWithoutDoctorInput>
    createMany?: scheduleCreateManyDoctorInputEnvelope
    connect?: Enumerable<scheduleWhereUniqueInput>
  }

  export type scheduleUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<Enumerable<scheduleCreateWithoutDoctorInput>, Enumerable<scheduleUncheckedCreateWithoutDoctorInput>>
    connectOrCreate?: Enumerable<scheduleCreateOrConnectWithoutDoctorInput>
    createMany?: scheduleCreateManyDoctorInputEnvelope
    connect?: Enumerable<scheduleWhereUniqueInput>
  }

  export type hospitalUpdateOneRequiredWithoutDoctorInput = {
    create?: XOR<hospitalCreateWithoutDoctorInput, hospitalUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutDoctorInput
    upsert?: hospitalUpsertWithoutDoctorInput
    connect?: hospitalWhereUniqueInput
    update?: XOR<hospitalUpdateWithoutDoctorInput, hospitalUncheckedUpdateWithoutDoctorInput>
  }

  export type scheduleUpdateManyWithoutDoctorInput = {
    create?: XOR<Enumerable<scheduleCreateWithoutDoctorInput>, Enumerable<scheduleUncheckedCreateWithoutDoctorInput>>
    connectOrCreate?: Enumerable<scheduleCreateOrConnectWithoutDoctorInput>
    upsert?: Enumerable<scheduleUpsertWithWhereUniqueWithoutDoctorInput>
    createMany?: scheduleCreateManyDoctorInputEnvelope
    connect?: Enumerable<scheduleWhereUniqueInput>
    set?: Enumerable<scheduleWhereUniqueInput>
    disconnect?: Enumerable<scheduleWhereUniqueInput>
    delete?: Enumerable<scheduleWhereUniqueInput>
    update?: Enumerable<scheduleUpdateWithWhereUniqueWithoutDoctorInput>
    updateMany?: Enumerable<scheduleUpdateManyWithWhereWithoutDoctorInput>
    deleteMany?: Enumerable<scheduleScalarWhereInput>
  }

  export type scheduleUncheckedUpdateManyWithoutDoctorInput = {
    create?: XOR<Enumerable<scheduleCreateWithoutDoctorInput>, Enumerable<scheduleUncheckedCreateWithoutDoctorInput>>
    connectOrCreate?: Enumerable<scheduleCreateOrConnectWithoutDoctorInput>
    upsert?: Enumerable<scheduleUpsertWithWhereUniqueWithoutDoctorInput>
    createMany?: scheduleCreateManyDoctorInputEnvelope
    connect?: Enumerable<scheduleWhereUniqueInput>
    set?: Enumerable<scheduleWhereUniqueInput>
    disconnect?: Enumerable<scheduleWhereUniqueInput>
    delete?: Enumerable<scheduleWhereUniqueInput>
    update?: Enumerable<scheduleUpdateWithWhereUniqueWithoutDoctorInput>
    updateMany?: Enumerable<scheduleUpdateManyWithWhereWithoutDoctorInput>
    deleteMany?: Enumerable<scheduleScalarWhereInput>
  }

  export type hospitalCreateNestedOneWithoutGeneral_serviceInput = {
    create?: XOR<hospitalCreateWithoutGeneral_serviceInput, hospitalUncheckedCreateWithoutGeneral_serviceInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutGeneral_serviceInput
    connect?: hospitalWhereUniqueInput
  }

  export type hospitalUpdateOneRequiredWithoutGeneral_serviceInput = {
    create?: XOR<hospitalCreateWithoutGeneral_serviceInput, hospitalUncheckedCreateWithoutGeneral_serviceInput>
    connectOrCreate?: hospitalCreateOrConnectWithoutGeneral_serviceInput
    upsert?: hospitalUpsertWithoutGeneral_serviceInput
    connect?: hospitalWhereUniqueInput
    update?: XOR<hospitalUpdateWithoutGeneral_serviceInput, hospitalUncheckedUpdateWithoutGeneral_serviceInput>
  }

  export type doctorCreateNestedOneWithoutScheduleInput = {
    create?: XOR<doctorCreateWithoutScheduleInput, doctorUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: doctorCreateOrConnectWithoutScheduleInput
    connect?: doctorWhereUniqueInput
  }

  export type Enumschedule_dayFieldUpdateOperationsInput = {
    set?: schedule_day
  }

  export type doctorUpdateOneRequiredWithoutScheduleInput = {
    create?: XOR<doctorCreateWithoutScheduleInput, doctorUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: doctorCreateOrConnectWithoutScheduleInput
    upsert?: doctorUpsertWithoutScheduleInput
    connect?: doctorWhereUniqueInput
    update?: XOR<doctorUpdateWithoutScheduleInput, doctorUncheckedUpdateWithoutScheduleInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDecimalNullableFilter = {
    equals?: Decimal | number | string | null
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalNullableFilter | Decimal | number | string | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter = {
    equals?: Decimal | number | string | null
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedEnumbooking_sexFilter = {
    equals?: booking_sex
    in?: Enumerable<booking_sex>
    notIn?: Enumerable<booking_sex>
    not?: NestedEnumbooking_sexFilter | booking_sex
  }

  export type NestedEnumbooking_bed_typeFilter = {
    equals?: booking_bed_type
    in?: Enumerable<booking_bed_type>
    notIn?: Enumerable<booking_bed_type>
    not?: NestedEnumbooking_bed_typeFilter | booking_bed_type
  }

  export type NestedEnumbooking_booked_forNullableFilter = {
    equals?: booking_booked_for | null
    in?: Enumerable<booking_booked_for> | null
    notIn?: Enumerable<booking_booked_for> | null
    not?: NestedEnumbooking_booked_forNullableFilter | booking_booked_for | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedEnumbooking_statusFilter = {
    equals?: booking_status
    in?: Enumerable<booking_status>
    notIn?: Enumerable<booking_status>
    not?: NestedEnumbooking_statusFilter | booking_status
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumbooking_sexWithAggregatesFilter = {
    equals?: booking_sex
    in?: Enumerable<booking_sex>
    notIn?: Enumerable<booking_sex>
    not?: NestedEnumbooking_sexWithAggregatesFilter | booking_sex
    _count?: NestedIntFilter
    _min?: NestedEnumbooking_sexFilter
    _max?: NestedEnumbooking_sexFilter
  }

  export type NestedEnumbooking_bed_typeWithAggregatesFilter = {
    equals?: booking_bed_type
    in?: Enumerable<booking_bed_type>
    notIn?: Enumerable<booking_bed_type>
    not?: NestedEnumbooking_bed_typeWithAggregatesFilter | booking_bed_type
    _count?: NestedIntFilter
    _min?: NestedEnumbooking_bed_typeFilter
    _max?: NestedEnumbooking_bed_typeFilter
  }

  export type NestedEnumbooking_booked_forNullableWithAggregatesFilter = {
    equals?: booking_booked_for | null
    in?: Enumerable<booking_booked_for> | null
    notIn?: Enumerable<booking_booked_for> | null
    not?: NestedEnumbooking_booked_forNullableWithAggregatesFilter | booking_booked_for | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumbooking_booked_forNullableFilter
    _max?: NestedEnumbooking_booked_forNullableFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedEnumbooking_statusWithAggregatesFilter = {
    equals?: booking_status
    in?: Enumerable<booking_status>
    notIn?: Enumerable<booking_status>
    not?: NestedEnumbooking_statusWithAggregatesFilter | booking_status
    _count?: NestedIntFilter
    _min?: NestedEnumbooking_statusFilter
    _max?: NestedEnumbooking_statusFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedEnumhospital_hospital_typeFilter = {
    equals?: hospital_hospital_type
    in?: Enumerable<hospital_hospital_type>
    notIn?: Enumerable<hospital_hospital_type>
    not?: NestedEnumhospital_hospital_typeFilter | hospital_hospital_type
  }

  export type NestedEnumhospital_statusFilter = {
    equals?: hospital_status
    in?: Enumerable<hospital_status>
    notIn?: Enumerable<hospital_status>
    not?: NestedEnumhospital_statusFilter | hospital_status
  }

  export type NestedEnumhospital_hospital_typeWithAggregatesFilter = {
    equals?: hospital_hospital_type
    in?: Enumerable<hospital_hospital_type>
    notIn?: Enumerable<hospital_hospital_type>
    not?: NestedEnumhospital_hospital_typeWithAggregatesFilter | hospital_hospital_type
    _count?: NestedIntFilter
    _min?: NestedEnumhospital_hospital_typeFilter
    _max?: NestedEnumhospital_hospital_typeFilter
  }

  export type NestedEnumhospital_statusWithAggregatesFilter = {
    equals?: hospital_status
    in?: Enumerable<hospital_status>
    notIn?: Enumerable<hospital_status>
    not?: NestedEnumhospital_statusWithAggregatesFilter | hospital_status
    _count?: NestedIntFilter
    _min?: NestedEnumhospital_statusFilter
    _max?: NestedEnumhospital_statusFilter
  }

  export type NestedEnumlog_roleFilter = {
    equals?: log_role
    in?: Enumerable<log_role>
    notIn?: Enumerable<log_role>
    not?: NestedEnumlog_roleFilter | log_role
  }

  export type NestedEnumlog_roleWithAggregatesFilter = {
    equals?: log_role
    in?: Enumerable<log_role>
    notIn?: Enumerable<log_role>
    not?: NestedEnumlog_roleWithAggregatesFilter | log_role
    _count?: NestedIntFilter
    _min?: NestedEnumlog_roleFilter
    _max?: NestedEnumlog_roleFilter
  }

  export type NestedEnumstaff_roleFilter = {
    equals?: staff_role
    in?: Enumerable<staff_role>
    notIn?: Enumerable<staff_role>
    not?: NestedEnumstaff_roleFilter | staff_role
  }

  export type NestedEnumstaff_statusFilter = {
    equals?: staff_status
    in?: Enumerable<staff_status>
    notIn?: Enumerable<staff_status>
    not?: NestedEnumstaff_statusFilter | staff_status
  }

  export type NestedEnumstaff_roleWithAggregatesFilter = {
    equals?: staff_role
    in?: Enumerable<staff_role>
    notIn?: Enumerable<staff_role>
    not?: NestedEnumstaff_roleWithAggregatesFilter | staff_role
    _count?: NestedIntFilter
    _min?: NestedEnumstaff_roleFilter
    _max?: NestedEnumstaff_roleFilter
  }

  export type NestedEnumstaff_statusWithAggregatesFilter = {
    equals?: staff_status
    in?: Enumerable<staff_status>
    notIn?: Enumerable<staff_status>
    not?: NestedEnumstaff_statusWithAggregatesFilter | staff_status
    _count?: NestedIntFilter
    _min?: NestedEnumstaff_statusFilter
    _max?: NestedEnumstaff_statusFilter
  }

  export type NestedEnumuser_sexFilter = {
    equals?: user_sex
    in?: Enumerable<user_sex>
    notIn?: Enumerable<user_sex>
    not?: NestedEnumuser_sexFilter | user_sex
  }

  export type NestedEnumuser_sexWithAggregatesFilter = {
    equals?: user_sex
    in?: Enumerable<user_sex>
    notIn?: Enumerable<user_sex>
    not?: NestedEnumuser_sexWithAggregatesFilter | user_sex
    _count?: NestedIntFilter
    _min?: NestedEnumuser_sexFilter
    _max?: NestedEnumuser_sexFilter
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedEnumschedule_dayFilter = {
    equals?: schedule_day
    in?: Enumerable<schedule_day>
    notIn?: Enumerable<schedule_day>
    not?: NestedEnumschedule_dayFilter | schedule_day
  }

  export type NestedEnumschedule_dayWithAggregatesFilter = {
    equals?: schedule_day
    in?: Enumerable<schedule_day>
    notIn?: Enumerable<schedule_day>
    not?: NestedEnumschedule_dayWithAggregatesFilter | schedule_day
    _count?: NestedIntFilter
    _min?: NestedEnumschedule_dayFilter
    _max?: NestedEnumschedule_dayFilter
  }

  export type hospitalCreateWithoutAddressInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    amenity?: amenityCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceCreateNestedOneWithoutHospitalInput
    booking?: bookingCreateNestedManyWithoutHospitalInput
    capacity?: capacityCreateNestedOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceCreateNestedOneWithoutHospitalInput
    doctor?: doctorCreateNestedManyWithoutHospitalInput
    general_service?: general_serviceCreateNestedOneWithoutHospitalInput
    log?: logCreateNestedManyWithoutHospitalInput
    staff?: staffCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logCreateNestedManyWithoutHospitalInput
  }

  export type hospitalUncheckedCreateWithoutAddressInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    amenity?: amenityUncheckedCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedCreateNestedOneWithoutHospitalInput
    booking?: bookingUncheckedCreateNestedManyWithoutHospitalInput
    capacity?: capacityUncheckedCreateNestedOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedCreateNestedOneWithoutHospitalInput
    doctor?: doctorUncheckedCreateNestedManyWithoutHospitalInput
    general_service?: general_serviceUncheckedCreateNestedOneWithoutHospitalInput
    log?: logUncheckedCreateNestedManyWithoutHospitalInput
    staff?: staffUncheckedCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type hospitalCreateOrConnectWithoutAddressInput = {
    where: hospitalWhereUniqueInput
    create: XOR<hospitalCreateWithoutAddressInput, hospitalUncheckedCreateWithoutAddressInput>
  }

  export type hospitalUpsertWithoutAddressInput = {
    update: XOR<hospitalUpdateWithoutAddressInput, hospitalUncheckedUpdateWithoutAddressInput>
    create: XOR<hospitalCreateWithoutAddressInput, hospitalUncheckedCreateWithoutAddressInput>
  }

  export type hospitalUpdateWithoutAddressInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    amenity?: amenityUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUpdateOneWithoutHospitalInput
    booking?: bookingUpdateManyWithoutHospitalInput
    capacity?: capacityUpdateOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUpdateOneWithoutHospitalInput
    doctor?: doctorUpdateManyWithoutHospitalInput
    general_service?: general_serviceUpdateOneWithoutHospitalInput
    log?: logUpdateManyWithoutHospitalInput
    staff?: staffUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUpdateManyWithoutHospitalInput
  }

  export type hospitalUncheckedUpdateWithoutAddressInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    amenity?: amenityUncheckedUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedUpdateOneWithoutHospitalInput
    booking?: bookingUncheckedUpdateManyWithoutHospitalInput
    capacity?: capacityUncheckedUpdateOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedUpdateOneWithoutHospitalInput
    doctor?: doctorUncheckedUpdateManyWithoutHospitalInput
    general_service?: general_serviceUncheckedUpdateOneWithoutHospitalInput
    log?: logUncheckedUpdateManyWithoutHospitalInput
    staff?: staffUncheckedUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedUpdateManyWithoutHospitalInput
  }

  export type userCreateWithoutBookingInput = {
    mobile_no: string
    password: string
    name: string
    sex: user_sex
    dob: Date | string
    email?: string | null
    document_id?: string | null
    joined_on?: Date | string
  }

  export type userUncheckedCreateWithoutBookingInput = {
    mobile_no: string
    password: string
    name: string
    sex: user_sex
    dob: Date | string
    email?: string | null
    document_id?: string | null
    joined_on?: Date | string
  }

  export type userCreateOrConnectWithoutBookingInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>
  }

  export type hospitalCreateWithoutBookingInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressCreateNestedOneWithoutHospitalInput
    amenity?: amenityCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceCreateNestedOneWithoutHospitalInput
    capacity?: capacityCreateNestedOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceCreateNestedOneWithoutHospitalInput
    doctor?: doctorCreateNestedManyWithoutHospitalInput
    general_service?: general_serviceCreateNestedOneWithoutHospitalInput
    log?: logCreateNestedManyWithoutHospitalInput
    staff?: staffCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logCreateNestedManyWithoutHospitalInput
  }

  export type hospitalUncheckedCreateWithoutBookingInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressUncheckedCreateNestedOneWithoutHospitalInput
    amenity?: amenityUncheckedCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedCreateNestedOneWithoutHospitalInput
    capacity?: capacityUncheckedCreateNestedOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedCreateNestedOneWithoutHospitalInput
    doctor?: doctorUncheckedCreateNestedManyWithoutHospitalInput
    general_service?: general_serviceUncheckedCreateNestedOneWithoutHospitalInput
    log?: logUncheckedCreateNestedManyWithoutHospitalInput
    staff?: staffUncheckedCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type hospitalCreateOrConnectWithoutBookingInput = {
    where: hospitalWhereUniqueInput
    create: XOR<hospitalCreateWithoutBookingInput, hospitalUncheckedCreateWithoutBookingInput>
  }

  export type userUpsertWithoutBookingInput = {
    update: XOR<userUpdateWithoutBookingInput, userUncheckedUpdateWithoutBookingInput>
    create: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>
  }

  export type userUpdateWithoutBookingInput = {
    mobile_no?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: Enumuser_sexFieldUpdateOperationsInput | user_sex
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    document_id?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateWithoutBookingInput = {
    mobile_no?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sex?: Enumuser_sexFieldUpdateOperationsInput | user_sex
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    document_id?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hospitalUpsertWithoutBookingInput = {
    update: XOR<hospitalUpdateWithoutBookingInput, hospitalUncheckedUpdateWithoutBookingInput>
    create: XOR<hospitalCreateWithoutBookingInput, hospitalUncheckedCreateWithoutBookingInput>
  }

  export type hospitalUpdateWithoutBookingInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUpdateOneWithoutHospitalInput
    amenity?: amenityUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUpdateOneWithoutHospitalInput
    capacity?: capacityUpdateOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUpdateOneWithoutHospitalInput
    doctor?: doctorUpdateManyWithoutHospitalInput
    general_service?: general_serviceUpdateOneWithoutHospitalInput
    log?: logUpdateManyWithoutHospitalInput
    staff?: staffUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUpdateManyWithoutHospitalInput
  }

  export type hospitalUncheckedUpdateWithoutBookingInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUncheckedUpdateOneWithoutHospitalInput
    amenity?: amenityUncheckedUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedUpdateOneWithoutHospitalInput
    capacity?: capacityUncheckedUpdateOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedUpdateOneWithoutHospitalInput
    doctor?: doctorUncheckedUpdateManyWithoutHospitalInput
    general_service?: general_serviceUncheckedUpdateOneWithoutHospitalInput
    log?: logUncheckedUpdateManyWithoutHospitalInput
    staff?: staffUncheckedUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedUpdateManyWithoutHospitalInput
  }

  export type hospitalCreateWithoutCapacityInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressCreateNestedOneWithoutHospitalInput
    amenity?: amenityCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceCreateNestedOneWithoutHospitalInput
    booking?: bookingCreateNestedManyWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceCreateNestedOneWithoutHospitalInput
    doctor?: doctorCreateNestedManyWithoutHospitalInput
    general_service?: general_serviceCreateNestedOneWithoutHospitalInput
    log?: logCreateNestedManyWithoutHospitalInput
    staff?: staffCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logCreateNestedManyWithoutHospitalInput
  }

  export type hospitalUncheckedCreateWithoutCapacityInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressUncheckedCreateNestedOneWithoutHospitalInput
    amenity?: amenityUncheckedCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedCreateNestedOneWithoutHospitalInput
    booking?: bookingUncheckedCreateNestedManyWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedCreateNestedOneWithoutHospitalInput
    doctor?: doctorUncheckedCreateNestedManyWithoutHospitalInput
    general_service?: general_serviceUncheckedCreateNestedOneWithoutHospitalInput
    log?: logUncheckedCreateNestedManyWithoutHospitalInput
    staff?: staffUncheckedCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type hospitalCreateOrConnectWithoutCapacityInput = {
    where: hospitalWhereUniqueInput
    create: XOR<hospitalCreateWithoutCapacityInput, hospitalUncheckedCreateWithoutCapacityInput>
  }

  export type hospitalUpsertWithoutCapacityInput = {
    update: XOR<hospitalUpdateWithoutCapacityInput, hospitalUncheckedUpdateWithoutCapacityInput>
    create: XOR<hospitalCreateWithoutCapacityInput, hospitalUncheckedCreateWithoutCapacityInput>
  }

  export type hospitalUpdateWithoutCapacityInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUpdateOneWithoutHospitalInput
    amenity?: amenityUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUpdateOneWithoutHospitalInput
    booking?: bookingUpdateManyWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUpdateOneWithoutHospitalInput
    doctor?: doctorUpdateManyWithoutHospitalInput
    general_service?: general_serviceUpdateOneWithoutHospitalInput
    log?: logUpdateManyWithoutHospitalInput
    staff?: staffUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUpdateManyWithoutHospitalInput
  }

  export type hospitalUncheckedUpdateWithoutCapacityInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUncheckedUpdateOneWithoutHospitalInput
    amenity?: amenityUncheckedUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedUpdateOneWithoutHospitalInput
    booking?: bookingUncheckedUpdateManyWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedUpdateOneWithoutHospitalInput
    doctor?: doctorUncheckedUpdateManyWithoutHospitalInput
    general_service?: general_serviceUncheckedUpdateOneWithoutHospitalInput
    log?: logUncheckedUpdateManyWithoutHospitalInput
    staff?: staffUncheckedUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedUpdateManyWithoutHospitalInput
  }

  export type addressCreateWithoutHospitalInput = {
    address: string
    phone_no?: string | null
    mobile_no?: string | null
    latitude?: Decimal | number | string | null
    longitude?: Decimal | number | string | null
  }

  export type addressUncheckedCreateWithoutHospitalInput = {
    address: string
    phone_no?: string | null
    mobile_no?: string | null
    latitude?: Decimal | number | string | null
    longitude?: Decimal | number | string | null
  }

  export type addressCreateOrConnectWithoutHospitalInput = {
    where: addressWhereUniqueInput
    create: XOR<addressCreateWithoutHospitalInput, addressUncheckedCreateWithoutHospitalInput>
  }

  export type amenityCreateWithoutHospitalInput = {
    atm?: boolean | null
    baby_corner?: boolean | null
    cafeteria?: boolean | null
    gift_shop?: boolean | null
    locker?: boolean | null
    parking?: boolean | null
    pharmacy?: boolean | null
    prayer_area?: boolean | null
    wheelchair?: boolean | null
    wifi?: boolean | null
  }

  export type amenityUncheckedCreateWithoutHospitalInput = {
    atm?: boolean | null
    baby_corner?: boolean | null
    cafeteria?: boolean | null
    gift_shop?: boolean | null
    locker?: boolean | null
    parking?: boolean | null
    pharmacy?: boolean | null
    prayer_area?: boolean | null
    wheelchair?: boolean | null
    wifi?: boolean | null
  }

  export type amenityCreateOrConnectWithoutHospitalInput = {
    where: amenityWhereUniqueInput
    create: XOR<amenityCreateWithoutHospitalInput, amenityUncheckedCreateWithoutHospitalInput>
  }

  export type blood_analytical_serviceCreateWithoutHospitalInput = {
    antibody_analysis?: boolean | null
    cbc?: boolean | null
    creatinine_analysis?: boolean | null
    crp?: boolean | null
    esr?: boolean | null
    fobt?: boolean | null
    hematocrit?: boolean | null
    kidney_function_analysis?: boolean | null
    lipid_profile?: boolean | null
    liver_function_analysis?: boolean | null
    rf?: boolean | null
    serum_analysis?: boolean | null
    sr?: boolean | null
  }

  export type blood_analytical_serviceUncheckedCreateWithoutHospitalInput = {
    antibody_analysis?: boolean | null
    cbc?: boolean | null
    creatinine_analysis?: boolean | null
    crp?: boolean | null
    esr?: boolean | null
    fobt?: boolean | null
    hematocrit?: boolean | null
    kidney_function_analysis?: boolean | null
    lipid_profile?: boolean | null
    liver_function_analysis?: boolean | null
    rf?: boolean | null
    serum_analysis?: boolean | null
    sr?: boolean | null
  }

  export type blood_analytical_serviceCreateOrConnectWithoutHospitalInput = {
    where: blood_analytical_serviceWhereUniqueInput
    create: XOR<blood_analytical_serviceCreateWithoutHospitalInput, blood_analytical_serviceUncheckedCreateWithoutHospitalInput>
  }

  export type bookingCreateWithoutHospitalInput = {
    id: string
    booked_at?: Date | string
    name?: string | null
    sex: booking_sex
    bed_type: booking_bed_type
    booked_for?: booking_booked_for | null
    cancelled_at?: Date | string | null
    status: booking_status
    remarks?: string | null
    last_updated?: Date | string
    user: userCreateNestedOneWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutHospitalInput = {
    id: string
    booked_at?: Date | string
    mobile_no: string
    name?: string | null
    sex: booking_sex
    bed_type: booking_bed_type
    booked_for?: booking_booked_for | null
    cancelled_at?: Date | string | null
    status: booking_status
    remarks?: string | null
    last_updated?: Date | string
  }

  export type bookingCreateOrConnectWithoutHospitalInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutHospitalInput, bookingUncheckedCreateWithoutHospitalInput>
  }

  export type bookingCreateManyHospitalInputEnvelope = {
    data: Enumerable<bookingCreateManyHospitalInput>
    skipDuplicates?: boolean
  }

  export type capacityCreateWithoutHospitalInput = {
    total_capacity: number
    ward?: number | null
    special_ward?: number | null
    cabin?: number | null
    vip_cabin?: number | null
    icu?: number | null
    ccu?: number | null
    hdu?: number | null
    hfncu?: number | null
    emergency?: number | null
    covid?: number | null
    extra?: number | null
  }

  export type capacityUncheckedCreateWithoutHospitalInput = {
    total_capacity: number
    ward?: number | null
    special_ward?: number | null
    cabin?: number | null
    vip_cabin?: number | null
    icu?: number | null
    ccu?: number | null
    hdu?: number | null
    hfncu?: number | null
    emergency?: number | null
    covid?: number | null
    extra?: number | null
  }

  export type capacityCreateOrConnectWithoutHospitalInput = {
    where: capacityWhereUniqueInput
    create: XOR<capacityCreateWithoutHospitalInput, capacityUncheckedCreateWithoutHospitalInput>
  }

  export type diagnostic_imaging_serviceCreateWithoutHospitalInput = {
    angiocardiography?: boolean | null
    angiography?: boolean | null
    cta?: boolean | null
    ct?: boolean | null
    coloscopy?: boolean | null
    cystoscopy?: boolean | null
    echocardiography?: boolean | null
    endoscopy?: boolean | null
    fluoroscopy?: boolean | null
    mra?: boolean | null
    mri?: boolean | null
    mrs?: boolean | null
    mammography?: boolean | null
    pet?: boolean | null
    pet_ct?: boolean | null
    spect?: boolean | null
    ultrasound?: boolean | null
    x_ray?: boolean | null
  }

  export type diagnostic_imaging_serviceUncheckedCreateWithoutHospitalInput = {
    angiocardiography?: boolean | null
    angiography?: boolean | null
    cta?: boolean | null
    ct?: boolean | null
    coloscopy?: boolean | null
    cystoscopy?: boolean | null
    echocardiography?: boolean | null
    endoscopy?: boolean | null
    fluoroscopy?: boolean | null
    mra?: boolean | null
    mri?: boolean | null
    mrs?: boolean | null
    mammography?: boolean | null
    pet?: boolean | null
    pet_ct?: boolean | null
    spect?: boolean | null
    ultrasound?: boolean | null
    x_ray?: boolean | null
  }

  export type diagnostic_imaging_serviceCreateOrConnectWithoutHospitalInput = {
    where: diagnostic_imaging_serviceWhereUniqueInput
    create: XOR<diagnostic_imaging_serviceCreateWithoutHospitalInput, diagnostic_imaging_serviceUncheckedCreateWithoutHospitalInput>
  }

  export type doctorCreateWithoutHospitalInput = {
    id: string
    name: string
    designation: string
    chamber?: string | null
    bio?: string | null
    joined_on?: Date | string
    schedule?: scheduleCreateNestedManyWithoutDoctorInput
  }

  export type doctorUncheckedCreateWithoutHospitalInput = {
    id: string
    name: string
    designation: string
    chamber?: string | null
    bio?: string | null
    joined_on?: Date | string
    schedule?: scheduleUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type doctorCreateOrConnectWithoutHospitalInput = {
    where: doctorWhereUniqueInput
    create: XOR<doctorCreateWithoutHospitalInput, doctorUncheckedCreateWithoutHospitalInput>
  }

  export type doctorCreateManyHospitalInputEnvelope = {
    data: Enumerable<doctorCreateManyHospitalInput>
    skipDuplicates?: boolean
  }

  export type general_serviceCreateWithoutHospitalInput = {
    autopsy?: boolean | null
    biopsy?: boolean | null
    blood_bank?: boolean | null
    bronchoscopy?: boolean | null
    ecg?: boolean | null
    echocardiography?: boolean | null
    emg?: boolean | null
    laparoscopy?: boolean | null
    phonocardiography?: boolean | null
    urinalysis?: boolean | null
  }

  export type general_serviceUncheckedCreateWithoutHospitalInput = {
    autopsy?: boolean | null
    biopsy?: boolean | null
    blood_bank?: boolean | null
    bronchoscopy?: boolean | null
    ecg?: boolean | null
    echocardiography?: boolean | null
    emg?: boolean | null
    laparoscopy?: boolean | null
    phonocardiography?: boolean | null
    urinalysis?: boolean | null
  }

  export type general_serviceCreateOrConnectWithoutHospitalInput = {
    where: general_serviceWhereUniqueInput
    create: XOR<general_serviceCreateWithoutHospitalInput, general_serviceUncheckedCreateWithoutHospitalInput>
  }

  export type logCreateWithoutHospitalInput = {
    logged_at?: Date | string
    task: string
    role: log_role
    staff: staffCreateNestedOneWithoutLogInput
  }

  export type logUncheckedCreateWithoutHospitalInput = {
    logged_at?: Date | string
    task: string
    mobile_no: string
    role: log_role
  }

  export type logCreateOrConnectWithoutHospitalInput = {
    where: logWhereUniqueInput
    create: XOR<logCreateWithoutHospitalInput, logUncheckedCreateWithoutHospitalInput>
  }

  export type logCreateManyHospitalInputEnvelope = {
    data: Enumerable<logCreateManyHospitalInput>
    skipDuplicates?: boolean
  }

  export type staffCreateWithoutHospitalInput = {
    mobile_no: string
    password: string
    name: string
    email: string
    role: staff_role
    status: staff_status
    joined_on?: Date | string
    last_updated?: Date | string
    log?: logCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutHospitalInput = {
    mobile_no: string
    password: string
    name: string
    email: string
    role: staff_role
    status: staff_status
    joined_on?: Date | string
    last_updated?: Date | string
    log?: logUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutHospitalInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutHospitalInput, staffUncheckedCreateWithoutHospitalInput>
  }

  export type staffCreateManyHospitalInputEnvelope = {
    data: Enumerable<staffCreateManyHospitalInput>
    skipDuplicates?: boolean
  }

  export type vacant_bed_logCreateWithoutHospitalInput = {
    last_updated?: Date | string
    ward?: number | null
    special_ward?: number | null
    cabin?: number | null
    vip_cabin?: number | null
    icu?: number | null
    ccu?: number | null
    hdu?: number | null
    hfncu?: number | null
    emergency?: number | null
    covid?: number | null
    extra?: number | null
  }

  export type vacant_bed_logUncheckedCreateWithoutHospitalInput = {
    last_updated?: Date | string
    ward?: number | null
    special_ward?: number | null
    cabin?: number | null
    vip_cabin?: number | null
    icu?: number | null
    ccu?: number | null
    hdu?: number | null
    hfncu?: number | null
    emergency?: number | null
    covid?: number | null
    extra?: number | null
  }

  export type vacant_bed_logCreateOrConnectWithoutHospitalInput = {
    where: vacant_bed_logWhereUniqueInput
    create: XOR<vacant_bed_logCreateWithoutHospitalInput, vacant_bed_logUncheckedCreateWithoutHospitalInput>
  }

  export type vacant_bed_logCreateManyHospitalInputEnvelope = {
    data: Enumerable<vacant_bed_logCreateManyHospitalInput>
    skipDuplicates?: boolean
  }

  export type addressUpsertWithoutHospitalInput = {
    update: XOR<addressUpdateWithoutHospitalInput, addressUncheckedUpdateWithoutHospitalInput>
    create: XOR<addressCreateWithoutHospitalInput, addressUncheckedCreateWithoutHospitalInput>
  }

  export type addressUpdateWithoutHospitalInput = {
    address?: StringFieldUpdateOperationsInput | string
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
  }

  export type addressUncheckedUpdateWithoutHospitalInput = {
    address?: StringFieldUpdateOperationsInput | string
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_no?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
  }

  export type amenityUpsertWithoutHospitalInput = {
    update: XOR<amenityUpdateWithoutHospitalInput, amenityUncheckedUpdateWithoutHospitalInput>
    create: XOR<amenityCreateWithoutHospitalInput, amenityUncheckedCreateWithoutHospitalInput>
  }

  export type amenityUpdateWithoutHospitalInput = {
    atm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    baby_corner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cafeteria?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gift_shop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    locker?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pharmacy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prayer_area?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wheelchair?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wifi?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type amenityUncheckedUpdateWithoutHospitalInput = {
    atm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    baby_corner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cafeteria?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gift_shop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    locker?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pharmacy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prayer_area?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wheelchair?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wifi?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type blood_analytical_serviceUpsertWithoutHospitalInput = {
    update: XOR<blood_analytical_serviceUpdateWithoutHospitalInput, blood_analytical_serviceUncheckedUpdateWithoutHospitalInput>
    create: XOR<blood_analytical_serviceCreateWithoutHospitalInput, blood_analytical_serviceUncheckedCreateWithoutHospitalInput>
  }

  export type blood_analytical_serviceUpdateWithoutHospitalInput = {
    antibody_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cbc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creatinine_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    crp?: NullableBoolFieldUpdateOperationsInput | boolean | null
    esr?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fobt?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hematocrit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kidney_function_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lipid_profile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liver_function_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rf?: NullableBoolFieldUpdateOperationsInput | boolean | null
    serum_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sr?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type blood_analytical_serviceUncheckedUpdateWithoutHospitalInput = {
    antibody_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cbc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creatinine_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    crp?: NullableBoolFieldUpdateOperationsInput | boolean | null
    esr?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fobt?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hematocrit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    kidney_function_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lipid_profile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liver_function_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rf?: NullableBoolFieldUpdateOperationsInput | boolean | null
    serum_analysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sr?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type bookingUpsertWithWhereUniqueWithoutHospitalInput = {
    where: bookingWhereUniqueInput
    update: XOR<bookingUpdateWithoutHospitalInput, bookingUncheckedUpdateWithoutHospitalInput>
    create: XOR<bookingCreateWithoutHospitalInput, bookingUncheckedCreateWithoutHospitalInput>
  }

  export type bookingUpdateWithWhereUniqueWithoutHospitalInput = {
    where: bookingWhereUniqueInput
    data: XOR<bookingUpdateWithoutHospitalInput, bookingUncheckedUpdateWithoutHospitalInput>
  }

  export type bookingUpdateManyWithWhereWithoutHospitalInput = {
    where: bookingScalarWhereInput
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutBookingInput>
  }

  export type bookingScalarWhereInput = {
    AND?: Enumerable<bookingScalarWhereInput>
    OR?: Enumerable<bookingScalarWhereInput>
    NOT?: Enumerable<bookingScalarWhereInput>
    id?: StringFilter | string
    booked_at?: DateTimeFilter | Date | string
    mobile_no?: StringFilter | string
    name?: StringNullableFilter | string | null
    sex?: Enumbooking_sexFilter | booking_sex
    bed_type?: Enumbooking_bed_typeFilter | booking_bed_type
    booked_for?: Enumbooking_booked_forNullableFilter | booking_booked_for | null
    cancelled_at?: DateTimeNullableFilter | Date | string | null
    registration_no?: StringFilter | string
    status?: Enumbooking_statusFilter | booking_status
    remarks?: StringNullableFilter | string | null
    last_updated?: DateTimeFilter | Date | string
  }

  export type capacityUpsertWithoutHospitalInput = {
    update: XOR<capacityUpdateWithoutHospitalInput, capacityUncheckedUpdateWithoutHospitalInput>
    create: XOR<capacityCreateWithoutHospitalInput, capacityUncheckedCreateWithoutHospitalInput>
  }

  export type capacityUpdateWithoutHospitalInput = {
    total_capacity?: IntFieldUpdateOperationsInput | number
    ward?: NullableIntFieldUpdateOperationsInput | number | null
    special_ward?: NullableIntFieldUpdateOperationsInput | number | null
    cabin?: NullableIntFieldUpdateOperationsInput | number | null
    vip_cabin?: NullableIntFieldUpdateOperationsInput | number | null
    icu?: NullableIntFieldUpdateOperationsInput | number | null
    ccu?: NullableIntFieldUpdateOperationsInput | number | null
    hdu?: NullableIntFieldUpdateOperationsInput | number | null
    hfncu?: NullableIntFieldUpdateOperationsInput | number | null
    emergency?: NullableIntFieldUpdateOperationsInput | number | null
    covid?: NullableIntFieldUpdateOperationsInput | number | null
    extra?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type capacityUncheckedUpdateWithoutHospitalInput = {
    total_capacity?: IntFieldUpdateOperationsInput | number
    ward?: NullableIntFieldUpdateOperationsInput | number | null
    special_ward?: NullableIntFieldUpdateOperationsInput | number | null
    cabin?: NullableIntFieldUpdateOperationsInput | number | null
    vip_cabin?: NullableIntFieldUpdateOperationsInput | number | null
    icu?: NullableIntFieldUpdateOperationsInput | number | null
    ccu?: NullableIntFieldUpdateOperationsInput | number | null
    hdu?: NullableIntFieldUpdateOperationsInput | number | null
    hfncu?: NullableIntFieldUpdateOperationsInput | number | null
    emergency?: NullableIntFieldUpdateOperationsInput | number | null
    covid?: NullableIntFieldUpdateOperationsInput | number | null
    extra?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type diagnostic_imaging_serviceUpsertWithoutHospitalInput = {
    update: XOR<diagnostic_imaging_serviceUpdateWithoutHospitalInput, diagnostic_imaging_serviceUncheckedUpdateWithoutHospitalInput>
    create: XOR<diagnostic_imaging_serviceCreateWithoutHospitalInput, diagnostic_imaging_serviceUncheckedCreateWithoutHospitalInput>
  }

  export type diagnostic_imaging_serviceUpdateWithoutHospitalInput = {
    angiocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    angiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cta?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    coloscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cystoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    echocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    endoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fluoroscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mra?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mri?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mrs?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mammography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pet_ct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    spect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ultrasound?: NullableBoolFieldUpdateOperationsInput | boolean | null
    x_ray?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type diagnostic_imaging_serviceUncheckedUpdateWithoutHospitalInput = {
    angiocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    angiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cta?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    coloscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cystoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    echocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    endoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fluoroscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mra?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mri?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mrs?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mammography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pet_ct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    spect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ultrasound?: NullableBoolFieldUpdateOperationsInput | boolean | null
    x_ray?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type doctorUpsertWithWhereUniqueWithoutHospitalInput = {
    where: doctorWhereUniqueInput
    update: XOR<doctorUpdateWithoutHospitalInput, doctorUncheckedUpdateWithoutHospitalInput>
    create: XOR<doctorCreateWithoutHospitalInput, doctorUncheckedCreateWithoutHospitalInput>
  }

  export type doctorUpdateWithWhereUniqueWithoutHospitalInput = {
    where: doctorWhereUniqueInput
    data: XOR<doctorUpdateWithoutHospitalInput, doctorUncheckedUpdateWithoutHospitalInput>
  }

  export type doctorUpdateManyWithWhereWithoutHospitalInput = {
    where: doctorScalarWhereInput
    data: XOR<doctorUpdateManyMutationInput, doctorUncheckedUpdateManyWithoutDoctorInput>
  }

  export type doctorScalarWhereInput = {
    AND?: Enumerable<doctorScalarWhereInput>
    OR?: Enumerable<doctorScalarWhereInput>
    NOT?: Enumerable<doctorScalarWhereInput>
    id?: StringFilter | string
    registration_no?: StringFilter | string
    name?: StringFilter | string
    designation?: StringFilter | string
    chamber?: StringNullableFilter | string | null
    bio?: StringNullableFilter | string | null
    joined_on?: DateTimeFilter | Date | string
  }

  export type general_serviceUpsertWithoutHospitalInput = {
    update: XOR<general_serviceUpdateWithoutHospitalInput, general_serviceUncheckedUpdateWithoutHospitalInput>
    create: XOR<general_serviceCreateWithoutHospitalInput, general_serviceUncheckedCreateWithoutHospitalInput>
  }

  export type general_serviceUpdateWithoutHospitalInput = {
    autopsy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    biopsy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blood_bank?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bronchoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ecg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    echocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    laparoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phonocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urinalysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type general_serviceUncheckedUpdateWithoutHospitalInput = {
    autopsy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    biopsy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blood_bank?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bronchoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ecg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    echocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    laparoscopy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    phonocardiography?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urinalysis?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type logUpsertWithWhereUniqueWithoutHospitalInput = {
    where: logWhereUniqueInput
    update: XOR<logUpdateWithoutHospitalInput, logUncheckedUpdateWithoutHospitalInput>
    create: XOR<logCreateWithoutHospitalInput, logUncheckedCreateWithoutHospitalInput>
  }

  export type logUpdateWithWhereUniqueWithoutHospitalInput = {
    where: logWhereUniqueInput
    data: XOR<logUpdateWithoutHospitalInput, logUncheckedUpdateWithoutHospitalInput>
  }

  export type logUpdateManyWithWhereWithoutHospitalInput = {
    where: logScalarWhereInput
    data: XOR<logUpdateManyMutationInput, logUncheckedUpdateManyWithoutLogInput>
  }

  export type logScalarWhereInput = {
    AND?: Enumerable<logScalarWhereInput>
    OR?: Enumerable<logScalarWhereInput>
    NOT?: Enumerable<logScalarWhereInput>
    logged_at?: DateTimeFilter | Date | string
    registration_no?: StringFilter | string
    task?: StringFilter | string
    mobile_no?: StringFilter | string
    role?: Enumlog_roleFilter | log_role
  }

  export type staffUpsertWithWhereUniqueWithoutHospitalInput = {
    where: staffWhereUniqueInput
    update: XOR<staffUpdateWithoutHospitalInput, staffUncheckedUpdateWithoutHospitalInput>
    create: XOR<staffCreateWithoutHospitalInput, staffUncheckedCreateWithoutHospitalInput>
  }

  export type staffUpdateWithWhereUniqueWithoutHospitalInput = {
    where: staffWhereUniqueInput
    data: XOR<staffUpdateWithoutHospitalInput, staffUncheckedUpdateWithoutHospitalInput>
  }

  export type staffUpdateManyWithWhereWithoutHospitalInput = {
    where: staffScalarWhereInput
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyWithoutStaffInput>
  }

  export type staffScalarWhereInput = {
    AND?: Enumerable<staffScalarWhereInput>
    OR?: Enumerable<staffScalarWhereInput>
    NOT?: Enumerable<staffScalarWhereInput>
    mobile_no?: StringFilter | string
    password?: StringFilter | string
    name?: StringFilter | string
    email?: StringFilter | string
    role?: Enumstaff_roleFilter | staff_role
    status?: Enumstaff_statusFilter | staff_status
    registration_no?: StringFilter | string
    joined_on?: DateTimeFilter | Date | string
    last_updated?: DateTimeFilter | Date | string
  }

  export type vacant_bed_logUpsertWithWhereUniqueWithoutHospitalInput = {
    where: vacant_bed_logWhereUniqueInput
    update: XOR<vacant_bed_logUpdateWithoutHospitalInput, vacant_bed_logUncheckedUpdateWithoutHospitalInput>
    create: XOR<vacant_bed_logCreateWithoutHospitalInput, vacant_bed_logUncheckedCreateWithoutHospitalInput>
  }

  export type vacant_bed_logUpdateWithWhereUniqueWithoutHospitalInput = {
    where: vacant_bed_logWhereUniqueInput
    data: XOR<vacant_bed_logUpdateWithoutHospitalInput, vacant_bed_logUncheckedUpdateWithoutHospitalInput>
  }

  export type vacant_bed_logUpdateManyWithWhereWithoutHospitalInput = {
    where: vacant_bed_logScalarWhereInput
    data: XOR<vacant_bed_logUpdateManyMutationInput, vacant_bed_logUncheckedUpdateManyWithoutVacant_bed_logInput>
  }

  export type vacant_bed_logScalarWhereInput = {
    AND?: Enumerable<vacant_bed_logScalarWhereInput>
    OR?: Enumerable<vacant_bed_logScalarWhereInput>
    NOT?: Enumerable<vacant_bed_logScalarWhereInput>
    registration_no?: StringFilter | string
    last_updated?: DateTimeFilter | Date | string
    ward?: IntNullableFilter | number | null
    special_ward?: IntNullableFilter | number | null
    cabin?: IntNullableFilter | number | null
    vip_cabin?: IntNullableFilter | number | null
    icu?: IntNullableFilter | number | null
    ccu?: IntNullableFilter | number | null
    hdu?: IntNullableFilter | number | null
    hfncu?: IntNullableFilter | number | null
    emergency?: IntNullableFilter | number | null
    covid?: IntNullableFilter | number | null
    extra?: IntNullableFilter | number | null
  }

  export type staffCreateWithoutLogInput = {
    mobile_no: string
    password: string
    name: string
    email: string
    role: staff_role
    status: staff_status
    joined_on?: Date | string
    last_updated?: Date | string
    hospital: hospitalCreateNestedOneWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutLogInput = {
    mobile_no: string
    password: string
    name: string
    email: string
    role: staff_role
    status: staff_status
    registration_no: string
    joined_on?: Date | string
    last_updated?: Date | string
  }

  export type staffCreateOrConnectWithoutLogInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutLogInput, staffUncheckedCreateWithoutLogInput>
  }

  export type hospitalCreateWithoutLogInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressCreateNestedOneWithoutHospitalInput
    amenity?: amenityCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceCreateNestedOneWithoutHospitalInput
    booking?: bookingCreateNestedManyWithoutHospitalInput
    capacity?: capacityCreateNestedOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceCreateNestedOneWithoutHospitalInput
    doctor?: doctorCreateNestedManyWithoutHospitalInput
    general_service?: general_serviceCreateNestedOneWithoutHospitalInput
    staff?: staffCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logCreateNestedManyWithoutHospitalInput
  }

  export type hospitalUncheckedCreateWithoutLogInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressUncheckedCreateNestedOneWithoutHospitalInput
    amenity?: amenityUncheckedCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedCreateNestedOneWithoutHospitalInput
    booking?: bookingUncheckedCreateNestedManyWithoutHospitalInput
    capacity?: capacityUncheckedCreateNestedOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedCreateNestedOneWithoutHospitalInput
    doctor?: doctorUncheckedCreateNestedManyWithoutHospitalInput
    general_service?: general_serviceUncheckedCreateNestedOneWithoutHospitalInput
    staff?: staffUncheckedCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type hospitalCreateOrConnectWithoutLogInput = {
    where: hospitalWhereUniqueInput
    create: XOR<hospitalCreateWithoutLogInput, hospitalUncheckedCreateWithoutLogInput>
  }

  export type staffUpsertWithoutLogInput = {
    update: XOR<staffUpdateWithoutLogInput, staffUncheckedUpdateWithoutLogInput>
    create: XOR<staffCreateWithoutLogInput, staffUncheckedCreateWithoutLogInput>
  }

  export type staffUpdateWithoutLogInput = {
    mobile_no?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstaff_roleFieldUpdateOperationsInput | staff_role
    status?: Enumstaff_statusFieldUpdateOperationsInput | staff_status
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: hospitalUpdateOneRequiredWithoutStaffInput
  }

  export type staffUncheckedUpdateWithoutLogInput = {
    mobile_no?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstaff_roleFieldUpdateOperationsInput | staff_role
    status?: Enumstaff_statusFieldUpdateOperationsInput | staff_status
    registration_no?: StringFieldUpdateOperationsInput | string
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hospitalUpsertWithoutLogInput = {
    update: XOR<hospitalUpdateWithoutLogInput, hospitalUncheckedUpdateWithoutLogInput>
    create: XOR<hospitalCreateWithoutLogInput, hospitalUncheckedCreateWithoutLogInput>
  }

  export type hospitalUpdateWithoutLogInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUpdateOneWithoutHospitalInput
    amenity?: amenityUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUpdateOneWithoutHospitalInput
    booking?: bookingUpdateManyWithoutHospitalInput
    capacity?: capacityUpdateOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUpdateOneWithoutHospitalInput
    doctor?: doctorUpdateManyWithoutHospitalInput
    general_service?: general_serviceUpdateOneWithoutHospitalInput
    staff?: staffUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUpdateManyWithoutHospitalInput
  }

  export type hospitalUncheckedUpdateWithoutLogInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUncheckedUpdateOneWithoutHospitalInput
    amenity?: amenityUncheckedUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedUpdateOneWithoutHospitalInput
    booking?: bookingUncheckedUpdateManyWithoutHospitalInput
    capacity?: capacityUncheckedUpdateOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedUpdateOneWithoutHospitalInput
    doctor?: doctorUncheckedUpdateManyWithoutHospitalInput
    general_service?: general_serviceUncheckedUpdateOneWithoutHospitalInput
    staff?: staffUncheckedUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedUpdateManyWithoutHospitalInput
  }

  export type hospitalCreateWithoutStaffInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressCreateNestedOneWithoutHospitalInput
    amenity?: amenityCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceCreateNestedOneWithoutHospitalInput
    booking?: bookingCreateNestedManyWithoutHospitalInput
    capacity?: capacityCreateNestedOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceCreateNestedOneWithoutHospitalInput
    doctor?: doctorCreateNestedManyWithoutHospitalInput
    general_service?: general_serviceCreateNestedOneWithoutHospitalInput
    log?: logCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logCreateNestedManyWithoutHospitalInput
  }

  export type hospitalUncheckedCreateWithoutStaffInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressUncheckedCreateNestedOneWithoutHospitalInput
    amenity?: amenityUncheckedCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedCreateNestedOneWithoutHospitalInput
    booking?: bookingUncheckedCreateNestedManyWithoutHospitalInput
    capacity?: capacityUncheckedCreateNestedOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedCreateNestedOneWithoutHospitalInput
    doctor?: doctorUncheckedCreateNestedManyWithoutHospitalInput
    general_service?: general_serviceUncheckedCreateNestedOneWithoutHospitalInput
    log?: logUncheckedCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type hospitalCreateOrConnectWithoutStaffInput = {
    where: hospitalWhereUniqueInput
    create: XOR<hospitalCreateWithoutStaffInput, hospitalUncheckedCreateWithoutStaffInput>
  }

  export type logCreateWithoutStaffInput = {
    logged_at?: Date | string
    task: string
    role: log_role
    hospital: hospitalCreateNestedOneWithoutLogInput
  }

  export type logUncheckedCreateWithoutStaffInput = {
    logged_at?: Date | string
    registration_no: string
    task: string
    role: log_role
  }

  export type logCreateOrConnectWithoutStaffInput = {
    where: logWhereUniqueInput
    create: XOR<logCreateWithoutStaffInput, logUncheckedCreateWithoutStaffInput>
  }

  export type logCreateManyStaffInputEnvelope = {
    data: Enumerable<logCreateManyStaffInput>
    skipDuplicates?: boolean
  }

  export type hospitalUpsertWithoutStaffInput = {
    update: XOR<hospitalUpdateWithoutStaffInput, hospitalUncheckedUpdateWithoutStaffInput>
    create: XOR<hospitalCreateWithoutStaffInput, hospitalUncheckedCreateWithoutStaffInput>
  }

  export type hospitalUpdateWithoutStaffInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUpdateOneWithoutHospitalInput
    amenity?: amenityUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUpdateOneWithoutHospitalInput
    booking?: bookingUpdateManyWithoutHospitalInput
    capacity?: capacityUpdateOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUpdateOneWithoutHospitalInput
    doctor?: doctorUpdateManyWithoutHospitalInput
    general_service?: general_serviceUpdateOneWithoutHospitalInput
    log?: logUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUpdateManyWithoutHospitalInput
  }

  export type hospitalUncheckedUpdateWithoutStaffInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUncheckedUpdateOneWithoutHospitalInput
    amenity?: amenityUncheckedUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedUpdateOneWithoutHospitalInput
    booking?: bookingUncheckedUpdateManyWithoutHospitalInput
    capacity?: capacityUncheckedUpdateOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedUpdateOneWithoutHospitalInput
    doctor?: doctorUncheckedUpdateManyWithoutHospitalInput
    general_service?: general_serviceUncheckedUpdateOneWithoutHospitalInput
    log?: logUncheckedUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedUpdateManyWithoutHospitalInput
  }

  export type logUpsertWithWhereUniqueWithoutStaffInput = {
    where: logWhereUniqueInput
    update: XOR<logUpdateWithoutStaffInput, logUncheckedUpdateWithoutStaffInput>
    create: XOR<logCreateWithoutStaffInput, logUncheckedCreateWithoutStaffInput>
  }

  export type logUpdateWithWhereUniqueWithoutStaffInput = {
    where: logWhereUniqueInput
    data: XOR<logUpdateWithoutStaffInput, logUncheckedUpdateWithoutStaffInput>
  }

  export type logUpdateManyWithWhereWithoutStaffInput = {
    where: logScalarWhereInput
    data: XOR<logUpdateManyMutationInput, logUncheckedUpdateManyWithoutLogInput>
  }

  export type bookingCreateWithoutUserInput = {
    id: string
    booked_at?: Date | string
    name?: string | null
    sex: booking_sex
    bed_type: booking_bed_type
    booked_for?: booking_booked_for | null
    cancelled_at?: Date | string | null
    status: booking_status
    remarks?: string | null
    last_updated?: Date | string
    hospital: hospitalCreateNestedOneWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutUserInput = {
    id: string
    booked_at?: Date | string
    name?: string | null
    sex: booking_sex
    bed_type: booking_bed_type
    booked_for?: booking_booked_for | null
    cancelled_at?: Date | string | null
    registration_no: string
    status: booking_status
    remarks?: string | null
    last_updated?: Date | string
  }

  export type bookingCreateOrConnectWithoutUserInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
  }

  export type bookingCreateManyUserInputEnvelope = {
    data: Enumerable<bookingCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type bookingUpsertWithWhereUniqueWithoutUserInput = {
    where: bookingWhereUniqueInput
    update: XOR<bookingUpdateWithoutUserInput, bookingUncheckedUpdateWithoutUserInput>
    create: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
  }

  export type bookingUpdateWithWhereUniqueWithoutUserInput = {
    where: bookingWhereUniqueInput
    data: XOR<bookingUpdateWithoutUserInput, bookingUncheckedUpdateWithoutUserInput>
  }

  export type bookingUpdateManyWithWhereWithoutUserInput = {
    where: bookingScalarWhereInput
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutBookingInput>
  }

  export type hospitalCreateWithoutVacant_bed_logInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressCreateNestedOneWithoutHospitalInput
    amenity?: amenityCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceCreateNestedOneWithoutHospitalInput
    booking?: bookingCreateNestedManyWithoutHospitalInput
    capacity?: capacityCreateNestedOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceCreateNestedOneWithoutHospitalInput
    doctor?: doctorCreateNestedManyWithoutHospitalInput
    general_service?: general_serviceCreateNestedOneWithoutHospitalInput
    log?: logCreateNestedManyWithoutHospitalInput
    staff?: staffCreateNestedManyWithoutHospitalInput
  }

  export type hospitalUncheckedCreateWithoutVacant_bed_logInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressUncheckedCreateNestedOneWithoutHospitalInput
    amenity?: amenityUncheckedCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedCreateNestedOneWithoutHospitalInput
    booking?: bookingUncheckedCreateNestedManyWithoutHospitalInput
    capacity?: capacityUncheckedCreateNestedOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedCreateNestedOneWithoutHospitalInput
    doctor?: doctorUncheckedCreateNestedManyWithoutHospitalInput
    general_service?: general_serviceUncheckedCreateNestedOneWithoutHospitalInput
    log?: logUncheckedCreateNestedManyWithoutHospitalInput
    staff?: staffUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type hospitalCreateOrConnectWithoutVacant_bed_logInput = {
    where: hospitalWhereUniqueInput
    create: XOR<hospitalCreateWithoutVacant_bed_logInput, hospitalUncheckedCreateWithoutVacant_bed_logInput>
  }

  export type hospitalUpsertWithoutVacant_bed_logInput = {
    update: XOR<hospitalUpdateWithoutVacant_bed_logInput, hospitalUncheckedUpdateWithoutVacant_bed_logInput>
    create: XOR<hospitalCreateWithoutVacant_bed_logInput, hospitalUncheckedCreateWithoutVacant_bed_logInput>
  }

  export type hospitalUpdateWithoutVacant_bed_logInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUpdateOneWithoutHospitalInput
    amenity?: amenityUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUpdateOneWithoutHospitalInput
    booking?: bookingUpdateManyWithoutHospitalInput
    capacity?: capacityUpdateOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUpdateOneWithoutHospitalInput
    doctor?: doctorUpdateManyWithoutHospitalInput
    general_service?: general_serviceUpdateOneWithoutHospitalInput
    log?: logUpdateManyWithoutHospitalInput
    staff?: staffUpdateManyWithoutHospitalInput
  }

  export type hospitalUncheckedUpdateWithoutVacant_bed_logInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUncheckedUpdateOneWithoutHospitalInput
    amenity?: amenityUncheckedUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedUpdateOneWithoutHospitalInput
    booking?: bookingUncheckedUpdateManyWithoutHospitalInput
    capacity?: capacityUncheckedUpdateOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedUpdateOneWithoutHospitalInput
    doctor?: doctorUncheckedUpdateManyWithoutHospitalInput
    general_service?: general_serviceUncheckedUpdateOneWithoutHospitalInput
    log?: logUncheckedUpdateManyWithoutHospitalInput
    staff?: staffUncheckedUpdateManyWithoutHospitalInput
  }

  export type hospitalCreateWithoutAmenityInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceCreateNestedOneWithoutHospitalInput
    booking?: bookingCreateNestedManyWithoutHospitalInput
    capacity?: capacityCreateNestedOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceCreateNestedOneWithoutHospitalInput
    doctor?: doctorCreateNestedManyWithoutHospitalInput
    general_service?: general_serviceCreateNestedOneWithoutHospitalInput
    log?: logCreateNestedManyWithoutHospitalInput
    staff?: staffCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logCreateNestedManyWithoutHospitalInput
  }

  export type hospitalUncheckedCreateWithoutAmenityInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressUncheckedCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedCreateNestedOneWithoutHospitalInput
    booking?: bookingUncheckedCreateNestedManyWithoutHospitalInput
    capacity?: capacityUncheckedCreateNestedOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedCreateNestedOneWithoutHospitalInput
    doctor?: doctorUncheckedCreateNestedManyWithoutHospitalInput
    general_service?: general_serviceUncheckedCreateNestedOneWithoutHospitalInput
    log?: logUncheckedCreateNestedManyWithoutHospitalInput
    staff?: staffUncheckedCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type hospitalCreateOrConnectWithoutAmenityInput = {
    where: hospitalWhereUniqueInput
    create: XOR<hospitalCreateWithoutAmenityInput, hospitalUncheckedCreateWithoutAmenityInput>
  }

  export type hospitalUpsertWithoutAmenityInput = {
    update: XOR<hospitalUpdateWithoutAmenityInput, hospitalUncheckedUpdateWithoutAmenityInput>
    create: XOR<hospitalCreateWithoutAmenityInput, hospitalUncheckedCreateWithoutAmenityInput>
  }

  export type hospitalUpdateWithoutAmenityInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUpdateOneWithoutHospitalInput
    booking?: bookingUpdateManyWithoutHospitalInput
    capacity?: capacityUpdateOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUpdateOneWithoutHospitalInput
    doctor?: doctorUpdateManyWithoutHospitalInput
    general_service?: general_serviceUpdateOneWithoutHospitalInput
    log?: logUpdateManyWithoutHospitalInput
    staff?: staffUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUpdateManyWithoutHospitalInput
  }

  export type hospitalUncheckedUpdateWithoutAmenityInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUncheckedUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedUpdateOneWithoutHospitalInput
    booking?: bookingUncheckedUpdateManyWithoutHospitalInput
    capacity?: capacityUncheckedUpdateOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedUpdateOneWithoutHospitalInput
    doctor?: doctorUncheckedUpdateManyWithoutHospitalInput
    general_service?: general_serviceUncheckedUpdateOneWithoutHospitalInput
    log?: logUncheckedUpdateManyWithoutHospitalInput
    staff?: staffUncheckedUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedUpdateManyWithoutHospitalInput
  }

  export type hospitalCreateWithoutBlood_analytical_serviceInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressCreateNestedOneWithoutHospitalInput
    amenity?: amenityCreateNestedOneWithoutHospitalInput
    booking?: bookingCreateNestedManyWithoutHospitalInput
    capacity?: capacityCreateNestedOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceCreateNestedOneWithoutHospitalInput
    doctor?: doctorCreateNestedManyWithoutHospitalInput
    general_service?: general_serviceCreateNestedOneWithoutHospitalInput
    log?: logCreateNestedManyWithoutHospitalInput
    staff?: staffCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logCreateNestedManyWithoutHospitalInput
  }

  export type hospitalUncheckedCreateWithoutBlood_analytical_serviceInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressUncheckedCreateNestedOneWithoutHospitalInput
    amenity?: amenityUncheckedCreateNestedOneWithoutHospitalInput
    booking?: bookingUncheckedCreateNestedManyWithoutHospitalInput
    capacity?: capacityUncheckedCreateNestedOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedCreateNestedOneWithoutHospitalInput
    doctor?: doctorUncheckedCreateNestedManyWithoutHospitalInput
    general_service?: general_serviceUncheckedCreateNestedOneWithoutHospitalInput
    log?: logUncheckedCreateNestedManyWithoutHospitalInput
    staff?: staffUncheckedCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type hospitalCreateOrConnectWithoutBlood_analytical_serviceInput = {
    where: hospitalWhereUniqueInput
    create: XOR<hospitalCreateWithoutBlood_analytical_serviceInput, hospitalUncheckedCreateWithoutBlood_analytical_serviceInput>
  }

  export type hospitalUpsertWithoutBlood_analytical_serviceInput = {
    update: XOR<hospitalUpdateWithoutBlood_analytical_serviceInput, hospitalUncheckedUpdateWithoutBlood_analytical_serviceInput>
    create: XOR<hospitalCreateWithoutBlood_analytical_serviceInput, hospitalUncheckedCreateWithoutBlood_analytical_serviceInput>
  }

  export type hospitalUpdateWithoutBlood_analytical_serviceInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUpdateOneWithoutHospitalInput
    amenity?: amenityUpdateOneWithoutHospitalInput
    booking?: bookingUpdateManyWithoutHospitalInput
    capacity?: capacityUpdateOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUpdateOneWithoutHospitalInput
    doctor?: doctorUpdateManyWithoutHospitalInput
    general_service?: general_serviceUpdateOneWithoutHospitalInput
    log?: logUpdateManyWithoutHospitalInput
    staff?: staffUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUpdateManyWithoutHospitalInput
  }

  export type hospitalUncheckedUpdateWithoutBlood_analytical_serviceInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUncheckedUpdateOneWithoutHospitalInput
    amenity?: amenityUncheckedUpdateOneWithoutHospitalInput
    booking?: bookingUncheckedUpdateManyWithoutHospitalInput
    capacity?: capacityUncheckedUpdateOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedUpdateOneWithoutHospitalInput
    doctor?: doctorUncheckedUpdateManyWithoutHospitalInput
    general_service?: general_serviceUncheckedUpdateOneWithoutHospitalInput
    log?: logUncheckedUpdateManyWithoutHospitalInput
    staff?: staffUncheckedUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedUpdateManyWithoutHospitalInput
  }

  export type hospitalCreateWithoutDiagnostic_imaging_serviceInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressCreateNestedOneWithoutHospitalInput
    amenity?: amenityCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceCreateNestedOneWithoutHospitalInput
    booking?: bookingCreateNestedManyWithoutHospitalInput
    capacity?: capacityCreateNestedOneWithoutHospitalInput
    doctor?: doctorCreateNestedManyWithoutHospitalInput
    general_service?: general_serviceCreateNestedOneWithoutHospitalInput
    log?: logCreateNestedManyWithoutHospitalInput
    staff?: staffCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logCreateNestedManyWithoutHospitalInput
  }

  export type hospitalUncheckedCreateWithoutDiagnostic_imaging_serviceInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressUncheckedCreateNestedOneWithoutHospitalInput
    amenity?: amenityUncheckedCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedCreateNestedOneWithoutHospitalInput
    booking?: bookingUncheckedCreateNestedManyWithoutHospitalInput
    capacity?: capacityUncheckedCreateNestedOneWithoutHospitalInput
    doctor?: doctorUncheckedCreateNestedManyWithoutHospitalInput
    general_service?: general_serviceUncheckedCreateNestedOneWithoutHospitalInput
    log?: logUncheckedCreateNestedManyWithoutHospitalInput
    staff?: staffUncheckedCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type hospitalCreateOrConnectWithoutDiagnostic_imaging_serviceInput = {
    where: hospitalWhereUniqueInput
    create: XOR<hospitalCreateWithoutDiagnostic_imaging_serviceInput, hospitalUncheckedCreateWithoutDiagnostic_imaging_serviceInput>
  }

  export type hospitalUpsertWithoutDiagnostic_imaging_serviceInput = {
    update: XOR<hospitalUpdateWithoutDiagnostic_imaging_serviceInput, hospitalUncheckedUpdateWithoutDiagnostic_imaging_serviceInput>
    create: XOR<hospitalCreateWithoutDiagnostic_imaging_serviceInput, hospitalUncheckedCreateWithoutDiagnostic_imaging_serviceInput>
  }

  export type hospitalUpdateWithoutDiagnostic_imaging_serviceInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUpdateOneWithoutHospitalInput
    amenity?: amenityUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUpdateOneWithoutHospitalInput
    booking?: bookingUpdateManyWithoutHospitalInput
    capacity?: capacityUpdateOneWithoutHospitalInput
    doctor?: doctorUpdateManyWithoutHospitalInput
    general_service?: general_serviceUpdateOneWithoutHospitalInput
    log?: logUpdateManyWithoutHospitalInput
    staff?: staffUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUpdateManyWithoutHospitalInput
  }

  export type hospitalUncheckedUpdateWithoutDiagnostic_imaging_serviceInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUncheckedUpdateOneWithoutHospitalInput
    amenity?: amenityUncheckedUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedUpdateOneWithoutHospitalInput
    booking?: bookingUncheckedUpdateManyWithoutHospitalInput
    capacity?: capacityUncheckedUpdateOneWithoutHospitalInput
    doctor?: doctorUncheckedUpdateManyWithoutHospitalInput
    general_service?: general_serviceUncheckedUpdateOneWithoutHospitalInput
    log?: logUncheckedUpdateManyWithoutHospitalInput
    staff?: staffUncheckedUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedUpdateManyWithoutHospitalInput
  }

  export type hospitalCreateWithoutDoctorInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressCreateNestedOneWithoutHospitalInput
    amenity?: amenityCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceCreateNestedOneWithoutHospitalInput
    booking?: bookingCreateNestedManyWithoutHospitalInput
    capacity?: capacityCreateNestedOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceCreateNestedOneWithoutHospitalInput
    general_service?: general_serviceCreateNestedOneWithoutHospitalInput
    log?: logCreateNestedManyWithoutHospitalInput
    staff?: staffCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logCreateNestedManyWithoutHospitalInput
  }

  export type hospitalUncheckedCreateWithoutDoctorInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressUncheckedCreateNestedOneWithoutHospitalInput
    amenity?: amenityUncheckedCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedCreateNestedOneWithoutHospitalInput
    booking?: bookingUncheckedCreateNestedManyWithoutHospitalInput
    capacity?: capacityUncheckedCreateNestedOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedCreateNestedOneWithoutHospitalInput
    general_service?: general_serviceUncheckedCreateNestedOneWithoutHospitalInput
    log?: logUncheckedCreateNestedManyWithoutHospitalInput
    staff?: staffUncheckedCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type hospitalCreateOrConnectWithoutDoctorInput = {
    where: hospitalWhereUniqueInput
    create: XOR<hospitalCreateWithoutDoctorInput, hospitalUncheckedCreateWithoutDoctorInput>
  }

  export type scheduleCreateWithoutDoctorInput = {
    day: schedule_day
    start_time: Date | string
    end_time: Date | string
    last_updated?: Date | string
  }

  export type scheduleUncheckedCreateWithoutDoctorInput = {
    day: schedule_day
    start_time: Date | string
    end_time: Date | string
    last_updated?: Date | string
  }

  export type scheduleCreateOrConnectWithoutDoctorInput = {
    where: scheduleWhereUniqueInput
    create: XOR<scheduleCreateWithoutDoctorInput, scheduleUncheckedCreateWithoutDoctorInput>
  }

  export type scheduleCreateManyDoctorInputEnvelope = {
    data: Enumerable<scheduleCreateManyDoctorInput>
    skipDuplicates?: boolean
  }

  export type hospitalUpsertWithoutDoctorInput = {
    update: XOR<hospitalUpdateWithoutDoctorInput, hospitalUncheckedUpdateWithoutDoctorInput>
    create: XOR<hospitalCreateWithoutDoctorInput, hospitalUncheckedCreateWithoutDoctorInput>
  }

  export type hospitalUpdateWithoutDoctorInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUpdateOneWithoutHospitalInput
    amenity?: amenityUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUpdateOneWithoutHospitalInput
    booking?: bookingUpdateManyWithoutHospitalInput
    capacity?: capacityUpdateOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUpdateOneWithoutHospitalInput
    general_service?: general_serviceUpdateOneWithoutHospitalInput
    log?: logUpdateManyWithoutHospitalInput
    staff?: staffUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUpdateManyWithoutHospitalInput
  }

  export type hospitalUncheckedUpdateWithoutDoctorInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUncheckedUpdateOneWithoutHospitalInput
    amenity?: amenityUncheckedUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedUpdateOneWithoutHospitalInput
    booking?: bookingUncheckedUpdateManyWithoutHospitalInput
    capacity?: capacityUncheckedUpdateOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedUpdateOneWithoutHospitalInput
    general_service?: general_serviceUncheckedUpdateOneWithoutHospitalInput
    log?: logUncheckedUpdateManyWithoutHospitalInput
    staff?: staffUncheckedUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedUpdateManyWithoutHospitalInput
  }

  export type scheduleUpsertWithWhereUniqueWithoutDoctorInput = {
    where: scheduleWhereUniqueInput
    update: XOR<scheduleUpdateWithoutDoctorInput, scheduleUncheckedUpdateWithoutDoctorInput>
    create: XOR<scheduleCreateWithoutDoctorInput, scheduleUncheckedCreateWithoutDoctorInput>
  }

  export type scheduleUpdateWithWhereUniqueWithoutDoctorInput = {
    where: scheduleWhereUniqueInput
    data: XOR<scheduleUpdateWithoutDoctorInput, scheduleUncheckedUpdateWithoutDoctorInput>
  }

  export type scheduleUpdateManyWithWhereWithoutDoctorInput = {
    where: scheduleScalarWhereInput
    data: XOR<scheduleUpdateManyMutationInput, scheduleUncheckedUpdateManyWithoutScheduleInput>
  }

  export type scheduleScalarWhereInput = {
    AND?: Enumerable<scheduleScalarWhereInput>
    OR?: Enumerable<scheduleScalarWhereInput>
    NOT?: Enumerable<scheduleScalarWhereInput>
    id?: StringFilter | string
    day?: Enumschedule_dayFilter | schedule_day
    start_time?: DateTimeFilter | Date | string
    end_time?: DateTimeFilter | Date | string
    last_updated?: DateTimeFilter | Date | string
  }

  export type hospitalCreateWithoutGeneral_serviceInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressCreateNestedOneWithoutHospitalInput
    amenity?: amenityCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceCreateNestedOneWithoutHospitalInput
    booking?: bookingCreateNestedManyWithoutHospitalInput
    capacity?: capacityCreateNestedOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceCreateNestedOneWithoutHospitalInput
    doctor?: doctorCreateNestedManyWithoutHospitalInput
    log?: logCreateNestedManyWithoutHospitalInput
    staff?: staffCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logCreateNestedManyWithoutHospitalInput
  }

  export type hospitalUncheckedCreateWithoutGeneral_serviceInput = {
    registration_no: string
    hospital_name: string
    description?: string | null
    hospital_type: hospital_hospital_type
    bed_type: string
    image_source: string
    website?: string | null
    joined_on?: Date | string
    status?: hospital_status
    address?: addressUncheckedCreateNestedOneWithoutHospitalInput
    amenity?: amenityUncheckedCreateNestedOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedCreateNestedOneWithoutHospitalInput
    booking?: bookingUncheckedCreateNestedManyWithoutHospitalInput
    capacity?: capacityUncheckedCreateNestedOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedCreateNestedOneWithoutHospitalInput
    doctor?: doctorUncheckedCreateNestedManyWithoutHospitalInput
    log?: logUncheckedCreateNestedManyWithoutHospitalInput
    staff?: staffUncheckedCreateNestedManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type hospitalCreateOrConnectWithoutGeneral_serviceInput = {
    where: hospitalWhereUniqueInput
    create: XOR<hospitalCreateWithoutGeneral_serviceInput, hospitalUncheckedCreateWithoutGeneral_serviceInput>
  }

  export type hospitalUpsertWithoutGeneral_serviceInput = {
    update: XOR<hospitalUpdateWithoutGeneral_serviceInput, hospitalUncheckedUpdateWithoutGeneral_serviceInput>
    create: XOR<hospitalCreateWithoutGeneral_serviceInput, hospitalUncheckedCreateWithoutGeneral_serviceInput>
  }

  export type hospitalUpdateWithoutGeneral_serviceInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUpdateOneWithoutHospitalInput
    amenity?: amenityUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUpdateOneWithoutHospitalInput
    booking?: bookingUpdateManyWithoutHospitalInput
    capacity?: capacityUpdateOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUpdateOneWithoutHospitalInput
    doctor?: doctorUpdateManyWithoutHospitalInput
    log?: logUpdateManyWithoutHospitalInput
    staff?: staffUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUpdateManyWithoutHospitalInput
  }

  export type hospitalUncheckedUpdateWithoutGeneral_serviceInput = {
    registration_no?: StringFieldUpdateOperationsInput | string
    hospital_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hospital_type?: Enumhospital_hospital_typeFieldUpdateOperationsInput | hospital_hospital_type
    bed_type?: StringFieldUpdateOperationsInput | string
    image_source?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumhospital_statusFieldUpdateOperationsInput | hospital_status
    address?: addressUncheckedUpdateOneWithoutHospitalInput
    amenity?: amenityUncheckedUpdateOneWithoutHospitalInput
    blood_analytical_service?: blood_analytical_serviceUncheckedUpdateOneWithoutHospitalInput
    booking?: bookingUncheckedUpdateManyWithoutHospitalInput
    capacity?: capacityUncheckedUpdateOneWithoutHospitalInput
    diagnostic_imaging_service?: diagnostic_imaging_serviceUncheckedUpdateOneWithoutHospitalInput
    doctor?: doctorUncheckedUpdateManyWithoutHospitalInput
    log?: logUncheckedUpdateManyWithoutHospitalInput
    staff?: staffUncheckedUpdateManyWithoutHospitalInput
    vacant_bed_log?: vacant_bed_logUncheckedUpdateManyWithoutHospitalInput
  }

  export type doctorCreateWithoutScheduleInput = {
    id: string
    name: string
    designation: string
    chamber?: string | null
    bio?: string | null
    joined_on?: Date | string
    hospital: hospitalCreateNestedOneWithoutDoctorInput
  }

  export type doctorUncheckedCreateWithoutScheduleInput = {
    id: string
    registration_no: string
    name: string
    designation: string
    chamber?: string | null
    bio?: string | null
    joined_on?: Date | string
  }

  export type doctorCreateOrConnectWithoutScheduleInput = {
    where: doctorWhereUniqueInput
    create: XOR<doctorCreateWithoutScheduleInput, doctorUncheckedCreateWithoutScheduleInput>
  }

  export type doctorUpsertWithoutScheduleInput = {
    update: XOR<doctorUpdateWithoutScheduleInput, doctorUncheckedUpdateWithoutScheduleInput>
    create: XOR<doctorCreateWithoutScheduleInput, doctorUncheckedCreateWithoutScheduleInput>
  }

  export type doctorUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    chamber?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: hospitalUpdateOneRequiredWithoutDoctorInput
  }

  export type doctorUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration_no?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    chamber?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingCreateManyHospitalInput = {
    id: string
    booked_at?: Date | string
    mobile_no: string
    name?: string | null
    sex: booking_sex
    bed_type: booking_bed_type
    booked_for?: booking_booked_for | null
    cancelled_at?: Date | string | null
    status: booking_status
    remarks?: string | null
    last_updated?: Date | string
  }

  export type doctorCreateManyHospitalInput = {
    id: string
    name: string
    designation: string
    chamber?: string | null
    bio?: string | null
    joined_on?: Date | string
  }

  export type logCreateManyHospitalInput = {
    logged_at?: Date | string
    task: string
    mobile_no: string
    role: log_role
  }

  export type staffCreateManyHospitalInput = {
    mobile_no: string
    password: string
    name: string
    email: string
    role: staff_role
    status: staff_status
    joined_on?: Date | string
    last_updated?: Date | string
  }

  export type vacant_bed_logCreateManyHospitalInput = {
    last_updated?: Date | string
    ward?: number | null
    special_ward?: number | null
    cabin?: number | null
    vip_cabin?: number | null
    icu?: number | null
    ccu?: number | null
    hdu?: number | null
    hfncu?: number | null
    emergency?: number | null
    covid?: number | null
    extra?: number | null
  }

  export type bookingUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    booked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: Enumbooking_sexFieldUpdateOperationsInput | booking_sex
    bed_type?: Enumbooking_bed_typeFieldUpdateOperationsInput | booking_bed_type
    booked_for?: NullableEnumbooking_booked_forFieldUpdateOperationsInput | booking_booked_for | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumbooking_statusFieldUpdateOperationsInput | booking_status
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutBookingInput
  }

  export type bookingUncheckedUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    booked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mobile_no?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: Enumbooking_sexFieldUpdateOperationsInput | booking_sex
    bed_type?: Enumbooking_bed_typeFieldUpdateOperationsInput | booking_bed_type
    booked_for?: NullableEnumbooking_booked_forFieldUpdateOperationsInput | booking_booked_for | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumbooking_statusFieldUpdateOperationsInput | booking_status
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    booked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mobile_no?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: Enumbooking_sexFieldUpdateOperationsInput | booking_sex
    bed_type?: Enumbooking_bed_typeFieldUpdateOperationsInput | booking_bed_type
    booked_for?: NullableEnumbooking_booked_forFieldUpdateOperationsInput | booking_booked_for | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumbooking_statusFieldUpdateOperationsInput | booking_status
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type doctorUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    chamber?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: scheduleUpdateManyWithoutDoctorInput
  }

  export type doctorUncheckedUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    chamber?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: scheduleUncheckedUpdateManyWithoutDoctorInput
  }

  export type doctorUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    chamber?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logUpdateWithoutHospitalInput = {
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: StringFieldUpdateOperationsInput | string
    role?: Enumlog_roleFieldUpdateOperationsInput | log_role
    staff?: staffUpdateOneRequiredWithoutLogInput
  }

  export type logUncheckedUpdateWithoutHospitalInput = {
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: StringFieldUpdateOperationsInput | string
    mobile_no?: StringFieldUpdateOperationsInput | string
    role?: Enumlog_roleFieldUpdateOperationsInput | log_role
  }

  export type logUncheckedUpdateManyWithoutLogInput = {
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: StringFieldUpdateOperationsInput | string
    mobile_no?: StringFieldUpdateOperationsInput | string
    role?: Enumlog_roleFieldUpdateOperationsInput | log_role
  }

  export type staffUpdateWithoutHospitalInput = {
    mobile_no?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstaff_roleFieldUpdateOperationsInput | staff_role
    status?: Enumstaff_statusFieldUpdateOperationsInput | staff_status
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: logUpdateManyWithoutStaffInput
  }

  export type staffUncheckedUpdateWithoutHospitalInput = {
    mobile_no?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstaff_roleFieldUpdateOperationsInput | staff_role
    status?: Enumstaff_statusFieldUpdateOperationsInput | staff_status
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: logUncheckedUpdateManyWithoutStaffInput
  }

  export type staffUncheckedUpdateManyWithoutStaffInput = {
    mobile_no?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstaff_roleFieldUpdateOperationsInput | staff_role
    status?: Enumstaff_statusFieldUpdateOperationsInput | staff_status
    joined_on?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vacant_bed_logUpdateWithoutHospitalInput = {
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    ward?: NullableIntFieldUpdateOperationsInput | number | null
    special_ward?: NullableIntFieldUpdateOperationsInput | number | null
    cabin?: NullableIntFieldUpdateOperationsInput | number | null
    vip_cabin?: NullableIntFieldUpdateOperationsInput | number | null
    icu?: NullableIntFieldUpdateOperationsInput | number | null
    ccu?: NullableIntFieldUpdateOperationsInput | number | null
    hdu?: NullableIntFieldUpdateOperationsInput | number | null
    hfncu?: NullableIntFieldUpdateOperationsInput | number | null
    emergency?: NullableIntFieldUpdateOperationsInput | number | null
    covid?: NullableIntFieldUpdateOperationsInput | number | null
    extra?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type vacant_bed_logUncheckedUpdateWithoutHospitalInput = {
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    ward?: NullableIntFieldUpdateOperationsInput | number | null
    special_ward?: NullableIntFieldUpdateOperationsInput | number | null
    cabin?: NullableIntFieldUpdateOperationsInput | number | null
    vip_cabin?: NullableIntFieldUpdateOperationsInput | number | null
    icu?: NullableIntFieldUpdateOperationsInput | number | null
    ccu?: NullableIntFieldUpdateOperationsInput | number | null
    hdu?: NullableIntFieldUpdateOperationsInput | number | null
    hfncu?: NullableIntFieldUpdateOperationsInput | number | null
    emergency?: NullableIntFieldUpdateOperationsInput | number | null
    covid?: NullableIntFieldUpdateOperationsInput | number | null
    extra?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type vacant_bed_logUncheckedUpdateManyWithoutVacant_bed_logInput = {
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    ward?: NullableIntFieldUpdateOperationsInput | number | null
    special_ward?: NullableIntFieldUpdateOperationsInput | number | null
    cabin?: NullableIntFieldUpdateOperationsInput | number | null
    vip_cabin?: NullableIntFieldUpdateOperationsInput | number | null
    icu?: NullableIntFieldUpdateOperationsInput | number | null
    ccu?: NullableIntFieldUpdateOperationsInput | number | null
    hdu?: NullableIntFieldUpdateOperationsInput | number | null
    hfncu?: NullableIntFieldUpdateOperationsInput | number | null
    emergency?: NullableIntFieldUpdateOperationsInput | number | null
    covid?: NullableIntFieldUpdateOperationsInput | number | null
    extra?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type logCreateManyStaffInput = {
    logged_at?: Date | string
    registration_no: string
    task: string
    role: log_role
  }

  export type logUpdateWithoutStaffInput = {
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: StringFieldUpdateOperationsInput | string
    role?: Enumlog_roleFieldUpdateOperationsInput | log_role
    hospital?: hospitalUpdateOneRequiredWithoutLogInput
  }

  export type logUncheckedUpdateWithoutStaffInput = {
    logged_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registration_no?: StringFieldUpdateOperationsInput | string
    task?: StringFieldUpdateOperationsInput | string
    role?: Enumlog_roleFieldUpdateOperationsInput | log_role
  }

  export type bookingCreateManyUserInput = {
    id: string
    booked_at?: Date | string
    name?: string | null
    sex: booking_sex
    bed_type: booking_bed_type
    booked_for?: booking_booked_for | null
    cancelled_at?: Date | string | null
    registration_no: string
    status: booking_status
    remarks?: string | null
    last_updated?: Date | string
  }

  export type bookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    booked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: Enumbooking_sexFieldUpdateOperationsInput | booking_sex
    bed_type?: Enumbooking_bed_typeFieldUpdateOperationsInput | booking_bed_type
    booked_for?: NullableEnumbooking_booked_forFieldUpdateOperationsInput | booking_booked_for | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: Enumbooking_statusFieldUpdateOperationsInput | booking_status
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: hospitalUpdateOneRequiredWithoutBookingInput
  }

  export type bookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    booked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: Enumbooking_sexFieldUpdateOperationsInput | booking_sex
    bed_type?: Enumbooking_bed_typeFieldUpdateOperationsInput | booking_bed_type
    booked_for?: NullableEnumbooking_booked_forFieldUpdateOperationsInput | booking_booked_for | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registration_no?: StringFieldUpdateOperationsInput | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | booking_status
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type scheduleCreateManyDoctorInput = {
    day: schedule_day
    start_time: Date | string
    end_time: Date | string
    last_updated?: Date | string
  }

  export type scheduleUpdateWithoutDoctorInput = {
    day?: Enumschedule_dayFieldUpdateOperationsInput | schedule_day
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type scheduleUncheckedUpdateWithoutDoctorInput = {
    day?: Enumschedule_dayFieldUpdateOperationsInput | schedule_day
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type scheduleUncheckedUpdateManyWithoutScheduleInput = {
    day?: Enumschedule_dayFieldUpdateOperationsInput | schedule_day
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}