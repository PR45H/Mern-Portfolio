import React from "react";
import SectionTitle from "../../components/SectionTitle";

const About = () => {
    const skills = [
        "JavaScript",
        "Typescript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "Python",
    ]



    return (
        <div className="mt-10">
            <SectionTitle title="About Me" />
            <div className="flex gap-40 w-full sm:flex-col sm:gap-10 lg:gap-10 lg:flex-col xl:flex-col">
                <div className="h-[50vh]">
                    <lottie-player
                        src="https://lottie.host/451d6e3b-fc13-4227-8de8-fe487b5004b3/mg9zWRzRRl.json"
                        background="##fff"
                        speed="1"
                    ></lottie-player>
                </div>

                <div className=" sm:w-full lg:w-full xl:w-full text-white w-2/4 text-wrap p-10 flex flex-col gap-10 font-medium opacity-80">
                    <p>
                        🚀 Transforming from number cruncher to tech enthusiast! Hi there,
                        I'm Prashant Babu, a number-savvy professional with an
                        unconventional tech journey.
                    </p>
                    <p>
                        Back in the school days, I was the "go-to guy" for fixing tech
                        glitches, but being in a middle-class family meant IT dreams took a
                        backseat. I embraced commerce studies, earning my stripes with an
                        M.Com in Business Economics.
                    </p>
                    <p>
                        Fast-forward to today, I'm weaving my tech dreams into reality! By
                        day, I delve into the intricate world of accounting and wealth
                        management. But my heart races with lines of code. I'm on a quest to
                        become a tech maestro, currently diving headfirst into the Full
                        Stack Web Development course at Masai, certified through Prepleaf by
                        Masai.
                    </p>

                    <p>
                        🌟 My tech journey is just beginning, and I'm excited to explore the
                        endless possibilities. I'm on the lookout for a dynamic team to
                        collaborate with, where I can contribute my skills and learn from
                        the best. Let's connect and create something amazing together!
                    </p>
                </div>
            </div>

            <div>
                <SectionTitle title="Skills" />
                <div className="flex flex-wrap gap-10 py-10">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="text-tertiary font-medium border border-tertiary px-10 py-4 rounded-md mt-8"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
