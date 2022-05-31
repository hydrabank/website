import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTypingEffect from "react-typing-effect";
import { ProjectCard } from "../Card";

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

export default function Services() {
    return (
        <div>
            <div className="flex gap-y-6 flex-col py-12 items-center bg-gray-900 text-center">
                <h1 className="Header">Service information</h1>
                <div className="flex flex-col md:flex-row justify-center gap-x-4 gap-y-12 md:gap-y-0 py-8 bg-gray-900" id="ProjectCards">
                    <ProjectCard>
                        <ProjectCard.Title>Web Design and Development</ProjectCard.Title>
                        <ProjectCard.Image>/assets/img/hydrabank.png</ProjectCard.Image>
                        <ProjectCard.Size>384</ProjectCard.Size>
                        <ProjectCard.ButtonText>Talk to our resident designer</ProjectCard.ButtonText>
                        <ProjectCard.Link>mailto:hello@danny.works</ProjectCard.Link>
                        <ProjectCard.Description>
                            Have an idea or pre-existing design? Show us the idea and we can help you turn it into the perfect website for you. 
                            Let us take care of all of your needs and adapt to your project or business's design language.
                            <br /><br />
                            With tonnes of experience in web design and development, we're prepared to help you turn your next project into a reality 
                            with the right tools. 

                            <b> We'll handle the website so that you can better focus on taking care of your customers. </b>
                        </ProjectCard.Description>

                        <ProjectCard.ImageDescription>Hydralink</ProjectCard.ImageDescription>
                    </ProjectCard>

                    <ProjectCard id="BackendDev">
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
                        <ProjectCard.ButtonText>Contact sales</ProjectCard.ButtonText>
                        <ProjectCard.Link>/services#contactUs</ProjectCard.Link>
                        <ProjectCard.Description>
                            If you're looking for infrastructure management or systems administration, we're also well-equipped to handle your needs.
                            <br /><br />
                            With years of experience in developing, deploying, and maintaining large-scale <b>Linux</b>, <b>BSD</b>, and other UNIX-based
                            infrastructure, we can help you find (or provide you with) the best solutions for your needs.
                            <br /><br />
                            Looking for bulk sale, managed solutions, or other custom accomodations? Contact <a href="mailto:link@hydrabank.systems" className="text-blue-600 font-bold">the Hydrabank team</a> so we can find the best custom solution for you.
                        </ProjectCard.Description>

                        <ProjectCard.ImageDescription>Hydralink</ProjectCard.ImageDescription>
                    </ProjectCard>
                </div>
                <h2 className="text-white font-bold text-3xl font-BreezeHeader px-5">Pricing table</h2>
                <h3 className="text-white text-base font-BreezeText px-12 sm:px-24 md:px-48 lg:px-96 text-center italic">Note that this is not definitive, however this pricing table is generally used as a reference for layouts and prices. <b>Sites will usually be built in Tailwind-styled React, however we can accomodate for certain other web frameworks if needed.</b></h3>
                <table className="table-auto mx-8 border border-blue-500">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-xl font-medium font-BreezeText border-2 border-blue-400">Type</th>
                            <th className="px-4 py-2 text-xl font-medium font-BreezeText border-2 border-blue-400">Special notes</th>
                            <th className="px-4 py-2 text-xl font-medium font-BreezeText border-2 border-blue-400">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 text-lg font-medium font-BreezeText border-2 border-blue-400">Basic landing page</td>
                            <td className="px-4 py-2 text-lg font-medium font-BreezeText border-2 border-blue-400">* Landing page with contact information, social medias, minimalist layout</td>
                            <td className="px-4 py-2 text-lg font-medium font-BreezeText border-2 border-blue-400">£20</td>
                        </tr>
                        <tr>

                            <td className="px-4 py-2 text-lg font-BreezeText font-medium border-2 border-blue-400">Blog</td>
                            <td className="px-4 py-2 text-lg font-BreezeText font-medium border-2 border-blue-400">* Simple blog site with about me (blog powered by WordPress or alternate solution)</td>
                            <td className="px-4 py-2 text-lg font-BreezeText font-medium border-2 border-blue-400">£35</td>
                        </tr>
                        <tr>
                             <td className="px-4 py-2 text-lg font-BreezeText font-medium border-2 border-blue-400">Portfolio-only</td>
                            <td className="px-4 py-2 text-lg font-BreezeText font-medium border-2 border-blue-400">* Minimalist portfolio with video/image support with a basic landing page</td>
                            <td className="px-4 py-2 text-lg font-BreezeText font-medium border-2 border-blue-400">£40</td>
                        </tr>
                        <tr>
                             <td className="px-4 py-2 text-lg font-BreezeText font-medium border-2 border-blue-400">Website</td>
                            <td className="px-4 py-2 text-lg font-BreezeText font-medium border-2 border-blue-400">* Minimalist portfolio with video/image support with a landing page</td>
                            <td className="px-4 py-2 text-lg font-BreezeText font-medium border-2 border-blue-400">£50</td>
                        </tr>
                        <tr>
                             <td className="px-4 py-2 text-lg font-BreezeText font-medium border-2 border-blue-400">Full portfolio</td>
                            <td className="px-4 py-2 text-lg font-BreezeText font-medium border-2 border-blue-400">* Portfolio with website - full website with an image/video portfolio, with advanced styling</td>
                            <td className="px-4 py-2 text-lg font-BreezeText font-medium border-2 border-blue-400">£70</td>
                        </tr>
                        <tr>
                             <td className="px-4 py-2 text-lg font-BreezeText font-medium border-2 border-blue-400">Full web application with backend</td>
                            <td className="px-4 py-2 text-lg font-BreezeText font-medium border-2 border-blue-400">* Depends on complexity (price example is for a web hosting administrator panel built with Next.js)</td>
                            <td className="px-4 py-2 text-lg font-BreezeText font-medium border-2 border-blue-400">£150</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-white font-medium text-2xl font-BreezeHeader px-5 pt-2 pb-4 text-center">
                    Ready to build your <b>dream</b>
                    {" "}
                    <span className="text-blue-400 md:text-blue-300 font-BreezeMono">
                        <ReactTypingEffect speed="100" eraseSpeed="50" typingDelay="500" eraseDelay="2500" text={BannerStrings} cursor={" "} />
                    </span>
                    ?
                </h2>

                <div>
                    <a type="button" target="_blank" id="contactUs" rel="noreferrer noopener" className="font-BreezeText inline-block px-6 py-2.5 bg-blue-300 text-gray-800 font-bold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-400 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-400 active:shadow-lg transition duration-150 ease-in-out mb-6" href="mailto:sales@hydrabank.systems">
                        Contact Sales
                        <FontAwesomeIcon className="ml-2" icon={faExternalLinkAlt} />
                    </a>
                </div>
            </div>
        </div>
    );
};