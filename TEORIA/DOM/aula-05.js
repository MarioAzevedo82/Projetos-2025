document.getElementsByTagName('h1')[0].innerHTML = 'Elemento por tagName'

setTimeout(() => {
    document.getElementsByTagName('p')[1].innerHTML = 'Elemento por tagName'
}, 2000);

setTimeout(() => {
    document.getElementsByTagName('div')[2].innerHTML = 'Elemento por tagName'
}, 3000);