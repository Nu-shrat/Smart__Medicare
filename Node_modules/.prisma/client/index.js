
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  warnEnvConflicts,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  findSync
} = require('@prisma/client/runtime')

const path = require('path')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.0.1
 * Query Engine version: 2452cc6313d52b8b9a96999ac0e974d0aedf88db
 */
Prisma.prismaVersion = {
  client: "3.0.1",
  engine: "2452cc6313d52b8b9a96999ac0e974d0aedf88db"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'


// folder where the generated client is found
const dirname = findSync(process.cwd(), [
  '"node_modules/.prisma/client"',
  '".prisma/client"',
], ['d'], ['d'], 1)[0] || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AddressScalarFieldEnum = makeEnum({
  registration_no: 'registration_no',
  address: 'address',
  phone_no: 'phone_no',
  mobile_no: 'mobile_no',
  latitude: 'latitude',
  longitude: 'longitude'
});

exports.Prisma.BookingScalarFieldEnum = makeEnum({
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
});

exports.Prisma.CapacityScalarFieldEnum = makeEnum({
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
});

exports.Prisma.HospitalScalarFieldEnum = makeEnum({
  registration_no: 'registration_no',
  hospital_name: 'hospital_name',
  description: 'description',
  hospital_type: 'hospital_type',
  bed_type: 'bed_type',
  image_source: 'image_source',
  website: 'website',
  joined_on: 'joined_on',
  status: 'status'
});

exports.Prisma.LogScalarFieldEnum = makeEnum({
  logged_at: 'logged_at',
  registration_no: 'registration_no',
  task: 'task',
  mobile_no: 'mobile_no',
  role: 'role'
});

exports.Prisma.StaffScalarFieldEnum = makeEnum({
  mobile_no: 'mobile_no',
  password: 'password',
  name: 'name',
  email: 'email',
  role: 'role',
  status: 'status',
  registration_no: 'registration_no',
  joined_on: 'joined_on',
  last_updated: 'last_updated'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  mobile_no: 'mobile_no',
  password: 'password',
  name: 'name',
  sex: 'sex',
  dob: 'dob',
  email: 'email',
  document_id: 'document_id',
  joined_on: 'joined_on'
});

exports.Prisma.Vacant_bed_logScalarFieldEnum = makeEnum({
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
});

exports.Prisma.AmenityScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Blood_analytical_serviceScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Diagnostic_imaging_serviceScalarFieldEnum = makeEnum({
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
});

exports.Prisma.DoctorScalarFieldEnum = makeEnum({
  id: 'id',
  registration_no: 'registration_no',
  name: 'name',
  designation: 'designation',
  chamber: 'chamber',
  bio: 'bio',
  joined_on: 'joined_on'
});

exports.Prisma.General_serviceScalarFieldEnum = makeEnum({
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
});

exports.Prisma.ScheduleScalarFieldEnum = makeEnum({
  id: 'id',
  day: 'day',
  start_time: 'start_time',
  end_time: 'end_time',
  last_updated: 'last_updated'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});
exports.booking_sex = makeEnum({
  M: 'M',
  F: 'F',
  T: 'T',
  S: 'S'
});

exports.booking_bed_type = makeEnum({
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
});

exports.booking_booked_for = makeEnum({
  Self: 'Self',
  Father: 'Father',
  Mother: 'Mother',
  Brother: 'Brother',
  Sister: 'Sister',
  Relative: 'Relative',
  Friend: 'Friend',
  Stranger: 'Stranger'
});

exports.booking_status = makeEnum({
  Requested: 'Requested',
  Booked: 'Booked',
  Served: 'Served',
  Cancelled: 'Cancelled'
});

exports.hospital_hospital_type = makeEnum({
  Public: 'Public',
  Private: 'Private'
});

exports.hospital_status = makeEnum({
  public: 'public',
  private: 'private',
  deleted: 'deleted'
});

exports.log_role = makeEnum({
  Admin: 'Admin',
  DB_Manager: 'DB_Manager',
  Moderator: 'Moderator'
});

exports.staff_role = makeEnum({
  Admin: 'Admin',
  DB_Manager: 'DB_Manager',
  Moderator: 'Moderator'
});

exports.staff_status = makeEnum({
  Active: 'Active',
  Inactive: 'Inactive'
});

exports.user_sex = makeEnum({
  M: 'M',
  F: 'F',
  T: 'T',
  S: 'S'
});

exports.schedule_day = makeEnum({
  R: 'R',
  S: 'S',
  M: 'M',
  T: 'T',
  W: 'W',
  A: 'A',
  F: 'F'
});

exports.Prisma.ModelName = makeEnum({
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
});


/**
 * DMMF
 */

// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */

const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/sathi/Documents/quick-hospitalization/node_modules/@prisma/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": []
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "3.0.1",
  "engineVersion": "2452cc6313d52b8b9a96999ac0e974d0aedf88db",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql"
}
config.document = dmmf
config.dirname = dirname

/**
 * Only for env conflict warning
 * loading of env variable occurs in getPrismaClient
 */
const envPaths = {
  rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
}
warnEnvConflicts(envPaths)

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

/**
 * Build tool annotations
 * In order to make `ncc` and `@vercel/nft` happy.
 * The process.cwd() annotation is only needed for https://github.com/vercel/vercel/tree/master/packages/now-next
**/
path.join(__dirname, 'libquery_engine-debian-openssl-1.1.x.so.node');
path.join(process.cwd(), './node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node')
/**
 * Annotation for `@vercel/nft`
 * The process.cwd() annotation is only needed for https://github.com/vercel/vercel/tree/master/packages/now-next
**/
path.join(__dirname, 'schema.prisma');
path.join(process.cwd(), './node_modules/.prisma/client/schema.prisma');