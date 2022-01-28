import { ProjectCard } from "../Card";
export default function Projects() {
    return (
        <div className="flex gap-y-6 flex-col py-12 h-screen items-center bg-gray-900 text-center">
            <h1 className="Header">Projects</h1>
            <h2 className="Tagline">A few projects and small software utilities of mine. Some are big, some are small.</h2>
            <div className="py-6 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <ProjectCard>
                    <ProjectCard.Title>Hydrabank / Hydralink</ProjectCard.Title>

                    <ProjectCard.Description>
                        Systems administration, high-quality web design, and development. You can hire me for a project here!
                    </ProjectCard.Description>

                    <ProjectCard.Link>https://dannington.systems</ProjectCard.Link>

                    <ProjectCard.Image>/assets/img/icon2.gif</ProjectCard.Image>

                    <ProjectCard.ImageDescription>DanningtonSystems logo</ProjectCard.ImageDescription>
                    
                    <ProjectCard.ButtonText>Website</ProjectCard.ButtonText>
                </ProjectCard>
                
                <ProjectCard>
                    <ProjectCard.Title>Songfish</ProjectCard.Title>

                    <ProjectCard.Description>
                        An invite-only Discord music bot.
                    </ProjectCard.Description>

                    <ProjectCard.Link>https://github.com/hydrabank/songfish</ProjectCard.Link>

                    <ProjectCard.Image>/assets/img/projects/songfish.jpg</ProjectCard.Image>

                    <ProjectCard.ImageDescription>Songfish</ProjectCard.ImageDescription>
                    
                    <ProjectCard.ButtonText>Learn More</ProjectCard.ButtonText>
                </ProjectCard>

                <ProjectCard>
                    <ProjectCard.Title>Reactbreeze</ProjectCard.Title>

                    <ProjectCard.Description>
                        React is a breeze. Why not add more power to it with Tailwind?
                    </ProjectCard.Description>

                    <ProjectCard.Link>https://github.com/hydrabank/cra-template-reactbreeze</ProjectCard.Link>

                    <ProjectCard.Image>/assets/img/projects/reactbreeze.jpg</ProjectCard.Image>

                    <ProjectCard.ImageDescription>A breeze in the wind.</ProjectCard.ImageDescription>
                    
                    <ProjectCard.ButtonText>Repository</ProjectCard.ButtonText>
                </ProjectCard>

                <ProjectCard>
                    <ProjectCard.Title>RavenGuard</ProjectCard.Title>
                    
                    <ProjectCard.Description>
                        Protect your Minecraft servers and websites from the worst of attacks. <b>Coming soon.</b>
                    </ProjectCard.Description>

                    <ProjectCard.Link>https://ravenguard.space</ProjectCard.Link>

                    <ProjectCard.Image>/assets/img/projects/ravenguard.png</ProjectCard.Image>

                    <ProjectCard.ImageDescription>RavenGuard</ProjectCard.ImageDescription>

                    <ProjectCard.ButtonText>Website</ProjectCard.ButtonText>
                </ProjectCard>

                <ProjectCard>
                    <ProjectCard.Title>Nexus</ProjectCard.Title>

                    <ProjectCard.Description>
                        A website-blog-forum solution thing. It's kind of like WordPress, but powered by Node instead of PHP, I suppose? The frontend is open source at the moment, with the backend coming later.
                    </ProjectCard.Description>

                    <ProjectCard.Link>https://github.com/Dannnington/Fission</ProjectCard.Link>

                    <ProjectCard.Image>/assets/img/projects/fission.png</ProjectCard.Image>

                    <ProjectCard.ImageDescription>A screenshot of Fission's UI</ProjectCard.ImageDescription>

                    <ProjectCard.ButtonText>Fission Repository</ProjectCard.ButtonText>
                </ProjectCard>
            </div>
        </div>
    );
};