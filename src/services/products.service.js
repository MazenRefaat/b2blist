import products from '../products.json';

export function fetchProducts(){
    return products;
}

export function getProduct(id){
    let foundProduct;
    products.products.forEach(product=> {
        console.log('id', product.product_id, id);
        if(product.product_id == id){
            foundProduct = product;
        }
    })
    return foundProduct;
}