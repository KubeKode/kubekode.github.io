import { useState } from "react";

const courses = [
  {
    title: "DevOps for Beginners",
    description: "Complete DevOps course covering CI/CD, Linux, networking, and all fundamentals you need to start your DevOps journey.",
    playlistId: "PL5jQH1Kzu9zqSnImM61sx09CUq85-BFPk",
    videoId: "gtTjmMcurFk",
    level: "Beginner",
    levelColor: "text-green-400",
    category: "DevOps",
  },
  {
    title: "Docker Complete Course",
    description: "Zero to hero Docker series covering containers, images, Dockerfile, Docker Compose, networking, and production deployments.",
    playlistId: "PL5jQH1Kzu9zrku-uqq-qT1hMzLsYgzW5N",
    videoId: "2rvpWc88Wkw",
    level: "Beginner",
    levelColor: "text-green-400",
    category: "DevOps",
  },
  {
    title: "Kubernetes Tutorials",
    description: "Learn Kubernetes from scratch — Pods, Deployments, Services, Ingress, ConfigMaps, Secrets, and cluster management.",
    playlistId: "PL5jQH1Kzu9zrFjBVIkJFWA2W3cQUUnLWR",
    videoId: "aiMl6hM538w",
    level: "Intermediate",
    levelColor: "text-yellow-400",
    category: "DevOps",
  },
  {
    title: "Terraform Tutorials",
    description: "Infrastructure as Code with Terraform. Provision AWS, GCP resources, manage state, modules, and workspaces.",
    playlistId: "PL5jQH1Kzu9zpyAQe_RY11QPaPcmZW0dAe",
    videoId: "j0anptlwW7A",
    level: "Intermediate",
    levelColor: "text-yellow-400",
    category: "Cloud",
  },
  {
    title: "GitHub Actions Series",
    description: "Automate CI/CD pipelines with GitHub Actions. Build, test, and deploy your applications with custom workflows.",
    playlistId: "PL5jQH1Kzu9zqraQoXA8rYc3WPB_gnwwJp",
    videoId: "MNtIdC4AEQo",
    level: "Intermediate",
    levelColor: "text-yellow-400",
    category: "DevOps",
  },
  {
    title: "DevOps Complete Projects",
    description: "Real-world DevOps projects end-to-end. Deploy full applications with CI/CD, Docker, Kubernetes, and cloud services.",
    playlistId: "PL5jQH1Kzu9zpH-T9-z-cdrUEIsvLLRzUY",
    videoId: "Vk6Dvv-rhcM",
    level: "Advanced",
    levelColor: "text-red-400",
    category: "DevOps",
  },
  {
    title: "AWS Services Tutorials",
    description: "Learn AWS services — EC2, S3, Lambda, IAM, VPC, and more. Hands-on tutorials for cloud practitioners.",
    playlistId: "PL5jQH1Kzu9zqnIFrfYPdaK4WiN5o9aduY",
    videoId: "Jhoc4dcDRCo",
    level: "Beginner",
    levelColor: "text-green-400",
    category: "Cloud",
  },
  {
    title: "Google Cloud Tutorials",
    description: "GCP fundamentals — Compute Engine, Cloud Functions, GKE, Cloud Storage, and IAM with practical examples.",
    playlistId: "PL5jQH1Kzu9zojue21S_z5ZdvoN0NfyLmn",
    videoId: "fBqviV-N-Gw",
    level: "Beginner",
    levelColor: "text-green-400",
    category: "Cloud",
  },
  {
    title: "Depth in Node.js",
    description: "Deep dive into Node.js internals — event loop, streams, clustering, performance optimization, and advanced patterns.",
    playlistId: "PL5jQH1Kzu9zr5FLZh_dF1RSilTNtuELCF",
    videoId: "ahNLl7NyFR8",
    level: "Advanced",
    levelColor: "text-red-400",
    category: "Development",
  },
  {
    title: "Node.js Tutorials",
    description: "Backend development with Node.js — Express, REST APIs, middleware, authentication, and database integration.",
    playlistId: "PL5jQH1Kzu9zpWbmrYsT_RoW5aPo7j0voZ",
    videoId: "Q4FczQA34yE",
    level: "Beginner",
    levelColor: "text-green-400",
    category: "Development",
  },
  {
    title: "React Tutorials | Frontend",
    description: "Frontend web development with React — components, hooks, state management, routing, and building complete applications.",
    playlistId: "PL5jQH1Kzu9zr310clAMRJaYHkFX19-8ba",
    videoId: "WdQtepxpx8k",
    level: "Beginner",
    levelColor: "text-green-400",
    category: "Development",
  },
  {
    title: "TypeScript Complete Series",
    description: "Full TypeScript course — types, interfaces, generics, decorators, and integrating TypeScript into real projects.",
    playlistId: "PL5jQH1Kzu9zrT1qwEziqrzBm35_RnTm4_",
    videoId: "M5-eshJQE1g",
    level: "Intermediate",
    levelColor: "text-yellow-400",
    category: "Development",
  },
  {
    title: "JavaScript Tutorials",
    description: "Core JavaScript concepts — closures, prototypes, async/await, ES6+ features, and DOM manipulation.",
    playlistId: "PL5jQH1Kzu9zqNtesJ7uBclY2w19kpSPp_",
    videoId: "lMQp06d98a4",
    level: "Beginner",
    levelColor: "text-green-400",
    category: "Development",
  },
  {
    title: "Docker Tutorials",
    description: "Quick Docker tutorials covering specific topics — multi-stage builds, volumes, networking, and troubleshooting.",
    playlistId: "PL5jQH1Kzu9zpdJ5BfHLErpec2HPBEn_TM",
    videoId: "KqMzMgU-6wE",
    level: "Beginner",
    levelColor: "text-green-400",
    category: "DevOps",
  },
];

const categories = ["All", "DevOps", "Cloud", "Development"];

const CoursesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingId, setPlayingId] = useState(null);

  const filtered = activeCategory === "All"
    ? courses
    : courses.filter((c) => c.category === activeCategory);

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Learning Paths</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Master cloud-native technologies with structured video courses. From Docker to Kubernetes, learn by building real-world projects.
          </p>
        </div>

        <div className="flex gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-brand-blue text-white"
                  : "bg-dark-600 text-gray-400 hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <div
              key={course.playlistId}
              className="bg-dark-700/50 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-blue/30 transition-all group"
            >
              <div className="relative aspect-video bg-dark-900">
                {playingId === course.playlistId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/videoseries?list=${course.playlistId}`}
                    title={course.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div
                    className="w-full h-full cursor-pointer relative"
                    onClick={() => setPlayingId(course.playlistId)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${course.videoId}/maxresdefault.jpg`}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${course.videoId}/hqdefault.jpg`;
                        e.target.onerror = null;
                      }}
                    />
                    <div className="absolute inset-0 bg-dark-900/40 flex items-center justify-center group-hover:bg-dark-900/20 transition-colors">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-semibold ${course.levelColor}`}>
                    {course.level}
                  </span>
                  <span className="text-xs text-gray-500 bg-dark-600 px-2 py-0.5 rounded">
                    {course.category}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                  {course.description}
                </p>

                <a
                  href={`https://www.youtube.com/playlist?list=${course.playlistId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center text-brand-blue text-sm font-medium hover:underline"
                >
                  View on YouTube
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
