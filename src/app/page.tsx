import { Thermometer, Shield, AlertTriangle, MessageCircle, Brain, MessageSquare } from 'lucide-react';
import iheatrisklogo from './iheatrisklogo.jpeg';
import Image from 'next/image';
import Script from 'next/script';

export default function Page() {
  return (
    <>
      <Script src="//code.tidio.co/z8qifypi5eqpith9whcgeqavqexcyhfj.js" strategy="afterInteractive" />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        {/* Header */}
        <header className="bg-white">
          <div className="absolute left-0 top-0 h-20 w-full bg-white/5 shadow-lg"></div>
          <div className="relative container mx-auto px-6 py-8">
            <div className="flex items-center justify-start">
              <div className="flex items-center space-x-1">
                <Image src={iheatrisklogo} alt="HeatRisk Logo" className="h-9 w-9 -mt-1" />
                <h1 className="text-xl font-bold -mt-1">
                  i<span className="text-xl font-black text-orange-600">Heat</span>Risk
                </h1>
              </div>
              <h1 className="absolute left-1/2 top-[45%] transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                <span className="text-2xl font-black text-red-600">HeatRiskBot</span>
              </h1>
            </div>
          </div>
        </header>

        {/* About the Chatbot */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Meet <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">HeatRiskBot</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                An advanced AI Chatbot specifically designed to help you navigate heat-related risks and stay safe during extreme heat.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border border-red-100">
                  <div className="flex items-center mb-4">
                    <Brain className="h-8 w-8 text-red-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-800">Intelligent Analysis</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    "HeatRiskBot uses different data sources to learn more about heat risk and gives you personalized advice based on your specific input.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-500 to-orange-500 p-8 rounded-3xl text-white shadow-2xl">
                  <div className="text-center">
                    <MessageSquare className="h-16 w-16 mx-auto mb-6 text-yellow-200" />
                    <h3 className="text-3xl font-bold mb-4">How It Works</h3>
                    <div className="space-y-4 text-left">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-red-600 font-bold text-sm flex-shrink-0 mt-1">1</div>
                        <p className="text-yellow-100">Start a conversation by describing your situation or asking about heat-related questions</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-red-600 font-bold text-sm flex-shrink-0 mt-1">2</div>
                        <p className="text-yellow-100">Provide any relevant health information</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-red-600 font-bold text-sm flex-shrink-0 mt-1">3</div>
                        <p className="text-yellow-100">Receive instant, information on symptoms and safety guidance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-gray-400">
                <a href="https://iheatrisk.com/" target="_blank" rel="noopener noreferrer">https://iheatrisk.com/</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
