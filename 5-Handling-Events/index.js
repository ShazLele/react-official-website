/**
 * Created by shaz on 2017/6/13.
 */

// ****原生
// <a href="#" onclick="console.log('The link was clicked');return false"></a>

// ****react
function ActionLink(){
    function handleClick(e){
        e.preventDefault();
        console.log('The link was clicked');
    }

    return(
        <a href="#" onClick={handleClick}> Click me </a>
    )
};


class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isToggleOn:true
        };

        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(preState=>({
            isToggleOn:!preState.isToggleOn
        }));
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn?'ON':'OFF'}
            </button>
        );
    }
}
ReactDOM.render(
    <Toggle />,
    document.querySelector("#Toggle")
)