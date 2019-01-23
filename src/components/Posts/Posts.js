import React, { Component } from 'react'
import axios from 'axios'

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount(){
        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => console.log(error))
        }, 4000);
        
    }


  render() {
    const { posts } = this.state
    
    if(posts.length === 0){
        return (
            <div>
                <div className="loader"></div>
            </div>
        )
    }else{
        return (
            <div className="container">
              
                <ul className="list-group">
                    {posts.map(post =>   (<li key={post.id} className="list-group bg-primary mb-2 text-white p-4"><h4>{post.title}</h4><br /><p>{post.body}</p></li>))}
                </ul>
               
            </div>
        )
    }

  }
}
export default Posts