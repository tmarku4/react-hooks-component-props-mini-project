import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    let blogData=posts.map(post => {
        return <Article title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
    })
    return(
        <main>
            {blogData}
        </main>
    )
    
}

export default ArticleList