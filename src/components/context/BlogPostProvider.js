//import liraries
import React, {useReducer} from 'react';

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
          id: Math.floor(Math.random() * 99999),
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
    default:
      return BlogPost;
  }
};

export const BlogPostProvider = ({children}) => {
  const [BlogPost, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = (title, content) => {
    dispatch({type: 'Add_blogPost', payload: {title: title, content: content}});
  };
  const deleteBlogPost = id => {
    dispatch({type: 'delete_blogPost', payload: id});
  };
  const updateBlogPost = (id, title, content) => {
    dispatch({
      type: 'Update_blogPost',
      payload: {id: id, title: title, content: content},
    });
    console.log('id:' + id + '\ttitle:' + title + '\tcontent:' + content);
  };

  return (
    <BlogContext.Provider
      value={{data: BlogPost, addBlogPost, deleteBlogPost, updateBlogPost}}>
      {children}
    </BlogContext.Provider>
  );
};
