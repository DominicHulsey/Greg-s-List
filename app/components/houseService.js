import House from "../models/house.js";

//PRIVATE
let _houseState = {
  houses: [
    new House({ location: 'Boise', price: 10000, rooms: 1, img: 'https://aminus3.s3.amazonaws.com/image/g0004/u00003472/i00509924/aa1469770cf10b736151e77cacd599bc_large.jpg' }),
    new House({ location: 'Dubai', price: 100000000, rooms: 30, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-UlJ2KqN8w5XOOLYPR28WT29FcqhhZxREXONEU23IiAj3ydd' }),
    new House({ location: 'Los Angeles', price: 100000, rooms: 4, img: 'https://circaoldhouses.com/wp-content/uploads/2017/10/key-hole-house-1.jpg' }),
    new House({ location: 'Amityville', price: 100, rooms: 5, img: 'https://www.thewrap.com/wp-content/uploads/2016/11/Amityville-Horror-House.jpg' }),
  ]
}

let _houseSubs = {
  houses: []
}

function setState(dataName, value) {
  _houseState[dataName] = value
  //FOR EACH FUNCTION IN THE SUBSCRIBERS INVOKE THE FUNCTION
  _houseSubs[dataName].forEach(fn => fn())
}


//PUBLIC
export default class HouseService {

  addHouseSub(dataName, fn) {
    _houseSubs[dataName].push(fn)
  }
  get Houses() {
    return _houseState.houses
  }
  addHouse(rawHouse) {
    let newHouse = new House(rawHouse)
    _houseState.houses.push(newHouse)
    setState('houses', _houseState.houses)
  }

  deleteHouse(id) {
    for (let i = 0; i < _houseState.houses.length; i++) {
      let house = _houseState.houses[i];
      if (house.id == id) {
        _houseState.houses.splice(i, 1)
        break;
      }

    }
    setState('houses', _houseState.houses)
  }
}