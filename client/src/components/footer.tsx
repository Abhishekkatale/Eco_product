import { Leaf, Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#a8e6cf] via-[#56ab91] to-[#379683] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="text-white h-6 w-6" />
              <span className="text-2xl font-bold text-white">GreenCart</span>
            </div>
            <p className="text-gray-100 mb-4">
              Making sustainable living accessible and affordable for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#c3f8e3] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-[#c3f8e3] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-[#c3f8e3] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-100 hover:text-white transition-colors">Reusable Items</a></li>
              <li><a href="#" className="text-gray-100 hover:text-white transition-colors">Organic Products</a></li>
              <li><a href="#" className="text-gray-100 hover:text-white transition-colors">Plastic-Free</a></li>
              <li><a href="#" className="text-gray-100 hover:text-white transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-100 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-gray-100 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Newsletter</h4>
            <p className="text-gray-100 mb-4">Stay updated on new sustainable products</p>

            <div className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-r-none text-eco-text text-gray-800"
              />
              <Button className="bg-white text-[#379683] rounded-l-none hover:bg-[#c3f8e3] transition-colors">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 mt-8 pt-8 text-center text-gray-100">
          <p>&copy; 2025 GreenCart. All rights reserved. | Built with sustainability in mind.</p>
        </div>
      </div>
    </footer>
  );
}
