import * as React from "react"
import {Link} from "gatsby";
import * as styles from "../style/style";
import Counter from "../components/counter";

// markup
const IndexPage = () => {
    return (
        <main style={styles.pageStyles}>
            <title>Home Page</title>
            <h1 style={styles.headingStyles}>My <span style={styles.headingAccentStyles}>Portfolio</span></h1>
            <p style={styles.descriptionStyle}> This looks kind of awful but it will get better... </p>
            <Link style={styles.docLinkStyle} to={"/about"}>About me</Link>
            <Counter/>
        </main>
    )
}

export default IndexPage
