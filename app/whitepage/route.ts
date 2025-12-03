import { NextResponse } from 'next/server';

export async function GET() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>SmartWork AI — Intelligent Productivity for the Modern World</title>
  <meta name="description" content="Master productivity with Artificial Intelligence. Save hours daily, automate tasks, and organize life with SmartWork AI. Lifetime updates and direct support." />
  <meta name="theme-color" content="#0b1020" />
  <style>
    :root{
      --bg:#0b1020;          /* deep space */
      --bg-2:#0e1428;        /* panel */
      --txt:#e6e9f0;         /* text */
      --muted:#aab3c5;       /* muted text */
      --brand:#5b8eff;       /* primary */
      --brand-2:#22d3ee;     /* accent */
      --warn:#ffd166;        /* warning */
      --shadow:0 10px 30px rgba(0,0,0,.35);
      --radius:18px;
      --radius-lg:28px;
      --maxw:1180px;
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0; font-family:Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
      background:
        radial-gradient(1200px 600px at 10% -10%, rgba(34,211,238,.15), rgba(34,211,238,0) 55%),
        radial-gradient(1200px 600px at 110% 10%, rgba(91,142,255,.18), rgba(91,142,255,0) 45%),
        var(--bg);
      color:var(--txt);
      line-height:1.6; -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;
    }
    a{color:inherit; text-decoration:none}
    .container{max-width:var(--maxw); margin-inline:auto; padding:0 20px}
    .btn{display:inline-flex; align-items:center; justify-content:center; gap:.6rem; padding:16px 22px; font-weight:700; border-radius:14px; background:linear-gradient(90deg,var(--brand),var(--brand-2)); color:#001214; box-shadow:var(--shadow); border:0; cursor:pointer}
    .btn:hover{filter:brightness(1.05)}
    .btn-outline{background:transparent; border:1px solid rgba(255,255,255,.18); color:var(--txt)}
    header.nav{position:sticky; top:0; z-index:50; backdrop-filter:saturate(140%) blur(10px); background:rgba(11,16,32,.6); border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:flex; align-items:center; justify-content:space-between; gap:16px; padding:14px 0}
    .logo{display:flex; align-items:center; gap:10px; font-weight:800}
    .logo-mark{inline-size:34px; block-size:34px; display:grid; place-items:center; background:linear-gradient(135deg,var(--brand) 0%, var(--brand-2) 100%); color:#001; border-radius:9px; box-shadow:var(--shadow); font-weight:900}
    .nav-cta{display:flex; align-items:center; gap:12px}

    /* HERO */
    .hero{padding:64px 0 40px}
    .hero-grid{display:grid; grid-template-columns:1.1fr .9fr; gap:36px; align-items:center}
    .eyebrow{display:inline-block; font-size:.85rem; letter-spacing:.12em; text-transform:uppercase; color:var(--brand-2); background:rgba(34,211,238,.08); border:1px solid rgba(34,211,238,.25); padding:6px 10px; border-radius:999px}
    h1{font-size:clamp(32px, 5vw, 56px); line-height:1.08; margin:14px 0 12px}
    .sub{font-size:clamp(16px, 2.2vw, 20px); color:var(--muted); margin:0 0 26px}
    .hero-card{background:linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03)); border:1px solid rgba(255,255,255,.1); padding:22px; border-radius:var(--radius-lg)}
    .stack{display:flex; flex-wrap:wrap; gap:12px}
    .hero-media{background:linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02)); border:1px solid rgba(255,255,255,.08); border-radius:var(--radius-lg); padding:18px}
    .video{position:relative; aspect-ratio:16/9; border-radius:14px; overflow:hidden; border:1px solid rgba(255,255,255,.08)}

    /* SECTIONS */
    section{padding:64px 0}
    h2{font-size:clamp(26px, 4vw, 40px); margin:0 0 14px}
    .lead{color:var(--muted); max-width:800px}
    .grid-3{display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:26px}
    .card{background:linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02)); border:1px solid rgba(255,255,255,.08); padding:22px; border-radius:var(--radius)}
    .card h3{margin:8px 0 6px; font-size:1.05rem}
    .muted{color:var(--muted)}

    /* INCLUDES */
    .includes{background:linear-gradient(180deg, rgba(91,142,255,.08), rgba(34,211,238,.06))}
    .list{display:grid; grid-template-columns:1.3fr .7fr; gap:24px}
    .tick{display:flex; gap:12px; align-items:flex-start; margin:12px 0}
    .tick svg{flex:0 0 22px}

    /* WHY AI NOW */
    .why-ai .card p{margin:0}

    /* BONUSES */
    .bonuses .grid-3 .card{position:relative}
    .badge{position:absolute; top:14px; right:14px; font-size:.75rem; padding:6px 10px; border-radius:999px; border:1px dashed rgba(255,255,255,.25); color:#001; background:linear-gradient(90deg, var(--warn), #fff1a8)}

    /* PRICING / OFFER */
    .pricing{background:linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02)); border:1px solid rgba(255,255,255,.08); border-radius:var(--radius-lg); padding:26px}
    .price{font-size:54px; font-weight:900; line-height:1}
    .strike{color:var(--muted); text-decoration:line-through}
    .guarantee{display:flex; gap:16px; align-items:flex-start; margin-top:18px; padding:16px; border:1px dashed rgba(255,255,255,.18); border-radius:14px; background:rgba(0,0,0,.2)}

    /* Offer grid & trust badges */
    .offer-grid{display:grid; grid-template-columns:1.1fr .9fr; gap:24px; align-items:start}
    .trust-badges{display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-top:16px}

    /* FAQ */
    details{background:linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02)); border:1px solid rgba(255,255,255,.1); border-radius:14px; padding:14px 16px}
    details+details{margin-top:10px}
    summary{cursor:pointer; font-weight:700}

    /* FOOTER */
    footer{padding:50px 0 80px; color:var(--muted)}

    /* Responsive */
    @media (max-width: 960px){
      .hero-grid, .list{grid-template-columns:1fr}
      .grid-3{grid-template-columns:1fr}
      .nav-cta .btn-outline{display:none}
      .offer-grid{grid-template-columns:1fr; gap:18px}
    }
    /* Mobile enhancements */
    @media (max-width: 768px){
      .container{padding:0 16px}
      header.nav .nav-inner{padding:10px 0}
      .hero{padding:48px 0 28px}
      .hero-card{padding:18px}
      .stack{flex-direction:column}
      .btn,.btn-outline{width:100%; min-height:48px}
      .grid-3{gap:14px}
      .card{padding:18px}
      .list{gap:16px}
      .price{font-size:42px}
      h1{font-size:clamp(28px,6.5vw,38px)}
      h2{font-size:clamp(22px,5.4vw,30px)}
      .sub{font-size:clamp(15px,3.8vw,18px)}
      .guarantee{flex-direction:column}
      .video{aspect-ratio:16/9}
      vturb-smartplayer{display:block; width:100%; height:100%}
      .trust-badges{grid-template-columns:1fr 1fr}
    }
    @media (max-width: 480px){
      section{padding:44px 0}
      .eyebrow{font-size:.74rem; padding:5px 8px}
      .price{font-size:36px}
      .pricing{padding:18px}
      details{padding:12px 14px}
      summary{line-height:1.3}
      .badge{top:10px; right:10px}
      .offer-grid{gap:14px}
      .trust-badges{grid-template-columns:1fr; gap:10px}
    }
  </style>
</head>
<body>
  <!-- NAV -->
  <header class="nav">
    <div class="container nav-inner">
      <a href="#top" class="logo" aria-label="SmartWork AI Home">
        <span class="logo-mark">AI</span>
        <span>SmartWork AI</span>
      </a>
      <div class="nav-cta">
        <a class="btn-outline btn" href="#curriculum">Curriculum</a>
        <a class="btn" href="https://www.checkout-ds24.com/product/651294" target="_blank" rel="noopener" aria-label="Get Instant Access">Get Instant Access</a>
      </div>
    </div>
  </header>

  <!-- HERO -->
  <main id="top" class="hero">
    <div class="container hero-grid">
      <section>
        <span class="eyebrow">Intelligent Productivity for the Modern World</span>
        <h1>Work Smarter. Achieve More. Live Better.</h1>
        <p class="sub">Discover how top performers save hours every day using Artificial Intelligence — and learn how to do the same. <strong>SmartWork AI</strong> is a complete training program that teaches you to master productivity with the power of AI tools.</p>
        <div class="hero-card">
          <div class="stack">
            <a class="btn" href="https://www.checkout-ds24.com/product/651294" target="_blank" rel="noopener">Get Instant Access</a>
            <a class="btn btn-outline" href="#benefits">See What You'll Learn</a>
          </div>
          <ul class="muted" style="margin:14px 0 0; padding-left:18px">
            <li>Lifetime access • All updates included</li>
            <li>Direct support via Email & WhatsApp</li>
          </ul>
        </div>
      </section>
      <aside class="hero-media" aria-label="Course preview">
        <!-- Vturb SmartPlayer embed -->
        <div class="video">
          <vturb-smartplayer id="vid-691cb06178fbfe28975783df" style="display: block; margin: 0 auto; width: 100%; "></vturb-smartplayer> <script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/e47d2695-e7da-47cf-a7a5-1f9da5313774/players/691cb06178fbfe28975783df/v4/player.js", s.async=!0,document.head.appendChild(s); </script>
        <p class="muted" style="margin:10px 4px 0">Watch the short video to see how SmartWork AI works in practice.</p>
      </aside>
    </div>
  </main>

  <!-- BENEFITS -->
  <section id="benefits">
    <div class="container">
      <h2>What You’ll Learn</h2>
      <p class="lead">Practical systems to automate repetitive work, organize projects, create faster with smart prompts, and make better decisions using AI — all while reducing stress and regaining focus.</p>
      <div class="grid-3">
        <div class="card"><h3>Automate Repetitive Tasks</h3><p class="muted">Eliminate busywork with AI workflows that run on autopilot so you can focus on high-leverage work.</p></div>
        <div class="card"><h3>Plan with Precision</h3><p class="muted">Use AI planning to organize your week, manage projects, and hit deadlines with clarity.</p></div>
        <div class="card"><h3>Write & Create Faster</h3><p class="muted">Ready-to-use prompts to ideate, outline, draft, and refine content in minutes.</p></div>
        <div class="card"><h3>AI-Assisted Decisions</h3><p class="muted">Turn data into insights. Get objective suggestions and reduce decision fatigue.</p></div>
        <div class="card"><h3>Reduce Stress, Increase Focus</h3><p class="muted">Less chaos, more clarity. Build systems that protect your attention and energy.</p></div>
        <div class="card"><h3>Multiply Your Time</h3><p class="muted">Design a personal ops stack that compounds results week after week.</p></div>
      </div>
    </div>
  </section>

  <!-- WHY AI MATTERS NOW -->
  <section class="why-ai" id="why-ai-now">
    <div class="container">
      <h2>Why AI Matters Right Now</h2>
      <p class="lead">AI isn’t a ‘nice-to-have’ anymore — it’s a work advantage. Here are concrete reasons leading professionals are adopting AI today.</p>
      <div class="grid-3">
        <div class="card"><h3>Competitive Advantage</h3><p class="muted">Teams using AI execute faster, make fewer mistakes, and deliver more value per hour.</p></div>
        <div class="card"><h3>Speed & Leverage</h3><p class="muted">Automate busywork, draft in minutes, and iterate rapidly so you focus on high-impact decisions.</p></div>
        <div class="card"><h3>Better Decisions</h3><p class="muted">Summarize research, compare options, and stress-test plans to reduce bias and decision fatigue.</p></div>
        <div class="card"><h3>Personalized Workflows</h3><p class="muted">Standardize quality with prompts and templates across writing, planning, reporting, and ops.</p></div>
        <div class="card"><h3>No-Code Automation</h3><p class="muted">Connect tools and trigger actions without engineering — from data cleanup to reports.</p></div>
        <div class="card"><h3>Cost Efficiency</h3><p class="muted">Replace hours of manual work with low-cost AI tasks and free budget for growth.</p></div>
        <div class="card"><h3>Learning Curve ↓</h3><p class="muted">Modern AI tools are intuitive. With proven prompts, you get results on day one.</p></div>
        <div class="card"><h3>Creative Acceleration</h3><p class="muted">Brainstorm more ideas, test variations, and ship creative that used to need a full team.</p></div>
        <div class="card"><h3>Data → Action</h3><p class="muted">Turn scattered data into clear insights and next steps — from KPIs to customer feedback.</p></div>
      </div>
    </div>
  </section>

  <!-- WHAT'S INCLUDED -->
  <section class="includes" id="curriculum">
    <div class="container">
      <h2>What’s Included</h2>
      <p class="lead">Everything you need to transform your day with AI-driven productivity.</p>
      <div class="list">
        <div>
          <div class="tick">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="white" opacity=".3"/><path d="M7 12.5l3 3 7-7" stroke="white" stroke-width="2"/></svg>
            <div><strong>HD video lessons</strong> — step-by-step walkthroughs with real examples.</div>
          </div>
          <div class="tick">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="white" opacity=".3"/><path d="M7 12.5l3 3 7-7" stroke="white" stroke-width="2"/></svg>
            <div><strong>Exclusive eBooks</strong> — in-depth frameworks you can revisit anytime.</div>
          </div>
          <div class="tick">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="white" opacity=".3"/><path d="M7 12.5l3 3 7-7" stroke="white" stroke-width="2"/></svg>
            <div><strong>AI prompt packs</strong> — plug-and-play commands for writing, strategy, and planning.</div>
          </div>
          <div class="tick">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="white" opacity=".3"/><path d="M7 12.5l3 3 7-7" stroke="white" stroke-width="2"/></svg>
            <div><strong>Daily workflow templates</strong> — proven routines for consistent output.</div>
          </div>
          <div class="tick">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="white" opacity=".3"/><path d="M7 12.5l3 3 7-7" stroke="white" stroke-width="2"/></svg>
            <div><strong>Lifetime updates</strong> — new lessons and tools added over time.</div>
          </div>
          <div class="tick">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="white" opacity=".3"/><path d="M7 12.5l3 3 7-7" stroke="white" stroke-width="2"/></svg>
            <div><strong>Direct support</strong> — get help via Email & WhatsApp whenever you need it.</div>
          </div>
        </div>
        <div class="card">
          <h3 style="margin:0 0 10px">Perfect For</h3>
          <ul class="muted" style="margin:0; padding-left:18px">
            <li>Entrepreneurs & freelancers scaling without burnout</li>
            <li>Students who want to study smarter, not harder</li>
            <li>Professionals staying ahead in the AI era</li>
            <li>Creators, marketers & executives optimizing workflows</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- BONUSES -->
  <section class="bonuses">
    <div class="container">
      <h2>Exclusive Bonuses</h2>
      <p class="lead">Join today and get these limited-time extras to accelerate your results.</p>
      <div class="grid-3">
        <div class="card"><span class="badge">Bonus</span><h3>AI Daily Planner</h3><p class="muted">A pre-built morning template to set priorities, define focus, and execute without friction.</p></div>
        <div class="card"><span class="badge">Bonus</span><h3>Prompt Master Pack</h3><p class="muted">100+ proven prompts for writing, planning, research, and strategy — just copy and use.</p></div>
        <div class="card"><span class="badge">Bonus</span><h3>AI Automation Blueprint</h3><p class="muted">A step-by-step map to integrate AI into your daily and business workflows.</p></div>
      </div>
    </div>
  </section>

  <!-- OFFER / CHECKOUT -->
  <section id="checkout" aria-label="SmartWork AI Offer">
    <div class="container">
      <div class="pricing">
        <div class="offer-grid">
          <div>
            <span class="eyebrow">Limited Founders Access</span>
            <h2 style="margin:8px 0 6px">Get the Complete SmartWork AI System</h2>
            <p class="lead">Everything you need to save hours daily, automate repetitive work, and organize your life with AI — with lifetime access and support.</p>

            <div class="card" style="margin:18px 0">
              <h3 style="margin:0 0 10px">Your Offer Stack</h3>
              <ul class="muted" style="margin:0; padding-left:18px">
                <li><strong>SmartWork AI Core Training (HD)</strong> — step-by-step lessons to master AI productivity <em>($399 value)</em></li>
                <li><strong>AI Daily Planner System</strong> — weekly/quarterly planning templates for deep focus <em>($99 value)</em></li>
                <li><strong>Prompt Master Pack (100+)</strong> — prompts for writing, planning & decisions <em>($149 value)</em></li>
                <li><strong>Automation Blueprints</strong> — repeatable workflows to remove busywork <em>($199 value)</em></li>
                <li><strong>Exclusive eBooks & Frameworks</strong> — quick-reference guides <em>($79 value)</em></li>
                <li><strong>Lifetime Updates</strong> — new tools, lessons & strategies included <em>($197 value)</em></li>
                <li><strong>Direct Support (Email & WhatsApp)</strong> — get help when you need it <em>($199 value)</em></li>
              </ul>
              <div style="margin-top:14px; display:flex; gap:10px; align-items:center"><span class="muted">Total value:</span><strong>$1,322</strong></div>
            </div>

            <p class="muted" style="margin:0"><span class="strike">$97</span></p>
            <div class="price" style="margin:4px 0 6px">$23</div>
            <p class="muted" style="margin:0 0 14px">One-time payment • Lifetime access • Instant start</p>

            <div class="stack" style="margin-bottom:12px">
              <a class="btn" href="https://www.checkout-ds24.com/product/651294" target="_blank" rel="noopener" aria-label="Checkout now">Get Instant Access</a>
              <a class="btn btn-outline" href="#faq">Read the FAQ</a>
            </div>

            <p class="muted" style="margin:0 0 6px">All major cards accepted. Secure checkout.</p>

            <div class="guarantee" role="note" aria-label="60-day money-back guarantee">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="#a8ffcf" opacity=".6"/><path d="M7 12.5l3 3 7-7" stroke="#a8ffcf" stroke-width="2"/></svg>
              <div>
                <strong>60-Day Money-Back Guarantee.</strong> Try SmartWork AI for a full month. If it doesn’t transform how you work, email us and we’ll refund you — <em>no questions asked</em>.
              </div>
            </div>

            <div class="muted" style="margin-top:10px">
              Need help? Contact us at <a href="/cdn-cgi/l/email-protection#553334367b263023303b3c3b333a153238343c397b363a38"><span class="__cf_email__" data-cfemail="355354561b465043505b5c5b535a755258545c591b565a58">[email&#160;protected]</span></a>
            </div>
          </div>

          <aside class="card">
            <h3 style="margin:0 0 10px">You’ll Get Today</h3>
            <ul class="muted" style="margin:0; padding-left:18px">
              <li>Full SmartWork AI Course (HD lessons)</li>
              <li>AI Daily Planner + Weekly/Quarterly Templates</li>
              <li>100+ Ready-to-Use Prompts</li>
              <li>Automation Blueprints</li>
              <li>Exclusive eBooks & Frameworks</li>
              <li>All Future Updates — Free</li>
              <li>Direct Support (Email & WhatsApp)</li>
            </ul>

            <div class="trust-badges">
              <div style="border:1px solid rgba(255,255,255,.14); border-radius:10px; padding:10px; text-align:center">Secure Checkout</div>
              <div style="border:1px solid rgba(255,255,255,.14); border-radius:10px; padding:10px; text-align:center">SSL Encrypted</div>
              <div style="border:1px solid rgba(255,255,255,.14); border-radius:10px; padding:10px; text-align:center">60-Day Guarantee</div>
            </div>

            <div style="margin-top:16px">
              <details><summary><strong>Beginner-friendly?</strong></summary><p class="muted">Yes — we start from fundamentals and move into practical workflows fast.</p></details>
              <details><summary><strong>Which AI tools?</strong></summary><p class="muted">Popular tools for writing, planning, automation & analysis — all with step-by-step prompts.</p></details>
              <details><summary><strong>How long is access?</strong></summary><p class="muted">Lifetime. All future updates included.</p></details>
            </div>
          </aside>

        </div>
      </div>
    </div>
  </section>

  <!-- SOCIAL PROOF -->
  <section>
    <div class="container">
      <h2>What Students Are Saying</h2>
      <div class="grid-3">
        <div class="card"><p>“Cut my weekly planning time by 70%. The prompts alone are worth the price.”</p><p class="muted">— Alex R., Marketing Lead</p></div>
        <div class="card"><p>“I automated reporting and finally stopped drowning in tasks. Game changer.”</p><p class="muted">— Priya M., Project Manager</p></div>
        <div class="card"><p>“From chaos to clarity in two weeks. I’m getting more done with less stress.”</p><p class="muted">— Daniel S., Freelancer</p></div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq">
    <div class="container">
      <h2>Frequently Asked Questions</h2>
      <details><summary>Is this beginner-friendly?</summary><p class="muted">Yes. No prior AI experience needed. We start with fundamentals and quickly move into practical workflows.</p></details>
      <details><summary>Which tools do you teach?</summary><p class="muted">We focus on widely available AI tools for writing, planning, automation, and data analysis — always with ready-to-use prompts.</p></details>
      <details><summary>How long is access?</summary><p class="muted">Lifetime access. All future updates are included at no extra cost.</p></details>
      <details><summary>Do you offer support?</summary><p class="muted">Yes. You can contact us via email or WhatsApp for help whenever you need it.</p></details>
      <details><summary>What’s your refund policy?</summary><p class="muted">60-day money-back guarantee. If it’s not for you, we’ll refund your purchase — no questions asked.</p></details>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>

    <div class="container" style="display:flex; flex-wrap:wrap; gap:18px; align-items:center; justify-content:space-between">
      <div>
        <div class="logo" style="margin-bottom:6px">
          <span class="logo-mark">AI</span>
          <strong>SmartWork AI</strong>
        </div>
        <div class="muted">© <span id="year"></span> SmartWork AI. All rights reserved.</div>
      </div>
      <div class="muted">
        <a href="#top">Back to top</a> • <a href="/cdn-cgi/l/email-protection#771116145904120112191e19111837101a161e1b5914181a">Support</a> • <a href="/terms_of_use/">Terms</a> • <a href="/privacy_policy/">Privacy</a>
      </div>
    </div>
  </footer>

  <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon='{"version":"2024.11.0","token":"120e9504642e4cf88c6cf01ef6ae5b7d","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
</body>
</html>`;

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
