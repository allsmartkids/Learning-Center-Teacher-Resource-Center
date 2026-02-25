
(function(){
  // year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // mobile nav
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(btn && nav){
    btn.addEventListener('click', () => {
      nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
    });
  }

  // contact form -> mailto (works on GitHub Pages)
  const form = document.querySelector('[data-contact-form]');
  const status = document.querySelector('[data-form-status]');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const message = form.querySelector('[name="message"]').value.trim();

      if(!name || !email || !message){
        if(status) status.textContent = "Please fill out your name, email, and message.";
        return;
      }

      const to = "baharper1950@gmail.com";
      const subject = encodeURIComponent("Website Inquiry - All Smart Kids");
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

      if(status) status.textContent = "Opening your email app…";
      form.reset();
    });
  }
})();
