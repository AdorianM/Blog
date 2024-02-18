const Container = (props: any) => {
    return (
        <div className="container mx-auto px-4 pb-8">
            {props.children}
        </div>
    );
}

export default Container