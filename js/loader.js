document.addEventListener('DOMContentLoaded', function() {
   const includeHTML = (el, url) => {
       const xhr = new XMLHttpRequest();
       xhr.onreadystatechange = function() {
           if (xhr.readyState == 4 && xhr.status == 200) {
               el.innerHTML = xhr.responseText;
           }
       };
       xhr.open('GET', url, true);
       xhr.send();
   };

   // Include the header, navbar, and footer
   includeHTML(document.getElementById('topbar'), 'topbar.html');
   includeHTML(document.getElementById('navbar'), 'navbar.html');
   includeHTML(document.getElementById('footer'), 'footer.html');
});