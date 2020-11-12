var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4578",
        "ok": "4578",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "180",
        "ok": "180",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "768",
        "ok": "768",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "234",
        "ok": "234",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "33",
        "ok": "33",
        "ko": "-"
    },
    "percentiles1": {
        "total": "231",
        "ok": "231",
        "ko": "-"
    },
    "percentiles2": {
        "total": "245",
        "ok": "245",
        "ko": "-"
    },
    "percentiles3": {
        "total": "266",
        "ok": "266",
        "ko": "-"
    },
    "percentiles4": {
        "total": "290",
        "ok": "290",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4578,
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
        "total": "38.15",
        "ok": "38.15",
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
        "total": "188",
        "ok": "188",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "183",
        "ok": "183",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "768",
        "ok": "768",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "114",
        "ok": "114",
        "ko": "-"
    },
    "percentiles1": {
        "total": "232",
        "ok": "232",
        "ko": "-"
    },
    "percentiles2": {
        "total": "249",
        "ok": "249",
        "ko": "-"
    },
    "percentiles3": {
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "percentiles4": {
        "total": "753",
        "ok": "753",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 188,
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
        "total": "1.567",
        "ok": "1.567",
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
        "total": "4390",
        "ok": "4390",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "180",
        "ok": "180",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "719",
        "ok": "719",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "233",
        "ok": "233",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "23",
        "ok": "23",
        "ko": "-"
    },
    "percentiles1": {
        "total": "231",
        "ok": "231",
        "ko": "-"
    },
    "percentiles2": {
        "total": "245",
        "ok": "245",
        "ko": "-"
    },
    "percentiles3": {
        "total": "265",
        "ok": "265",
        "ko": "-"
    },
    "percentiles4": {
        "total": "284",
        "ok": "284",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4390,
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
        "total": "36.583",
        "ok": "36.583",
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
