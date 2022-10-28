const library = require("fileone/library");
const myliquids = require("fileone/液体");
const myitems = require("fileone/物品");
const 装液器 = library.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "分液器", [
{
    input: {
      items: ["魔法工业-瓶装魔力/1"],     
      power: 1,
    },
    output: {
      liquids: ["魔法工业-魔力原浆/50"],
      items:["sand/10"],
    },
    craftTime: 60,
  },
  
]);