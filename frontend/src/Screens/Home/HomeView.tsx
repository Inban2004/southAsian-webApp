import AnnouncementBar from '../../Components/AnnouncementBar/AnnouncementBar';
import NavBar from '../../Components/NavBar/NavBar';
import HeroSlider from '../../Components/HeroSlider/HeroSlider';
import TrustStrip from '../../Components/TrustStrip/TrustStrip';
import BrandStorySection from '../../Components/BrandStorySection/BrandStorySection';
import LimitedTimeOfferSection from '../../Components/LimitedTimeOfferSection/LimitedTimeOfferSection';
import Footer from '../../Components/Footer/Footer';
import CategoryTile from '../../Components/CategoryTile/CategoryTile';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { Colours } from '../../Assets/Colours';
import { useHomeVM } from './useHomeVM';

export default function HomeView() {
  const { categories, bestsellers, newArrivals, loading, error, onAddToCart } = useHomeVM();

  return (
    <div style={{ background: Colours.neutralCream, minHeight: '100vh' }}>
      <AnnouncementBar />
      <NavBar />
      <HeroSlider />
      <TrustStrip />

      {/* GAP: Regional Specials Section (Figma node 1:2584) not pulled yet —
          Figma MCP rate limit hit before we got to it. */}

      <section style={{ padding: '80px 64px', display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center' }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: '36px', color: Colours.primary900, margin: 0 }}>
          Shop the Everyday Pantry
        </h2>
        {loading && <p>Loading categories…</p>}
        {error && <p role="alert">{error}</p>}
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map((category) => (
            <CategoryTile key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section style={{ background: Colours.neutralWhite, padding: '80px 64px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: '36px', color: Colours.primary900, margin: 0 }}>
          Bestsellers This Week
        </h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      <BrandStorySection />

      <section style={{ padding: '80px 64px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: '36px', color: Colours.primary900, margin: 0 }}>
          New Arrivals
        </h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      <LimitedTimeOfferSection />

      {/* GAP: Why Choose Us Section (1:2963), Testimonials Section (1:2986),
          Newsletter Section (1:3036) not pulled yet — same rate limit. */}

      {/* Footer below matches the standalone "Footer" component-library
          symbol, not yet verified against the real "Footer Section"
          instance (1:3046) — also blocked by the rate limit. */}
      <Footer />
    </div>
  );
}
