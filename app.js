
function toggleHidden(example){
  const elem = document.querySelector(example)
  elem.classList.toggle('hidden')
}

function handleScroll(section){
  console.log('section', section)
  const element = document.querySelector(section)
  element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
}
function handleBottomScroll(section){
  console.log('section', section)
  const element = document.querySelector(section)
  element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
  console.log(section+'-nav')

  var navItems = document.querySelectorAll('.nav-bottom > .nav-item')
  navItems.forEach(elem => elem.classList.remove('active'))
  console.log(navItems)
  document.querySelector(section+'-nav').classList.add('active')
}


window.onload = function(){
  let elementInView
  let isTicking
  
  const debounce = (callback, evt) => {
    if (isTicking) return
    requestAnimationFrame(() => {
      callback(evt)
      isTicking = false
    })
    isTicking = true
  }

  //GET DOM ELEMENTS
  console.log('loaded')
  const mainScroll = document.querySelector('#main-scroll')
  const experienceScroll = document.querySelector('#experience-scroll')
  const projectsScroll = document.querySelector('#projects-scroll')
  // listen for scroll event and call handleMainScroll function

  const bgStripes = document.querySelector('.bg-stripes')
  // const bg = document.querySelector('.bg')
  // bgStripes.style.backgroundImage = 'repeating-linear-gradient(45deg, red, red 20px, black 20px, black 40px)'

  // bgStripes.style.backgroundImage = 'linear-gradient(#000000, #ffffff)'

  //MAIN SECTIONS
  const aboutSection = document.querySelector('#about')
  const projectsSection = document.querySelector('#projects')
  // const skillsSection = document.querySelector('#skills')
  const experienceSection = document.querySelector('#experience')
  // const educationSection = document.querySelector('#education')
  const contactSection = document.querySelector('#contact')

  //SECONDARY SECTIONS
  // const about1 = document.querySelector('#about1')
  // const skills1 = document.querySelector('#skills1')
  // console.log(skills1)
  // const skills2 = document.querySelector('#skills2')
  const experience1 = document.querySelector('#experience1')
  const experience2 = document.querySelector('#experience2')
  const experience3 = document.querySelector('#experience3')
  const experience4 = document.querySelector('#experience4')
  const project1 = document.querySelector('#project1')
  const project2 = document.querySelector('#project2')
  const project3 = document.querySelector('#project3')
  const project4 = document.querySelector('#project4')
  // const education1 = document.querySelector('#education1')
  // const education2 = document.querySelector('#education2')
  // const education3 = document.querySelector('#education3')
  // const education4 = document.querySelector('#education4')


  const navbar = document.querySelector('.navbar')
  const navbarTablet = document.querySelector('.navbar-tablet')
  const burger = document.querySelector('#burger')
  const indicator = document.querySelector('#indicator')
  const bottomIndicator = document.querySelector('#bottom-indicator')

  //MAIN NAVS
  const aboutNav = document.querySelector('#about-nav')
  // const skillsNav = document.querySelector('#skills-nav')
  const experienceNav = document.querySelector('#experience-nav')
  // const educationNav = document.querySelector('#education-nav')
  const projectsNav = document.querySelector('#projects-nav')
  const contactNav = document.querySelector('#contact-nav')
  const mainNavArray = [aboutNav, experienceNav, projectsNav, contactNav]

  //BOTTOMS NAVS
  const navBottomHolder = document.querySelector('#nav-bottom-holder')
  const navBottomProjects = document.querySelector('#nav-bottom-projects')
  // const navBottomSkills = document.querySelector('#nav-bottom-skills')
  const navBottomExperience = document.querySelector('#nav-bottom-experience')
  // const navBottomEducation = document.querySelector('#nav-bottom-education')
  const bottomNavArray = [navBottomProjects, navBottomExperience]

  //SECONDARY NAVS
  // const skills1Nav = document.querySelector('#skills-1-nav')
  // const skills2Nav = document.querySelector('#skills-2-nav')
  const experience1Nav = document.querySelector('#experience-1-nav')
  const experience2Nav = document.querySelector('#experience-2-nav')
  const experience3Nav = document.querySelector('#experience-3-nav')
  const experience4Nav = document.querySelector('#experience-4-nav')
  const project1Nav = document.querySelector('#project-1-nav')
  const project2Nav = document.querySelector('#project-2-nav')
  const project3Nav = document.querySelector('#project-3-nav')
  const project4Nav = document.querySelector('#project-4-nav')
  // const education1Nav = document.querySelector('#education-1-nav')
  // const education2Nav = document.querySelector('#education-2-nav')
  // const education3Nav = document.querySelector('#education-3-nav')
  const secondaryNavArr = [experience1Nav, experience2Nav, experience3Nav, experience4Nav, project1Nav, project2Nav, project3Nav, project4Nav]

  const downArrow = document.querySelector('.down.arrow')
  const upArrow = document.querySelector('.up.arrow')
  const leftArrow = document.querySelector('.left.arrow')
  const rightArrow = document.querySelector('.right.arrow')

  let vw = document.documentElement.clientWidth;
  let vh = document.documentElement.clientHeight;

  downArrow.addEventListener('click', () => {
    mainScroll.scrollTop+=vh
    downArrow.classList.remove('show')
  })
  upArrow.addEventListener('click', () => mainScroll.scrollTop-=vh)
  leftArrow.addEventListener('click', () => elementInView.scrollLeft-=vw)
  rightArrow.addEventListener('click', () => {
    elementInView.scrollLeft += vw
    rightArrow.classList.remove('show')
  })



  // const indicatorTrack = (navbar.offsetWidth - indicator.clientWidth)/100
  console.log('indicator.offsetWidth',indicator.clientWidth)

  // const numberOfPics = 5
  // let bgTrack = ((numberOfPics*window.innerWidth)/100)
  let bgStripesTrack = ((4*window.innerWidth)/100)

  //ADD EVENT LISTENERS
  mainScroll.addEventListener('scroll', (e)=>debounce(handleMainScroll,e))
  // skillsScroll.addEventListener('scroll', (e)=>debounce(handleSideScroll,e))
  experienceScroll.addEventListener('scroll', (e)=>debounce(handleSideScroll,e))
  projectsScroll.addEventListener('scroll', (e)=>debounce(handleSideScroll,e))
  // educationScroll.addEventListener('scroll', (e)=>debounce(handleSideScroll,e))

  burgerToggle = ()=>{
    navbarTablet.classList.toggle('active')
    burger.classList.toggle('change')
  }



  function showBottomNav(bottomNavs, navToShow, numOptions){

    bottomNavs.forEach(elem => elem.classList.add('hidden'))
    // bottomIndicator.classList.remove('active')
    navBottomHolder.classList.remove('active')
    // bottomIndicator.style.display = 'none'
    // bottomIndicator.style.opacity = 0
    if(navToShow){
      navToShow.classList.remove('hidden')
      // bottomIndicator.classList.add('active')
      navBottomHolder.classList.add('active')
      // bottomIndicator.style.display = 'block'
      // bottomIndicator.style.opacity = 1
      bottomIndicator.style.width = (navbar.offsetWidth/numOptions) + 'px'

    }
  }

  function setActiveNav(toRemoveArr, toAddElem){
    toRemoveArr.forEach((elem)=> elem.classList.remove('active'))
    toAddElem.classList.add('active')
  }

  function inView(element, scrollY) {
    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var elementPosition = element.getBoundingClientRect().top + scrollY
    // is scroll position greater than element position? (is element in view?)
    return (scrollY >= Math.floor(elementPosition - 150) && scrollY < Math.floor(elementPosition + 150) )

  }
  function inViewX(element, scrollX, scrollY) {
    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    const elementPositionX = element.getBoundingClientRect().left + scrollX

    const elementPositionY = element.getBoundingClientRect().top + scrollY
    const windowHeight = (window.innerHeight/2)
    const thisMainSection = ( (scrollY >= elementPositionY - windowHeight) && (scrollY < elementPositionY + windowHeight) )
    // const thisMainSection = (scrollY === elementPositionY)
    // is scroll position greater than element position? (is element in view?)

    // console.log(element,elementPositionY, scrollY, thisMainSection)
    return thisMainSection && ( (scrollX >= elementPositionX - 150) && (scrollX < elementPositionX + 150) )

  }

  function moveIndicator(indicator, scrollPercent){
    const indicatorTrack = (navbar.offsetWidth - indicator.clientWidth)/100
    const indicatorLeft = indicatorTrack * scrollPercent
    indicator.style.left = indicatorLeft+'px'
  }

  function moveBg(scrollPercent){
    // const bgMove = bgTrack * scrollPercent
    // // bgStripes.style.left = -bgMove+'px'
    // bg.style.left = -bgMove+'px'
    // console.log('movebg')

    const bgStripesMove = bgStripesTrack * scrollPercent
    bgStripes.style.left = -bgStripesMove+'px'


  }

  function calcScrollY(){
    return mainScroll.scrollTop || 0
  }

  function calcScrollPercent(scrollY){
    return scrollY/(mainScroll.scrollHeight-window.innerHeight)*100
  }

  function handleMainScroll() {
    const scrollY = calcScrollY()
    const scrollPercent = calcScrollPercent(scrollY)

    moveIndicator(indicator, scrollPercent)
    moveBg(scrollPercent)

    if(inView(aboutSection, scrollY)){
      elementInView = null
      setActiveNav(mainNavArray,aboutNav)
      showBottomNav(bottomNavArray)
      upArrow.classList.add('hidden')
      downArrow.classList.remove('hidden')
      hideArrow(leftArrow)
      hideArrow(rightArrow)

    }else if(inView(projectsSection, scrollY)){
      elementInView = projectsScroll

      setActiveNav(mainNavArray,projectsNav)
      showBottomNav(bottomNavArray,navBottomProjects, 4)
      handleSideScroll(projectsScroll)
      upArrow.classList.remove('hidden')
      downArrow.classList.remove('hidden')

      // }else if(inView(skillsSection, scrollY)){
      //   setActiveNav(mainNavArray,skillsNav)
      //   showBottomNav(bottomNavArray,navBottomSkills, 2)
      //   handleSideScroll(skillsScroll)


    }else if(inView(experienceSection, scrollY)){
      elementInView = experienceScroll
      setActiveNav(mainNavArray,experienceNav)
      showBottomNav(bottomNavArray,navBottomExperience, 5)
      handleSideScroll(experienceScroll)
      upArrow.classList.remove('hidden')
      downArrow.classList.remove('hidden')

      // }else if(inView(educationSection, scrollY)){
      //   setActiveNav(mainNavArray,educationNav)
      //   showBottomNav(bottomNavArray,navBottomEducation, 3)
      //   handleSideScroll(educationScroll)


    }else if(inView(contactSection, scrollY)){
      setActiveNav(mainNavArray,contactNav)
      showBottomNav(bottomNavArray)
      upArrow.classList.remove('hidden')
      downArrow.classList.add('hidden')
      hideArrow(leftArrow)
      hideArrow(rightArrow)
    }
  }
   function hideArrow(arrow){
    arrow.classList.add('hidden')
  }
  function showArrows(){
    leftArrow.classList.remove('hidden')
    rightArrow.classList.remove('hidden')
  }
  windowResize = ()=>{
    console.log('window resize')
    // const bg = document.querySelector('.bg')
    const scrollY = calcScrollY()
    const scrollPercent = calcScrollPercent(scrollY)

    // bgTrack = ((numberOfPics*window.innerWidth)/100)
    moveIndicator(indicator, scrollPercent)
    moveBg(scrollPercent)

    bgStripesTrack  = ((3*window.innerWidth)/100)

    vw = document.documentElement.clientWidth;
    vh = document.documentElement.clientHeight;

    // bg.style.width = 6*window.innerWidth
    // bg.style.height = window.innerHeight
    //
    // bg.style.width = 6*window.innerWidth
    // bg.style.height = window.innerHeight

    // console.log('bg.style.width',bg.clientWidth)

  }

 

  function handleSideScroll(e){

    //If passed from scroll event elem is target, otherwise element is argument
    const elem = e.target || e
    const scrollX = elem.scrollLeft || 0
    const scrollPercent = scrollX/(elem.scrollWidth-window.innerWidth)*100

    moveIndicator(bottomIndicator, scrollPercent)


    showArrows()

    // if(inViewX(skills1, scrollX, scrollY)){
    //   setActiveNav(secondaryNavArr,skills1Nav)
    //
    // }else if(inViewX(skills2, scrollX, scrollY)){
    //   setActiveNav(secondaryNavArr,skills2Nav)

    if(inViewX(experience1, scrollX, scrollY)){
      setActiveNav(secondaryNavArr,experience1Nav)
      hideArrow(leftArrow)

    }else if(inViewX(experience2, scrollX, scrollY)){
      setActiveNav(secondaryNavArr,experience2Nav)

    }else if(inViewX(experience3, scrollX, scrollY)){
      setActiveNav(secondaryNavArr,experience3Nav)

    }else if(inViewX(experience4, scrollX, scrollY)){
      setActiveNav(secondaryNavArr,experience4Nav)
      hideArrow(rightArrow)
      // }else if(inViewX(education1, scrollX, scrollY)){
      //   setActiveNav(secondaryNavArr,education1Nav)
      //
      // }else if(inViewX(education2, scrollX, scrollY)){
      //   setActiveNav(secondaryNavArr,education2Nav)
      //
      // }else if(inViewX(education3, scrollX, scrollY)){
      //   setActiveNav(secondaryNavArr,education3Nav)

    }else if(inViewX(project1, scrollX, scrollY)){
      setActiveNav(secondaryNavArr,project1Nav)
      hideArrow(leftArrow)


    }else if(inViewX(project2, scrollX, scrollY)){
      setActiveNav(secondaryNavArr,project2Nav)

    }else if(inViewX(project3, scrollX, scrollY)){
      setActiveNav(secondaryNavArr,project3Nav)

    }else if(inViewX(project4, scrollX, scrollY)){
      setActiveNav(secondaryNavArr,project4Nav)
      hideArrow(rightArrow)

    }
  }
}
