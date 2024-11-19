import Button from "@/components/Button";
import designExampleImage from "@/assets/images/design-example-1.png";
import designExampleImage2 from "@/assets/images/design-example-2.png";
import Image from "next/image";

import Pointer from "@/components/pointer";

export default function Hero() {
    return(
    <section className="py-24 overflow-x-clip">
        <div className="container relative">
            <div className="absolute -left-32 top-16 hidden lg:block">
                <Image src={designExampleImage} alt="Design Example 1" />
            </div>
            <div className="absolute -right-64 -top-16 hidden lg:block">
                <Image src={designExampleImage2} alt="Design Example 2" />
            </div>

            <div className="absolute left-40 lg:top-80 md: top-36">
                <Pointer name="Andrew" color="red" />
            </div>

            <div className="absolute right-40 -top-10">
                <Pointer name="Gwen" color="blue" />
            </div>
            <div className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full text-sm font-medium text-black">
                    ✨Seeing myself grow each project
                </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-medium text-center mt-6">
                Building my way to build frontends perfectly
            </h1>

            <p className="text-center text-xl max-w-2xl mx-auto text-white/60 mt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. 
            </p>

            <form className="flex border border-white/15 rounded-full py-2 mt-8 lg:max-w-2xl mx-auto">
                <input 
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent px-4 md:flex-1 w-full"
                />
                <Button type="submit" variant="primary" size="sm"className="whitespace-nowrap mr-5">
                    Go
                </Button>
            </form>

         </div>

        
    </section>)
}
