$(document).on('click', '.twit-stat a', function(e) {
    e.preventDefault();
});

var modal = document.getElementById('myModal');

$(document).on('click', '#myBtn', function() {
    $(".modal").show();
});


$(document).on('click', '.close-icon', function(e) {
    e.stopPropagation();
    $(".modal").hide();
});


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(document).on('click', '.left-nav .toggle', function() {
    $(".sidepanel").toggleClass("sidenavtoggle");
    $(".top-section").toggleClass("top-body-toggle");
});


var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    axisX: {
        minimum: new Date(2000, 0),
        maximum: new Date(2000, 5),
        gridThickness: 2,
        valueFormatString: "MMM",
        gridDashType: "dash",
        gridColor: "#cfd8dc",
        setInterval: 1

    },
    axisY: {
        minimum: 0,
        maximum: 70,
        interval: 10,
        titleFontColor: "78909c",
        suffix: "k",
        gridDashType: "dash",
        gridColor: "#cfd8dc"
    },
    height: 308,
    data: [{
        indexLabelFontColor: "#78909c",

        name: "Visitors",
        type: "area",
        color: "#4cbdff",
        yValueFormatString: "#,##0.0mn",
        markerType: "none",
        dataPoints: [{
                x: new Date(2000, 0),
                y: 32
            },
            {
                x: new Date(2000, 1),
                y: 32
            },
            {
                x: new Date(2000, 2),
                y: 35
            },
            {
                x: new Date(2000, 3),
                y: 31
            },
            {
                x: new Date(2000, 4),
                y: 30,
                markerType: "circle",
                markerColor: "#4cbdff",
                markerSize: 24
            },
            {
                x: new Date(2000, 5),
                y: 35
            }

        ]
    }]
});
chart.render();


/*end-1st canvas*/

/*2nd canvas*/


var chart = new CanvasJS.Chart("chartContainer2", {
    animationEnabled: true,
    title: {
        text: "Weekly Sales and Expense",
        fontColor: "#78909c",
        fontSize: "14.58",
        fontFamily: "MuseoSans-500"
    },
    axisX: {
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
        labelFormatter: function() {
            return " ";
        }
    },
    axisY: {
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
        labelFormatter: function() {
            return " ";
        }
    },

    height: 200,
    data: [{
            type: "splineArea",
            color: "#e7e0f4",
            markerType: "none",

            dataPoints: [{
                    x: new Date(2016, 2),
                    y: 30000
                },
                {
                    x: new Date(2016, 3),
                    y: 32000
                },
                {
                    x: new Date(2016, 4),
                    y: 26000
                },
                {
                    x: new Date(2016, 5),
                    y: 45000
                },
                {
                    x: new Date(2016, 6),
                    y: 30000
                }
            ]
        },
        {
            type: "splineArea",
            color: "#b198dc",
            markerType: "none",

            dataPoints: [{
                    x: new Date(2016, 2),
                    y: 10000
                },
                {
                    x: new Date(2016, 3),
                    y: 12000
                },
                {
                    x: new Date(2016, 4),
                    y: 6000
                },
                {
                    x: new Date(2016, 5),
                    y: 25000,
                    markerType: "circle",
                    markerColor: "#b198dc",
                    markerSize: 24
                },
                {
                    x: new Date(2016, 6),
                    y: 10000
                }
            ]
        }
    ]
});

chart.render();

//2nd-canvas end


//3rd canvas


var chart = new CanvasJS.Chart("chartContainer3", {
    animationEnabled: true,
    title: {
        text: "Total Change and Profit",
        fontColor: "#78909c",
        fontSize: "14.58",
        fontFamily: "MuseoSans-500"
    },
    axisX: {
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
        labelFormatter: function() {
            return " ";
        }
    },
    axisY: {
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
        labelFormatter: function() {
            return " ";
        }
    },

    height: 200,
    data: [{
            type: "splineArea",
            color: "#cdedea",
            markerType: "none",

            dataPoints: [{
                    x: new Date(2016, 2),
                    y: 30000
                },
                {
                    x: new Date(2016, 3),
                    y: 32000
                },
                {
                    x: new Date(2016, 4),
                    y: 26000
                },
                {
                    x: new Date(2016, 5),
                    y: 45000
                },
                {
                    x: new Date(2016, 6),
                    y: 30000
                }
            ]
        },
        {
            type: "splineArea",
            color: "#6dc7be",
            markerType: "none",

            dataPoints: [{
                    x: new Date(2016, 2),
                    y: 10000
                },
                {
                    x: new Date(2016, 3),
                    y: 12000,
                    markerType: "circle",
                    markerColor: "#6dc7be",
                    markerSize: 24
                },
                {
                    x: new Date(2016, 4),
                    y: 6000
                },
                {
                    x: new Date(2016, 5),
                    y: 25000
                },
                {
                    x: new Date(2016, 6),
                    y: 10000
                }
            ]
        }
    ]
});

chart.render();


/*donut*/
var chart = AmCharts.makeChart("chartdiv", {
    "type": "pie",
    "allLabels": [{
        "text": "Registered",
        "align": "center",
        "bold": true,
        "color": "#38a4dd",
        "y": 120
    }, {
        "text": "9012",
        "align": "center",
        "bold": false,
        "y": 140
    }],
    "responsive": {
        "enabled": true
    },
    "theme": "none",
    "addClassNames": true,
    "legend": {
        "position": "right",
        "marginRight": 100,
        "autoMargins": false
    },
    "dataProvider": [{
        "value": 12000,
        "title": "Visitors",
        "class": "slice1"
    }, {
        "value": 2100,
        "title": "Registered",
        "class": "slice2"
    }, {
        "value": 4582,
        "title": "Bounce",
        "class": "slice3"
    }],
    "titleField": "title",
    "valueField": "value",
    "labelRadius": 5,
    "classNameField": "class",
    "radius": "42%",
    "innerRadius": "60%",
    "labelText": "[[title]]",
    "export": {
        "enabled": true
    }
});


AmCharts.addInitHandler(function(e) {
    "use strict";
    if (void 0 !== e.responsive && e.responsive.ready !== !0 && e.responsive.enabled === !0) {
        var i = e.version.split(".");
        if (!(i.length < 2 || Number(i[0]) < 3 || 3 === Number(i[0]) && Number(i[1]) < 13)) {
            var t = e.responsive;
            t.ready = !0, t.currentRules = {}, t.overridden = [], "stock" === e.type ? 0 > e.panelsSettings.startDuration && (t.startDuration = e.panelsSettings.startDuration, e.panelsSettings.startDuration = 0) : void 0 !== e.startDuration && 0 < e.startDuration && (t.startDuration = e.startDuration, e.startDuration = 0);
            var a = { pie: [{ maxWidth: 550, legendPosition: "left", overrides: { legend: { enabled: !1 } } }, { maxWidth: 550, legendPosition: "right", overrides: { legend: { enabled: !1 } } }, { maxWidth: 150, overrides: { legend: { enabled: !1 } } }, { maxHeight: 350, legendPosition: "top", overrides: { legend: { enabled: !1 } } }, { maxHeight: 350, legendPosition: "bottom", overrides: { legend: { enabled: !1 } } }, { maxHeight: 150, overrides: { legend: { enabled: !1 } } }, { maxWidth: 400, overrides: { labelsEnabled: !1 } }, { maxWidth: 100, overrides: { legend: { enabled: !1 } } }, { maxHeight: 350, overrides: { pullOutRadius: 0 } }, { maxHeight: 200, overrides: { titles: { enabled: !1 }, labelsEnabled: !1 } }, { maxWidth: 60, overrides: { autoMargins: !1, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, radius: "50%", innerRadius: 0, balloon: { enabled: !1 }, legend: { enabled: !1 } } }, { maxHeight: 60, overrides: { marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, radius: "50%", innerRadius: 0, balloon: { enabled: !1 }, legend: { enabled: !1 } } }], funnel: [{ maxWidth: 550, legendPosition: "left", overrides: { legend: { enabled: !1 } } }, { maxWidth: 550, legendPosition: "right", overrides: { legend: { enabled: !1 } } }, { maxWidth: 150, overrides: { legend: { enabled: !1 } } }, { maxHeight: 500, legendPosition: "top", overrides: { legend: { enabled: !1 } } }, { maxHeight: 500, legendPosition: "bottom", overrides: { legend: { enabled: !1 } } }, { maxHeight: 150, overrides: { legend: { enabled: !1 } } }, { maxWidth: 400, overrides: { labelsEnabled: !1, marginLeft: 10, marginRight: 10, legend: { enabled: !1 } } }, { maxHeight: 350, overrides: { pullOutRadius: 0, legend: { enabled: !1 } } }, { maxHeight: 300, overrides: { titles: { enabled: !1 } } }], radar: [{ maxWidth: 550, legendPosition: "left", overrides: { legend: { enabled: !1 } } }, { maxWidth: 550, legendPosition: "right", overrides: { legend: { enabled: !1 } } }, { maxWidth: 150, overrides: { legend: { enabled: !1 } } }, { maxHeight: 350, legendPosition: "top", overrides: { legend: { enabled: !1 } } }, { maxHeight: 350, legendPosition: "bottom", overrides: { legend: { enabled: !1 } } }, { maxHeight: 150, overrides: { legend: { enabled: !1 } } }, { maxWidth: 300, overrides: { labelsEnabled: !1 } }, { maxWidth: 200, overrides: { autoMargins: !1, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, radius: "50%", titles: { enabled: !1 }, valueAxes: { labelsEnabled: !1, radarCategoriesEnabled: !1 } } }, { maxHeight: 300, overrides: { labelsEnabled: !1 } }, { maxHeight: 200, overrides: { autoMargins: !1, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, radius: "50%", titles: { enabled: !1 }, valueAxes: { radarCategoriesEnabled: !1 } } }, { maxHeight: 100, overrides: { valueAxes: { labelsEnabled: !1 } } }], gauge: [{ maxWidth: 550, legendPosition: "left", overrides: { legend: { enabled: !1 } } }, { maxWidth: 550, legendPosition: "right", overrides: { legend: { enabled: !1 } } }, { maxWidth: 150, overrides: { legend: { enabled: !1 } } }, { maxHeight: 500, legendPosition: "top", overrides: { legend: { enabled: !1 } } }, { maxHeight: 500, legendPosition: "bottom", overrides: { legend: { enabled: !1 } } }, { maxHeight: 150, overrides: { legend: { enabled: !1 } } }, { maxWidth: 200, overrides: { titles: { enabled: !1 }, allLabels: { enabled: !1 }, axes: { labelsEnabled: !1 } } }, { maxHeight: 200, overrides: { titles: { enabled: !1 }, allLabels: { enabled: !1 }, axes: { labelsEnabled: !1 } } }], serial: [{ maxWidth: 550, legendPosition: "left", overrides: { legend: { enabled: !1 } } }, { maxWidth: 550, legendPosition: "right", overrides: { legend: { enabled: !1 } } }, { maxWidth: 100, overrides: { legend: { enabled: !1 } } }, { maxHeight: 350, legendPosition: "top", overrides: { legend: { enabled: !1 } } }, { maxHeight: 350, legendPosition: "bottom", overrides: { legend: { enabled: !1 } } }, { maxHeight: 100, overrides: { legend: { enabled: !1 } } }, { maxWidth: 350, overrides: { autoMarginOffset: 0, graphs: { hideBulletsCount: 10 } } }, { maxWidth: 350, rotate: !1, overrides: { marginLeft: 10, marginRight: 10, valueAxes: { ignoreAxisWidth: !0, inside: !0, title: "", showFirstLabel: !1, showLastLabel: !1 }, graphs: { bullet: "none" } } }, { maxWidth: 350, rotate: !0, overrides: { marginLeft: 10, marginRight: 10, categoryAxis: { ignoreAxisWidth: !0, inside: !0, title: "" } } }, { maxWidth: 200, rotate: !1, overrides: { marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 10, categoryAxis: { ignoreAxisWidth: !0, labelsEnabled: !1, inside: !0, title: "", guides: { inside: !0 } }, valueAxes: { ignoreAxisWidth: !0, labelsEnabled: !1, axisAlpha: 0, guides: { label: "" } }, legend: { enabled: !1 } } }, { maxWidth: 200, rotate: !0, overrides: { chartScrollbar: { scrollbarHeight: 4, graph: "", resizeEnabled: !1 }, categoryAxis: { labelsEnabled: !1, axisAlpha: 0, guides: { label: "" } }, legend: { enabled: !1 } } }, { maxWidth: 100, rotate: !1, overrides: { valueAxes: { gridAlpha: 0 } } }, { maxWidth: 100, rotate: !0, overrides: { categoryAxis: { gridAlpha: 0 } } }, { maxHeight: 300, overrides: { autoMarginOffset: 0, graphs: { hideBulletsCount: 10 } } }, { maxHeight: 200, rotate: !1, overrides: { marginTop: 10, marginBottom: 10, categoryAxis: { ignoreAxisWidth: !0, inside: !0, title: "", showFirstLabel: !1, showLastLabel: !1 } } }, { maxHeight: 200, rotate: !0, overrides: { marginTop: 10, marginBottom: 10, valueAxes: { ignoreAxisWidth: !0, inside: !0, title: "", showFirstLabel: !1, showLastLabel: !1 }, graphs: { bullet: "none" } } }, { maxHeight: 150, rotate: !1, overrides: { titles: { enabled: !1 }, chartScrollbar: { scrollbarHeight: 4, graph: "", resizeEnabled: !1 }, categoryAxis: { labelsEnabled: !1, ignoreAxisWidth: !0, axisAlpha: 0, guides: { label: "" } } } }, { maxHeight: 150, rotate: !0, overrides: { titles: { enabled: !1 }, valueAxes: { labelsEnabled: !1, ignoreAxisWidth: !0, axisAlpha: 0, guides: { label: "" } } } }, { maxHeight: 100, rotate: !1, overrides: { valueAxes: { labelsEnabled: !1, ignoreAxisWidth: !0, axisAlpha: 0, gridAlpha: 0, guides: { label: "" } } } }, { maxHeight: 100, rotate: !0, overrides: { categoryAxis: { labelsEnabled: !1, ignoreAxisWidth: !0, axisAlpha: 0, gridAlpha: 0, guides: { label: "" } } } }, { maxWidth: 100, overrides: { autoMargins: !1, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, categoryAxis: { labelsEnabled: !1 }, valueAxes: { labelsEnabled: !1 } } }, { maxHeight: 100, overrides: { autoMargins: !1, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, categoryAxis: { labelsEnabled: !1 }, valueAxes: { labelsEnabled: !1 } } }], xy: [{ maxWidth: 550, legendPosition: "left", overrides: { legend: { enabled: !1 } } }, { maxWidth: 550, legendPosition: "right", overrides: { legend: { enabled: !1 } } }, { maxWidth: 100, overrides: { legend: { enabled: !1 } } }, { maxHeight: 350, legendPosition: "top", overrides: { legend: { enabled: !1 } } }, { maxHeight: 350, legendPosition: "bottom", overrides: { legend: { enabled: !1 } } }, { maxHeight: 100, overrides: { legend: { enabled: !1 } } }, { maxWidth: 250, overrides: { autoMarginOffset: 0, autoMargins: !1, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, valueAxes: { inside: !0, title: "", showFirstLabel: !1, showLastLabel: !1 }, legend: { enabled: !1 } } }, { maxWidth: 150, overrides: { valueyAxes: { labelsEnabled: !1, axisAlpha: 0, gridAlpha: 0, guides: { label: "" } } } }, { maxHeight: 250, overrides: { autoMarginOffset: 0, autoMargins: !1, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, valueAxes: { inside: !0, title: "", showFirstLabel: !1, showLastLabel: !1 }, legend: { enabled: !1 } } }, { maxWidth: 150, overrides: { valueyAxes: { labelsEnabled: !1, axisAlpha: 0, gridAlpha: 0, guides: { label: "" } } } }], stock: [{ maxWidth: 500, overrides: { dataSetSelector: { position: "top" }, periodSelector: { position: "bottom" } } }, { maxWidth: 400, overrides: { dataSetSelector: { selectText: "", compareText: "" }, periodSelector: { periodsText: "", inputFieldsEnabled: !1 } } }], map: [{ maxWidth: 200, overrides: { zoomControl: { zoomControlEnabled: !1 }, smallMap: { enabled: !1 }, valueLegend: { enabled: !1 }, dataProvider: { areas: { descriptionWindowWidth: 160, descriptionWindowRight: 10, descriptionWindowTop: 10 }, images: { descriptionWindowWidth: 160, descriptionWindowRight: 10, descriptionWindowTop: 10 }, lines: { descriptionWindowWidth: 160, descriptionWindowRight: 10, descriptionWindowTop: 10 } } } }, { maxWidth: 150, overrides: { dataProvider: { areas: { descriptionWindowWidth: 110, descriptionWindowRight: 10, descriptionWindowTop: 10 }, images: { descriptionWindowWidth: 110, descriptionWindowRight: 10, descriptionWindowTop: 10 }, lines: { descriptionWindowWidth: 110, descriptionWindowLeft: 10, descriptionWindowRight: 10 } } } }, { maxHeight: 200, overrides: { zoomControl: { zoomControlEnabled: !1 }, smallMap: { enabled: !1 }, valueLegend: { enabled: !1 }, dataProvider: { areas: { descriptionWindowHeight: 160, descriptionWindowRight: 10, descriptionWindowTop: 10 }, images: { descriptionWindowHeight: 160, descriptionWindowRight: 10, descriptionWindowTop: 10 }, lines: { descriptionWindowHeight: 160, descriptionWindowRight: 10, descriptionWindowTop: 10 } } } }, { maxHeight: 150, overrides: { dataProvider: { areas: { descriptionWindowHeight: 110, descriptionWindowRight: 10, descriptionWindowTop: 10 }, images: { descriptionWindowHeight: 110, descriptionWindowRight: 10, descriptionWindowTop: 10 }, lines: { descriptionWindowHeight: 110, descriptionWindowLeft: 10, descriptionWindowRight: 10 } } } }] },
                r = function(e) { return null === e || void 0 === e },
                n = function(e) { return !r(e) && "[object Array]" === Object.prototype.toString.call(e) },
                o = function(e) { return null !== e && "object" == typeof e },
                d = function(e, i) {
                    for (var t = 0; t < e.length; t++)
                        if (o(e[t]) && e[t].id === i) return e[t]
                },
                l = function(e) { if (!o(e)) return e; if (n(e)) return e.slice(); var i = {}; for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (i[t] = l(e[t])); return i },
                s = "{F0578839-A214-4E2D-8D1B-44941ECE8332}_",
                g = {},
                h = function(e, i, a) {
                    var r = s + i;
                    r in e || (e[r] = i in e ? e[i] : g), e[i] = l(a), t.overridden.push({ object: e, property: i })
                },
                m = function(e, i) {
                    var t = e[s + i];
                    t === g ? delete e[i] : e[i] = t
                },
                b = function() {
                    for (; t.overridden.length > 0;) {
                        var e = t.overridden.pop();
                        m(e.object, e.property)
                    }
                },
                p = function() { e.dataChanged = !0, "xy" !== e.type && (e.marginsUpdated = !1), e.zoomOutOnDataUpdate = !1, e.validateNow(!0), m(e, "zoomOutOnDataUpdate"), u() },
                u = function() {
                    if (t.startDuration) {
                        if ("stock" === e.type) { e.panelsSettings.startDuration = t.startDuration; for (var i = 0; i < e.panels.length; i++) e.panels[i].startDuration = t.startDuration, e.panels[i].animateAgain() } else e.startDuration = t.startDuration, void 0 !== e.animateAgain && e.animateAgain();
                        delete t.startDuration
                    }
                },
                v = function(e, i) {
                    if (!r(i))
                        for (var t in i)
                            if (Object.prototype.hasOwnProperty.call(i, t)) {
                                var a = e[t],
                                    l = i[t];
                                if (r(a)) "periodSelector" !== t && "dataSetSelector" !== t && h(e, t, l);
                                else {
                                    if (n(a)) {
                                        if (n(l)) {
                                            if (a.length > 0 && !o(a[0]) || l.length > 0 && !o(l[0])) { h(e, t, l); continue }
                                            for (var s = !0, g = 0; g < l.length; g++)
                                                if (r(l[g]) || r(l[g].id)) { s = !1; break } if (s) {
                                                for (var m = 0; m < l.length; m++) {
                                                    var b = d(a, l[m].id);
                                                    if (void 0 === b) throw 'could not find element to override in "' + t + '" with ID: ' + l[m].id;
                                                    v(b, l[m])
                                                }
                                                continue
                                            }
                                            if (l.length <= a.length) { for (var p = 0; p < l.length; p++) v(a[p], l[p]); continue }
                                            throw "too many index-based overrides specified for object array property: " + t
                                        }
                                        if (o(l)) { for (var u = 0; u < a.length; u++) v(a[u], l); continue }
                                        throw "non-object override detected for array property: " + t
                                    }
                                    o(a) ? v(a, l) : h(e, t, l)
                                }
                            }
                },
                x = function() {
                    var i = e.divRealWidth,
                        a = e.divRealHeight;
                    if (0 !== i && 0 !== a) {
                        for (var n = !1, o = 0; o < t.rules.length; o++) {
                            var d = t.rules[o],
                                l = (r(d.minWidth) || d.minWidth <= i) && (r(d.maxWidth) || d.maxWidth >= i) && (r(d.minHeight) || d.minHeight <= a) && (r(d.maxHeight) || d.maxHeight >= a) && (r(d.rotate) || d.rotate === !0 && e.rotate === !0 || d.rotate === !1 && (r(e.rotate) || e.rotate === !1)) && (r(d.legendPosition) || !r(e.legend) && !r(e.legend.position) && e.legend.position === d.legendPosition);
                            l ? r(t.currentRules[o]) && (t.currentRules[o] = !0, n = !0) : r(t.currentRules[o]) || (t.currentRules[o] = void 0, n = !0)
                        }
                        if (!n) return void u();
                        b();
                        for (var s in t.currentRules)
                            if (Object.prototype.hasOwnProperty.call(t.currentRules, s) && !r(t.currentRules[s])) {
                                if (r(t.rules[s])) throw "null or undefined rule in index: " + s;
                                v(e, t.rules[s].overrides)
                            } p()
                    }
                };
            a.gantt = a.serial, n(t.rules) ? t.addDefaultRules !== !1 && (t.rules = a[e.type].concat(t.rules)) : t.rules = a[e.type], h(e, "zoomOutOnDataUpdate", e.zoomOutOnDataUpdate), e.addListener("resized", x), e.addListener("init", x)
        }
    }
}, ["pie", "serial", "xy", "funnel", "radar", "gauge", "gantt", "stock", "map"]);