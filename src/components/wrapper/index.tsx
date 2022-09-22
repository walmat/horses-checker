import React from "react";
import { Container, Inner } from "./styled";

export const Wrapper: React.FC = ({ children }) => {
    return (
        <Container>
            <Inner>{children}</Inner>
        </Container>
    );
};
