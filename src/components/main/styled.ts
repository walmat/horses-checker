import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 100%;
    color: #000;
`;

export const TitleParagraph = styled.p`
    max-width: 48rem;
    padding: 0 2rem;
    margin: 0;
    font-size: 1.25rem !important;
    display: flex;
    font-weight: 300;
    justify-content: center;
    max-width: 100vw;
    margin: 0;

    @media (min-width: 600px) {
        padding: 0 2rem;
        max-width: 48rem;
        margin: 0 5rem;
        font-size: 1.55rem !important;
    }

    @media (min-width: 1085px) {
        padding: 0;
        max-width: 48rem;
        margin: 0 5rem;
        font-size: 1.75rem !important;
    }
`;

export const Container = styled.div`
    text-align: center;
    max-width: 48rem;
    margin: 2rem auto;

    h1 {
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 1.2rem;
        padding-bottom: 0.75rem;
    }
    p {
        font-size: 1rem;
        font-weight: 300;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`;

export const FlexColumn = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const InputFlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const CheckerInputImage = styled.img`
    width: 30vw;
    max-width: 248px;
    position: relative;
    margin: 0 0.5rem 0 0;
`;

export const CheckerInput = styled.input`
    background: transparent;
    border: none;
    outline: none;
    position: absolute;
    font-size: 1.25rem;
    text-align: center;
    width: 30vw;
    max-width: 248px;
    margin: 0 0 0 0.5rem;

    @media (min-width: 480px) {
        margin: 0 0 0 1rem;
        font-size: 1.5rem;
    }

    @media (min-width: 600px) {
        margin: 0 0 0 1.5rem;
        font-size: 2.475rem;
    }

    @media (min-width: 768px) {
        margin: 0 0 0 2rem;
        font-size: 3.333rem;
    }

    @media (min-width: 900px) {
        margin: 0 0 0 2rem;
        font-size: 3.5rem;
    }
`;

export const CheckerButton = styled.img<{ $token: string }>`
    width: 20vw;
    max-width: 140px;
    margin: 0 0 0 0.5rem;
    cursor: ${({ $token }) => ($token !== "" ? "pointer" : "default")};
    opacity: ${({ $token }) => ($token !== "" ? "1" : "0.6")};
`;

export const ResultImage = styled.img`
    width: 30vw;
    max-width: 248px;
    position: relative;
`;

export const ClaimButton = styled.img`
    width: 100%;
    max-width: 96px;
    margin: 1rem 0;
    cursor: pointer;

    @media (min-width: 600px) {
        margin: 2rem 0;
        max-width: 140px;
    }
`;
