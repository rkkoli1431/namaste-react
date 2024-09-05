// const heading = React.createElement(
//     "h1",
//     {id:"hii"},     // this statement give the id , class what wer give them all of these in real world is nothing but object 
//     "Namaste CodeChamp's 🫰"
// );


// ReactElement is (Object) => HTML(Browser Understand)

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am just h1 tag"),
        React.createElement("h1",{},"I am second h1 tag"),
        ]),

        React.createElement("div",{id:"child"},[
            React.createElement("h1",{},"I am just h1 tag"),
            React.createElement("h1",{},"I am second h1 tag"),
            ]),
]);

// react only return a jsx
// this is core code in react
console.log(parent); // object
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);  