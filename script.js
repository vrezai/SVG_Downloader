// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function() {
    const generateBtn = document.getElementById("generateBtn");
    generateBtn.addEventListener("click", generateSVG);
});

function generateSVG() {
    const svgCode = document.getElementById("svgCode").value;
    const svgContainer = document.getElementById("svgContainer");
    const downloadLink = document.getElementById("downloadLink");

    // Set the innerHTML of the container to the user's SVG code
    svgContainer.innerHTML = svgCode;

    // Show the download link
    downloadLink.style.display = "block";

    // Generate a downloadable image by converting the SVG to a data URI
    const svgData = new XMLSerializer().serializeToString(svgContainer.firstChild);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const svgUrl = URL.createObjectURL(svgBlob);
    downloadLink.href = svgUrl;
}