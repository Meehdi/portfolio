import Image from "next/image";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={192}
                height={192}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Senior Software Developer & DevOps
          </h1>

          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 max-w-3xl">
            Building scalable solutions with expertise in modern technologies
          </p>

          {/* Skills and Certifications */}
          <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mt-12">
            {/* Expertise */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
                Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Java", "Kotlin", "Spring Boot"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
                Certifications
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Kubernetes", "AWS", "Terraform"].map((cert) => (
                  <span
                    key={cert}
                    className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medium Articles Section */}
      <section className="container mx-auto px-6 py-20 bg-white dark:bg-slate-800/50">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Article Card 1 */}
          <article className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-100">
              Kubernetes Best Practices
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Deep dive into production-ready Kubernetes deployments and optimization strategies.
            </p>
            <a
              href="https://medium.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              Read more <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </article>

          {/* Article Card 2 */}
          <article className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-100">
              Spring Boot Microservices
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Building scalable microservices architecture with Spring Boot and Kotlin.
            </p>
            <a
              href="https://medium.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              Read more <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </article>

          {/* Article Card 3 */}
          <article className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-100">
              AWS & Terraform Guide
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Infrastructure as Code best practices using Terraform on AWS cloud platform.
            </p>
            <a
              href="https://medium.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              Read more <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </article>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">
          Get In Touch
        </h2>
        <div className="flex flex-col items-center">
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 text-center max-w-2xl">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            {/* Email */}
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Email</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center text-slate-600 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
}
