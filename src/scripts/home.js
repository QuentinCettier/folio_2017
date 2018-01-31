export function main() 
{
    const $homeBackground = document.querySelector('.home-background')
    const $homeBackgroundBackground = document.querySelector('.home-background__background')
    const $homeBackgroundBackgroundBack = document.querySelector('.home-background__background-back')
    const $homeContainerDescritption = document.querySelector('.home-container__description')

    const coords = {x:0, y:0}
    document.addEventListener('mousemove', (e) =>
    {
        coords.x = e.clientX
        coords.y = e.clientY

        let deltax = (window.innerWidth /  2 - coords.x) / 40
        let deltay = (window.innerHeight / 2 - coords.y) / 20
        
        $homeBackgroundBackground.style.transform = `translateX(${-2*deltay}px) translateY(${deltax}px)`
        $homeBackgroundBackgroundBack.style.transform = `translateX(${deltay}px) translateY(${-deltax}px) translateZ(-40px) translate(-10%, -110%)`
        //$homeContainerDescritption.style.transform = `rotateX(${deltay}deg) rotateY(${deltax}deg)`
        // $(document).on("mousemove",function(e) {  
        //   var ax = -($(window).innerWidth()/2- e.pageX)/20;
        //   var ay = ($(window).innerHeight()/2- e.pageY)/10;
        //   card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
        // });
    })
    
}
