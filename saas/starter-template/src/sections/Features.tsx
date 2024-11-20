import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg"
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg"


const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return(
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-center text-6xl font-medium mt-6">
                    Where power meets <span className="text-lime-400">simplicity</span>
                </h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8"> 
                    <FeatureCard title="Real-time Collaboration" description="Work with others in real-time with conflict-free editing." className="col-span-1">
                        <div className="flex aspect-video items-center justify-center">
                            <Avatar className="z-40">
                                <Image src={avatar1} alt="Ashwin Santiago" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-30">
                                <Image src={avatar2} alt="lula-myers" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-20">
                                <Image src={avatar3} alt="florence" className="rounded-full"/>
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent">
                                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span className="size-1.5 rounded-full bg-white inline-flex" key={i}></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>
                    <FeatureCard title="KeyBoard Quick Actions" description="Access your favorite tools with a single keystroke." className="cols-span-2">
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <Key className="w-28">shift</Key>
                            <Key>alt</Key>
                            <Key>C</Key>
                        </div>
                        
                    </FeatureCard>
                    <FeatureCard title="Interactive Prototyping" description="Engage your audience with interactive prototypes.">
                        <div className="flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/15">
                                We acheived <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">incredible</span> growth this time.</p>
                        </div>
                    </FeatureCard>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature, index) => (
                        <div className="bg-neutral-900 border-white/10 inline-flex px-3 py-1.5 md:py-2 items-center justify-center rounded-2xl gap-3" key={index}>
                            <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl">&#10038;</span>
                            <span className="font-medium">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
