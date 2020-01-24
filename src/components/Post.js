import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Spinner from './Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


class Post extends Component {
    state = {
        post : [],
        isLoaded : false
  }

  componentDidMount(){
    axios.get(`https://rhidwan.000webhostapp.com/wp-json/wp/v2/posts/${this.props.match.params.id}`)
    .then( res => this.setState({
       post : res.data,
       isLoaded: true
    }))
    .catch(err => console.log(err))
  }
  
  render() {
    const {post, isLoaded} = this.state; 
    if (isLoaded){
        return (
            <Fragment>
                <Link to="/"><FontAwesomeIcon icon={faArrowLeft} />   Go Back</Link>
                <hr/>
                <h1>{post.title.rendered}</h1>
                <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
            </Fragment>
        )
    }
    return (
      <Spinner />
    );
  }
}

export default Post;
