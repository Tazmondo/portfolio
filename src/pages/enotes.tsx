import React from 'react'
import * as styles from "../style/style";

const bypass = "javascript:(()=>{let e=document.querySelector(\".c-answer__body > :last-child\"),l=e.className,t=document.querySelectorAll(`.${l}`);for(e of t)e.style.color=\"inherit\",e.style.filter=\"none\",e.style[\"text-shadow\"]=\"0 0 black\"})();"

const EnotesPage = () => {
    return (
        <main style={styles.pageStyles}>
            <h1 style={styles.headingStyles}>Bypass enotes paywall</h1>
            <a style={bookmarkStyle} href={bypass}>Drag/Add me to your bookmarks!</a>
            <h2 style={styles.headingAccentStyles}>Instructions</h2>
            <p style={styles.paragraphStyles}>
                Drag the above link into your bookmarks (not this website itself, just that link). Once added to your
                bookmarks, just click on it when you're on an enotes page and the blur should
                disappear. You can rename it if you want.
            </p>
            <p style={styles.paragraphStyles}>
                I haven't tested this for other websites but it almost certainly won't work.
            </p>
            <p style={styles.paragraphStyles}>
                Also I don't think this will work on mobile, but feel free to try. You need to copy the link of the text
                above and then add a bookmark with that as the url.
            </p>
            <p style={styles.paragraphStyles}>
                Should work fine on laptops and PCs etc.
            </p>
            <p style={styles.paragraphStyles}>
                Let me know if there's any issues
            </p>
        </main>
    )
}

const bookmarkStyle = {
    color: "#8954A8",
    fontWeight: "bold",
    fontSize: 30,
    verticalAlign: "5%",
}

export default EnotesPage