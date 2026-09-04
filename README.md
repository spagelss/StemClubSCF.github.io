# StemClubSCF.github.io
<!--
==========================================================================
  SCF STEM CLUB — CANVAS EMBED
==========================================================================
  HOW TO USE
  1. Open your Canvas page/module item → Edit → click the "</>" (HTML editor)
     icon in the Rich Content Editor toolbar.
  2. Delete whatever is in there and paste this entire file's contents.
  3. Save the page.

  WHAT TO CUSTOMIZE (search for these markers, all in one place per section)
  - Colors:        edit the CSS variables in the ":root" block below.
  - Club name/tag: search "CLUB NAME"
  - Meeting info:  search "MEETING INFO"
  - "What we do":  search "ACTIVITIES"
  - Events list:   search "EVENTS"
  - Links:         search "href=\"#\"" and replace with your real URLs

  This file has no external dependencies except one optional Google Fonts
  link (safe to delete — it falls back to system fonts automatically if
  Canvas strips it).

  ABOUT THE LIVE ANNOUNCEMENTS SECTION (near the bottom of this file)
  - It auto-detects the course ID from the page's own URL and calls
    Canvas's own API (/api/v1/courses/:id/discussion_topics?only_announcements=true)
    using the viewer's existing login session — no API key needed, and it
    only shows announcements the logged-in viewer already has permission
    to see.
  - Canvas's Rich Content Editor sometimes strips <script> tags when a
    non-admin saves a Page through the HTML editor. If you paste this in
    and the announcements box just says "Loading announcements…" forever,
    that's what happened. Workarounds, easiest first:
      1. Ask an admin to paste/save this page for you (admins' HTML
         usually isn't sanitized), or check if your role has the
         "no_filtering" permission.
      2. Host this file externally (e.g. GitHub Pages) and embed it with
         an <iframe src="..."> in Canvas instead — iframes always run
         their own JS regardless of Canvas's sanitizer.
==========================================================================
-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<div class="stemclub-embed">
<style>
  .stemclub-embed {
    /* ---------------- COLOR TOKENS (edit here) ---------------- */
    --sc-navy:   #0E3A52;   /* primary dark background (SCF blue) */
    --sc-navy2:  #124A66;   /* secondary navy, slightly lighter   */
    --sc-green:  #1F8A5F;   /* SCF green accent                   */
    --sc-teal:   #2FA6A0;   /* teal accent                        */
    --sc-mist:   #EAF4F1;   /* pale panel background               */
    --sc-paper:  #FBFDFC;   /* page background                    */
    --sc-ink:    #10242E;   /* body text                          */
    --sc-ink-soft: #46606A; /* secondary text                     */
    --sc-line:   #D6E6E1;   /* hairline borders                   */

    --sc-font-head: 'Space Grotesk', 'Trebuchet MS', sans-serif;
    --sc-font-body: 'Inter', -apple-system, 'Segoe UI', sans-serif;

    all: initial;
    display: block;
    font-family: var(--sc-font-body);
    color: var(--sc-ink);
    background: var(--sc-paper);
    max-width: 900px;
    margin: 0 auto;
    border-radius: 18px;
    overflow: hidden;
    border: 1px solid var(--sc-line);
    box-shadow: 0 1px 3px rgba(14,58,82,0.08);
  }
  .stemclub-embed * { box-sizing: border-box; }
  .stemclub-embed p  { margin: 0 0 0.7em; line-height: 1.55; }
  .stemclub-embed a  { color: inherit; }

  /* ---------------- HERO ---------------- */
  .sc-hero {
    position: relative;
    background: linear-gradient(160deg, var(--sc-navy) 0%, var(--sc-navy2) 100%);
    color: #F3FAF8;
    padding: 44px 34px 34px;
    overflow: hidden;
  }
  .sc-hero::before {
    /* faint circuit-trace texture */
    content: "";
    position: absolute; inset: 0;
    background-image:
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 34px 34px;
    mask-image: radial-gradient(circle at 80% 20%, black, transparent 70%);
  }
  .sc-hero-row {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;
  }
  .sc-eyebrow {
    font-family: var(--sc-font-body);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: #9FD9CE;
    margin-bottom: 10px;
  }
  .sc-title {
    font-family: var(--sc-font-head);
    font-weight: 700;
    font-size: clamp(28px, 5vw, 40px);
    line-height: 1.08;
    margin: 0 0 10px;
    max-width: 480px;
  }
  .sc-title span { color: var(--sc-teal); }
  .sc-sub {
    font-size: 15px;
    color: #CFE7E1;
    max-width: 420px;
    margin: 0;
  }
  /* orbiting atom graphic */
  .sc-atom { width: 128px; height: 128px; flex-shrink: 0; }
  .sc-atom .ring { fill: none; stroke: rgba(255,255,255,0.35); stroke-width: 1.4; }
  .sc-atom .core { fill: #6FE0C9; }
  .sc-atom .e { fill: #F3FAF8; }
  .sc-atom .g1 { transform-origin: 64px 64px; animation: sc-spin 9s linear infinite; }
  .sc-atom .g2 { transform-origin: 64px 64px; animation: sc-spin 13s linear infinite reverse; }
  @keyframes sc-spin { to { transform: rotate(360deg); } }
  @media (prefers-reduced-motion: reduce) {
    .sc-atom .g1, .sc-atom .g2 { animation: none; }
  }

  /* quick-facts strip */
  .sc-facts {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: rgba(255,255,255,0.14);
    border-radius: 12px;
    margin-top: 30px;
    overflow: hidden;
  }
  .sc-fact {
    background: rgba(255,255,255,0.06);
    padding: 14px 16px;
  }
  .sc-fact-label { font-size: 11.5px; color: #9FD9CE; margin-bottom: 4px; }
  .sc-fact-value { font-family: var(--sc-font-head); font-weight: 600; font-size: 15px; color: #FBFDFC; }

  /* ---------------- SECTIONS ---------------- */
  .sc-section { padding: 36px 34px; }
  .sc-section + .sc-section { border-top: 1px solid var(--sc-line); }
  .sc-h2 {
    font-family: var(--sc-font-head);
    font-weight: 600;
    font-size: 22px;
    color: var(--sc-navy);
    margin: 0 0 14px;
  }
  .sc-lead { color: var(--sc-ink-soft); max-width: 60ch; }

  /* activities: asymmetric connected list */
  .sc-activities { margin-top: 22px; display: flex; flex-direction: column; }
  .sc-activity {
    position: relative;
    display: flex;
    gap: 16px;
    padding: 14px 0;
  }
  .sc-activity:not(:last-child) { border-bottom: 1px dashed var(--sc-line); }
  .sc-activity-mark {
    flex-shrink: 0;
    width: 10px; height: 10px;
    margin-top: 6px;
    border-radius: 50%;
    background: var(--sc-green);
  }
  .sc-activity h3 {
    font-family: var(--sc-font-head);
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 4px;
    color: var(--sc-ink);
  }
  .sc-activity p { color: var(--sc-ink-soft); font-size: 14.5px; margin: 0; }

  /* events */
  .sc-events { margin-top: 18px; display: flex; flex-direction: column; gap: 2px; }
  .sc-event {
    display: grid;
    grid-template-columns: 76px 1fr;
    gap: 16px;
    padding: 14px 16px;
    background: var(--sc-mist);
    border-radius: 10px;
  }
  .sc-event + .sc-event { margin-top: 8px; }
  .sc-event-date {
    font-family: var(--sc-font-head);
    color: var(--sc-navy);
  }
  .sc-event-date .d { display: block; font-size: 22px; font-weight: 700; line-height: 1; }
  .sc-event-date .m { display: block; font-size: 12px; color: var(--sc-ink-soft); margin-top: 2px; }
  .sc-event-body h3 { font-size: 15.5px; font-weight: 600; margin: 0 0 3px; font-family: var(--sc-font-head); }
  .sc-event-body p { font-size: 13.5px; color: var(--sc-ink-soft); margin: 0; }

  /* announcements (live, pulled from Canvas) */
  .sc-ann {
    display: grid;
    text-decoration: none;
    color: inherit;
  }
  .sc-ann-empty {
    color: var(--sc-ink-soft);
    font-size: 14px;
    background: var(--sc-mist);
    border-radius: 10px;
    padding: 14px 16px;
    margin-top: 18px;
  }

  /* footer */
  .sc-foot {
    padding: 16px 34px 22px;
    font-size: 12px;
    color: var(--sc-ink-soft);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
  }
  .sc-foot a { text-decoration: none; border-bottom: 1px solid var(--sc-line); }

  @media (max-width: 560px) {
    .sc-hero, .sc-section, .sc-foot { padding-left: 20px; padding-right: 20px; }
    .sc-facts { grid-template-columns: 1fr; }
    .sc-atom { display: none; }
  }
</style>

<!-- ===================== HERO / CLUB NAME ===================== -->
<div class="sc-hero">
  <div class="sc-hero-row">
    <div>
      <div class="sc-eyebrow">State College of Florida · Student Organization</div>
      <h1 class="sc-title">STEM Club<br><span>at SCF</span></h1>
      <p class="sc-sub">Hands-on projects, guest speakers, and a community for students into science, tech, engineering, and math.</p>
    </div>
    <svg class="sc-atom" viewBox="0 0 128 128">
      <g class="g1"><ellipse class="ring" cx="64" cy="64" rx="52" ry="20"/></g>
      <g class="g2"><ellipse class="ring" cx="64" cy="64" rx="52" ry="20" transform="rotate(60 64 64)"/></g>
      <g><ellipse class="ring" cx="64" cy="64" rx="52" ry="20" transform="rotate(120 64 64)"/></g>
      <circle class="core" cx="64" cy="64" r="7"/>
      <circle class="e" cx="116" cy="64" r="3.5"/>
      <circle class="e" cx="12" cy="64" r="3.5"/>
    </svg>
  </div>

  <!-- ===================== MEETING INFO ===================== -->
  <div class="sc-facts">
    <div class="sc-fact">
      <div class="sc-fact-label">Meets</div>
      <div class="sc-fact-value">Thursdays, 3:00–4:00 PM</div>
    </div>
    <div class="sc-fact">
      <div class="sc-fact-label">Where</div>
      <div class="sc-fact-value">Bradenton Campus, Building 5, Rm 108</div>
    </div>
    <div class="sc-fact">
      <div class="sc-fact-label">Open to</div>
      <div class="sc-fact-value">All SCF students, any major</div>
    </div>
  </div>
</div>

<!-- ===================== ACTIVITIES ===================== -->
<div class="sc-section">
  <h2 class="sc-h2">What we do</h2>
  <p class="sc-lead">STEM Club is a low-pressure space to build things, meet other STEM students, and get face time with faculty and industry guests outside of class.</p>
  <div class="sc-activities">
    <div class="sc-activity">
      <div class="sc-activity-mark"></div>
      <div>
        <h3>Weekly build sessions</h3>
        <p>Small group projects — robotics, circuits, coding challenges — rotating each term based on member interest.</p>
      </div>
    </div>
    <div class="sc-activity">
      <div class="sc-activity-mark"></div>
      <div>
        <h3>Guest speakers</h3>
        <p>SCF faculty and local STEM professionals visit to talk about their work and answer questions about careers and transfer paths.</p>
      </div>
    </div>
    <div class="sc-activity">
      <div class="sc-activity-mark"></div>
      <div>
        <h3>Campus outreach</h3>
        <p>STEM demo tables at SCF events, and volunteer trips to local schools for science-fair judging and demos.</p>
      </div>
    </div>
    <div class="sc-activity">
      <div class="sc-activity-mark"></div>
      <div>
        <h3>Competitions &amp; field trips</h3>
        <p>Hackathons, regional competitions, and visits to labs and companies in the Sarasota–Manatee area.</p>
      </div>
    </div>
  </div>
</div>

<!-- ===================== EVENTS ===================== -->
<div class="sc-section">
  <h2 class="sc-h2">Upcoming events</h2>
  <div class="sc-events">
    <div class="sc-event">
      <div class="sc-event-date"><span class="d">11</span><span class="m">Sep</span></div>
      <div class="sc-event-body">
        <h3>First meeting of the semester</h3>
        <p>Intro to STEM Club, project sign-ups, and pizza. Building 5, Rm 108.</p>
      </div>
    </div>
    <div class="sc-event">
      <div class="sc-event-date"><span class="d">25</span><span class="m">Sep</span></div>
      <div class="sc-event-body">
        <h3>Guest speaker: SCF Engineering faculty</h3>
        <p>A look at transfer pathways into engineering programs.</p>
      </div>
    </div>
    <div class="sc-event">
      <div class="sc-event-date"><span class="d">09</span><span class="m">Oct</span></div>
      <div class="sc-event-body">
        <h3>Build night: mini robotics</h3>
        <p>Teams assemble and program a simple line-following robot.</p>
      </div>
    </div>
  </div>
</div>

<!-- ===================== ANNOUNCEMENTS (live from Canvas) ===================== -->
<div class="sc-section">
  <h2 class="sc-h2">Announcements</h2>
  <p class="sc-lead">Pulled automatically from this course's Canvas announcements.</p>
  <div class="sc-events" id="sc-announcements">
    <p class="sc-ann-empty">Loading announcements…</p>
  </div>
</div>

<!-- ===================== FOOTER ===================== -->
<div class="sc-foot">
  <span>State College of Florida · Registered Student Organization</span>
  <span><a href="#" target="_blank" rel="noopener">Instagram</a> · <a href="#" target="_blank" rel="noopener">Discord</a></span>
</div>

</div>

<script>
(function () {
  var container = document.getElementById('sc-announcements');
  if (!container) return;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function showMessage(text) {
    container.innerHTML = '<p class="sc-ann-empty">' + escapeHtml(text) + '</p>';
  }

  // Pull the course ID out of the current page's own URL, e.g.
  // https://yourschool.instructure.com/courses/12345/pages/stem-club
  var match = window.location.pathname.match(/\/courses\/(\d+)/);
  if (!match) {
    showMessage('Announcements can only load when this page is viewed inside a Canvas course.');
    return;
  }
  var courseId = match[1];
  var apiUrl = '/api/v1/courses/' + courseId +
    '/discussion_topics?only_announcements=true&per_page=5';

  fetch(apiUrl, { headers: { Accept: 'application/json' }, credentials: 'same-origin' })
    .then(function (res) {
      if (!res.ok) throw new Error('Canvas API returned ' + res.status);
      return res.json();
    })
    .then(function (data) {
      if (!Array.isArray(data) || data.length === 0) {
        showMessage('No announcements yet — check back soon.');
        return;
      }
      data.sort(function (a, b) {
        return new Date(b.posted_at || 0) - new Date(a.posted_at || 0);
      });
      var html = data.slice(0, 5).map(function (a) {
        var posted = a.posted_at ? new Date(a.posted_at) : null;
        var day = posted ? posted.getDate() : '--';
        var month = posted ? posted.toLocaleString('en-US', { month: 'short' }) : '';
        var plain = (a.message || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        var snippet = plain.length > 140 ? plain.slice(0, 140) + '…' : plain;
        var url = a.html_url || '#';
        var title = a.title || 'Untitled announcement';
        return (
          '<a class="sc-event sc-ann" href="' + url + '" target="_blank" rel="noopener">' +
            '<div class="sc-event-date"><span class="d">' + day + '</span><span class="m">' + month + '</span></div>' +
            '<div class="sc-event-body"><h3>' + escapeHtml(title) + '</h3><p>' + escapeHtml(snippet) + '</p></div>' +
          '</a>'
        );
      }).join('');
      container.innerHTML = html;
    })
    .catch(function () {
      showMessage("Couldn't load announcements right now — you may need to view this page while logged into Canvas.");
    });
})();
</script>
