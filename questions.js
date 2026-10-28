<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Student Portal - Subject Landing</title>
    <style>
      :root {
        --bg: #edf3fb;
        --card: #f3f5f8;
        --panel: #ffffff;
        --muted: #4a5a6d;
        --text: #122033;
        --line: #dfeaf4;
        --blue: #2d6df6;
        --blue-dark: #1b5fe1;
        --blue-soft: #eaf0ff;
        --shadow: 0 12px 30px rgba(17, 24, 39, 0.08);
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
        background: var(--bg);
        color: var(--text);
        font-family: "Segoe UI", Arial, sans-serif;
      }

      .page {
        max-width: 1400px;
        margin: 0 auto;
        padding: 30px 36px 60px;
      }

      .subject-shell {
        background: rgba(255, 255, 255, 0.45);
        border: 1px solid var(--line);
        border-radius: 28px;
        padding: 26px 30px 30px;
        box-shadow: var(--shadow);
      }

      .topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        margin-bottom: 22px;
      }

      .topbar-left {
        display: flex;
        align-items: center;
        gap: 18px;
      }

      .icon-box {
        width: 84px;
        height: 84px;
        border-radius: 18px;
        background: linear-gradient(135deg, #2d6df6, #5e8cff);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 22px rgba(45, 109, 246, 0.25);
      }

      .icon-box svg {
        width: 48px;
        height: 48px;
        stroke: white;
      }

      .year-pill {
        background: rgba(255, 255, 255, 0.3);
        border: 1px solid rgba(148, 163, 184, 0.28);
        border-radius: 999px;
        padding: 14px 22px;
        font-size: 18px;
        font-weight: 700;
        color: #2b3c51;
        white-space: nowrap;
      }

      .content-wrap {
        padding-left: 6px;
      }

      .title {
        font-size: clamp(38px, 4vw, 64px);
        line-height: 1.1;
        font-weight: 800;
        letter-spacing: -0.04em;
        margin: 8px 0 18px;
      }

      .description {
        max-width: 1200px;
        font-size: clamp(18px, 2vw, 30px);
        line-height: 1.55;
        color: var(--muted);
        margin: 0;
        letter-spacing: -0.02em;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(260px, 1fr));
        gap: 18px;
        margin-top: 26px;
      }

      .stat-card {
        background: rgba(255, 255, 255, 0.45);
        border: 1px solid var(--line);
        border-radius: 18px;
        padding: 22px 22px 16px;
        min-height: 118px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .stat-row {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 12px;
        color: var(--blue);
      }

      .stat-icon {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: var(--blue-soft);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
      }

      .stat-label {
        font-size: 18px;
        color: var(--muted);
        font-weight: 600;
      }

      .stat-value {
        font-size: clamp(24px, 2.5vw, 42px);
        font-weight: 800;
        letter-spacing: -0.04em;
      }

      .cta {
        margin-top: 30px;
        width: 100%;
        border: none;
        background: linear-gradient(135deg, var(--blue), var(--blue-dark));
        color: white;
        border-radius: 18px;
        padding: 28px 26px;
        font-size: clamp(18px, 2vw, 34px);
        font-weight: 800;
        letter-spacing: -0.02em;
        cursor: pointer;
        box-shadow: 0 12px 24px rgba(45, 109, 246, 0.28);
      }

      .cta:hover {
        filter: brightness(1.02);
      }

      .cta span {
        display: inline-flex;
        align-items: center;
        gap: 12px;
      }

      .arrow {
        font-size: 1.3em;
      }

      @media (max-width: 900px) {
        .page {
          padding: 18px 18px 40px;
        }

        .subject-shell {
          padding: 20px 18px 20px;
        }

        .topbar {
          flex-direction: column;
          align-items: flex-start;
        }

        .year-pill {
          white-space: normal;
          text-align: left;
        }

        .stats-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>
  </head>
  <body>
    <div class="page">
      <div class="subject-shell">
        <div class="topbar">
          <div class="topbar-left">
            <div class="icon-box" aria-label="subject icon">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H18a2 2 0 0 1 2 2v13.7a1.3 1.3 0 0 1-2.1 1l-2.7-2.1a2 2 0 0 0-1.2-.4H6.5A2.5 2.5 0 0 1 4 15.5v-10Z"></path>
                <path d="M8 7h8"></path>
                <path d="M8 11h8"></path>
                <path d="M8 15h5"></path>
              </svg>
            </div>
          </div>

          <div class="year-pill" id="yearLabel"></div>
        </div>

        <div class="content-wrap">
          <h1 class="title" id="subjectTitle"></h1>
          <p class="description" id="subjectDescription"></p>

          <div class="stats-grid" id="statsGrid"></div>

          <button class="cta" id="ctaBtn">
            <span id="ctaText"></span>
          </button>
        </div>
      </div>
    </div>

    <script src="questions.js"></script>
    <script>
      const yearLabel = document.getElementById("yearLabel");
      const subjectTitle = document.getElementById("subjectTitle");
      const subjectDescription = document.getElementById("subjectDescription");
      const statsGrid = document.getElementById("statsGrid");
      const ctaBtn = document.getElementById("ctaBtn");
      const ctaText = document.getElementById("ctaText");

      function renderSubject() {
        if (!subject) return;

        yearLabel.textContent = subject.yearLabel;
        subjectTitle.textContent = subject.title;
        subjectDescription.textContent = subject.description;
        ctaText.textContent = subject.cta + " ";
        ctaText.innerHTML += '<span class="arrow">→</span>';

        statsGrid.innerHTML = subject.stats.map((item) => {
          return `
            <div class="stat-card">
              <div class="stat-row">
                <div class="stat-icon">${item.icon}</div>
                <div class="stat-label">${item.label}</div>
              </div>
              <div class="stat-value">${item.value}</div>
            </div>
          `;
        }).join("");
      }

      renderSubject();
    </script>
  </body>
</html>
