// digitalStorageCategories.js - Fixed
// Organized for meaningful conversions with simplified categories

// Standard Storage Units - includes binary and decimal storage units
export const standardStorageFormulas = {
  "group_Standard Storage Units": 0,
  // Binary units
  "bit [b]": 0.125,
  "byte [B]": 1,
  "kilobyte [KB]": 1024,
  "megabyte [MB]": 1048576,
  "gigabyte [GB]": 1073741824,
  "terabyte [TB]": 1099511627776,
  "petabyte [PB]": 1125899906842624,
  "exabyte [EB]": 1152921504606846976,
  "zettabyte [ZB]": 1180591620717411303424,
  "yottabyte [YB]": 1208925819614629174706176,
  
  // IEC Binary Units
  "group_IEC Binary Units": 0,
  "kibibyte [KiB]": 1024,
  "mebibyte [MiB]": 1048576,
  "gibibyte [GiB]": 1073741824,
  "tebibyte [TiB]": 1099511627776,
  "pebibyte [PiB]": 1125899906842624,
  "exbibyte [EiB]": 1152921504606846976,
  "zebibyte [ZiB]": 1180591620717411303424,
  "yobibyte [YiB]": 1208925819614629174706176,
  
  // SI Decimal Units
  "group_SI Decimal Units": 0,
  "kilobyte (SI) [KB-SI]": 1000,
  "megabyte (SI) [MB-SI]": 1000000,
  "gigabyte (SI) [GB-SI]": 1000000000,
  "terabyte (SI) [TB-SI]": 1000000000000,
  "petabyte (SI) [PB-SI]": 1000000000000000,
  "exabyte (SI) [EB-SI]": 1000000000000000000,
  "zettabyte (SI) [ZB-SI]": 1000000000000000000000,
  "yottabyte (SI) [YB-SI]": 1000000000000000000000000
};

// Bit-based units (common in networking)
export const bitBasedFormulas = {
  "group_Binary Bit Units": 0,
  "bit [b]": 0.125,
  "byte [B]": 1,
  "kilobit [Kb]": 128,
  "megabit [Mb]": 131072,
  "gigabit [Gb]": 134217728,
  "terabit [Tb]": 137438953472,
  "petabit [Pb]": 140737488355328,
  "exabit [Eb]": 144115188075855872,
  "zettabit [Zb]": 147573952589676412928,
  "yottabit [Yb]": 151115727451828646838272,
  
  // Decimal bit units
  "group_Decimal Bit Units (SI)": 0,
  "bit (SI) [b-SI]": 0.125,
  "kilobit (SI) [Kb-SI]": 125,
  "megabit (SI) [Mb-SI]": 125000,
  "gigabit (SI) [Gb-SI]": 125000000,
  "terabit (SI) [Tb-SI]": 125000000000,
  "petabit (SI) [Pb-SI]": 125000000000000,
  "exabit (SI) [Eb-SI]": 125000000000000000,
  "zettabit (SI) [Zb-SI]": 125000000000000000000,
  "yottabit (SI) [Yb-SI]": 125000000000000000000000
};

// Data transfer rates - in bytes per second
export const dataTransferFormulas = {
  "group_Binary Transfer Rates": 0,
  "bit per second [bps]": 0.125,
  "byte per second [Bps]": 1,
  "kilobit per second [Kbps]": 128,
  "kilobyte per second [KBps]": 1024,
  "megabit per second [Mbps]": 131072,
  "megabyte per second [MBps]": 1048576,
  "gigabit per second [Gbps]": 134217728,
  "gigabyte per second [GBps]": 1073741824,
  "terabit per second [Tbps]": 137438953472,
  "terabyte per second [TBps]": 1099511627776,
  
  // SI decimal transfer rates
  "group_Decimal Transfer Rates (SI)": 0,
  "bit per second (SI) [bps-SI]": 0.125,
  "kilobit per second (SI) [Kbps-SI]": 125,
  "kilobyte per second (SI) [KBps-SI]": 1000,
  "megabit per second (SI) [Mbps-SI]": 125000,
  "megabyte per second (SI) [MBps-SI]": 1000000,
  "gigabit per second (SI) [Gbps-SI]": 125000000,
  "gigabyte per second (SI) [GBps-SI]": 1000000000,
  "terabit per second (SI) [Tbps-SI]": 125000000000,
  "terabyte per second (SI) [TBps-SI]": 1000000000000
};

// Network and Interface Connection Speeds
export const connectionSpeedFormulas = {
  // Network standards
  "group_Network Speeds": 0,
  "ethernet (10Base-T) [10baseT]": 1250000,
  "fast ethernet (100Base-T) [100baseT]": 12500000,
  "gigabit ethernet [GbE]": 125000000,
  "10 gigabit ethernet [10GbE]": 1250000000,
  "40 gigabit ethernet [40GbE]": 5000000000,
  "100 gigabit ethernet [100GbE]": 12500000000,
  
  // Wireless
  "group_Wireless Speeds": 0,
  "wireless 802.11b [WiFi-B]": 1375000,
  "wireless 802.11g [WiFi-G]": 6750000,
  "wireless 802.11n [WiFi-N]": 37500000,
  "wireless 802.11ac [WiFi-AC]": 125000000,
  "wireless 802.11ax [WiFi-AX]": 143750000,
  
  // Transfer rate equivalents
  "group_Transfer Rate Equivalents": 0,
  "byte per second [Bps]": 1,
  "kilobyte per second [KBps]": 1024,
  "megabyte per second [MBps]": 1048576,
  "gigabyte per second [GBps]": 1073741824,
  
  // Device interfaces
  "group_Interface Speeds": 0,
  "USB 1.1 [USB1.1]": 1500000,
  "USB 2.0 [USB2.0]": 60000000,
  "USB 3.0 [USB3.0]": 625000000,
  "USB 3.1 [USB3.1]": 1250000000,
  "USB 3.2 [USB3.2]": 2500000000,
  "USB 4 [USB4]": 5000000000,
  "SATA I [SATA1]": 187500000,
  "SATA II [SATA2]": 375000000,
  "SATA III [SATA3]": 750000000,
  "PCIe 3.0 (x1) [PCIe3x1]": 1250000000,
  "PCIe 4.0 (x1) [PCIe4x1]": 2500000000,
  "NVMe PCIe 3.0 (x4) [NVMe3x4]": 5000000000,
  "NVMe PCIe 4.0 (x4) [NVMe4x4]": 10000000000
};

// Computer memory-specific units
export const computerMemoryFormulas = {
  "group_Computer Memory Units": 0,
  "bit [b]": 0.125,
  "nibble [nibble]": 0.5,
  "byte [B]": 1,
  "word (16-bit) [word]": 2,
  "doubleword [dword]": 4,
  "quadword [qword]": 8,
  "octaword [octaword]": 16,
  "cache line [cacheline]": 64,
  "page (4KB) [page]": 4096,
  "huge page (2MB) [hugepage]": 2097152,
  "L1 Cache (typical) [L1]": 32768,
  "L2 Cache (typical) [L2]": 262144,
  "L3 Cache (typical) [L3]": 8388608,
  
  // RAM modules
  "group_RAM Modules": 0,
  "DIMM (2GB) [DIMM2G]": 2147483648,
  "DIMM (4GB) [DIMM4G]": 4294967296,
  "DIMM (8GB) [DIMM8G]": 8589934592,
  "DIMM (16GB) [DIMM16G]": 17179869184,
  "DIMM (32GB) [DIMM32G]": 34359738368,
  "SODIMM (4GB) [SODIMM4G]": 4294967296,
  "SODIMM (8GB) [SODIMM8G]": 8589934592,
  "SODIMM (16GB) [SODIMM16G]": 17179869184
};

// Disk storage-specific units
export const diskStructureFormulas = {
  "group_Disk Storage Units": 0,
  "byte [B]": 1,
  "sector (512-byte) [sector]": 512,
  "sector (4K) [sector4k]": 4096,
  "cluster (4KB) [cluster]": 4096,
  "allocation unit [au]": 4096,
  "block [block]": 4096,
  "extent [extent]": 65536
};

// Physical storage media (current and mobile)
export const storageMediaFormulas = {
  "group_Optical Media": 0,
  "byte [B]": 1,
  "CD-ROM [CD]": 700000000,
  "DVD (single layer) [DVD]": 4700000000,
  "DVD (dual layer) [DVD-DL]": 8500000000,
  "Blu-ray (single layer) [BD]": 25000000000,
  "Blu-ray (dual layer) [BD-DL]": 50000000000,
  
  // Flash storage
  "group_Flash Storage": 0,
  "USB flash drive (8GB) [USB8G]": 8589934592,
  "USB flash drive (16GB) [USB16G]": 17179869184,
  "USB flash drive (32GB) [USB32G]": 34359738368,
  "USB flash drive (64GB) [USB64G]": 68719476736,
  "SD card (8GB) [SD8G]": 8589934592,
  "SD card (16GB) [SD16G]": 17179869184,
  "SD card (32GB) [SD32G]": 34359738368,
  "SD card (64GB) [SD64G]": 68719476736,
  
  // Mobile storage
  "group_Mobile Storage": 0,
  "microSD card (16GB) [microSD16G]": 17179869184,
  "microSD card (32GB) [microSD32G]": 34359738368,
  "microSD card (64GB) [microSD64G]": 68719476736,
  "smartphone storage (64GB) [phone64G]": 68719476736,
  "smartphone storage (128GB) [phone128G]": 137438953472,
  "smartphone storage (256GB) [phone256G]": 274877906944,
  
  // Disk drives
  "group_Disk Drives": 0,
  "SSD (256GB) [SSD256G]": 274877906944,
  "SSD (512GB) [SSD512G]": 549755813888,
  "SSD (1TB) [SSD1T]": 1099511627776,
  "HDD (1TB) [HDD1T]": 1000000000000,
  "HDD (2TB) [HDD2T]": 2000000000000,
  "HDD (4TB) [HDD4T]": 4000000000000
};

// Historical storage for reference
export const historicalMediaFormulas = {
  "group_Historical Storage Media": 0,
  "byte [B]": 1,
  "punch card [card]": 80,
  "punch card deck (2000) [carddeck]": 160000,
  "paper tape (1m) [papertape]": 1500,
  "magnetic tape (9-track) [tape9track]": 140000000,
  "magnetic tape (LTO-1) [tapeLTO1]": 100000000000,
  "magnetic tape (LTO-7) [tapeLTO7]": 6000000000000,
  "magnetic tape (LTO-9) [tapeLTO9]": 18000000000000,
  
  "group_Floppy and Removable Disks": 0,
  "floppy disk (8\") [floppy8]": 1200000,
  "floppy disk (5.25\") [floppy5]": 1228800,
  "floppy disk (3.5\") HD [floppyHD]": 1474560,
  "ZIP disk (100MB) [zip100]": 100000000,
  "ZIP disk (250MB) [zip250]": 250000000,
  "JAZ disk (1GB) [jaz1G]": 1000000000,
  "JAZ disk (2GB) [jaz2G]": 2000000000,
  "MiniDisc [md]": 140000000,
  "SuperDisk [superdisk]": 120000000
};

// Practical file sizes and equivalents
export const practicalStorageFormulas = {
  "group_File Sizes (Typical)": 0,
  "byte [B]": 1,
  "plain text document [textdoc]": 10240,
  "MP3 (1 minute) [mp3min]": 1000000,
  "JPEG image [jpeg]": 500000,
  "RAW image [raw]": 25000000,
  "PDF document (10 pages) [pdf10pg]": 1000000,
  "HTML page [html]": 51200,
  "email (with attachment) [email]": 2097152,
  "smartphone photo [smartphoto]": 4000000,
  "MP4 video (1 minute HD) [mp4min]": 50000000,
  "MP4 video (1 minute 4K) [mp4min4k]": 200000000,
  "Microsoft Word document [docx]": 500000,
  "Microsoft PowerPoint [pptx]": 2000000,
  "Microsoft Excel [xlsx]": 1000000,
  "smartphone app [app]": 50000000,
  "video game (indie) [indiegame]": 1000000000,
  "video game (AAA) [aaagame]": 50000000000,
  
  "group_Storage Equivalents": 0,
  "1 hour HD video [1hrHD]": 3000000000,
  "1 hour 4K video [1hr4K]": 12000000000,
  "1000 photos [1000photos]": 4000000000,
  "100 songs [100songs]": 500000000,
  "1000 songs [1000songs]": 5000000000,
  "eBook library (1000 books) [1000books]": 2000000000
};

// Time-based reference points
export const transferTimeFormulas = {
  "group_Time Units": 0,
  "second [s]": 1, // Base unit
  "minute [min]": 60, // 60 seconds
  "hour [hr]": 3600, // 3600 seconds
  
  "group_Transfer Times": 0,
  // All values represent seconds needed to transfer the specified amount
  "1GB at 1Mbps [GB@1Mbps]": 8192.00,
  "1GB at 10Mbps [GB@10Mbps]": 819.20,
  "1GB at 100Mbps [GB@100Mbps]": 81.92,
  "1GB at 1Gbps [GB@1Gbps]": 8.00,
  "1TB at 100Mbps [TB@100Mbps]": 83886.08, 
  "1TB at 1Gbps [TB@1Gbps]": 8192.00,
  "1TB at 10Gbps [TB@10Gbps]": 819.20,
  
  "group_Download Examples": 0,
  "HD movie (4GB) at 10Mbps [movie@10Mbps]": 3276.80,
  "HD movie (4GB) at 50Mbps [movie@50Mbps]": 655.36,
  "OS update (2GB) at 5Mbps [update@5Mbps]": 3276.80
};