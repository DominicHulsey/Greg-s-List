//PRIVATE
import HouseService from "./houseService.js"

let _hs = new HouseService()



function draw() {
  let houses = _hs.Houses
  let template = ''
  houses.forEach(house => {
    template += house.getTemplate()
  });
  document.getElementById('available-houses').innerHTML = template
}

function logHouses() {
  console.log('oh my god it worked')
}




//PUBLIC
export default class HouseController {
  constructor() {
    _hs.addHouseSub('houses', draw)
    _hs.addHouseSub('houses', logHouses)
    draw()
  }

  addHouse(event) {
    event.preventDefault();
    let form = event.target
    let newHouse = {
      price: form.price.value,
      location: form.location.value,
      rooms: form.rooms.value,
      img: form.img.value
    }
    _hs.addHouse(newHouse)
    form.reset()
  }

  deleteHouse(id) {
    _hs.deleteHouse(id)
  }
}