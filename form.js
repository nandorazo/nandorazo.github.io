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
  const openBtn = document.querySelector('.main-btn');
  const closeBtn = document.querySelector('.close-btn');

  //Click events
  openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if(e.target == modal){
      modal.style.display = 'none';
    }
  });