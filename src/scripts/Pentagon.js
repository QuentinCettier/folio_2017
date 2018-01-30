
//Create & export the Particle Classconst 
const $canvas = document.querySelector('.canvas')    
const context = $canvas.getContext('2d')

$canvas.width = window.innerWidth
$canvas.height = window.innerHeight
export class Pentagon 
{
    constructor(x, y, radius, rotation)
    {
        this.x = x
        this.y = y
        this.radius = radius
        this.rotation = rotation
        this.speed = Math.random()
    }
    
    draw()
    {
        
         context.beginPath()
         context.lineTo(
                Math.cos((0/5)*Math.PI * 2 + this.rotation) * this.radius + this.x,
                Math.sin((0/5)*Math.PI * 2 + this.rotation) * this.radius + this.y
        )
        context.lineTo(
            Math.cos((1/5)*Math.PI * 2 + this.rotation) * this.radius + this.x,
            Math.sin((1/5)*Math.PI * 2 + this.rotation) * this.radius + this.y
        )
        context.lineTo(
            Math.cos((2/5)*Math.PI * 2 + this.rotation) * this.radius + this.x,
            Math.sin((2/5)*Math.PI * 2 + this.rotation) * this.radius + this.y
        )
        context.lineTo(
            Math.cos((3/5)*Math.PI * 2 + this.rotation) * this.radius + this.x,
            Math.sin((3/5)*Math.PI * 2 + this.rotation) * this.radius + this.y
        )
        context.lineTo(
            Math.cos((4/5)*Math.PI * 2 + this.rotation) * this.radius + this.x,
            Math.sin((4/5)*Math.PI * 2 + this.rotation) * this.radius + this.y
        )
        context.lineTo(
            Math.cos((5/5)*Math.PI * 2 + this.rotation) * this.radius + this.x,
            Math.sin((5/5)*Math.PI * 2 + this.rotation) * this.radius + this.y
        )
        context.strokeStyle = '#be8e57'
        context.stroke()
        
        
        
    }
    
}

let pentagonArray = []
let pentagonCount = 5
function randomInt(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
const initialize = () =>
{
    for(let i = 0; i<pentagonCount; i++)
    {
        const pentagon = new Pentagon(randomInt(0,$canvas.width), randomInt(0, $canvas.height),randomInt(10, 50), -Math.PI/2)
        pentagonArray.push(pentagon)
        
    }
    animate()   

}
//Animate all the particles
const animate = () =>
{
    //clear canvas while animation
   
    context.clearRect(0, 0, $canvas.width, $canvas.height)
    //animate each particle of the array
    for (let i = 0; i < pentagonCount; i++)
    {
        pentagonArray[i].draw()
    }
    window.requestAnimationFrame(animate)
}

// const oldcoords = [{x: 0, y: 0}]
// const coords = [{x: 0, y: 0}]

// document.addEventListener('mousemove', (e) =>
// {
//    oldcoords.x = coords.x
//    oldcoords.y = coords.y

//    coords.x = e.clientX
//    coords.y = e.clientY

//    if(coords.x < oldcoords.x && coords.y < oldcoords.y)
//    {
//        for(const pentagon of pentagonArray)
//        {
//            pentagon.x -= pentagon.speed/10
//            pentagon.y -= pentagon.speed/10
//        }
//    }
//    else if(coords.x < oldcoords.x && coords.y > oldcoords.y)
//    {
//        for(const pentagon of pentagonArray)
//        {
//         pentagon.x -= pentagon.speed/10
//         pentagon.y += pentagon.speed/10
//        }
//    }
//    else if(coords.x > oldcoords.x && coords.y > oldcoords.y)
//    {
//        for(const pentagon of pentagonArray)
//        {
//         pentagon.x += pentagon.speed/10
//         pentagon.y += pentagon.speed/10
//        }
//    }else
//    {
//        for(const pentagon of pentagonArray)
//        {
//         pentagon.x += pentagon.speed/10
//         pentagon.y -= pentagon.speed/10
//        }
//    }
// })

initialize()