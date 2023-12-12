import SectionTitle from "../SectionTitle/SectionTitle";


const Education = () => {
    return (
        <div className="my-14">
            <SectionTitle heading={"Academic Background & Qualifications and Courses"}
            subheading={"My Education"}
            ></SectionTitle>

            <div>
                <div className="overflow-x-auto w-4/5 lg:w-3/4 mx-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr className="font-bold text-lg">
                            <th>Qualification</th>
                            <th>Institute</th>
                            <th>CGPA</th>
                            <th>Year</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>MBA</td>
                            <td>University of Dhaka</td>
                            <td>3.54 out of 4</td>
                            <td>2012-2013</td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <td>BBA</td>
                            <td>University of Dhaka</td>
                            <td>3.44 out of 4</td>
                            <td>2008-2012</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td>HSC</td>
                            <td>Shahid Sayed Nazrul Islam College</td>
                            <td> 5 out of 5</td>
                            <td>2008</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <td>SSC</td>
                            <td>Shamgonj High School</td>
                            <td> 4.44 out of 5</td>
                            <td>2006</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="overflow-x-auto w-4/5 lg:w-3/4 mx-auto mt-8">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr className="font-bold text-lg">
                            <th>Course Name</th>
                            <th>Institute</th>
                            <th>Year</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>Complete Web Development Course</td>
                            <td>Programming Hero</td>
                            <td>June 2023 - December 2023</td>
                            
                        </tr>
                       
                        </tbody>
                    </table>
                </div>
            </div>

            
        
            
        </div>
    );
};

export default Education;