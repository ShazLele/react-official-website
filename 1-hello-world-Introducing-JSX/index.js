/**
 * Created by shaz on 2017/6/12.
 */

ReactDOM.render(
    <h1>Hello!Shaz!</h1>,
    document.querySelector("#root")
)


const element=<h1>Hello!react!</h1>;


function formatName(user){
    return user.firstName+""+user.lastName;
}
const user={
    firstName:"Harper",
    lastName:"Perez",
    avatarUrl:"www.baidu.com/img"
};
const element1=(
    <h1>
        Hello!{formatName(user)}!
    </h1>
);
ReactDOM.render(
    element1,
    document.querySelector("#Introducing-JSX")
)


function getGreeting(user){
    if(user){
        return <h1>Hello!{formatName(user)}</h1>;
    }
    return <h1>Hello!Stranger!</h1>;
}
ReactDOM.render(
    getGreeting(user),
    document.querySelector("#JSX-Expression")
)


const element2=<div tabIndex="0"></div>;
const element3=<img src={user.avatarUrl}></img>;
const element4=<img src={user.avatarUrl} />;
const element5=(
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here!</h2>
    </div>
);
// const titile=response.potentiallyMaliciousInput;
// const element6=<h1>{title}</h1>;


const element7=React.createElement(
    'h1',
    {className:"greeting"},
    "Hello!React!"
);
const element8={
    type:"h1",
    props:{
        className:"greeting",
        children:"Hello!React!"
    }
};




