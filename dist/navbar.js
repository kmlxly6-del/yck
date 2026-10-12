(()=>{
 const header=document.querySelector('#site-header'),nav=header.querySelector('#nav'),toggle=header.querySelector('.menu-toggle'),groups=[...nav.querySelectorAll('.nav-group')],mobile=matchMedia('(max-width:960px)');
 function closeGroup(group){group.querySelector('button').setAttribute('aria-expanded','false');group.querySelector('.nav-panel').hidden=true;group.classList.remove('expanded')}
 function closeGroups(){groups.forEach(closeGroup)}
 function closeMenu(){closeGroups();nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Buka menu');header.classList.remove('menu-open')}
 toggle.addEventListener('click',()=>{const open=!nav.classList.contains('open');closeGroups();nav.classList.toggle('open',open);header.classList.toggle('menu-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Tutup menu':'Buka menu')});
 groups.forEach(group=>{const button=group.querySelector('button'),panel=group.querySelector('.nav-panel');button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';closeGroups();button.setAttribute('aria-expanded',String(open));panel.hidden=!open;group.classList.toggle('expanded',open)});group.addEventListener('focusout',e=>{if(e.relatedTarget&&!group.contains(e.relatedTarget))closeGroup(group)})});
 nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
 document.addEventListener('pointerdown',e=>{if(!header.contains(e.target))closeMenu()});
 document.addEventListener('keydown',e=>{if(e.key!=='Escape')return;const group=groups.find(g=>g.classList.contains('expanded'));if(group){closeGroup(group);group.querySelector('button').focus()}else if(nav.classList.contains('open')){closeMenu();toggle.focus()}});
 mobile.addEventListener('change',closeMenu);
 header.addEventListener('focusout',e=>{if(e.relatedTarget&&!header.contains(e.relatedTarget))closeMenu()});
 const path=location.pathname.replace(/\/$/,'')||'/';
 nav.querySelectorAll('a').forEach(a=>{if((new URL(a.href).pathname.replace(/\/$/,'')||'/')===path){a.setAttribute('aria-current','page');const group=a.closest('.nav-group');if(group)group.querySelector('button').classList.add('is-current')}});
 if(/^\/(program|projek_derma)\//.test(path))nav.querySelector('[aria-controls="nav-program"]').classList.add('is-current');
 if(path.startsWith('/gallery/'))nav.querySelector('a[href="/media/"]').classList.add('is-current');
 if(path.startsWith('/artikel_post/'))nav.querySelector('a[href="/artikel/"]').classList.add('is-current');
})();
