const header=document.querySelector('header');
window.addEventListener('scroll',()=>{header.classList.toggle('scrolled',window.scrollY>50)});

function lockScroll(){document.body.style.overflow='hidden'}
function unlockScroll(){document.body.style.overflow=''}

const menuToggle=document.getElementById('menuToggle');
const overlayMenu=document.getElementById('overlayMenu');
const closeBtn=document.getElementById('closeBtn');

menuToggle.addEventListener('click',()=>{overlayMenu.classList.add('active');lockScroll();overlayMenu.scrollTop=0});
closeBtn.addEventListener('click',()=>{overlayMenu.classList.remove('active');unlockScroll()});
overlayMenu.addEventListener('click',e=>{if(e.target===overlayMenu){overlayMenu.classList.remove('active');unlockScroll()}});
document.querySelectorAll('.menu-link').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    overlayMenu.classList.remove('active');
    unlockScroll();
    const id=link.getAttribute('href').substring(1);
    const el=document.getElementById(id);
    if(el){setTimeout(()=>el.scrollIntoView({behavior:'smooth'}),300)}
  })
});