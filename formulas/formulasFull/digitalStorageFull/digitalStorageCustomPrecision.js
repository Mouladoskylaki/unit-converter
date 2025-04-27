// digitalStoragePrecision.js - Complete
// Precision settings to match the updated category format

export const digitalStoragePrecision = {
  // Standard Storage Units
  "standardstorage": {
    // Binary units
    "bit [b]": 0,
    "byte [B]": 0,
    "kilobyte [KB]": 2,
    "megabyte [MB]": 3,
    "gigabyte [GB]": 4,
    "terabyte [TB]": 4,
    "petabyte [PB]": 4,
    "exabyte [EB]": 4,
    "zettabyte [ZB]": 4,
    "yottabyte [YB]": 4,
    
    // IEC Binary Units
    "kibibyte [KiB]": 2,
    "mebibyte [MiB]": 3,
    "gibibyte [GiB]": 4,
    "tebibyte [TiB]": 4,
    "pebibyte [PiB]": 4,
    "exbibyte [EiB]": 4,
    "zebibyte [ZiB]": 4,
    "yobibyte [YiB]": 4,
    
    // SI Decimal Units
    "kilobyte (SI) [KB-SI]": 2,
    "megabyte (SI) [MB-SI]": 3,
    "gigabyte (SI) [GB-SI]": 4,
    "terabyte (SI) [TB-SI]": 4,
    "petabyte (SI) [PB-SI]": 4,
    "exabyte (SI) [EB-SI]": 4,
    "zettabyte (SI) [ZB-SI]": 4,
    "yottabyte (SI) [YB-SI]": 4
  },
  
  // Bit-Based Units
  "bitbased": {
    "bit [b]": 0,
    "byte [B]": 0,
    "kilobit [Kb]": 2,
    "megabit [Mb]": 3,
    "gigabit [Gb]": 4,
    "terabit [Tb]": 4,
    "petabit [Pb]": 4,
    "exabit [Eb]": 4,
    "zettabit [Zb]": 4,
    "yottabit [Yb]": 4,
    
    // Decimal bit units
    "bit (SI) [b-SI]": 0,
    "kilobit (SI) [Kb-SI]": 2,
    "megabit (SI) [Mb-SI]": 3,
    "gigabit (SI) [Gb-SI]": 4,
    "terabit (SI) [Tb-SI]": 4,
    "petabit (SI) [Pb-SI]": 4,
    "exabit (SI) [Eb-SI]": 4,
    "zettabit (SI) [Zb-SI]": 4,
    "yottabit (SI) [Yb-SI]": 4
  },
  
  // Data Transfer Rates
  "datatransfer": {
    "bit per second [bps]": 0,
    "byte per second [Bps]": 0,
    "kilobit per second [Kbps]": 2,
    "kilobyte per second [KBps]": 2,
    "megabit per second [Mbps]": 2,
    "megabyte per second [MBps]": 2,
    "gigabit per second [Gbps]": 2,
    "gigabyte per second [GBps]": 2,
    "terabit per second [Tbps]": 2,
    "terabyte per second [TBps]": 2,
    
    // SI decimal transfer rates
    "bit per second (SI) [bps-SI]": 0,
    "kilobit per second (SI) [Kbps-SI]": 2,
    "kilobyte per second (SI) [KBps-SI]": 2,
    "megabit per second (SI) [Mbps-SI]": 2,
    "megabyte per second (SI) [MBps-SI]": 2,
    "gigabit per second (SI) [Gbps-SI]": 2,
    "gigabyte per second (SI) [GBps-SI]": 2,
    "terabit per second (SI) [Tbps-SI]": 2,
    "terabyte per second (SI) [TBps-SI]": 2
  },
  
  // Connection Speeds
  "connectionspeed": {
    // Network standards
    "ethernet (10Base-T) [10baseT]": 2,
    "fast ethernet (100Base-T) [100baseT]": 2,
    "gigabit ethernet [GbE]": 2,
    "10 gigabit ethernet [10GbE]": 2,
    "40 gigabit ethernet [40GbE]": 2,
    "100 gigabit ethernet [100GbE]": 2,
    
    // Wireless
    "wireless 802.11b [WiFi-B]": 2,
    "wireless 802.11g [WiFi-G]": 2,
    "wireless 802.11n [WiFi-N]": 2,
    "wireless 802.11ac [WiFi-AC]": 2,
    "wireless 802.11ax [WiFi-AX]": 2,
    
    // Transfer rate equivalents
    "byte per second [Bps]": 0,
    "kilobyte per second [KBps]": 2,
    "megabyte per second [MBps]": 2,
    "gigabyte per second [GBps]": 2,
    
    // Device interfaces
    "USB 1.1 [USB1.1]": 2,
    "USB 2.0 [USB2.0]": 2,
    "USB 3.0 [USB3.0]": 2,
    "USB 3.1 [USB3.1]": 2,
    "USB 3.2 [USB3.2]": 2,
    "USB 4 [USB4]": 2,
    "SATA I [SATA1]": 2,
    "SATA II [SATA2]": 2,
    "SATA III [SATA3]": 2,
    "PCIe 3.0 (x1) [PCIe3x1]": 2,
    "PCIe 4.0 (x1) [PCIe4x1]": 2,
    "NVMe PCIe 3.0 (x4) [NVMe3x4]": 2,
    "NVMe PCIe 4.0 (x4) [NVMe4x4]": 2
  },
  
  // Computer Memory
  "computermemory": {
    "bit [b]": 0,
    "nibble [nibble]": 1,
    "byte [B]": 0,
    "word (16-bit) [word]": 0,
    "doubleword [dword]": 0,
    "quadword [qword]": 0,
    "octaword [octaword]": 0,
    "cache line [cacheline]": 0,
    "page (4KB) [page]": 0,
    "huge page (2MB) [hugepage]": 0,
    "L1 Cache (typical) [L1]": 0,
    "L2 Cache (typical) [L2]": 0,
    "L3 Cache (typical) [L3]": 0,
    
    // RAM modules
    "DIMM (2GB) [DIMM2G]": 2,
    "DIMM (4GB) [DIMM4G]": 2,
    "DIMM (8GB) [DIMM8G]": 2,
    "DIMM (16GB) [DIMM16G]": 2,
    "DIMM (32GB) [DIMM32G]": 2,
    "SODIMM (4GB) [SODIMM4G]": 2,
    "SODIMM (8GB) [SODIMM8G]": 2,
    "SODIMM (16GB) [SODIMM16G]": 2
  },
  
  // Disk Structure
  "diskstructure": {
    "byte [B]": 0,
    "sector (512-byte) [sector]": 0,
    "sector (4K) [sector4k]": 0,
    "cluster (4KB) [cluster]": 0,
    "allocation unit [au]": 0,
    "block [block]": 0,
    "extent [extent]": 0
  },
  
  // Storage Media
  "storagemedia": {
    "byte [B]": 0,
    // Optical media
    "CD-ROM [CD]": 2,
    "DVD (single layer) [DVD]": 2,
    "DVD (dual layer) [DVD-DL]": 2,
    "Blu-ray (single layer) [BD]": 2,
    "Blu-ray (dual layer) [BD-DL]": 2,
    
    // Flash storage
    "USB flash drive (8GB) [USB8G]": 2,
    "USB flash drive (16GB) [USB16G]": 2,
    "USB flash drive (32GB) [USB32G]": 2,
    "USB flash drive (64GB) [USB64G]": 2,
    "SD card (8GB) [SD8G]": 2,
    "SD card (16GB) [SD16G]": 2,
    "SD card (32GB) [SD32G]": 2,
    "SD card (64GB) [SD64G]": 2,
    
    // Mobile storage
    "microSD card (16GB) [microSD16G]": 2,
    "microSD card (32GB) [microSD32G]": 2,
    "microSD card (64GB) [microSD64G]": 2,
    "smartphone storage (64GB) [phone64G]": 2,
    "smartphone storage (128GB) [phone128G]": 2,
    "smartphone storage (256GB) [phone256G]": 2,
    
    // Disk drives
    "SSD (256GB) [SSD256G]": 2,
    "SSD (512GB) [SSD512G]": 2,
    "SSD (1TB) [SSD1T]": 2,
    "HDD (1TB) [HDD1T]": 2,
    "HDD (2TB) [HDD2T]": 2,
    "HDD (4TB) [HDD4T]": 2
  },
  
  // Historical Media
  "historicalmedia": {
    "byte [B]": 0,
    "punch card [card]": 0,
    "punch card deck (2000) [carddeck]": 0,
    "paper tape (1m) [papertape]": 0,
    "magnetic tape (9-track) [tape9track]": 2,
    "magnetic tape (LTO-1) [tapeLTO1]": 2,
    "magnetic tape (LTO-7) [tapeLTO7]": 2,
    "magnetic tape (LTO-9) [tapeLTO9]": 2,
    "floppy disk (8\") [floppy8]": 2,
    "floppy disk (5.25\") [floppy5]": 2,
    "floppy disk (3.5\") HD [floppyHD]": 2,
    "ZIP disk (100MB) [zip100]": 2,
    "ZIP disk (250MB) [zip250]": 2,
    "JAZ disk (1GB) [jaz1G]": 2,
    "JAZ disk (2GB) [jaz2G]": 2,
    "MiniDisc [md]": 2,
    "SuperDisk [superdisk]": 2
  },
  
  // Practical Storage
  "practicalstorage": {
    "byte [B]": 0,
    // Common file sizes
    "plain text document [textdoc]": 2,
    "MP3 (1 minute) [mp3min]": 2,
    "JPEG image [jpeg]": 2,
    "RAW image [raw]": 2,
    "PDF document (10 pages) [pdf10pg]": 2,
    "HTML page [html]": 2,
    "email (with attachment) [email]": 2,
    "smartphone photo [smartphoto]": 2,
    "MP4 video (1 minute HD) [mp4min]": 2,
    "MP4 video (1 minute 4K) [mp4min4k]": 2,
    "Microsoft Word document [docx]": 2,
    "Microsoft PowerPoint [pptx]": 2,
    "Microsoft Excel [xlsx]": 2,
    "smartphone app [app]": 2,
    "video game (indie) [indiegame]": 2,
    "video game (AAA) [aaagame]": 2,
    
    // Real-world equivalents
    "1 hour HD video [1hrHD]": 2,
    "1 hour 4K video [1hr4K]": 2,
    "1000 photos [1000photos]": 2,
    "100 songs [100songs]": 2,
    "1000 songs [1000songs]": 2,
    "eBook library (1000 books) [1000books]": 2
  },
  
  // Transfer Times
  "transfertime": {
    // Time units
    "second [s]": 0,
    "minute [min]": 1,
    "hour [hr]": 2,
    
    // Transfer times
    "byte [B]": 0,
    "1GB at 1Mbps [GB@1Mbps]": 1,
    "1GB at 10Mbps [GB@10Mbps]": 1,
    "1GB at 100Mbps [GB@100Mbps]": 2,
    "1GB at 1Gbps [GB@1Gbps]": 3,
    "1TB at 100Mbps [TB@100Mbps]": 2,
    "1TB at 1Gbps [TB@1Gbps]": 2,
    "1TB at 10Gbps [TB@10Gbps]": 2,
    
    // Download examples
    "HD movie (4GB) at 10Mbps [movie@10Mbps]": 1,
    "HD movie (4GB) at 50Mbps [movie@50Mbps]": 1,
    "OS update (2GB) at 5Mbps [update@5Mbps]": 1
  }
};