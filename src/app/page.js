import Layout from "@/layouts/Layout";
import Image from "next/image";
import SectionText from "@/components/molecules/SectionText";
import BtnHome from "@/components/molecules/BtnHome";
import BtnSocial from "@/components/molecules/BtnSocial";
import {
  SlideFromLeft,
  SlideFromRight,
}
  from "@/components/animations/AnimatedComponents";

export default function Home() {
  return (
    <Layout>
      <section id="profile" className="pt-30 min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-4 md:px-10 py-12 bg-gradient-to-br from-slate-800 via-[#0081FB] to-indigo-900">
        <SlideFromLeft delay={1.5}>
          <div className="flex-shrink-0">
            <Image
              src="/images/fotoProfile.jpg"
              alt="fotoProfile"
              width={300}
              height={300}
              className="rounded-full object-cover w-60 h-60 md:w-[300px] md:h-[300px]"
            />
          </div>
        </SlideFromLeft>

        <SlideFromRight delay={2.5}>
          <div className="text-center md:text-left max-w-xl">
            <SectionText />
            <BtnHome />
            <BtnSocial />
          </div>
        </SlideFromRight>
      </section>
    </Layout>
  );
}
