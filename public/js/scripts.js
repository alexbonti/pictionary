
async function retriveImages() {
  let drawings = [];

  try {
    const rawResponse = await fetch('/data/getData', {
      method: 'GET',
      headers: {},
    });
    const content = await rawResponse.json();

    drawings = content.data;
    console.log(drawings);
  } catch (error) {
    console.log(error);
  }

  _createCard=function(img,author){
    console.log(img)
    let card=`
    <div class="col l3 s12 m6">
      <div class="card">
        <div class="card-image">
          <img src="${img}">
          <span class="card-title" style="color:black">${author} </span>
        </div>
      </div>
    </div>`
  return card;
  }

  console.log(drawings)
  //const cardsContainer = document.getElementById('images');
  const cardsContainer = $('#images');



 drawings.forEach(drawing => {
    const img = document.createElement('img');
    img.src = drawing.drawing;

    //const owner = document.createElement('h3');
    //owner.innerHTML = drawing.ownerName;

    //drawingContainer.appendChild(owner);
    //drawingContainer.appendChild(img);
    let card=_createCard(drawing.drawing,drawing.ownerName);
    console.log(cardsContainer)
    cardsContainer.append(card)
  }
  )
 // drawingContainer.style.display = 'block';

}


$(document).ready(retriveImages())