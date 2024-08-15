import React from "react";
import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { projectData } from "../../resources/project";

const Project = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);

    const handleItemClick = (index) => {
        setSelectedItemIndex(index);
    };
    return (
        <div>
        <SectionTitle title={"Projects"} />

        <div className="flex gap-52 sm:gap-5 sm:flex-col lg:gap-5 lg:flex-col xl:gap-5 xl:flex-col py-10 ">
            {/* display title */}
            <div className="flex flex-col gap-5 w-52 sm:overflow-x-scroll sm:flex-row sm:text-sm sm:w-full lg:flex-row lg:text-sm lg:w-full xl:flex-row xl:text-sm xl:w-full mt-5">
            {projectData.map((project, i) => (
                <div
                key={project.id}
                className="p-4 bg-[#299c8311] rounded-xl cursor-pointer sm:w-3/4"
                onClick={() => {
                    handleItemClick(i);
                }}
                >
                <h1
                    className={`${
                    selectedItemIndex === i ? "text-tertiary" : "text-white"
                    } sm:w-max`}
                >
                    {project.title}
                </h1>
                </div>
            ))}
            </div>

            {/* display description, techStack, github, deployed, image */}
            {projectData.map((project, i) => {
            return selectedItemIndex === i ? (
                <div
                key={project.id}
                className="text-white mt-5 flex items-center sm:mt-0 sm:flex-col sm:gap-10 sm:items-center lg:mt-0 lg:flex-col lg:gap-10 lg:items-center "
                >
                    <div className="w-3/4 sm:w-full lg:w-full">
                        <p className="py-3 w-2/3 sm:w-full lg:w-full">
                        {project.description}
                        </p>
                        <p className="py-3 w-2/3 sm:w-full lg:w-full">
                        {project.techStack.join(", ")}
                        </p>
                        <a
                        href={project.github}
                        target="_blank"
                        className="w-2/3 hover:text-selection underline py-5 block sm:w-full"
                        >
                        {project.github}
                        </a>
                        {project.deployed === "" ? (
                        <div>
                            {" "}
                            <p>Work in progress, not deployed yet</p>{" "}
                        </div>
                        ) : (
                        <a
                            href={project.deployed}
                            target="_blank"
                            className="w-2/3 hover:text-selection underline sm:w-full"
                        >
                            {project.deployed}
                        </a>
                        )}
                    </div>
                    <div>
                        <img src={project.image} alt={project.title} className="h-52" />
                    </div>
                </div>
            ) : null;
            })}
        </div>
        </div>
    );
};

export default Project;
