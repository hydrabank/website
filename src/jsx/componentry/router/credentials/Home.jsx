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
                        <ProjectCard.Title>About Danny</ProjectCard.Title>
                        <ProjectCard.Image>/assets/img/icon2.gif</ProjectCard.Image>
                        <ProjectCard.Size>384</ProjectCard.Size>
                        <ProjectCard.Description>
                            Danny is a student currently pursuing a career in journalism, with cybersecurity and software engineering in the sidelines. He finds passion in discovering vulnerabilities in software, along with designing and building web applications using technologies like Tailwind and React.
                        </ProjectCard.Description>

                        <ProjectCard.CredentialTheme />
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectCard.Title>What Danny does</ProjectCard.Title>
                        <ProjectCard.Image>/assets/img/credentials/whatido.png</ProjectCard.Image>
                        <ProjectCard.Size>384</ProjectCard.Size>
                        <ProjectCard.Description>
                            In terms of work, Danny creates web applications and server-based software. He also constructs and maintains infrastructure for many of his clients.
                            <br /> <br />
                            While he mostly freelances with one-time clients, he is also contracted by various businesses and other customers on a regular basis for larger projects and continued tasks from previous contracts.
                        </ProjectCard.Description>

                        <ProjectCard.CredentialTheme />
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectCard.Title>Danny's experience</ProjectCard.Title>
                        <ProjectCard.Image>/assets/img/credentials/experience.png</ProjectCard.Image>
                        <ProjectCard.Size>384</ProjectCard.Size>
                        <ProjectCard.Description>
                            Danny has experience in various technologies, frameworks, and languages. The button below will take you to a non-exhaustive history and detailed information showcasing his work and skills experience.
                        </ProjectCard.Description>

                        <ProjectCard.Link>/Experience.pdf</ProjectCard.Link>
                        <ProjectCard.ButtonText>experience and history</ProjectCard.ButtonText>

                        <ProjectCard.CredentialTheme />
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectCard.Title>Hire Danny</ProjectCard.Title>
                        <ProjectCard.Image>/assets/img/credentials/hireme.png</ProjectCard.Image>
                        <ProjectCard.Size>384</ProjectCard.Size>
                        <ProjectCard.Description>
                            If you are looking to contract Danny for a longer-term project or to maintain infrastructure, please contact him via email correspondence (<code>hello@danny.works</code>). Otherwise, if you are looking to hire him for web design and construction, use the button below to contact and hire Danny on Fiverr.
                        </ProjectCard.Description>

                        <ProjectCard.Link>https://www.fiverr.com/dannnington/create-a-website-for-you</ProjectCard.Link>
                        <ProjectCard.ButtonText>Hire Danny on Fiverr</ProjectCard.ButtonText>

                        <ProjectCard.CredentialTheme />
                    </ProjectCard>
                </div>
            </div> 
        </div>
    );
};