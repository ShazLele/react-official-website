/**
 * Created by shaz on 2017/6/12.
 */

const element= <h1>Hello,react!</h1>;
ReactDOM.render(
    element,
    document.querySelector("#root")
);


function tick(){
    const element=(
        <div>
            <h1>Hello,world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.querySelector("#tick")
    )
}
// tick();
setInterval(tick,1000);
