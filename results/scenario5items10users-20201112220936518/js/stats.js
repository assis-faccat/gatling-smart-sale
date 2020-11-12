var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4907",
        "ok": "4907",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "170",
        "ok": "170",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1141",
        "ok": "1141",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "235",
        "ok": "235",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "percentiles1": {
        "total": "230",
        "ok": "230",
        "ko": "-"
    },
    "percentiles2": {
        "total": "245",
        "ok": "245",
        "ko": "-"
    },
    "percentiles3": {
        "total": "268",
        "ok": "268",
        "ko": "-"
    },
    "percentiles4": {
        "total": "355",
        "ok": "355",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4905,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
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
        "total": "40.892",
        "ok": "40.892",
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
        "total": "415",
        "ok": "415",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "185",
        "ok": "185",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "777",
        "ok": "777",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "243",
        "ok": "243",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "83",
        "ok": "83",
        "ko": "-"
    },
    "percentiles1": {
        "total": "227",
        "ok": "227",
        "ko": "-"
    },
    "percentiles2": {
        "total": "242",
        "ok": "242",
        "ko": "-"
    },
    "percentiles3": {
        "total": "272",
        "ok": "272",
        "ko": "-"
    },
    "percentiles4": {
        "total": "731",
        "ok": "731",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 415,
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
        "total": "3.458",
        "ok": "3.458",
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
        "total": "4492",
        "ok": "4492",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "170",
        "ok": "170",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1141",
        "ok": "1141",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "234",
        "ok": "234",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "34",
        "ok": "34",
        "ko": "-"
    },
    "percentiles1": {
        "total": "230",
        "ok": "230",
        "ko": "-"
    },
    "percentiles2": {
        "total": "245",
        "ok": "245",
        "ko": "-"
    },
    "percentiles3": {
        "total": "268",
        "ok": "268",
        "ko": "-"
    },
    "percentiles4": {
        "total": "342",
        "ok": "342",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4490,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
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
        "total": "37.433",
        "ok": "37.433",
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
