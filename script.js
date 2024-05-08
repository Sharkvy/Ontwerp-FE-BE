// Get the SVG elements to be clickable
const frontendElement = document.getElementById('frontend');
const backendElement = document.getElementById('backend');
const testingElement = document.getElementById('testing');

const designElement = document.getElementById('design');
const devopsElement = document.getElementById('devops');
const securityElement = document.getElementById('security');


// Get the info boxes
const frontendInfo = document.getElementById('frontend-info');
const backendInfo = document.getElementById('backend-info');
const testingInfo = document.getElementById('testing-info');

const designInfo = document.getElementById('design-info');
const devopsInfo = document.getElementById('devops-info');
const securityInfo = document.getElementById('security-info');


// Add click event listeners to the SVG elements
frontendElement.addEventListener('click', (event) => {
    // Stop propagation to prevent document's click handler from being triggered
    event.stopPropagation();
    // Show the frontend info box
    frontendInfo.style.display = 'block';
    // Hide the backend and testing info boxes
    backendInfo.style.display = 'none'; 
    testingInfo.style.display = 'none';
    designInfo.style.display = 'none';
    devopsInfo.style.display = 'none';
    securityInfo.style.display = 'none';
});

backendElement.addEventListener('click', (event) => {
    // Stop propagation to prevent document's click handler from being triggered
    event.stopPropagation();
    // Show the backend info box
    backendInfo.style.display = 'block';
    // Hide the frontend and testing info boxes
    frontendInfo.style.display = 'none';
    testingInfo.style.display = 'none';
    designInfo.style.display = 'none';
    devopsInfo.style.display = 'none';
    securityInfo.style.display = 'none';

});

testingElement.addEventListener('click', (event) => {
    // Stop propagation to prevent document's click handler from being triggered
    event.stopPropagation();
    // Show the testing info box
    testingInfo.style.display = 'block';
    // Hide the frontend and backend info boxes
    frontendInfo.style.display = 'none';
    backendInfo.style.display = 'none';
    designInfo.style.display = 'none';
    devopsInfo.style.display = 'none';
    securityInfo.style.display = 'none';
});

designElement.addEventListener('click', (event) => {
  // Stop propagation to prevent document's click handler from being triggered
  event.stopPropagation();
  // Show the testing info box
  designInfo.style.display = 'block';
  // Hide the frontend and backend info boxes
  frontendInfo.style.display = 'none';
  backendInfo.style.display = 'none';
  testingInfo.style.display = 'none';
  devopsInfo.style.display = 'none';
  securityInfo.style.display = 'none';
});


devopsElement.addEventListener('click', (event) => {
  // Stop propagation to prevent document's click handler from being triggered
  event.stopPropagation();
  // Show the testing info box
  devopsInfo.style.display = 'block';
  // Hide the frontend and backend info boxes
  frontendInfo.style.display = 'none';
  backendInfo.style.display = 'none';
  testingInfo.style.display = 'none';
  securityInfo.style.display = 'none';
  designInfo.style.display = 'none';
});

securityElement.addEventListener('click', (event) => {
  // Stop propagation to prevent document's click handler from being triggered
  event.stopPropagation();
  // Show the testing info box
  securityInfo.style.display = 'block';
  // Hide the frontend and backend info boxes
  frontendInfo.style.display = 'none';
  backendInfo.style.display = 'none';
  testingInfo.style.display = 'none';
  devopsInfo.style.display = 'none';
  designInfo.style.display = 'none';
});


// Add click event listener to the document
document.addEventListener('click', () => {
    // Hide all info boxes
    frontendInfo.style.display = 'none';
    backendInfo.style.display = 'none';
    testingInfo.style.display = 'none';
    designInfo.style.display = 'none'; // Add this line
    devopsInfo.style.display = 'none'; // Add this line
    securityInfo.style.display = 'none'; // Add this line
});

// Add click event listeners to the info boxes to stop propagation
frontendInfo.addEventListener('click', (event) => {
    event.stopPropagation();
});

backendInfo.addEventListener('click', (event) => {
    event.stopPropagation();
});

testingInfo.addEventListener('click', (event) => {
    event.stopPropagation();
});

designInfo.addEventListener('click', (event) => {
  event.stopPropagation();
});

devopsInfo.addEventListener('click', (event) => {
  event.stopPropagation();
});

securityInfo.addEventListener('click', (event) => {
  event.stopPropagation();
});


// Add click event listener to the SVG element
testingElement.addEventListener('click', (event) => {
    // Stop propagation to prevent document's click handler from being triggered
    event.stopPropagation();
    // Show the testing info box
    testingInfo.style.display = 'block';
});

// Add click event listener to the info box to stop propagation
testingInfo.addEventListener('click', (event) => {
    event.stopPropagation();
});


let elementsFound = 0;
let foundElements = {
    frontend: false,
    backend: false,
    testing: false,
    design: false,
    devops: false,
    security: false
};

function updateProgressBar(element) {
    if (!foundElements[element]) {
        elementsFound++;
        foundElements[element] = true;
        const progressBar = document.getElementById('progress-bar');
        progressBar.style.width = (elementsFound / 6) * 100 + '%'; // Updated from 3 to 6
    }
}

frontendElement.addEventListener('click', (event) => {
    event.stopPropagation();
    frontendInfo.classList.add('show');
    updateProgressBar('frontend');
});

backendElement.addEventListener('click', (event) => {
    event.stopPropagation();
    backendInfo.classList.add('show');
    updateProgressBar('backend');
});

testingElement.addEventListener('click', (event) => {
    event.stopPropagation();
    testingInfo.classList.add('show');
    updateProgressBar('testing');
});

designElement.addEventListener('click', (event) => {
    event.stopPropagation();
    designInfo.classList.add('show');
    updateProgressBar('design');
});

devopsElement.addEventListener('click', (event) => {
    event.stopPropagation();
    devopsInfo.classList.add('show');
    updateProgressBar('devops');
});

securityElement.addEventListener('click', (event) => {
    event.stopPropagation();
    securityInfo.classList.add('show');
    updateProgressBar('security');
});