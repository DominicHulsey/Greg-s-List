//PRIVATE
import JobService from "./jobService.js"

let _js = new JobService()

function draw() {
  let jobs = _js.Jobs
  let template = ''
  jobs.forEach(job => {
    template += job.getTemplate()
  });
  document.getElementById('available-jobs').innerHTML = template
}

function logJobs() {
  console.log('jobs drew')
}




//PUBLIC
export default class JobController {
  constructor() {
    _js.addJobSub('jobs', draw)
    _js.addJobSub('jobs', logJobs)
    draw()
  }

  addJob(event) {
    event.preventDefault();
    let form = event.target
    let newJob = {
      location: form.location.value,
      jobTitle: form.jobTitle.value,
      salary: form.salary.value,
      img: form.img.value
    }
    _js.addJob(newJob)
    form.reset()
  }

  deleteJob(id) {
    _js.deleteJob(id)
  }
}