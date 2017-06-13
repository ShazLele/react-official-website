
/**
 * Created by shaz on 2017/6/12.
 */

// 组件 名字大写字母开头&闭合标签
// **** functional
function Welcome1(props){
    return <h1>Hello!{props.name}</h1>;
}

// ***** use an ES6 class to define a component
class Welcome2 extends React.Component{
    render(){
        return <h1>Hello!{this.props.name}</h1>;
    }
}


const element=<div />;


const element1=<Welcome1 name="shaz1" />;
ReactDOM.render(element1,document.querySelector("#root1"));

const element2=<Welcome2 name="shaz2" />;
ReactDOM.render(element2,document.querySelector("#root2"));


function Welcome3(props){
    return <h1>Hello!{props.name}</h1>;
};
function App(){
    return(
        <div>
            <Welcome3 name="lele" />
            <Welcome3 name="xiaoshui" />
            <Welcome3 name="laodong" />
        </div>
    );
};
ReactDOM.render(
    <App />,
    document.querySelector("#root3")
);


// ****Extracting Components 组件的提取
function Comment(props){
    return(
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {props.date}
            </div>
        </div>
    )
}
// ****提取 Avatar
// function Avatar(props){
//     return(
//         <img className="Avatar"
//             src={props.user.avatarUrl}
//             alt={props.user.name}
//         />
//     )
// }
class Avatar extends React.Component{
    render(){
       return(
            <img className="Avatar"
                src={this.props.user.avatarUrl}
                alt={this.props.user.name}
            />
        ) 
    }
    
}
// ****提取 UserInfo
function UserInfo(props){
    return(
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}
// ****简化以上Comment组件
function Comment1(props){
    return(
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {props.date}
            </div>
        </div>
    )
}
// props传入对象外面需要再加一层{}
ReactDOM.render(
    <Comment1 author={{avatarUrl:'https://www.baidu.com/img/bd_logo1.png',name:'baidu'}}
        text="百度" date={new Date().toLocaleString()}
    />,
    document.querySelector("#app")
);


// **** Props are Read-Only
function sum(a,b){
    return a+b;
}
function withdraw(account,amount){
    sccount.total-=amount;
}



const element3=(
        <div>
            <Welcome1 name="welcome1" />
            <Welcome2 name="welcome2" />
            {
                (function(){
                    return(
                        <div>
                            <h2>来自匿名函数 </h2>
                            <Welcome1 name="function welcome1" />
                            <Welcome2 name="function welcome2" />
                        </div>
                    )
                })()
            }
        </div>
    );
ReactDOM.render(element3,document.querySelector("#func-root"));