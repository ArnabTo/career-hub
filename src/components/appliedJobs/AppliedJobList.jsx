import JobLocationI from "../icons/JobLocation";
import Salery from "../icons/Salery";

const AppliedJobList = ({ appliedJob }) => {
    const { logo, job_title, salary, job_type, location, remote_or_onsite, company_name } = appliedJob;
    return (
        <div className="max-w-6xl m-auto">
            <div className="border flex items-center flex-col lg:flex-row justify-between p-4 my-7 rounded-sm">
                <div className="flex justify-between flex-col lg:flex-row lg:w-1/2">
                    <img className="object-contain" src={logo} />
                    <div>
                        <ul>
                            <li><h1 className="text-[#474747] text-2xl font-extrabold mb-2">{job_title}</h1></li>
                            <li><h3 className="text-[#757575] text-2xl font-semibold mb-4">{company_name}</h3></li>
                            <span>
                                <button className="btn btn-primary bg-transparent  px-5 mr-2  text-[#7E90FE] border-[#7E90FE] hover:bg-[#7E90FE] hover:text-[white]">{remote_or_onsite}</button>
                                <button className="btn btn-primary bg-transparent  px-5 text-[#7E90FE] border-[#7E90FE] hover:bg-[#7E90FE] hover:text-[white]">{job_type}</button>
                            </span>
                            <span className="flex text-[#757575] text-xl font-semibold py-2 gap-4">
                                <p className="flex"><JobLocationI></JobLocationI>{location}</p>
                                <p className="flex"><Salery></Salery>{salary}</p>
                            </span>
                        </ul>
                    </div>
                </div>
                <button className="btn btn-primary rounded-md bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none">View Details</button>
            </div>
        </div>
    );
};

export default AppliedJobList;