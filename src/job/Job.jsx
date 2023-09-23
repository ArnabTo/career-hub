import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    // console.log(job)
    const {id, logo, job_title, company_name, remote_or_onsite, location, salary, job_type } = job;
    
    return (
        <div>
            <div className="card card-compact shadow-xl border-[#E8E8E8] border-[1px] rounded-lg text-start px-10 py-2 ">
                <div className=" justify-start py-8 "><img src={logo} alt="Shoes" /></div>
                <div className="card-body p-0">
                    <h2 className="card-title text-[#474747] text-2xl font-extrabold py-2">{job_title}</h2>
                    <h4 className=" text-[#757575] text-xl font-semibold">{company_name}</h4>
                    <span>
                      <button className="btn btn-primary bg-transparent py-2 px-5  text-[#7E90FE] border-[#7E90FE] hover:bg-[#7E90FE] hover:text-[white]">{remote_or_onsite}</button>
                      <button className="btn btn-primary bg-transparent py-2 px-5 text-[#7E90FE] border-[#7E90FE] hover:bg-[#7E90FE] hover:text-[white]">{job_type}</button>
                    </span>
                    <span className="flex text-[#757575] text-xl font-semibold py-2 "> 
                    <p>{location}</p>
                        <p>{salary}</p>
                    </span>
                    <div className="card-actions justify-start">
                    <Link to={`/job/${id}`}><button className="btn btn-primary bg-gradient-to-r from-[#7E90FE] to-[#9873FF] outline-none border-none">View Details</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
 
};
export default Job;