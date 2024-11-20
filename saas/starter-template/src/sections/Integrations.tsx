'use client'; 

import Tag from "@/components/Tag";
import IntegrationsColumn from "@/components/IntegrationsColumn";
import figmaIcon from '@/assets/images/figma-logo.svg'
import notionIcon from "@/assets/images/notion-logo.svg"
import slackIcon from "@/assets/images/slack-logo.svg"
import relumeIcon from "@/assets/images/relume-logo.svg"
import framerIcon from "@/assets/images/framer-logo.svg"
import githubIcon from "@/assets/images/github-logo.svg"

import { motion } from "framer-motion";

const integrations = [
    { name: "Figma", icon: figmaIcon, description: "Figma is a collaborative interface design tool." },
    { name: "Notion",icon: notionIcon, description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack", icon: slackIcon, description: "Slack is a powerful team communication platform." },
    { name: "Relume",icon: relumeIcon, description: "Relume is a no-code website builder and design system." },
    { name: "Framer",icon: framerIcon, description: "Framer is a professional website prototyping tool." },
    { name: "GitHub",icon: githubIcon, description: "GitHub is the leading platform for code collaboration." },
];

export type IntegrationType = typeof integrations;

export default function Integrations() {
    return <section className="py-24 overflow-hidden">
        {/* animate first IntegrationsColumn to silding down and the next one to slide up */}
        <motion.div className="container">
            <div className="grid lg:grid-cols-2 lg:items-center lg:gap-16">
                <div>
                    <Tag>Integrations</Tag>
                    <h2 className="text-6xl font-medium mt-6">
                        Plays well with <span className="text-lime-400">others</span>
                    </h2>
                    <p className="text-white/50 text-lg mt-2">
                        We work with your favorite tools to make your life easier. It is worth noting that we are not affiliated with any of these companies.
                    </p>
                </div>
                <div className="h-[400px] lg:h-[800px] overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_80%,transparent)]">
                    <motion.div 
                        initial={{ y: 0 }}
                        animate={{ 
                            y: [-800, 0]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear"
                        }}
                    >
                        <IntegrationsColumn integrations={[...integrations, ...integrations]} className="h-full"/>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ y: -400 }}
                        animate={{ 
                            y: [0, -800]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear"
                        }}
                    >
                        <IntegrationsColumn integrations={[...integrations, ...integrations].reverse()} className="hidden md:flex"/>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    </section>;
}
