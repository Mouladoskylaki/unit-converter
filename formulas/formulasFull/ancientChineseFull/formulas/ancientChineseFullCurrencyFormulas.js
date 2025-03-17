// ancientChineseFullCurrencyFormulas.js
export const ancientChineseFullCurrencyFormulas = {
  // Early currencies (Pre-Qin and Shang-Zhou periods)
  "group_Early Currencies (Pre-221 BCE)": 0,
  "Bei (贝) - Cowrie": 1,              // Base unit for earliest currency
  "Peng (朋) - Cowrie String": 10,     // 1 Peng = 10 Bei
  "Yuan (爰) - Bronze": 20,            // 1 Yuan = 20 Bei
  "Dao (刀) - Knife Money": 25,        // 1 Dao = 25 Bei
  "Yi (一) - Yi Knife": 50,            // 1 Yi = 50 Bei
  "Ban Liang (半两) - Early": 24,      // Early half-tael coin

  // Qin-Han Currencies (221 BCE - 220 CE)
  "group_Qin-Han Period (221 BCE - 220 CE)": 0,
  "Ban Liang (半两) - Qin": 1,         // Base unit for Qin-Han period
  "Wu Zhu (五铢) - Han": 0.8,          // 5-zhu coin = 0.8 Ban Liang
  "Jin (金) - Han Gold": 200,          // Gold unit (very valuable)
  "Liang (两) - Han Silver": 24,       // Silver tael
  "Suo (索) - Coin String": 1000,      // String of 1000 coins

  // Tang-Song Currencies (618-1279 CE)
  "group_Tang-Song Period (618-1279 CE)": 0,
  "Kai Yuan (开元通宝)": 1,            // Base unit for Tang currency
  "Guan (贯) - Tang": 1000,            // String of 1000 Kai Yuan
  "Yin Liang (银两) - Tang": 60,       // Silver tael during Tang
  "Song Qian (宋钱)": 0.8,             // Song dynasty coin = 0.8 Kai Yuan
  "Guan (贯) - Song": 770,             // String of Song coins (weighted less)
  "Jiao Zi (交子) - Paper": 10000,     // Early paper note = 10,000 coins
  "Hui Zi (会子) - Paper": 5000,       // Another paper currency
  "Yin Liang (银两) - Song": 70,       // Silver tael during Song

  // Yuan-Ming Currencies (1271-1644 CE)
  "group_Yuan-Ming Period (1271-1644 CE)": 0,
  "Yuan (元) - Yuan Dynasty": 1,       // Base unit for Yuan-Ming
  "Zhong Tong (中统钞)": 5,            // Paper currency = 5 Yuan
  "Bao Chao (宝钞)": 10,               // Another paper note
  "Ming Qian (明钱)": 0.001,           // Ming coin = 0.001 Yuan
  "Da Ming Bao Chao (大明宝钞)": 1000, // Large paper note
  "Guan (贯) - Ming": 1,               // String of 1000 Ming coins
  "Yin Liang (银两) - Ming": 0.72,     // Silver tael during Ming

  // Qing Currencies (1644-1912 CE)
  "group_Qing Period (1644-1912 CE)": 0,
  "Wen (文) - Qing": 1,                // Base unit for Qing
  "Qian (钱) - Qing": 1,               // Standard coin
  "Diao (吊) - Qing": 1000,            // String of 1000 coins
  "Dao Guang (道光通宝)": 1,           // Daoguang Emperor coin
  "Yin Liang (银两) - Qing": 1000,     // Silver tael
  "Yuan (元) - Late Qing": 0.72,       // Dollar coin, approx 0.72 tael

  // Republic of China Period (1912-1949)
  "group_Republic of China (1912-1949)": 0,
  "Yuan (元) - ROC": 1,                // Base unit for ROC period
  "Jiao (角) - ROC": 0.1,              // 1/10 Yuan
  "Fen (分) - ROC": 0.01,              // 1/100 Yuan
  "Silver Dollar (银元)": 1,           // Silver dollar (= 1 Yuan)
  "Gold Yuan (金圆券)": 3000000,       // Gold Yuan after hyperinflation

  // Reference values (for educational context only)
  "group_Reference Values": 0,
  "Modern Yuan Reference": 0,           // Set to 0 to prevent direct conversion
  "Pre-Qin Era Value": 0,              // Set to 0 to prevent direct conversion
  "Qin-Han Era Value": 0,              // Set to 0 to prevent direct conversion
  "Tang-Song Era Value": 0,            // Set to 0 to prevent direct conversion
  "Yuan-Ming Era Value": 0,            // Set to 0 to prevent direct conversion
  "Qing Era Value": 0,                 // Set to 0 to prevent direct conversion
  "Republican Era Value": 0            // Set to 0 to prevent direct conversion
};

// Add conversion context function
export function getConversionContext(fromUnit, toUnit) {
  // Extract era information from unit names
  const eras = [
    { name: "Pre-Qin", keywords: ["Bei", "Peng", "Yuan (爰)", "Dao", "Yi (一)", "Early"] },
    { name: "Qin-Han", keywords: ["Qin", "Han", "Wu Zhu", "Ban Liang"] },
    { name: "Tang-Song", keywords: ["Tang", "Song", "Kai Yuan", "Jiao Zi", "Hui Zi"] },
    { name: "Yuan-Ming", keywords: ["Yuan Dynasty", "Zhong Tong", "Ming", "Bao Chao"] },
    { name: "Qing", keywords: ["Qing", "Dao Guang", "Late Qing"] },
    { name: "ROC", keywords: ["ROC", "Silver Dollar", "Gold Yuan"] }
  ];

  // Determine eras for both units
  function determineEra(unit) {
    for (const era of eras) {
      for (const keyword of era.keywords) {
        if (unit.includes(keyword)) {
          return era.name;
        }
      }
    }
    return "Unknown";
  }

  const fromEra = determineEra(fromUnit);
  const toEra = determineEra(toUnit);

  // If converting between distant eras, provide context
  if (fromEra !== toEra) {
    const eraDistance = Math.abs(eras.findIndex(e => e.name === fromEra) - 
                                 eras.findIndex(e => e.name === toEra));
    
    if (eraDistance > 1) {
      return `Note: Converting between ${fromEra} and ${toEra} currencies spans ${eraDistance} historical periods. ` +
             `These currencies never circulated together, so this conversion is approximate and for educational purposes only.`;
    } else {
      return `Converting between adjacent ${fromEra} and ${toEra} periods. Values are approximate based on historical records.`;
    }
  }
  
  return `Converting within the ${fromEra} period. These currencies would have circulated together.`;
}