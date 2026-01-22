
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { JOB_LISTINGS } from '../constants';

const Careers: React.FC = () => {
  const departments = Array.from(new Set(JOB_LISTINGS.map(j => j.department)));

  return (
    <div className="pt-20 bg-[#dce4ec] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-black text-slate-900 mb-12">Careers @ Lugality</h1>

        <div className="space-y-16">
          {departments.map(dept => (
            <div key={dept}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900">{dept}</h2>
                <span className="px-4 py-1.5 bg-slate-200 text-slate-600 text-xs font-bold rounded-full border border-slate-300">
                    {JOB_LISTINGS.filter(j => j.department === dept).length} Open Role{JOB_LISTINGS.filter(j => j.department === dept).length > 1 ? 's' : ''}
                </span>
              </div>
              <div className="space-y-4">
                {JOB_LISTINGS.filter(j => j.department === dept).map(job => (
                  <div key={job.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group cursor-pointer flex justify-between items-center">
                    <div className="max-w-2xl">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{job.title}</h3>
                      <p className="text-sm text-slate-500 mb-2 leading-relaxed">{job.description}</p>
                    </div>
                    <div className="text-right flex items-center space-x-6">
                        <div className="hidden md:block">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{job.location}</p>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">{job.type}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-blue-600 transform group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
