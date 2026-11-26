
document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.menu');
 const nav=document.querySelector('.links');
 if(toggle&&nav){toggle.addEventListener('click',()=>{nav.classList.toggle('open');toggle.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false')})}
 document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>nav&&nav.classList.remove('open')));
 const contact=document.querySelector('#contact-form');
 if(contact){contact.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(contact);const subject=encodeURIComponent('Faith Services enquiry: '+d.get('service'));const body=encodeURIComponent('Name: '+d.get('name')+'\\nEmail: '+d.get('email')+'\\nOrganisation: '+(d.get('company')||'Not provided')+'\\nService: '+d.get('service')+'\\n\\nMessage:\\n'+d.get('message'));window.location.href='mailto:faithservice24@gmail.com?subject='+subject+'&body='+body;});}
 const search=document.querySelector('#tender-search');
 if(search){search.addEventListener('submit',e=>{e.preventDefault();const kw=document.querySelector('#keyword').value.trim();const region=document.querySelector('#region').value;const q=[kw,region].filter(Boolean).join(' ');window.open('https://www.find-tender.service.gov.uk/Search/Results?searchType=All&keywords='+encodeURIComponent(q),'_blank','noopener');});}
});
