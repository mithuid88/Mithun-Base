import React from 'react'
import Composition from '../Atoms/Composition.jsx'
import Header from './Header.jsx'
import Backtotop from '../Molecules/Backtotop.jsx'
import Footer from './Footer.jsx'
import HomeBanner from '../Molecules/HomeBanner.jsx'
import Links from '../Atoms/Links.jsx'
import Modal from '../Molecules/Modal.jsx'
import Overlay from '../Atoms/Overlay.jsx'
import { useState, useEffect } from 'react'
import Stickyheader from '../Atoms/Stickyheader.jsx'

const Testarea = () => {
    const [showComponent, setShowComponent] = useState(false);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (!localStorage.getItem('modal')) {
                setShowComponent(true);
            }

        }, 6000);

        return () => clearTimeout(timeoutId);
    }, []);

    const closeModal = () => {
        setShowComponent(false);
        localStorage.setItem("modal", true);
    }
    return (
        <>
            <Composition class="cs">
                <Header />
                <Stickyheader>
                    <Links />
                    <Links />
                </Stickyheader>

                <HomeBanner text="" href="" class="maroon" />
                <HomeBanner text="" href="" class="lime-green" />
                <HomeBanner text="" href="" class="aqua" />
                <HomeBanner text="" href="" class="red" />
                <HomeBanner text="" href="" class="orange" />
                <HomeBanner text="" href="" class="yellow" />
                <HomeBanner text="" href="" class="blue" />

                <Backtotop />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a maximus leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer scelerisque faucibus sapien vitae pellentesque. Morbi maximus metus id lorem porta, vitae consectetur sapien interdum. Curabitur sit amet ex vel urna bibendum scelerisque. Donec hendrerit luctus neque vel elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sit amet aliquam elit. Morbi volutpat suscipit arcu, eget aliquam tortor blandit eget. Vivamus eget ornare justo.

                    Suspendisse faucibus purus sit amet nisl varius congue. Suspendisse faucibus semper bibendum. Aenean lobortis justo tellus, at varius ante vestibulum sed. Pellentesque a malesuada sapien, a condimentum velit. Aliquam malesuada vitae arcu in auctor. Sed malesuada urna lorem, sit amet molestie diam convallis fringilla. Nunc malesuada magna mauris, sed rutrum nulla vulputate vel. Aenean accumsan felis nibh, vel ultricies ipsum viverra id. Aenean luctus quis tortor at faucibus. Aenean a turpis consectetur, congue ipsum nec, maximus diam. Nullam dictum consectetur turpis, vitae porttitor augue tempor non. Nullam a massa vel dolor dignissim facilisis quis non dui.

                    Fusce sollicitudin, eros ac facilisis consequat, enim ipsum sagittis magna, ut dapibus ligula mauris id diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus elit vel erat scelerisque, porta gravida urna luctus. Etiam consectetur, odio sit amet euismod tempus, odio eros convallis enim, a imperdiet lacus tellus eget elit. In convallis varius egestas. Ut ultricies gravida fringilla. Pellentesque convallis lorem id elit elementum porta. Nulla vestibulum cursus massa, in mollis elit fringilla eu. Nullam faucibus nisl at urna interdum cursus. In ornare, lorem varius facilisis facilisis, arcu purus vulputate orci, in sodales tellus risus vel sem. Curabitur fermentum hendrerit leo vel feugiat. Duis tempus at nibh sed semper.

                    In quis sapien mi. Suspendisse non neque ac nisl ornare egestas. Etiam dictum enim libero, eu interdum justo vehicula a. Aliquam vulputate fermentum metus, nec scelerisque mauris sagittis ac. Donec ipsum orci, aliquet vitae posuere vitae, sollicitudin et sem. Pellentesque aliquet urna erat, ac venenatis arcu aliquam vel. Sed a vestibulum orci. Praesent dignissim sem at sapien posuere, vitae mollis mauris facilisis. Fusce venenatis facilisis eros. Vivamus sollicitudin porttitor turpis, ac interdum nibh congue in. Mauris non orci a nisl tristique interdum. Donec maximus justo non mauris tempus, eget aliquet eros aliquet. In at mi sit amet arcu porttitor efficitur non in urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Fusce sollicitudin, eros ac facilisis consequat, enim ipsum sagittis magna, ut dapibus ligula mauris id diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus elit vel erat scelerisque, porta gravida urna luctus. Etiam consectetur, odio sit amet euismod tempus, odio eros convallis enim, a imperdiet lacus tellus eget elit. In convallis varius egestas. Ut ultricies gravida fringilla. Pellentesque convallis lorem id elit elementum porta. Nulla vestibulum cursus massa, in mollis elit fringilla eu. Nullam faucibus nisl at urna interdum cursus. In ornare, lorem varius facilisis facilisis, arcu purus vulputate orci, in sodales tellus risus vel sem. Curabitur fermentum hendrerit leo vel feugiat. Duis tempus at nibh sed semper.

                    In quis sapien mi. Suspendisse non neque ac nisl ornare egestas. Etiam dictum enim libero, eu interdum justo vehicula a. Aliquam vulputate fermentum metus, nec scelerisque mauris sagittis ac. Donec ipsum orci, aliquet vitae posuere vitae, sollicitudin et sem. Pellentesque aliquet urna erat, ac venenatis arcu aliquam vel. Sed a vestibulum orci. Praesent dignissim sem at sapien posuere, vitae mollis mauris facilisis. Fusce venenatis facilisis eros. Vivamus sollicitudin porttitor turpis, ac interdum nibh congue in. Mauris non orci a nisl tristique interdum. Donec maximus justo non mauris tempus, eget aliquet eros aliquet. In at mi sit amet arcu porttitor efficitur non in urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                    Phasellus tempus sed justo a efficitur. Donec tempor magna in mauris pellentesque rutrum. Etiam ac nibh ut erat dapibus cursus. Donec ac ullamcorper neque. Integer fringilla libero eget consequat iaculis. Nam at nisi elementum lorem ultrices varius ac varius nulla. In laoreet, tellus sed tristique sagittis, augue mi faucibus est, eget pulvinar sem enim vitae est. Sed non tempor ex, sed efficitur sem. Mauris in arcu eros. Duis mattis euismod nisi, sed venenatis felis rutrum vitae. Pellentesque eu arcu egestas, porta ipsum nec, convallis neque. Proin eros diam, commodo non sodales nec, ullamcorper non lectus. Sed blandit sed enim non elementum. Duis malesuada massa neque, ac ullamcorper est posuere a. Curabitur faucibus leo nec ex blandit, sed maximus turpis tincidunt. Praesent auctor ultrices dolor maximus</p>

                {showComponent && (
                    <>
                        <Modal onClick={closeModal} />
                        <Overlay />
                    </>
                )}
                <Footer />
            </Composition>
        </>

    )

}


export default Testarea