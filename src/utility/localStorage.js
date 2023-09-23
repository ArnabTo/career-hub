
const getStoredJobApplication = () => {
    const sotredJobApplications = localStorage.getItem('job_applications');
    if (sotredJobApplications) {
        return JSON.parse(sotredJobApplications)
    }
    return [];
}
const saveJobApplications = (id) =>{
    const storedJobApplication = getStoredJobApplication();
    const isDupliCate = storedJobApplication.find(jobId => jobId == id)
    if(!isDupliCate){
        storedJobApplication.push(id);
        localStorage.setItem('job_applications', JSON.stringify(storedJobApplication))
    }
}
export {getStoredJobApplication, saveJobApplications};