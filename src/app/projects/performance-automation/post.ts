export const blogPost = {
  title: "From Manual Chaos to Automated Insight",
  description:
    "How we automated performance tracking in a closed system with a Next.js dashboard, nightly crawlers, and real-time analytics.",
  date: "2025-07-26",
  tags: [
    "automation",
    "nextjs",
    "dashboard",
    "performance",
    "rasa",
    "selenium",
    "sql",
    "excel",
  ],
  sections: [
    {
      id: "introduction",
      title: "🧠 From Manual Chaos to Automated Insight",
      content: `# 🧠 From Manual Chaos to Automated Insight
  
  ### Scaling Nationwide Performance Tracking in a Closed System
  
  In 1399 (2020), _Atieh Sazan Omid Nasl Emrooz_ — a subsidiary of Iran's health insurance services — faced a serious challenge. The central insurance organization declared that **funding would now depend on personnel performance**.
  
  Simple in theory — complex in execution. The data we needed lived inside **Rasa**, a **closed web system** with no API access. The only way to get performance data was to log in with employee credentials and manually download Excel reports — dozens of them — for each person, branch, and metric.
  
  And there were **over 1,200 personnel** across all provinces.
  
  Back then, downloading the Excel files for a single person would take **four people an entire day**, and analyzing that data took two more days.
  
  So we set out to automate the entire process.`,
    },
    {
      id: "step1",
      title: "🤖 Step 1: Automating Analysis and Visualization",
      content: `## 🤖 Step 1: Automating Analysis and Visualization
  
  Our first step was building a C# application to automatically parse those Excel reports and store the results in a **Microsoft SQL Server** (the organization already had an MS SQL stack in place).
  
  At first, we used **Power BI** to visualize the data — but soon we hit major limitations. Power BI was unable to handle weekly or monthly summaries reliably, especially with the volume of incoming data.
  
  Eventually, Power BI was **completely removed** from the workflow.`,
    },
    {
      id: "dashboard",
      title: "🖥️ The Next.js Dashboard",
      content: `## 🖥️ The Next.js Dashboard
  
  We replaced all visualization logic with a **custom-built Next.js dashboard**, which now powers the entire analytics layer.
  
  The dashboard supports:
  - Viewing **daily, weekly, and monthly** reports
  - Importing **Excel files of personnel off-days**, so performance metrics stay fair and accurate
  - Real-time charts, tables, and filters
  - Secure authentication and fast filtering
  - On-the-fly calculations with back-end integrations
  
  This gave the organization full control over data aggregation logic and flexible tools to adapt as policies changed.`,
    },
    {
      id: "crawler",
      title: "⚙️ Step 2: Building the Rasa Crawler",
      content: `## ⚙️ Step 2: Building the Rasa Crawler
  
  Since Rasa lacked any integration support, we built a **Selenium-based C# robot** that:
  
  - Logged in with real employee credentials
  - Navigated forms and categories
  - Set dynamic date ranges for reports (e.g., June 1–2 for daily, June 1–5 for weekly)
  - Downloaded reports per branch or per person
  - Merged and analyzed them on the back end
  
  Initially, the robot pulled around **220 reports per day**. Over time, this grew to **400–500 files daily**, all processed **overnight**.`,
    },
    {
      id: "pivot",
      title: "🔁 The Pivot: Daily Data as a Source of Truth",
      content: `## 🔁 The Pivot: Daily Data as a Source of Truth
  
  For months, we struggled with unstable monthly downloads. Rasa had a **50,000-row Excel limit**, and larger cities would exceed that — causing failed downloads or broken files.
  
  We split reports into smaller chunks, e.g.:
  - Week 1: June 1–10
  - Week 2: June 11–20
  - Week 3: June 21–30
  
  But this wasn't scalable.
  
  With the help of the internal technical team — who deeply understood Rasa's data logic — we investigated whether we could **generate weekly and monthly summaries by combining daily reports**.
  
  The answer came, _eventually_:
  > "Yes, it's possible." 😐
  
  We restructured everything. From that point on, the robot only downloaded **daily data**, and the dashboard **aggregated it programmatically** into weekly and monthly reports. This shift improved reliability and maintainability drastically.`,
    },
    {
      id: "monthly-reports",
      title: "📆 Special Monthly Reports",
      content: `## 📆 Special Monthly Reports
  
  After about a year, the insurance organization requested **another set of reports** — from a different Rasa category with very different rules.
  
  Key differences:
  - Reports had to be **monthly only** — daily/weekly breakdowns were not valid
  - Rasa still had the **50,000-row Excel limit**
  - Data had to be captured **on the 15th of each month** for accuracy
  - To stay within size limits, we split monthly reports into **three 10-day chunks**
  
  The robot was updated to recognize the 15th of the month and add these additional downloads automatically to its nightly job queue.`,
    },
    {
      id: "instability",
      title: "🧩 Dealing with Instability",
      content: `## 🧩 Dealing with Instability
  
  The Rasa system constantly changed:
  - Download flow would break
  - Categories moved or renamed
  - UI forms randomly failed
  - Accounts were **temporarily banned** if they downloaded too much from the same category
  
  We had to adapt by:
  - Changing download order
  - Rotating accounts
  - Adding retry logic`,
    },
    {
      id: "otp-hell",
      title: "🔐 OTP Hell: One-Time Passwords & Hardware Dongles",
      content: `## 🔐 OTP Hell: One-Time Passwords & Hardware Dongles
  
  Later, Rasa introduced **OTP-based login** (One-Time Password) for some user accounts. To keep downloads working:
  
  - We purchased **hardware dongles** with personnel SIM cards
  - Hosted them on **virtual machines**
  - Built a **microservice** to listen for incoming OTPs and send them via **socket** to the main bot process
  - Selenium would capture the code and complete login in real time
  
  This system was fragile, prone to bugs, and not something we wanted to rely on long term. Whenever possible, we now prioritize accounts that don't require OTP.`,
    },
    {
      id: "team",
      title: "🔧 Team & Maintenance",
      content: `## 🔧 Team & Maintenance
  
  This system was built primarily by myself as a **contract-based full-stack developer**, working closely with a **senior PHP/Android developer** on the company's IT team.
  
  While I handled the majority of coding and architecture, we collaborated on workflows, API handling, deployment, and long-term maintainability.
  
  The system is still in use today — updated by the internal team — and continues to save thousands of hours of manual work.`,
    },
    {
      id: "outcome",
      title: "🚀 Outcome",
      content: `## 🚀 Outcome
  
  - 🕒 From **3 days per person** → **1,200 personnel processed in 12 hours**
  - 🧠 Smart aggregation: **Daily-only download** strategy simplified complexity
  - 📈 Fully-featured **Next.js dashboard** (daily, weekly, monthly)
  - 🔍 Fair analytics with **manual off-day Excel import**
  - 🔄 Real-time sync with a brittle third-party system
  - 💾 Secure storage via **Microsoft SQL Server**
  - 💡 Minimal human intervention and significant cost savings`,
    },
    {
      id: "closing",
      title: "🧭 Closing Thoughts",
      content: `## 🧭 Closing Thoughts
  
  What began as a slow, manual, and error-prone workflow evolved into a highly automated, intelligent, and flexible performance tracking platform.
  
  Despite all the technical restrictions — closed systems, Excel limits, unstable pages, and even OTP logins — we built a resilient robot, an intelligent dashboard, and a robust backend to keep it all running.
  
  It wasn't easy. It still isn't. But it works — at scale — and it's being maintained and used daily to make smarter decisions.
  
  And while I was only brought in on contract, I say "we" — because this project only succeeded through true collaboration.`,
    },
  ],
};
