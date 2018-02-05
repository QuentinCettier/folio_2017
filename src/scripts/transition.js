import Barba from 'barba.js'

export default function transition()
{
    const $loaderContainer = document.querySelector('.loader-container')
    const $layer1 = document.querySelector('.layer-1')
    document.addEventListener("DOMContentLoaded", function () {
        console.log($loaderContainer)

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
                console.log('tween')
                TweenLite.to($layer1, .5, {
                    xPercent: -150,
                    onComplete: function() {
                        deferred.resolve()
                  }
                })
                return deferred.promise;
            },
            showNewPage: function() 
            {
                TweenLite.to($layer1, 1, {
                   xPercent: -300,
                })

                console.log(this.newContainer)
                console.log(this.oldContainer)
                this.done()
            }
        })
        Barba.Pjax.getTransition = function() {
            let transitionObj = transition
            console.log('transition')
            return transitionObj;
          };

    })
}
transition()