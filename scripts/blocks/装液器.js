const library = require("fileone/library");
const myliquids = require("fileone/液体");
const myitems = require("fileone/物品");
const 装液器 = library.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "装液器", [
{
    input: {
      items: ["sand/50"],     
      liquids: ["魔法工业-魔力原浆/50"],
      power: 1,
    },
    output: {
      items: ["魔法工业-瓶装魔力/1"],
    },
    craftTime: 60,
  },
  
]);