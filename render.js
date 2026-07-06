(function(){
  const contentEl = document.getElementById('content');
  const navScroll = document.getElementById('navScroll');
  const crumbs = document.getElementById('crumbs');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const sidebar = document.getElementById('sidebar');
  const navToggle = document.getElementById('navToggle');
  const overlayBg = document.getElementById('overlayBg');

  function babByNo(no){ return BAB.find(b=>b.no===no); }

  /* ---------------- parse alur text into timeline nodes ---------------- */
  function buildAlurTimeline(alur){
    const nodes = [];
    let counter = 0;
    alur.forEach(raw=>{
      const isBranch = raw.includes('|') && /Ya\s*→/.test(raw) && /Tidak\s*→/.test(raw);
      if(isBranch){
        const parts = raw.split('|').map(s=>s.trim());
        const yaPart = parts.find(p=>/^Ya\s*→/.test(p)) || parts[0];
        const tidakPart = parts.find(p=>/^Tidak\s*→/.test(p)) || parts[1];
        nodes.push({
          type:'branch',
          ya: yaPart.replace(/^Ya\s*→\s*/,''),
          tidak: tidakPart.replace(/^Tidak\s*→\s*/,'')
        });
        return;
      }
      const isQuestion = raw.trim().endsWith('?');
      counter++;
      nodes.push({ type: isQuestion?'decision':'normal', label: raw, idx: counter });
    });
    return nodes;
  }

  /* ---------------- sidebar nav build ---------------- */
  function buildNav(activeNo){
    let html = `<div class="nav-item ${activeNo==='cover'?'active':''}" data-route="cover">
        <span class="num">—</span><span class="lbl">Sampul & Daftar Isi</span></div>`;
    KELOMPOK.forEach(grp=>{
      html += `<div class="nav-group-label">${grp.nama}</div>`;
      grp.bab.forEach(no=>{
        const b = babByNo(no);
        html += `<div class="nav-item ${activeNo===no?'active':''}" data-route="${no}">
          <span class="num">${String(no).padStart(2,'0')}</span>
          <span class="lbl">${b.judul}</span></div>`;
      });
    });
    html += `<div class="nav-group-label">Lampiran</div>
      <div class="nav-item ${activeNo==='penutup'?'active':''}" data-route="penutup">
        <span class="num">—</span><span class="lbl">Tentang Penulis & Daftar Pustaka</span></div>`;
    navScroll.innerHTML = html;
    navScroll.querySelectorAll('.nav-item').forEach(el=>{
      el.addEventListener('click', ()=>{
        const r = el.getAttribute('data-route');
        navigate(r==='cover'||r==='penutup' ? r : parseInt(r));
        closeMobileNav();
      });
    });
  }

  /* ---------------- cover ---------------- */
  function renderCover(){
    crumbs.textContent = 'Sampul';
    let toc = '';
    BAB.forEach(b=>{
      toc += `<div class="toc-item" data-go="${b.no}">
        <span class="toc-num">${String(b.no).padStart(2,'0')}</span>
        <span class="toc-title">${b.judul}</span></div>`;
    });
    const slides = BAB.map((b,i)=>`
      <div class="hc-slide ${i===0?'active':''}" data-i="${i}" data-gallery-open="${b.no}">
        <img src="${b.foto}" alt="${b.judul}" loading="${i===0?'eager':'lazy'}">
      </div>`).join('');
    const dots = BAB.map((b,i)=>`<span class="hc-dot ${i===0?'active':''}" data-dot="${i}"></span>`).join('');
    contentEl.innerHTML = `
      <div class="cover">
        <div class="kop-line">Kementerian Imigrasi dan Pemasyarakatan &middot; Lapas Narkotika Kelas IIA Jakarta</div>
        <div class="hero-carousel" id="heroCarousel">
          <span class="vf-tr"></span><span class="vf-bl"></span>
          <span class="vf-rec">REC</span>
          <span class="zoom-hint">🔍 Lihat galeri</span>
          ${slides}
          <div class="hc-overlay"></div>
          <div class="hc-caption">
            <span id="hcLabel">BAB 01 &middot; ${BAB[0].judul}</span>
            <span class="hc-dots">${dots}</span>
          </div>
        </div>
        <div class="badge-row">
          <img class="kop-logo" src="img/logo-kemenimipas.png" alt="Logo Kementerian Imigrasi dan Pemasyarakatan">
          <div class="badge">18</div>
          <img class="kop-logo" src="img/logo-pemasyarakatan.png" alt="Logo Pemasyarakatan">
        </div>
        <h1>Buku Saku KPLP</h1>
        <h2>Modul Pelatihan Kesatuan Pengamanan Lembaga Pemasyarakatan</h2>
        <div class="meta">
          <div><b>Edisi:</b> Revisi 2026</div>
          <div><b>Disahkan oleh:</b> Rendy Caesar Pratama Putra, A.Md.P., S.H., M.H., M.M.</div>
          <div><b>Jabatan:</b> Kepala Kesatuan Pengamanan Lembaga Pemasyarakatan (KPLP) Narkotika Kelas IIA Jakarta</div>
          <div><b>Cakupan:</b> 18 Bab &mdash; Pos Penjagaan, Penggeledahan, Kepemimpinan Regu, Tata Tertib Blok, Kondisi Darurat</div>
        </div>
        <div class="toc-grid">${toc}</div>
      </div>`;
    contentEl.querySelectorAll('.toc-item').forEach(el=>{
      el.addEventListener('click', ()=> navigate(parseInt(el.getAttribute('data-go'))));
    });
    contentEl.querySelectorAll('.hc-slide[data-gallery-open]').forEach(el=>{
      el.addEventListener('click', ()=> openGallery(parseInt(el.getAttribute('data-gallery-open'))));
    });
    buildNav('cover');
    startHeroCarousel();
  }

  let heroTimer = null;
  function startHeroCarousel(){
    if(heroTimer) clearInterval(heroTimer);
    const wrap = document.getElementById('heroCarousel');
    if(!wrap) return;
    let idx = 0;
    const slideEls = wrap.querySelectorAll('.hc-slide');
    const dotEls = wrap.querySelectorAll('.hc-dot');
    const label = document.getElementById('hcLabel');
    heroTimer = setInterval(()=>{
      idx = (idx+1) % BAB.length;
      slideEls.forEach(s=>s.classList.remove('active'));
      dotEls.forEach(d=>d.classList.remove('active'));
      slideEls[idx].classList.add('active');
      dotEls[idx].classList.add('active');
      if(label) label.textContent = `BAB ${String(BAB[idx].no).padStart(2,'0')} · ${BAB[idx].judul}`;
    }, 3200);
  }

  /* ---------------- chapter ---------------- */
  function renderChapter(no){
    const b = babByNo(no);
    if(!b){ renderCover(); return; }
    crumbs.textContent = `Bab ${b.no} · ${b.judul}`;

    const tujuanHtml = b.tujuan.map(t=>`<li>${t}</li>`).join('');
    const timelineNodes = buildAlurTimeline(b.alur);
    let stagIdx = 0;
    const alurHtml = timelineNodes.map(node=>{
      const delay = (stagIdx*0.35).toFixed(2);
      stagIdx++;
      if(node.type==='branch'){
        return `<div class="tl-branch" style="--d:${delay}s">
          <div class="tl-chip tl-chip-ya"><span class="tl-chip-tag">YA</span>${node.ya}</div>
          <div class="tl-chip tl-chip-tidak"><span class="tl-chip-tag">TIDAK</span>${node.tidak}</div>
        </div>`;
      }
      const isDecision = node.type==='decision';
      return `<div class="tl-node ${isDecision?'tl-decision':''}" style="--d:${delay}s">
        <span class="tl-dot ${isDecision?'tl-diamond':''}">${isDecision?'?':node.idx}</span>
        <span class="tl-txt">${node.label}</span></div>`;
    }).join('');
    const totalDur = (timelineNodes.length*0.35 + 0.6).toFixed(2);
    const ceklisHtml = b.ceklis.map(c=>`<li><span class="box"></span>${c}</li>`).join('');
    const fotoHtml = b.foto ? `<div class="chapter-photo" data-gallery-open="${b.no}"><img src="${b.foto}" alt="Foto ilustrasi ${b.judul}" loading="lazy"><span class="zoom-hint">🔍 Perbesar</span></div>` : '';

    const idx = BAB.findIndex(x=>x.no===no);
    const prev = BAB[idx-1];
    const next = BAB[idx+1];
    const prevHtml = prev
      ? `<div class="navlink" data-go="${prev.no}"><div class="dir">◂ Sebelumnya</div><div class="ttl">Bab ${prev.no} — ${prev.judul}</div></div>`
      : `<div class="navlink" data-go="cover"><div class="dir">◂ Kembali</div><div class="ttl">Sampul & Daftar Isi</div></div>`;
    const nextHtml = next
      ? `<div class="navlink right" data-go="${next.no}"><div class="dir">Selanjutnya ▸</div><div class="ttl">Bab ${next.no} — ${next.judul}</div></div>`
      : `<div class="navlink right" data-go="penutup"><div class="dir">Selanjutnya ▸</div><div class="ttl">Tentang Penulis & Daftar Pustaka</div></div>`;

    contentEl.innerHTML = `
      <div class="chapter-page">
        <div class="chapter-head">
          <div class="chapter-eyebrow">
            <span class="stampnum">${b.no}</span> Bab ${toRoman(b.no)}
          </div>
          <h1>${b.judul}</h1>
          <div class="ringkas">${b.ringkas}</div>
        </div>

        <div class="section">
          <div class="section-label">A · Pendahuluan</div>
          ${fotoHtml}
          <p>${b.pendahuluan}</p>
        </div>

        <div class="section">
          <div class="section-label">B · Tujuan Kegiatan</div>
          <ul class="tujuan-list">${tujuanHtml}</ul>
        </div>

        <div class="section">
          <div class="section-label">C · Uraian Materi</div>
          <p>${b.uraian}</p>
        </div>

        <div class="section">
          <div class="section-label-row">
            <div class="section-label" style="border-bottom:none;padding-bottom:0;margin-bottom:0;">D · Tahapan Pelaksanaan</div>
            <button class="btn-play" id="playAlurBtn" title="Putar ulang animasi alur">▶ Putar Animasi</button>
          </div>
          <div class="alur-flow" id="alurFlow" style="--total:${totalDur}s">
            <div class="tl-line"></div>
            <div class="tl-runner"></div>
            ${alurHtml}
          </div>
          <div class="alur-note">Alur disederhanakan dari diagram tahapan pelaksanaan pada buku saku cetak.</div>
        </div>

        <div class="section">
          <div class="section-label">✓ Daftar Ceklis</div>
          <ul class="ceklis-list">${ceklisHtml}</ul>
        </div>

        <div class="chapter-nav">${prevHtml}${nextHtml}</div>
      </div>`;

    contentEl.querySelectorAll('.navlink').forEach(el=>{
      el.addEventListener('click', ()=>{
        const g = el.getAttribute('data-go');
        navigate(g==='cover'||g==='penutup' ? g : parseInt(g));
      });
    });
    const photoEl = contentEl.querySelector('[data-gallery-open]');
    if(photoEl) photoEl.addEventListener('click', ()=> openGallery(no));
    buildNav(no);
    window.scrollTo(0,0);

    const playBtn = document.getElementById('playAlurBtn');
    const flowEl = document.getElementById('alurFlow');
    if(playBtn && flowEl){
      playBtn.addEventListener('click', ()=>{
        flowEl.classList.remove('animate');
        void flowEl.offsetWidth; // force reflow to restart animation
        flowEl.classList.add('animate');
      });
      // auto-play once on chapter open
      requestAnimationFrame(()=> flowEl.classList.add('animate'));
    }
  }

  /* ---------------- closing ---------------- */
  function renderPenutup(){
    crumbs.textContent = 'Tentang Penulis & Daftar Pustaka';
    contentEl.innerHTML = `
      <div class="closing-block">
        <h2>Tentang Penulis</h2>
        <div class="penulis-card">
          <div class="penulis-photo" data-gallery-open="author"><img src="${PENULIS.foto}" alt="Foto ${PENULIS.nama}" loading="lazy"></div>
          <div>
            <div style="font-weight:600;font-size:15.5px;color:var(--navy-950);">${PENULIS.nama}</div>
            <div style="font-size:13px;color:var(--brass);margin:4px 0 10px;">${PENULIS.jabatan}</div>
            <p style="font-size:14px;line-height:1.7;margin:0;">${PENULIS.bio}</p>
          </div>
        </div>
      </div>
      <div class="closing-block">
        <h2>Daftar Pustaka</h2>
        <ol class="pustaka-list">${PUSTAKA.map(p=>`<li>${p}</li>`).join('')}</ol>
      </div>
      <div class="chapter-nav">
        <div class="navlink" data-go="18"><div class="dir">◂ Sebelumnya</div><div class="ttl">Bab 18 — Penempatan WBP pada Blok Mapenaling</div></div>
        <div class="navlink right" data-go="cover"><div class="dir">▸ Kembali</div><div class="ttl">Sampul & Daftar Isi</div></div>
      </div>`;
    contentEl.querySelectorAll('.navlink').forEach(el=>{
      el.addEventListener('click', ()=>{
        const g = el.getAttribute('data-go');
        navigate(g==='cover' ? g : parseInt(g));
      });
    });
    contentEl.querySelectorAll('[data-gallery-open]').forEach(el=>{
      el.addEventListener('click', ()=> openGallery('author'));
    });
    buildNav('penutup');
  }

  /* ---------------- router ---------------- */
  function navigate(route){
    if(route!=='cover' && heroTimer){ clearInterval(heroTimer); heroTimer=null; }
    if(route==='cover') { renderCover(); location.hash=''; }
    else if(route==='penutup'){ renderPenutup(); location.hash='penutup'; }
    else { renderChapter(route); location.hash='bab-'+route; }
  }

  function toRoman(n){
    const map=[[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
    let res='';
    map.forEach(([v,s])=>{ while(n>=v){res+=s;n-=v;} });
    return res;
  }

  /* ---------------- search ---------------- */
  function doSearch(q){
    q = q.trim().toLowerCase();
    if(q.length<2){ searchResults.classList.remove('show'); return; }
    const hits = [];
    BAB.forEach(b=>{
      const hay = [b.judul,b.ringkas,b.pendahuluan,b.uraian,...b.tujuan,...b.ceklis,...b.alur].join(' ').toLowerCase();
      if(hay.includes(q)) hits.push(b);
    });
    if(hits.length===0){
      searchResults.innerHTML = `<div class="sr-item"><div class="sr-ttl">Tidak ditemukan hasil untuk "${q}"</div></div>`;
    } else {
      searchResults.innerHTML = hits.map(b=>`
        <div class="sr-item" data-go="${b.no}">
          <div class="sr-bab">BAB ${String(b.no).padStart(2,'0')}</div>
          <div class="sr-ttl">${b.judul}</div>
        </div>`).join('');
      searchResults.querySelectorAll('.sr-item[data-go]').forEach(el=>{
        el.addEventListener('click', ()=>{
          navigate(parseInt(el.getAttribute('data-go')));
          searchResults.classList.remove('show');
          searchInput.value='';
          closeMobileNav();
        });
      });
    }
    searchResults.classList.add('show');
  }
  searchInput.addEventListener('input', e=>doSearch(e.target.value));
  document.addEventListener('click', e=>{
    if(!e.target.closest('.search-box')) searchResults.classList.remove('show');
  });

  /* ---------------- mobile nav ---------------- */
  function openMobileNav(){ sidebar.classList.add('open'); overlayBg.classList.add('show'); }
  function closeMobileNav(){ sidebar.classList.remove('open'); overlayBg.classList.remove('show'); }
  navToggle.addEventListener('click', ()=>{
    sidebar.classList.contains('open') ? closeMobileNav() : openMobileNav();
  });
  overlayBg.addEventListener('click', closeMobileNav);

  /* ---------------- gallery lightbox ---------------- */
  const galleryItems = [
    { key:'author', src: PENULIS.foto, label: 'Tentang Penulis', sub: PENULIS.nama },
    ...BAB.map(b=>({ key:b.no, src:b.foto, label:`Bab ${String(b.no).padStart(2,'0')}`, sub:b.judul }))
  ];
  let galleryIdx = 0;
  let lightboxEl = null;

  function ensureLightbox(){
    if(lightboxEl) return lightboxEl;
    lightboxEl = document.createElement('div');
    lightboxEl.className = 'lightbox';
    lightboxEl.innerHTML = `
      <div class="lb-backdrop"></div>
      <div class="lb-stage">
        <button class="lb-close" aria-label="Tutup">✕</button>
        <button class="lb-nav lb-prev" aria-label="Sebelumnya">‹</button>
        <img class="lb-img" src="" alt="">
        <button class="lb-nav lb-next" aria-label="Selanjutnya">›</button>
        <div class="lb-caption">
          <span class="lb-label"></span>
          <span class="lb-sub"></span>
          <span class="lb-count"></span>
        </div>
      </div>`;
    document.body.appendChild(lightboxEl);
    lightboxEl.querySelector('.lb-backdrop').addEventListener('click', closeGallery);
    lightboxEl.querySelector('.lb-close').addEventListener('click', closeGallery);
    lightboxEl.querySelector('.lb-prev').addEventListener('click', ()=> stepGallery(-1));
    lightboxEl.querySelector('.lb-next').addEventListener('click', ()=> stepGallery(1));
    document.addEventListener('keydown', e=>{
      if(!lightboxEl.classList.contains('open')) return;
      if(e.key==='Escape') closeGallery();
      if(e.key==='ArrowLeft') stepGallery(-1);
      if(e.key==='ArrowRight') stepGallery(1);
    });
    return lightboxEl;
  }

  function renderGallerySlide(){
    const el = ensureLightbox();
    const item = galleryItems[galleryIdx];
    el.querySelector('.lb-img').src = item.src;
    el.querySelector('.lb-img').alt = item.sub;
    el.querySelector('.lb-label').textContent = item.label;
    el.querySelector('.lb-sub').textContent = item.sub;
    el.querySelector('.lb-count').textContent = `${galleryIdx+1} / ${galleryItems.length}`;
  }

  function openGallery(key){
    const idx = galleryItems.findIndex(it=>it.key===key);
    galleryIdx = idx>=0 ? idx : 0;
    const el = ensureLightbox();
    renderGallerySlide();
    el.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeGallery(){
    if(!lightboxEl) return;
    lightboxEl.classList.remove('open');
    document.body.style.overflow = '';
  }
  function stepGallery(dir){
    galleryIdx = (galleryIdx + dir + galleryItems.length) % galleryItems.length;
    renderGallerySlide();
  }

  /* ---------------- print ---------------- */
  document.getElementById('printBtn').addEventListener('click', ()=>{
    window.print();
  });

  /* ---------------- init from hash ---------------- */
  function initFromHash(){
    const h = location.hash.replace('#','');
    if(!h) renderCover();
    else if(h==='penutup') renderPenutup();
    else if(h.startsWith('bab-')) renderChapter(parseInt(h.replace('bab-','')));
    else renderCover();
  }
  window.addEventListener('hashchange', initFromHash);
  initFromHash();
})();
