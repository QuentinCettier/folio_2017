import createjs from 'preload-js'
import {TweenMax, Power2, TimelineLite} from 'gsap'
import '../scss/styles.scss'
import {Particle, draw} from './Particle'
import {main} from './home'

const $canvas = document.querySelector('.canvas')
const $loaderText = document.querySelector('.loader-container__loader')
const $layer1 = document.querySelector('.layer-1')
const $layer2 = document.querySelector('.layer-2')
const width = window.innerWidth
const $homeContainer = document.querySelector('.home-container')
let queue = new createjs.LoadQueue()
console.log(queue)
const onComplete = (event) =>
{
    let tlOut = new TimelineLite()
        tlOut
            .to($loaderText, .3, {autoAlpha:0}, '+=.5')
            .to($layer1, .9, {x : width, ease: Power0.easeIn}, '+=.2')
            .to($layer2, .9, {x : width, ease: Power0.easeIn},'-=.7') 
            .to($canvas, 1, {autoAlpha : 1}, '-=.9')
            .to($homeContainer, .5, {autoAlpha: 1})
}
const onProgress = (event) =>
{
    var progress = Math.round(event.loaded * 100);
    
    console.log('General progress', Math.round(event.loaded) * 100, event);
    $loaderText.innerHTML = `${progress}%`
}
queue.on('complete', onComplete)
// queue.on("fileprogress", fileProgress)
// queue.on('fileload', fileLoad)
queue.on('progress', onProgress)
queue.loadManifest(
    [
        'canvas.js',
        'home.js',
        'Particles.js',
        'styles.scss',
    ]
)

draw()
main()