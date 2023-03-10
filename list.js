const generateList = (arr, index = '') => {
    const ul = document.createElement('ul');
    for(let i = 0; i < arr.length; i++){
        const elem = arr[i];
        const li = document.createElement('li');
        if(Array.isArray(elem)){
            li.appendChild(generateList(elem, `${i + 1}.`));
        } else {
            li.textContent = `${index}` + `${elem}`;
        }
    ul.appendChild(li);
    }
    return ul;
};

document.body.prepend(generateList([1, 2, [1, 2, 3, [1, 2, 3, 4]], 5, 6]));