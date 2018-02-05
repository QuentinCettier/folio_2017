import createjs from 'preload-js'
import {TweenMax, Power2, TimelineLite} from 'gsap'
import Barba from 'barba.js'
import {transition} from './transition'
import '../scss/styles.scss'
//import {Pentagon, draw} from './Pentagon'
import {main} from './home'

const $canvas = document.querySelector('.canvas')
const $loaderText = document.querySelector('.loader-container__loader')
const $layer1 = document.querySelector('.layer-1')
const $layer2 = document.querySelector('.layer-2')
const width = window.innerWidth
const $homeContainer = document.querySelector('.home-container')
const $homeContainerDescription = document.querySelector('.home-container__description')
const $homeBackground = document.querySelector('.home-background')
const $homeBackgroundBackground = document.querySelector('.home-background__background')
const $homeBackgroundBackgroundBack = document.querySelector('.home-background__background-back')
const $descriptionNameLayer= document.querySelector('.description__name__layer')
const $descriptionName= document.querySelector('.description__name')
const $descriptionRoleLayer= document.querySelector('.description__role__layer')
const $descriptionRole= document.querySelector('.description__role')
const $descriptionStudyLayer= document.querySelector('.description__study__layer')
const $descriptionStudy= document.querySelector('.description__study')
const $descriptionDescriptionLayer= document.querySelector('.description__description__layer')
const $descriptionDescription= document.querySelector('.description__description')
const $workContainer = document.querySelector('.navigation-container__works-container')
const $nameContainer = document.querySelector('.navigation-container__name-container')
const $aboutContainer = document.querySelector('.navigation-container__about-container')
const $labContainer = document.querySelector('.navigation-container__lab-container')
const $worksLayer = document.querySelector('.works-container__layer')
const $aboutLayer = document.querySelector('.about-container__layer')
const $labLayer = document.querySelector('.lab-container__layer')
const $nameLayer = document.querySelector('.name-container__layer')
const $worksLayerWorks = document.querySelector('.works-container__works')
const $nameLayerName = document.querySelector('.name-container__name')
const $aboutLayerAbout = document.querySelector('.about-container__about')
const $labLayerLab = document.querySelector('.lab-container__lab')
// const $clickHoldButtonContainer = document.querySelector('.click-hold-button-container')
// const $buttonLayer = document.querySelector('.button-container__layer')
// const $clickHoldButton = document.querySelector('.click-hold-button-container__button')
const $backgroundTextContainer = document.querySelector('.background__text-container')
const $backgroundTextContainerText = document.querySelector('.background__text-container__text')



const backgroundWidth = window.innerWidth /2
console.log(backgroundWidth)

let queue = new createjs.LoadQueue()
console.log(queue)
const onComplete = (event) =>
{
    let tlOut = new TimelineMax({onComplete:loadHome})
        tlOut
            .to($loaderText, .3, {autoAlpha:0}, '+=.5')
            .to($layer1, .9, {x : width, ease: Power0.easeIn}, '+=.2')
            .to($layer2, .9, {x : width, ease: Power0.easeIn},'-=.7')
            .to($homeContainer, .5, {autoAlpha: 1})
}

const onProgress = (event) =>
{
    var progress = Math.round(event.loaded * 100);
    $loaderText.innerHTML = `${progress}%`
}

queue.on('complete', onComplete)
// queue.on("fileprogress", fileProgress)
// queue.on('fileload', fileLoad)
queue.on('progress', onProgress)
queue.loadManifest(
    [
        'dist/bundle.js'
    ]
)

const loadHome = () =>
{
    let tlLoadHome = new TimelineLite()

    tlLoadHome
        .add('label1')

        .to($homeBackgroundBackground, .5, {width: backgroundWidth, ease: Power1.easeIn}, 'label1')
        .to($homeBackgroundBackgroundBack, .5, {width: backgroundWidth, ease: Power1.easeIn}, 'label1')
        

        // .to($buttonLayer,.7, {x:$buttonLayer.offsetWidth, ease: Power1.easeIn}, 'label1')
        // .to($buttonLayer,.5,{x: $buttonLayer.offsetWidth * 2 + 10, ease: Power1.easeOut},'-=.2')
        // .to($clickHoldButton, .3, {autoAlpha: 1}, '-=.5')

        .to($descriptionNameLayer,.7, {x: $descriptionNameLayer.offsetWidth, ease: Power1.easeIn},'label1')
        .to($descriptionNameLayer,.5,{x: $descriptionNameLayer.offsetWidth * 2 + 10, ease: Power1.easeOut},'-=.2')
        .to($descriptionName, .3, {autoAlpha: 1}, '-=.5')

        .to($descriptionRoleLayer,.7, {x: $descriptionRoleLayer.offsetWidth, ease: Power1.easeIn},'label1')
        .to($descriptionRoleLayer,.3,{x: $descriptionRoleLayer.offsetWidth * 2 + 10, ease: Power1.easeOut},'-=.2')
        .to($descriptionRole, .3, {autoAlpha: 1}, '-=.5')

        .to($descriptionStudyLayer,.7, {x: $descriptionStudyLayer.offsetWidth, ease: Power1.easeIn},'label1')
        .to($descriptionStudyLayer,.3,{x: $descriptionStudyLayer.offsetWidth * 2 + 10, ease: Power1.easeOut},'-=.2')
        .to($descriptionStudy, .3, {autoAlpha: 1}, '-=.5')

        .to($descriptionDescriptionLayer,.7, {x: $descriptionDescriptionLayer.offsetWidth, ease: Power1.easeIn},'label1')
        .to($descriptionDescriptionLayer,.3,{x: $descriptionDescriptionLayer.offsetWidth * 2 + 10, ease: Power1.easeOut},'-=.2')
        .to($descriptionDescription, .3, {autoAlpha: 1}, '-=.5')

        
        .to($worksLayer,.3, {x: $worksLayer.offsetWidth, ease: Power1.easeIn},'label1')
        .add('label2')
        .to($worksLayer,.5,{x: $worksLayer.offsetWidth * 2 + 10, ease: Power1.easeOut},'label2-=.8')
        .to($worksLayerWorks, .3, {autoAlpha: 1},'label2-=1.2')

        .to($aboutLayer,.3, {x: $aboutLayer.offsetWidth, ease: Power1.easeIn},'label1')
        .to($aboutLayer,.5,{x: $aboutLayer.offsetWidth * 2 + 10, ease: Power1.easeOut},'label2-=.8')
        .to($aboutLayerAbout, .3, {autoAlpha: 1}, 'label2-=1.2')

        .to($nameLayer,.3, {x: $nameLayer.offsetWidth, ease: Power1.easeIn},'label1')
        .to($nameLayer,.5,{x: $nameLayer.offsetWidth * 2 + 10, ease: Power1.easeOut},'label2-=.8')
        .to($nameLayerName, .3, {autoAlpha: 1}, 'label2-=1.2')


        .to($labLayer,.3, {x: $labLayer.offsetWidth, ease: Power1.easeIn},'label1')
        .to($labLayer,.5,{x: $labLayer.offsetWidth * 2 + 10, ease: Power1.easeOut},'label2-=.8')
        .to($labLayerLab, .3, {autoAlpha: 1}, 'label2-=1.2');

}
// document.addEventListener('DOMContentLoaded', () =>
// {
//     loadHome()
// })
$labContainer.addEventListener('mouseenter', () =>
{
    homeDescriptionOut()
    $backgroundTextContainerText.innerHTML = "Lab"
    $backgroundTextContainerText.style.fontSize = "100px"
    
})
$labContainer.addEventListener('mouseleave', ()=>
{
    homeDescriptionIn()
    
})

$workContainer.addEventListener('mouseenter', () =>
{
    homeDescriptionOut()
    console.log('over')
    $backgroundTextContainerText.innerHTML = "Works"
    $backgroundTextContainerText.style.fontSize = "100px"
    
    
})
$workContainer.addEventListener('mouseleave', ()=>
{
    homeDescriptionIn()
    console.log('leave')
    
})

$aboutContainer.addEventListener('mouseenter', () =>
{
    homeDescriptionOut()
    $backgroundTextContainerText.innerHTML = "About"
    $backgroundTextContainerText.style.fontSize = "100px"
    
    
})
$aboutContainer.addEventListener('mouseleave', ()=>
{
    homeDescriptionIn()
    
})

const homeDescriptionOut = () =>
{
    let tlHomeDescriptionOut = new TimelineLite()
    tlHomeDescriptionOut
        .add('label')
        .to($descriptionName, .2, {y: 50 ,ease: Power0.easeOut}, 'label')
        .to($descriptionRole, .2, {y: 30, ease: Power0.easeOut}, 'label')
        .to([$descriptionStudy, $descriptionDescription], .3, {y: 20, ease: Power0.easeOut}, 'label')
        .to($backgroundTextContainerText, .2, {y:-90, autoAlpha: 1, ease: Power0.easeIn});
}
const homeDescriptionIn = () =>
{   
    let tlHomeDescriptionIn = new TimelineLite()
        .add('label3')
        .to($backgroundTextContainerText, .2, {y:0, ease: Power0.easeOut})
        .to([$descriptionName, $descriptionRole, $descriptionStudy, $descriptionDescription], .2, {y: 0, ease: Power0.easeIn}, '-=.2');

}

$workContainer.addEventListener('click', () =>
{
    console.log('click')
    let tlHomeFadeOut = new TimelineMax()
    tlHomeFadeOut
        
        .to($backgroundTextContainerText, .3, {y:0, autoAlpha: 0, ease: Power0.easeIn}) 
        .add('fadeout')       
        .to($homeContainerDescription, .1, {autoAlpha:0},'fadeout')
        .to($homeBackgroundBackground, .5, {width: 0, ease: Power1.easeOut},'fadeout')
        .to($homeBackgroundBackgroundBack, .5, {width: 0, ease: Power1.easeOut}, 'fadeout+=.2')
})
main()