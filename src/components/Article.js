import React from "react";


function minutesToRead(minutes){
    let timeInterval = 5
    let defaultPicture = "☕️"
    let emojiToAdd = ""

    if(minutes >= 30

    ){defaultPicture = "🍱"
    timeInterval = 10

    }

    for(let x = 0; x < minutes; x += timeInterval) {emojiToAdd += defaultPicture}
    return emojiToAdd

}

function Article({title, date="January 1, 1970", preview, minutes}){
    return(
        <article>
            <h3>{title}</h3>
            <small>{date} | {minutesToRead(minutes)} {minutes} minute read</small>
            <p>{preview}</p>
         </article>
    )
    
}

export default Article