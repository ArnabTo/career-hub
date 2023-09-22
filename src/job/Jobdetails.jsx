import { useLoaderData, useParams } from "react-router-dom";
import DollarI from "../components/icons/DollarI";
import EmailI from "../components/icons/EmailI";
import LocationI from "../components/icons/LocationI";
import PhoneI from "../components/icons/Phone";
import TitleI from "../components/icons/TitleI";

const Jobdetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job => job.id == id)

    return (
        <div className="max-w-7xl m-auto py-16">
            <div className="grid gap-2 md:grid-cols-4">
                <div className="col-span-3">
                    <p className="mb-4 leading-8 text-[#757575] text-base font-medium"><b className="text-[#1A1919] text-base font-extrabold leading-8 mr-2">Job Description:</b>{job.job_description}</p>
                    <p className="mb-4 leading-8 text-[#757575] text-base font-medium"><b className="text-[#1A1919] text-base font-extrabold leading-8 mr-2">Job Responsibility:</b>{job.job_responsibility}</p>
                    <p className="mb-4 leading-8 text-[#757575] text-base font-medium"><b className="text-[#1A1919] text-base font-extrabold leading-8 mr-2">Educational Requerment:</b><br></br>{job.educational_requirements}</p>
                    <p className="mb-4 leading-8 text-[#757575] text-base font-medium"><b className="text-[#1A1919] text-base font-extrabold leading-8 mr-2">Experience:</b><br></br>{job.experiences}</p>
                </div>
                <div className="col-span-1 rounded-lg ">
                    <div className="bg-[#F3F3FF] mb-2  px-4 py-4 rounded-lg">
                        <h1>Job Details</h1>
                        <div className="details">
                            <p className="flex text-[#474747] text-xl font-bold">
                                <DollarI />
                                <b>Salary:</b>{job.salary}(Per Month)
                            </p>
                            <p className="flex text-[#474747] text-xl font-bold">
                                <TitleI />
                                <b>Job Title:</b>{job.job_title}
                            </p>
                        </div>
                        <div className="contactDetails">
                            <p className="flex text-[#474747] text-xl font-bold">
                                <PhoneI />
                                <b>Phone:</b>{job.contact_information.phone}(Per Month)</p>
                            <p className="flex text-[#474747] text-xl font-bold">
                                <EmailI />
                                <b>Email:</b>{job.contact_information.email}</p>
                            <p className="flex text-[#474747] text-xl font-bold">
                                <LocationI/>
                                <b>Address:</b>{job.contact_information.address}</p>
                        </div>
                    </div>
                    <div><button className="btn btn-primary bg-[#9873FF] text-white text-xl font-extrabold w-full">Apply Now</button></div>
                </div>
            </div>
        </div>
    );
};

export default Jobdetails;