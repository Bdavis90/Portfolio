import { PROJECTS } from "../Projects.js"
import Project from "./Project"

export default function Portfolio() {
    return <section id="portfolio">
        {PROJECTS.map(proj => <Project key={proj.title} {...proj} />)}
    </section>
}