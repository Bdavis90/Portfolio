import Portrait from "../assets/Me.jpg"
export default function Header() {

    return (
        <header id="header">
            <img src={Portrait} alt="Portrait" />
            <ul className="quick-links">
                <a href="mailto:brandon.davis1015@gmail.com"><i class="fa fa-envelope"></i></a>
                <a href="https://github.com/Bdavis90"><i className="fa fa-github" /></a>
                <a href="https://www.linkedin.com/in/brandon-davis-6a5322194/"><i class="fa fa-linkedin"></i></a>
            </ul>
        </header>
    )
}       