﻿/*
* Kendo UI Beta v2012.1.307 (http://kendoui.com)
* Copyright 2012 Telerik AD. All rights reserved.
*
* Kendo UI Beta license terms available at
* http://www.kendoui.com/purchase/license-agreement/kendo-ui-beta.aspx
*/

﻿(function( window, undefined ) {
    kendo.cultures["tzm-Latn"] = {
        name: "tzm-Latn",
        numberFormat: {
            pattern: ["n-"],
            decimals: 2,
            ",": ".",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n %","n %"],
                decimals: 2,
                ",": ".",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                pattern: ["-n $","n $"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "DZD"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["Acer","Arime","Aram","Ahad","Amhadh","Sem","Sedh"],
                    namesAbbr: ["Ace","Ari","Ara","Aha","Amh","Sem","Sed"],
                    namesShort: ["Ac","Ar","Ar","Ah","Am","Se","Se"]
                },
                months: {
                    names: ["Yenayer","Furar","Maghres","Yebrir","Mayu","Yunyu","Yulyu","Ghuct","Cutenber","Ktuber","Wambir","Dujanbir",""],
                    namesAbbr: ["Yen","Fur","Mag","Yeb","May","Yun","Yul","Ghu","Cut","Ktu","Wam","Duj",""]
                },
                AM: [""],
                PM: [""],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM, yyyy",
                    F: "dd MMMM, yyyy H:mm:ss",
                    g: "dd-MM-yyyy H:mm",
                    G: "dd-MM-yyyy H:mm:ss",
                    m: "dd MMMM",
                    M: "dd MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "H:mm",
                    T: "H:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM, yyyy",
                    Y: "MMMM, yyyy"
                },
                "/": "-",
                ":": ":",
                firstDay: 6
            }
        }
    }
})(this);
