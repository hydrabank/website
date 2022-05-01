import ReactTypingEffect from "react-typing-effect";
import { useEffect, useRef, useState } from "react";
import { ProjectCard } from "../Card.jsx";

const BannerStrings = [
    "portfolio",
    "online store",
    "showcase",
    "image gallery",
    "blog",
    "web application",
    "API",
    "landing page",
    "website"
].sort(() => Math.random() - 0.5);

const VideoLinks = [
    "whiteboard_write.mp4",
    "laptop_coding.mp4",
    "doodle.mp4"
];

export default function Home() {
    const videoRef = useRef();
    const [playbackRate] = useState(0.75);
    const [videoFile] = useState(VideoLinks[Math.floor(Math.random() * VideoLinks.length)]);

    useEffect(() => {
        videoRef.current.playbackRate = playbackRate;
        
        if (videoFile === "whiteboard_write.mp4") {
            document.getElementById("githubButton").classList.add("md:text-black");

            const links = document.querySelectorAll('.NavLink');
            links.forEach(link => {
                link.classList.add("md:text-gray-800");
                link.classList.add("hover:md:font-bold");
                link.classList.add("hover:md:text-black");
            });
        };
    }, [playbackRate, videoFile]);
    return (
        <div className="py-6">
            <div className="PageBannerPhoto" style={{ zIndex: "0" }}>
                <div className="flex items-center">
                    <video ref={videoRef} src={`/assets/mp4/${videoFile}`} autoPlay={true} muted={true} loop={true} style={{ zIndex: "-1", position: "absolute" }} className="homeVideoPlayer hidden md:block" />
                </div>
                <div className="flex flex-col">
                    <h1 className={`PageBannerTitle ${videoFile === "whiteboard_write.mp4" ? "md:text-black" : "text-white"}`} id="PageBannerTitle" style={{ zIndex: "1" }}>
                        We can help you <span className={`${videoFile === "whiteboard_write.mp4" ? "text-blue-800" : "text-blue-200"}`}>turn your idea into reality</span>.
                    </h1>
                    <h2 className={`PageBannerText  ${videoFile === "whiteboard_write.mp4" ? "md:text-black" : "text-white"}`} id="PageBannerText" style={{ zIndex: "1" }}>
                        Build your dream {" "}
                        <b>
                            <span className={`text-cyan-500`}>
                                <ReactTypingEffect speed="100" eraseSpeed="50" typingDelay="500" eraseDelay="2500" text={BannerStrings} cursor={"_"} />
                            </span>
                        </b>
                        {" "}
                        with us.
                    </h2>
                </div>
            </div>
            {/*gap-y-6 py-12*/}
            <div className="flex flex-col md:flex-row justify-center gap-x-2 gap-y-12 md:gap-y-0 px-4 md:gap-x-6 lg:gap-x-12 my-0 md:-my-8">
                <ProjectCard>
                    <ProjectCard.Title>Web Design and Development</ProjectCard.Title>
                    <ProjectCard.Image>/assets/img/hydrabank.png</ProjectCard.Image>
                    <ProjectCard.Size>384</ProjectCard.Size>
                    <ProjectCard.Description>
                        Have an idea or pre-existing design? Show us the idea and we can help you turn it into the perfect website for you. 
                        Let us take care of all of your needs and adapt to your project or business's design language.
                        <br /><br />
                        With tonnes of experience in web design and development, we're prepared to help you turn your next project into a reality 
                        with the right tools. 

                        <b> We'll handle the website so that you can better focus on taking care of your customers. </b>
                    </ProjectCard.Description>

                    <ProjectCard.ImageDescription>Hydralink</ProjectCard.ImageDescription>

                    <ProjectCard.Link>/services</ProjectCard.Link>
                    <ProjectCard.ButtonText>Pricing & Services</ProjectCard.ButtonText>
                </ProjectCard>

                <ProjectCard>
                    <ProjectCard.Title>Backend Development</ProjectCard.Title>
                    <ProjectCard.Description>
                        Already have a beautifully-looking website, but need to add more things that just can't be done on the client side? No problem.
                        We can help you create a robust backend for your website, application, or anything else that you need. We can help you build 
                        integrated backend solutions, portable and versatile APIs, adapters for third-party services, and more. 
                    </ProjectCard.Description>
                </ProjectCard>

                <ProjectCard>
                    <ProjectCard.Title>Infrastructure Management</ProjectCard.Title>
                    <ProjectCard.Image>/assets/img/hydralink.png</ProjectCard.Image>
                    <ProjectCard.Size>384</ProjectCard.Size>
                    <ProjectCard.Description>
                        If you're looking for infrastructure management or systems administration, we're also well-equipped to handle your needs.
                        <br /><br />
                        With years of experience in developing, deploying, and maintaining large-scale <b>Linux</b>, <b>BSD</b>, and other UNIX-based
                        infrastructure, we can help you find (or provide you with) the best solutions for your needs.

                        <br/> <br />
                        <b>Coming soon.</b>
                    </ProjectCard.Description>

                    <ProjectCard.ImageDescription>Hydralink</ProjectCard.ImageDescription>
                </ProjectCard>
            </div>
            <div className="flex flex-col h-screen items-center px-6 -my-8 bg-gray-800">
                
            </div>
        </div>
    );
};