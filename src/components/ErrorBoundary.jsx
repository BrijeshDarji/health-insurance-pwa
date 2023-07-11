import React, { Component } from "react"
import FallbackIcon from "../assets/images/fallback.png"

const style = {
    mainWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    },
    image: {
        width: "500px",
        maxHeight: "297px"
    },
    mainText: {
        display: "flex",
        alienItems: "center",
        fontSize: "30px",
        margin: "15px auto",
        color: "#252525"
    },
    subText: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "22px",
        lineHeight: "2rem",
        color: "#5e6367"
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
                        <span>Oops... Something went wrong.</span>
                    </div>

                    <div style={style.subText}>
                        <span> Please refresh the page & try again. </span>
                        <span> If you still face the same issue then, please contact to support team! </span>
                    </div>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
