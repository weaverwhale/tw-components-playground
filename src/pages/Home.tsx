import { Space } from "@weaverwhale/tw-components";
import MantineHero from "@/components/mantine/MantineHero";
import MantineCarousel from "@/components/mantine/MantineCarousel";
import ShopifyMediaCard from "@/components/shopify/ShopifyMediaCard";

export default function Home() {
  return (
    <>
      <MantineHero />
      <div className="max-width">
        <Space h="md" />
        <MantineCarousel />
        <Space h="md" />
        <ShopifyMediaCard />
        <Space h="md" />
      </div>
    </>
  );
}
