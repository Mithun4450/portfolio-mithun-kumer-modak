import SectionTitle from "../SectionTitle/SectionTitle";


const Experience = () => {
    return (
        <div className="my-14">
            <SectionTitle heading={"Diverse Professional Exposure Across Different Domains"}
            subheading={"Experience in Other Sectors"}
            ></SectionTitle>

            <div>
                <div className="overflow-x-auto w-4/5 lg:w-3/4 mx-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr className="font-bold text-lg">
                            <th>Organization</th>
                            <th>Job Designation</th>
                            <th>Year of Experience</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>First Security Islami Bank Ltd.</td>
                            <td>Principal Officer</td>
                            <td>5 Years 6 Months</td>
                            
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <td>Jamalpur Technical School and College</td>
                            <td>Junior Instructor</td>
                            <td>October 2021 to Present</td>
                            
                        </tr>
                        
                        </tbody>
                    </table>
                </div>

                
            </div>

            
        
            
        </div>
    );
};

export default Experience;