let id = 1

export default class House {
  constructor(houseData) {
    this.id = id
    this.location = houseData.location,
      this.price = houseData.price,
      this.rooms = houseData.rooms,
      this.img = houseData.img,
      id++
  }

  getTemplate() {
    return `
        <div class="card col-3">
            <img class="card-img-top" src="${this.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.price}</h5>
                <p class="card-text">${this.location} -- ${this.rooms} rooms</p>
                <button onclick="app.controllers.houseController.deleteHouse(${this.id})">Remove</button>
            </div>
        </div>`
  }
}