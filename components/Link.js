import React from 'react'
import {Link as NextLink} from 'next/link'


const Link = props => {

    const render = () => {

        if(props.href.toLowerCase().startsWith("http")){
            return <a href="" />
        }else{
            return <a href="" />
        }
    }

    return render()
}
export default Link