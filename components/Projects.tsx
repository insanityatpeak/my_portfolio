'use client';

import useSWR from 'swr';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';
import { SiGithub } from 'react-icons/si';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Repo {
  id: number | string;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  stargazers_count?: number;
  topics: string[];
}

export default function Projects() {
  const { data: allRepos, error } = useSWR<any>(
    'https://api.github.com/users/insanityatpeak/repos?sort=updated&per_page=15',
    fetcher
  );

  const excludedRepos = ['insanityatpeak', 'html_updatation', 'nutrivision-ai', 'nutrivision', 'code-contribution'];
  
  let repos: Repo[] | null = null;
  let usingFallback = false;

  if (allRepos && Array.isArray(allRepos)) {
    repos = allRepos.filter(repo => !excludedRepos.includes(repo.name.toLowerCase())).slice(0, 6) as Repo[];
  } else if ((allRepos && !Array.isArray(allRepos)) || error) {
    repos = PROJECTS.map(p => ({
      id: p.id,
      name: p.title,
      description: p.description,
      html_url: p.github,
      stargazers_count: 0,
      topics: p.tags
    }));
    usingFallback = true;
  }

  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only font-mono">
          Projects
        </h2>
      </div>

      <div>
        <ul className="group/list">
          {!repos && !error && !allRepos && (
            <div className="text-slate-400 font-mono text-sm animate-pulse">Loading projects...</div>
          )}
          
          {repos && repos.map((repo) => (
            <li key={repo.id} className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
              >
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                
                <div className="z-10 sm:col-span-8">
                  <h3 className="font-medium leading-tight text-slate-200 hover:text-green-neon focus-visible:text-green-neon font-mono text-base">
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green-neon focus-visible:text-green-neon group/link text-base"
                      href={repo.homepage || repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      {repo.name}
                      <span className="inline-block transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1">
                        ↗
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    {repo.description || 'No description provided.'}
                  </p>
                  
                  {repo.topics && repo.topics.length > 0 && (
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      {repo.topics.map((topic) => (
                        <li key={topic} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-green-neon/10 px-3 py-1 text-xs font-medium leading-5 text-green-neon font-mono">
                            {topic}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="mt-4 flex items-center gap-4 text-slate-400 text-xs font-mono">
                    <a 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center hover:text-green-neon transition-colors"
                    >
                      <SiGithub className="mr-2 h-4 w-4" />
                      Source Code
                    </a>

                    {!usingFallback && repo.stargazers_count !== undefined && repo.stargazers_count > 0 && (
                      <div className="flex items-center">
                        <span className="mr-1">★</span> {repo.stargazers_count}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
