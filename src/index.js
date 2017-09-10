import _ from 'lodash';

function component() {
    var element = document.createElement('div');
console.log(element);
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());