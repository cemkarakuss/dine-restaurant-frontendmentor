const familyClick = document.querySelector('.familyEvent')
const specialEventClick = document.querySelector('.specialevent')
const socialEventsClick = document.querySelector('.socialevent')
const socialRow = document.querySelector('.social-row')
const specialRow = document.querySelector('.special-row')
const familyRow = document.querySelector('.family-row')
const infosImg = document.querySelector('.infos-img')

const arrayInfos = [
  { 
    'id': '0',
    'baslik' : 'Family Gathering',
    'metin' : 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.'
  },
  {
    'id': '1',
    'baslik' : 'Special Events',
    'metin' : 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.'
  },
  {
    'id': '2',
    'baslik' : 'Social Events',
    'metin' : 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.'
  }

]


specialEventClick.addEventListener('click', function(){
    document.querySelector('.infos-text h1').innerHTML = `${arrayInfos[1].baslik}`
    document.querySelector('.infos-text p').innerHTML = `${arrayInfos[1].metin}`
    specialRow.classList.add('active')
    familyRow.classList.remove('active')
    socialRow.classList.remove('active')
    infosImg.style.background = 'url(/images/homepage/special-events-desktop.jpg)'
    
    setTimeout(removeClass(), 5000);
  })

socialEventsClick.addEventListener('click', function(){
    removeClass()
    document.querySelector('.infos-text h1').innerHTML = `${arrayInfos[2].baslik}`
    document.querySelector('.infos-text p').innerHTML = `${arrayInfos[2].metin}`
    socialRow.classList.add('active')
    familyRow.classList.remove('active')
    specialRow.classList.remove('active')
    infosImg.style.background = 'url(/images/homepage/social-events-desktop.jpg)'
    setTimeout(removeClass(), 5000);
  })


familyClick.onclick = () => {
  document.querySelector('.infos-text h1').innerHTML = `${arrayInfos[0].baslik}`
    document.querySelector('.infos-text p').innerHTML = `${arrayInfos[0].metin}`
    familyRow.classList.add('active')
    socialRow.classList.remove('active')
    specialRow.classList.remove('active')
    infosImg.style.background = 'url(/images/homepage/family-gathering-desktop.jpg)'
    setTimeout(removeClass(), 5000);
  }


function removeClass(){
    infosImg.classList.remove('animate__animated')
    infosImg.classList.remove('animate__fadeInDown')
    console.log('silindi')
  }

// --booking--  

