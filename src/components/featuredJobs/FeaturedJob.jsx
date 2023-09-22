import { useEffect, useState } from "react";
import Job from "../../job/Job";
const FeaturedJob = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className=" py-14">
                <h1 className="text-center text-[#1A1919] text-5xl font-extrabold">Featured Jobs</h1>
                <p className="text-center text-[#757575] text-base font-medium leading-6">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className=" m-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                jobs.slice(0, dataLength).map(job => <Job job={job} key={job.id}></Job>)
            }
            <div className={dataLength === jobs.length ? "hidden" : 'block'}>
            <button className="btn btn-primary" onClick={() => setDataLength(jobs.length)}>Show All</button>
             </div>
        </div>
        </div>
    );
};

export default FeaturedJob;