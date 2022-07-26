import * as React from 'react'
import {Link} from "gatsby";
import * as styles from "../style/style";

const AboutPage = () => {
    return (
        <main>
            <title>About Me</title>
            <h1>About Me</h1>
            <Link style={styles.docLinkStyle} to={"/"}>Back home</Link>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </main>
    )
}

export default AboutPage