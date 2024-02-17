const HeroBanner = (props: any) => {

    return (
        <div 
            className="hero"
            style={{backgroundImage: `url(${props.image})`}}
        >
            <div className="text-center">
                <h1 className="font-bold">{props.title}</h1>
                <button className="button-yellow">{props.buttonText}</button>
            </div>
        </div>
    )
}

export default HeroBanner;