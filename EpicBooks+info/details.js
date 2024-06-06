// Dettagli

window.onload = () => {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  fetch("https://striveschool-api.herokuapp.com/books/" + id)
    .then((res) => res.json())
    .then((book) => {
      const h1 = document.querySelector("h1");
      h1.innerText = book.title;
      const container = document.querySelector(".album .container");
      container.innerHTML = `
          <div class="card mb-3 w-100" >
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img src="${book.img}" class="card-image" alt="${book.title}_${book.asin}">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <div class="btn btn-primary rounded-pill "> ${book.price}</div>
                        <div class="btn btn-danger rounded-pill "> ${book.category.toUpperCase()}</div>
                      </div>
                    </div>
                  </div>
                </div>`;
    });
};

document.getElementById("mySvg").addEventListener("click", function () {
  window.location.href = "/index.html";
});
