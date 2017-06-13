/**
 * Created by shaz on 2017/6/13.
 */
function tick1(){
    const element=(
        <div>
            <h1>Hello,tick1!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
        )

    ReactDOM.render(
            element,
            document.querySelector("#root")
        )
}
setInterval(tick1,1000);


function Clock(props){
    return(
        <div>
            <h1>Hello,Clock!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    )
}
function tick2(){
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.querySelector("#root1")
    )
}
setInterval(tick2,1000);


// ****state It is private and fully controlled bt the component
class Clock1 extends React.Component{

    // 初始化state
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }

    render(){
        return(
            <div>
                <h3>Class component---Clock1</h3>
                <h4>It is {this.state.date.toLocaleTimeString()}.</h4>
            </div>
        )
    }
}
ReactDOM.render(
    <Clock1 />,
    document.querySelector("#root2")
)

// **** Mount & Unmount 钩子
class Clock2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date:new Date()
        };
    }
    // **** 组件渲染到DOM上后调用
    componentDidMount(){
        this.timerID=setInterval(
            ()=>this.tick(),
            1000
        );
    }
    // **** 生命周期结束前
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    // **** 本地state更新
    tick(){
        this.setState({
            date:new Date()
        });
    }

    render(){
        return(
            <div>
                <h1>Hello!Mount&Unmount  Clock2</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
ReactDOM.render(
    <Clock2 />,
    document.querySelector("#root3")
)



// **** Modify State 
// state值不允许直接修改 唯一声明的地方只有在constructor里
// this.setState({comment:'Hello'});


// **** State Updates May Be Asynchronous,this.props and this.state may be updated asynchronously
// **** Wrong
/*
this.setState({
    counter:this.state.counter+this.props.increment
});
*/

// **** Correct
/*
this.setState((prevState,props)=>({
   counter:prevState.counter+props.increment 
}));
*/
// **** or
/*
this.setState(function(prevState,props){
    return{
        counter:prevState.counter+props.increment
    };
});
*/


// construtor(props){
//     super(props);
//     this.state={
//         posts:[],
//         comments:[]
//     };
// }
// componentDidMount(){
//     fetchPosts().then(response=>{
//         this.setState({
//             posts:response.posts
//         });
//     });

//     fetchComments().then(response+>{
//         this.setState({
//             comments:response.comments
//         });
//     });
// }