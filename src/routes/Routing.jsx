import React, { Suspense } from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import LoadingFallback from "./LoadingFallback.jsx"

import { RouteList } from "./RouteList.js"

function Routing() {
    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingFallback />}>
                <Routes>
                    {
                        RouteList.map((route, index) => {
                            const Component = route.component

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    element={<Component />}
                                />
                            )
                        })
                    }
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Routing
