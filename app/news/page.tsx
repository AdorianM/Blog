import Container from "@/components/Container";
import News from "@/components/News";

const NewsPage = () => {
    return (
        <div className="mt-32">
            <Container>
                <h1>News</h1>
                <News />
            </Container>
        </div>
    );
}

export default NewsPage;