import { faArrowAltCircleDown, faClipboardCheck, faClock, faExternalLinkAlt, faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTypingEffect from "react-typing-effect";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from "@mui/material";

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

export default function Home() {
    return (
        <div className="py-6">
            <div className="PageBannerPhoto" style={{ zIndex: "0" }}>
                <div className="flex items-center">
                        <img alt="background" src="/assets/img/startup-photo.jpg" className="absolute blur-sm hidden md:block brightness-50" style={{ zIndex: "-1" }} />
                </div>
                <div className="flex flex-col">
                    <Fade delay="100" triggerOnce>
                        <h1 className={`PageBannerTitle text-white`} id="PageBannerTitle" style={{ zIndex: "1" }}>
                            We can help you turn your idea into a <span className={`text-green-400 md:text-green-300`}>reality</span>.
                        </h1>
                        <h2 className={`PageBannerText text-white`} id="PageBannerText" style={{ zIndex: "1" }}>
                            Design and build your dream {" "}
                            <b>
                                <span className="text-blue-400 md:text-blue-300">
                                    <ReactTypingEffect speed="100" eraseSpeed="50" typingDelay="500" eraseDelay="2500" text={BannerStrings} cursor={"_"} />
                                </span>
                            </b>
                            {" "}
                            with us.
                        </h2>
                        <div className="pt-4 px-12 md:px-36 bg-clip-text text-center md:text-left hidden lg:inline-block font-BreezeHeader">
                            <a href="/services" className="font-BreezeText inline-block px-4 py-2 bg-blue-300 text-gray-800 font-bold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-400 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-400 active:shadow-lg transition duration-150 ease-in-out">
                                Our services
                                <FontAwesomeIcon className="ml-2" icon={faExternalLinkAlt} />
                            </a>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <FontAwesomeIcon icon={faArrowAltCircleDown} size="3x" className="my-4 hidden lg:inline-block invisible" />
            </div>
            <div className="flex flex-col h-screen items-center px-6 py-8 bg-gray-900">
                <h1 className="Header pb-8">Why Hydrabank?</h1>
                <div className="flex flex-col gap-x-32 gap-y-12">
                        <div className="flex flex-row gap-x-12 justify-center">
                            <FontAwesomeIcon icon={faHandshakeAngle} size="6x" />
                            <div className="flex flex-col gap-y-2">
                                <h1 className="font-BreezeHeader text-2xl font-bold text-left">Quality. <b className="text-blue-300">Assured.</b></h1>
                                <p className="font-BreezeText text-xl font-medium text-left ">We will <b>always</b> check in with you to ensure that you like what we've made. Don't like something? Let us<br/> know and we'll adjust.</p>
                            </div>
                        </div>

                        <hr />
                        
                        <div className="flex flex-row gap-x-12 justify-center">
                            <div className="flex flex-col gap-y-2">
                                <h1 className="font-BreezeHeader text-2xl font-bold text-right">Name a price. We've got you <b className="text-blue-300">covered</b>.</h1>
                                <p className="font-BreezeText text-xl font-medium text-right ">With flexible yet affordable pricing, we can adjust based on your budget. <b>All with the same guaranteed <br/>quality.</b></p>
                            </div>
                            <FontAwesomeIcon icon={faClipboardCheck} size="6x" />
                        </div>
                        
                        <hr />
                        
                        <div className="flex flex-row gap-x-12 justify-center">
                            <FontAwesomeIcon icon={faClock} size="6x" />
                            <div className="flex flex-col gap-y-2 flex-wrap">
                                <h1 className="font-BreezeHeader font-bold text-2xl text-left">We can do it. <b className="text-blue-300">Fast</b>.</h1>
                                <p className="font-BreezeText text-xl font-medium text-left">
                                    Depending on the size of your request, we can take anywhere 
                                    between a <b className="text-blue-200">few hours</b> for the smallest requests to<br/>
                                    <Tooltip title={<span className="font-BreezeText">For longer requests, we may take longer in order to ensure that our work fits your standards.</span>}>
                                        <span className="decoration-dotted underline text-blue-200">
                                            <b>a week</b> for advanced requests
                                        </span>
                                    </Tooltip>
                                    .</p>
                            </div>
                        </div>
                </div>

                <div className="flex flex-col py-20 text-center">
                    <h1 className="text-white font-bold text-3xl font-BreezeHeader px-5">So, what are you waiting for?</h1>
                    <h2 className="text-white font-medium text-2xl font-BreezeHeader px-5 pt-2 pb-4 text-center">
                        Let us help you build your <b>dream</b>
                        {" "}
                        <span className="text-blue-400 md:text-blue-300 font-BreezeMono">
                            <ReactTypingEffect speed="100" eraseSpeed="50" typingDelay="500" eraseDelay="2500" text={BannerStrings} cursor={" "} />
                        </span>
                        {" "} 
                        for your project.
                    </h2>

                    <div>
                        <a type="button" className="font-BreezeText inline-block px-6 py-2.5 bg-blue-300 text-gray-800 font-bold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-400 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-400 active:shadow-lg transition duration-150 ease-in-out" href="/services">
                            Pricing & Information
                            <FontAwesomeIcon className="ml-2" icon={faExternalLinkAlt} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};