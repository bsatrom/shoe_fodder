﻿/*
* Kendo UI Beta v2012.1.307 (http://kendoui.com)
* Copyright 2012 Telerik AD. All rights reserved.
*
* Kendo UI Beta license terms available at
* http://www.kendoui.com/purchase/license-agreement/kendo-ui-beta.aspx
*/

﻿(function( window, undefined ) {
    kendo.cultures["or-IN"] = {
        name: "or-IN",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ",",
            ".": ".",
            groupSize: [3,2],
            percent: {
                pattern: ["-n %","n %"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3,2],
                symbol: "%"
            },
            currency: {
                pattern: ["$ -n","$ n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3,2],
                symbol: "ଟ"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["ରବିବାର","ସୋମବାର","ମଙ୍ଗଳବାର","ବୁଧବାର","ଗୁରୁବାର","ଶୁକ୍ରବାର","ଶନିବାର"],
                    namesAbbr: ["ରବି.","ସୋମ.","ମଙ୍ଗଳ.","ବୁଧ.","ଗୁରୁ.","ଶୁକ୍ର.","ଶନି."],
                    namesShort: ["ର","ସୋ","ମ","ବୁ","ଗୁ","ଶୁ","ଶ"]
                },
                months: {
                    names: ["ଜାନୁୟାରୀ","ଫ୍ରେବୃୟାରୀ","ମାର୍ଚ୍ଚ","ଏପ୍ରିଲ୍‌","ମେ","ଜୁନ୍‌","ଜୁଲାଇ","ଅଗଷ୍ଟ","ସେପ୍ଟେମ୍ବର","ଅକ୍ଟୋବର","ନଭେମ୍ବର","(ଡିସେମ୍ବର",""],
                    namesAbbr: ["ଜାନୁୟାରୀ","ଫ୍ରେବୃୟାରୀ","ମାର୍ଚ୍ଚ","ଏପ୍ରିଲ୍‌","ମେ","ଜୁନ୍‌","ଜୁଲାଇ","ଅଗଷ୍ଟ","ସେପ୍ଟେମ୍ବର","ଅକ୍ଟୋବର","ନଭେମ୍ବର","(ଡିସେମ୍ବର",""]
                },
                AM: ["AM","am","AM"],
                PM: ["PM","pm","PM"],
                patterns: {
                    d: "dd-MM-yy",
                    D: "dd MMMM yyyy",
                    F: "dd MMMM yyyy HH:mm:ss",
                    g: "dd-MM-yy HH:mm",
                    G: "dd-MM-yy HH:mm:ss",
                    m: "dd MMMM",
                    M: "dd MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM, yyyy",
                    Y: "MMMM, yyyy"
                },
                "/": "-",
                ":": ":",
                firstDay: 0
            }
        }
    }
})(this);
