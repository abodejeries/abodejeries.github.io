var filterInput = document.getElementById('search');

filterInput.addEventListener('keyup', function(){
    // Get the input value
    var filterValue = document.getElementById('search').value.toLowerCase();
    // Get the title UL
    var Ul = document.getElementById('products');
    // Get the Li from UL
    var li = Ul.querySelectorAll('li.product-item');

    // Loop through product items
    for(var i = 0; i < li.length; i++){
        let div = li[i].getElementsByTagName('div')[0];

        if(div.innerHTML.toLowerCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        }else{
            li[i].style.display = 'none';
        }
    }
});

const searchBox = document.forms['form-search'].querySelector('input');

searchBox.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();

    const title = 0;

})