import React from "react";
import "./Transaction.css";

function Transaction() {
  return (
    <div>
      <div class="container">
        <div class="table-wrap">
          <table class="table shadow-lg p-3 mb-5 bg-white rounded table-responsive table-borderless">
            <thead id="THEAD_ID">
              <th>&nbsp;</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>total</th>
              <th>&nbsp;</th>
            </thead>
            <tbody>
              <tr class="align-middle alert border-bottom" role="alert">
                <td class="text-center">
                  <img
                    class="pic"
                    src="https://lh3.googleusercontent.com/qqlwTPenBYsk8AIJuLa_lPGhrIc_J_RR4OJNFjXcBmktpjqh5a4lvg4wX3h51ujHZyGSexgWju-d9SLp0klNw2fpsU1d1xl-SjqQ=s168"
                    alt=""
                  />
                </td>
                <td>
                  <div>
                    <p class="m-0 fw-bold">KONG Collective...</p>
                    <p class="m-0 text-muted">
                      Fugiat Voluptates quasi nemo,ipsa perferencis
                    </p>
                  </div>
                </td>
                <td>
                  <div class="fw-600">$44.99</div>
                </td>
                <td class="d-">
                  <input class="input" type="text" placeholder="2" />
                </td>
                <td>$89.98</td>
                <td>
                  <div class="btn" data-bs-dismiss="alert">
                    <span class="fas fa-times"></span>
                  </div>
                </td>
              </tr>
              <tr class="align-middle alert border-bottom" role="alert">
                <td class="text-center">
                  <img
                    class="pic"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztUs5KwwGOaZhS7pk4o90L4eSxPi_yUAE1UbZVf0EYy0u1Z60UAKwEtT0Z8c0KoGf0p8&usqp=CAU"
                    alt=""
                  />
                </td>
                <td>
                  <div>
                    <p class="m-0 fw-bold">Bored Ape Goril...</p>
                    <p class="m-0 text-muted">
                      Fugiat Voluptates quasi nemo,ipsa perferencis
                    </p>
                  </div>
                </td>
                <td>
                  <div class="fw-600">$54.99</div>
                </td>
                <td class="d-">
                  <input class="input" type="text" placeholder="2" />
                </td>
                <td>$108.98</td>
                <td>
                  <div class="btn" data-bs-dismiss="alert">
                    <span class="fas fa-times"></span>
                  </div>
                </td>
              </tr>
              <tr class="align-middle alert border-bottom" role="alert">
                <td class="text-center">
                  <img
                    class="pic"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvqmF5599_7NSw37IR19_eEkEw8pSYZoryOKeuSAdj9k2Rl14HG3T7gHa0ANmjIayPvmg&usqp=CAU"
                    alt=""
                  />
                </td>
                <td>
                  <div>
                    <p class="m-0 fw-bold">KONG Collective...</p>
                    <p class="m-0 text-muted">
                      Fugiat Voluptates quasi nemo,ipsa perferencis
                    </p>
                  </div>
                </td>
                <td>
                  <div class="fw-600">$50.99</div>
                </td>
                <td class="d-">
                  <input class="input" type="text" placeholder="2" />
                </td>
                <td>$100.98</td>
                <td>
                  <div class="btn" data-bs-dismiss="alert">
                    <span class="fas fa-times"></span>
                  </div>
                </td>
              </tr>
              <tr class="align-middle alert border-bottom" role="alert">
                <td class="text-center">
                  <img
                    class="pic"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkNM8SRWS9JBK06hvYrhJUpTCFpInRVttn4KVcqSAupQ&s"
                    alt=""
                  />
                </td>
                <td>
                  <div>
                    <p class="m-0 fw-bold">KONG Collective...</p>
                    <p class="m-0 text-muted">
                      Fugiat Voluptates quasi nemo,ipsa perferencis
                    </p>
                  </div>
                </td>
                <td>
                  <div class="fw-600">$74.99</div>
                </td>
                <td>
                  <input class="input" type="text" placeholder="2" />
                </td>
                <td>$148.98</td>
                <td>
                  <div class="btn" data-bs-dismiss="alert">
                    <span class="fas fa-times"></span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
