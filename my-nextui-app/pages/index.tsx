import { Link, Button, Card, CardHeader, CardBody, Image, Divider, Chip, Avatar } from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

// Add these to your icons.tsx file if they don't exist
const LinkedInIcon = ({ size = 24, width, height, ...props }) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
    />
  </svg>
);

const MailIcon = ({ size = 24, width, height, ...props }) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
    />
  </svg>
);

const projects = [
  {
    title: "Project One",
    description: "A full-stack application built with Next.js and TypeScript",
    image: "/placeholder-project1.jpg",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    link: "https://project1.com"
  },
  {
    title: "Project Two",
    description: "Mobile-first web application with real-time features",
    image: "/placeholder-project2.jpg",
    tags: ["React", "Firebase", "Material-UI"],
    link: "https://project2.com"
  },
];

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex items-center gap-8">
          <Avatar 
            className="w-32 h-32"
            src="/placeholder-avatar.jpg"
            size="lg"
          />
          <div className="inline-block max-w-xl">
            <h1 className={title()}>John Doe</h1>
            <h2 className={title({ color: "violet" })}>Full Stack Developer</h2>
            <p className={subtitle({ class: "mt-4" })}>
              Passionate about building beautiful and functional web applications
              with modern technologies.
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 mt-4">
          <Button
            as={Link}
            href={siteConfig.links.github}
            variant="ghost"
            startContent={<GithubIcon className="text-default-600" />}
          >
            GitHub
          </Button>
          <Button
            as={Link}
            href={siteConfig.links.linkedin}
            variant="ghost"
            startContent={<LinkedInIcon className="text-default-600" />}
          >
            LinkedIn
          </Button>
          <Button
            as={Link}
            href={`mailto:${siteConfig.email}`}
            variant="ghost"
            startContent={<MailIcon className="text-default-600" />}
          >
            Contact
          </Button>
        </div>
      </section>

      <Divider className="my-8" />

      {/* Projects Section */}
      <section className="py-8">
        <h2 className={title({ class: "mb-8 text-center" })}>Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex gap-3">
                <Image
                  alt={project.title}
                  height={40}
                  radius="sm"
                  src={project.image}
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-lg font-bold">{project.title}</p>
                  <div className="flex gap-2">
                    {project.tags.map((tag, i) => (
                      <Chip key={i} size="sm" variant="flat">
                        {tag}
                      </Chip>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <p>{project.description}</p>
                <Button
                  as={Link}
                  href={project.link}
                  color="primary"
                  variant="ghost"
                  size="sm"
                  className="mt-4"
                >
                  View Project
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <Divider className="my-8" />

      {/* Contact Section */}
      <section className="py-8 text-center">
        <h2 className={title({ class: "mb-4" })}>Let's Connect</h2>
        <p className={subtitle({ class: "mb-6" })}>
          I'm always open to discussing new projects and opportunities.
        </p>
        <Button
          as={Link}
          href={`mailto:${siteConfig.email}`}
          color="primary"
          variant="shadow"
          size="lg"
        >
          Get in Touch
        </Button>
      </section>
    </DefaultLayout>
  );
}