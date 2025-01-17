const nju = require("./nju");
const neusoft = require("./neusoft");
const tuna = require("./tuna");
const bfsu = require("./bfsu");
const nano = require("./nano");
const neo = require("./neo");
const hit = require("./hit");
const cqu = require("./cqu");
const xjtu = require("./xjtu");
const neu = require("./neu");
const pku = require("./pku");
const byrio = require("./byrio");
const cqupt = require("./cqupt");
const ynuosa = require("./ynuosa");
const xtom_hk = require("./xtom-hk");
const xtom = require("./xtom");
const xtom_de = require("./xtom-de");
const xtom_nl = require("./xtom-nl");
const xtom_ee = require("./xtom-ee");
const xtom_jp = require("./xtom-jp");
const xtom_au = require("./xtom-au");
const njupt = require("./njupt");
const wsyu = require("./wsyu");
const bjtu = require("./bjtu");
const bupt = require("./bupt");
const njtech = require("./njtech");
const geekpie = require("./geekpie");
const qlut = require("./qlut");
const nyist = require("./nyist");

const config = require('./config.json')

const lint = require('./lint')

const site = (abbr) => config.url + '/static/json/site/' + abbr + '.json';

module.exports = {
  "nju"     : async () => lint(await nju     (                )),
  "neusoft" : async () => lint(await neusoft (site("neusoft" ))),
  "tuna"    : async () => lint(await tuna    (site("tuna"    ))),
  "bfsu"    : async () => lint(await bfsu    (site("bfsu"    ))),
  "nano"    : async () => lint(await nano    (site("nano"    ))),
  "neo"     : async () => lint(await neo     (site("neo"     ))),
  "hit"     : async () => lint(await hit     (site("hit"     ))),
  "cqu"     : async () => lint(await cqu     (site("cqu"     ))),
  "xjtu"    : async () => lint(await xjtu    (site("xjtu"    ))),
  "neu"     : async () => lint(await neu     (site("neu"     ))),
  "pku"     : async () => lint(await pku     (site("pku"     ))),
  "byrio"   : async () => lint(await byrio   (site("byrio"   ))),
  "cqupt"   : async () => lint(await cqupt   (site("cqupt"   ))),
  "ynuosa"  : async () => lint(await ynuosa  (site("ynuosa"  ))),
  "xtom-hk" : async () => lint(await xtom_hk (site("xtom-hk" ))),
  "xtom"    : async () => lint(await xtom    (site("xtom"    ))),
  "xtom-de" : async () => lint(await xtom_de (site("xtom-de" ))),
  "xtom-nl" : async () => lint(await xtom_nl (site("xtom-nl" ))),
  "xtom-ee" : async () => lint(await xtom_ee (site("xtom-ee" ))),
  "xtom-jp" : async () => lint(await xtom_jp (site("xtom-jp" ))),
  "xtom-au" : async () => lint(await xtom_au (site("xtom-au" ))),
  "njupt"   : async () => lint(await njupt   (site("njupt"   ))),
  "wsyu"    : async () => lint(await wsyu    (                )),
  "bjtu"    : async () => lint(await bjtu    (site("bjtu"    ))),
  "bupt"    : async () => lint(await bupt    (site("bupt"    ))),
  "njtech"  : async () => lint(await njtech  (site("njtech"  ))),
  "geekpie" : async () => lint(await geekpie (site("geekpie" ))),
  "qlut"    : async () => lint(await qlut    (site("qlut"    ))),
  "nyist"   : async () => lint(await nyist   (                )),
};
