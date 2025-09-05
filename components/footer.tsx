"use client"

import { TrafficCone, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <TrafficCone className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-white">Smart Traffic AI</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Revolutionizing urban mobility with AI-powered traffic optimization solutions. Building smarter cities for
              a sustainable future.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-400 hover:text-white transition text-left">About Us</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition text-left">Technology</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition text-left">Solutions</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition text-left">Contact</button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-400 hover:text-white transition text-left">Documentation</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition text-left">API Reference</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition text-left">Case Studies</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition text-left">Support</button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {currentYear} Smart Traffic AI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</button>
              <button className="text-gray-400 hover:text-white text-sm transition">Terms of Service</button>
              <button className="text-gray-400 hover:text-white text-sm transition">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
