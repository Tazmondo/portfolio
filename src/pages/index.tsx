import React from "react"
import {Link} from "gatsby";
import * as styles from "../style/style";
import Counter from "../components/counter";

// markup
const IndexPage = () => {
    return (
        <main style={styles.pageStyles}>
            <title>Home Page</title>
            <h1 style={styles.headingStyles}><span style={styles.headingAccentStyles}>yo</span> 👋</h1>
            {/*<p style={styles.descriptionStyle}> {"WIP"} </p>*/}
            {/*<Link style={styles.docLinkStyle} to={"/about"}>About me</Link>*/}
            <Link style={styles.linkStyle} to={"/enotes"}>Bypass enotes.com paywall</Link>
            <br/>
            <a style={styles.docLinkStyle} href={"/pong"}> Pong </a>
            <Counter/>
            {/*<p><a style={styles.linkStyle} href={"https://github.com/Tazmondo/portfolio"}>See this project on github</a>*/}
            {/*</p>*/}
            {/*<p><a style={styles.linkStyle} href="https://github.com/Tazmondo/">Back to my github</a></p>*/}
        </main>
    )
}

export default IndexPage
