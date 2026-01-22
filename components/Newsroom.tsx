
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { ARTICLES } from '../constants';

const Newsroom: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['Crime', 'Current Affairs', 'Contract Management', 'Legal Notice Management', 'Litigation Management', 'Case Study', 'Article', 'Announcement', 'RERA', 'Drafting'];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 sticky top-32">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Categories</h3>
              <div className="relative mb-6">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg text-sm pr-10"
                />
                <div className="absolute right-0 top-0 h-full w-12 bg-blue-600 rounded-r-lg flex items-center justify-center">
                    <Search className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="space-y-4">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-slate-600 group-hover:text-blue-600 transition-colors font-medium">{cat}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Duplicate articles for grid fill */}
              {[...ARTICLES, ...ARTICLES].map((article, idx) => (
                <div key={`${article.id}-${idx}`} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="text-lg font-black text-slate-900 mb-4 leading-tight">{article.title}</h4>
                    <p className="text-sm text-slate-500 line-clamp-3 mb-6 flex-1">{article.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                        {article.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-slate-100 text-[10px] font-bold text-slate-600 rounded uppercase">
                                {tag}
                            </span>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
                <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                    Load More
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsroom;
