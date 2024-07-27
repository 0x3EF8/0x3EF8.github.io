import React, { useEffect } from 'react';
import pfp from '../../assets/images/Jay.png';
import { TypeAnimation } from 'react-type-animation';
import { FaCode, FaPaintBrush, FaChartLine, FaProjectDiagram, FaNewspaper } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/index.css';

const animationSequence = [
  'Transforming Ideas into Reality',
  2000,
  'Crafting Exceptional User Experiences',
  2000,
  'Innovating Web Development',
  2000,
  'Building Responsive Web Applications',
  2000,
  'Designing Intuitive User Interfaces',
  2000,
  'Creating Scalable Web Solutions',
  2000,
];

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className="relative isolate overflow-hidden px-6 py-12 lg:py-16 lg:px-8 flex flex-col items-center">
      <div
        className="hero-content w-full max-w-5xl bg-base-100 bg-opacity-90 backdrop-blur-md p-10 rounded-lg shadow-xl transition-shadow duration-300 hover:shadow-2xl flex flex-col lg:flex-row-reverse items-center"
        data-aos="fade-up">
        <img
          src={pfp}
          alt="Jay Patrick Cano"
          className="w-64 h-64 rounded-full mx-auto lg:mx-0 border-4 border-base-300 shadow-2xl"
        />
        <div className="text-center lg:text-left lg:ml-12 mt-8 lg:mt-0">
          <h1 className="text-5xl font-bold text-primary">Hello, I'm Pat</h1>
          <p className="py-4 text-2xl font-semibold text-primary">
            <TypeAnimation sequence={animationSequence} speed={50} repeat={Infinity} />
          </p>
          <p className="py-4 text-lg text-base-content">
            I combine technology and creativity to build visually appealing and functional websites
            and apps. My goal is to create solutions that help you achieve your objectives. Let's
            bring your vision to life and make a lasting impact.
          </p>
          <button className="btn btn-primary btn-lg transition-transform transform hover:scale-105 mt-4">
            Get in touch
          </button>
        </div>
      </div>

      <div className="mt-16 w-full max-w-5xl px-5 lg:px-0">
        <h2 className="text-4xl font-bold text-center mb-10">Summary</h2>
        <p className="text-center text-xl mb-16">
          A dedicated professional with expertise in web development, user experience design, and
          creating scalable solutions. With a passion for technology and innovation, I strive to
          deliver exceptional digital experiences.
        </p>

        <h2 className="text-4xl font-bold text-center mb-10">Services</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div
            className="text-center lg:text-left p-6 border border-gray-300 rounded-lg shadow-sm"
            data-aos="fade-right">
            <FaCode className="text-primary text-5xl mx-auto lg:mx-0 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
            <p className="text-lg">
              Creating responsive and scalable web applications tailored to your business needs.
            </p>
          </div>
          <div
            className="text-center lg:text-left p-6 border border-gray-300 rounded-lg shadow-sm"
            data-aos="fade-up">
            <FaPaintBrush className="text-primary text-5xl mx-auto lg:mx-0 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">User Experience Design</h3>
            <p className="text-lg">
              Designing intuitive user interfaces that enhance user engagement and satisfaction.
            </p>
          </div>
          <div
            className="text-center lg:text-left p-6 border border-gray-300 rounded-lg shadow-sm"
            data-aos="fade-left">
            <FaChartLine className="text-primary text-5xl mx-auto lg:mx-0 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Consulting</h3>
            <p className="text-lg">
              Providing expert advice and strategies to optimize your digital presence and
              performance.
            </p>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center mt-16 mb-10">
          Featured Projects & Recent Activities
        </h2>
        <div className="space-y-8">
          <div className="border-l-4 border-primary pl-4" data-aos="fade-right">
            <FaProjectDiagram className="text-primary text-3xl mb-2" />
            <h3 className="text-2xl font-semibold mb-2">Project Alpha</h3>
            <p className="text-lg">
              A comprehensive e-commerce platform with advanced user analytics and personalized
              shopping experiences.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4" data-aos="fade-up">
            <FaProjectDiagram className="text-primary text-3xl mb-2" />
            <h3 className="text-2xl font-semibold mb-2">Project Beta</h3>
            <p className="text-lg">
              An innovative social media app with real-time collaboration features and seamless
              integration.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4" data-aos="fade-left">
            <FaNewspaper className="text-primary text-3xl mb-2" />
            <h3 className="text-2xl font-semibold mb-2">Recent Activity</h3>
            <ul className="list-disc list-inside text-lg">
              <li>Participated in XYZ Tech Conference 2023</li>
              <li>Contributed to open-source project ABC</li>
              <li>Published a blog post on React best practices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
