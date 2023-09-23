import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import AppliedJobList from "./AppliedJobList";

  
const AppliedJobs = () => {
 const jobs = useLoaderData();
   const [jobsApplied , setJobsApplied] = useState([]);
 useEffect(()=>{
    const storedJobs = getStoredJobApplication();

    if(jobs.length > 0){
        const appliedJobs = [];
        for(const id of storedJobs){
            const job = jobs.find( job => job.id === id )
            if(job){
             appliedJobs.push(job)
            }
         }
         setJobsApplied(appliedJobs);
         console.log(appliedJobs, storedJobs, jobs)
    }
 },[])


    return (
        <div className="py-14">
           <h1 className="text-center text-[#1A1919] text-5xl font-extrabold">Featured Jobs</h1>
           <p className="text-center text-[#757575] text-base font-medium leading-6">Explore thousands of job opportunities with all the information you need. Its your future</p>
           {
            jobsApplied.map(appliedJob => <AppliedJobList appliedJob={appliedJob} key={appliedJob.key}></AppliedJobList>)
           }
        </div>
    );
};

export default AppliedJobs;