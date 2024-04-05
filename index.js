let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

// button
// const revealBtn = document.getElementById('revealBtn');
// const headingg = document.getElementById('headingg');

// revealBtn.addEventListener('click', function() {
//   if (headingg.classList.contains('hidden')) {
//     headingg.classList.remove('hidden');
//     revealBtn.style.display = 'none';
//   } else {
//     headingg.classList.add('hidden');
//     revealBtn.style.display = 'block';
//   }
// });


// const model = document.querySelectorAll('.services_model'),
//       modelButton = document.querySelectorAll('.services-button'),
//       modelClose = document.querySelectorAll('.services_model-close')

//       let activeModel = (modelClick) => {
//         model[modelClick].classList.add('active-model')
//       }

//       modelButton.forEach((modelButton, i) => {
//         modelButton.addEventListener('click', () => {
//           activeModel(i)
//         })
//       })
       



function showArticle(id) {
  var article = document.getElementById(id);
  article.style.display = "block";
}

function closeArticle(id) {
  var article = document.getElementById(id);
  article.style.display = "none";
}








  const scriptURL = 'https://script.google.com/macros/s/AKfycbz9NV_wSzYgWI8WWzvDPXhOIx6YrGdRfr8GYBZNQknHks_EhIREzbGMGthJPNXymRUp3g/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thankyou For Response"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })