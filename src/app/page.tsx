"use client";
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const skills = [
    { name: "React.js", color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", color: "from-gray-400 to-gray-600" },
    { name: "Node.js", color: "from-green-400 to-emerald-500" },
    { name: "MongoDB", color: "from-green-500 to-green-700" },
    { name: "PostgreSQL", color: "from-blue-400 to-blue-600" },
    { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
    { name: "TypeScript", color: "from-blue-500 to-blue-700" },
    { name: "Docker", color: "from-blue-400 to-cyan-500" },
    { name: "Kubernetes", color: "from-blue-600 to-purple-600" },
    { name: "GitHub", color: "from-blue-600 to-purple-600" },
    { name: "AWS", color: "from-blue-600 to-purple-600" },
    { name: "Nginx", color: "from-blue-600 to-purple-600" },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack marketplace with real-time inventory, payment integration, and admin dashboard",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      demo: "https://www.theabhipatel.com/",
      code: "https://github.com/theabhipatel",
      tags: ["Next.js", "Node.js", "MongoDB"],
    },
    {
      title: "DevOps Pipeline Automator",
      description:
        "CI/CD automation tool with Kubernetes orchestration and multi-cloud deployment support",
      image:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
      demo: "https://www.theabhipatel.com/",
      code: "https://github.com/theabhipatel",
      tags: ["Docker", "Kubernetes", "React"],
    },
    {
      title: "Real-Time Analytics Dashboard",
      description:
        "Live data visualization platform with WebSocket integration and interactive charts",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      demo: "https://www.theabhipatel.com/",
      code: "https://github.com/theabhipatel",
      tags: ["TypeScript", "PostgreSQL", "Node.js"],
    },
  ];

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-950/90 backdrop-blur-lg border-b border-purple-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
          >
            TheAbhiPatel
          </div>

          <div className="hidden md:flex gap-8">
            {["Home", "Skills", "Projects", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-purple-500/20">
            {["Home", "Skills", "Projects", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-6 py-3 text-gray-300 hover:text-purple-400 hover:bg-gray-800/50 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

          {/* Floating Icons */}
          <div className="absolute top-1/4 left-1/4 opacity-20 animate-float">
            <svg
              className="w-16 h-16 text-blue-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
            </svg>
          </div>
          <div className="absolute top-1/3 right-1/4 opacity-20 animate-float delay-300">
            <svg
              className="w-20 h-20 text-purple-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.09-1.616-2.113-5.204-6.218-8.513-6.218h-.927c-.233 0-.653.147-.653.147s-.420-.147-.653-.147h-.927c-3.309 0-6.897 4.105-8.515 6.218C.295 9.37-.04 9.341-.353 9.341c-1.282 0-1.889.459-1.954.51L-2.358 9.915a.155.155 0 00-.022.132c.008.032.162.677.995 1.334 0 0 .086.075.197.168 0 0 .117 2.715 0 2.715v3.951c0 .102.083.185.185.185h13.917c.102 0 .185-.083.185-.185v-3.951s-.117-2.715-.117-2.715c.111-.093.197-.168.197-.168.833-.657.987-1.302.995-1.334a.154.154 0 00-.022-.132zM4.033 3.389h2.119a.186.186 0 00.186-.186V1.316a.186.186 0 00-.186-.186H4.033a.186.186 0 00-.186.186v1.887c0 .102.084.186.186.186m-2.93 0h2.12a.186.186 0 00.184-.186V1.316a.185.185 0 00-.185-.186h-2.12a.185.185 0 00-.184.186v1.887c0 .102.083.186.185.186m2.93 2.716h2.119a.186.186 0 00.186-.185V4.032a.186.186 0 00-.186-.186H4.033a.186.186 0 00-.186.186v1.887c0 .102.084.186.186.186m-2.93 0h2.12a.186.186 0 00.184-.185V4.032a.185.185 0 00-.185-.186h-2.12a.185.185 0 00-.184.186v1.887c0 .102.083.186.185.186m13.917 2.716h2.119a.186.186 0 00.186-.185V6.29a.186.186 0 00-.186-.185h-2.119a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 left-1/3 opacity-20 animate-float delay-500">
            <svg
              className="w-14 h-14 text-cyan-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.61 0H3.39C2.189 0 1.23.96 1.23 2.16v19.68c0 1.2.959 2.16 2.16 2.16h17.22c1.2 0 2.16-.96 2.16-2.16V2.16C22.77.96 21.811 0 20.61 0zm-9.217 20.1c-3.37 0-6.103-2.733-6.103-6.103S7.623 7.894 11.393 7.894s6.102 2.733 6.102 6.103-2.732 6.103-6.102 6.103z" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8 animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Abhishek Patel
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-300">
              Full Stack & DevOps Engineer
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
              Building scalable apps & automating deployments
            </p>
          </div>

          <button
            onClick={() => scrollToSection("projects")}
            className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 cursor-pointer"
          >
            <span className="relative z-10">View My Work</span>
            <ExternalLink className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-blue-950/10 to-gray-950"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Tools and technologies I work with
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                ></div>
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-semibold text-gray-100 group-hover:text-purple-300 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Some of my recent work
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-100 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      target="theabhipatel"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-sm font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.code}
                      target="theabhipatel_github"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 text-sm font-semibold"
                    >
                      <Code2 className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Get to know more about who I am
          </p>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full  flex items-center justify-center overflow-hidden">
                  <Image
                    src={
                      "https://avatars.githubusercontent.com/u/127403805?s=400&u=84a0ef6415d4cab2cd26959475ff1ce20db8aa7a&v=4"
                    }
                    alt="TheAbhiPatel"
                    width={"550"}
                    height={"500"}
                  />
                </div>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm{" "}
                <span className="text-purple-400 font-semibold">
                  Abhishek Patel
                </span>
                , a passionate Full Stack & DevOps Engineer focused on building
                performant web applications, automating deployments, and
                delivering end-to-end scalable solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                With expertise spanning from modern frontend frameworks to cloud
                infrastructure, I bridge the gap between development and
                operations to create seamless, efficient, and robust systems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, and sharing knowledge with
                the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Let's Connect
            </span>{" "}
            🚀
          </h2>
          <p className="text-gray-400 mb-12 text-lg">
            Feel free to reach out for collaborations or just a friendly hello
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com/theabhipatel"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-16 h-16 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center hover:border-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30"
            >
              <Github className="w-7 h-7 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/theabhipatel"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-16 h-16 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center hover:border-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30"
            >
              <Linkedin className="w-7 h-7 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
            </a>
            <a
              href="mailto:theabhipatel.co@gmail.com"
              className="group relative w-16 h-16 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center hover:border-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30"
            >
              <Mail className="w-7 h-7 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
            </a>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
            <p className="text-gray-300 text-lg mb-4">
              💼 Open to freelance opportunities and full-time positions
            </p>
            <p className="text-gray-400">
              📧{" "}
              <a
                href="mailto:theabhipatel.co@gmail.com"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                theabhipatel.co@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025{" "}
            <Link href={"https://www.theabhipatel.com/"} target="theabhipatel">
              <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent cursor-pointer">
                TheAbhiPatel
              </span>
              .
            </Link>
          </p>
        </div>
      </footer>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
