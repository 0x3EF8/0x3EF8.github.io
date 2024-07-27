import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '@heroicons/react/24/outline';
import { FaHome, FaUser, FaCogs, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const navigation = [
  { name: 'Home', path: '/', icon: FaHome },
  { name: 'About Me', path: '/about', icon: FaUser },
  { name: 'Skills', path: '/skills', icon: FaCogs },
  { name: 'Projects', path: '/projects', icon: FaProjectDiagram },
  { name: 'Contact Me', path: '/contact', icon: FaEnvelope },
];

const themes = ['lofi', 'dark', 'halloween', 'forest', 'dracula', 'night', 'coffee', 'winter'];

export default function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light',
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);

  const handleThemeChange = (e) => setTheme(e.target.value);
  const toggleThemeMenu = () => setThemeMenuOpen(!themeMenuOpen);

  return (
    <div>
      <header className="fixed w-full bg-base-300 shadow-xl inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between h-16 px-4 lg:px-8" aria-label="Global">
          <div className="flex items-center lg:flex-1">
            <Link to="/" className="text-lg font-bold text-primary">
              Jay Patrick Cano
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2"
              onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 items-center">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-sm font-semibold leading-6 cursor-pointer w-fit flex items-center text-gray-600 hover:text-primary transition-transform duration-300 hover:scale-105">
                <item.icon className="mr-2 h-5 w-5" />
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary transform scale-x-100 transition-transform duration-300 origin-left"></span>
                )}
              </Link>
            ))}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50 transition-opacity" />
          <Dialog.Panel
            className={`fixed inset-y-0 right-0 z-50 w-2/3 overflow-y-auto backdrop-brightness-90 backdrop-blur-2xl bg-base-100 px-6 py-6 sm:max-w-sm transform transition-all duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="rounded-md p-2"
                onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-300">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 text-base-600 hover:bg-base-300 ${location.pathname === item.path ? 'bg-primary text-white' : 'text-gray-600'}`}
                      onClick={() => setMobileMenuOpen(false)}>
                      <div className="flex items-center">
                        <item.icon className="mr-3 h-5 w-5" />
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="fixed right-0 top-[35%] transform -translate-y-1/2 z-50">
        <button
          className="bg-base-300 p-2 rounded-l-md shadow-lg flex items-center transition-transform duration-300"
          style={{ transform: themeMenuOpen ? 'translateX(-100%)' : 'translateX(0)' }}
          onClick={toggleThemeMenu}>
          {themeMenuOpen ? (
            <ChevronRightIcon className="w-5 h-5 text-base-500" />
          ) : (
            <ChevronLeftIcon className="w-5 h-5 text-base-500" />
          )}
        </button>
        <div
          className={`absolute right-0 mt-4 transition-all duration-300 ${themeMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
          <div className="bg-base-100 shadow-lg p-4 rounded-l-md overflow-y-auto h-64 w-32 border border-base-300">
            <h2 className="text-lg font-semibold mb-2">Themes</h2>
            <div className="flex flex-col gap-2">
              {themes.map((themeOption) => (
                <label key={themeOption} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="theme"
                    value={themeOption}
                    checked={theme === themeOption}
                    onChange={handleThemeChange}
                    className="hidden"
                  />
                  <div
                    className={`w-6 h-6 border-2 rounded-full ${theme === themeOption ? 'bg-primary border-primary' : 'border-base-300'} flex-shrink-0 flex items-center justify-center`}>
                    {theme === themeOption && <div className="w-3 h-3 bg-white rounded-full"></div>}
                  </div>
                  <span className="ml-2 text-sm">
                    {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Space for Navbar */}
      <div className="h-16 lg:h-10"></div>
    </div>
  );
}
