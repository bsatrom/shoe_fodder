﻿/*
* Kendo UI Beta v2012.1.307 (http://kendoui.com)
* Copyright 2012 Telerik AD. All rights reserved.
*
* Kendo UI Beta license terms available at
* http://www.kendoui.com/purchase/license-agreement/kendo-ui-beta.aspx
*/

﻿(function( window, undefined ) {
    kendo.cultures["mn-Cyrl"] = {
        name: "mn-Cyrl",
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
                pattern: ["-n$","n$"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "₮"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["Ням","Даваа","Мягмар","Лхагва","Пүрэв","Баасан","Бямба"],
                    namesAbbr: ["Ня","Да","Мя","Лх","Пү","Ба","Бя"],
                    namesShort: ["Ня","Да","Мя","Лх","Пү","Ба","Бя"]
                },
                months: {
                    names: ["1 дүгээр сар","2 дугаар сар","3 дугаар сар","4 дүгээр сар","5 дугаар сар","6 дугаар сар","7 дугаар сар","8 дугаар сар","9 дүгээр сар","10 дугаар сар","11 дүгээр сар","12 дугаар сар",""],
                    namesAbbr: ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII",""]
                },
                AM: [""],
                PM: [""],
                patterns: {
                    d: "yy.MM.dd",
                    D: "yyyy 'оны' MMMM d",
                    F: "yyyy 'оны' MMMM d H:mm:ss",
                    g: "yy.MM.dd H:mm",
                    G: "yy.MM.dd H:mm:ss",
                    m: "d MMMM",
                    M: "d MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "H:mm",
                    T: "H:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy 'он' MMMM",
                    Y: "yyyy 'он' MMMM"
                },
                "/": ".",
                ":": ":",
                firstDay: 1
            }
        }
    }
})(this);
