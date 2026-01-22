
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-[#dce4ec] py-32 text-center px-4">
        <span className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full font-bold text-xs uppercase mb-8">About Us</span>
        <h1 className="text-7xl font-black text-slate-900 mb-8 tracking-tighter max-w-6xl mx-auto">
            AI Driven Legal Management One Suite, Every Workflow
        </h1>
        <p className="max-w-3xl mx-auto text-slate-600 text-lg leading-relaxed mb-12">
            Enabling businesses with an AI-driven platform that unifies and automates complete legal workflows for effortless management and control
        </p>
        <div className="flex justify-center space-x-4 mb-16">
            <button className="px-10 py-4 bg-[#1e293b] text-white font-bold rounded-lg shadow-xl">Book Demo</button>
            <button className="px-10 py-4 bg-[#1e293b] text-white font-bold rounded-lg shadow-xl">Play Live Demo</button>
        </div>
        
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/seed/legalroom/1200/600" alt="Legal Chamber" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-lg text-slate-600 leading-relaxed mb-16">
                Lugality is a global leader and one of the fastest developing legal technology companies. Discover LugalityTrak, our flagship offering, a comprehensive and integrated legal management suite created exclusively for enterprises. With our platform, you gain access to features including contract management, litigation assistance, legal notice management, intellectual property tools, and compliance automation — customized to suit your requirements.
            </p>
            
            <div className="grid grid-cols-2 gap-12 justify-center max-w-md mx-auto">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
                        <img src="https://picsum.photos/seed/gaurav/200/200" alt="Founder" />
                    </div>
                    <h4 className="font-bold text-slate-900">Gaurav Kumar</h4>
                    <p className="text-sm text-slate-500">Founder & CEO</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
                        <img src="https://picsum.photos/seed/guru/200/200" alt="Founder" />
                    </div>
                    <h4 className="font-bold text-slate-900">Guru Kumar</h4>
                    <p className="text-sm text-slate-500">Co-founder & CEO</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;
