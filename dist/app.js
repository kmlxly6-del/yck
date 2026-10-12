
const slides=[{id:'ebrelle',title:'Peluang belajar.<br>Tanpa batas.',label:'SOROTAN PROJEK · eBRELLE',desc:'Teknologi Braille digital membuka ruang pembelajaran yang lebih luas untuk komuniti OKU penglihatan.',image:'ebrelle.png'}, {id:'gaza',title:'Kasih merentasi<br>sempadan.',label:'BANTUAN KEMANUSIAAN · GAZA',desc:'Bersama menyokong masyarakat yang terjejas melalui usaha bantuan kemanusiaan.',image:'gaza.jpg'}, {id:'rmt',title:'Nutrisi hari ini.<br>Harapan esok.',label:'PENDIDIKAN · MAKANAN TAMBAHAN',desc:'Menyokong kesejahteraan murid dengan makanan tambahan di sekolah-sekolah terpilih.',image:'rmt.webp'}, {id:'dialisis',title:'Menjaga insan.<br>Membina harapan.',label:'PUSAT DIALISIS · PERANCANGAN 2027',desc:'Usaha jangka panjang bagi membantu golongan yang memerlukan perkhidmatan dialisis.',image:'dialisis.jpg'}, {id:'kampung',title:'Komuniti kuat.<br>Masa depan cerah.',label:'KAMPUNG ANGKAT · PERANCANGAN 2027',desc:'Membangunkan kesejahteraan kampung bersama masyarakat setempat.',image:'kampung.jpeg'}];
const cores=[['Sosial, Kebajikan & Kemanusiaan','Menyantuni asnaf, ibu tunggal, anak yatim dan golongan OKU.','teras-sosial-kebajikan-dan-kemanusiaan/'],['Pendidikan & Modal Insan','Membina peluang pembelajaran dan kemahiran untuk golongan B40.','teras-pendidikan-dan-modal-insan/'],['Ekonomi','Memperkasa keusahawanan dan kemandirian ekonomi masyarakat.','teras-ekonomi/'],['Integrasi & Kebudayaan Etnik','Memupuk perpaduan melalui budaya dan kepelbagaian etnik.','teras-integrasi-dan-kebudayaan-etnik/'],['Kelestarian Alam','Menjaga alam, warisan dan keseimbangan ekosistem.','teras-kelestarian-alam/'],['Rangkaian Antarabangsa','Menjalin kerjasama dan usaha kemanusiaan merentas sempadan.','teras-rangkaian-antarabangsa/']];
const coreIcons=[`<path d="M12 7.2C8.8 2.8 3 4.2 3 8.6c0 3.7 4.2 6.9 9 10.4 4.8-3.5 9-6.7 9-10.4 0-4.4-5.8-5.8-9-1.4Z"/><path d="m8 12 2.6 2.6L16 9.5"/>`, `<path d="M3 5c3-1 6-.5 9 1v15c-3-1.5-6-2-9-1V5Zm18 0c-3-1-6-.5-9 1v15c3-1.5 6-2 9-1V5Z"/><path d="M6 9h3m-3 4h3m6-4h3m-3 4h3"/>`, `<path d="M4 20h16M6 16v-5m6 5V7m6 9V3"/><path d="m4 7 5-3 5 1 6-3"/>`, `<circle cx="8" cy="7" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2.5 20v-3a5.5 5.5 0 0 1 11 0v3m1-5a4.5 4.5 0 0 1 7 3v2"/>`, `<path d="M19.5 3.5C9 2 3.5 8 5.5 14.5 7.5 21 21 20 19.5 3.5Z"/><path d="m3 22 12-13m-7 8v-5m4 1h5"/>`, `<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18M5 6.5h14M5 17.5h14"/>`];
document.querySelector('#core-grid').innerHTML=cores.map((c,i)=>`<article class="core"><div class="core-top"><span class="core-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${coreIcons[i]}</svg></span><span class="core-number">0${i+1}</span></div><h3>${c[0]}</h3><p>${c[1]}</p><a class="text-link" href="/${c[2]}">Terokai teras <span aria-hidden="true">↗</span></a></article>`).join('');
document.querySelector('#slides').innerHTML=slides.map((s,i)=>`<article class="slide ${i===0?'active':''}" aria-hidden="${i!==0}"><img src="assets/${s.image}" width="1600" height="900" alt="${projects.find(p=>p.id===s.id).title}" ${i===0?'fetchpriority="high"':'loading="lazy"'}><div class="slide-copy"><span class="eyebrow">${s.label}</span><h2>${s.title}</h2><p>${s.desc}</p>${`<a class="pill white" href="${projects.find(p=>p.id===s.id).path}">Info Lanjut <span aria-hidden="true">↗</span></a>`}</div></article>`).join('');
document.querySelector('#dots').innerHTML=slides.map((_,i)=>`<button aria-label="Lihat projek ${i+1}: ${projects.find(p=>p.id===slides[i].id).title}" aria-pressed="${i===0}" class="${i===0?'active':''}" data-slide="${i}"></button>`).join('');
const hero=document.querySelector('.hero');
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
const autoplayButton=document.querySelector('#autoplay-toggle');
let current=0,slideTimer=null,autoplayPaused=motionPreference.matches,heroVisible=true,heroHovered=false;
function setSlide(i){
  current=(i+slides.length)%slides.length;
  document.querySelectorAll('.slide').forEach((s,j)=>{s.classList.toggle('active',j===current);s.setAttribute('aria-hidden',j!==current);s.inert=j!==current});
  document.querySelectorAll('[data-slide]').forEach((b,j)=>{b.classList.toggle('active',j===current);b.setAttribute('aria-pressed',j===current)});
  document.querySelector('#slide-count').textContent=`0${current+1} / 05`;
}
function updateAutoplay(){
  clearTimeout(slideTimer);
  autoplayButton.setAttribute('aria-pressed',String(autoplayPaused));
  autoplayButton.setAttribute('aria-label',autoplayPaused?'Mainkan slider automatik':'Jeda slider automatik');
  const pauseSymbol=autoplayPaused?'▷':'Ⅱ';
  if(autoplayButton.firstElementChild.textContent!==pauseSymbol)autoplayButton.firstElementChild.textContent=pauseSymbol;
  if(autoplayPaused||document.hidden||!heroVisible||heroHovered||hero.matches(':focus-within'))return;
  slideTimer=setTimeout(()=>{setSlide(current+1);updateAutoplay()},5000);
}
function navigateSlide(i){setSlide(i);updateAutoplay()}
document.querySelector('#prev').onclick=()=>navigateSlide(current-1);
document.querySelector('#next').onclick=()=>navigateSlide(current+1);
document.querySelectorAll('[data-slide]').forEach(b=>b.onclick=()=>navigateSlide(Number(b.dataset.slide)));
autoplayButton.onclick=()=>{autoplayPaused=!autoplayPaused;updateAutoplay()};
hero.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();navigateSlide(current+1)}if(e.key==='ArrowLeft'){e.preventDefault();navigateSlide(current-1)}});
let touchX;
hero.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX;clearTimeout(slideTimer)},{passive:true});
hero.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-touchX;if(Math.abs(d)>60)navigateSlide(current+(d<0?1:-1));else updateAutoplay()},{passive:true});
hero.addEventListener('touchcancel',updateAutoplay,{passive:true});
hero.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'){heroHovered=true;updateAutoplay()}});
hero.addEventListener('pointerleave',()=>{heroHovered=false;updateAutoplay()});
hero.addEventListener('focusin',updateAutoplay);
hero.addEventListener('focusout',()=>requestAnimationFrame(updateAutoplay));
document.addEventListener('visibilitychange',updateAutoplay);
motionPreference.addEventListener('change',e=>{autoplayPaused=e.matches;updateAutoplay()});
new IntersectionObserver(([entry])=>{heroVisible=entry.isIntersecting;updateAutoplay()},{threshold:.2}).observe(hero);
setSlide(0);updateAutoplay();
let filter=new URLSearchParams(location.search).get('kategori')||'all',expanded=false;const allowed=['all','kebajikan','pendidikan','komuniti','alam'];if(!allowed.includes(filter))filter='all';function renderProjects(){const list=projects.filter(p=>filter==='all'||p.cat===filter),visible=expanded?list:list.slice(0,6);document.querySelector('#project-grid').innerHTML=visible.map(p=>`<article class="project-card"><div class="project-image"><img src="assets/${p.image}" width="600" height="450" alt="${p.title}" loading="lazy"><span class="tag">${p.tag}</span></div><h3>${p.title}</h3><p>${p.desc}</p>${`<a class="text-link" href="${p.path}">Info Lanjut <span aria-hidden="true">↗</span></a>`}</article>`).join('');document.querySelector('#result-count').textContent=`Memaparkan ${visible.length} daripada ${list.length} program`;const b=document.querySelector('#more');b.hidden=list.length<=6;b.textContent=expanded?'Ringkaskan Program ↑':'Lihat Semua Program ↓';document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b.dataset.filter===filter);b.setAttribute('aria-pressed',b.dataset.filter===filter)})}
document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;expanded=false;const u=new URL(location.href);if(filter==='all')u.searchParams.delete('kategori');else u.searchParams.set('kategori',filter);history.replaceState(null,'',u);renderProjects()});document.querySelector('#more').onclick=()=>{expanded=!expanded;renderProjects()};renderProjects();
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#nav');menu.onclick=()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.setAttribute('aria-label',open?'Tutup menu':'Buka menu');menu.textContent=open?'×':'☰'};nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰';menu.setAttribute('aria-label','Buka menu')}});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰';menu.focus()}});
document.querySelector('#copy-bank').onclick=async()=>{try{await navigator.clipboard.writeText('105190009489');document.querySelector('#copy-status').textContent='Nombor akaun berjaya disalin.'}catch{document.querySelector('#copy-status').textContent='Pilih dan salin nombor akaun 1051 9000 9489.'}};
const articles=[['karbon.jpg','Malaysia Sasar Pengurangan Keamatan Karbon 45% Menjelang 2030','kesan-perang-tarif-kepada-golongan-mampan-dan-kurang-berkemampuan-3/'],['rusia.jpg','Pertemuan PM dan Mufti Besar Rusia','kesan-perang-tarif-kepada-golongan-mampan-dan-kurang-berkemampuan-2/'],['asean.jpeg','Reruai dan Pameran Sempena Sidang Kemuncak ASEAN','kesan-perang-tarif-kepada-golongan-mampan-dan-kurang-berkemampuan/']];document.querySelector('#article-grid').innerHTML=articles.map(a=>`<article class="article"><img src="assets/${a[0]}" alt="${a[1]}" width="600" height="450" loading="lazy"><small>ARKIB ARTIKEL YCK</small><h3>${a[1]}</h3><a class="text-link" href="/artikel_post/${a[2]}">Baca artikel <span aria-hidden="true">↗</span></a></article>`).join('');document.querySelector('#year').textContent=new Date().getFullYear();

// Keep the floating navigation compact after leaving the hero's top edge.
const siteHeader=document.querySelector('#site-header');
const headerObserver=new IntersectionObserver(([entry])=>{siteHeader.classList.toggle('is-scrolled',!entry.isIntersecting)},{rootMargin:'-90px 0px 0px 0px',threshold:0});
const topSentinel=document.createElement('span');topSentinel.className='nav-sentinel';topSentinel.setAttribute('aria-hidden','true');document.body.prepend(topSentinel);headerObserver.observe(topSentinel);
