import { getDictionary } from "@/src/lib/getDictionaries";
import DiscoveryGrid from "../components/home/discovery-grid";
import Hero from "../components/home/hero";
import HolidayCalendar from "../components/home/holiday-calendar";
import ServiceCarousel from "../components/home/service-carousel";
import TeamHighlight from "../components/home/team-highlight";
import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar locale={locale} variant="overlay" />
      <Hero locale={locale}  />
      <ServiceCarousel  />
      <HolidayCalendar locale={locale} />
      <DiscoveryGrid  />
      <TeamHighlight />
      <Footer locale={locale} />
    </>
  );
}
