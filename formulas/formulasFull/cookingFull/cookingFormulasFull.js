// cookingConversionCategories.js
// Comprehensive cooking conversion categories with meaningful unit relationships

// Volume measurements - all interconvertible
export const volumeFormulas = {
  "group_US Volume": 0,
  "cup (US) [cup]": 236.588, // Base unit (milliliters)
  "tablespoon (US) [tbsp]": 14.7868, // 1 US tablespoon = 14.7868 ml
  "teaspoon (US) [tsp]": 4.92892, // 1 US teaspoon = 4.92892 ml
  "fluid ounce (US) [fl oz]": 29.5735, // 1 US fluid ounce = 29.5735 ml
  "pint (US) [pt]": 473.176, // 1 US pint = 473.176 ml
  "quart (US) [qt]": 946.353, // 1 US quart = 946.353 ml
  "gallon (US) [gal]": 3785.41, // 1 US gallon = 3785.41 ml
  
  "group_Metric Volume": 0,
  "milliliter [ml]": 1, // Base reference (1 ml)
  "liter [L]": 1000, // 1 liter = 1000 ml
  "centiliter [cl]": 10, // 1 centiliter = 10 ml
  "deciliter [dl]": 100, // 1 deciliter = 100 ml
  
  "group_UK Volume": 0,
  "cup (UK) [cup UK]": 284.131, // 1 UK cup = 284.131 ml
  "tablespoon (UK) [tbsp UK]": 17.7582, // 1 UK tablespoon = 17.7582 ml
  "teaspoon (UK) [tsp UK]": 5.91939, // 1 UK teaspoon = 5.91939 ml
  "fluid ounce (UK) [fl oz UK]": 28.4131, // 1 UK fluid ounce = 28.4131 ml
  "pint (UK) [pt UK]": 568.261, // 1 UK pint = 568.261 ml
  "quart (UK) [qt UK]": 1136.52, // 1 UK quart = 1136.52 ml
  "gallon (UK) [gal UK]": 4546.09, // 1 UK gallon = 4546.09 ml
  
  "group_Small Measures": 0,
  "pinch [pinch]": 0.3, // Approximately 0.3 ml
  "dash [dash]": 0.5, // Approximately 0.5 ml
  "drop [drop]": 0.05, // Approximately 0.05 ml
  "smidgen [smidgen]": 0.18, // Approximately 0.18 ml
  "scruple [scruple]": 1.23, // Approximately 1.23 ml
};

// Butter equivalents - all interconvertible
export const butterFormulas = {
  "group_Butter Measurements": 0,
  "stick of butter [stick]": 113.4, // 1 stick = 113.4 g
  "half stick of butter [half stick]": 56.7, // 1/2 stick = 56.7 g
  "quarter stick of butter [quarter stick]": 28.35, // 1/4 stick = 28.35 g
  "tablespoon of butter [tbsp butter]": 14.18, // 1 tbsp butter ≈ 14.18 g
  "teaspoon of butter [tsp butter]": 4.73, // 1 tsp butter ≈ 4.73 g
  "cup of butter [cup butter]": 227, // 1 cup butter = 227 g
  "pound of butter [lb butter]": 453.6, // 1 pound butter = 453.6 g
  "pat of butter [pat]": 9, // 1 pat ≈ 9 g (varies)
  "knob of butter [knob]": 15, // 1 knob ≈ 15 g (varies)
};

// Flour types - all interconvertible by weight
export const flourFormulas = {
  "group_White Flours": 0,
  "all-purpose flour [cup flour]": 125, // 1 cup all-purpose flour ≈ 125 g
  "bread flour [cup bread flour]": 130, // 1 cup bread flour ≈ 130 g
  "cake flour [cup cake flour]": 114, // 1 cup cake flour ≈ 114 g
  "self-rising flour [cup self-rising flour]": 125, // 1 cup self-rising flour ≈ 125 g
  "pastry flour [cup pastry flour]": 120, // 1 cup pastry flour ≈ 120 g
  "00 flour [cup 00 flour]": 127, // 1 cup 00 flour ≈ 127 g
  
  "group_Whole Grain Flours": 0,
  "whole wheat flour [cup wheat flour]": 128, // 1 cup whole wheat flour ≈ 128 g
  "rye flour [cup rye flour]": 102, // 1 cup rye flour ≈ 102 g
  "buckwheat flour [cup buckwheat flour]": 120, // 1 cup buckwheat flour ≈ 120 g
  "oat flour [cup oat flour]": 100, // 1 cup oat flour ≈ 100 g
  "barley flour [cup barley flour]": 115, // 1 cup barley flour ≈ 115 g
  "spelt flour [cup spelt flour]": 130, // 1 cup spelt flour ≈ 130 g
  
  "group_Non-Wheat Flours": 0,
  "almond flour [cup almond flour]": 112, // 1 cup almond flour ≈ 112 g
  "coconut flour [cup coconut flour]": 120, // 1 cup coconut flour ≈ 120 g
  "rice flour [cup rice flour]": 140, // 1 cup rice flour ≈ 140 g
  "corn flour [cup corn flour]": 125, // 1 cup corn flour ≈ 125 g
  "chickpea flour [cup chickpea flour]": 120, // 1 cup chickpea flour ≈ 120 g
  "tapioca flour [cup tapioca flour]": 120, // 1 cup tapioca flour ≈ 120 g
  
  "group_Starches": 0,
  "cornstarch [cup cornstarch]": 128, // 1 cup cornstarch ≈ 128 g
  "potato starch [cup potato starch]": 140, // 1 cup potato starch ≈ 140 g
  "arrowroot starch [cup arrowroot]": 128, // 1 cup arrowroot starch ≈ 128 g
  "tapioca starch [cup tapioca starch]": 120, // 1 cup tapioca starch ≈ 120 g
};

// Sugar types - all interconvertible by weight
export const sugarFormulas = {
  "group_Granulated Sugars": 0,
  "granulated sugar [cup sugar]": 200, // 1 cup granulated sugar ≈ 200 g
  "caster sugar [cup caster sugar]": 190, // 1 cup caster sugar ≈ 190 g
  "superfine sugar [cup superfine sugar]": 190, // 1 cup superfine sugar ≈ 190 g
  "sanding sugar [cup sanding sugar]": 210, // 1 cup sanding sugar ≈ 210 g
  
  "group_Brown Sugars": 0,
  "brown sugar (packed) [cup brown sugar]": 220, // 1 cup packed brown sugar ≈ 220 g
  "brown sugar (light) [cup light brown sugar]": 200, // 1 cup light brown sugar ≈ 200 g
  "dark brown sugar [cup dark brown sugar]": 213, // 1 cup dark brown sugar ≈ 213 g
  "muscovado sugar [cup muscovado]": 206, // 1 cup muscovado sugar ≈ 206 g
  "demerara sugar [cup demerara sugar]": 200, // 1 cup demerara sugar ≈ 200 g
  "turbinado sugar [cup turbinado sugar]": 198, // 1 cup turbinado sugar ≈ 198 g
  "coconut sugar [cup coconut sugar]": 180, // 1 cup coconut sugar ≈ 180 g
  "palm sugar [cup palm sugar]": 185, // 1 cup palm sugar ≈ 185 g
  
  "group_Powdered Sugars": 0,
  "confectioners' sugar [cup powdered sugar]": 120, // 1 cup powdered sugar ≈ 120 g
  "icing sugar [cup icing sugar]": 120, // 1 cup icing sugar ≈ 120 g
  "10x powdered sugar [cup 10x sugar]": 120, // 1 cup 10x powdered sugar ≈ 120 g
};

// Liquid sweeteners - all interconvertible by weight
export const liquidSweetenerFormulas = {
  "group_Liquid Sweeteners": 0,
  "honey [cup honey]": 340, // 1 cup honey ≈ 340 g
  "maple syrup [cup maple syrup]": 322, // 1 cup maple syrup ≈ 322 g
  "molasses [cup molasses]": 328, // 1 cup molasses ≈ 328 g
  "corn syrup [cup corn syrup]": 330, // 1 cup corn syrup ≈ 330 g
  "light corn syrup [cup light corn syrup]": 325, // 1 cup light corn syrup ≈ 325 g
  "dark corn syrup [cup dark corn syrup]": 332, // 1 cup dark corn syrup ≈ 332 g
  "agave nectar [cup agave]": 328, // 1 cup agave nectar ≈ 328 g
  "rice syrup [cup rice syrup]": 310, // 1 cup rice syrup ≈ 310 g
  "date syrup [cup date syrup]": 335, // 1 cup date syrup ≈ 335 g
  "simple syrup [cup simple syrup]": 300, // 1 cup simple syrup ≈ 300 g
  "golden syrup [cup golden syrup]": 340, // 1 cup golden syrup ≈ 340 g
  "treacle [cup treacle]": 330, // 1 cup treacle ≈ 330 g
};

// Oils and fats - all interconvertible by weight
export const oilFatFormulas = {
  "group_Cooking Oils": 0,
  "vegetable oil [cup oil]": 218, // 1 cup vegetable oil ≈ 218 g
  "olive oil [cup olive oil]": 216, // 1 cup olive oil ≈ 216 g
  "canola oil [cup canola oil]": 218, // 1 cup canola oil ≈ 218 g
  "coconut oil [cup coconut oil]": 218, // 1 cup coconut oil ≈ 218 g
  "avocado oil [cup avocado oil]": 218, // 1 cup avocado oil ≈ 218 g
  "sesame oil [cup sesame oil]": 217, // 1 cup sesame oil ≈ 217 g
  "peanut oil [cup peanut oil]": 216, // 1 cup peanut oil ≈ 216 g
  "sunflower oil [cup sunflower oil]": 218, // 1 cup sunflower oil ≈ 218 g
  "grapeseed oil [cup grapeseed oil]": 218, // 1 cup grapeseed oil ≈ 218 g
  "walnut oil [cup walnut oil]": 214, // 1 cup walnut oil ≈ 214 g
  "corn oil [cup corn oil]": 218, // 1 cup corn oil ≈ 218 g
  
  "group_Solid Fats": 0,
  "butter [cup solid butter]": 227, // 1 cup solid butter ≈ 227 g
  "melted butter [cup melted butter]": 227, // 1 cup melted butter ≈ 227 g
  "clarified butter [cup clarified butter]": 211, // 1 cup clarified butter ≈ 211 g
  "ghee [cup ghee]": 211, // 1 cup ghee ≈ 211 g
  "shortening [cup shortening]": 205, // 1 cup shortening ≈ 205 g
  "lard [cup lard]": 205, // 1 cup lard ≈ 205 g
  "beef tallow [cup tallow]": 212, // 1 cup beef tallow ≈ 212 g
  "duck fat [cup duck fat]": 218, // 1 cup duck fat ≈ 218 g
  "coconut oil (solid) [cup solid coconut oil]": 216, // 1 cup solid coconut oil ≈ 216 g
  "margarine [cup margarine]": 227, // 1 cup margarine ≈ 227 g
};

// Nuts and seeds - all interconvertible by weight
export const nutSeedFormulas = {
  "group_Whole Nuts": 0,
  "almonds (whole) [cup almonds]": 143, // 1 cup whole almonds ≈ 143 g
  "walnuts (halves) [cup walnut halves]": 120, // 1 cup walnut halves ≈ 120 g
  "pecans (halves) [cup pecan halves]": 110, // 1 cup pecan halves ≈ 110 g
  "cashews (whole) [cup cashews]": 160, // 1 cup cashews ≈ 160 g
  "peanuts (whole) [cup peanuts]": 146, // 1 cup peanuts ≈ 146 g
  "hazelnuts (whole) [cup hazelnuts]": 135, // 1 cup hazelnuts ≈ 135 g
  "brazil nuts (whole) [cup brazil nuts]": 140, // 1 cup brazil nuts ≈ 140 g
  "macadamia nuts (whole) [cup macadamias]": 134, // 1 cup macadamia nuts ≈ 134 g
  "pistachios (shelled) [cup pistachios]": 123, // 1 cup pistachios ≈ 123 g
  
  "group_Chopped Nuts": 0,
  "almonds (chopped) [cup chopped almonds]": 140, // 1 cup chopped almonds ≈ 140 g
  "walnuts (chopped) [cup walnuts]": 120, // 1 cup chopped walnuts ≈ 120 g
  "pecans (chopped) [cup pecans]": 110, // 1 cup chopped pecans ≈ 110 g
  "hazelnuts (chopped) [cup chopped hazelnuts]": 130, // 1 cup chopped hazelnuts ≈ 130 g
  "peanuts (chopped) [cup chopped peanuts]": 140, // 1 cup chopped peanuts ≈ 140 g
  
  "group_Ground Nuts": 0,
  "almond meal [cup almond meal]": 110, // 1 cup almond meal ≈ 110 g
  "ground walnuts [cup ground walnuts]": 100, // 1 cup ground walnuts ≈ 100 g
  "ground pecans [cup ground pecans]": 95, // 1 cup ground pecans ≈ 95 g
  "peanut flour [cup peanut flour]": 110, // 1 cup peanut flour ≈ 110 g
  "ground hazelnuts [cup ground hazelnuts]": 105, // 1 cup ground hazelnuts ≈ 105 g
  
  "group_Seeds": 0,
  "chia seeds [cup chia]": 170, // 1 cup chia seeds ≈ 170 g
  "flax seeds [cup flax]": 150, // 1 cup flax seeds ≈ 150 g
  "poppy seeds [cup poppy]": 145, // 1 cup poppy seeds ≈ 145 g
  "sesame seeds [cup sesame]": 150, // 1 cup sesame seeds ≈ 150 g
  "sunflower seeds (hulled) [cup sunflower]": 140, // 1 cup sunflower seeds ≈ 140 g
  "pumpkin seeds (hulled) [cup pumpkin seeds]": 130, // 1 cup pumpkin seeds ≈ 130 g
  "hemp seeds [cup hemp seeds]": 160, // 1 cup hemp seeds ≈ 160 g
  "ground flaxseed [cup ground flax]": 110, // 1 cup ground flaxseed ≈ 110 g
};

// Liquid dairy products - all interconvertible by weight
export const dairyLiquidFormulas = {
  "group_Fresh Milk": 0,
  "milk [cup milk]": 240, // 1 cup milk ≈ 240 g
  "skim milk [cup skim milk]": 245, // 1 cup skim milk ≈ 245 g
  "whole milk [cup whole milk]": 242, // 1 cup whole milk ≈ 242 g
  "buttermilk [cup buttermilk]": 245, // 1 cup buttermilk ≈ 245 g
  "goat milk [cup goat milk]": 242, // 1 cup goat milk ≈ 242 g
  "lactose-free milk [cup lactose-free milk]": 240, // 1 cup lactose-free milk ≈ 240 g
  
  "group_Plant-Based Milks": 0,
  "almond milk [cup almond milk]": 240, // 1 cup almond milk ≈ 240 g
  "soy milk [cup soy milk]": 243, // 1 cup soy milk ≈ 243 g
  "rice milk [cup rice milk]": 246, // 1 cup rice milk ≈ 246 g
  "oat milk [cup oat milk]": 240, // 1 cup oat milk ≈ 240 g
  "coconut milk (beverage) [cup coconut milk beverage]": 240, // 1 cup coconut milk beverage ≈ 240 g
  "cashew milk [cup cashew milk]": 240, // 1 cup cashew milk ≈ 240 g
  
  "group_Cream Products": 0,
  "heavy cream [cup heavy cream]": 238, // 1 cup heavy cream ≈ 238 g
  "light cream [cup light cream]": 240, // 1 cup light cream ≈ 240 g
  "half-and-half [cup half-and-half]": 242, // 1 cup half-and-half ≈ 242 g
  "whipping cream [cup whipping cream]": 236, // 1 cup whipping cream ≈ 236 g
  "clotted cream [cup clotted cream]": 244, // 1 cup clotted cream ≈ 244 g
  "crème fraîche [cup crème fraîche]": 232, // 1 cup crème fraîche ≈ 232 g
  
  "group_Condensed Milk Products": 0,
  "condensed milk [cup condensed milk]": 306, // 1 cup condensed milk ≈ 306 g
  "evaporated milk [cup evaporated milk]": 252, // 1 cup evaporated milk ≈ 252 g
  "coconut cream [cup coconut cream]": 269, // 1 cup coconut cream ≈ 269 g
  "coconut milk (canned) [cup coconut milk]": 244, // 1 cup canned coconut milk ≈ 244 g
  
  "group_Cultured Dairy": 0,
  "yogurt (plain) [cup yogurt]": 245, // 1 cup plain yogurt ≈ 245 g
  "Greek yogurt [cup Greek yogurt]": 270, // 1 cup Greek yogurt ≈ 270 g
  "sour cream [cup sour cream]": 230, // 1 cup sour cream ≈ 230 g
  "kefir [cup kefir]": 243, // 1 cup kefir ≈ 243 g
  "buttermilk [cup buttermilk]": 245, // 1 cup buttermilk ≈ 245 g
};

// Cheese products - all interconvertible by weight
export const cheeseFormulas = {
  "group_Soft Cheeses": 0,
  "cream cheese [cup cream cheese]": 225, // 1 cup cream cheese ≈ 225 g
  "cottage cheese [cup cottage cheese]": 225, // 1 cup cottage cheese ≈ 225 g
  "ricotta cheese [cup ricotta]": 250, // 1 cup ricotta ≈ 250 g
  "mascarpone [cup mascarpone]": 225, // 1 cup mascarpone ≈ 225 g
  "quark [cup quark]": 220, // 1 cup quark ≈ 220 g
  "feta cheese (crumbled) [cup feta]": 150, // 1 cup crumbled feta ≈ 150 g
  "goat cheese (soft) [cup goat cheese]": 224, // 1 cup soft goat cheese ≈ 224 g
  "brie (diced) [cup brie]": 170, // 1 cup diced brie ≈ 170 g
  
  "group_Hard Cheeses (Grated)": 0,
  "parmesan (grated) [cup parmesan]": 100, // 1 cup grated parmesan ≈ 100 g
  "pecorino (grated) [cup pecorino]": 100, // 1 cup grated pecorino ≈ 100 g
  "asiago (grated) [cup asiago]": 100, // 1 cup grated asiago ≈ 100 g
  "romano (grated) [cup romano]": 100, // 1 cup grated romano ≈ 100 g
  
  "group_Shredded Cheeses": 0,
  "cheddar (shredded) [cup cheddar]": 113, // 1 cup shredded cheddar ≈ 113 g
  "mozzarella (shredded) [cup mozzarella]": 113, // 1 cup shredded mozzarella ≈ 113 g
  "monterey jack (shredded) [cup monterey jack]": 113, // 1 cup shredded monterey jack ≈ 113 g
  "swiss (shredded) [cup swiss]": 113, // 1 cup shredded swiss ≈ 113 g
  "gruyère (shredded) [cup gruyère]": 113, // 1 cup shredded gruyère ≈ 113 g
  "colby (shredded) [cup colby]": 113, // 1 cup shredded colby ≈ 113 g
  "pepper jack (shredded) [cup pepper jack]": 113, // 1 cup shredded pepper jack ≈ 113 g
  "mexican blend (shredded) [cup mexican blend]": 113, // 1 cup shredded mexican blend ≈ 113 g
  
  "group_Cubed Cheeses": 0,
  "cheddar (cubed) [cup cubed cheddar]": 140, // 1 cup cubed cheddar ≈ 140 g
  "mozzarella (cubed) [cup cubed mozzarella]": 140, // 1 cup cubed mozzarella ≈ 140 g
  "swiss (cubed) [cup cubed swiss]": 140, // 1 cup cubed swiss ≈ 140 g
  "provolone (cubed) [cup cubed provolone]": 140, // 1 cup cubed provolone ≈ 140 g
};

// Grains and rice - all interconvertible by weight
export const grainFormulas = {
  "group_Rice (Uncooked)": 0,
  "white rice (uncooked) [cup white rice]": 185, // 1 cup uncooked white rice ≈ 185 g
  "brown rice (uncooked) [cup brown rice]": 190, // 1 cup uncooked brown rice ≈ 190 g
  "basmati rice (uncooked) [cup basmati rice]": 185, // 1 cup uncooked basmati rice ≈ 185 g
  "jasmine rice (uncooked) [cup jasmine rice]": 185, // 1 cup uncooked jasmine rice ≈ 185 g
  "arborio rice (uncooked) [cup arborio rice]": 200, // 1 cup uncooked arborio rice ≈ 200 g
  "wild rice (uncooked) [cup wild rice]": 160, // 1 cup uncooked wild rice ≈ 160 g
  "black rice (uncooked) [cup black rice]": 185, // 1 cup uncooked black rice ≈ 185 g
  "sushi rice (uncooked) [cup sushi rice]": 185, // 1 cup uncooked sushi rice ≈ 185 g
  
  "group_Other Grains (Uncooked)": 0,
  "quinoa (uncooked) [cup quinoa]": 170, // 1 cup uncooked quinoa ≈ 170 g
  "millet (uncooked) [cup millet]": 180, // 1 cup uncooked millet ≈ 180 g
  "farro (uncooked) [cup farro]": 190, // 1 cup uncooked farro ≈ 190 g
  "bulgur (uncooked) [cup bulgur]": 170, // 1 cup uncooked bulgur ≈ 170 g
  "barley (uncooked) [cup barley]": 200, // 1 cup uncooked barley ≈ 200 g
  "couscous (uncooked) [cup couscous]": 180, // 1 cup uncooked couscous ≈ 180 g
  "amaranth (uncooked) [cup amaranth]": 195, // 1 cup uncooked amaranth ≈ 195 g
  "buckwheat groats (uncooked) [cup buckwheat]": 170, // 1 cup uncooked buckwheat groats ≈ 170 g
  "freekeh (uncooked) [cup freekeh]": 160, // 1 cup uncooked freekeh ≈ 160 g
  "spelt berries (uncooked) [cup spelt]": 190, // 1 cup uncooked spelt berries ≈ 190 g
  
  "group_Oats": 0,
  "rolled oats [cup oats]": 90, // 1 cup rolled oats ≈ 90 g
  "quick oats [cup quick oats]": 90, // 1 cup quick oats ≈ 90 g
  "steel-cut oats [cup steel-cut oats]": 176, // 1 cup steel-cut oats ≈ 176 g
  "instant oats [cup instant oats]": 90, // 1 cup instant oats ≈ 90 g
  "oat bran [cup oat bran]": 94, // 1 cup oat bran ≈ 94 g
};

// Fruits - all interconvertible by weight
export const fruitFormulas = {
  "group_Fresh Berries": 0,
  "blueberries [cup blueberries]": 145, // 1 cup blueberries ≈ 145 g
  "strawberries (sliced) [cup strawberries]": 152, // 1 cup sliced strawberries ≈ 152 g
  "strawberries (whole) [cup whole strawberries]": 144, // 1 cup whole strawberries ≈ 144 g
  "raspberries [cup raspberries]": 123, // 1 cup raspberries ≈ 123 g
  "blackberries [cup blackberries]": 144, // 1 cup blackberries ≈ 144 g
  "cranberries (fresh) [cup cranberries]": 110, // 1 cup fresh cranberries ≈ 110 g
  "mixed berries [cup berries]": 150, // 1 cup mixed berries ≈ 150 g
  
  "group_Fresh Chopped Fruits": 0,
  "apple (chopped) [cup apple]": 125, // 1 cup chopped apple ≈ 125 g
  "banana (sliced) [cup banana]": 150, // 1 cup sliced banana ≈ 150 g
  "peach (sliced) [cup peach]": 154, // 1 cup sliced peach ≈ 154 g
  "mango (chopped) [cup mango]": 165, // 1 cup chopped mango ≈ 165 g
  "pineapple (chopped) [cup pineapple]": 155, // 1 cup chopped pineapple ≈ 155 g
  "kiwi (sliced) [cup kiwi]": 180, // 1 cup sliced kiwi ≈ 180 g
  "grapes [cup grapes]": 151, // 1 cup grapes ≈ 151 g
  "watermelon (cubed) [cup watermelon]": 152, // 1 cup cubed watermelon ≈ 152 g
  "cantaloupe (cubed) [cup cantaloupe]": 160, // 1 cup cubed cantaloupe ≈ 160 g
  "honeydew (cubed) [cup honeydew]": 170, // 1 cup cubed honeydew ≈ 170 g
  "papaya (cubed) [cup papaya]": 140, // 1 cup cubed papaya ≈ 140 g
  "orange (segments) [cup orange]": 180, // 1 cup orange segments ≈ 180 g
  "grapefruit (segments) [cup grapefruit]": 230, // 1 cup grapefruit segments ≈ 230 g
  
  "group_Dried Fruits": 0,
  "raisins [cup raisins]": 160, // 1 cup raisins ≈ 160 g
  "dried cranberries [cup dried cranberries]": 120, // 1 cup dried cranberries ≈ 120 g
  "dried apricots (chopped) [cup dried apricots]": 130, // 1 cup chopped dried apricots ≈ 130 g
  "dried figs (chopped) [cup dried figs]": 150, // 1 cup chopped dried figs ≈ 150 g
  "dried dates (chopped) [cup dried dates]": 175, // 1 cup chopped dried dates ≈ 175 g
  "prunes (pitted) [cup prunes]": 170, // 1 cup pitted prunes ≈ 170 g
  "dried apple (slices) [cup dried apple]": 60, // 1 cup dried apple slices ≈ 60 g
  "dried mango [cup dried mango]": 140, // 1 cup dried mango ≈ 140 g
  "dried cherries [cup dried cherries]": 140, // 1 cup dried cherries ≈ 140 g
};

// Vegetables - all interconvertible by weight
export const vegetableFormulas = {
  "group_Root Vegetables": 0,
  "carrots (chopped) [cup carrots]": 128, // 1 cup chopped carrots ≈ 128 g
  "carrots (grated) [cup grated carrots]": 110, // 1 cup grated carrots ≈ 110 g
  "potatoes (diced) [cup potatoes]": 150, // 1 cup diced potatoes ≈ 150 g
  "sweet potatoes (diced) [cup sweet potatoes]": 150, // 1 cup diced sweet potatoes ≈ 150 g
  "parsnips (chopped) [cup parsnips]": 133, // 1 cup chopped parsnips ≈ 133 g
  "turnips (chopped) [cup turnips]": 130, // 1 cup chopped turnips ≈ 130 g
  "beets (chopped) [cup beets]": 136, // 1 cup chopped beets ≈ 136 g
  "radishes (sliced) [cup radishes]": 116, // 1 cup sliced radishes ≈ 116 g
  "rutabaga (cubed) [cup rutabaga]": 140, // 1 cup cubed rutabaga ≈ 140 g
  
  "group_Allium Vegetables": 0,
  "onion (chopped) [cup onion]": 160, // 1 cup chopped onion ≈ 160 g
  "green onions (chopped) [cup green onions]": 100, // 1 cup chopped green onions ≈ 100 g
  "shallots (chopped) [cup shallots]": 165, // 1 cup chopped shallots ≈ 165 g
  "leeks (chopped) [cup leeks]": 104, // 1 cup chopped leeks ≈ 104 g
  "garlic (minced) [cup garlic]": 150, // 1 cup minced garlic ≈ 150 g
  
  "group_Cruciferous Vegetables": 0,
  "cabbage (shredded) [cup cabbage]": 90, // 1 cup shredded cabbage ≈ 90 g
  "broccoli (florets) [cup broccoli]": 91, // 1 cup broccoli florets ≈ 91 g
  "cauliflower (florets) [cup cauliflower]": 100, // 1 cup cauliflower florets ≈ 100 g
  "brussels sprouts (trimmed) [cup brussels sprouts]": 88, // 1 cup trimmed brussels sprouts ≈ 88 g
  "kale (chopped) [cup kale]": 67, // 1 cup chopped kale ≈ 67 g
  
  "group_Leafy Vegetables": 0,
  "spinach (fresh) [cup spinach]": 30, // 1 cup fresh spinach ≈ 30 g
  "lettuce (shredded) [cup lettuce]": 55, // 1 cup shredded lettuce ≈ 55 g
  "arugula [cup arugula]": 25, // 1 cup arugula ≈ 25 g
  "swiss chard (chopped) [cup swiss chard]": 36, // 1 cup chopped swiss chard ≈ 36 g
  "collard greens (chopped) [cup collard greens]": 40, // 1 cup chopped collard greens ≈ 40 g
  "romaine lettuce (chopped) [cup romaine]": 55, // 1 cup chopped romaine lettuce ≈ 55 g
  "iceberg lettuce (shredded) [cup iceberg]": 55, // 1 cup shredded iceberg lettuce ≈ 55 g
  
  "group_Other Vegetables": 0,
  "bell pepper (chopped) [cup bell pepper]": 150, // 1 cup chopped bell pepper ≈ 150 g
  "corn kernels [cup corn]": 165, // 1 cup corn kernels ≈ 165 g
  "peas [cup peas]": 160, // 1 cup peas ≈ 160 g
  "tomatoes (chopped) [cup tomatoes]": 180, // 1 cup chopped tomatoes ≈ 180 g
  "tomatoes (cherry) [cup cherry tomatoes]": 170, // 1 cup cherry tomatoes ≈ 170 g
  "cucumber (chopped) [cup cucumber]": 119, // 1 cup chopped cucumber ≈ 119 g
  "zucchini (chopped) [cup zucchini]": 130, // 1 cup chopped zucchini ≈ 130 g
  "green beans [cup green beans]": 125, // 1 cup green beans ≈ 125 g
  "mushrooms (sliced) [cup mushrooms]": 70, // 1 cup sliced mushrooms ≈ 70 g
  "asparagus (1-inch pieces) [cup asparagus]": 134, // 1 cup asparagus pieces ≈ 134 g
  "celery (chopped) [cup celery]": 100, // 1 cup chopped celery ≈ 100 g
  "eggplant (cubed) [cup eggplant]": 82, // 1 cup cubed eggplant ≈ 82 g
  "pumpkin (cubed) [cup pumpkin]": 116, // 1 cup cubed pumpkin ≈ 116 g
  "butternut squash (cubed) [cup butternut]": 140, // 1 cup cubed butternut squash ≈ 140 g
  "okra (sliced) [cup okra]": 100, // 1 cup sliced okra ≈ 100 g
  "artichoke hearts [cup artichoke hearts]": 168, // 1 cup artichoke hearts ≈ 168 g
};

// Legumes - all interconvertible by weight
export const legumeFormulas = {
  "group_Cooked Beans": 0,
  "black beans (cooked) [cup black beans]": 172, // 1 cup cooked black beans ≈ 172 g
  "chickpeas (cooked) [cup chickpeas]": 164, // 1 cup cooked chickpeas ≈ 164 g
  "kidney beans (cooked) [cup kidney beans]": 177, // 1 cup cooked kidney beans ≈ 177 g
  "pinto beans (cooked) [cup pinto beans]": 170, // 1 cup cooked pinto beans ≈ 170 g
  "navy beans (cooked) [cup navy beans]": 182, // 1 cup cooked navy beans ≈ 182 g
  "lima beans (cooked) [cup lima beans]": 170, // 1 cup cooked lima beans ≈ 170 g
  "cannellini beans (cooked) [cup cannellini beans]": 180, // 1 cup cooked cannellini beans ≈ 180 g
  "great northern beans (cooked) [cup great northern beans]": 177, // 1 cup cooked great northern beans ≈ 177 g
  "fava beans (cooked) [cup fava beans]": 170, // 1 cup cooked fava beans ≈ 170 g
  "edamame (shelled) [cup edamame]": 155, // 1 cup shelled edamame ≈ 155 g
  
  "group_Cooked Lentils & Split Peas": 0,
  "lentils (cooked) [cup lentils]": 198, // 1 cup cooked lentils ≈ 198 g
  "red lentils (cooked) [cup red lentils]": 200, // 1 cup cooked red lentils ≈ 200 g
  "green lentils (cooked) [cup green lentils]": 198, // 1 cup cooked green lentils ≈ 198 g
  "brown lentils (cooked) [cup brown lentils]": 198, // 1 cup cooked brown lentils ≈ 198 g
  "split peas (cooked) [cup split peas]": 196, // 1 cup cooked split peas ≈ 196 g
  
  "group_Dried Legumes": 0,
  "black beans (dried) [cup dried black beans]": 191, // 1 cup dried black beans ≈ 191 g
  "chickpeas (dried) [cup dried chickpeas]": 190, // 1 cup dried chickpeas ≈ 190 g
  "kidney beans (dried) [cup dried kidney beans]": 185, // 1 cup dried kidney beans ≈ 185 g
  "pinto beans (dried) [cup dried pinto beans]": 193, // 1 cup dried pinto beans ≈ 193 g
  "lentils (dried) [cup dried lentils]": 192, // 1 cup dried lentils ≈ 192 g
  "split peas (dried) [cup dried split peas]": 194, // 1 cup dried split peas ≈ 194 g
};

// Eggs - all interconvertible by weight
export const eggFormulas = {
  "group_Whole Eggs": 0,
  "large egg [large egg]": 50, // 1 large egg ≈ 50g (without shell)
  "medium egg [medium egg]": 44, // 1 medium egg ≈ 44g (without shell)
  "small egg [small egg]": 38, // 1 small egg ≈ 38g (without shell)
  "extra large egg [xl egg]": 56, // 1 extra large egg ≈ 56g (without shell)
  "jumbo egg [jumbo egg]": 63, // 1 jumbo egg ≈ 63g (without shell)
  
  "group_Egg Parts": 0,
  "egg white (large) [egg white]": 30, // 1 large egg white ≈ 30g
  "egg yolk (large) [egg yolk]": 18, // 1 large egg yolk ≈ 18g
  "egg white (medium) [medium egg white]": 26, // 1 medium egg white ≈ 26g
  "egg yolk (medium) [medium egg yolk]": 16, // 1 medium egg yolk ≈ 16g
  
  "group_Egg Products": 0,
  "liquid egg whites [cup liquid egg whites]": 243, // 1 cup liquid egg whites ≈ 243g
  "liquid whole eggs [cup liquid eggs]": 243, // 1 cup liquid whole eggs ≈ 243g
  "powdered egg whites [cup powdered egg whites]": 28, // 1 cup powdered egg whites ≈ 28g
  "powdered whole egg [cup powdered eggs]": 80, // 1 cup powdered whole egg ≈ 80g
};

// Yeast types - all interconvertible
export const yeastFormulas = {
  "group_Yeast Types": 0,
  "active dry yeast [tsp active dry]": 3.1, // 1 tsp active dry yeast ≈ 3.1 g
  "instant yeast [tsp instant]": 3.1, // 1 tsp instant yeast ≈ 3.1 g
  "fresh yeast [g fresh yeast]": 1, // Base unit (1 g)
  "dry yeast [g dry yeast]": 0.4, // 1 g dry yeast = 0.4 g fresh yeast equivalent
  "bread machine yeast [tsp bread machine yeast]": 3.1, // 1 tsp bread machine yeast ≈ 3.1 g
  "rapid-rise yeast [tsp rapid-rise yeast]": 3.1, // 1 tsp rapid-rise yeast ≈ 3.1 g
  
  "group_Yeast Measurements": 0,
  "yeast packet [packet]": 7, // 1 standard packet of yeast ≈ 7 g (US standard)
  "yeast cube [cube]": 42, // 1 cube of fresh yeast ≈ 42 g (European standard)
  "tablespoon active dry yeast [tbsp active dry]": 9.3, // 1 tbsp active dry yeast ≈ 9.3 g
  "tablespoon instant yeast [tbsp instant]": 9.3, // 1 tbsp instant yeast ≈ 9.3 g
};

// Baking pan dimensions - all interconvertible (inches to cm)
export const panDimensionFormulas = {
  "group_Round Pans": 0,
  "6-inch round pan [6in round]": 15.24, // 6-inch diameter = 15.24 cm
  "8-inch round pan [8in round]": 20.32, // 8-inch diameter = 20.32 cm
  "9-inch round pan [9in round]": 22.86, // 9-inch diameter = 22.86 cm
  "10-inch round pan [10in round]": 25.4, // 10-inch diameter = 25.4 cm
  "12-inch round pan [12in round]": 30.48, // 12-inch diameter = 30.48 cm
  
  "group_Square/Rectangular Pans": 0,
  "8x8-inch square pan [8x8in square]": 20.32, // 8-inch side = 20.32 cm
  "9x9-inch square pan [9x9in square]": 22.86, // 9-inch side = 22.86 cm
  "9x13-inch baking dish [9x13in dish]": 22.86, // 9-inch width = 22.86 cm
  "11x7-inch baking dish [11x7in dish]": 27.94, // 11-inch length = 27.94 cm
  "13x9-inch baking dish [13x9in dish]": 33.02, // 13-inch length = 33.02 cm
  "15x10-inch jelly roll pan [15x10in jelly roll]": 38.1, // 15-inch length = 38.1 cm
  "17x11-inch sheet pan [half sheet]": 43.18, // 17-inch length = 43.18 cm
  "18x13-inch sheet pan [full sheet]": 45.72, // 18-inch length = 45.72 cm
  
  "group_Loaf Pans": 0,
  "8.5x4.5-inch loaf pan [8.5x4.5in loaf]": 21.59, // 8.5-inch length = 21.59 cm
  "9x5-inch loaf pan [9x5in loaf]": 22.86, // 9-inch length = 22.86 cm
  "10x5-inch loaf pan [10x5in loaf]": 25.4, // 10-inch length = 25.4 cm
  
  "group_Specialty Pans": 0,
  "9-inch pie plate [9in pie plate]": 22.86, // 9-inch diameter = 22.86 cm
  "10-inch springform [10in springform]": 25.4, // 10-inch diameter = 25.4 cm
  "12-cup bundt pan [12cup bundt]": 25.4, // 10-inch diameter = 25.4 cm
  "10-cup bundt pan [10cup bundt]": 22.86, // 9-inch diameter = 22.86 cm
  "9-inch tube pan [9in tube]": 22.86, // 9-inch diameter = 22.86 cm
  "10-inch tube pan [10in tube]": 25.4, // 10-inch diameter = 25.4 cm
  "12-cup muffin tin [12cup muffin tin]": 7.62, // 3-inch cup diameter = 7.62 cm
  "24-cup mini muffin tin [24cup mini muffin]": 4.83, // 1.9-inch cup diameter = 4.83 cm
};

// Baking ingredient weights - all interconvertible
export const bakingIngredientFormulas = {
  "group_Leavening Agents": 0,
  "baking powder [tsp baking powder]": 4, // 1 tsp baking powder ≈ 4 g
  "baking soda [tsp baking soda]": 4.8, // 1 tsp baking soda ≈ 4.8 g
  "cream of tartar [tsp cream of tartar]": 3, // 1 tsp cream of tartar ≈ 3 g
  
  "group_Chocolate Products": 0,
  "cocoa powder [cup cocoa]": 86, // 1 cup cocoa powder ≈ 86 g
  "dutch process cocoa [cup dutch cocoa]": 92, // 1 cup dutch process cocoa ≈ 92 g
  "chocolate chips [cup chocolate chips]": 170, // 1 cup chocolate chips ≈ 170 g
  "chocolate chunks [cup chocolate chunks]": 170, // 1 cup chocolate chunks ≈ 170 g
  "unsweetened chocolate [oz chocolate]": 28.35, // 1 oz unsweetened chocolate = 28.35 g
  "chocolate bar (chopped) [cup chopped chocolate]": 170, // 1 cup chopped chocolate ≈ 170 g
  "white chocolate chips [cup white chocolate]": 170, // 1 cup white chocolate chips ≈ 170 g
  
  "group_Extracts & Flavorings": 0,
  "vanilla extract [tsp vanilla]": 4.2, // 1 tsp vanilla extract ≈ 4.2 g
  "almond extract [tsp almond extract]": 4.2, // 1 tsp almond extract ≈ 4.2 g
  "coffee extract [tsp coffee extract]": 4.3, // 1 tsp coffee extract ≈ 4.3 g
  "mint extract [tsp mint extract]": 4.2, // 1 tsp mint extract ≈ 4.2 g
  "lemon extract [tsp lemon extract]": 4.2, // 1 tsp lemon extract ≈ 4.2 g
  
  "group_Other Baking Ingredients": 0,
  "salt [tsp salt]": 6, // 1 tsp salt ≈ 6 g
  "cinnamon [tsp cinnamon]": 2.6, // 1 tsp cinnamon ≈ 2.6 g
  "dried breadcrumbs [cup breadcrumbs]": 108, // 1 cup dried breadcrumbs ≈ 108 g
  "vanilla bean [bean]": 5, // 1 vanilla bean ≈ 5 g
  "espresso powder [tsp espresso powder]": 2, // 1 tsp espresso powder ≈ 2 g
  "gelatin (powdered) [tbsp gelatin]": 10, // 1 tbsp gelatin ≈ 10 g
  "pectin [tbsp pectin]": 8, // 1 tbsp pectin ≈ 8 g
};

// Spice weights - all interconvertible
export const spiceFormulas = {
  "group_Ground Spices": 0,
  "black pepper [tsp black pepper]": 2.3, // 1 tsp ground black pepper ≈ 2.3 g
  "cinnamon [tsp cinnamon]": 2.6, // 1 tsp ground cinnamon ≈ 2.6 g
  "cumin [tsp cumin]": 2.1, // 1 tsp ground cumin ≈ 2.1 g
  "paprika [tsp paprika]": 2.3, // 1 tsp paprika ≈ 2.3 g
  "turmeric [tsp turmeric]": 2.8, // 1 tsp ground turmeric ≈ 2.8 g
  "ginger (ground) [tsp ground ginger]": 1.8, // 1 tsp ground ginger ≈ 1.8 g
  "nutmeg [tsp nutmeg]": 2.2, // 1 tsp ground nutmeg ≈ 2.2 g
  "cardamom [tsp cardamom]": 2, // 1 tsp ground cardamom ≈ 2 g
  "allspice [tsp allspice]": 2.1, // 1 tsp ground allspice ≈ 2.1 g
  "cloves [tsp cloves]": 2, // 1 tsp ground cloves ≈ 2 g
  "coriander [tsp coriander]": 1.8, // 1 tsp ground coriander ≈ 1.8 g
  "fennel seed (ground) [tsp fennel]": 2, // 1 tsp ground fennel seed ≈ 2 g
  "chili powder [tsp chili powder]": 2.6, // 1 tsp chili powder ≈ 2.6 g
  "cayenne pepper [tsp cayenne]": 1.8, // 1 tsp cayenne pepper ≈ 1.8 g
  
  "group_Dried Herbs": 0,
  "basil (dried) [tsp dried basil]": 0.7, // 1 tsp dried basil ≈ 0.7 g
  "oregano (dried) [tsp dried oregano]": 0.8, // 1 tsp dried oregano ≈ 0.8 g
  "thyme (dried) [tsp dried thyme]": 0.8, // 1 tsp dried thyme ≈ 0.8 g
  "rosemary (dried) [tsp dried rosemary]": 1.2, // 1 tsp dried rosemary ≈ 1.2 g
  "sage (dried) [tsp dried sage]": 0.7, // 1 tsp dried sage ≈ 0.7 g
  "parsley (dried) [tsp dried parsley]": 0.3, // 1 tsp dried parsley ≈ 0.3 g
  "dill (dried) [tsp dried dill]": 0.4, // 1 tsp dried dill ≈ 0.4 g
  "marjoram (dried) [tsp dried marjoram]": 0.6, // 1 tsp dried marjoram ≈ 0.6 g
  "tarragon (dried) [tsp dried tarragon]": 0.5, // 1 tsp dried tarragon ≈ 0.5 g
  "bay leaf [leaf]": 0.6, // 1 bay leaf ≈ 0.6 g
  
  "group_Herb Blends": 0,
  "italian seasoning [tsp italian seasoning]": 0.8, // 1 tsp italian seasoning ≈ 0.8 g
  "herbes de provence [tsp herbes de provence]": 1, // 1 tsp herbes de provence ≈ 1 g
  "poultry seasoning [tsp poultry seasoning]": 2, // 1 tsp poultry seasoning ≈ 2 g
  "garam masala [tsp garam masala]": 2, // 1 tsp garam masala ≈ 2 g
  "chinese five spice [tsp five spice]": 2, // 1 tsp chinese five spice ≈ 2 g
  "cajun seasoning [tsp cajun seasoning]": 2.1, // 1 tsp cajun seasoning ≈ 2.1 g
  "curry powder [tsp curry powder]": 2, // 1 tsp curry powder ≈ 2 g
  "za'atar [tsp za'atar]": 2.3, // 1 tsp za'atar ≈ 2.3 g
};

// Liquid measurements - all interconvertible by weight
export const liquidFormulas = {
  "group_Water & Water-Like Liquids": 0,
  "water [g water]": 240, // 1 cup water = 240g (density: 1g/ml)
  "ice [g ice]": 220, // 1 cup ice (crushed) ≈ 220g
  "broth/stock [g broth]": 240, // 1 cup broth ≈ 240g
  "tea [g tea]": 240, // 1 cup tea ≈ 240g
  "coffee [g coffee]": 237, // 1 cup coffee ≈ 237g
  
  "group_Dairy Liquids": 0,
  "milk [g milk]": 240, // 1 cup milk ≈ 240g
  "skim milk [g skim milk]": 245, // 1 cup skim milk ≈ 245g
  "whole milk [g whole milk]": 242, // 1 cup whole milk ≈ 242g
  "buttermilk [g buttermilk]": 245, // 1 cup buttermilk ≈ 245g
  "heavy cream [g heavy cream]": 238, // 1 cup heavy cream ≈ 238g
  "half-and-half [g half-and-half]": 242, // 1 cup half-and-half ≈ 242g
  "condensed milk [g condensed milk]": 306, // 1 cup condensed milk ≈ 306g
  "evaporated milk [g evaporated milk]": 252, // 1 cup evaporated milk ≈ 252g
  
  "group_Oils": 0,
  "vegetable oil [g vegetable oil]": 218, // 1 cup vegetable oil ≈ 218g
  "olive oil [g olive oil]": 216, // 1 cup olive oil ≈ 216g
  "canola oil [g canola oil]": 218, // 1 cup canola oil ≈ 218g
  "coconut oil [g coconut oil]": 218, // 1 cup coconut oil ≈ 218g
  "avocado oil [g avocado oil]": 218, // 1 cup avocado oil ≈ 218g
  "sesame oil [g sesame oil]": 217, // 1 cup sesame oil ≈ 217g
  "peanut oil [g peanut oil]": 216, // 1 cup peanut oil ≈ 216g
  "melted butter [g melted butter]": 227, // 1 cup melted butter ≈ 227g
  
  "group_Vinegars & Acidic Liquids": 0,
  "white vinegar [g white vinegar]": 239, // 1 cup white vinegar ≈ 239g
  "apple cider vinegar [g apple cider vinegar]": 239, // 1 cup apple cider vinegar ≈ 239g
  "balsamic vinegar [g balsamic vinegar]": 255, // 1 cup balsamic vinegar ≈ 255g
  "rice vinegar [g rice vinegar]": 237, // 1 cup rice vinegar ≈ 237g
  "lemon juice [g lemon juice]": 245, // 1 cup lemon juice ≈ 245g
  "lime juice [g lime juice]": 246, // 1 cup lime juice ≈ 246g
  "orange juice [g orange juice]": 248, // 1 cup orange juice ≈ 248g
  
  "group_Sauces & Condiments": 0,
  "tomato sauce [g tomato sauce]": 245, // 1 cup tomato sauce ≈ 245g
  "soy sauce [g soy sauce]": 255, // 1 cup soy sauce ≈ 255g
  "fish sauce [g fish sauce]": 252, // 1 cup fish sauce ≈ 252g
  "hot sauce [g hot sauce]": 273, // 1 cup hot sauce ≈ 273g
  "worcestershire sauce [g worcestershire sauce]": 250, // 1 cup worcestershire sauce ≈ 250g
  "ketchup [g ketchup]": 261, // 1 cup ketchup ≈ 261g
  "mayonnaise [g mayonnaise]": 220, // 1 cup mayonnaise ≈ 220g
  "mustard [g mustard]": 253, // 1 cup mustard ≈ 253g
  
  "group_Alcoholic Beverages": 0,
  "wine [g wine]": 236, // 1 cup wine ≈ 236g
  "beer [g beer]": 236, // 1 cup beer ≈ 236g
  "vodka [g vodka]": 224, // 1 cup vodka ≈ 224g
  "whiskey [g whiskey]": 224, // 1 cup whiskey ≈ 224g
  "rum [g rum]": 224, // 1 cup rum ≈ 224g
  "cooking wine [g cooking wine]": 236 // 1 cup cooking wine ≈ 236g
};