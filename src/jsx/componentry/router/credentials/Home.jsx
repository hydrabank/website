import { ProjectCard } from "../../Card.jsx";
export default function Resume() {
    return (
        <div>
            <div>
                <div className="PageBannerPhoto bg-gray-600 sm:bg-transparent" style={{ zIndex: "0" }}>
                    <video src="/assets/mp4/resume-watercolour.mp4" autoPlay={true} muted={true} loop={true} style={{ zIndex: "-1", position: "absolute" }} className="hidden sm:block" />
                    <h1 className="font-extrabold text-5xl py-4 font-BreezeHeader px-12 bg-clip-text text-center text-blue-300" style={{ zIndex: "1" }}>Professional</h1>
                </div>
            </div>
            <div className="flex gap-y-6 flex-col py-12 h-screen items-center px-6 bg-gray-700">
                <div className="py-6 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-gray-700 text-center">
                    <ProjectCard>
                        <ProjectCard.Title>About me</ProjectCard.Title>
                        <ProjectCard.Image>/assets/img/icon2.gif</ProjectCard.Image>
                        <ProjectCard.Size>384</ProjectCard.Size>
                        <ProjectCard.Description>
                            I am a student currently pursuing a career in journalism. However, in the sidelines, I am a full-stack developer and cybersecurity analyst. I <i>love</i> to find and help patch vulnerabilities in software.
                        </ProjectCard.Description>

                        <ProjectCard.CredentialTheme />
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectCard.Title>What I do</ProjectCard.Title>
                        <ProjectCard.Image>/assets/img/credentials/whatido.png</ProjectCard.Image>
                        <ProjectCard.Size>384</ProjectCard.Size>
                        <ProjectCard.Description>
                            In terms of what I do for work, I create web applications and server-based software. I also maintain and build infrastructure for many of my clients.
                            <br /> <br />
                            While I mostly work freelance on smaller projects with my clients, I am also contracted by various businesses and other customers on a regular basis for larger projects and tasks related to previous work.
                        </ProjectCard.Description>

                        <ProjectCard.CredentialTheme />
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectCard.Title>My experience</ProjectCard.Title>
                        <ProjectCard.Image>/assets/img/credentials/experience.png</ProjectCard.Image>
                        <ProjectCard.Size>384</ProjectCard.Size>
                        <ProjectCard.Description>
                            I have experience in various technologies, frameworks, and languages. The button below will take you to a non-exhaustive history and detailed information regarding my work and skills experience.
                        </ProjectCard.Description>

                        <ProjectCard.Link>/Experience.pdf</ProjectCard.Link>
                        <ProjectCard.ButtonText>My experience and history</ProjectCard.ButtonText>

                        <ProjectCard.CredentialTheme />
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectCard.Title>Hire me</ProjectCard.Title>
                        <ProjectCard.Image>/assets/img/credentials/hireme.png</ProjectCard.Image>
                        <ProjectCard.Size>384</ProjectCard.Size>
                        <ProjectCard.Description>
                            If you'd like to contract me for a longer-term project or to maintain infrastructure, please contact me via my email address (hello@danny.works). Otherwise, if you'd like me to design your website, please message me on Fiverr (the gig can be accessed with the button below).
                        </ProjectCard.Description>

                        <ProjectCard.Link>https://www.fiverr.com/dannnington/create-a-website-for-you</ProjectCard.Link>
                        <ProjectCard.ButtonText>Hire me on Fiverr</ProjectCard.ButtonText>

                        <ProjectCard.CredentialTheme />
                    </ProjectCard>
                </div>
            </div> 
        </div>
    );
};