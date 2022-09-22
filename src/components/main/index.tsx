import { useState, Fragment } from "react";

import { Logo } from "@components";
import { Loader } from "semantic-ui-react";

import {
    Wrapper,
    Container,
    TitleParagraph,
    InputContainer,
    InputFlexColumn,
    CheckerInputImage,
    CheckerButton,
    CheckerInput,
    ResultImage,
    ClaimButton,
    FlexColumn,
} from "./styled";
import { horses } from "@contract";
import { ethers } from "ethers";

export const blockInvalidChar = (e: any) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

export const Claimed = ({ claimed }: any) => {
    switch (claimed) {
        default:
        case -1:
            return null;
        case 0:
            return (
                <Loader size="big" active>
                    Loading
                </Loader>
            );
        case 1:
            return <ResultImage src="/claimed.png" />;
        case 2:
            return (
                <FlexColumn>
                    <ResultImage src="/available.png" />
                    <a
                        href={`https://horses.gunslingersnft.com`}
                        target="_blank"
                    >
                        <ClaimButton src="/claim.png" />
                    </a>
                </FlexColumn>
            );
    }
};

export const Main: React.FC = () => {
    const [token, setToken] = useState("");
    const [claimed, setClaimed] = useState(-1);

    const handleCheck = async () => {
        try {
            if (!token) return;

            setClaimed(0);

            const Contract = new ethers.Contract(
                horses.addressOrName,
                horses.contractInterface,
                new ethers.providers.InfuraProvider(
                    "mainnet",
                    "1aaaeb17d0c449e89d117bf0da764198",
                ),
            ).connect(ethers.constants.AddressZero);

            const result = await Contract.checkIfGunslingerUsed(token);
            setClaimed(result ? 1 : 2);
        } catch (_) {
            // noop
        }
    };

    return (
        <Fragment key="connected">
            <Logo />
            <Wrapper>
                <Container>
                    <TitleParagraph>
                        CHECK IF YOUR GUNSLINGER HAS CLAIMED THEIR HORSE
                    </TitleParagraph>
                    <InputContainer>
                        <InputFlexColumn>
                            <CheckerInputImage src="/number.png" alt="" />
                            <CheckerInput
                                type="text"
                                maxLength={4}
                                value={token}
                                onKeyDown={blockInvalidChar}
                                onBlur={(e: any) => {
                                    const n = Number(e.target.value);
                                    const nanny = Number.isNaN(n);
                                    if (nanny || n < 0) {
                                        return setToken("");
                                    }

                                    if (n > 7777) {
                                        return setToken("");
                                    }

                                    setToken(`${n}`);
                                }}
                                onChange={(e: any) => {
                                    const n = Number(e.target.value);
                                    const nanny = Number.isNaN(n);
                                    if (nanny || n < 0) {
                                        return setToken("");
                                    }

                                    setToken(`${n}`);
                                }}
                            />
                        </InputFlexColumn>
                        <InputFlexColumn>
                            <CheckerButton
                                $token={token}
                                src="/button.png"
                                alt=""
                                onClick={handleCheck}
                            />
                        </InputFlexColumn>
                    </InputContainer>
                    <Claimed {...{ claimed }} />
                </Container>
            </Wrapper>
        </Fragment>
    );
};
