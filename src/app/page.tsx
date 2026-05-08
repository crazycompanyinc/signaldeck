import { ArrowRight, BarChart3, Bell, Globe, Radar, Shield, TrendingUp, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-black to-cyan-950/30" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
        </div>
        <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Radar className="w-8 h-8 text-violet-400" />
            <span className="text-xl font-bold tracking-tight">SignalDeck</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#how" className="hover:text-white transition">How It Works</a>
          </div>
          <a href="#pricing" className="px-5 py-2.5 bg-violet-600 hover:bg-violet-500 rounded-lg text-sm font-medium transition">
            Start Free Trial
          </a>
        </nav>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-sm mb-8">
            <Zap className="w-4 h-4" />
            AI-Powered Competitive Intelligence
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Know Your Market
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Before Your Competitors
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            SignalDeck monitors your competitors 24/7 — pricing changes, product launches, hiring signals, and market shifts. Get AI-synthesized briefings delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="px-8 py-4 bg-violet-600 hover:bg-violet-500 rounded-xl text-lg font-semibold flex items-center gap-2 transition">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#how" className="px-8 py-4 border border-gray-700 hover:border-gray-500 rounded-xl text-lg font-medium transition">
              See How It Works
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </header>

      {/* Social Proof */}
      <section className="border-y border-gray-800 bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-center text-sm text-gray-500 mb-8">TRUSTED BY TEAMS AT</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-gray-500 text-lg font-semibold">
            <span>Stripe</span><span>Vercel</span><span>Linear</span><span>Notion</span><span>Raycast</span><span>Resend</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Everything You Need to Outsmart the Market</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">AI-powered signals that keep you ahead of every competitive move.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Globe, title: "Competitor Monitoring", desc: "Track up to 50 competitors across their website, blog, changelog, and social media. Never miss a move." },
            { icon: TrendingUp, title: "Pricing Intelligence", desc: "Get instant alerts when competitors change pricing, launch plans, or offer promotions." },
            { icon: Bell, title: "AI Briefings", desc: "Daily AI-synthesized briefings delivered to your inbox or Slack. Actionable insights, not raw data." },
            { icon: BarChart3, title: "Market Mapping", desc: "Visualize your competitive landscape with AI-generated positioning maps and gap analysis." },
            { icon: Shield, title: "Hiring Signals", desc: "Monitor competitor job postings to predict their next product moves and strategic shifts." },
            { icon: Zap, title: "Instant Alerts", desc: "Real-time notifications via email, Slack, or webhook when important signals are detected." },
          ].map((f, i) => (
            <div key={i} className="p-6 border border-gray-800 rounded-2xl hover:border-violet-500/30 transition bg-gray-950/50">
              <f.icon className="w-10 h-10 text-violet-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="bg-gray-950/50 border-y border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold text-center mb-16">Three Steps to Market Dominance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Add Competitors", desc: "Enter competitor domains, social accounts, and keywords. SignalDeck starts monitoring instantly." },
              { step: "02", title: "AI Analyzes 24/7", desc: "Our AI scans pricing pages, job boards, changelogs, news, and social signals around the clock." },
              { step: "03", title: "Get Actionable Intel", desc: "Receive daily briefings with AI-synthesized insights and recommended actions." },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl font-bold text-violet-500/20 mb-4">{s.step}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-400 text-center mb-16">Start free. Scale as you grow.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Starter", price: "$29", period: "/mo", features: ["5 competitors", "Daily briefings", "Email alerts", "30-day history"], cta: "Start Free Trial", highlight: false },
            { name: "Growth", price: "$79", period: "/mo", features: ["25 competitors", "Real-time alerts", "Slack integration", "90-day history", "AI gap analysis", "Hiring signals"], cta: "Start Free Trial", highlight: true },
            { name: "Enterprise", price: "$199", period: "/mo", features: ["Unlimited competitors", "Custom integrations", "API access", "Unlimited history", "Dedicated support", "White-label reports"], cta: "Contact Sales", highlight: false },
          ].map((p, i) => (
            <div key={i} className={`p-8 rounded-2xl border ${p.highlight ? "border-violet-500 bg-violet-500/5 scale-105" : "border-gray-800 bg-gray-950/50"} transition`}>
              {p.highlight && <div className="text-xs font-semibold text-violet-400 mb-2 uppercase tracking-wider">Most Popular</div>}
              <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className="text-gray-500">{p.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-medium transition ${p.highlight ? "bg-violet-600 hover:bg-violet-500" : "border border-gray-700 hover:border-gray-500"}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to See Every Move?</h2>
          <p className="text-gray-400 text-lg mb-8">Join 500+ teams using SignalDeck to stay ahead of the competition.</p>
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-500 rounded-xl text-lg font-semibold transition">
            Start Your Free Trial <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Radar className="w-5 h-5" />
            <span>SignalDeck © 2026 — A ZOO Company Product</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
