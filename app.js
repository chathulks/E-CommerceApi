function productAddOnclick() {

    let p_id = document.getElementById("p_id").value;
    let p_price = document.getElementById("p_price").value;
    let p_title = document.getElementById("p_title").value;
    let p_cat = document.getElementById("p_cat").value;
    let p_des = document.getElementById("p_des").value;
    let p_rate = document.getElementById("p_rate").value;
    let p_count = document.getElementById("p_count").value;
    let p_img = document.getElementById("p_img").value;

    const product = {
        id: p_id,
        price: p_price,
        title: p_title,
        category: p_cat,
        description: p_des,
        rate: p_rate,
        count: p_count,
        product_image: p_img
    };

    fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
        .then(response => response.json())
        .then(data => console.log(data));

}