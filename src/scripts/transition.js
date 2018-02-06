import Barba from 'barba.js'
import {navigationIn} from './index'

export default function transition()
{
    const $loaderContainer = document.querySelector('.loader-container')
    const $layer1 = document.querySelector('.layer-1')
    const $backgroundTextContainerText = document.querySelector('.background__text-container__text')
    const $homeContainerDescription = document.querySelector('.home-container__description')
    const $homeBackgroundBackground = document.querySelector('.home-background__background')
    const $homeBackgroundBackgroundBack = document.querySelector('.home-background__background-back')
    const $aboutContainer = document.querySelector('.about-container')

    document.addEventListener("DOMContentLoaded", function () {
        Barba.Pjax.init()
        Barba.Prefetch.init()

        let transition = Barba.BaseTransition.extend({
            start: function()
            {
                Promise
                .all([this.newContainerLoading, this.transitionIn()])
                .then(this.showNewPage.bind(this));
            },
            transitionIn : function()
            {
                
                let deferred = Barba.Utils.deferred();
                
                
                let tlHomeFadeOut = new TimelineMax()
                tlHomeFadeOut
                    .to($backgroundTextContainerText, .3, {y:0, autoAlpha: 0, ease: Power0.easeIn}) 
                    .add('fadeout')
                    .to($homeContainerDescription, .1, {autoAlpha:0},'fadeout')
                    .to($homeBackgroundBackground, .5, {width: 0, ease: Power1.easeOut},'fadeout')
                    .to($homeBackgroundBackgroundBack, .5, {width: 0, ease: Power1.easeOut}, 'fadeout+=.2')
                    .to($layer1, .5, {xPercent: -150,onComplete: function() {deferred.resolve()}});
                return deferred.promise;
            },
            showNewPage: function() 
            {
                TweenLite.to($layer1, 1, {
                   xPercent: -300,
                })
                TweenLite.to($aboutContainer, .1, {autoAlpha:1})
                navigationIn()
                this.done()
            }
        })
        Barba.Pjax.getTransition = function() {
            let transitionObj = transition
            return transitionObj;
          };

    })
}
transition()