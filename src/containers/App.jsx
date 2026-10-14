import React ,{ Component } from "react";
import CardList from "../components/CardList";
//import { friends } from "./friends"; ==>this line isn't used anymore, since the data now comes from the API
import SearchBox from "../components/searchBox";
import './App.css'
import Scroll from "../components/Scroll";




class App extends Component {
constructor() {
    super()
    this.state = {
    // BEFORE: friends: friends,  -> the list was filled right away from the local file (friends.jsx)
    // NOW:    friends: [],       -> the list starts EMPTY on purpose.
    // WHY: in real apps the data usually comes from outside (an API / server), and that takes time.
    //      So the component starts with an empty array, renders once with no cards,
    //      then the data is loaded later (in componentDidMount) and saved with this.setState({ friends: ... }).
    //      setState makes React call render() again, and the cards appear.
    // NOTE: we use [] and not null/undefined because render() calls .filter() on it,
    //       and .filter() only works on arrays (an empty array just gives no cards, no error).
    friends:[],
    Searchfield:''
    }
    
}


componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({friends: users}))
}


onSearchChange = (event) => {
    this.setState({Searchfield: event.target.value})
}


render() {
    //const { friends , Searchfield} = this.state; ==> by using this line of code we can delete 'this.state' from anywhere is is written to make the code more clear
    const filteredFriends = this.state.friends.filter(friend => {
        return friend.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
    })
    if(this.state.friends.length === 0) {  // we can rewrite this line as < if(!this.state.friends.length) >
        return <h1>Loading</h1>
    } else {
           return (
        <div className="tc">
            <h1 className="f1">MyFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList friends={filteredFriends}/>
            </Scroll>
            
        </div>
    )
    }
    
}
}


export default App ;

// some explainations about this lesson

// const App = () => {
//     return (
//         <div className="tc">
//             <h1>MyFriends</h1>
//             <SearchBox />
//             <CardList friends={friends}/>
//         </div>
        
//     )
// } I have changed these lines of code by using <state> as showon above 
