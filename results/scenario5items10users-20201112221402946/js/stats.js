var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1258",
        "ok": "1258",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "172",
        "ok": "172",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "806",
        "ok": "806",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "238",
        "ok": "238",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "52",
        "ok": "52",
        "ko": "-"
    },
    "percentiles1": {
        "total": "232",
        "ok": "232",
        "ko": "-"
    },
    "percentiles2": {
        "total": "247",
        "ok": "247",
        "ko": "-"
    },
    "percentiles3": {
        "total": "270",
        "ok": "270",
        "ko": "-"
    },
    "percentiles4": {
        "total": "388",
        "ok": "388",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1257,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.859",
        "ok": "8.859",
        "ko": "-"
    }
},
contents: {
"req_warm-up-68348": {
        type: "REQUEST",
        name: "warm_up",
path: "warm_up",
pathFormatted: "req_warm-up-68348",
stats: {
    "name": "warm_up",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "215",
        "ok": "215",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "806",
        "ok": "806",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "489",
        "ok": "489",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "257",
        "ok": "257",
        "ko": "-"
    },
    "percentiles1": {
        "total": "484",
        "ok": "484",
        "ko": "-"
    },
    "percentiles2": {
        "total": "740",
        "ok": "740",
        "ko": "-"
    },
    "percentiles3": {
        "total": "797",
        "ok": "797",
        "ko": "-"
    },
    "percentiles4": {
        "total": "804",
        "ok": "804",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19,
    "percentage": 95
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.141",
        "ok": "0.141",
        "ko": "-"
    }
}
    },"req_exec-rpm-5f4ab": {
        type: "REQUEST",
        name: "exec_rpm",
path: "exec_rpm",
pathFormatted: "req_exec-rpm-5f4ab",
stats: {
    "name": "exec_rpm",
    "numberOfRequests": {
        "total": "1238",
        "ok": "1238",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "172",
        "ok": "172",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "574",
        "ok": "574",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "234",
        "ok": "234",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    },
    "percentiles1": {
        "total": "231",
        "ok": "231",
        "ko": "-"
    },
    "percentiles2": {
        "total": "247",
        "ok": "247",
        "ko": "-"
    },
    "percentiles3": {
        "total": "267",
        "ok": "267",
        "ko": "-"
    },
    "percentiles4": {
        "total": "299",
        "ok": "299",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1238,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.718",
        "ok": "8.718",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
