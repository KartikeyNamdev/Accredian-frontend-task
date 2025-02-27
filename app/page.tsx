"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import Button from "./components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordian";
import FormDialog from "./components/ui/dialog";

export default function ReferEarn() {
  // const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-primary">
                accredian
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/refer" className="text-primary">
                Refer
              </Link>
              <Link href="/benefits" className="text-primary">
                Benefits
              </Link>
              <Link href="/faq" className="text-primary">
                FAQs
              </Link>
              <Link href="/support" className="text-primary">
                Support
              </Link>
              <FormDialog />
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h1 className="text-4xl text-gray-900 font-bold mb-4">
                Let us Learn & Earn
              </h1>
              <p className="text-lg mb-6 text-gray-700">
                Get a chance to earn up to ₹ 15,000
              </p>
              <FormDialog />
            </div>
            <div>
              <Image
                src="/1.png"
                alt="Refer and Earn"
                width={600}
                height={400}
                className="w-full animate-bounce object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* How to Refer Section */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-gray-700 font-semibold text-center mb-12">
            How Do I <span className="text-primary">Refer</span>?
          </h2>
          <div className="grid md:grid-cols-3 text-gray-700 gap-8">
            {[
              {
                icon: "👥",
                text: "Submit referrals using the referral form with details",
              },
              {
                icon: "📝",
                text: "Get rewards once your referral joins a program",
              },
              {
                icon: "💰",
                text: "Multiply the prize x times if they refer people",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 text-center relative shadow-sm"
              >
                <div className="text-3xl mb-4">{step.icon}</div>
                <p className="text-sm">{step.text}</p>
                {index < 2 && (
                  <ChevronRight className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-8 text-gray-400">
            What Are The <span className="text-primary">Referral Benefits</span>
            ?
          </h2>
          <div className="text-gray-600 grid md:grid-cols-4 gap-8">
            <div className="bg-white shadow rounded-lg p-4">
              <div className="space-y-2">
                <div className="font-semibold flex items-center text-gray-600">
                  ALL PROGRAMS
                  <ChevronDown className="ml-2 h-4 w-4" />
                </div>
                <div className="space-y-1 text-sm ">
                  <p className="border-b-2">Product Management</p>
                  <p className="border-b-2">Business Management</p>
                  <p className="border-b-2">Fintech</p>
                  <p className="border-b-2">Design Management</p>
                  <p className="border-b-2">Data Science</p>
                  {/* <p className="border-b-2">Di TRANSFORMATION</p> */}
                  <p>Business Analytics</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Programs
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Referrer Bonus
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Referee Bonus
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      {
                        name: "Professional Certificate Program in Product Management",
                        referrer: "₹7,000",
                        referee: "₹5,000",
                      },
                      {
                        name: "PG Certificate Program in Strategic Product Management",
                        referrer: "₹10,000",
                        referee: "₹7,500",
                      },
                      {
                        name: "Executive Program in Data-Driven Product Management",
                        referrer: "₹10,000",
                        referee: "₹7,500",
                      },
                    ].map((program, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm">{program.name}</td>
                        <td className="px-6 py-4 text-sm text-right">
                          {program.referrer}
                        </td>
                        <td className="px-6 py-4 text-sm text-right">
                          {program.referee}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-500 text-center mb-8">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <Accordion type="single" className="text-gray-500 max-w-2xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Do I need to have prior Product Management and Project
                Management experience to avail of the program?
              </AccordionTrigger>
              <AccordionContent>
                The program is designed to cater to a wide range of experience
                levels. Whether you&aposre a beginner or have some experience,
                the program will provide valuable insights and skills.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What is the minimum system configuration required?
              </AccordionTrigger>
              <AccordionContent>
                A stable internet connection and a modern web browser are the
                basic requirements. Specific technical requirements will be
                provided upon enrollment.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Want to delve deeper into the program?
              </h3>
              <p className="text-primary-foreground">
                Share your details to receive expert insights from our
                counselors!
              </p>
            </div>
            <Button className="mt-4 md:mt-0 whitespace-nowrap">
              Get in touch →
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm">
                <li>Data Science & AI</li>
                <li>Product Management</li>
                <li>Business Analytics</li>
                <li>Digital Transformation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: info@accredian.com</li>
                <li>Phone: +1 234 567 890</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Accredian</h4>
              <ul className="space-y-2 text-sm">
                <li>About</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
            © 2024 Accredian. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
