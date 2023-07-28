// See https://k6.io/docs/using-k6/options
export const options = {
  stages: [
    { duration: '1m', target: 2 },
    { duration: '3m', target: 2 },
    { duration: '1m', target: 0 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.02'], // http errors should be less than 2%
    http_req_duration: ['p(95)<2000'], // 95% requests should be below 2s
  },
  ext: {
    loadimpact: {
      distribution: {
        'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 },
      },
    },
  },
}

export default function main() {
 
  let data= {
    "streams": [
      {
        "stream": {
          "app": "lokiheart"
        },
        "values": [
        ]
      }
    ]
  };

 let now= new Date();
 let start= (now.getTime()- 5*60*1000)*1000*1000;
 
let line1= new Array();
let phi= Math.random()*2.0*Math.PI;
let x, y; 
let found= false;
do {
      x= -1.5+Math.random()*3;
      y= -1.5+Math.random()*3;
      if( ((x*x+y*y-1)*(x*x+y*y-1)*(x*x+y*y-1) - x*x*y*y*y ) < 0)
        found= true;
} while(!found)
x= x*0.04/1.5;
y= y*0.02/1.5;
let rx= -0.1752099746981364;
      
let ry= 51.494115339030685;
line1[0]= ""+start;
line1[1]="longitude="+(rx+x)+" latitude="+(ry+y)+ " value="+Math.random();
    
let v1=data.streams[0].values[0]= line1;

let url= "https://"+__ENV.LOKIUSER+":"+__ENV.LOKITOKEN+"@"+__ENV.LOKIURL+"/loki/api/v1/push";
console.log("url: "+url);
console.log("data: "+JSON.stringify(data));

  let res = http.post(url, JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
  sleep(1)
}
