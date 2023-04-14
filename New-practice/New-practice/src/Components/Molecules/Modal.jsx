import React from 'react'
import './Modal.scss'



function Modal(props) {
    return (
        <div className='modal'>
            <span className='close' onClick={props.onClick}>x</span>
            <div className='modal-body'>
                <h2>Important Announcement</h2>
                <p>Lorem ipsum policiesDonec eu turpis velit. Phasellus scelerisque nisl a sollicitudin varius. Mauris id risus sagittis, tempus lorem at, pretium erat. Duis in congue diam. Integer ac congue nunc. Ut fermentum odio sit amet auctor interdum. Sed ullamcorper est eu sapien convallis luctus. Donec ut accumsan tellus, sit amet commodo augue. Mauris at sem magna. Quisque ut nibh pretium, sollicitudin felis quis, molestie ex. Nam in cursus augue. Etiam id mi condimentum, venenatis metus et, mollis sem. Sed consequat elementum risus, sed gravida nisi convallis et.


                    Cras orci libero, dignissim sit amet risus ut, euismod ultrices lectus. Proin vulputate neque leo, sed imperdiet ex bibendum eget. Fusce bibendum, mauris ut faucibus aliquam, metus quam lobortis nibh, vitae mollis diam felis vitae nunc. Donec malesuada nec augue quis aliquam. Suspendisse potenti. Pellentesque rutrum diam et tempor consequat. In elit dolor, congue et sodales quis, lacinia sed ex. Praesent et vulputate metus. Vestibulum tristique, augue et lacinia dictum, neque felis viverra mauris, rutrum lacinia dolor magna quis ante</p>
            </div>
        </div>
    )
}

export default Modal