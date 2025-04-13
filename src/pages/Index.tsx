
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedStat from '@/components/AnimatedStat';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import ContactForm from '@/components/ContactForm';
import { 
  Brain, 
  Activity, 
  BarChart2, 
  Smartphone, 
  MessageCircle, 
  Shield, 
  Clock, 
  Share2,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Calendar,
  HeartPulse,
  Building2,
} from 'lucide-react';

const Index = () => {
  // Initialize intersection observers for animations
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 hero-gradient overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <span className="inline-block px-3 py-1 rounded-full bg-memotag-purple/10 text-memotag-purple text-sm font-medium mb-6">
                  AI-Powered Dementia Care
                </span>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Preserving Memories, <span className="gradient-text">Enhancing Care</span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <p className="text-lg text-gray-700 mb-8 max-w-lg">
                  MemoTag combines AI technology with personalized care to help those living with dementia maintain independence and connection.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={600}>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-memotag-purple hover:bg-memotag-purple/90">
                    <a href="#contact">Request Demo</a>
                  </Button>
                  <Button size="lg" variant="outline">
                    <a href="#solution">Learn More</a>
                  </Button>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={800}>
                <div className="mt-8 flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>HIPAA Compliant</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>FDA Registered</span>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="relative">
              <ScrollReveal direction="left">
                <div className="relative aspect-video md:aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-memotag-purple/20 to-memotag-blue/20 rounded-xl transform rotate-3 scale-95"></div>
                  <div className="absolute inset-0 bg-white rounded-xl shadow-lg transform -rotate-3 scale-95"></div>
                  <div className="relative h-full overflow-hidden rounded-xl shadow-xl border border-gray-100 bg-white z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Elderly person with caregiver using MemoTag" 
                      className="object-cover w-full h-full" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <span className="text-white font-medium">MemoTag enhances quality of life</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Bar */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <AnimatedStat 
              value={55} 
              suffix="M" 
              labelBottom="People living with dementia worldwide" 
            />
            <AnimatedStat 
              value={10} 
              suffix="M" 
              labelBottom="New cases diagnosed each year" 
            />
            <AnimatedStat 
              value={86} 
              suffix="%" 
              labelBottom="Cases go undiagnosed" 
            />
            <AnimatedStat 
              value={1.3} 
              suffix="T" 
              prefix="$" 
              labelBottom="Annual global cost of care" 
            />
          </div>
        </div>
      </section>
      
      {/* Problem Section */}
      <section id="problem" className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              The Dementia <span className="gradient-text">Challenge</span>
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 mb-4 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Early Detection Gaps</h3>
                <p className="text-gray-600">
                  Most cases of dementia go undiagnosed until moderate to severe symptoms appear, limiting treatment effectiveness.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 mb-4 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Activity className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cognitive Decline Tracking</h3>
                <p className="text-gray-600">
                  Traditional methods fall short in providing continuous, objective data on cognitive changes over time.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Communication Barriers</h3>
                <p className="text-gray-600">
                  As dementia progresses, communication between patients, caregivers, and healthcare providers becomes increasingly difficult.
                </p>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="mt-16">
            <ScrollReveal>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">The Caregiver Burden</h3>
                    <p className="text-gray-600 mb-6">
                      Caring for someone with dementia takes a significant emotional, physical, and financial toll. Caregivers often lack proper tools and support systems to provide optimal care while maintaining their own well-being.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="mr-3 mt-1 text-red-500">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L9.79611 6.20389H16L11.1019 10.0423L12.8982 16L8 12.1615L3.10182 16L4.89808 10.0423L0 6.20389H6.20389L8 0Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <p className="text-gray-700"><strong>70%</strong> of caregivers report significant levels of stress</p>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-3 mt-1 text-red-500">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L9.79611 6.20389H16L11.1019 10.0423L12.8982 16L8 12.1615L3.10182 16L4.89808 10.0423L0 6.20389H6.20389L8 0Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <p className="text-gray-700"><strong>40%</strong> suffer from depression</p>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-3 mt-1 text-red-500">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L9.79611 6.20389H16L11.1019 10.0423L12.8982 16L8 12.1615L3.10182 16L4.89808 10.0423L0 6.20389H6.20389L8 0Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <p className="text-gray-700">Average <strong>$15,000</strong> annual out-of-pocket expenses</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-memotag-purple/10 to-memotag-blue/10 rounded-lg transform rotate-3"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Caregiver with elder" 
                      className="relative z-10 rounded-lg object-cover w-full h-full shadow-md" 
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Solution Section */}
      <section id="solution" className="section-padding">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-memotag-blue/10 text-memotag-blue text-sm font-medium mb-4">
                Our Solution
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">AI-Powered</span> Memory Support
              </h2>
              <p className="text-gray-600 text-lg">
                MemoTag combines wearable technology, advanced AI, and intuitive interfaces to create a comprehensive support system for those affected by dementia.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <FeatureCard 
              icon={<Brain className="h-6 w-6 text-memotag-purple" />}
              title="Cognitive Monitoring"
              description="Continuous assessment of memory patterns and cognitive function through unobtrusive daily interaction analysis."
              delay={100}
            />
            <FeatureCard 
              icon={<BarChart2 className="h-6 w-6 text-memotag-purple" />}
              title="Trend Analysis"
              description="Advanced algorithms detect subtle changes in behavior and cognitive patterns before they become apparent."
              delay={200}
            />
            <FeatureCard 
              icon={<Smartphone className="h-6 w-6 text-memotag-purple" />}
              title="Caregiver App"
              description="User-friendly mobile interface provides real-time insights, alerts, and recommendations for caregivers."
              delay={300}
            />
            <FeatureCard 
              icon={<Shield className="h-6 w-6 text-memotag-purple" />}
              title="Safety Monitoring"
              description="Detects wandering patterns and potentially unsafe behaviors to prevent accidents."
              delay={400}
            />
            <FeatureCard 
              icon={<Clock className="h-6 w-6 text-memotag-purple" />}
              title="Reminder System"
              description="Personalized, timely reminders for medications, appointments, and daily activities."
              delay={500}
            />
            <FeatureCard 
              icon={<Share2 className="h-6 w-6 text-memotag-purple" />}
              title="Care Coordination"
              description="Seamlessly share information with healthcare providers and family members for coordinated care."
              delay={600}
            />
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">How MemoTag Works</h3>
                  
                  <ul className="space-y-6">
                    <li className="flex">
                      <div className="mr-4 flex-shrink-0 w-12 h-12 bg-memotag-purple/10 rounded-full flex items-center justify-center text-memotag-purple font-bold">1</div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Personalized Setup</h4>
                        <p className="text-gray-600">Tailored configuration based on individual needs, preferences, and cognitive status.</p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="mr-4 flex-shrink-0 w-12 h-12 bg-memotag-purple/10 rounded-full flex items-center justify-center text-memotag-purple font-bold">2</div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Continuous Monitoring</h4>
                        <p className="text-gray-600">Smart sensors collect activity and behavioral data while respecting privacy.</p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="mr-4 flex-shrink-0 w-12 h-12 bg-memotag-purple/10 rounded-full flex items-center justify-center text-memotag-purple font-bold">3</div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">AI Analysis</h4>
                        <p className="text-gray-600">Advanced algorithms detect patterns, changes, and potential concerns.</p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="mr-4 flex-shrink-0 w-12 h-12 bg-memotag-purple/10 rounded-full flex items-center justify-center text-memotag-purple font-bold">4</div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Actionable Insights</h4>
                        <p className="text-gray-600">Caregivers and healthcare providers receive meaningful data to inform care decisions.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="left">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-memotag-purple/30 to-memotag-blue/30 rounded-xl transform rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="MemoTag device and app" 
                    className="relative rounded-xl shadow-lg w-full h-auto z-10 transform -rotate-3"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      
      {/* Traction Section */}
      <section id="traction" className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-4">
                Our Traction
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Making Real Impact</h2>
              <p className="text-gray-600 text-lg">
                MemoTag is already helping thousands of families navigate the challenges of dementia care with greater confidence and better outcomes.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ScrollReveal>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">5,000+</h3>
                <p className="text-gray-600">Active MemoTag Users</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-4">
                  <Calendar className="h-10 w-10 text-memotag-purple" />
                </div>
                <h3 className="text-2xl font-bold mb-2">18 months</h3>
                <p className="text-gray-600">Earlier Detection Rate</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-4">
                  <HeartPulse className="h-10 w-10 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">68%</h3>
                <p className="text-gray-600">Reduction in Caregiver Stress</p>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="my-16">
            <ScrollReveal>
              <h3 className="text-2xl font-bold text-center mb-8">Trusted By Leading Organizations</h3>
            </ScrollReveal>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <ScrollReveal delay={100}>
                <div className="flex justify-center">
                  <div className="w-32 h-16 bg-gray-200/50 rounded flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div className="flex justify-center">
                  <div className="w-32 h-16 bg-gray-200/50 rounded flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <div className="flex justify-center">
                  <div className="w-32 h-16 bg-gray-200/50 rounded flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <div className="flex justify-center">
                  <div className="w-32 h-16 bg-gray-200/50 rounded flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
          
          <div className="mt-20">
            <ScrollReveal>
              <h3 className="text-2xl font-bold text-center mb-8">What Our Users Say</h3>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ScrollReveal delay={100}>
                <TestimonialCard 
                  quote="MemoTag has given our family peace of mind. Mom is more independent, and we can track her cognitive health without being intrusive."
                  author="Sarah Johnson"
                  role="Daughter & Caregiver"
                />
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <TestimonialCard 
                  quote="As a neurologist, I've seen dramatic improvements in early detection and better care coordination with families using MemoTag."
                  author="Dr. Michael Chen"
                  role="Neurologist"
                />
              </ScrollReveal>
              
              <ScrollReveal delay={500}>
                <TestimonialCard 
                  quote="The data insights have allowed us to adjust treatments and interventions at just the right time. It's transformative."
                  author="Dr. Leah Williams"
                  role="Geriatric Specialist"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-memotag-purple/10 text-memotag-purple text-sm font-medium mb-4">
                  Get Started
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Dementia Care?
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Whether you're a caregiver, healthcare professional, or interested in partnering with us, we'd love to hear from you.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Free Consultation</h4>
                      <p className="text-gray-600">Speak with our care specialists to determine if MemoTag is right for your situation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Easy Setup</h4>
                      <p className="text-gray-600">Our team will help you get started with a personalized implementation plan.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Ongoing Support</h4>
                      <p className="text-gray-600">Our care team is always available to help optimize your MemoTag experience.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="font-bold text-xl gradient-text">MemoTag</span>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                Pioneering AI-powered solutions to enhance quality of life for those affected by dementia and their caregivers.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-memotag-purple">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-memotag-purple">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-memotag-purple">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-memotag-purple">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-memotag-purple">Case Studies</a></li>
                <li><a href="#" className="text-gray-600 hover:text-memotag-purple">Research</a></li>
                <li><a href="#" className="text-gray-600 hover:text-memotag-purple">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-memotag-purple">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-memotag-purple">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-memotag-purple">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-memotag-purple">Press</a></li>
                <li><a href="#" className="text-gray-600 hover:text-memotag-purple">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 text-center md:flex md:justify-between md:text-left text-sm text-gray-500">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 MemoTag, Inc. All rights reserved.</p>
            </div>
            <div className="space-x-6">
              <a href="#" className="text-gray-500 hover:text-memotag-purple">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-memotag-purple">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-memotag-purple">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
