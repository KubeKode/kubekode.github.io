import React from 'react';

const featuredCourses = [
  {
    title: 'Kubernetes Full Course',
    description: 'Learn Kubernetes from scratch — Pods, Deployments, Services, Ingress, and cluster management with hands-on labs.',
    level: 'Beginner',
    levelColor: 'text-green-400',
    duration: 'YouTube Course',
    videoId: 'aiMl6hM538w',
    url: 'https://www.youtube.com/playlist?list=PL5jQH1Kzu9zrFjBVIkJFWA2W3cQUUnLWR',
  },
  {
    title: 'Docker Complete Course',
    description: 'Zero to hero Docker series — containers, images, Dockerfile, Docker Compose, networking, and production workflows.',
    level: 'Beginner',
    levelColor: 'text-green-400',
    duration: 'YouTube Course',
    videoId: '2rvpWc88Wkw',
    url: 'https://www.youtube.com/playlist?list=PL5jQH1Kzu9zrku-uqq-qT1hMzLsYgzW5N',
  },
  {
    title: 'DevOps for Beginners',
    description: 'Complete DevOps roadmap covering CI/CD, Linux, networking, Git, and all fundamentals to kickstart your career.',
    level: 'Beginner',
    levelColor: 'text-green-400',
    duration: 'YouTube Course',
    videoId: 'gtTjmMcurFk',
    url: 'https://www.youtube.com/playlist?list=PL5jQH1Kzu9zqSnImM61sx09CUq85-BFPk',
  },
  {
    title: 'Terraform Tutorials',
    description: 'Infrastructure as Code with Terraform — provision AWS & GCP resources, manage state, modules, and workspaces.',
    level: 'Intermediate',
    levelColor: 'text-yellow-400',
    duration: 'YouTube Course',
    videoId: 'j0anptlwW7A',
    url: 'https://www.youtube.com/playlist?list=PL5jQH1Kzu9zpyAQe_RY11QPaPcmZW0dAe',
  },
  {
    title: 'GitHub Actions CI/CD',
    description: 'Automate build, test, and deploy pipelines with GitHub Actions. Create custom workflows for real projects.',
    level: 'Intermediate',
    levelColor: 'text-yellow-400',
    duration: 'YouTube Course',
    videoId: 'MNtIdC4AEQo',
    url: 'https://www.youtube.com/playlist?list=PL5jQH1Kzu9zqraQoXA8rYc3WPB_gnwwJp',
  },
  {
    title: 'DevOps Real-World Projects',
    description: 'End-to-end DevOps projects — deploy full applications with Docker, Kubernetes, CI/CD, and cloud services.',
    level: 'Advanced',
    levelColor: 'text-red-400',
    duration: 'YouTube Course',
    videoId: 'Vk6Dvv-rhcM',
    url: 'https://www.youtube.com/playlist?list=PL5jQH1Kzu9zpH-T9-z-cdrUEIsvLLRzUY',
  },
];

const FeaturedCourses = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <a
              key={course.title}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-700/50 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-blue/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:ring-offset-2 focus:ring-offset-dark-900"
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={`https://img.youtube.com/vi/${course.videoId}/maxresdefault.jpg`}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = `https://img.youtube.com/vi/${course.videoId}/hqdefault.jpg`;
                    e.target.onerror = null;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold ${course.levelColor}`}>
                    {course.level}
                  </span>
                  <span className="text-xs text-gray-500">{course.duration}</span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-blue transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {course.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs text-brand-blue font-medium uppercase tracking-wide">
                    Start Learning
                  </span>
                  <span className="text-brand-blue group-hover:translate-x-1 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
