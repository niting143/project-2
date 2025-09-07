import React from "react";
import { ArrowLeft, Calendar, Clock, ExternalLink } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  link: string;
  image: string;
  author: string;
}

export default function BlogDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Your Step-by-Step Guide to Shower Resealing in Perth 🚿",
      excerpt:
        "A leaking shower can do more damage than you think. From hidden leaks that rot timber frames to mould growth that spreads fast, a poorly sealed shower is a ticking time bomb for your bathroom.",
      content: `A leaking shower can do more damage than you think. From hidden leaks that rot timber frames to mould growth that spreads fast, a poorly sealed shower is a ticking time bomb for your bathroom.

If you're in Perth and want a long-lasting solution, professional shower resealing is the smartest move. But what actually happens when the experts step in? Let's walk through the process so you know exactly what to expect.

🌦️ Why Shower Resealing Is Essential in Perth
Perth's climate — humid summers and cool winters — puts bathrooms under constant pressure. Moisture and temperature swings weaken grout, lift tiles, and trigger leaks.

Professional resealing protects your home by:
- ✅ Preventing water leaks that damage walls & floors
- ✅ Stopping mould and mildew growth
- ✅ Extending the life of tiles and grout
- ✅ Saving you from costly future repairs

🔍 Step 1: Initial Inspection & Leak Detection
Every resealing job starts with a detailed inspection. The pro will:
- Check for cracks in grout and tiles
- Look for hidden leaks or water damage
- Pinpoint problem areas in the base and walls

This step ensures the repair fixes the root cause, not just the symptoms.

🧽 Step 2: Preparing the Shower Area
Preparation makes or breaks the reseal. Here's what happens:
- Old grout and silicone are removed
- Surfaces are deep-cleaned (mould, soap scum, dirt gone)
- Area is dried for maximum bonding strength

Skipping this step is why DIY reseals often fail.

🛡️ Step 3: Applying New Grout & Sealant
With a clean base, the experts apply:
- Epoxy grout – waterproof, stain-resistant, long-lasting
- Premium sealant – applied to joints, corners, and gaps for a watertight finish

This creates a solid barrier against leaks in Perth's humid conditions.

💦 Step 4: Waterproofing the Base
For added protection, many pros also:
- Apply a flexible waterproof membrane under the shower base
- Ensure even if grout fails later, water won't damage the subfloor

✨ Step 5: Final Testing & Clean-Up
Once done, the shower is:
- Leak-tested to confirm it's watertight
- Cleaned and polished so it looks like new

Most jobs in Perth take 2–4 hours and you can usually use the shower again within 24 hours.

🛠️ DIY vs Professional Resealing
DIY might look cheaper, but common failures include:
- Weak sealing and recurring leaks
- Mould coming back due to poor prep
- Wasted time and money

Hiring professionals means the job is done once, and done right.

👷 Why Choose a Perth Specialist?
With Reseal Shower Perth, you get:
- Local experts who understand Perth's climate
- Premium epoxy grout with 25-year product warranty
- Fast, reliable, and lasting results
- Peace of mind with professional workmanship

✅ Final Thoughts
If your shower is leaking or grout is cracking, don't wait until damage spreads. Professional resealing is a quick, cost-effective, and long-lasting solution.

👉 Book your shower resealing today and enjoy a leak-free, mould-free bathroom for years to come.`,
      readTime: "8 min read",
      date: "December 2024",
      link: "https://www.resealshower.com.au",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Reseal Shower Perth Team",
    },
    {
      id: 2,
      title:
        "Epoxy vs. Cement Grout for Perth Bathrooms: Which One Wins for Shower Repairs?",
      excerpt:
        "When it comes to shower repairs in Perth, one of the most common questions homeowners face is: Should I choose epoxy grout or cement grout? Both play a big role in sealing tiles and keeping water out.",
      content: `When it comes to shower repairs in Perth, one of the most common questions homeowners face is: Should I choose epoxy grout or cement grout? Both play a big role in sealing tiles and keeping water out, but their performance, durability, and maintenance are worlds apart. Let's break it down so you can choose the right option for your bathroom.

🧱 What Is Cement Grout?
Cement grout is the traditional grout most homes in Perth already have. It's made from water, cement, and sometimes sand.

Why people choose it:
✅ Cheaper upfront
✅ Easy to find in local hardware stores
✅ DIY-friendly

The downsides:
❌ Porous – absorbs water, leading to mould and mildew
❌ Needs sealing and constant upkeep
❌ Cracks over time in wet areas

💧 What Is Epoxy Grout?
Epoxy grout is a modern, resin-based grout that outperforms cement in wet environments like Perth bathrooms.

Why it's better:
✅ Naturally waterproof
✅ Stain and mould resistant
✅ Lasts decades without major repairs
✅ Minimal maintenance, no resealing needed

The catch:
❌ Costs more than cement grout
❌ Needs professional installation
❌ Not always stocked in DIY stores

⚖️ Epoxy vs. Cement Grout: At a Glance
Feature	Cement Grout	Epoxy Grout
Water Resistance	Low – needs sealing	High – naturally waterproof
Durability	Prone to cracks	Long-lasting
Maintenance	High (resealing needed)	Low
Cost	Budget option	Premium investment
Best For	Low-traffic areas	Showers & humid bathrooms

🏆 Which One Should You Choose in Perth?
If you're after a cheap quick fix, cement grout will work. But if you want a long-term leak-free bathroom, epoxy grout is the winner.

🔧 Why Professional Resealing Matters
Even the best grout won't last if installed poorly. At Re-seal Shower Perth, we:
- Use premium epoxy grout with a 25-year warranty
- Fix mouldy or cracked grout
- Repair dummy/loose tiles
- Reseal showers and balconies without removing tiles

✅ Final Thoughts
When comparing epoxy vs. cement grout for Perth bathrooms, epoxy grout clearly wins for shower resealing. While it costs more upfront, it gives you a bathroom that stays waterproof, mould-free, and low-maintenance for years.

👉 Noticed leaks, mould, or cracked grout? Don't wait for costly water damage. Book a professional resealing service with Re-seal Shower Perth today and keep your bathroom protected.`,
      readTime: "6 min read",
      date: "December 2024",
      link: "https://www.resealshower.com.au",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Reseal Shower Perth Team",
    },
  ];

  const post = blogPosts.find((p) => p.id === parseInt(id || "0"));

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </button>
        </div>
      </div>

      {/* Article */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="text-gray-500">•</div>
              <div>By {post.author}</div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {post.content}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-blue-50 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Professional Shower Resealing?
            </h3>
            <p className="text-gray-600 mb-6">
              Don't wait for costly water damage. Get a free quote from Perth's
              leading shower resealing experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0401716402"
                className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                <span>Call Now: 0401 716 402</span>
              </a>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                <span>Visit Our Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
