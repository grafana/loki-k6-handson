export const options = {
    stages: [
        { duration: '1m', target: 20 },
        { duration: '3m', target: 20 },
        { duration: '1m', target: 0 },
    ],
    thresholds: {
        http_req_failed: ['rate<0.02'], // http errors should be less than 2%
        http_req_duration: ['p(95)<2000'], // 95% requests should be below 2s
    },
    ext: {
        loadimpact: {
            distribution: {
                'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 }, // CHANGE IF NOT RELEVANT
            },
        },
    },
}
export default function main() {
    let data = {
        "streams": [
            {
                "stream": {
                    "foo": "bar",
                    "app": "lokitest"
                },
                "values": [
                ]
            }
        ]
    };
    let now = new Date();
    let start = (now.getTime() - 5 * 60 * 1000) * 1000 * 1000; // To nanoseconds

    let line1 = new Array();
    line1[0] = "" + start;
    line1[1] = "VirtualUserID=" + exec.vu.idInTest;
    
    let line2 = new Array();
    line2[0] = "" + (start + 1000);
    line2[1] = "VirtualUserIteration=" + exec.vu.iterationInInstance;
    
    let v1 = data.streams[0].values[0] = line1;
    data.streams[0].values[1] = line2;
    
    let url = "https://" + __ENV.LOKIUSER + ":" + __ENV.LOKITOKEN + "@" + __ENV.LOKIURL + "/loki/api/v1/push";
    
    let res = http.post(url, JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
    });
    sleep(1)
}