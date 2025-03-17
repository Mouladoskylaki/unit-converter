export const ancientChineseMusicFormulas = {
    "group_Huang Zhong Standard Pitch": 0,
    "Huang Zhong (黄钟) - Zhou": 267.14,    // 1 Huang Zhong = 267.14 Hz (approx. C#4, based on archaeological finds)
    "Huang Zhong (黄钟) - Han": 244.44,     // 1 Huang Zhong = 244.44 Hz (approx. B3, Han pitch pipes)
    "Huang Zhong (黄钟) - Tang": 255.89,    // 1 Huang Zhong = 255.89 Hz (approx. C4, Tang standard)
    "Huang Zhong (黄钟) - Song": 267.96,    // 1 Huang Zhong = 267.96 Hz (approx. C#4, Song reform)
    "Huang Zhong (黄钟) - Ming": 265.78,    // 1 Huang Zhong = 265.78 Hz (approx. C#4, early Ming)
    "Huang Zhong (黄钟) - Qing": 275.54,    // 1 Huang Zhong = 275.54 Hz (approx. C#4, Qing standard)
    
    "group_Twelve Lü (十二律)": 0,
    "Huang Zhong (黄钟)": 1,                // Base pitch (1st Lü)
    "Da Lü (大吕)": 1.0667,                 // 1 Da Lü = 1.0667 × Huang Zhong (2nd Lü, approx. 9:8 ratio)
    "Tai Cu (太簇)": 1.1250,                // 1 Tai Cu = 1.1250 × Huang Zhong (3rd Lü, 9:8 ratio)
    "Jia Zhong (夹钟)": 1.2000,             // 1 Jia Zhong = 1.2000 × Huang Zhong (4th Lü, 6:5 ratio)
    "Gu Xi (姑洗)": 1.3333,                 // 1 Gu Xi = 1.3333 × Huang Zhong (5th Lü, 4:3 ratio)
    "Zhong Lü (仲吕)": 1.4222,              // 1 Zhong Lü = 1.4222 × Huang Zhong (6th Lü, approx. 3:2 ratio)
    "Rui Bin (蕤宾)": 1.5000,               // 1 Rui Bin = 1.5000 × Huang Zhong (7th Lü, 3:2 ratio)
    "Lin Zhong (林钟)": 1.6000,             // 1 Lin Zhong = 1.6000 × Huang Zhong (8th Lü, 8:5 ratio)
    "Yi Ze (夷则)": 1.7778,                 // 1 Yi Ze = 1.7778 × Huang Zhong (9th Lü, 9:5 ratio)
    "Nan Lü (南吕)": 1.8750,                // 1 Nan Lü = 1.8750 × Huang Zhong (10th Lü, 15:8 ratio)
    "Wu Yi (无射)": 2.0000,                 // 1 Wu Yi = 2.0000 × Huang Zhong (11th Lü, 2:1 ratio)
    "Ying Zhong (应钟)": 2.1333,            // 1 Ying Zhong = 2.1333 × Huang Zhong (12th Lü, approx. 9:4 ratio)
    
    "group_Five Notes (五音) - Pentatonic Scale": 0,
    "Gong (宫)": 1,                         // Gong = Base pitch (identical to Huang Zhong)
    "Shang (商)": 1.1250,                   // Shang = 1.1250 × Gong (9:8 ratio)
    "Jue (角)": 1.3333,                     // Jue = 1.3333 × Gong (4:3 ratio)
    "Zhi (徵)": 1.5000,                     // Zhi = 1.5000 × Gong (3:2 ratio)
    "Yu (羽)": 1.6667,                      // Yu = 1.6667 × Gong (5:3 ratio)
    
    "group_Seven Notes (七音) - Heptatonic Scale": 0,
    "Gong (宫) - Seven": 1,                 // Gong = Base pitch
    "Shang (商) - Seven": 1.1250,           // Shang = 1.1250 × Gong (9:8 ratio)
    "Jue (角) - Seven": 1.2500,             // Jue = 1.2500 × Gong (5:4 ratio)
    "Bian Zhi (变徵)": 1.3333,              // Bian Zhi = 1.3333 × Gong (4:3 ratio)
    "Zhi (徵) - Seven": 1.5000,             // Zhi = 1.5000 × Gong (3:2 ratio)
    "Yu (羽) - Seven": 1.6667,              // Yu = 1.6667 × Gong (5:3 ratio)
    "Bian Gong (变宫)": 1.8750,             // Bian Gong = 1.8750 × Gong (15:8 ratio)
    
    "group_String Length Proportions": 0,
    "Full String": 1,                       // Full string length = base unit
    "8/9 Length": 0.8889,                   // 8/9 string length (produces Shang note)
    "4/5 Length": 0.8000,                   // 4/5 string length (produces Jue note in 7-tone)
    "3/4 Length": 0.7500,                   // 3/4 string length (produces Bian Zhi note)
    "2/3 Length": 0.6667,                   // 2/3 string length (produces Zhi note)
    "3/5 Length": 0.6000,                   // 3/5 string length (produces Yu note)
    "8/15 Length": 0.5333,                  // 8/15 string length (produces Bian Gong note)
    "1/2 Length": 0.5000,                   // 1/2 string length (produces Wu Yi note, octave higher)
    
    "group_Bell Tone Units": 0,
    "Zheng Tone (正音)": 1,                 // Primary/fundamental tone of a bell
    "Qing Tone (清音)": 2,                  // Secondary tone of a bell (typically an octave higher)
    "Subsidiary Tone": 1.5,                 // Typical first subsidiary tone (often a fifth)
    "Gu Yin (姑音)": 1.3333,                // 4/3 ratio tone often present in bells
    "Hui Yin (徽音)": 2.6667,               // Higher harmonic typically found in bells
    
    "group_Regional Style Variations": 0,
    "Zhong Yuan Yun (中原韵)": 1,           // Central Plains standard tuning
    "Jiang Nan Yun (江南韵)": 0.9667,       // Southern tuning (slightly lower)
    "Jiang Bei Yun (江北韵)": 1.0333,       // Northern tuning (slightly higher)
    "Xi Liang Yun (西凉韵)": 1.0667,        // Western regions tuning
    
    // Modern Equivalents
    "group_Modern Units": 0,
    "Hertz [Hz]": 1,                        // Base unit for frequency
    "Octave Ratio": 2,                      // 1 Octave = frequency ratio of 2:1
    "Fifth Ratio": 1.5,                     // Perfect fifth = frequency ratio of 3:2
    "Fourth Ratio": 1.3333,                 // Perfect fourth = frequency ratio of 4:3
    "Major Third": 1.25,                    // Major third = frequency ratio of 5:4
    "Semitone (Equal)": 1.05946,            // Equal temperament semitone = 12√2 ratio
    "Cent": 1.00058,                        // 1 Cent = 1200√2 ratio (1/100 of an equal semitone)
    "A4 (440 Hz)": 440,                     // Modern concert pitch standard
    "C4 (Middle C)": 261.63                 // Modern Middle C
  };