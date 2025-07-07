export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last updated: October 26, 2024
          </p>
        </div>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="font-headline text-2xl text-foreground font-bold pt-4">1. Terms</h2>
            <p>By accessing the website at Campus Companion, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>

            <h2 className="font-headline text-2xl text-foreground font-bold pt-4">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Campus Companion's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc list-inside pl-4 space-y-2">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on Campus Companion's website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Campus Companion at any time.</p>

            <h2 className="font-headline text-2xl text-foreground font-bold pt-4">3. Disclaimer</h2>
            <p>The materials on Campus Companion's website are provided on an 'as is' basis. Campus Companion makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            
            <h2 className="font-headline text-2xl text-foreground font-bold pt-4">4. Limitations</h2>
            <p>In no event shall Campus Companion or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Campus Companion's website, even if Campus Companion or a Campus Companion authorized representative has been notified orally or in writing of the possibility of such damage.</p>

            <h2 className="font-headline text-2xl text-foreground font-bold pt-4">5. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of the land and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        </div>
      </div>
    </div>
  );
}
