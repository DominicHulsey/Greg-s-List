let id = 1

export default class Job {
  constructor(jobData) {
    this.id = id
    this.location = jobData.location,
      this.jobTitle = jobData.jobTitle,
      this.salary = jobData.salary,
      this.img = jobData.img,
      id++
  }

  getTemplate() {
    return `
        <div class="card col-3">
            <img class="card-img-top" src="${this.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.jobTitle}</h5>
                <p class="card-text">${this.location} -- $${this.salary} Per Year</p>
                <button onclick="app.controllers.jobController.deleteJob(${this.id})">Remove</button>
            </div>
        </div>`
  }
}