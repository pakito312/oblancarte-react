import React from 'react'
import ReactDOM, { createPortal } from 'react-dom'

class Modal extends React.Component {

    constructor(props) {
        super(props);
        if (typeof window === 'object') {
            this.modal = document.getElementById("modal")
            // Create a div that we'll render the modal into. Because each
            // Modal component has its own element, we can render multiple
            // modal components into the modal container.
            this.el = document.createElement('div');
        }
    }

    componentDidMount() {
        // Append the element into the DOM on mount. We'll render
        // into the modal container element (see the HTML tab).
        document.getElementsByTagName("body")[0].style = "overflow: hidden;"
        modal.appendChild(this.el);
    }

    componentWillUnmount() {
        document.getElementsByTagName("body")[0].style = "overflow: auto;"
        // Remove the element from the DOM when we unmount
        modal.removeChild(this.el);
    }


    render() {
        // Use a portal to render the children into the element
        return this.modal ? ReactDOM.createPortal(
            // Any valid React child: JSX, strings, arrays, etc.
            <div className="fixed left-0 right-0 bottom-0 top-0 z-50">
                <div className="absolute left-0 right-0 bottom-0 top-0 bg-dark-ligth bg-opacity-90 " style={{ opacity: "0.9" }} />
                <div className="mx-auto top-10">
                    {this.props.children}
                </div>

            </div>,

            // A DOM element
            this.el,
        ) : null
    }



}

export default Modal