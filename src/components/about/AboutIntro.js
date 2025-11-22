import React from 'react';
import {motion} from 'framer-motion';

export default function AboutIntro() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left side: Content */}
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Local Roots, <span className="text-red-600">Expanding Vision</span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            From its roots in Coimbatore, growth happened by being near and dear to every customer it
                            served. Today, Skylink provides top-class fiber internet in all corners of Coimbatore,
                            Tiruppur,
                            Erode, and its surroundings.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our focus lies in reliability, honest service, and support that feels
                            personal. Anyone who chooses Skylink chooses a local team that takes their connection
                            seriously.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our objective is straightforward: strong networks, clear plans, quick resolution, and
                            staying
                            accountable. The cities we serve are the cities we live in, and every new connection feels
                            like an
                            extension of our own community.
                        </p>
                    </motion.div>

                    {/* Right side: Image with frame effect */}
                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        viewport={{once: true}}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent z-10"></div>
                            <img
                                src="/assets/about-company-image-1.JPG"
                                alt="Skylink Office"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-100 rounded-xl -z-10"></div>
                        <div
                            className="absolute -top-6 -left-6 w-32 h-32 border-2 border-red-200 rounded-xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}