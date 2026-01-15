import React, { useState, useEffect } from 'react';
import { Download, Mail, MessageCircle, Github, ChevronRight, Circle } from 'lucide-react';

export default function App() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                            <Circle className="w-2 h-2 fill-blue-500 text-blue-500" />
                            <Circle className="w-2 h-2 fill-purple-500 text-purple-500" />
                            <Circle className="w-2 h-2 fill-cyan-500 text-cyan-500" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">BUBBLES</span>
                    </div>
                    <a
                        href="#download"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('download').scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-6 py-2.5 bg-white text-black font-medium hover:bg-gray-200 transition-all duration-300 text-sm cursor-pointer"
                    >
                        DOWNLOAD
                    </a>
                </div>
            </header>

            {/* Hero Video Section - Full Width & Height */}
            <section className="relative h-screen w-full pt-20">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-purple-600/20 to-black/40"></div>
                <div className="relative h-full flex flex-col">
                    {/* Title Area */}
                    <div className="px-6 py-12 max-w-7xl mx-auto w-full">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            Bubbles
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
                            A browser where every window runs in its own isolated identity
                        </p>
                        <p className="text-base md:text-lg text-gray-400 max-w-3xl mt-4">
                            Bubbles is an early-stage Chromium-based browser built around one simple idea: each bubble is fully isolated, with its own identity, storage, and session.
                        </p>
                        <div className="flex gap-6 mt-6 text-sm text-gray-500 font-mono">
                            <span>NO PROFILES</span>
                            <span>NO CONTAINERS</span>
                            <span>NO HACKS</span>
                        </div>
                    </div>

                    {/* Video Container */}
                    <div className="flex-1 px-6 pb-12 max-w-7xl mx-auto w-full">
                        <div
                            className="
      relative w-full bg-black border border-white/10 overflow-hidden
      h-[260px]
      sm:h-[340px]
      md:h-[420px]
      lg:h-[480px]
    "
                        >
                            <video
                                src="https://fyndd-ai-assistant.s3.ap-south-1.amazonaws.com/Timeline+1.mov"
                                className="w-full h-full object-contain"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                            />
                        </div>
                    </div>



                </div>
            </section>

            {/* Why Bubbles */}
            <section className="py-24 px-6 border-t border-white/10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Bubbles exists</h2>
                    <p className="text-lg text-gray-400 mb-12 max-w-3xl">Modern browsers were not designed for people who:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            'Manage multiple accounts on the same sites',
                            'Switch between personal, work, and client identities',
                            'Test products, ads, or flows repeatedly',
                            'Want clean isolation without friction'
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                                <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <p className="text-gray-300">{item}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-xl font-medium mt-12 text-white">Bubbles makes this the default.</p>
                </div>
            </section>

            {/* What is a Bubble */}
            <section className="py-24 px-6 bg-white/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What is a Bubble?</h2>
                    <p className="text-lg text-gray-400 mb-12">A bubble is an isolated browser environment with:</p>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            { title: 'Own cookies & storage', desc: 'Complete data isolation' },
                            { title: 'Unique identity', desc: 'Separate fingerprint per bubble' },
                            { title: 'Zero session leakage', desc: 'No cross-contamination' }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 bg-black border border-white/10 hover:border-white/20 transition-all duration-300">
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20">
                        <p className="text-lg text-gray-200">You can log into the same website multiple times, in parallel, without conflicts.</p>
                    </div>
                </div>
            </section>

            {/* What Bubbles Is/Isn't */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">What Bubbles is (and isn't)</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-white/5 border border-white/10">
                            <h3 className="text-xl font-bold mb-6 text-green-400">Bubbles is:</h3>
                            <ul className="space-y-4">
                                {[
                                    'A focused experiment around browser isolation',
                                    'Built to validate a fundamentally different browsing model',
                                    'Fast, lightweight, and straightforward'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                                        <span className="text-green-400 mt-1">+</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-8 bg-white/5 border border-white/10">
                            <h3 className="text-xl font-bold mb-6 text-orange-400">Bubbles is not yet:</h3>
                            <ul className="space-y-4">
                                {[
                                    'A fully polished UI',
                                    'Packed with shortcuts and power-user features',
                                    'Trying to replace your main browser (yet)'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                                        <span className="text-orange-400 mt-1">−</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="text-gray-400 mt-8 text-lg">We are intentionally starting with the core idea first.</p>
                </div>
            </section>

            {/* Security Notice */}
            <section className="py-24 px-6 bg-yellow-500/5">
                <div className="max-w-6xl mx-auto">
                    <div className="border-l-4 border-yellow-500 pl-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400">Early-stage notice</h2>
                        <p className="text-lg text-gray-300 mb-8">Bubbles is a new and unsigned application.</p>

                        <div className="space-y-6 mb-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-white">On first install:</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li>• macOS or Windows may show a security warning</li>
                                    <li>• You may see extra verification prompts</li>
                                    <li>• Some websites may require one-time re-verification</li>
                                </ul>
                            </div>

                            <p className="text-gray-300">This is normal for new browsers and happens only once.</p>
                        </div>

                        <div className="bg-black/50 border border-white/10 p-8 mb-8">
                            <h3 className="text-lg font-semibold mb-3 text-white">Why you might see security warnings</h3>
                            <p className="text-gray-400 mb-3">Bubbles is:</p>
                            <ul className="space-y-2 text-gray-400 mb-4">
                                <li>• Not yet code-signed</li>
                                <li>• Not distributed via an app store</li>
                                <li>• Built independently</li>
                            </ul>
                            <p className="text-white font-semibold">This does not mean the app is unsafe.</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-8">
                            <p className="text-gray-300 font-medium mb-4">You can safely continue by following the system prompt:</p>
                            <div className="space-y-2 text-gray-400 font-mono text-sm">
                                <p><span className="text-white">macOS:</span> Privacy & Security → Open Anyway</p>
                                <p><span className="text-white">Windows:</span> More info → Run anyway</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Coming */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What's coming next</h2>
                    <p className="text-lg text-gray-400 mb-12">We are actively working on:</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            'Keyboard shortcuts',
                            'Better UI & visual polish',
                            'Devtools toggles',
                            'Performance improvements',
                            'Smoother onboarding'
                        ].map((item, idx) => (
                            <div key={idx} className="p-4 bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-3">
                                <ChevronRight className="w-4 h-4 text-purple-400" />
                                <span className="text-gray-300">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-400 mt-8 text-lg">Feedback from early users directly shapes what we build next.</p>
                </div>
            </section>

            {/* Who Should Try */}
            <section className="py-24 px-6 bg-white/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Who should try Bubbles now?</h2>
                    <p className="text-lg text-gray-400 mb-12">Bubbles is perfect for:</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                        {[
                            'Founders & builders',
                            'Marketers & growth teams',
                            'QA testers',
                            'Developers',
                            'Multiple account managers'
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 bg-black border border-white/10 hover:border-white/20 transition-all duration-300">
                                <p className="text-gray-300">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20">
                        <p className="text-xl text-gray-200">If you live in multiple browser sessions, Bubbles will feel immediately different.</p>
                    </div>
                </div>
            </section>

            {/* Download Section */}
            <section id="download" className="py-24 px-6 border-t border-white/10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Download Bubbles</h2>
                        <p className="text-lg text-gray-400">Current release: <span className="text-blue-400 font-mono">v0.1.0</span> (early access)</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <a href="https://github.com/ajinkyashivpure/Bubble/releases/download/v0.1.0/Bubbles-0.1.0-arm64.dmg" className="group bg-white/5 border border-white/10 hover:border-white/30 p-12 transition-all duration-300 hover:bg-white/10">
                            <h3 className="text-2xl font-bold mb-2">macOS</h3>
                            <p className="text-gray-400 mb-6">Apple Silicon</p>
                            <div className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all duration-300">
                                <Download className="w-5 h-5" />
                                <span>DOWNLOAD</span>
                            </div>
                        </a>
                        <a href="#" className="group bg-white/5 border border-white/10 hover:border-white/30 p-12 transition-all duration-300 hover:bg-white/10">
                            <h3 className="text-2xl font-bold mb-2">Windows</h3>
                            <p className="text-gray-400 mb-6">64-bit</p>
                            <div className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all duration-300">
                                <Download className="w-5 h-5" />
                                <span>DOWNLOAD</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Feedback Section */}
            <section className="py-24 px-6 bg-white/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Feedback & community</h2>
                    <p className="text-lg text-gray-400 mb-8">Bubbles is built in public. If something feels off — or clicks instantly — we want to know.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {['Feature requests', 'Bugs', 'Use cases', '"This changed how I browse" moments'].map((item, idx) => (
                            <div key={idx} className="p-4 bg-black border border-white/10 text-center">
                                <p className="text-gray-300 text-sm">{item}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-xl text-white">Every message matters at this stage.</p>
                </div>
            </section>

            {/* Final Note */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Final note</h2>
                    <p className="text-lg text-gray-400 mb-8">Bubbles is not trying to be everything at once. It's trying to prove one idea — and prove it well.</p>
                    <div className="p-8 bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-500/30">
                        <p className="text-xl text-white">If isolated browsing matters to you, you're early — and welcome.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1">
                                <Circle className="w-2 h-2 fill-blue-500 text-blue-500" />
                                <Circle className="w-2 h-2 fill-purple-500 text-purple-500" />
                                <Circle className="w-2 h-2 fill-cyan-500 text-cyan-500" />
                            </div>
                            <span className="text-xl font-bold tracking-tight">BUBBLES</span>
                        </div>
                        <div className="flex gap-8">
                            <a href="mailto:bubbles.browse@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
                                <Mail className="w-5 h-5" />
                                <span>Email</span>
                            </a>
                            {/*<a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">*/}
                            {/*    <MessageCircle className="w-5 h-5" />*/}
                            {/*    <span>Feedback</span>*/}
                            {/*</a>*/}
                            {/*<a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">*/}
                            {/*    <Github className="w-5 h-5" />*/}
                            {/*    <span>GitHub</span>*/}
                            {/*</a>*/}
                        </div>
                    </div>
                    <div className="text-center text-gray-500 text-sm">
                        <p>© 2025 Bubbles Browser. Built for isolated browsing.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}