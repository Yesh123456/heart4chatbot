import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    chat: {
        border: '1px solid grey', 
        boxShadow: 'rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px', 
    }
});

function Chatbot() {
    const classes = useStyles();
    const [height_, setHeight_] = useState("650");
    const [width_, setWidth_] = useState("550");

    function vhToPixels_Height (vh) {
        return Math.round(window.screen.height / (100 / vh));
    }
    function vhToPixels_Width (vh) {
        return Math.round(window.screen.width / (100 / vh));
    }

    useEffect(() => {
        if( window.screen.width <= 600 ){
            setHeight_( vhToPixels_Height(87) );
            setWidth_( vhToPixels_Width(95) );
        }
    }, [])

    return (
        <>
            <iframe
                title="Doctor Chatbot"
                allow="microphone;"
                autoComplete="off"
                className={classes.chat}
                height={height_}
                width={width_}
                src="https://console.dialogflow.com/api-client/demo/embedded/d3ef5ff0-5816-4368-93e6-6d12edfa6c45">            
            </iframe>
        </>
    )
}

export default Chatbot
