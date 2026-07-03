import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/config";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
// import { Experience } from "@/components/sections/experience"; // hidden — uncomment to restore
// import { Contact } from "@/components/sections/contact"; // hidden — uncomment to restore

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const l = locale as Locale;
  const dict = await getDictionary(l);

  return (
    <>
      <Hero dict={dict.hero} locale={l} />
      <About dict={dict.about} />
      <Skills dict={dict.skills} locale={l} />
      <Projects dict={dict.projects} locale={l} />
      {/* Experience section hidden — uncomment the import above and this line to restore */}
      {/* <Experience dict={dict.experience} locale={l} /> */}
      {/* Contact section hidden — uncomment the import above and this line to restore */}
      {/* <Contact dict={dict.contact} /> */}
    </>
  );
}
