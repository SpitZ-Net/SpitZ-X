document.getElementById('spitz-trigger').addEventListener('click', function(e) {
    e.preventDefault();
    let win = window.open('about:blank', '_blank');
    if (win) {
        win.document.title = "Student Portal";
        win.document.body.style.margin = '0';
        win.document.body.style.height = '100vh';
        win.document.body.style.overflow = 'hidden';
        
        let iframe = win.document.createElement('iframe');
        iframe.style.border = 'none';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        
        let currentUrl = window.location.href;
        let appUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/')) + '/spitz-app.html';
        iframe.src = appUrl;
        
        win.document.body.appendChild(iframe);
    } else {
        alert("Pop-ups must be enabled for the cloaking feature to work.");
    }
});
