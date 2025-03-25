import devconnect from "public/images/devconnect-1.png";
import devconnect2 from "public/images/devconnect-2.png";
import gptflix1 from "public/images/gptflix-1.png";
import gptflix2 from "public/images/gptflix-2.png";
import gptflix3 from "public/images/gptflix-3.png";
import careersensei1 from "public/images/careersensei-1.png";
import careersensei2 from "public/images/careersensei-2.png";
import careersensei3 from "public/images/careersensei-3.png";
import careersensei4 from "public/images/careersensei-4.png";

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
  {
    href: "https://careersensei-ai.vercel.app/",
    title: "Career Sensei",
    description:
      "CareerSensei is an AI-powered career coaching platform that provides AI-driven resume building, mock interview preparation, industry insights, and personalized career guidance to help users land their dream jobs. ",
    thumbnail: careersensei1,
    images: [careersensei2, careersensei3, careersensei4],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "careersensei",
    content: (
      <div>
        <p>
          <ul>
            <li>
              AI Resume Builder – Generates ATS-optimized resumes with
              AI-powered content enhancement.
            </li>
            <li>
              AI Cover Letter Generator – Analyzes job descriptions and creates
              tailored cover letters automatically.
            </li>
            <li>
              Mock Interview Preparation – Provides role-specific interview
              questions and tracks performance over time.
            </li>
            <li>
              Personalized Industry Insights – Displays real-time job market
              trends, salary insights, and in-demand skills for your industry.
            </li>
          </ul>
        </p>{" "}
      </div>
    ),
  },
];
