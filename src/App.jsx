import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ✅ ضعّي صورك داخل: src/assets
import architectImg from "./assets/architectai.png";
import apacheImg from "./assets/apache.png";
import riyadhImg from "./assets/riyadh.png";
import profileImg from "./assets/profile.png";
import salesImg from "./assets/sales-dashboard.png";

const DATA = {
  name: "Shmook Mohammed Baalhareth",
  title: "Data Scientist",
  tagline: "Turning data into decisions.",
  about:
    "I’m a Data Scientist focused on building ML solutions, extracting insights, and delivering measurable impact. I enjoy clean dashboards, solid experimentation, and models that ship.",
  stats: [
    { big: "6", small: "Months", sub: "Experience" },
    { big: "4+", small: "Projects", sub: "ML / Analytics" },
    { big: "3+", small: "Dashboards", sub: "BI / Insights" },
  ],
  tools: ["VS Code", "Git", "GitHub", "Jupyter", "Power BI / Tableau"],
  skills: [
    { name: "Python", level: 95 },
    { name: "SQL", level: 90 },
    { name: "Pandas / NumPy", level: 90 },
    { name: "Machine Learning", level: 85 },
    { name: "Data Visualization", level: 85 },
    { name: "Statistics", level: 80 },
    { name: "NLP", level: 75 },
    { name: "Deep Learning", level: 70 },
  ],
  education: [
    {
      date: "2020 - 2025",
      title: "BSc in Computer Science",
      place: "Najran University",
    },
  ],
  experience: [
    {
      date: "2025 - 6 Months",
      title: "Data Analysis",
      place: "National Water Company",
    },
  ],
  projects: [
    {
      title: "ArchitectAI – AI Architecture Evaluation Dashboard",
      desc: "AI-powered dashboard designed to evaluate and compare machine learning model architectures. Provides performance metrics, model insights, and structured evaluation to support intelligent architecture selection.",
      tags: ["Python", "Machine Learning", "Model Evaluation", "Dashboard"],
      github: "https://github.com/shmook71/ArchitectAI",
      live: "https://architect-ai-three.vercel.app/",
      image: architectImg,
    },
    {
      title: "Apache Logs Monitoring Dashboard",
      desc: "Processed 100K+ log records, reduced incident detection time by 40%, and built a real-time monitoring dashboard for traffic, errors, and anomalies.",
      tags: ["Python", "Log Analysis", "Dashboard"],
      github: "https://github.com/shmook71/apache-logs-dashboard",
      live: "https://apache-logs-dashboard-exigihcfvcfl5m2nqsvwtp.streamlit.app/",
      image: apacheImg,
    },
    {
      title: "Riyadh Air Traffic Intelligence Dashboard",
      desc: "Built an interactive air traffic intelligence dashboard analyzing flight patterns, peak hours, route distribution, and operational insights. Designed data pipelines and visualizations to support strategic aviation decisions.",
      tags: ["Python", "Data Analysis", "Streamlit", "Dashboard"],
      github: "https://github.com/shmook71/Kaggle_Project",
      live: "https://kaggleproject-lnvwlsh7fgoky59ejeiqxi.streamlit.app/",
      image: riyadhImg,
    },
  {
  title: "Sales Performance & Revenue Analytics Dashboard",
  desc: "An interactive Retail Sales Analytics Dashboard that provides insights into sales performance, revenue, and profitability.",
  tags: ["Power BI", "Data Analysis", "Dashboard"],
  image: salesImg,
},
    
    
  ],
  contact: {
    email: "shmookaltihami@gmail.com",
    github: "https://github.com/shmook71",
    linkedin: "https://www.linkedin.com/in/shmook-balharith-a876072b3",
  },
};

/* ===================== UI HELPERS ===================== */

function GlowGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 left-1/2 h-[520px] w-[1200px] -translate-x-1/2">
        <div className="absolute inset-0 [transform:perspective(900px)_rotateX(62deg)]">
          <div
            className="h-full w-full opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,211,238,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.18) 1px, transparent 1px)",
              backgroundSize: "46px 46px",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A192F]" />
      </div>

      <div
        className="absolute -top-28 left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.22), transparent 62%)",
        }}
      />
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={
        "rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md " +
        "hover:shadow-[0_0_30px_rgba(34,211,238,0.22)] transition " +
        className
      }
    >
      {children}
    </div>
  );
}

function Section({ id, title, rightTitle, children }) {
  const { ref, inView } = useInView({ threshold: 0.14, triggerOnce: true });
  return (
    <section id={id} ref={ref} className="mx-auto w-full max-w-5xl px-4 py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-8 text-center font-mono text-xl text-white">
          {title}{" "}
          {rightTitle ? (
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              {rightTitle}
            </span>
          ) : null}
        </h2>
        {children}
      </motion.div>
    </section>
  );
}

function Progress({ label, value }) {
  return (
    <div className="mb-4">
      <div className="mb-2 flex items-center justify-between text-sm text-white/90">
        <span className="font-mono">{label}</span>
        <span className="text-white/70">{value}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/20">
        <motion.div
          className="h-2 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(34,211,238,0.95), rgba(59,130,246,0.95))",
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
        />
      </div>
    </div>
  );
}

function SocialLink({ href, children }) {
  const safeHref = href && href !== "#" ? href : null;

  return (
    <a
      href={safeHref || undefined}
      target={safeHref ? "_blank" : undefined}
      rel={safeHref ? "noreferrer" : undefined}
      className={
        "rounded-xl border border-white/15 bg-white/10 p-4 block " +
        "hover:shadow-[0_0_24px_rgba(34,211,238,0.22)] transition " +
        (safeHref ? "cursor-pointer" : "cursor-not-allowed opacity-60")
      }
    >
      {children}
    </a>
  );
}

/* ===================== APP ===================== */

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  // ✅ إغلاق بالـ ESC
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A192F] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A192F]/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="font-mono text-sm text-white">{DATA.name}</div>

          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            {["home", "about", "journey", "skills", "projects", "contact"].map(
              (k) => (
                <a
                  key={k}
                  href={`#${k}`}
                  className="hover:text-white transition"
                >
                  {k[0].toUpperCase() + k.slice(1)}
                </a>
              )
            )}
          </nav>

          <button className="rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/80 hover:text-white transition">
            Language ▾
          </button>
        </div>
      </header>

      {/* HERO */}
      <main id="home" className="relative overflow-hidden">
        <GlowGrid />

        <section className="relative z-10 mx-auto max-w-5xl px-4 pb-10 pt-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3 font-mono text-white/85"
          >
            Hi, I’m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="text-3xl font-mono leading-tight md:text-5xl"
          >
            <span className="text-white">{DATA.title}</span>
            <span className="text-white/70"> — </span>
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              {DATA.name}
            </span>
            <span className="text-white/60"> |</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mt-4 text-lg text-white/90"
          >
            {DATA.tagline.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              {DATA.tagline.split(" ").slice(2).join(" ")}
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.14 }}
            className="mt-6 flex justify-center gap-3"
          >
            <a
              href="#about"
              className="rounded-xl border border-white/15 bg-white/10 px-5 py-2 text-sm text-white hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition"
            >
              Read More
            </a>
            <a
              href="#projects"
              className="rounded-xl border border-white/15 bg-white/10 px-5 py-2 text-sm text-white hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition"
            >
              View Projects
            </a>
          </motion.div>
        </section>

        {/* ABOUT */}
        <Section id="about" title="Why hire me for your" rightTitle="next project?">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="flex items-center justify-center">
              <img
  src={profileImg}
  alt="Profile"
  className="w-full max-w-xs md:max-w-sm object-cover rounded-2xl border border-white/15 shadow-[0_0_30px_rgba(34,211,238,0.25)]"
/>
            </Card>

            <Card>
              <p className="text-sm leading-6 text-white/90">{DATA.about}</p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {DATA.stats.map((s) => (
                  <div
                    key={s.small}
                    className="rounded-2xl border border-white/15 bg-white/5 p-4 text-center"
                  >
                    <div className="font-mono text-2xl text-white">{s.big}</div>
                    <div className="text-xs text-white/80">{s.small}</div>
                    <div className="text-xs text-cyan-300">{s.sub}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Section>

        {/* JOURNEY */}
        <Section id="journey" title="My Academic and Professional" rightTitle="Journey">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-center font-mono text-sm text-white/90">
                Education
              </h3>
              <div className="space-y-3">
                {DATA.education.map((e) => (
                  <Card key={e.title}>
                    <div className="text-xs text-white/70">{e.date}</div>
                    <div className="mt-1 font-mono text-sm text-white">{e.title}</div>
                    <div className="text-xs text-white/80">{e.place}</div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-center font-mono text-sm text-white/90">
                Professional Experience
              </h3>
              <div className="space-y-3">
                {DATA.experience.map((e) => (
                  <Card key={e.title}>
                    <div className="text-xs text-white/70">{e.date}</div>
                    <div className="mt-1 font-mono text-sm text-white">{e.title}</div>
                    <div className="text-xs text-white/80">{e.place}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Tools" rightTitle="and Skills">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="mb-4 text-center font-mono text-sm text-white/90">
                Tools
              </h3>
              <ul className="space-y-3 text-sm text-white/90">
                {DATA.tools.map((t) => (
                  <li
                    key={t}
                    className="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3"
                  >
                    <span className="font-mono">{t}</span>
                    <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="mb-4 text-center font-mono text-sm text-white/90">
                Skills
              </h3>
              {DATA.skills.map((s) => (
                <Progress key={s.name} label={s.name} value={s.level} />
              ))}
            </Card>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Projects">
          <div className="grid gap-6 md:grid-cols-3">
            {DATA.projects.map((p) => (
              <Card key={p.title} className="group">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    onClick={() => setSelectedImage({ src: p.image, title: p.title })}
                    className="mb-4 h-40 w-full object-cover rounded-xl border border-white/15 cursor-pointer transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="mb-4 h-40 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center text-xs text-white/70">
                    Add project screenshot
                  </div>
                )}

                <div className="font-mono text-sm text-white">{p.title}</div>
                <p className="mt-2 text-xs leading-5 text-white/90">{p.desc}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/10 px-2 py-1 text-[10px] text-white/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {(p.live && p.live !== "#") || (p.github && p.github !== "#") ? (
  <div className="mt-4 flex gap-2">
    {p.live && p.live !== "#" && (
      <a
        className="flex-1 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-center text-xs text-white hover:shadow-[0_0_26px_rgba(34,211,238,0.22)] transition"
        href={p.live}
        target="_blank"
        rel="noreferrer"
      >
        Live
      </a>
    )}

    {p.github && p.github !== "#" && (
      <a
        className="flex-1 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-center text-xs text-white transition"
        href={p.github}
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    )}
  </div>
) : null}
              </Card>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="mb-4 font-mono text-sm text-white">Send a message</h3>
              <form className="space-y-3">
                <input
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/70 outline-none focus:border-cyan-300/70"
                  placeholder="Your name"
                />
                <input
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/70 outline-none focus:border-cyan-300/70"
                  placeholder="Email"
                />
                <textarea
                  className="min-h-[120px] w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/70 outline-none focus:border-cyan-300/70"
                  placeholder="Message"
                />
                <button
                  type="button"
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white hover:shadow-[0_0_30px_rgba(34,211,238,0.22)] transition"
                >
                  Send
                </button>
              </form>
            </Card>

            <Card>
              <h3 className="mb-4 font-mono text-sm text-white">Social</h3>
              <div className="space-y-3 text-sm text-white/90">
                <SocialLink href={DATA.contact.github}>GitHub</SocialLink>
                <SocialLink href={DATA.contact.linkedin}>LinkedIn</SocialLink>
                <SocialLink href={`mailto:${DATA.contact.email}`}>Email</SocialLink>
              </div>
            </Card>
          </div>
        </Section>

        <footer className="border-t border-white/10 bg-[#0A192F]/70 py-8">
          <div className="mx-auto max-w-5xl px-4 text-center text-xs text-white/70">
            © {new Date().getFullYear()} {DATA.name}. Built with React.
          </div>
        </footer>

        {/* ✅ IMAGE MODAL */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-3 -right-3 rounded-full border border-white/20 bg-black/60 px-3 py-2 text-sm text-white hover:bg-black/80 transition"
              >
                ✕
              </button>

              <div className="mb-3 text-center text-sm text-white/80">
                {selectedImage.title}
              </div>

              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain rounded-2xl border border-white/15 shadow-2xl"
              />
              <div className="mt-3 text-center text-xs text-white/60">
                اضغطي خارج الصورة أو زر ✕ للإغلاق — ESC يقفل أيضًا
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}