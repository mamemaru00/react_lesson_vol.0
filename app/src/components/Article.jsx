import { useState } from "react";
import { Content, Title } from "./index";
import PublishButton from "./PublishButton";

//default import(名前なしimport)
const Article = (props) => {
    const [isPublished, setIsPublished] = useState(false)
    // console.log(isPublished)
    const publishArticle = () => {
        setIsPublished(true)
    }
    return (
        <div>
            <Title title={props.title} />
            <Content content={props.content} />
            <PublishButton isPublished={isPublished} onClick={publishArticle} />
        </div>
    );
};

export default Article;