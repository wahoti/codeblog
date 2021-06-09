import React from 'react'
import Code from '../Code'
import Collapsable from '../../Collapsable/Collapsable'

/* eslint no-unused-vars: 0 */

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis elit sit amet tellus mattis ultricies quis eget dui. Etiam eu suscipit nibh. Mauris lobortis vulputate ex, sed lobortis tortor tempor ut. Donec dignissim dolor in pharetra blandit. Aliquam eget lacus sollicitudin tellus finibus dignissim nec quis eros. Maecenas quis sapien purus. In ut sagittis mi. Integer elementum, turpis sit amet euismod semper, mauris dui gravida lacus, id molestie erat sem in justo. Mauris vulputate mollis porta. Suspendisse vestibulum dui id velit tempus, at viverra arcu tincidunt. Vestibulum pharetra purus libero, sit amet finibus quam fringilla nec. Pellentesque quis erat eget lectus accumsan pretium vel quis enim. Nam ultrices velit eu purus tincidunt bibendum. Mauris lobortis convallis nibh, ut condimentum ipsum luctus a.'

const Post = () => {
  return (
    <>
      <p>
        In this post will show a solution to max-height animations through a
        collapsable component.
      </p>
      <Collapsable title="click me!" content={lorem} />
    </>
  )
}

export default Post
