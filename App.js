import React from 'react';
import {BlogPostProvider} from './src/components/context/BlogPostProvider';
import MainNavigator from './NavigationContainer';

export default () => {
  return (
    <BlogPostProvider>
      <MainNavigator />
    </BlogPostProvider>
  );
};
