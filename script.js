console.log("Working...");

const populate = async (value, currency) => {
    try {
        const url = `https://open.er-api.com/v6/latest/${currency}`;

        // Loading state
        document.querySelector(".output").style.display = "block";
        document.querySelector("tbody").innerHTML = "<tr><td colspan='3'>Loading...</td></tr>";

        let response = await fetch(url);

        if (!response.ok) {
            throw new Error("API Error");
        }

        let rJson = await response.json();

        let myStr = "";

        for (let key in rJson.rates) {
            let rate = rJson.rates[key];

            myStr += `
    <tr>
      <td>${key}</td>
      <td>${key}</td>
      <td>${(rate * value).toFixed(2)}</td>
    </tr>`;
        }

        document.querySelector("tbody").innerHTML = myStr;

    } catch (error) {
        console.error(error);
        document.querySelector("tbody").innerHTML =
            "<tr><td colspan='3'>Error fetching data</td></tr>";
    }
};

const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    const value = parseFloat(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;

    // Validation
    if (!value || value <= 0) {
        alert("Please enter a valid amount");
        return;
    }

    populate(value, currency);
});