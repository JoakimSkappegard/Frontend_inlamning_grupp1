window.onload = loadFakeStoreAPI();

function loadFakeStoreAPI() {
  console.log("laddar api");

  fetch("https://fakestoreapi.com/products")
    .then((resp) => resp.json())
    .then((data) => {
      let output = `
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      `;

      data.forEach((element) => {
        output +=
          `
        <div class="col mb-5">
                          <div class="card h-100">
                              <!-- Product image-->
                              <img class="card-img-top" src=" 
                              ` +
          element.image +
          `
                              " alt=` +
          element.title +
          ` style = "max-height:200px; object-fit: contain;" />
                              <!-- Product details-->
                              <div class="card-body p-4">
                                  <div class="text-center">
                                      <!-- Product name-->
                                      <h5 class="fw-bolder">` +
          element.title +
          `</h5>
                                      <!-- Product price-->
                                      ` +
          element.price +
          `
                                  kr</div>
                              </div>
                              <!-- Product actions-->
                              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                  <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Buy</a></div>
                              </div>
                          </div>
                      </div>
        `;
      });

      output += `
            </div>
      `;

      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.error(err));
}
