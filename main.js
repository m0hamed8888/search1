function hide(){
   let searchBar = document.querySelector('.search-input');
 if(searchBar.value.length != 0){
     document.querySelector(".product-list").style.visibility ="visible";
 }else{
    document.querySelector(".product-list").style.visibility ="hidden"; 
 }
    let searchBar1 = document.querySelector('.search-input').value.toLocaleUpperCase();
    let productlist = document.querySelector('.product-list');
    let product= document.querySelectorAll('.product');
    let productName = document.getElementsByTagName('h2');
   

    for(let i = 0; i<productName.length; i++){
        if(productName[i].innerHTML.toUpperCase().indexOf(searchBar1) >= 0){
            product[i].style.display = "";
        }else{
            product[i].style.display = "none";
        }

    }
}