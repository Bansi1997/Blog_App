//import liraries
import React, {useReducer} from 'react';
import jsonserver from '../../api/jsonserver';

export const BlogContext = React.createContext();

// function Update_BlogPostData(item, action) {
//   if (item.id === action.payload.id) {
//     if (action.payload.title === '' && action.payload.content === '') {
//       return item;
//     } else if (action.payload.title === '') {
//       return (item.content = action.payload.content);
//     } else if (action.payload.content === '') {
//       return (item.title = action.payload.title);
//     } else {
//       return (
//         (item.id = action.payload.id),
//         (item.title = action.payload.title),
//         (item.content = action.payload.content)
//       );
//     }
//   } else {
//     return item;
//   }
// }

const blogReducer = (BlogPost, action) => {
  switch (action.type) {
    
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
      
  };
  const deleteBlogPost = id => {
    //delete perticular blogpost from jsonserver
    jsonserver.delete(`/blogPosts/${id}`)
    .then(resp => {
        console.log(resp.data)
    }).catch(error => {
        console.log(error);
    });
    getBlogPost();
  };
  const updateBlogPost = (id, title, content) => {

            jsonserver.put( `/blogPosts/${id}`, {
            title:title,
            content:content
          }).then(resp => {

            console.log(resp.data);
          }).catch(error => {

            console.log(error);
        });
  };

  return (
    <BlogContext.Provider
      value={{data: BlogPost, addBlogPost, deleteBlogPost, updateBlogPost,getBlogPost}}>
      {children}
    </BlogContext.Provider>
  );
};
