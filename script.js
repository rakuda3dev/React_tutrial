let dom = document.querySelector('#root');
let element = React.createElement(
    'p', {}, 'hello React Application'
);
ReactDOM.render(element, dom);