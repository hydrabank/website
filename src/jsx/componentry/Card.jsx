// Credit to Tailwind Element (https://tailwind-elements.com/docs/standard/components/cards/)

import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

// Additional credit to Shayan on dev.to for the subcomponent format
export { ProjectCard };

const Title = () => null;
Title.displayName = "Title";
const Description = () => null;
Description.displayName = "Description";
const Image = () => null;
Image.displayName = "Image";
const Link = () => null;
Link.displayName = "Link";
const ImageDescription = () => null;
ImageDescription.displayName = "ImageDescription";
const ButtonText = () => null;
ButtonText.displayName = "ButtonText";
const Size = () => null;
Size.displayName = "Size";

function ProjectCard(props) {
    var [processedChildren] = useState(typeof props.children.splice !== "function" ? [props.children] : props.children);
    var [title, setTitle] = useState("");
    var [description, setDescription] = useState("");
    var [image, setImage] = useState("");
    var [link, setLink] = useState("");
    var [size, setSize] = useState("");
    var [imageDescription, setImageDescription] = useState("");
    var [buttonText, setButtonText] = useState("");
    
        useEffect(() => {
            processedChildren.forEach(child => { 
                switch (child.type.displayName) {
                    case "Title":
                        if (title === "") setTitle(child.props.children);
                        break;

                    case "Size":
                        if (size === "") setSize(child.props.children);
                        break;
                    
                    case "Description":
                        if (description === "") setDescription(child.props.children);
                        break;
                    
                    case "Image":
                        if (image === "") setImage(child.props.children);
                        break;

                    case "Link":
                        if (link === "") setLink(child.props.children);
                        break;

                    case "ImageDescription":
                        if (imageDescription === "") setImageDescription(child.props.children);
                        break;

                    case "ButtonText":
                        if (buttonText === "") setButtonText(child.props.children);
                        break;

                    default:
                        console.log("Default");
                        break;
                };
            });
        });
        
    return (
        <div>
            <div className="flex justify-center items-start rounded-lg">
                <div className={`shadow-xl rounded-3xl bg-gray-300 max-w-sm`}>
                    <div className="p-6">
                        <h1 className={`text-blue-800 text-xl font-bold mb-2 font-BreezeHeader text-center`}>{title}</h1>
                        <p className={`text-gray-900 text-base mb-4 font-BreezeText text-center`}>
                            {description}
                        </p>
                        
                        <div className="flex flex-row justify-center text-center">
                            { link !== "" ? (
                                <a target={link.startsWith("/") ? null : "_blank"} rel="noreferrer noopener" type="button" className="font-BreezeText inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-700 active:shadow-lg transition duration-150 ease-in-out" href={link}>{buttonText} <FontAwesomeIcon className="ml-2" icon={faExternalLinkAlt} /></a>
                            ) : null }
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-center items-center">
                            { link !== "" ? (
                                <a target="_blank" rel="noreferrer noopener" href={link}>
                                    <img className="rounded-b-3xl" src={image} alt={imageDescription} width={size}/>
                                </a>
                            ) : (
                                <img className="rounded-b-3xl" src={image} alt={imageDescription} width={size}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProjectCard.Title = Title;
ProjectCard.Description = Description;
ProjectCard.Image = Image;
ProjectCard.Link = Link;
ProjectCard.ImageDescription = ImageDescription;
ProjectCard.ButtonText = ButtonText;
ProjectCard.Size = Size;