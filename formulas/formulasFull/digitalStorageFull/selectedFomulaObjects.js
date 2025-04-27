import { digitalStoragePrecision } from "./digitalStorageCustomPrecision.js";
import { generateConversions } from "../../../utils.js";

import {
  standardStorageFormulas,
  bitBasedFormulas,
  dataTransferFormulas,
  connectionSpeedFormulas,
  computerMemoryFormulas,
  diskStructureFormulas,
  storageMediaFormulas,
  historicalMediaFormulas,
  practicalStorageFormulas,
  transferTimeFormulas
} from "./digitalStorageFormulasFull.js";

export const digitalStandardStorageObj = generateConversions(
  standardStorageFormulas,
  digitalStoragePrecision,
  "standardstorage"
);
export const digitalBitBasedObj = generateConversions(
  bitBasedFormulas,
  digitalStoragePrecision,
  "bitbased"
);
export const digitalDataTransferObj = generateConversions(
  dataTransferFormulas,
  digitalStoragePrecision,
  "datatransfer"
);
export const digitalConnectionSpeedObj = generateConversions(
  connectionSpeedFormulas,
  digitalStoragePrecision,
  "connectionspeed"
);
export const digitalComputerMemoryObj = generateConversions(
  computerMemoryFormulas,
  digitalStoragePrecision,
  "computermemory"
);
export const digitalDiskStructureObj = generateConversions(
  diskStructureFormulas,
  digitalStoragePrecision,
  "diskstructure"
);
export const digitalStorageMediaObj = generateConversions(
  storageMediaFormulas,
  digitalStoragePrecision,
  "storagemedia"
);
export const digitalHistoricalMediaObj = generateConversions(
  historicalMediaFormulas,
  digitalStoragePrecision,
  "historicalmedia"
);
export const digitalPracticalStorageObj = generateConversions(
  practicalStorageFormulas,
  digitalStoragePrecision,
  "practicalstorage"
);
export const digitalTransferTimeObj = generateConversions(
  transferTimeFormulas,
  digitalStoragePrecision,
  "transfertime"
);
