import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Knife Master",
  description: "Terms of Service for KnifeMaster.org",
};

export default function TermsOfService() {
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
        <h1>Terms of Service</h1>
        <p><em>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</em></p>
        <p>Welcome to KnifeMaster.org. By accessing or using our website, you agree to be bound by these Terms of Service. Please read them carefully before using the site.</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using KnifeMaster.org, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website.</p>

        <h2>2. Use License</h2>
        <p>Permission is granted to temporarily access and use KnifeMaster.org for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul>
          <li>Modify or copy the materials on the website</li>
          <li>Use the materials for any commercial purpose or public display</li>
          <li>Attempt to decompile or reverse engineer any software contained on the website</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
        </ul>

        <h2>3. Game Content</h2>
        <p>The games available on KnifeMaster.org are provided through third-party game developers and distributors. We do not own or control the game content. By playing games on our website, you also agree to the terms of service of the respective game providers.</p>

        <h2>4. User Conduct</h2>
        <p>You agree to use KnifeMaster.org only for lawful purposes and in a manner that does not infringe the rights of others. You agree not to:</p>
        <ul>
          <li>Use the site in any way that violates applicable local, national, or international laws</li>
          <li>Attempt to gain unauthorized access to any portion of the website</li>
          <li>Use automated tools to scrape or download content from the website</li>
          <li>Interfere with or disrupt the integrity or performance of the website</li>
        </ul>

        <h2>5. Disclaimer</h2>
        <p>The materials on KnifeMaster.org are provided on an "as is" basis. KnifeMaster.org makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        <p>Further, KnifeMaster.org does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>

        <h2>6. Limitations</h2>
        <p>In no event shall KnifeMaster.org or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on KnifeMaster.org, even if KnifeMaster.org or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>

        <h2>7. Accuracy of Materials</h2>
        <p>The materials appearing on KnifeMaster.org could include technical, typographical, or photographic errors. KnifeMaster.org does not warrant that any of the materials on its website are accurate, complete, or current. KnifeMaster.org may make changes to the materials contained on its website at any time without notice.</p>

        <h2>8. Links</h2>
        <p>KnifeMaster.org has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by KnifeMaster.org of the site. Use of any such linked website is at the user's own risk.</p>

        <h2>9. Modifications</h2>
        <p>KnifeMaster.org may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these terms of service.</p>

        <h2>10. Governing Law</h2>
        <p>These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms of Service, please contact us at: <strong>legal@knifemaster.org</strong></p>
      </main>
      <footer className="border-t border-gray-800 mt-10">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-300">← Back to Knife Master</Link>
        </div>
      </footer>
    </div>
  );
}
