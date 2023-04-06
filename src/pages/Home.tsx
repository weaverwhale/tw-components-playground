import { Space } from "@weaverwhale/tw-components";
import MantineHero from "@/components/mantine/MantineHero";
import MantineCarousel from "@/components/mantine/MantineCarousel";

export default function Home() {
  return (
    <>
      <MantineHero />
      <div className="max-width">
        <MantineCarousel />
        <Space h="md" />
      </div>
    </>
  );
}
