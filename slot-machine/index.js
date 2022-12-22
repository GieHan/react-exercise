class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Slot Machines!</h1>
                <Machine />
                <br></br>
                <Machine />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
