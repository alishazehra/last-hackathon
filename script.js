var _a, _b;
(_a = document.getElementById('generateResumeButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeContent = "\n        <h2>Resume</h2>\n        <p><strong>Full Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n        <p><strong>Experience:</strong> ").concat(experience, "</p>\n        <p><strong>Skills:</strong> ").concat(skills, "</p>\n    ");
    var resumeOutput = document.getElementById('resumeOutput');
    var resumeContentDiv = document.getElementById('resumeContent');
    if (resumeOutput && resumeContentDiv) {
        resumeContentDiv.innerHTML = resumeContent;
        resumeOutput.classList.remove('hidden');
    }
});
(_b = document.getElementById('printButton')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var _a;
    var printWindow = window.open('', '', 'height=600,width=800');
    var resumeContent = ((_a = document.getElementById('resumeContent')) === null || _a === void 0 ? void 0 : _a.innerHTML) || '';
    if (printWindow) {
        printWindow.document.write('<html><head><title>Print Resume</title></head><body>');
        printWindow.document.write(resumeContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    }
});
