'use client';

import Image from 'next/image';

type NavbarProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const tabs = ['Home', 'About', 'Services', 'Products', 'Careers'];

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] flex justify-center py-4">
      <div 
        className="flex items-center justify-between bg-[#0a0a0a] rounded-[20px] p-[10px]" 
        style={{ width: '1416px', height: '90px' }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo-white.png"
            alt="ShuttleLabs Logo"
            width={50}
            height={50}
            priority
            className="object-contain"
          />
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`text-sm font-medium transition-colors relative ${
                activeTab === tab
                  ? 'text-[#A196F1]'
                  : 'text-[#FFFFFF] hover:text-[#A196F1]'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute -bottom-[14px] left-0 right-0 h-[2px] bg-[#A196F1]" />
              )}
            </button>
          ))}
        </div>

        {/* Contact Button */}
        <button 
          className="bg-[#A196F1] hover:bg-[#8B7DE0] text-white text-sm font-medium transition-colors rounded-[24px] p-[5px]"
          style={{ width: '166px', height: '50px' }}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
}
