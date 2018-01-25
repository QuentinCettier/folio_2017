import findGreet from './findGreet'
//Create & export the Particle Classconst 
const $canvas = document.querySelector('.canvas')    
const context = $canvas.getContext('2d')
let shineBool = true
export default class Particle 
{
    //constructor that help us instanciate a particle
    constructor() {
        //We use speedOrigin and originRadius because we need to change radius
        //and speed and reset then whith there initial value
        //A particle have :
        //a Radius, a Speed, x and y coords, a color, an opacity and a direction
        this.speedOrigin = Math.floor(Math.random()*12) /10
        this.originRadius = Math.random()*2
        this.radius = this.originRadius
        this.posx = Math.floor((Math.random() * $canvas.width) + this.radius)
        this.posy =  Math.floor((Math.random() * $canvas.height) + this.radius)
        this.color = '#fefefe'
        this.speed = this.speedOrigin
        this.opacity = 1
        this.amplitude = Math.random()
    
    }
    //Draw the particle
    //Move the particles from top to bottom and reset y position and speed if needed
    move()
    {
        context.beginPath()
        context.globalCompositeOperation = 'source-over'
        context.fillStyle = this.color
        context.globalAlpha = this.opacity
        context.arc(this.posx, this.posy, this.radius, 0, Math.PI*2, false)
        context.fill()
        context.closePath()
        if(this.speed == 0)
        {
            this.speed = Math.floor(Math.random()*12)/10
        }
        this.posy += this.speed/30
        if(this.posy > $canvas.height || this.posx > $canvas.width)
        {
            this.posy = 0
            this.posx =  Math.floor((Math.random() * $canvas.width) + this.radius)
        }
        if(this.posy < 0 || this.posx < 0)
        {            
            this.posy = 0
            this.posx = Math.floor((Math.random() * $canvas.width) + this.radius)
        }
    }
}
export class FlyingParticle
{
    constructor()
    {
        this.radius = 1.5
        this.color = '#fefefe'
        this.speed = Math.floor(Math.random()*15)
        this.posx = Math.floor((Math.random() * $canvas.width) + this.radius)
        this.posy = 0
    }
    move()
    {
        context.beginPath()
        context.globalCompositeOperation = 'source-over'
        context.fillStyle = this.color
        context.shadowBlur = 1
        context.shadowColor = this.color
        context.arc(this.posx, this.posy, this.radius, 0, Math.PI*2, false)
        context.fill()
        context.closePath()

        this.posy += this.speed/5
        this.posx -= this.speed/5
        if(this.speed == 0)
        {
            this.speed = Math.floor(Math.random()*12)/10
        }
        if(this.posy > $canvas.height || this.posx > $canvas.width)
        {
            this.posy = 0
            this.posx =  Math.floor((Math.random() * $canvas.width) + this.radius)
        }
        if(this.posy < 0 || this.posx < 0)
        {            
            this.posy = 0
            this.posx = Math.floor((Math.random() * $canvas.width) + this.radius)
        }
    }
}
export function draw()
{
    let particleArray = []
    let particleCount = 150
    let flyingParticleCount = 3
    let flyingParticleArray = []
    $canvas.width = window.innerWidth
    $canvas.height = window.innerHeight

    const initialize = () =>
    {
        for(let i = 0; i<particleCount; i++)
        {
            const particle = new Particle()
            particleArray.push(particle)
        }
        for(let i = 0; i<flyingParticleCount; i++)
        {
            const flyingParticle = new FlyingParticle()
            flyingParticleArray.push(flyingParticle)
        } 
        animate() 
     
    }
    const animate = () =>
    {
        //clear canvas while animation
        context.clearRect(0, 0, $canvas.width, $canvas.height)
        //animate each particle of the array
        for (let i = 0; i < particleCount-1; i++)
        {
           particleArray[i].move()
        }
        // for (let i = 0; i < flyingParticleCount-1; i++)
        // {
        //     flyingParticleArray[i].move()
        // }
        
        requestAnimationFrame(animate)
    }
    const oldcoords = [{x: 0, y: 0}]
    const coords = [{x: 0, y: 0}]

    document.addEventListener('mousemove', (e) =>
    {
       oldcoords.x = coords.x
       oldcoords.y = coords.y
    
       coords.x = e.clientX
       coords.y = e.clientY
    
       if(coords.x < oldcoords.x && coords.y < oldcoords.y)
       {
           for(const particle of particleArray)
           {
               particle.posx += particle.speed/15
               particle.posy += particle.speed/15
           }
       }
       else if(coords.x < oldcoords.x && coords.y > oldcoords.y)
       {
           for(const particle of particleArray)
           {
               particle.posx += particle.speed/15
               particle.posy -= particle.speed/15
           }
       }
       else if(coords.x > oldcoords.x && coords.y > oldcoords.y)
       {
           for(const particle of particleArray)
           {
               particle.posx -= particle.speed/15
               particle.posy -= particle.speed/15
           }
       }else
       {
           for(const particle of particleArray)
           {
               particle.posx -= particle.speed/15
               particle.posy += particle.speed/15
           }
       }
    })
    initialize()
}