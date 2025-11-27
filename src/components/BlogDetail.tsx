import { useEffect } from "react";
import { Calendar, Clock, User, Tag, ArrowRight, Share2 } from "lucide-react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function BlogDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Full Blog Data matching the Blog Page
  const blogPosts = [
    {
      id: 1,
      title: "5 Signs Your Shower is Leaking (And How to Fix It)",
      excerpt: "Spotting a leak early can save you thousands in structural repairs. Here are the tell-tale signs Perth homeowners miss.",
      readTime: "5 min read",
      date: "Oct 12, 2025",
      author: "James Wilson",
      category: "Maintenance Tips",
      image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1200&auto=format&fit=crop",
      content: `
        <p>A leaking shower might seem like a minor annoyance, but in Perth's coastal climate, it can quickly turn into a major structural headache. Water damage often happens silently behind the tiles, rotting timber frames and attracting termites before you even notice a puddle.</p>

        <h3>1. The Smell of Damp or Mustiness</h3>
        <p>If your bathroom smells earthy or musty even after a deep clean, water is likely trapped behind the walls. This is often the first sign of a waterproofing failure.</p>

        <h3>2. Peeling Paint on Adjacent Walls</h3>
        <p>Check the walls sharing a stud with your shower. If the paint is bubbling or flaking near the skirting boards, water is wicking through the wall cavity.</p>

        <h3>3. Cracked or Missing Grout</h3>
        <p>Grout isn't just aesthetic; it keeps water out. If you see cracks or gaps, water is getting in every time you shower. Cement grout is particularly prone to this in WA homes due to thermal expansion.</p>

        <h3>4. Silicone Pulling Away</h3>
        <p>Silicone sealant around the floor-to-wall junction should be tight. If it's peeling, black with mould, or missing chunks, your primary seal is compromised.</p>

        <h3>5. Discoloured Tiles</h3>
        <p>If your white tiles are turning slightly grey or yellow at the bottom, they might be absorbing water from behind. This is known as "crazing" or moisture uptake.</p>

        <h3>How to Fix It Without Retiling</h3>
        <p>You don't always need to rip up the bathroom. If the structural damage isn't severe, our <strong>Epoxy Grout Injection</strong> system can reseal the shower without removing a single tile. We remove the old, failed grout and replace it with a waterproof epoxy resin that lasts a lifetime.</p>
      `
    },
    {
      id: 2,
      title: "Epoxy vs. Cement Grout: What's Best for WA Homes?",
      excerpt: "Why traditional cement grout fails in coastal climates and why epoxy is the superior choice for longevity.",
      readTime: "7 min read",
      date: "Sep 28, 2025",
      author: "Sarah Jenkins",
      category: "Expert Advice",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop",
      content: `
        <p>When renovating or repairing a bathroom in Western Australia, the choice of grout is critical. While cement grout has been the standard for decades, it is fundamentally flawed for wet areas. Enter Epoxy Grout: the gold standard for modern waterproofing.</p>

        <h3>The Problem with Cement Grout</h3>
        <p>Cement is porous. Think of it like a hard sponge. It absorbs water, dirt, and soap scum. Over time, it cracks due to building movement (common on Perth's sandy soil) and allows water to penetrate the waterproof membrane below.</p>

        <h3>Why Epoxy is Superior</h3>
        <p>Epoxy grout is made from two-part resins (epoxy and hardener) mixed with filler powder. It cures into a plastic-like material that is:</p>
        <ul>
          <li><strong>100% Waterproof:</strong> It does not absorb water.</li>
          <li><strong>Stain Proof:</strong> Dirt sits on top and wipes off easily.</li>
          <li><strong>Flexible:</strong> It handles thermal expansion better than cement.</li>
          <li><strong>Chemical Resistant:</strong> You can use stronger cleaners without eroding it.</li>
        </ul>

        <h3>Is it Worth the Cost?</h3>
        <p>Epoxy installation is more labour-intensive and the material costs more. However, cement grout often needs replacing every 3-5 years in high-use showers. Epoxy lasts 15-20+ years. For a "do it once, do it right" approach, epoxy is the clear winner for WA homes.</p>
      `
    },
    {
      id: 3,
      title: "The Hidden Dangers of Balcony Leaks",
      excerpt: "Waterproofing failure on balconies is a major issue in Perth. Learn how to protect your outdoor living space.",
      readTime: "6 min read",
      date: "Sep 15, 2025",
      author: "David Thompson",
      category: "Safety",
      image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=1200&auto=format&fit=crop",
      content: `
        <p>Balconies are a fantastic feature of Perth coastal living, but they are also the most common source of major structural water damage in multi-storey homes.</p>

        <h3>The "Efflorescence" Warning</h3>
        <p>Have you seen white, chalky powder running down the front of your balcony or coming out of the grout lines? That is efflorescence. It means water is trapped under your tiles, dissolving salts in the concrete, and pushing them to the surface. It is the number one sign your waterproofing has failed.</p>

        <h3>Structural Risks</h3>
        <p>Unlike a shower leak which damages a vanity, a balcony leak rots structural beams. If your balcony is timber-framed, trapped moisture can lead to collapse. In concrete balconies, it causes "concrete cancer" where the steel reinforcing rusts and expands, blowing apart the concrete.</p>

        <h3>The Solution: Positive Pressure Sealing</h3>
        <p>We use a specialized clear membrane system that can be applied over existing balcony tiles. It creates a seamless, flexible barrier that stops water ingress while allowing the substrate to breathe. For severe cases, we inject flexible epoxy into movement joints to handle the extreme heat expansion we experience in WA summers.</p>
      `
    },
    {
      id: 4,
      title: "Mould in Your Bathroom? Why Bleach Won't Fix It",
      excerpt: "Learn why bleach only masks the problem and how to permanently remove mould from your grout lines.",
      readTime: "4 min read",
      date: "Aug 10, 2025",
      author: "James Wilson",
      category: "Cleaning Myths",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
      content: `
        <p>It is a common household ritual: seeing black spots on the grout, spraying them with bleach, watching them fade, and feeling satisfied. But a week later, the mould is back. Why?</p>

        <h3>The Root of the Problem</h3>
        <p>Mould has roots, similar to a tree. When you spray bleach on porous cement grout, the chemical burns the "leaves" (the visible black part) off the surface. However, bleach has a high surface tension, meaning it cannot penetrate deep into the microscopic pores of the grout where the roots live.</p>

        <p>In fact, the water in the bleach solution feeds the roots, often causing the mould to grow back stronger and darker.</p>

        <h3>The Vinegar Solution</h3>
        <p>Believe it or not, <strong>white fermented vinegar</strong> (80% acetic acid) allows it to penetrate porous surfaces and kill the mould at the root. However, if your grout is old and porous, mould will keep returning.</p>

        <h3>The Permanent Fix</h3>
        <p>The only way to stop mould permanently is to remove the porous environment it lives in. By regrouting with <strong>Epoxy Grout</strong>, you create a non-porous surface that mould cannot stick to. It effectively "waterproofs" the gap between tiles, leaving mould with nowhere to hide.</p>
      `
    },
    {
      id: 5,
      title: "Top Bathroom Renovation Trends in Perth for 2025",
      excerpt: "From open showers to natural stone finishes, discover what's trending in WA bathroom design this year.",
      readTime: "5 min read",
      date: "Jul 22, 2025",
      author: "Sarah Jenkins",
      category: "Design Trends",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1200&auto=format&fit=crop",
      content: `
        <p>Perth bathrooms are moving away from the clinical all-white look and embracing warmth, texture, and connection to nature. Here is what we are seeing in 2025.</p>

        <h3>1. The Wet Room Layout</h3>
        <p>Removing the shower screen entirely (or using a single fluted glass panel) to create a large, open wet area. This requires impeccable waterproofing and gradient drainage, often utilizing strip drains.</p>

        <h3>2. Earthy Tones & Terracotta</h3>
        <p>Sand, terracotta, and eucalyptus greens are dominating the palette, reflecting our WA landscape. These warmer tones pair beautifully with brushed brass or gunmetal tapware.</p>

        <h3>3. Microcement & Tadelakt</h3>
        <p>Seamless wall finishes are gaining popularity over traditional tiles. They offer a grout-free, spa-like aesthetic. However, they require specialized maintenance.</p>

        <h3>4. Smart Showers</h3>
        <p>Digital temperature control and water-saving mist heads are becoming standard, helping Perth homeowners manage water usage without sacrificing luxury.</p>
      `
    },
    {
      id: 6,
      title: "How to Extend the Life of Your Waterproofing",
      excerpt: "Simple maintenance tips to ensure your new shower seal lasts for decades, not just years.",
      readTime: "4 min read",
      date: "Jun 05, 2025",
      author: "David Thompson",
      category: "Home Care",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop",
      content: `
        <p>You have invested in a professional reseal or renovation. Now, how do you make it last 20 years?</p>

        <h3>1. Ventilation is Key</h3>
        <p>Waterproofing membranes degrade faster when constantly subjected to high humidity. Ensure your exhaust fan continues running for 10 minutes after you shower to clear the moist air.</p>

        <h3>2. Avoid Harsh Chemicals</h3>
        <p>Avoid highly acidic cleaners (like hydrochloric acid based brick cleaners) or extremely high alkaline bleaches. pH neutral cleaners are best for preserving silicone seals and epoxy grout.</p>

        <h3>3. Check Your Silicones Annually</h3>
        <p>The "perimeter seal" (where the floor meets the wall) is the movement joint. As your house expands and contracts with the seasons, this seal stretches. Check it once a year for separation. If you catch a small gap early, you can patch it before water gets underneath.</p>
      `
    },
    {
      id: 7,
      title: "Rising Damp vs. Leaking Shower: How to Tell the Difference",
      excerpt: "Is the paint peeling because of the ground or your shower? We break down the key differences.",
      readTime: "6 min read",
      date: "May 18, 2025",
      author: "James Wilson",
      category: "Expert Advice",
      image: "https://images.unsplash.com/photo-1585565898606-d50d4f3b2361?q=80&w=1200&auto=format&fit=crop",
      content: `
        <p>Peeling paint on the other side of a bathroom wall is a classic sign of moisture. But is it coming from the ground up (Rising Damp) or the shower out (Lateral Damp)?</p>

        <h3>Rising Damp</h3>
        <ul>
          <li><strong>Source:</strong> Ground moisture wicking up through the brickwork.</li>
          <li><strong>Signs:</strong> Usually affects walls up to 1 meter high. Look for a "tide mark" of salt deposits. It happens on both internal and external walls.</li>
          <li><strong>Cause:</strong> Failed damp-proof course (DPC) in the brickwork.</li>
        </ul>

        <h3>Leaking Shower (Lateral Damp)</h3>
        <ul>
          <li><strong>Source:</strong> Shower water escaping through failed grout or membranes.</li>
          <li><strong>Signs:</strong> Can occur at any height, but often starts at the skirting board adjacent to the shower. It gets worse after heavy shower usage.</li>
          <li><strong>Cause:</strong> Cracked grout, failed silicone, or lack of waterproofing.</li>
        </ul>

        <p><strong>The Test:</strong> If the moisture levels drop when you stop using the shower for 48 hours, it is a shower leak. If it stays constant regardless of shower use, it is likely rising damp.</p>
      `
    },
    {
      id: 8,
      title: "Why Silicone Needs Replacing Every 3-5 Years",
      excerpt: "Silicone doesn't last forever. Here is why refreshing your perimeter seals is the cheapest insurance for your home.",
      readTime: "3 min read",
      date: "Apr 02, 2025",
      author: "Sarah Jenkins",
      category: "Maintenance Tips",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1200&auto=format&fit=crop",
      content: `
        <p>Silicone is the unsung hero of your bathroom. It covers the expansion joints where rigid tiles cannot go. However, it is an organic material that degrades.</p>

        <h3>Why it Fails</h3>
        <p>Over time, soaps, shampoos, and biofilm attack the silicone. It loses its elasticity and hardens. Once hard, the natural movement of your house causes it to pull away from the tile, creating a microscopic gap that capillary action pulls water into.</p>

        <h3>The "Black Mould" Signal</h3>
        <p>If your clear or white silicone turns black inside, the mould has grown into the rubber. You cannot clean this off. It is a sign the waterproof integrity is gone. Replacing silicone is a fast, affordable service that resets the clock on your waterproofing protection.</p>
      `
    }
  ];

  const post = blogPosts.find((p) => p.id === parseInt(id || "0"));

  // --- 404 STATE ---
  if (!post) {
    return (
      <div className="min-h-screen bg-sand-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-[2rem] p-12 text-center shadow-xl border border-ocean-50 max-w-lg">
          <div className="w-20 h-20 bg-sand-100 rounded-full flex items-center justify-center mx-auto mb-6">
             <Calendar className="w-10 h-10 text-charcoal-400" />
          </div>
          <h1 className="text-3xl font-bold text-ocean-900 mb-4 font-display">
            Article Not Found
          </h1>
          <p className="text-charcoal-600 mb-8">
            The article you are looking for might have been moved or doesn't exist.
          </p>
          <button
            onClick={() => navigate("/blog")}
            className="bg-ocean-900 text-white px-8 py-3 rounded-full hover:bg-ocean-800 transition-colors font-bold shadow-lg"
          >
            Back to Knowledge Hub
          </button>
        </div>
      </div>
    );
  }

  // --- MAIN ARTICLE STATE ---
  return (
    <div className="min-h-screen bg-sand-50 pb-20 pt-24">
      
      {/* Navbar Placeholder/Back Button */}
      

      <article className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Image */}
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 group">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 to-transparent" />
            
            {/* Category Tag */}
            <div className="absolute top-6 left-6">
               <span className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-ocean-900 uppercase tracking-wide flex items-center gap-2 shadow-lg">
                  <Tag className="w-3 h-3 text-eucalyptus-500" />
                  {post.category}
               </span>
            </div>
          </div>

          {/* Article Header Content */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-ocean-50 -mt-24 relative z-10 mx-4 md:mx-0">
             
             {/* Meta Data */}
             <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-charcoal-400 uppercase tracking-wider mb-6">
                <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-eucalyptus-500" />
                    {post.date}
                </div>
                <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-eucalyptus-500" />
                    {post.readTime}
                </div>
                <div className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-eucalyptus-500" />
                    {post.author}
                </div>
             </div>

             <h1 className="text-3xl md:text-5xl font-bold text-ocean-900 mb-8 font-display leading-tight">
               {post.title}
             </h1>

             {/* Divider */}
             <div className="w-full h-px bg-sand-200 mb-10" />

             {/* Main Content */}
             <div 
                className="prose prose-lg prose-headings:font-display prose-headings:text-ocean-900 prose-p:text-charcoal-600 prose-li:text-charcoal-600 prose-strong:text-ocean-800 prose-a:text-eucalyptus-600 max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
             />

             {/* Share / Tags Footer */}
             <div className="mt-12 pt-8 border-t border-sand-200 flex justify-between items-center">
                <div className="text-charcoal-400 text-sm font-bold">
                    Filed under: <span className="text-ocean-900">{post.category}</span>
                </div>
                <button className="flex items-center gap-2 text-ocean-900 font-bold hover:text-eucalyptus-600 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Share Article</span>
                </button>
             </div>
          </div>

          {/* CTA Box */}
          <div className="mt-12 bg-ocean-900 rounded-[2.5rem] p-10 md:p-12 text-center text-white relative overflow-hidden shadow-2xl mx-4 md:mx-0">
             {/* Abstract BG */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-eucalyptus-500/20 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
             
             <div className="relative z-10">
                <h3 className="text-3xl font-bold font-display mb-4">Need help with your bathroom?</h3>
                <p className="text-ocean-100 text-lg mb-8 font-light max-w-xl mx-auto">
                    We offer free assessments for Perth homeowners. Get a professional opinion on your leaks today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center bg-white text-ocean-900 px-8 py-3 rounded-full font-bold hover:bg-sand-50 transition-colors"
                    >
                        Book Free Inspection
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <a
                        href="tel:0401716402"
                        className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
                    >
                        Call 0401 716 402
                    </a>
                </div>
             </div>
          </div>

        </div>
      </article>
    </div>
  );
}