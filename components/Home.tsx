
import React from 'react';
import { 
  Map, 
  Clock3, 
  ChartPie, 
  NotebookTabs, 
  SquareCheckBig,
  DollarSign,
  ShieldCheck,
  Search,
  TrendingUp,
  Lock,
  Headphones
} from 'lucide-react';
import StickyDemoForm from './StickyDemoForm';

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="bg-[#dce4ec] min-h-screen flex flex-col items-center justify-center text-center px-6 lg:px-24 pt-[90px] relative">
        <div className="max-w-6xl mx-auto z-10">
          <h1 className="text-[50px] lg:text-[85px] font-[900] text-slate-900 mb-2 tracking-tighter leading-[1.05]">
            AI-Driven Legal Workflow
          </h1>
          <h1 className="text-[50px] lg:text-[85px] font-[900] text-slate-900 mb-6 tracking-tighter leading-[1.05]">
            Platform
          </h1>
          <h2 className="text-3xl lg:text-[60px] font-[800] text-slate-900 mb-10 tracking-tight leading-tight">
            Designed for Modern Enterprises
          </h2>
          <p className="max-w-[850px] mx-auto text-[17px] text-slate-600 font-medium leading-relaxed mb-12 px-4">
            Lugality is an AI-powered legal tech platform that enables enterprises to streamline legal operations, automate routine tasks, and improve efficiency for managing legal workflows at scale.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="px-12 py-5 bg-[#1e293b] text-white text-[20px] font-bold rounded-[6px] hover:bg-slate-800 transition-all shadow-xl">
              Book Demo
            </button>
            <button className="px-12 py-5 bg-[#1e293b] text-white text-[20px] font-bold rounded-[6px] hover:bg-slate-800 transition-all shadow-xl">
              Play Live Demo
            </button>
          </div>
        </div>
        
        {/* Floating Form as seen in screenshots */}
        <div className="hidden lg:block">
          <StickyDemoForm />
        </div>
      </section>

      {/* 2. EXPLORE THE FEATURES (CAROUSEL SIMULATION) */}
      <section className="py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#2563eb] font-bold text-lg mb-2 block tracking-tight">Explore the Features</span>
          <h2 className="text-3xl lg:text-[32px] font-[900] text-slate-900 mb-20 tracking-tight">Comprehensive Legal Solutions for Enterprise Scale</h2>
          
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">Litigation Management</h3>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                Revolutionize legal portfolio handling using automation for better insights and detailed reporting
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7 text-left max-w-3xl mx-auto">
              {[
                "Stay updated with live case tracking and instant notifications",
                "Maintain regulatory compliance and never miss key legal milestones",
                "Evaluate legal data effectively with tailored reporting tools",
                "Securely manage and retrieve all your essential legal data from a single platform"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <SquareCheckBig className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-500 font-bold text-[17px] leading-snug">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-3 pt-16">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-900"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ENJOY THE BENEFITS */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/3 text-left self-start pt-4">
            <span className="text-[#2563eb] font-bold text-lg mb-4 block">Enjoy the Benefits</span>
            <h2 className="text-[36px] font-[900] text-slate-900 leading-[1.1] tracking-tighter">Legal work doesn't have to be overwhelming.</h2>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-14">
            {[
              { title: "Optimised Workflow", icon: <Map className="w-11 h-11 p-2.5 bg-[#2563eb] text-white rounded-xl" />, text: "Streamline legal processes with a digital solution to achieve maximum overall efficiency." },
              { title: "Time Efficiency", icon: <Clock3 className="w-11 h-11 p-2.5 bg-[#2563eb] text-white rounded-xl" />, text: "Automate repetitive legal tasks to significantly reduce turnaround time and manual effort." },
              { title: "Data Insights", icon: <ChartPie className="w-11 h-11 p-2.5 bg-[#2563eb] text-white rounded-xl" />, text: "Leverage smart analytics to gain actionable legal insights and make data-driven decisions faster." },
              { title: "Organised Tasks", icon: <NotebookTabs className="w-11 h-11 p-2.5 bg-[#2563eb] text-white rounded-xl" />, text: "Organize and centralize legal workflows to eliminate chaos and ensure seamless task management." }
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center space-x-4">
                  {item.icon}
                  <h4 className="text-[24px] font-bold text-blue-600 tracking-tight">{item.title}</h4>
                </div>
                <p className="text-slate-600 text-[17px] leading-relaxed font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ONE STOP SOLUTION (URETrak) */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#2563eb] font-bold text-sm uppercase tracking-widest mb-4 block">One Stop Solution</span>
          <h2 className="text-3xl lg:text-[38px] font-[900] text-slate-900 mb-20 tracking-tighter">URETrak: Your Control Center for Legal Workflows</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Revenue Preservation", icon: <DollarSign className="w-9 h-9 text-blue-600" />, desc: "Comprehensive contract lifecycle—from auto-generation to execution, collaboration, and obligation tracking. Accelerate revenue growth with faster contract cycles." },
              { title: "Risk Mitigation", icon: <ShieldCheck className="w-9 h-9 text-blue-600" />, desc: "Monitor legal matters and streamline stakeholder interactions with automation. Minimize risks by addressing obligations promptly." },
              { title: "Brand Protection", icon: <Search className="w-9 h-9 text-blue-600" />, desc: "Safeguard your brand assets and detect infringements with ease. Strengthen identity and build lasting brand value." },
              { title: "Future Prediction", icon: <TrendingUp className="w-9 h-9 text-blue-600" />, desc: "Utilize data from all touchpoints to enhance efficiency and maximize ROI. Anticipate actions through historical insights to protect your business." },
              { title: "Data Security", icon: <Lock className="w-9 h-9 text-blue-600" />, desc: "Robust end-to-end encryption, SSL protocols, automated backups, and ISO standards to ensure complete data security and threat protection." },
              { title: "24/7 Support", icon: <Headphones className="w-9 h-9 text-blue-600" />, desc: "24/7 customer support backed by domain experts to ensure seamless onboarding and rapid issue resolution." }
            ].map((feature, idx) => (
              <div key={idx} className="p-12 bg-white border border-slate-100 rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all text-left group cursor-default">
                <div className="mb-8 p-1 rounded-full w-fit group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h4 className="text-[22px] font-bold text-[#2563eb] mb-5 tracking-tight">{feature.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium text-[16px]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
