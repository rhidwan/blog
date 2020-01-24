import React, { Component } from 'react';
import axios from "axios";
import PostItem from "./PostItem";
import Spinner from './Spinner';

class Posts extends Component {
  state = {
        posts : [],
        isLoaded : false
  }

  componentDidMount(){
    axios.get("https://rhidwan.000webhostapp.com/wp-json/wp/v2/posts")
    .then( res => this.setState({
       posts : res.data,
       isLoaded: true
    }))
    .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    const {posts, isLoaded} = this.state;
    if (isLoaded) {
      return (
        <div>
          {posts.map(post => (
             <PostItem key={post.id} post={post} /> 
          ))}
        </div>
      );
    }

    return (
      <Spinner />            
    );
  }
}

export default Posts;
