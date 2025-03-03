document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        alert("Message Sent!");
    });
});

function verifyCertificate() {
    const certificateNumber = document.getElementById("certificateNumber").value;
    const validCertificates = ["123456", "987654", "CERT2024"]; // Example valid certificates

    const resultElement = document.getElementById("result");
    if (validCertificates.includes(certificateNumber)) {
        resultElement.style.color = "green";
        resultElement.textContent = "✅ Certificate is valid.";
    } else {
        resultElement.style.color = "red";
        resultElement.textContent = "❌ Certificate not found.";
    }
}

