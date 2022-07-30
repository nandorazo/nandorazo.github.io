window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Thanks! Your response was successfully submitted! I will reach out shortly");
      })
    });
  });

  //modal items
  const modal = document.getElementById('email-modal');
  const cafemodal = document.getElementById('cafe-modal');
  const secmodal = document.getElementById('sec-modal');

  const openBtn = document.querySelector('.main-btn');
  const open = document.querySelector('.coff');
  const open2 = document.querySelector('.sec-btn');

  const closeBtn = document.querySelector('.close-btn');
  const close = document.querySelector('.close-cafe');
  const close2 = document.querySelector('.close-sec');

  //Click events
  openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
  open.addEventListener('click', () => {
    cafemodal.style.display = 'block';
  });
  open2.addEventListener('click', () => {
    secmodal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  close.addEventListener('click', () => {
    cafemodal.style.display = 'none';
  });
  close2.addEventListener('click', () => {
    secmodal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if(e.target == modal){
      modal.style.display = 'none';
    }
  });

  window.addEventListener('click', (d) => {
    if(d.target == cafemodal){
      cafemodal.style.display = 'none';
    }
  });
  window.addEventListener('click', (c) => {
    if(c.target == secmodal){
      secmodal.style.display = 'none';
    }
  });