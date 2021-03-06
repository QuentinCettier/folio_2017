export function main() 
{
    const $homeBackground = document.querySelector('.home-background')
    const $homeBackgroundBackground = document.querySelector('.home-background__background')
    const $homeBackgroundBackgroundBack = document.querySelector('.home-background__background-back')
    const $homeContainerDescritption = document.querySelector('.home-container__description')

    const coords = {x:0, y:0}
    const amplitude = .5
    let deltax = 0
    let deltay = 0
    let offsetX = 0
    let offsetY = 0
    let windowWidth = window.innerWidth
    let windowHeight = window.innerHeight
    document.addEventListener('mousemove', (e) =>
    {
        coords.x = e.clientX
        coords.y = e.clientY

        deltax = e.clientX/windowWidth - .5
        deltay = e.clientY/windowHeight - .5
        // deltax = (window.innerWidth /  2 - coords.x) / 40
        // deltay = (window.innerHeight / 2 - coords.y) / 20
    })

    const setRAF = () =>
    {
        const loop = () =>
        {
            window.requestAnimationFrame(loop)
            
            const targetOffsetX = -deltax * 100 * amplitude
            const targetOffsetY = -deltay * 100 * amplitude
            //                 const targetOffsetY = - this.mouse.y * 100 * item.amplitude
            offsetX += (targetOffsetX-offsetX)* .1
            offsetY += (targetOffsetY-offsetY)* .1

            //                 item.offsetX += (targetOffsetX - item.offsetX) * .1
            //                 item.offsetY += (targetOffsetY - item.offsetY) * .1
            
            const roundedOffsetX = Math.round(offsetX * 100) /100
            const roundedOffsetY = Math.round(offsetY * 100) /100
           
            $homeBackgroundBackground.style.transform = `translateX(${-roundedOffsetX}px) translateY(${roundedOffsetY}px) `
            $homeBackgroundBackgroundBack.style.transform = `translateX(${3*roundedOffsetX}px) translateY(${-2*roundedOffsetY}px) translateZ(-40px) translate(-10%, -110%)`
        }
        loop()
    }
    setRAF()
    
}