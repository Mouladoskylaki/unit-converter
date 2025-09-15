// timePrecision.js - Complete
// Precision settings to match the updated time category format

export const timePrecision = {
  // Standard Time Units
  "standardtime": {
    "second [s]": 0,
    "minute [min]": 0,
    "hour [h]": 0,
    "day [d]": 0,
    "week [wk]": 0,
    "month [mo]": 0,
    "year [yr]": 0,
    
    // Sub-second Precision
    "millisecond [ms]": 1,
    "microsecond [μs]": 2,
    "nanosecond [ns]": 3,
    "picosecond [ps]": 4,
    "femtosecond [fs]": 6,
    "attosecond [as]": 8,
    
    // Extended Periods
    "decade [dec]": 0,
    "score [score]": 0,
    "generation [gen]": 0,
    "century [c]": 0,
    "millennium [mil]": 0
  },
  
  // Work and Business Time
  "workbusiness": {
    "second [s]": 0,
    "minute [min]": 0,
    "hour [h]": 0,
    "day [d]": 0,
    "week [wk]": 0,
    "month [mo]": 0,
    "year [yr]": 0,
    
    // Work Time Units
    "workday [wd]": 0,
    "work week [ww]": 0,
    "business month [bmo]": 0,
    "quarter [qtr]": 0,
    "fiscal year [fy]": 0,
    "business year [by]": 0,
    
    // Shift Work
    "shift (8h) [shift8]": 0,
    "shift (10h) [shift10]": 0,
    "shift (12h) [shift12]": 0,
    "double shift [double]": 0,
    "split shift [split]": 0,
    
    // Break Periods
    "coffee break [coffee]": 0,
    "lunch break [lunch]": 0,
    "tea break [tea]": 0,
    "smoke break [smoke]": 0,
    
    // Project Time
    "sprint (2wk) [sprint2]": 0,
    "sprint (3wk) [sprint3]": 0,
    "sprint (4wk) [sprint4]": 0,
    "iteration [iter]": 0,
    "milestone [milestone]": 0,
    "project phase [phase]": 0
  },
  
  // Astronomical and Calendar Time
  "astronomical": {
    "second [s]": 0,
    "minute [min]": 0,
    "hour [h]": 0,
    "day [d]": 0,
    "week [wk]": 0,
    "month [mo]": 0,
    "year [yr]": 0,
    
    // Astronomical Time
    "sidereal day [sd]": 1,
    "sidereal year [syr]": 1,
    "tropical year [ty]": 1,
    "anomalistic year [ay]": 1,
    "draconic year [dy]": 1,
    "Gaussian year [gy]": 0,
    
    // Lunar Time
    "lunar day [ld]": 0,
    "lunar month [lmo]": 0,
    "lunar year [ly]": 0,
    "blue moon period [blue]": 0,
    
    // Planetary Time
    "Mars sol [sol]": 0,
    "Mars year [mars yr]": 0,
    "Venus day [venus d]": 0,
    "Mercury day [mercury d]": 0,
    
    // Calendar Variations
    "Julian year [jul yr]": 0,
    "leap year [leap]": 0,
    "common year [common]": 0,
    "fiscal quarter [fq]": 0,
    "academic semester [sem]": 0,
    "academic year [ac yr]": 0
  },
  
  // Historical and Traditional Time
  "historical": {
    "second [s]": 0,
    "minute [min]": 0,
    "hour [h]": 0,
    "day [d]": 0,
    "week [wk]": 0,
    "month [mo]": 0,
    "year [yr]": 0,
    
    // Ancient Time Units
    "fortnight [fn]": 0,
    "sennight [sn]": 0,
    "watch [watch]": 0,
    "dog watch [dog]": 0,
    "bell (naval) [bell]": 0,
    
    // Roman Time
    "hora (Roman) [hora]": 0,
    "vigilia (Roman) [vigilia]": 0,
    "dies (Roman) [dies]": 0,
    "nundinum [nund]": 0,
    "mensis (Roman) [mensis]": 0,
    
    // Biblical Time
    "biblical day [bib d]": 0,
    "biblical watch [bib w]": 0,
    "biblical hour [bib h]": 0,
    "sabbath year [sab yr]": 0,
    "jubilee [jubilee]": 0,
    
    // Medieval Time
    "canonical hour [can h]": 0,
    "matins [matins]": 0,
    "prime [prime]": 0,
    "terce [terce]": 0,
    "sext [sext]": 0,
    "none [none]": 0,
    "vespers [vespers]": 0,
    "compline [compline]": 0,
    
    // Traditional Periods
    "olympiad [olympiad]": 0,
    "lustrum [lustrum]": 0,
    "indiction [indiction]": 0,
    "saeculum [saeculum]": 0,
    "kalpa [kalpa]": 6,
    "yuga [yuga]": 4
  },
  
  // Scientific and Technical Time
  "scientific": {
    "second [s]": 0,
    "minute [min]": 0,
    "hour [h]": 0,
    "day [d]": 0,
    "millisecond [ms]": 1,
    "microsecond [μs]": 2,
    "nanosecond [ns]": 3,
    
    // Atomic Time
    "atomic time unit [atu]": 10,
    "Planck time [tp]": 12,
    "jiffy (physics) [jiffy]": 8,
    "shake [shake]": 3,
    "tau [tau]": 2,
    
    // Computing Time
    "tick [tick]": 4,
    "jiffy (computing) [comp jiffy]": 2,
    "clock cycle [cycle]": 3,
    "frame (60fps) [frame60]": 6,
    "frame (30fps) [frame30]": 6,
    "frame (24fps) [frame24]": 6,
    
    // Physics Constants
    "half-life (generic) [t1/2]": 1,
    "time constant [τ]": 1,
    "period (generic) [T]": 1,
    "frequency unit [f⁻¹]": 1,
    
    // Laboratory Time
    "reaction time [rxn]": 0,
    "incubation time [incub]": 0,
    "half-life C14 [C14]": 2,
    "decay constant [λ]": 1,
    "residence time [res t]": 1,
    "retention time [ret t]": 0
  },
  
  // Media and Entertainment Time
  "media": {
    "second [s]": 0,
    "minute [min]": 0,
    "hour [h]": 0,
    "millisecond [ms]": 1,
    
    // Music Time
    "beat [beat]": 1,
    "measure (4/4) [meas]": 0,
    "phrase [phrase]": 0,
    "chorus [chorus]": 0,
    "verse [verse]": 0,
    "song (average) [song]": 0,
    "album [album]": 0,
    "symphony [symphony]": 0,
    "opera [opera]": 0,
    
    // Film & Video
    "film frame (24fps) [film frame]": 6,
    "TV frame (30fps) [tv frame]": 6,
    "scene [scene]": 0,
    "act [act]": 0,
    "short film [short]": 0,
    "feature film [feature]": 0,
    "miniseries episode [mini ep]": 0,
    "TV episode [tv ep]": 0,
    "commercial break [ad break]": 0,
    
    // Gaming Time
    "game tick [g tick]": 2,
    "turn [turn]": 0,
    "round [round]": 0,
    "match [match]": 0,
    "campaign session [session]": 0,
    "speedrun [speedrun]": 0,
    
    // Radio & Podcast
    "radio hour [radio h]": 0,
    "podcast episode [podcast]": 0,
    "audiobook hour [audio h]": 0,
    "news segment [news]": 0,
    "weather report [weather]": 0,
    "traffic report [traffic]": 0,
    
    // Technical Broadcasting
    "PAL frame [pal]": 3,
    "NTSC frame [ntsc]": 6,
    "film reel [reel]": 0,
    "commercial [commercial]": 0,
    "station ID [id]": 0,
    "bumper [bumper]": 0
  },
  
  // Sports and Recreation Time
  "sports": {
    "second [s]": 0,
    "minute [min]": 0,
    "hour [h]": 0,
    "millisecond [ms]": 1,
    
    // Track & Field
    "sprint time [sprint]": 0,
    "mile time [mile t]": 0,
    "marathon time [marathon]": 0,
    "relay leg [relay]": 0,
    "lap (400m) [lap400]": 0,
    
    // Team Sports
    "football quarter [fb qtr]": 0,
    "football half [fb half]": 0,
    "football game [fb game]": 0,
    "basketball quarter [bb qtr]": 0,
    "basketball half [bb half]": 0,
    "soccer half [soccer half]": 0,
    "soccer match [soccer]": 0,
    "hockey period [hockey p]": 0,
    "hockey game [hockey]": 0,
    "baseball inning [inning]": 0,
    "baseball game [baseball]": 0,
    
    // Individual Sports
    "tennis set [tennis set]": 0,
    "tennis match [tennis]": 0,
    "golf hole [golf hole]": 0,
    "golf round [golf]": 0,
    "boxing round [box round]": 0,
    "boxing match [boxing]": 0,
    
    // Olympic Events
    "swimming event [swim]": 0,
    "diving event [dive]": 0,
    "gymnastics routine [gym]": 0,
    "figure skating [figure]": 0,
    "ski run [ski]": 0,
    
    // Recreational Time
    "workout [workout]": 0,
    "yoga class [yoga]": 0,
    "meditation [meditation]": 0,
    "jog [jog]": 0,
    
    // Racing & Motorsports
    "lap time [lap]": 0,
    "pit stop [pit]": 0,
    "qualifying [qualify]": 0,
    "practice session [practice]": 0,
    "F1 race [f1]": 0,
    "NASCAR race [nascar]": 0,
    "endurance race [endurance]": 0
  },
  
  // Cooking and Kitchen Time
  "cooking": {
    "second [s]": 0,
    "minute [min]": 0,
    "hour [h]": 0,
    "day [d]": 0,
    
    // Cooking Times
    "1 minute [1min]": 0,
    "2 minutes [2min]": 0,
    "5 minutes [5min]": 0,
    "10 minutes [10min]": 0,
    "15 minutes [15min]": 0,
    "20 minutes [20min]": 0,
    "30 minutes [30min]": 0,
    "45 minutes [45min]": 0,
    "1 hour [1h]": 0,
    "1.5 hours [1.5h]": 0,
    "2 hours [2h]": 0,
    "3 hours [3h]": 0,
    
    // Additional Useful Units
    "3 minutes [3min]": 0,
    "6 minutes [6min]": 0,
    "90 minutes [90min]": 0,
    "2.5 hours [2.5h]": 0,
    "6 hours [6h]": 0,
    "8 hours [8h]": 0,
    "12 hours [12h]": 0,
    "18 hours [18h]": 0,
    
    // Baking Times
    "quick bread [quick bread]": 0,
    "cake layer [cake]": 0,
    "cookies [cookies]": 0,
    "pie crust [pie crust]": 0,
    "bread loaf [bread]": 0,
    "pizza [pizza]": 0,
    "muffins [muffins]": 0,
    
    // Slow Cooking
    "slow cook low [slow low]": 0,
    "slow cook high [slow high]": 0,
    "braising [braise]": 0,
    "roasting [roast]": 0,
    "smoking [smoke]": 0,
    
    // Food Prep
    "marinating [marinade]": 0,
    "rising dough [rise]": 0,
    "proofing [proof]": 0,
    "resting dough [rest]": 0,
    "tempering chocolate [temper]": 0,
    "chilling [chill]": 0,
    "freezing [freeze]": 0,
    
    // Special Techniques
    "sous vide [sous vide]": 0,
    "fermentation [ferment]": 0,
    "aging cheese [age]": 0,
    "curing meat [cure]": 0,
    "pickling [pickle]": 0,
    "dehydrating [dehydrate]": 0
  },
  
  // Transportation and Travel Time
  "transportation": {
    "second [s]": 0,
    "minute [min]": 0,
    "hour [h]": 0,
    "day [d]": 0,
    "week [wk]": 0,
    
    // Daily Commute
    "walk to work [walk work]": 0,
    "bike commute [bike comm]": 0,
    "bus ride [bus]": 0,
    "subway ride [subway]": 0,
    "car commute [car comm]": 0,
    "train commute [train comm]": 0,
    
    // Short Travel
    "city drive [city]": 0,
    "highway drive [highway]": 0,
    "regional flight [regional]": 0,
    "train journey [train]": 0,
    "bus trip [bus trip]": 0,
    
    // Long Distance
    "domestic flight [domestic]": 0,
    "international flight [intl]": 0,
    "trans-Atlantic [atlantic]": 0,
    "trans-Pacific [pacific]": 0,
    "around world [world]": 0,
    
    // Sea Travel
    "ferry ride [ferry]": 0,
    "cruise day [cruise d]": 0,
    "cruise week [cruise w]": 0,
    "ocean crossing [ocean]": 0,
    "cargo ship [cargo]": 0,
    
    // Land Journeys
    "road trip day [road d]": 0,
    "cross country [cross US]": 0,
    "walking pilgrimage [pilgrim]": 0,
    "hiking trail [hike]": 0,
    "expedition [expedition]": 0,
    
    // Space Travel
    "orbit [orbit]": 0,
    "moon trip [moon]": 0,
    "Mars journey [mars]": 0,
    "outer planet [outer]": 0
  },
  
  // Biological and Life Time
  "biological": {
    "second [s]": 0,
    "minute [min]": 0,
    "hour [h]": 0,
    "day [d]": 0,
    "week [wk]": 0,
    "month [mo]": 0,
    "year [yr]": 0,
    
    // Human Cycles
    "heartbeat [heartbeat]": 2,
    "breath [breath]": 0,
    "blink [blink]": 1,
    "sleep cycle [sleep cyc]": 0,
    "REM cycle [rem]": 0,
    "circadian rhythm [circadian]": 0,
    "menstrual cycle [menstrual]": 0,
    
    // Life Stages
    "gestation human [gestation]": 0,
    "infancy [infancy]": 0,
    "childhood [childhood]": 0,
    "adolescence [adolescence]": 0,
    "young adult [young]": 0,
    "middle age [middle]": 0,
    "senior years [senior]": 0,
    "average lifespan [lifespan]": 0,
    
    // Animal Cycles
    "dog year [dog yr]": 0,
    "cat year [cat yr]": 0,
    "elephant gestation [elephant g]": 0,
    "mouse lifespan [mouse life]": 0,
    "mayfly life [mayfly]": 0,
    "cicada cycle [cicada]": 0,
    
    // Plant Cycles
    "growing season [grow]": 0,
    "germination [germinate]": 0,
    "flowering [flower]": 0,
    "fruit ripening [ripen]": 0,
    "tree growth ring [ring]": 0,
    "bamboo growth [bamboo]": 0,
    
    // Cellular Time
    "cell division [mitosis]": 0,
    "protein synthesis [protein]": 0,
    "enzyme reaction [enzyme]": 2,
    "nerve impulse [impulse]": 2,
    "muscle contraction [contract]": 1,
    
    // Emergency & Medical
    "golden hour [golden]": 0,
    "CPR cycle [cpr]": 0,
    "emergency response [emr]": 0,
    "surgery hour [surgery]": 0,
    "anesthesia [anesthesia]": 0,
    "recovery time [recovery]": 0,
    
    // Pregnancy & Development
    "trimester [trimester]": 0,
    "fetal heartbeat [fetal hb]": 1,
    "contractions [contractions]": 0,
    "labor [labor]": 0,
    "newborn sleep cycle [newborn]": 0
  }
};