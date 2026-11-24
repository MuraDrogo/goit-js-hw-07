'use strict';

const categoriesList = document.querySelector('#categories')


const categoryItems = document.querySelectorAll('.item');


console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
    const categoriesTitle = item.querySelector('h2').textContent;
    const elementsCout = item.querySelectorAll('li').length;
     console.log(`Category: ${categoriesTitle}`);
    console.log(`Elements: ${elementsCout}`);
    
})