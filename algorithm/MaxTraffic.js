
function MaxTraffic(strArr) {
  let cityArr = [];
  let doneArr = [];
  strArr.forEach(cityString => {
    let parser = cityString.match(/(\d+):\[(\d.*)\]/);
    cityArr.push(
      {
        name: parser[1],
        valOnNode: parseInt(parser[1], 10),
        terminus: parser[2].split(',').length === 1,
        connections: parser[2].split(','),
        maxTraffic: []
      }
    )
  });

  let totalPopulation = cityArr.reduce((val1, val2) => {
    return val1 + parseInt(val2.name, 10);
  }, 0);

  cityArr.forEach(city => {
    if (city.connections.length === 1) {
      city.maxTraffic.push(totalPopulation - city.valOnNode);
    }
  });

  while (cityArr.some(val => !val.terminus)) {
    cityArr.forEach(city => {
      if (!city.terminus) {
        let liveNodes = city.connections.filter(cityName => {
          let cityObj = cityArr.find(object => {
            return object.name === cityName;
          })
          return !cityObj.terminus;
        });
        let deadNodes = city.connections.filter(cityName => {
          let cityObj = cityArr.find(object => {
            return object.name === cityName;
          })
          return cityObj.terminus;
        }).map(cityName => {
          let cityObj = cityArr.find(object => {
            return object.name === cityName;
          });
          return cityObj.valOnNode;
        });
        let deadNodesSum = deadNodes.reduce((val1, val2) => {
          return val1 + val2;
        }, 0);
        city.maxTraffic.push(...deadNodes);
        city.maxTraffic = city.maxTraffic.map(val => parseInt(val, 10));
        city.maxTraffic.push(totalPopulation - deadNodesSum - city.valOnNode);
        if (liveNodes.length <= 1) {
          city.terminus = true;
          city.maxTraffic = [Math.max(...city.maxTraffic)];
          city.valOnNode = deadNodesSum + city.valOnNode;
        }
      }
    });
  }
  let resArray = [];
  cityArr.sort((val1, val2) => parseInt(val1.name, 10) - parseInt(val2.name, 10));

  cityArr.forEach(city => {
    resArray.push(`${city.name}:${city.maxTraffic[0]}`);
  })
  return resArray.join(',');
}

const Input1 = ["1:[5]", "2:[5]", "3:[5]", "4:[5]", "5:[1,2,3,4]"];
// Output: 1:14,2:13,3:12,4:11,5:4
const Input2 = ["1:[5]", "2:[5,18]", "3:[5,12]", "4:[5]", "5:[1,2,3,4]", "18:[2]", "12:[3]"];
// Output: 1:44,2:25,3:30,4:41,5:20,12:33,18:27


// console.log('_____Input1_____');
console.log('MaxTraffic(Input1):', MaxTraffic(Input1))
// console.log('_____Input2_____');
console.log('MaxTraffic(Input2):', MaxTraffic(Input2))

