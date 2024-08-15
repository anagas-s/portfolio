import devconnect from "public/images/devconnect-1.png";
import devconnect2 from "public/images/devconnect-2.png";
import gptflix1 from "public/images/gptflix-1.png";
import gptflix2 from "public/images/gptflix-2.png";
import gptflix3 from "public/images/gptflix-3.png";

export const products = [
  {
    href: "https://dev-connect-nextjs.vercel.app/",
    title: "Dev Connect",
    description:
      "DevConnect is a social media for developers built with Next.js 14, featuring GPT-powered functionality for asking and answering questions. Users can add tags to questions, receive AI-generated suggestions, and interact with a community of developers.",
    thumbnail: devconnect,
    images: [devconnect, devconnect2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "devconnect",
    content: (
      <div>
        <p>
          <ul>
            <li>
              Ask Questions: Post questions and receive answers from the
              community.
            </li>
            <li>
              Answer Questions: Provide solutions and insights to other users
              questions.
            </li>
            <li>
              Tags: Add relevant tags to questions for better categorization and
              searchability.
            </li>
            <li>
              GPT Integration: Get AI-powered suggestions and answers to enhance
              the question-answering process.
            </li>
          </ul>
        </p>
      </div>
    ),
  },
  {
    href: "https://gptflix-movies.netlify.app/",
    title: "GPTFLIX",
    description:
      "GPTFlix is a Netflix clone web application with integrated GPT functionality. It allows users to search for movies and receive recommendations or information related to movies, such as top grossers. The application leverages the TMDB API to fetch movie data and display the results in an intuitive and user-friendly interface.",
    thumbnail: gptflix1,
    images: [gptflix2, gptflix3],
    stack: ["React", "Redux", "Tailwindcss"],
    slug: "gptflix",
    content: (
      <div>
        <p>
          <ul>
            <li>
              Search Movies: Search for movies by title and view detailed
              information about them.
            </li>
            <li>
              GPT Functionality: Ask questions or get recommendations related to
              movies using GPT.
            </li>
            <li>
              TMDB Integration: Fetch movie details, trailers, and more from the
              TMDB API.
            </li>
          </ul>
        </p>{" "}
      </div>
    ),
  },
  // {
  //   href: "https://gomoonbeam.com",
  //   title: "Moonbeam",
  //   description:
  //     "Never write from scratch again with Moonbeam, your AI first writing tool",
  //   thumbnail: sidefolioMoonbeam,
  //   images: [sidefolioMoonbeam, sidefolioMoonbeam2],
  //   stack: ["Nextjs", "Tailwindcss"],
  //   slug: "moonbeam",
  //   content: (
  //     <div>
  //       <p>
  //         Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
  //         dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
  //         cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
  //         cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
  //         non cupidatat duis esse velit ut culpa et.{" "}
  //       </p>
  //       <p>
  //         Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
  //         Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
  //         sit aute fugiat incididunt nostrud consequat proident fugiat id.
  //         Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
  //         reprehenderit. Cillum Lorem veniam eu magna exercitation.
  //         Reprehenderit adipisicing minim et officia enim et veniam Lorem
  //         excepteur velit adipisicing et Lorem magna.
  //       </p>{" "}
  //     </div>
  //   ),
  // },
];
