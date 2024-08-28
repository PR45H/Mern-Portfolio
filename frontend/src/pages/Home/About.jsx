import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

const About = () => {
    // get skills data from redux store
    const { portfolioData } = useSelector((state) => state.root)
    const { about, skills } = portfolioData
    const { lottieUrl, description1, description2, description3, description4 } = about[0]
    
    // Flatten the skills array used help of co-pilot
    const flattenedSkills = skills.reduce((acc, item) => acc.concat(item.skills), []);

    return (
        <div className="mt-10">
            <SectionTitle title="About Me" />
            <div className="flex gap-40 w-full sm:flex-col sm:gap-10 lg:gap-10 lg:flex-col xl:flex-col">
                <div className="h-[50vh]">
                    <lottie-player
                        src={lottieUrl || ""}
                        background="##fff"
                        speed="1"
                    ></lottie-player>
                </div>

                <div className=" sm:w-full lg:w-full xl:w-full text-white w-2/4 text-wrap p-10 flex flex-col gap-10 font-medium opacity-80">
                    <p>
                        {description1 || "description not available"}
                    </p>
                    <p>
                        {description2 || "description not available"}
                    </p>
                    <p>
                        {description3 || "description not available"}
                    </p>

                    <p>
                        {description4 || "description not available"}
                    </p>
                </div>
            </div>

            <div>
                <SectionTitle title="Skills" />
                <div className="flex flex-wrap gap-10 py-10">
                    {flattenedSkills.map((item, i) => (
                        <div
                            key={i}
                            className="text-tertiary font-medium border border-tertiary px-10 py-4 rounded-md mt-8"
                        >
                            {item || "skill data not available"}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
