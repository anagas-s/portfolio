import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Anagas",
  description:
    "Anagas is a developer, student. He is a final year undergraduate student.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <div className="h-[495px]">
        <span className="text-4xl">📝</span>
        <Heading className="font-black pb-4">I write about technology</Heading>
        <Paragraph className="pb-10">
          Ever since <Highlight> I was a kid</Highlight>, I&apos;ve been
          fascinated by technology.
        </Paragraph>
        {/* <Blogs blogs={data} /> */}
      </div>
    </Container>
  );
}
