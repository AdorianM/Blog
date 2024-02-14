const HeroBanner = (props) => {
    return (
        <div 
            className="h-96 flex items-center justify-center bg-cover"
            style={{backgroundImage: `url(${props.image})`}}
        >
            <div className="text-center">
                <h1 className="text-4xl text-yellow-400 font-bold">{props.title}</h1>
                <button className="bg-yellow-400 text-slate-600 px-4 py-2 rounded-md mt-4">{props.buttonText}</button>
            </div>
        </div>
    )
}

export default HeroBanner;