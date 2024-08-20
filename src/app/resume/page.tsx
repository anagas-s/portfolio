import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <div className="h-[495px]">
        <span className="text-4xl">💼</span>
        <Heading className="font-black">Resume</Heading>
        <Paragraph className="max-w-xl mt-4">
          I&apos;m a full-stack developer that loves{" "}
          <Highlight>building products</Highlight> and web apps that can impact
          millions of lives.
        </Paragraph>
        <Paragraph className="max-w-xl mt-4">
          Click on the button to view my resume
        </Paragraph>
        <button className="mt-10 p-3 bg-black text-white border rounded-3xl">
          <Link
            href="https://drive.google.com/file/d/1Q3hgOrhYKiSNkblgYewj4k4DXrxqdYKl/view?usp=drive_link"
            target="_blank"
          >
            {" "}
            Resume
          </Link>
        </button>
      </div>
    </Container>
  );
}
