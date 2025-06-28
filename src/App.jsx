import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Moon, Heart, Shield, Gift, Clock } from 'lucide-react';

const CountdownTimer = ({ initialMinutes = 15 }) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  const handleRedirect = () => {
    window.location.href = "https://pay.hotmart.com/T100537906H"; 
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      handleRedirect();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-red-500/20 text-white font-bold py-2 px-4 rounded-lg inline-block">
      <span className="text-lg">
        Offer Ends In: {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
};

function App() {
  const handleCTAClick = () => {
    window.location.href = 'https://pay.hotmart.com/T100537906H';
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>7-Night Method: Fall Asleep Fast and Wake Up Renewed</title>
        <meta name="description" content="A simple, natural routine to help you sleep deeply without pills or complicated techniques. Transform your sleep in just 7 nights for only €11." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img alt="7-Night Method book cover" className="w-full max-w-md mx-auto rounded-lg shadow-2xl" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/50b1ee98-38ec-467b-974d-1893f759f260/a9ab39b51e0031b0e1db314b9ef6a6a8.png" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center md:text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent leading-tight">
                  7-Night Method
                </h1>
                <p className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  Fall Asleep Fast and Wake Up Renewed
                </p>
                <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                  A simple, natural routine to help you sleep deeply without pills or complicated techniques.
                </p>
                <div className="mb-8">
                  <CountdownTimer />
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={handleCTAClick}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-xl px-12 py-6 rounded-full shadow-2xl border-2 border-green-400/50 transition-all duration-300"
                  >
                    <Heart className="mr-3 h-6 w-6" />
                    Yes, I Want Better Sleep – €11
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900/50 to-purple-900/30">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
              >
                What's Included
              </motion.h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div 
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm"
                >
                  <div className="text-center">
                    <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Moon className="h-8 w-8 text-blue-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Digital Guide</h3>
                    <p className="text-blue-200">7-day sleep method with nightly routines</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm"
                >
                  <div className="text-center">
                    <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="h-8 w-8 text-purple-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Breathing & Relaxation</h3>
                    <p className="text-purple-200">Breathing, relaxation and mental techniques</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 p-8 rounded-2xl border border-green-500/30 backdrop-blur-sm"
                >
                  <div className="text-center">
                    <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-green-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Easy to Follow</h3>
                    <p className="text-green-200">No apps or gadgets needed</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why It Works Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
                Why It Works
              </h2>
              
              <div className="bg-gradient-to-br from-indigo-900/60 to-purple-900/60 p-12 rounded-3xl border border-indigo-500/30 backdrop-blur-sm">
                <img  alt="Calm mind illustration with peaceful brain waves" className="w-24 h-24 mx-auto mb-8 rounded-full" src="https://images.unsplash.com/photo-1674683356499-ca03b0661f93" />
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                  This method is designed for real people with overactive minds. Each night uses proven techniques to calm the nervous system and allow natural sleep to return.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bonus Section */}
        <section className="py-20 bg-gradient-to-r from-amber-900/20 to-orange-900/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-6">
                  <Gift className="mr-2 h-6 w-6" />
                  LIMITED-TIME BONUS
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Limited-Time Bonuses Included FREE:
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 p-8 rounded-2xl border border-amber-500/30 backdrop-blur-sm flex flex-col h-full"
                >
                  <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/50b1ee98-38ec-467b-974d-1893f759f260/15a1501c6b9850b8b5fbf23b2cfc8964.png" alt="Gentle Night Affirmations bonus cover" className="rounded-lg shadow-lg mb-6 w-full object-cover h-48"/>
                  <div className="flex items-start space-x-4 mt-auto">
                    <div className="bg-amber-500/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="h-6 w-6 text-amber-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Gentle Night Affirmations</h3>
                      <p className="text-amber-200">(digital cards)</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-green-900/40 to-teal-900/40 p-8 rounded-2xl border border-green-500/30 backdrop-blur-sm flex flex-col h-full"
                >
                  <img  alt="7 Sleep-Friendly Night Drinks bonus cover" className="rounded-lg shadow-lg mb-6 w-full object-cover h-48" src="https://images.unsplash.com/photo-1635783358376-cb47df74333b" />
                  <div className="flex items-start space-x-4 mt-auto">
                    <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Moon className="h-6 w-6 text-green-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">7 Sleep-Friendly Night Drinks</h3>
                      <p className="text-green-200">(natural recipes PDF)</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-gradient-to-br from-green-900/60 to-emerald-900/60 p-12 rounded-3xl border-2 border-green-500/50 backdrop-blur-sm">
                <div className="bg-green-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Shield className="h-10 w-10 text-green-300" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  100% Risk-Free for 7 Nights
                </h2>
                
                <p className="text-xl text-green-100 leading-relaxed">
                  Try the full 7-night routine. If you don’t feel a real difference in your sleep, we’ll refund you — no questions asked.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-950">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
              >
                What Our Customers Are Saying
              </motion.h2>
              
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div variants={fadeInUp}>
                  <Card className="bg-transparent border-0 shadow-none">
                    <CardContent className="p-0">
                      <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/50b1ee98-38ec-467b-974d-1893f759f260/edf4a116b40dd7f1cb8d6c7c93e12165.webp" alt="Testimonial from Angela R." className="rounded-xl shadow-2xl w-full"/>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Card className="bg-transparent border-0 shadow-none">
                    <CardContent className="p-0">
                      <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/50b1ee98-38ec-467b-974d-1893f759f260/e212a38ee25dd8c8e396542766d915d3.webp" alt="Testimonial from Melissa C." className="rounded-xl shadow-2xl w-full"/>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Card className="bg-transparent border-0 shadow-none">
                    <CardContent className="p-0">
                      <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/50b1ee98-38ec-467b-974d-1893f759f260/f4e41a8027d05de8fef9751767eab1d0.webp" alt="Testimonial from Linda T." className="rounded-xl shadow-2xl w-full"/>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <img  alt="Person waking up refreshed and energized" className="w-32 h-32 mx-auto rounded-full shadow-2xl border-4 border-green-300/30" src="https://images.unsplash.com/photo-1552650272-b8a34e21bc4b" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Transform Your Sleep Tonight
              </h2>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={handleCTAClick}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-2xl px-16 py-8 rounded-full shadow-2xl border-2 border-green-400/50 transition-all duration-300"
                >
                  <Clock className="mr-3 h-7 w-7" />
                  Start the Method Today – €11
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-slate-950/80 border-t border-slate-800">
          <div className="container mx-auto px-4 text-center">
            <p className="text-slate-400">
              © 2025 7-Night Method. All rights reserved.
            </p>
          </div>
        </footer>

        <Toaster />
      </div>
    </>
  );
}

export default App;