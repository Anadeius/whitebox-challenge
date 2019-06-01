const selectCategory = (category) => {
    let productData = getProducts();
    let filteredData = productData.filter(product => product.category === category);

    return filteredData;
}

const filterPrice = (price) => {

}

const filterColors = (colors) => {
    let productData = getProducts();
    let filteredData = productData.filter(product => {
        for (let color in colors){
            return product.color === color;
        }
    });

    return filteredData;
}

const filterSearch = (searchTerm) => {
    let productData = getProducts();
    let filteredData = productData.filter(product => {
        let name = product.name;

        return name.substring(0, searchTerm.length) === searchTerm;
    });
}

const sortItems = (sortInput) => {

}

const sortPrice = (priceInput) => {

}