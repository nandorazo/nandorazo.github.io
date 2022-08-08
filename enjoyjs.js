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

  //Main Get Started Button
  const modal = document.getElementById('email-modal');
  const openBtn = document.querySelector('.main-btn');
  const closeBtn = document.querySelector('.close-btn');

  //First Block
  const firstmodalmain = document.getElementById('first-modal-main');
  const openfirstmain = document.querySelector('.open-first-main');
  const closefirstmain = document.querySelector('.close-first-main');
  
  const firstmodalsurv = document.getElementById('first-modal-surv');
  const openfirstsurv = document.querySelector('.open-first-surv');
  const closefirstsurv = document.querySelector('.close-first-surv');

  //Second Block
  const secondmodalmain = document.getElementById('second-modal-main');
  const opensecondmain = document.querySelector('.open-second-main');
  const closesecondmain = document.querySelector('.close-second-main');
  
  const secondmodalsurv = document.getElementById('second-modal-surv');
  const opensecondsurv = document.querySelector('.open-second-surv');
  const closesecondsurv = document.querySelector('.close-second-surv');


  //Third Block
  const thirdmodalmain = document.getElementById('third-modal-main');
  const openthirdmain = document.querySelector('.open-third-main');
  const closethirdmain = document.querySelector('.close-third-main');
  
  const thirdmodalsurv = document.getElementById('third-modal-surv');
  const openthirdsurv = document.querySelector('.open-third-surv');
  const closethirdsurv = document.querySelector('.close-third-surv');

  

  //Click events
  /*Main Button*/
  openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (a) => {
    if(a.target == modal){
      modal.style.display = 'none';
    }
  });

//First Block
  openfirstmain.addEventListener('click', () => {
    firstmodalmain.style.display = 'block';
  });
  closefirstmain.addEventListener('click', () => {
    firstmodalmain.style.display = 'none';
  });
  window.addEventListener('click', (b) => {
    if(b.target == firstmodalmain){
      firstmodalmain.style.display = 'none';
    }
  });

  openfirstsurv.addEventListener('click', () => {
    firstmodalsurv.style.display = 'block';
  });
  closefirstsurv.addEventListener('click', () => {
    firstmodalsurv.style.display = 'none';
  });
  window.addEventListener('click', (c) => {
    if(c.target == firstmodalsurv){
      firstmodalsurv.style.display = 'none';
    }
  });

// Second Block
opensecondmain.addEventListener('click', () => {
  secondmodalmain.style.display = 'block';
});
closesecondmain.addEventListener('click', () => {
  secondmodalmain.style.display = 'none';
});
window.addEventListener('click', (d) => {
  if(d.target == secondmodalmain){
    secondmodalmain.style.display = 'none';
  }
});

opensecondsurv.addEventListener('click', () => {
  secondmodalsurv.style.display = 'block';
});
closesecondsurv.addEventListener('click', () => {
  secondmodalsurv.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if(e.target == secondmodalsurv){
    secondmodalsurv.style.display = 'none';
  }
});

//Third Block
openthirdmain.addEventListener('click', () => {
  thirdmodalmain.style.display = 'block';
});
closethirdmain.addEventListener('click', () => {
  thirdmodalmain.style.display = 'none';
});
window.addEventListener('click', (f) => {
  if(f.target == thirdmodalmain){
    thirdmodalmain.style.display = 'none';
  }
});

openthirdsurv.addEventListener('click', () => {
  thirdmodalsurv.style.display = 'block';
});
closethirdsurv.addEventListener('click', () => {
  thirdmodalsurv.style.display = 'none';
});
window.addEventListener('click', (g) => {
  if(g.target == thirdmodalsurv){
    thirdmodalsurv.style.display = 'none';
  }
});