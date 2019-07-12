const btn = document.querySelector('#conBtn').addEventListener('click', (event) => {
  let target = event.target;
  event.preventDefault();

  // console.log(target, target.getAttribute('href'));

  const linkMain = target.getAttribute('href');
  const place = document.querySelector('.info__block');

  const http = createRequestObject();
      http.caching = false;
      if(http.overrideMimeType) { 
        http.overrideMimeType('text/html; charset=utf-8');
      }
      if(http) {
        http.open("POST", "1parseServerConnect.php", true);
        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        http.send("linkMain=" + linkMain);
        http.onreadystatechange = function() {
          if (http.readyState == 4 && http.status == 200) {
            data = http.responseText;
            // bg.classList.add('active');
            // popup.classList.add('active');
            place.innerHTML=data;
          }
        }
        http.onerror = function() {
          alert('Извините, данные не были переданы. Попробуйте другой способ связи.');
        }
      }

});

function createRequestObject() {
  try {
    return new XMLHttpRequest() 
  }
  catch(e) {
    try { 
      return new ActiveXObject('Msxml2.XMLHTTP') 
    }
    catch(e) {
      try { 
        return new ActiveXObject('Microsoft.XMLHTTP') 
      }
      catch(e){ 
        return null; 
      }
    }
  }
}

// trash
// allPortLinks = document.querySelectorAll('.portfolio-row a');
// for(i=0;i<allPortLinks.length;i++) {
//   allPortLinks[i].onclick = openLink(i);
// }

// let place = document.querySelector('.works-popup .wrap'),
// bg = document.querySelector('.works-popup-bg'),
// popup = document.querySelector('.works-popup');
// function openLink(ind) {
//   return function(evt) {
//     evt.preventDefault();
        
//     links = allPortLinks[ind].getAttribute('href');
//     var http = createRequestObject();
//     http.caching = false;
//     if(http.overrideMimeType) { 
//       http.overrideMimeType('text/html; charset=utf-8');
//     }
//     if(http) {
//       http.open("POST", "wp-content/themes/wox/includes/load.php", true);
//       http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//       http.send("links=" + links);
//       http.onreadystatechange = function() {
//         if (http.readyState == 4 && http.status == 200) {
//           data = http.responseText;
//           bg.classList.add('active');
//           popup.classList.add('active');
//           place.innerHTML=data;
//         }
//       }
//       http.onerror = function() {
//         alert('Извините, данные не были переданы. Попробуйте другой способ связи.');
//       }
//     }
//   }
// }