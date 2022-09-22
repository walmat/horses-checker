import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 2rem 0;
`;

export const LogoImage = styled.img`
    display: flex;
    max-width: 75%;
    max-height: 128px;
    margin: 0 auto;
    padding: 2rem 0 0 0;

    @media (min-width: 600px) {
        max-width: 75%;
    }
`;

export const Container = styled.div`
    max-width: 71rem;
    padding: 2rem;
`;
