﻿/*
* Kendo UI Beta v2012.1.307 (http://kendoui.com)
* Copyright 2012 Telerik AD. All rights reserved.
*
* Kendo UI Beta license terms available at
* http://www.kendoui.com/purchase/license-agreement/kendo-ui-beta.aspx
*/

﻿(function( window, undefined ) {
    kendo.cultures["nn"] = {
        name: "nn",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": " ",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n %","n %"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                pattern: ["$ -n","$ n"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "kr"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["søndag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"],
                    namesAbbr: ["sø","må","ty","on","to","fr","la"],
                    namesShort: ["sø","må","ty","on","to","fr","la"]
                },
                months: {
                    names: ["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember",""],
                    namesAbbr: ["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des",""]
                },
                AM: [""],
                PM: [""],
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "d. MMMM yyyy",
                    F: "d. MMMM yyyy HH:mm:ss",
                    g: "dd.MM.yyyy HH:mm",
                    G: "dd.MM.yyyy HH:mm:ss",
                    m: "d. MMMM",
                    M: "d. MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy",
                    Y: "MMMM yyyy"
                },
                "/": ".",
                ":": ":",
                firstDay: 1
            }
        }
    }
})(this);
