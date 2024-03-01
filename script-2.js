//COLOUR BACKGROUND

//window.addEventListener('scroll', function () {
//    const scrollPosition = window.scrollY;
//    const windowHeight = window.innerHeight;
//
//    // Calculate the percentage scrolled relative to the window height
//    const scrollPercentage = (scrollPosition / windowHeight) * 100;
//
//    // Define the colors for each wrapper
//    const colors = [
//        {
//            start: '#ffade0',
//            end: '#ffffff'
//        },
//        {
//            start: '#ffffff',
//            end: '#ebeaeb'
//        },
//        {
//            start: '#ebeaeb',
//            end: '#d71d5b'
//        }
//        // Add more colors and transitions as needed
//    ];
//
//    // Loop through each color transition
//    for (let i = 0; i < colors.length; i++) {
//        const startColor = colors[i].start;
//        const endColor = colors[i].end;
//        const startOffset = i * 100; // Offset for the start of the transition
//        const endOffset = (i + 1) * 100; // Offset for the end of the transition
//
//        // Check if the current scroll position is within the transition range
//        if (scrollPercentage >= startOffset && scrollPercentage <= endOffset) {
//            // Calculate the percentage within the current transition range
//            const percentage = (scrollPercentage - startOffset) / 100;
//
//            // Convert the start and end colors to RGB values
//            const startRGB = hexToRgb(startColor);
//            const endRGB = hexToRgb(endColor);
//
//            // Interpolate between the start and end RGB values
//            const interpolatedColor = interpolateColor(startRGB, endRGB, percentage);
//
//            // Set the background color of the body
//            document.body.style.backgroundColor = `rgb(${interpolatedColor.r}, ${interpolatedColor.g}, ${interpolatedColor.b})`;
//
//            // Calculate the luminance of the interpolated color
//            const luminance = calculateLuminance(interpolatedColor.r, interpolatedColor.g, interpolatedColor.b);
//
//            // Adjust the text color based on the luminance
//            const textColor = luminance > 0.5 ? '#000000' : '#ffffff'; // Dark text for light background, light text for dark background
//
//            // Set the text color of h1 and p elements
//            const headings = document.querySelectorAll('h1, p');
//            headings.forEach(heading => {
//                heading.style.color = textColor;
//            });
//
//            // Exit the loop since we found the current transition
//            break;
//        }
//    }
//});
//
//// Function to calculate the luminance of an RGB color
//function calculateLuminance(r, g, b) {
//    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
//    return luminance;
//}
//
//// Function to convert hex color to RGB
//function hexToRgb(hex) {
//    // Remove '#' if present
//    hex = hex.replace(/^#/, '');
//
//    // Parse hex value to RGB
//    const bigint = parseInt(hex, 16);
//    const r = (bigint >> 16) & 255;
//    const g = (bigint >> 8) & 255;
//    const b = bigint & 255;
//
//    return {
//        r,
//        g,
//        b
//    };
//}
//
//// Function to interpolate between two RGB colors
//function interpolateColor(start, end, percentage) {
//    const r = Math.round(start.r + (end.r - start.r) * percentage);
//    const g = Math.round(start.g + (end.g - start.g) * percentage);
//    const b = Math.round(start.b + (end.b - start.b) * percentage);
//
//    return {
//        r,
//        g,
//        b
//    };
//}

//CIRCLE CURSOR


const svgNS = 'http://www.w3.org/2000/svg';

// Create SVG Element
const svg = document.createElementNS(svgNS, 'svg');
svg.setAttribute('width', '36'); // 1.5x size of 24px
svg.setAttribute('height', '36'); // 1.5x size of 24px
svg.setAttribute('viewBox', '0 0 36 36'); // Set the viewBox accordingly

// Create Circle Element
const circle = document.createElementNS(svgNS, 'circle');
circle.setAttribute('cx', '18'); // Center x-coordinate
circle.setAttribute('cy', '18'); // Center y-coordinate
circle.setAttribute('r', '15'); // Radius (scaled by 1.5x)
circle.setAttribute('fill', 'black'); // Fill color with black
circle.setAttribute('stroke', 'black'); // Set the outline color to black
circle.setAttribute('stroke-width', '2');

svg.appendChild(circle);

// Convert the SVG Element to a Data URI
const svgData = new XMLSerializer().serializeToString(svg);
const svgURI = 'data:image/svg+xml;base64,' + btoa(svgData);

// Define a function to update cursor size
function updateCursorSize(event) {
    const scaleFactor = event.target.tagName.toLowerCase() === 'a' ? 0.67 : 1; // Scale factor for different elements
    const originalRadius = 15; // Default radius
    const newRadius = originalRadius * scaleFactor; // Calculate new radius based on scale factor
    circle.setAttribute('r', newRadius); // Set circle radius
}

// Add Event Listeners to Adjust Cursor Size on Hyperlink Hover
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mousemove', updateCursorSize);
    // Prevent default CSS hover state for <a> tags
    link.addEventListener('mouseenter', () => {
        link.classList.add('custom-cursor');
    });
    link.addEventListener('mouseleave', () => {
        link.classList.remove('custom-cursor');
    });
});

// Set the SVG Element as the Custom Cursor for the Body
document.body.style.cursor = `url('${svgURI}') 18 18, auto`; // Set hotspot at center




// Create Text Element
//const text = document.createElementNS(svgNS, 'text');
//text.setAttribute('x', '50%'); // Center text horizontally
//text.setAttribute('y', '50%'); // Center text vertically
//text.setAttribute('dominant-baseline', 'middle'); // Align text vertically to the middle
//text.setAttribute('text-anchor', 'middle'); // Align text horizontally to the middle
//text.setAttribute('fill', 'white'); // Text color
//text.setAttribute('font-family', 'sans-serif'); // Font family
//text.setAttribute('font-size', '12');
//text.setAttribute('font-weight', 'bold'); // Font size
//text.textContent = ''; // Text content

//ICON GENERATION ON CLICK


//function createIcon(x, y) {
//    const iconSize = 400; // New size for the icons (4x larger)
//
//    // Randomly select an icon image from the folder
//    const iconsFolder = 'img/icons/';
//    const icons = ['icon-2023.png', 'icon-eyes.png', 'icon-heart.png', 'icon-hiss.png', 'icon-smiley.png']; // List of icon filenames
//    const randomIcon = icons[Math.floor(Math.random() * icons.length)]; // Randomly select an icon filename
//
//    // Create image element for the icon
//    const img = new Image();
//    img.src = iconsFolder + randomIcon;
//    img.style.width = iconSize + 'px';
//    img.style.height = iconSize + 'px';
//    img.style.position = 'fixed'; // Ensure the icon stays in place relative to the viewport
//    img.style.left = `${x - iconSize / 2}px`; // Position horizontally under the mouse
//    img.style.top = `${y - iconSize / 2}px`; // Position vertically under the mouse
//    img.style.zIndex = '9999'; // Ensure the icon appears on top of other elements
//
//    // Append image element to the document body
//    document.body.appendChild(img);
//
//    // Set a timer to fade out the icon after 5 seconds
//    setTimeout(function () {
//        fadeOut(img);
//    }, 2000);
//}
//
//// Function to fade out an element
//function fadeOut(element) {
//    var opacity = 1;
//    var intervalID = setInterval(function () {
//        if (opacity <= 0) {
//            clearInterval(intervalID);
//            element.parentNode.removeChild(element); // Remove the element from the DOM
//        } else {
//            element.style.opacity = opacity;
//            opacity -= 0.1; // Decrease opacity gradually
//        }
//    }, 50); // Adjust the duration of each interval (in milliseconds)
//}
//
//// Event listener for click events on the document body
//document.addEventListener('click', function (event) {
//    // Get the coordinates of the click event relative to the viewport
//    const x = event.clientX;
//    const y = event.clientY;
//
//    // Create and append a randomly selected icon image at the clicked coordinates
//    createIcon(x, y);
//});
//

document.addEventListener('DOMContentLoaded', function () {
    var footerReturn = document.querySelector('.footerReturn');

    footerReturn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var menuLink = document.getElementById('menuLink');
    var dropdownMenu = document.getElementById('dropdownMenu');
    var isMenuOpen = false; // Variable to track menu state

    menuLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        if (isMenuOpen) {
            dropdownMenu.style.display = 'none'; // Close the menu if it's already open
            isMenuOpen = false; // Update menu state
        } else {
            dropdownMenu.style.display = 'block'; // Open the menu if it's closed
            isMenuOpen = true; // Update menu state
        }
    });
});


const facultyAccordionItems = document.querySelectorAll('.facultyAccordionItem');

function closeAllfacultyAccordionItems() {
    facultyAccordionItems.forEach(item => {
        item.classList.remove('active');
        const content = item.querySelector('.facultyAccordionContent');
        if (content) {
            content.style.display = 'none';
        }
    });
}


facultyAccordionItems.forEach(item => {
    const accordionHeader = item.querySelector('.accordion-header');
    accordionHeader.addEventListener('click', () => {
        if (!item.classList.contains('active')) {
            closeAllfacultyAccordionItems();
            item.classList.add('active');
            item.querySelector('.facultyAccordionContent').style.display = 'block';
        } else {
            item.classList.remove('active');
            item.querySelector('.facultyAccordionContent').style.display = 'none';
        }
    });
});

// Define a function to create the plus sign SVG element
function createPlusSVG() {
    const plusSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    plusSVG.setAttribute('class', 'plus-icon');
    plusSVG.setAttribute('width', '24');
    plusSVG.setAttribute('height', '24');
    plusSVG.setAttribute('viewBox', '0 0 24 24');
    plusSVG.innerHTML = '<path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor"/>';
    return plusSVG;
}

// Find all accordion header elements
const accordionHeaders = document.querySelectorAll('.facultyAccordionItem .accordion-header');

// Append plus sign SVG Element to each accordion header
accordionHeaders.forEach(header => {
    // Create plus sign SVG element
    const plusSVG = createPlusSVG();
    // Append plus sign SVG Element to the right of the accordion header
    header.appendChild(plusSVG);
});
