import Job from "../models/job.js";

//PRIVATE
let _jobState = {
  jobs: [
    new Job({ location: 'Papua New Guinea', jobTitle: 'CEO', salary: 200000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgzjg9BoICi1c2KiU7Ksm0DYXypqS5jh9_FqGsf89zl3Tc6PkJQ' }),
    new Job({ location: 'Boise', jobTitle: 'CFO', salary: 190000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgzjg9BoICi1c2KiU7Ksm0DYXypqS5jh9_FqGsf89zl3Tc6PkJQ' }),
    new Job({ location: 'Beijing', jobTitle: 'CTO', salary: 1800000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgzjg9BoICi1c2KiU7Ksm0DYXypqS5jh9_FqGsf89zl3Tc6PkJQ' }),
    new Job({ location: 'Cairo', jobTitle: 'COO', salary: 170000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgzjg9BoICi1c2KiU7Ksm0DYXypqS5jh9_FqGsf89zl3Tc6PkJQ' }),
  ]
}

let _jobSubs = {
  jobs: []
}

function setState(dataName, value) {
  _jobState[dataName] = value
  //FOR EACH FUNCTION IN THE SUBSCRIBERS INVOKE THE FUNCTION
  _jobSubs[dataName].forEach(fn => fn())
}


//PUBLIC
export default class JobService {

  addJobSub(dataName, fn) {
    _jobSubs[dataName].push(fn)
  }
  get Jobs() {
    return _jobState.jobs
  }
  addJob(rawJob) {
    let newJob = new Job(rawJob)
    _jobState.jobs.push(newJob)
    setState('jobs', _jobState.jobs)
  }

  deleteJob(id) {
    for (let i = 0; i < _jobState.jobs.length; i++) {
      let job = _jobState.jobs[i];
      if (job.id == id) {
        _jobState.jobs.splice(i, 1)
        break;
      }

    }
    setState('jobs', _jobState.jobs)
  }
}