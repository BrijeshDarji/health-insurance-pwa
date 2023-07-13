/**
 *  @description This component is a fallback component,
 *  which will be appear when code throws error, which was causing break the page.
 *  But instead of broken page it will display this component.
 * 
 *  @tutorial https://legacy.reactjs.org/docs/error-boundaries.html
 */

import React, { Component } from "react"

import { INFO_MESSAGES } from "../assets/constants/Messages"

import FallbackIcon from "../assets/images/fallback.png"

const style = {
    mainWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        fontFamily: "sf-pro-display-regular"
    },
    image: {
        maxWidth: "400px",
        width: "80%",
        maxHeight: "297px"
    },
    mainText: {
        display: "flex",
        alienItems: "center",
        fontSize: "19px",
        margin: "35px auto 15px auto",
        textAlign: "center",
    },
    subText: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "19px",
        fontSize: "14px",
        textAlign: "center",
        maxWidth: "80%"
    }
}

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div style={style.mainWrapper}>
                    <img src={FallbackIcon} alt="" style={style.image} />

                    <div style={style.mainText}>
                        <span> {INFO_MESSAGES.FALLBACK.MAIN_TEXT} </span>
                    </div>

                    <div style={style.subText}>
                        <span> {INFO_MESSAGES.FALLBACK.SUB_TEXT_1} </span>
                        <span> {INFO_MESSAGES.FALLBACK.SUB_TEXT_2} </span>
                    </div>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
