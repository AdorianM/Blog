import Link from "next/link";

const HeroBanner = (props: any) => {

    const { image, title, buttonText, buttonUrl } = props;
    
    return (
        <div 
            className="hero"
            style={{
                backgroundImage: `url(${image.src})`,
                backgroundPosition: "center"
            }}
        >
            <div className="text-center">
                <h1 className="font-bold">{title}</h1>
                <div className="mt-4">
                    <Link className="button-yellow" href={buttonUrl ?? ""}>{buttonText}</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;