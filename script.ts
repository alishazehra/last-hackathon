document.getElementById('generateResumeButton')?.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    const resumeContent = `
        <h2>Resume</h2>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;

    const resumeOutput = document.getElementById('resumeOutput');
    const resumeContentDiv = document.getElementById('resumeContent');
    
    if (resumeOutput && resumeContentDiv) {resumeContentDiv.innerHTML = resumeContent;
        resumeOutput.classList.remove('hidden');
    }
});

document.getElementById('printButton')?.addEventListener('click', () => {
    const printWindow = window.open('', '', 'height=600,width=800');
    const resumeContent = document.getElementById('resumeContent')?.innerHTML || '';
    
    if (printWindow) {
        printWindow.document.write('<html><head><title>Print Resume</title></head><body>');
        printWindow.document.write(resumeContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    }
});

