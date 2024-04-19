window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("mapGen").addEventListener("submit", function (e) {
    e.preventDefault();
    let logoUrl = document.getElementById("logoURL").value;
    let phoneNum = document.getElementById("phoneNum").value;
    let address = document.getElementById("addy").value;
    let monOpen = document.getElementById("monOpen").value;
    let monClose = document.getElementById("monClose").value;
    let tuesOpen = document.getElementById("tuesOpen").value;
    let tuesClose = document.getElementById("tuesClose").value;
    let wedOpen = document.getElementById("wedOpen").value;
    let wedClose = document.getElementById("wedClose").value;
    let thurOpen = document.getElementById("thurOpen").value;
    let thurClose = document.getElementById("thurClose").value;
    let friOpen = document.getElementById("friOpen").value;
    let friClose = document.getElementById("friClose").value;
    let satOpen = document.getElementById("satOpen").value;
    let satClose = document.getElementById("satClose").value;
    let sunOpen = document.getElementById("sunOpen").value;
    let sunClose = document.getElementById("sunClose").value;
    let outputCodeBlock = document.getElementById('outputCodeBlock');


    if(monOpen != ''){
        monOpen = removeZero(monOpen);
    } else {
        monOpen = 'Closed'
    }
    if(monClose != ''){
        monClose = removeZero(monClose);
    } else {
        monClose = 'Closed'
    }
    if(tuesOpen != ''){
        tuesOpen = removeZero(tuesOpen);
    } else{
        tuesOpen = 'Closed'
    }
    if(tuesClose != ''){
        tuesClose = removeZero(tuesClose);
    } else{
        tuesClose = 'Closed'
    }
    if(wedOpen != ''){
        wedOpen = removeZero(wedOpen);
    } else{
        wedOpen = 'Closed'
    }
    if(wedClose != ''){
        wedClose = removeZero(wedClose);
    } else{
        wedClose = 'Closed'
    }
    if(thurOpen != ''){
        thurOpen = removeZero(thurOpen);
    } else{
        thurOpen = 'Closed'
    }
    if(thurClose != ''){
        thurClose = removeZero(thurClose);
    } else{
        thurClose = 'Closed'
    }
    if(friOpen != ''){
        friOpen = removeZero(friOpen);
    } else{
        friOpen = 'Closed'
    }
    if(friClose != ''){
        friClose = removeZero(friClose);
    } else{
        friClose = 'Closed'
    }
    if(satOpen != ''){
        satOpen = removeZero(satOpen);
    } else{
        satOpen = 'Closed'
    }
    if(satClose != ''){
        satClose = removeZero(satClose);
    } else{
        satClose = 'Closed'
    }
    if(sunOpen != ''){
        sunOpen = removeZero(sunOpen);
    } else{
        sunOpen = 'Closed'
    }
    if(sunClose != ''){
        sunClose = removeZero(sunOpen);
    } else{
        sunClose = 'Closed'
    }

    logoURL = encodeURI(logoURL);
    address = encodeURI(address);



    let outputCode = `
    <br>
    <div class="container-fluid">
      <div class="footerContactMap">
        <div class="row row-same-height">
          <div class="col-lg-4">
            <p style="text-align: center"><img src="${logoUrl}" alt="" /></p>
            <p style="text-align: center; font-size: 3.5rem"><a href="tel:${phoneNum}" style="color: black">${phoneNum}</a></p>
            <table class="table">
              <thead>
                <tr>
                  <th><strong>Day</strong></th>
                  <th><strong>Open</strong></th>
                  <th><strong>Closed</strong></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>${monOpen}</td>
                  <td>${monClose}</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>${tuesOpen}</td>
                  <td>${tuesClose}</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>${wedOpen}</td>
                  <td>${wedClose}</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>${thurOpen}</td>
                  <td>${thurClose}</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>${friOpen}</td>
                  <td>${friClose}</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>${satOpen}</td>
                  <td>${satClose}</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>${sunOpen}</td>
                  <td>${sunClose}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-lg-8 embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              src="https://www.google.com/maps/embed/v1/place?q=${address}&key=AIzaSyB8uKypMnuWh66dtG4mmhoTNU9-deQzrmo"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    `;

    outputCodeBlock.innerText = outputCode;


    const myModal = new bootstrap.Modal(document.getElementById('codeModal'))
    myModal.show();
  });


  document.getElementById('monClosed').onchange = function() {
    document.getElementById('monOpen').disabled = this.checked;
    document.getElementById('monClose').disabled = this.checked;
    document.getElementById('monOpen').value = '';
    document.getElementById('monClose').value = '';
};

  document.getElementById('tuesClosed').onchange = function() {
    document.getElementById('tuesOpen').disabled = this.checked;
    document.getElementById('tuesClose').disabled = this.checked;
    document.getElementById('tuesOpen').value = '';
    document.getElementById('tuesClose').value = '';
};

  document.getElementById('wedClosed').onchange = function() {
    document.getElementById('wedOpen').disabled = this.checked;
    document.getElementById('wedClose').disabled = this.checked;
    document.getElementById('wedOpen').value = '';
    document.getElementById('wedClose').value = '';
};

  document.getElementById('thurClosed').onchange = function() {
    document.getElementById('thurOpen').disabled = this.checked;
    document.getElementById('thurClose').disabled = this.checked;
    document.getElementById('thurOpen').value = '';
    document.getElementById('thurClose').value = '';
};

  document.getElementById('friClosed').onchange = function() {
    document.getElementById('friOpen').disabled = this.checked;
    document.getElementById('friClose').disabled = this.checked;
    document.getElementById('friOpen').value = '';
    document.getElementById('friClose').value = '';
};

  document.getElementById('satClosed').onchange = function() {
    document.getElementById('satOpen').disabled = this.checked;
    document.getElementById('satClose').disabled = this.checked;
    document.getElementById('satOpen').value = '';
    document.getElementById('satClose').value = '';
};

  document.getElementById('sunClosed').onchange = function() {
    document.getElementById('sunOpen').disabled = this.checked;
    document.getElementById('sunClose').disabled = this.checked;
    document.getElementById('sunOpen').value = '';
    document.getElementById('sunClose').value = '';
};


});

function removeZero(req) {
  const timeString12hr = new Date('1970-01-01T' + req + 'Z')
  .toLocaleTimeString('en-US',
    {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'}
  );

  return timeString12hr;
}
