import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendar} from "@fortawesome/free-solid-svg-icons";

class PostItem extends Component {
  render() {
    const { title, excerpt, id , date} = this.props.post ;
   
    return (
      <Card className="mb-3 border-left-2 border-top-0 border-right-0 border-bottom-0">
        <Card.Body>
          <Card.Title className=""><h3><Link to={`post/${id}`}>{title.rendered}</Link></h3></Card.Title>
          <Card.Text className="text-muted"><FontAwesomeIcon icon={faCalendar} />  {new Intl.DateTimeFormat('en-GB', { 
                                    month: 'long', 
                                    day: '2-digit',
                                    year: 'numeric', 
                                }).format(new Date(date))}
          </Card.Text>
          <Card.Text dangerouslySetInnerHTML={{__html:excerpt.rendered}} />
          <Link to={`post/${id}`}><Button variant="outline-dark">Continue Reading</Button></Link>
        </Card.Body>
      </Card>
    );
  }
}

export default PostItem;
