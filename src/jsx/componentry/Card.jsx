// Credit to Tailwind Element (https://tailwind-elements.com/docs/standard/components/cards/)

import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Additional credit to Shayan on dev.to for the subcomponent format
export { ProjectCard };

const Title = () => null;
const Description = () => null;
const Image = () => null;
const Link = () => null;
const ImageDescription = () => null;
const ButtonText = () => null;

function ProjectCard(props) {
    let processedChildren = typeof props.children.splice !== "function" ? [props.children] : props.children;
    let properties = {};
    
    
    (function () {
        let title = [];
        let description = [];
        let image = [];
        let link = [];
        let imageDescription = [];
        let buttonText = [];

        processedChildren.forEach(child => {
            if (child.type.name === "Title") {
                title.push(child);
            } else if (child.type.name === "Description") {
                description.push(child);
            } else if (child.type.name === "Image") {
                image.push(child);
            } else if (child.type.name === "Link") {
                link.push(child);
            } else if (child.type.name === "ImageDescription") {
                imageDescription.push(child);
            } else if (child.type.name === "ButtonText") {
                buttonText.push(child);
            };
        });

        properties.title = title.length > 0 ? title[0].props.children : null;
        properties.description = description.length > 0 ? description[0].props.children : null;
        properties.image = image.length > 0 ? image[0].props.children : "https://mdbootstrap.com/img/new/standard/nature/184.jpg";
        properties.link = link.length > 0 ? link[0].props.children : "#";
        properties.imageDescription = imageDescription.length > 0 ? imageDescription[0].props.children : null;
        properties.buttonText = buttonText.length > 0 ? buttonText[0].props.children : "View";
    })();
        
    return (
        <div>
            <div className="flex justify-center items-start rounded-lg">
                <div className="shadow-xl rounded-3xl bg-gray-700 max-w-sm">
                    <a target="_blank" rel="noreferrer noopener" href={properties.link}>
                        <img className="rounded-t-3xl" src={properties.image} alt={properties.imageDescription}/>
                    </a>
                    <div className="p-6">
                        <h1 className="text-gray-100 text-xl font-bold mb-2 font-BreezeHeader">{properties.title}</h1>
                        <p className="text-gray-200 text-base mb-4 font-BreezeText">
                            {properties.description}
                        </p>
                        <a target="_blank" rel="noreferrer noopener" type="button" className="font-BreezeText inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-700 active:shadow-lg transition duration-150 ease-in-out" href={properties.link}>{properties.buttonText} <FontAwesomeIcon className="ml-2" icon={faExternalLinkAlt} /></a>
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