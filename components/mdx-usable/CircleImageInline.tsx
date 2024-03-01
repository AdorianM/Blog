import clsx from "clsx";

// Takes as props an image and the children
const CircleImageInline = (props: any) => {

    return (
        <div className="clearfix">
            <img src={props.image} alt="An image" className="inline-image" />
            {props.children}
        </div>
    );
}

export default CircleImageInline;