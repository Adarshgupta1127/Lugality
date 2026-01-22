
import React from 'react';
import { Check, XCircle } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-[#dce4ec] py-24 text-center px-4">
        <span className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full font-bold text-sm mb-8">Plans and Pricing</span>
        <h1 className="text-7xl font-black text-slate-900 mb-8 tracking-tighter">Explore Our Pricing Options</h1>
        <p className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed">
          At Lugality, we offer tailored pricing plans thoughtfully designed to meet the requirements of growing businesses and large-scale enterprises
        </p>
        <div className="flex justify-center space-x-4 mt-12">
            <button className="px-8 py-4 bg-[#1e293b] text-white font-bold rounded-lg shadow-lg">Book Demo</button>
            <button className="px-8 py-4 bg-[#1e293b] text-white font-bold rounded-lg shadow-lg">Play Live Demo</button>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                    <h3 className="text-xl font-bold text-slate-900">Your legal operations command center</h3>
                    <p className="text-slate-600 leading-relaxed">Simplify and optimize your legal operations with our unified platform, covering everything from matter management to contract handling</p>
                    <div className="space-y-4">
                        {[
                            'End to end contract lifecycle management',
                            'Track and monitor case hearings with alerts',
                            'Protect your brand portfolio with IPR management',
                            'Manage legal notices with timely alerts'
                        ].map(item => (
                            <div key={item} className="flex items-center space-x-3 text-sm font-semibold text-slate-700">
                                <Check className="w-5 h-5 text-blue-600" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#374151] rounded-2xl overflow-hidden shadow-2xl">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-[#2a3441] border-b border-slate-600">
                            <tr>
                                <th className="p-6 text-white font-bold uppercase tracking-wider">Features</th>
                                <th className="p-6 text-white font-bold uppercase tracking-wider text-center">URE PR</th>
                                <th className="p-6 text-white font-bold uppercase tracking-wider text-center">Typical</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-600">
                            {[
                                'Data automation & integration with 10000+ courts',
                                'Customised workflow configuration as per your needs',
                                'Seamless collaboration amongst team members',
                                'Intuitive and seamless user experience',
                                'Cutting edge security & encryption for your data',
                                'AI powered lawyer discovery, matter management & more',
                                'Dedicated account managers for legal and tech support'
                            ].map((feature, idx) => (
                                <tr key={idx} className="hover:bg-slate-700 transition-colors">
                                    <td className="p-6 text-slate-300 font-medium">{feature}</td>
                                    <td className="p-6 text-center">
                                        <div className="w-6 h-6 rounded-full border border-green-500/30 flex items-center justify-center mx-auto">
                                            <Check className="w-4 h-4 text-green-500" />
                                        </div>
                                    </td>
                                    <td className="p-6 text-center">
                                        <XCircle className="w-6 h-6 text-red-500 mx-auto opacity-50" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
