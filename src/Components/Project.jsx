export default function Project({
  title,
  description,
  images,
  link,
  source,
  video,
  downloadable,
}) {
  return (
    <>
      <h3 className="title">
        <u>{title}</u>
      </h3>
      {video ? (
        <iframe
          width="560"
          height="315"
          src={video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ) : null}
      <div className="images">
        {images.map((image, idx) => (
          <img src={image} key={idx} />
        ))}
      </div>
      <p className="description">{description}</p>
      {link && (
        <a className="button" href={link}>
          Project
        </a>
      )}
      {source && (
        <a className="button" href={source} download={downloadable}>
          Code
        </a>
      )}{" "}
      {source && downloadable && <i class="fa fa-download"></i>}
      <hr />
    </>
  );
}
