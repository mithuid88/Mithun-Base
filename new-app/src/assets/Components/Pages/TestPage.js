import React from 'react'
import Links from '../UI/Atoms/Links'
import Paragraph from '../UI/Atoms/Paragraph'
import Footer from '../UI/Organisms/Footer'
import "./Base.scss"

function TestPage() {
  return (
    <>
  <Paragraph class = "myclass" text = "Created new Para"/>
  <Links class = "myClass" text = "Created new Link" />
  <Footer />
  </>
  )
}

export default TestPage;