import React from "react"
import { Link } from "gatsby"

export default function About() {
    return (
        <div id="about"
            style={{
            }}>
            <h1 >About me.</h1>
            < p > Welcome to your new Gatsby site.</p>
            < p > Now go build something great.</p>
            < div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            </div>

            < Link to="/page-2/" > Go to page 2 </Link> <br />
            <Link to="/using-typescript/" > Go to "Using TypeScript" </Link>
        </div>
    )

}