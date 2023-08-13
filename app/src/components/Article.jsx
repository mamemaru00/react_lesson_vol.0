import { Content, Title } from "./index";

//default import(名前なしimport)
const Article = (props) => {
    return (
        <div>
            <Title title={props.title} />
            <Content content={props.content} />
        </div>
    );
};

export default Article;