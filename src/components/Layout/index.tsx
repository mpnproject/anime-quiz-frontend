import React, { ReactNode } from "react";

import { Footer } from "../Footer"
import { Navbar } from "../Navbar"

import { Container } from "./styles";

interface LayoutProps {
    children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
        <Navbar />
        <Container>
            {children}

        </Container>
        <Footer />
        </>
    )
}