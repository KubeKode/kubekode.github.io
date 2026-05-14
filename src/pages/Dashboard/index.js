import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const dashboardCards = [
  {
    title: 'My Courses',
    description: 'Continue where you left off',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    link: '/courses',
    count: '14 Available',
  },
  {
    title: 'Saved Labs',
    description: 'Your bookmarked sandbox environments',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
      </svg>
    ),
    link: '/',
    count: '3 Saved',
  },
  {
    title: 'Learning Progress',
    description: 'Track your certification journey',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    link: '/',
    count: 'In Progress',
  },
  {
    title: 'Continue Watching',
    description: 'Resume your latest video course',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    link: '/courses',
    count: '2 Videos',
  },
];

const Dashboard = () => {
  const { user } = useAuth();

  const displayName = user?.displayName || user?.email?.split('@')[0] || 'Learner';
  const initials = displayName.slice(0, 2).toUpperCase();

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-dark-700/50 border border-white/5 rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-4">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt={displayName}
                className="w-14 h-14 rounded-full border-2 border-brand-blue/30"
              />
            ) : (
              <div className="w-14 h-14 rounded-full bg-brand-blue/20 border-2 border-brand-blue/30 flex items-center justify-center text-brand-blue font-bold text-lg">
                {initials}
              </div>
            )}
            <div>
              <h1 className="text-2xl font-bold text-white">Welcome back, {displayName}</h1>
              <p className="text-gray-400 text-sm">{user?.email}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dashboardCards.map((card) => (
            <Link
              key={card.title}
              to={card.link}
              className="bg-dark-700/50 border border-white/5 rounded-2xl p-6 hover:border-brand-blue/30 hover:-translate-y-0.5 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-dark-600 rounded-xl text-brand-blue group-hover:bg-brand-blue/10 transition-colors">
                  {card.icon}
                </div>
                <span className="text-xs text-gray-500 bg-dark-600 px-2 py-1 rounded">
                  {card.count}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-brand-blue transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-gray-400">{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
