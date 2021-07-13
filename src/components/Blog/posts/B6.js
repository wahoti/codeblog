import React from 'react'
// import Code from '../Code'
import useModal from './comps/Modal/useModal'
import Modal from './comps/Modal/Modal'

/* eslint no-unused-vars: 0 */
const Post = () => {
  const { isVisible, toggleModal } = useModal()
  return (
    <>
      <p>this post will be about a modal system</p>
      <button onClick={toggleModal}>show modal</button>
      <Modal
        width="350px"
        height="350px"
        isVisible={isVisible}
        hideModal={toggleModal}>
        yooo
      </Modal>
    </>
  )
}

export default Post
