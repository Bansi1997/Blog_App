//import liraries
import React, {useReducer} from 'react';
import jsonserver from '../../api/jsonserver';

export const BlogContext = React.createContext();

function Update_BlogPostData(item, action) {
  if (item.id === action.payload.id) {
    if (action.payload.title === '' && action.payload.content === '') {
      return item;
    } else if (action.payload.title === '') {
      return (item.content = action.payload.content);
    } else if (action.payload.content === '') {
      return (item.title = action.payload.title);
    } else {
      return (
        (item.id = action.payload.id),
        (item.title = action.payload.title),
        (item.content = action.payload.content)
      );
    }
  } else {
    return item;
  }
}

const blogReducer = (BlogPost, action) => {
  switch (action.type) {
    case 'Add_blogPost':
      return [
        ...BlogPost,
        {
          id: action.payload.id,
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'delete_blogPost':
      return BlogPost.filter(item => item.id !== action.payload);

    case 'Update_blogPost':
      return BlogPost.filter(item => {
        return Update_BlogPostData(item, action);
      });

    case 'Get_blogPost':
      return action.payload;
    default:
      return BlogPost;
  }
};

export const BlogPostProvider = ({children}) => {
  const [BlogPost, dispatch] = useReducer(blogReducer, []);

  const getBlogPost=async ()=>{
     const response= await jsonserver.get('/blogPosts').then((response)=>{dispatch({type:'Get_blogPost',payload:response.data});}).catch(error=>console.log(error));
     //dispatch({type:'Get_blogPost',payload:response.data});
    
  };
  const addBlogPost = (title, content) => {
    const id= Math.floor(Math.random() * 99999);
    //add BlogPost to jsonserver
      jsonserver.post('/blogPosts', {
          id:id,
          title:title,
          content:content
      }).then(resp => {
          console.log(resp.data);
      }).catch(error => {
          console.log(error);
      });
      //add to BlogPost Usereducer
        getBlogPost();
    //dispatch({type: 'Add_blogPost', payload: {id:id,title: title, content: content}});
  };
  const deleteBlogPost = id => {
    //delete perticular blogpost from jsonserver
    jsonserver.delete(`/blogPosts/${id}`)
    .then(resp => {
        console.log(resp.data)
    }).catch(error => {
        console.log(error);
    });
    //delete from usereducer
    getBlogPost();
    //dispatch({type: 'delete_blogPost', payload: id});
  };
  const updateBlogPost = (id, title, content) => {

    jsonserver.put( `/blogPost/${id}`, {
    title:title,
    content:content
  }).then(resp => {

    console.log(resp.data);
  }).catch(error => {

    console.log(error);
});

  getBlogPost();
    // dispatch({
    //   type: 'Update_blogPost',
    //   payload: {id: id, title: title, content: content},
    // });
    
  };

  return (
    <BlogContext.Provider
      value={{data: BlogPost, addBlogPost, deleteBlogPost, updateBlogPost,getBlogPost}}>
      {children}
    </BlogContext.Provider>
  );
};
