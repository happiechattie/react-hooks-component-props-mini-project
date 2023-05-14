import React from "react";
import Article from "./Article";

function ArticleList(props){

    const arrayElements = props.posts.map(post => {
        const {title, date, preview} = post;
        return <Article title={title} date={date} preview={preview} key={post.id}/>
    })

    return(
        <main>
            {arrayElements}
        </main>
    )
}

export default ArticleList;