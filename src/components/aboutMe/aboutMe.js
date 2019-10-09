import React from "react";

export default function AboutMe() {
  return (
    <div className="about-container">
      <header>
        <img src="src\components\navBar\navImage\FB_IMG_1555640228382.jpg" />
        <h1>About Me</h1>
      </header>
      <h2>Brandon Davis</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <ul>
        <li>
          <a>github</a>
        </li>
        <li>
          <a>email</a>
        </li>
      </ul>
    </div>
  );
}
