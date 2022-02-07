async function main() {
  let response = await fetch("https://swapi.dev/api/people");
  let prom = await response.json();
  let data = prom.results;

  for (let i = 0; i < data.length; i++) {
    const name = document.getElementById("show");
    name.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="./images/sw${
      i + 1
    }.jpg" class="card-img-top" alt="..." width="300px" height="250px">
    <div class="card-body">
      <h5 class="card-title">HERO DETAILS</h5>
      <p class="card-text">Click on the name to view more characteristics</p>
      <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
      ${data[i].name}
    </button>
    </div>
  </div>
  <!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${data[i].name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="flex">
      <div class="modal-body">
      <img class="round" src="./images/sw${
        i + 1
      }.jpg" class="card-img-top" alt="starwars heroes" width=150px" height="150px">
          </div>
          <div class="modal-body">
          <h5 class="card-title">GENDER</h5>
          ${data[i].gender}
          </div>
          <div class="modal-body">
          <h5 class="card-title">HEIGHT</h5>
          ${data[i].height}
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;
  }
}

main();

module.exports = {
  main,
};
