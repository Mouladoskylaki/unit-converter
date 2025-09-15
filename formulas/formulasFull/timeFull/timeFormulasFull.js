// timeConverterCategories.js - Full Time Converter
// Comprehensive time units organized by meaningful categories

// Standard Time Units - most commonly used time measurements
export const standardTimeFormulas = {
  "group_Standard Time Units": 0,
  "second [s]": 1, // Base unit
  "minute [min]": 60,
  "hour [h]": 3600,
  "day [d]": 86400,
  "week [wk]": 604800,
  "month [mo]": 2629746, // Average month = 30.44 days
  "year [yr]": 31556952, // 365.2425 days - Gregorian calendar
  
  "group_Sub-second Precision": 0,
  "millisecond [ms]": 0.001,
  "microsecond [μs]": 0.000001,
  "nanosecond [ns]": 0.000000001,
  "picosecond [ps]": 0.000000000001,
  "femtosecond [fs]": 0.000000000000001,
  "attosecond [as]": 0.000000000000000001,
  
  "group_Extended Periods": 0,
  "decade [dec]": 315569520, // 10 years
  "score [score]": 631139040, // 20 years
  "generation [gen]": 946708560, // 30 years
  "century [c]": 3155695200, // 100 years
  "millennium [mil]": 31556952000 // 1000 years
};

// Work and Business Time - professional and commercial time measurements
export const workBusinessFormulas = {
  // Standard time units for conversion
  "second [s]": 1,
  "minute [min]": 60,
  "hour [h]": 3600,
  "day [d]": 86400,
  "week [wk]": 604800,
  "month [mo]": 2629746,
  "year [yr]": 31556952,
  
  "group_Work Time Units": 0,
  "workday [wd]": 28800, // 8 hours
  "work week [ww]": 144000, // 5 workdays = 40 hours
  "business month [bmo]": 1728000, // ~20 workdays
  "quarter [qtr]": 7889238, // 3 months
  "fiscal year [fy]": 31556952, // Same as regular year
  "business year [by]": 22075200, // 255 business days
  
  "group_Shift Work": 0,
  "shift (8h) [shift8]": 28800,
  "shift (10h) [shift10]": 36000,
  "shift (12h) [shift12]": 43200,
  "double shift [double]": 57600, // 16 hours
  "split shift [split]": 28800, // 8 hours total
  
  "group_Break Periods": 0,
  "coffee break [coffee]": 900, // 15 minutes
  "lunch break [lunch]": 3600, // 1 hour
  "tea break [tea]": 600, // 10 minutes
  "smoke break [smoke]": 300, // 5 minutes
  
  "group_Project Time": 0,
  "sprint (2wk) [sprint2]": 1209600,
  "sprint (3wk) [sprint3]": 1814400,
  "sprint (4wk) [sprint4]": 2419200,
  "iteration [iter]": 1209600, // 2 weeks
  "milestone [milestone]": 7889238, // 3 months
  "project phase [phase]": 15778476 // 6 months
};

// Astronomical and Calendar Time - celestial and calendar-based measurements
export const astronomicalFormulas = {
  // Standard time units for conversion
  "second [s]": 1,
  "minute [min]": 60,
  "hour [h]": 3600,
  "day [d]": 86400,
  "week [wk]": 604800,
  "month [mo]": 2629746,
  "year [yr]": 31556952,
  
  "group_Astronomical Time": 0,
  "sidereal day [sd]": 86164.091, // 23h 56m 4.091s
  "sidereal year [syr]": 31558149.5,
  "tropical year [ty]": 31556925.2,
  "anomalistic year [ay]": 31558432.6,
  "draconic year [dy]": 31556068.8,
  "Gaussian year [gy]": 31557600,
  
  "group_Lunar Time": 0,
  "lunar day [ld]": 2551443, // 29.53 Earth days
  "lunar month [lmo]": 2551443, // Synodic month
  "lunar year [ly]": 30617316, // 12 lunar months
  "blue moon period [blue]": 7654329, // ~88.5 days
  
  "group_Planetary Time": 0,
  "Mars sol [sol]": 88775, // Martian day = 24h 37m 23s
  "Mars year [mars yr]": 59354294, // 687 Earth days
  "Venus day [venus d]": 20996800, // 243 Earth days
  "Mercury day [mercury d]": 5067840, // 58.6 Earth days
  
  "group_Calendar Variations": 0,
  "Julian year [jul yr]": 31557600, // 365.25 days exactly
  "leap year [leap]": 31622400, // 366 days
  "common year [common]": 31536000, // 365 days
  "fiscal quarter [fq]": 7889238, // ~91.25 days
  "academic semester [sem]": 11059200, // ~4 months
  "academic year [ac yr]": 24105600 // ~9 months
};

// Historical and Traditional Time - ancient and cultural time measurements
export const historicalFormulas = {
  // Standard time units for conversion
  "second [s]": 1,
  "minute [min]": 60,
  "hour [h]": 3600,
  "day [d]": 86400,
  "week [wk]": 604800,
  "month [mo]": 2629746,
  "year [yr]": 31556952,
  
  "group_Ancient Time Units": 0,
  "fortnight [fn]": 1209600, // 14 days
  "sennight [sn]": 604800, // 7 days (archaic week)
  "watch [watch]": 14400, // 4 hours (naval)
  "dog watch [dog]": 7200, // 2 hours (naval)
  "bell (naval) [bell]": 1800, // 30 minutes
  
  "group_Roman Time": 0,
  "hora (Roman) [hora]": 3600, // Roman hour
  "vigilia (Roman) [vigilia]": 10800, // 3-hour watch
  "dies (Roman) [dies]": 86400, // Roman day
  "nundinum [nund]": 777600, // 9-day Roman week
  "mensis (Roman) [mensis]": 2629746, // Roman month
  
  "group_Biblical Time": 0,
  "biblical day [bib d]": 86400,
  "biblical watch [bib w]": 10800, // 3 hours
  "biblical hour [bib h]": 3600,
  "sabbath year [sab yr]": 31556952, // 7th year
  "jubilee [jubilee]": 1577847600, // 50 years
  
  "group_Medieval Time": 0,
  "canonical hour [can h]": 10800, // 3 hours
  "matins [matins]": 3600, // ~1 hour
  "prime [prime]": 3600,
  "terce [terce]": 3600,
  "sext [sext]": 3600,
  "none [none]": 3600,
  "vespers [vespers]": 3600,
  "compline [compline]": 3600,
  
  "group_Traditional Periods": 0,
  "olympiad [olympiad]": 126227808, // 4 years
  "lustrum [lustrum]": 157784760, // 5 years
  "indiction [indiction]": 441898932, // 15 years
  "saeculum [saeculum]": 2208994656, // ~70 years
  "kalpa [kalpa]": 1.36e17, // Hindu cosmic time
  "yuga [yuga]": 4.32e12 // Hindu age
};

// Scientific and Technical Time - precision and specialized measurements
export const scientificFormulas = {
  // Standard time units for conversion
  "second [s]": 1,
  "minute [min]": 60,
  "hour [h]": 3600,
  "day [d]": 86400,
  "millisecond [ms]": 0.001,
  "microsecond [μs]": 0.000001,
  "nanosecond [ns]": 0.000000001,
  
  "group_Atomic Time": 0,
  "atomic time unit [atu]": 2.418884326e-17, // ℏ/Eₕ
  "Planck time [tp]": 5.39e-44,
  "jiffy (physics) [jiffy]": 3e-24, // Time for light to travel 1 fm
  "shake [shake]": 1e-8, // 10 nanoseconds
  "tau [tau]": 6.28318530718, // Time constant
  
  "group_Computing Time": 0,
  "tick [tick]": 0.0001, // 100 nanoseconds (Windows)
  "jiffy (computing) [comp jiffy]": 0.01, // 1/100 second
  "clock cycle [cycle]": 1e-9, // ~1 GHz processor
  "frame (60fps) [frame60]": 0.016666667, // 1/60 second
  "frame (30fps) [frame30]": 0.033333333, // 1/30 second
  "frame (24fps) [frame24]": 0.041666667, // 1/24 second
  
  "group_Physics Constants": 0,
  "half-life (generic) [t1/2]": 1, // Variable, using 1s as base
  "time constant [τ]": 1, // Variable, using 1s as base
  "period (generic) [T]": 1, // Variable, using 1s as base
  "frequency unit [f⁻¹]": 1, // Reciprocal frequency
  
  "group_Laboratory Time": 0,
  "reaction time [rxn]": 3600, // 1 hour typical
  "incubation time [incub]": 86400, // 24 hours
  "half-life C14 [C14]": 1.80844e11, // 5,730 years
  "decay constant [λ]": 1, // Variable
  "residence time [res t]": 1, // Variable
  "retention time [ret t]": 60 // Typical 1 minute
};

// Media and Entertainment Time - creative and performance measurements
export const mediaFormulas = {
  // Standard time units for conversion
  "second [s]": 1,
  "minute [min]": 60,
  "hour [h]": 3600,
  "millisecond [ms]": 0.001,
  
  "group_Music Time": 0,
  "beat [beat]": 0.5, // 120 BPM standard
  "measure (4/4) [meas]": 2, // 4 beats at 120 BPM
  "phrase [phrase]": 8, // 16 beats
  "chorus [chorus]": 32, // ~32 beats
  "verse [verse]": 32, // ~32 beats
  "song (average) [song]": 210, // 3.5 minutes
  "album [album]": 2400, // 40 minutes
  "symphony [symphony]": 2700, // 45 minutes
  "opera [opera]": 10800, // 3 hours
  
  "group_Film & Video": 0,
  "film frame (24fps) [film frame]": 0.041666667,
  "TV frame (30fps) [tv frame]": 0.033333333,
  "scene [scene]": 180, // 3 minutes average
  "act [act]": 1800, // 30 minutes
  "short film [short]": 1800, // 30 minutes max
  "feature film [feature]": 6600, // 110 minutes average
  "miniseries episode [mini ep]": 3600, // 1 hour
  "TV episode [tv ep]": 2640, // 44 minutes (with ads = 60)
  "commercial break [ad break]": 180, // 3 minutes
  
  "group_Technical Broadcasting": 0,
  "PAL frame [pal]": 0.04, // 25 fps
  "NTSC frame [ntsc]": 0.033367, // 29.97 fps
  "film reel [reel]": 600, // 10 minutes
  "commercial [commercial]": 15, // 15 seconds
  "station ID [id]": 10, // 10 seconds
  "bumper [bumper]": 5, // 5 seconds
  
  "group_Gaming Time": 0,
  "game tick [g tick]": 0.05, // 20 ticks per second (Minecraft)
  "turn [turn]": 30, // 30 seconds average
  "round [round]": 300, // 5 minutes
  "match [match]": 1800, // 30 minutes
  "campaign session [session]": 14400, // 4 hours (D&D)
  "speedrun [speedrun]": 3600, // 1 hour average
  
  "group_Radio & Podcast": 0,
  "radio hour [radio h]": 2700, // 45 min content + 15 min ads
  "podcast episode [podcast]": 2400, // 40 minutes average
  "audiobook hour [audio h]": 3600,
  "news segment [news]": 300, // 5 minutes
  "weather report [weather]": 120, // 2 minutes
  "traffic report [traffic]": 90 // 1.5 minutes
};

// Sports and Recreation Time - athletic and recreational measurements
export const sportsFormulas = {
  // Standard time units for conversion
  "second [s]": 1,
  "minute [min]": 60,
  "hour [h]": 3600,
  "millisecond [ms]": 0.001,
  
  "group_Track & Field": 0,
  "sprint time [sprint]": 10, // 100m ~10 seconds
  "mile time [mile t]": 240, // 4 minutes
  "marathon time [marathon]": 7200, // 2 hours elite
  "relay leg [relay]": 10, // ~10 seconds per leg
  "lap (400m) [lap400]": 60, // 1 minute average
  
  "group_Team Sports": 0,
  "football quarter [fb qtr]": 900, // 15 minutes
  "football half [fb half]": 1800, // 30 minutes
  "football game [fb game]": 10800, // 3 hours with breaks
  "basketball quarter [bb qtr]": 720, // 12 minutes
  "basketball half [bb half]": 1440, // 24 minutes
  "soccer half [soccer half]": 2700, // 45 minutes
  "soccer match [soccer]": 5400, // 90 minutes
  "hockey period [hockey p]": 1200, // 20 minutes
  "hockey game [hockey]": 3600, // 60 minutes playing time
  "baseball inning [inning]": 1200, // ~20 minutes average
  "baseball game [baseball]": 10800, // ~3 hours
  
  "group_Individual Sports": 0,
  "tennis set [tennis set]": 2400, // 40 minutes average
  "tennis match [tennis]": 7200, // 2 hours average
  "golf hole [golf hole]": 900, // 15 minutes
  "golf round [golf]": 14400, // 4 hours
  "boxing round [box round]": 180, // 3 minutes
  "boxing match [boxing]": 2160, // 12 rounds + breaks
  
  "group_Olympic Events": 0,
  "swimming event [swim]": 120, // 2 minutes average
  "diving event [dive]": 3600, // 1 hour competition
  "gymnastics routine [gym]": 90, // 1.5 minutes
  "figure skating [figure]": 240, // 4 minutes program
  "ski run [ski]": 120, // 2 minutes downhill
  
  "group_Recreational Time": 0,
  "workout [workout]": 3600, // 1 hour
  "yoga class [yoga]": 5400, // 90 minutes
  "meditation [meditation]": 1200, // 20 minutes
  "jog [jog]": 1800, // 30 minutes
  
  "group_Racing & Motorsports": 0,
  "lap time [lap]": 90, // ~1.5 minutes average
  "pit stop [pit]": 3, // ~3 seconds F1
  "qualifying [qualify]": 900, // 15 minutes
  "practice session [practice]": 5400, // 90 minutes
  "F1 race [f1]": 6300, // ~1h 45min
  "NASCAR race [nascar]": 10800, // 3 hours
  "endurance race [endurance]": 86400, // 24 hours Le Mans
};

// Cooking and Kitchen Time - culinary timing measurements
export const cookingFormulas = {
  // Standard time units for conversion
  "second [s]": 1,
  "minute [min]": 60,
  "hour [h]": 3600,
  "day [d]": 86400,
  
  "group_Cooking Times": 0,
  "1 minute [1min]": 60,
  "2 minutes [2min]": 120,
  "5 minutes [5min]": 300,
  "10 minutes [10min]": 600,
  "15 minutes [15min]": 900,
  "20 minutes [20min]": 1200,
  "30 minutes [30min]": 1800,
  "45 minutes [45min]": 2700,
  "1 hour [1h]": 3600,
  "1.5 hours [1.5h]": 5400,
  "2 hours [2h]": 7200,
  "3 hours [3h]": 10800,
  
  "group_Additional Useful Units": 0,
  "3 minutes [3min]": 180,
  "6 minutes [6min]": 360,
  "90 minutes [90min]": 5400, // Movie length
  "2.5 hours [2.5h]": 9000,
  "6 hours [6h]": 21600,
  "8 hours [8h]": 28800,
  "12 hours [12h]": 43200,
  "18 hours [18h]": 64800,
  
  "group_Baking Times": 0,
  "quick bread [quick bread]": 3000, // 50 minutes
  "cake layer [cake]": 1800, // 30 minutes
  "cookies [cookies]": 720, // 12 minutes
  "pie crust [pie crust]": 900, // 15 minutes
  "bread loaf [bread]": 2700, // 45 minutes
  "pizza [pizza]": 900, // 15 minutes
  "muffins [muffins]": 1200, // 20 minutes
  
  "group_Slow Cooking": 0,
  "slow cook low [slow low]": 28800, // 8 hours
  "slow cook high [slow high]": 14400, // 4 hours
  "braising [braise]": 7200, // 2 hours
  "roasting [roast]": 10800, // 3 hours
  "smoking [smoke]": 43200, // 12 hours
  
  "group_Food Prep": 0,
  "marinating [marinade]": 14400, // 4 hours minimum
  "rising dough [rise]": 3600, // 1 hour
  "proofing [proof]": 1800, // 30 minutes
  "resting dough [rest]": 600, // 10 minutes
  "tempering chocolate [temper]": 1800, // 30 minutes
  "chilling [chill]": 7200, // 2 hours
  "freezing [freeze]": 14400, // 4 hours
  
  "group_Special Techniques": 0,
  "sous vide [sous vide]": 3600, // 1+ hours variable
  "fermentation [ferment]": 172800, // 2 days minimum
  "aging cheese [age]": 2592000, // 30 days minimum
  "curing meat [cure]": 604800, // 7 days minimum
  "pickling [pickle]": 86400, // 24 hours minimum
  "dehydrating [dehydrate]": 28800 // 8 hours
};

// Transportation and Travel Time - journey and transit measurements
export const transportationFormulas = {
  // Standard time units for conversion
  "second [s]": 1,
  "minute [min]": 60,
  "hour [h]": 3600,
  "day [d]": 86400,
  "week [wk]": 604800,
  
  "group_Daily Commute": 0,
  "walk to work [walk work]": 900, // 15 minutes
  "bike commute [bike comm]": 1200, // 20 minutes
  "bus ride [bus]": 1800, // 30 minutes
  "subway ride [subway]": 2400, // 40 minutes
  "car commute [car comm]": 1500, // 25 minutes
  "train commute [train comm]": 3600, // 1 hour
  
  "group_Short Travel": 0,
  "city drive [city]": 1800, // 30 minutes
  "highway drive [highway]": 7200, // 2 hours
  "regional flight [regional]": 5400, // 1.5 hours
  "train journey [train]": 14400, // 4 hours
  "bus trip [bus trip]": 18000, // 5 hours
  
  "group_Long Distance": 0,
  "domestic flight [domestic]": 18000, // 5 hours
  "international flight [intl]": 36000, // 10 hours
  "trans-Atlantic [atlantic]": 28800, // 8 hours
  "trans-Pacific [pacific]": 43200, // 12 hours
  "around world [world]": 86400, // 24 hours flight time
  
  "group_Sea Travel": 0,
  "ferry ride [ferry]": 3600, // 1 hour
  "cruise day [cruise d]": 86400, // 24 hours
  "cruise week [cruise w]": 604800, // 7 days
  "ocean crossing [ocean]": 604800, // 7 days
  "cargo ship [cargo]": 1814400, // 21 days
  
  "group_Land Journeys": 0,
  "road trip day [road d]": 28800, // 8 hours driving
  "cross country [cross US]": 259200, // 3 days
  "walking pilgrimage [pilgrim]": 2592000, // 30 days
  "hiking trail [hike]": 604800, // 7 days
  "expedition [expedition]": 5184000, // 60 days
  
  "group_Space Travel": 0,
  "orbit [orbit]": 5940, // 99 minutes ISS orbit
  "moon trip [moon]": 259200, // 3 days
  "Mars journey [mars]": 23328000, // 9 months
  "outer planet [outer]": 94608000 // 3 years to Jupiter
};

// Biological and Life Time - natural cycles and life processes
export const biologicalFormulas = {
  // Standard time units for conversion
  "second [s]": 1,
  "minute [min]": 60,
  "hour [h]": 3600,
  "day [d]": 86400,
  "week [wk]": 604800,
  "month [mo]": 2629746,
  "year [yr]": 31556952,
  
  "group_Human Cycles": 0,
  "heartbeat [heartbeat]": 0.857, // 70 BPM
  "breath [breath]": 3, // 20 breaths/minute
  "blink [blink]": 0.3, // ~3 seconds between blinks
  "sleep cycle [sleep cyc]": 5400, // 90 minutes
  "REM cycle [rem]": 3600, // 1 hour
  "circadian rhythm [circadian]": 86400, // 24 hours
  "menstrual cycle [menstrual]": 2419200, // 28 days
  
  "group_Life Stages": 0,
  "gestation human [gestation]": 23668800, // 40 weeks
  "infancy [infancy]": 63113904, // 2 years
  "childhood [childhood]": 315569520, // 10 years
  "adolescence [adolescence]": 220907712, // 7 years
  "young adult [young]": 315569520, // 10 years (20-30)
  "middle age [middle]": 631139040, // 20 years (30-50)
  "senior years [senior]": 946708560, // 30 years (50-80)
  "average lifespan [lifespan]": 2524173840, // 80 years
  
  "group_Animal Cycles": 0,
  "dog year [dog yr]": 4508136, // ~1/7 human year
  "cat year [cat yr]": 5259492, // ~1/6 human year
  "elephant gestation [elephant g]": 58060800, // 22 months
  "mouse lifespan [mouse life]": 63113904, // 2 years
  "mayfly life [mayfly]": 86400, // 1 day
  "cicada cycle [cicada]": 536396208, // 17 years
  
  "group_Plant Cycles": 0,
  "growing season [grow]": 15778476, // 6 months
  "germination [germinate]": 604800, // 1 week
  "flowering [flower]": 1209600, // 2 weeks
  "fruit ripening [ripen]": 2419200, // 4 weeks
  "tree growth ring [ring]": 31556952, // 1 year
  "bamboo growth [bamboo]": 86400, // 1 day (can grow 1m/day)
  
  "group_Cellular Time": 0,
  "cell division [mitosis]": 3600, // 1 hour typical
  "protein synthesis [protein]": 60, // 1 minute
  "enzyme reaction [enzyme]": 0.001, // Milliseconds
  "nerve impulse [impulse]": 0.001, // 1 millisecond
  "muscle contraction [contract]": 0.1, // 100 milliseconds
  
  "group_Emergency & Medical": 0,
  "golden hour [golden]": 3600, // First hour after trauma
  "CPR cycle [cpr]": 120, // 2 minutes
  "emergency response [emr]": 480, // 8 minutes average
  "surgery hour [surgery]": 3600, // 1 hour
  "anesthesia [anesthesia]": 1800, // 30 minutes average
  "recovery time [recovery]": 7200, // 2 hours post-op
  
  "group_Pregnancy & Development": 0,
  "trimester [trimester]": 7889238, // ~13 weeks
  "fetal heartbeat [fetal hb]": 0.4, // ~150 BPM
  "contractions [contractions]": 300, // 5 minutes apart
  "labor [labor]": 43200, // 12 hours average first birth
  "newborn sleep cycle [newborn]": 7200, // 2 hours
};