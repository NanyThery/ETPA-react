const colorsForTitles = ['#a83232', '#4d0404', '#007063', '#003f70', '#000470', '#3c0070']
const colorsForBorders = ['#e04f00', '#e0e000', '#00a4e0', '#000000']
const colorsForBackgrounds = ['#f6ff00', '#52cc00', '#ccaa00']

//Dependiendo del elemento cogerá una lista u otra. 

function getColors(element) {
    switch (element) {
        case 'border':
            return colorsForTitles
        case 'background':
            return colorsForBorders
        case 'titles':
            return colorsForBackgrounds
        default:
            return colorsForTitles
    }
}
const getRandomColor = (element) => {
    const colors = getColors(element);
    const randomPosition = colors[Math.floor(Math.random() * colors.length)];

    return randomPosition;
}

export {
    getRandomColor
}