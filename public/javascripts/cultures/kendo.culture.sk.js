﻿/*
* Kendo UI Beta v2012.1.307 (http://kendoui.com)
* Copyright 2012 Telerik AD. All rights reserved.
*
* Kendo UI Beta license terms available at
* http://www.kendoui.com/purchase/license-agreement/kendo-ui-beta.aspx
*/

﻿(function( window, undefined ) {
    kendo.cultures["sk"] = {
        name: "sk",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": " ",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                pattern: ["-n $","n $"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "€"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"],
                    namesAbbr: ["ne","po","ut","st","št","pi","so"],
                    namesShort: ["ne","po","ut","st","št","pi","so"]
                },
                months: {
                    names: ["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december",""],
                    namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12",""]
                },
                AM: [""],
                PM: [""],
                patterns: {
                    d: "d. M. yyyy",
                    D: "d. MMMM yyyy",
                    F: "d. MMMM yyyy H:mm:ss",
                    g: "d. M. yyyy H:mm",
                    G: "d. M. yyyy H:mm:ss",
                    m: "dd MMMM",
                    M: "dd MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "H:mm",
                    T: "H:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy",
                    Y: "MMMM yyyy"
                },
                "/": ". ",
                ":": ":",
                firstDay: 1
            }
        }
    }
})(this);
