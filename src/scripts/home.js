export function main() 
{
    const $clickHoldButtonContainer = document.querySelector('.click-hold-button-container')
    const $clickHoldButton = $clickHoldButtonContainer.querySelector('.click-hold-button-container__button')
    const $homeDescriptionContainer = document.querySelector('.home-container')
    const $homeDescription = $homeDescriptionContainer.querySelector('.home-container__description')
    const $name = $homeDescription.querySelector('.home-container__description__name')
    const $role = $homeDescription.querySelector('.home-container__description__role')
    const $study = $homeDescription.querySelector('.home-container__description__study')
    const $desription = $homeDescription.querySelector('.home-container__description__description')
    
    $clickHoldButton.addEventListener('mousedown', () =>
    {
        console.log('oucu')
    })  
}
