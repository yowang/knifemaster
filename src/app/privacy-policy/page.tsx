import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Knife Master",
  description: "Privacy Policy for KnifeMaster.org",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <header className="bg-[#1a1a1a] border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <span className="text-xl">🔪</span>
            <span className="font-bold text-white">Knife<span className="text-[#dc2626]">Master</span></span>
          </Link>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-10 prose prose-invert">
        <h1>Privacy Policy</h1>
        <p><em>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</em></p>
        <p>KnifeMaster.org ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website.</p>

        <h2>Information We Collect</h2>
        <p>We collect information you provide directly to us (such as through contact forms) and information collected automatically when you visit our site, including:</p>
        <ul>
          <li>Log data (IP address, browser type, pages visited, time spent)</li>
          <li>Device information (hardware model, operating system, unique device identifiers)</li>
          <li>Usage data (how you interact with our website and games)</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our website and services</li>
          <li>Analyze usage patterns to enhance user experience</li>
          <li>Monitor and analyze trends and usage</li>
          <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Cookies Policy</h2>
        <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.</p>
        <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.</p>
        <p>Types of cookies we use:</p>
        <ul>
          <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
          <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
          <li><strong>Preference cookies:</strong> Enable the website to remember your preferences</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>We use the following third-party services that may collect information:</p>
        <ul>
          <li><strong>Google Analytics:</strong> We use Google Analytics to analyze website traffic and user behavior. Google Analytics collects information such as how often users visit the site, what pages they visit, and what other sites they used prior to coming to our site. Google's ability to use and share information collected by Google Analytics about your visits to our site is restricted by the Google Analytics Terms of Service. You can opt out of Google Analytics by installing the Google Analytics opt-out browser add-on.</li>
          <li><strong>GameDistribution:</strong> Our game content is provided through GameDistribution (gamedistribution.com). When you play games on our site, GameDistribution may collect certain data according to their own privacy policy.</li>
        </ul>

        <h2>Data Retention</h2>
        <p>We retain personal data for as long as necessary to provide our services and comply with our legal obligations. Analytics data is typically retained for 26 months.</p>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
        <ul>
          <li>The right to access personal data we hold about you</li>
          <li>The right to request correction of inaccurate data</li>
          <li>The right to request deletion of your data</li>
          <li>The right to opt out of certain data processing activities</li>
        </ul>

        <h2>Children's Privacy</h2>
        <p>Our service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal data from a child under 13, we will take steps to delete such information.</p>

        <h2>Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at: <strong>privacy@knifemaster.org</strong></p>
      </main>
      <footer className="border-t border-gray-800 mt-10">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-300">← Back to Knife Master</Link>
        </div>
      </footer>
    </div>
  );
}
