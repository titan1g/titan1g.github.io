"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RecruitmentBanner from "@/components/RecruitmentBanner";
import SheriffSection from "@/components/SheriffSection";
import ServiceCards from "@/components/ServiceCards";
import SocialSection from "@/components/SocialSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageTransition>
        <Hero />
        <AnimatedSection>
          <RecruitmentBanner />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <SheriffSection />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <ServiceCards />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <SocialSection />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <NewsSection />
        </AnimatedSection>
      </PageTransition>
      <Footer />
    </main>
  );
}
