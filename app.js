const busObject = {
    vichels: 'Bus',
    imageUrl : 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    farePerKilo: 3,
    Capacity: 30,
    description: 'This is description.This is description.This is description.This is description.This is description.This is description.This is description;', 
};
const CarObject = {
    vichels: 'Car',
    imageUrl : 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
    farePerKilo: 4,
    Capacity: 4,
    description: 'This is description.This is description.This is description.This is description.This is description.This is description.This is description;', 
};
const bikeObject = {
    vichels: 'Bike',
    imageUrl : 'https://images.unsplash.com/photo-1619022412216-4f02215fb0cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlrZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    farePerKilo: 2,
    Capacity: 1,
    description: 'This is description.This is description.This is description.This is description.This is description.This is description.This is description;', 
};
// -----------------------------//
function displayCardSection(input) {
    const mainSection = document.getElementById('main-section');
    const sringifiedObj = JSON.stringify(mainSection);
    const div = document.createElement('div');
    div.innerHTML = `
            <div class="card mb-3 mx-auto mt-5" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="${input.imageUrl}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Transport Mood: ${input.vichels}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">
                    <span class="me-5">Fare Per Kilo: ${input.farePerKilo}</span>
                    <span>Capacity: ${input.Capacity}</span>
                </p>
                    <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick = "displayModal(${sringifiedObj})" data-bs-target="#exampleModal">
        Launch demo modal
        </button>
            </div>
            </div>
        </div>
        </div>
    `
    mainSection.appendChild(div);
}

displayCardSection(busObject);
displayCardSection(CarObject);
displayCardSection(bikeObject);
// ==============================================//

function displayModal(obj) {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <div class="card mx-auto" style="width: 18rem;">
  <img src="${obj.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Vehicle Mood : ${obj.vichels}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `
}

displayModal()
