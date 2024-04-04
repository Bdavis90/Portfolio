export default function Project({ title, description, images, link, source }) {
    return <>
        <h3 className="title"><u>{title}</u></h3>
        <div className="images">
            {images.map((image, idx) => <img src={image} key={idx} />)}
        </div>
        <p className="description">{description}</p>
        {link && <a className="button" href={link}>Project</a>}
        {/* {source && <a className="button" href={source}>Code</a>} */}
        <hr />
    </>
}