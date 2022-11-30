import React from 'react'
import './SideBar.css';
import ContainerAnunciosTitles from '../ContainerAnunciosTitles/ContainerAnunciosTitles'
import '../ContainerOptionsTitles/ContainerOptionsTitles.css';
import ContainerBlog from '../ContainerBlog/ContainerBlog';

let styles = {
    gridTemplateRows: 'auto',
    display: 'flex',
    flexDirection: 'column'
}

function SideBar() {
  return (
    <div class="sidebar">
      <ContainerAnunciosTitles  sytle={styles} subtitle="Recommendations" />
      <ContainerBlog />
    </div>
  )
}

export default SideBar