import React from "react";
import Card1 from './user'

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num:0,
      repoData: [],
    };
  }

  componentDidMount(){
    fetch(`https://api.github.com/users/${this.props.userData.login}/repos`)
    .then((res) => res.json())
      .then((data) => this.setState({ repoData: data }))
      .then(() => this.setState({num : 1}))
      .catch((error) => {
        alert("Oops! Could not reach GitHub");
        console.log("Oops! We have an error", error);
      });
  }

  render(){
    if (this.state.num == 1){
    return(
      <>
      <div>
      {/* <Card/> */}
      <Card1 profile={this.props.userData} list={this.state.repoData}/>
      </div>
      </>
    )
  }
  else{
    return(<div></div>)
  }
}
}

export default UserDetails