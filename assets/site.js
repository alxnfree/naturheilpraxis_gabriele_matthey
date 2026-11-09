document.addEventListener('DOMContentLoaded',()=>{
 const button=document.querySelector('.menu-button');
 const nav=document.querySelector('.nav-wrap');
 if(button&&nav){button.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');button.setAttribute('aria-expanded',String(open));button.querySelector('em').textContent=open?'Menü schließen':'Menü öffnen';});document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!button.contains(e.target)){nav.classList.remove('is-open');button.setAttribute('aria-expanded','false');button.querySelector('em').textContent='Menü öffnen';}});}
 document.querySelectorAll('.nav-drop').forEach(group=>group.addEventListener('toggle',()=>{if(group.open)document.querySelectorAll('.nav-drop').forEach(other=>{if(other!==group)other.open=false;});}));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.nav-drop[open]').forEach(d=>d.open=false);if(nav&&button){nav.classList.remove('is-open');button.setAttribute('aria-expanded','false');}}});
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
});