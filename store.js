if(document.readyState === 'loading' ){
    document.addEventListener9=('DOMContentLoaded', ready);
} else{
    ready();
}
function ready(){
 var removeCartItemButtons = document.getElementsByClassName('btn-danger');
 console.log(removeCartItemButtons);
for(var i=0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i];
    button.addEventListener('click', removeCartItem);
}  
var quantityInputs = document.getElementsByClassName('cart-quantity-input');
for(var i=0; i < quantityInputs.length; i++){
    var input =  quantityInputs[i];
    input.addEventListener('change', quantityChanged);
}
}
function removeCartItem(event){
    var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
        updateCartTotal();
}
function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateCartTotal();
}
