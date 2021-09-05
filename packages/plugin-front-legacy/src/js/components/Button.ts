import styled from "styled-components";
import { chain } from "lodash";

const Button = styled.div<{ warning?: boolean; error?: boolean }>`
    display: inline-flex;
    height: 50px;
    padding: 0 60px;
    margin: 10px 0;
    align-items: center;
    border-width: 2px;
    border-style: solid;
    border-color: ${({ warning, error }): string =>
        chain([warning && "yellow;", error && "red;", "#00cda5;"])
            .compact()
            .first()
            .value()};
    background: #29304c;
    color: #00cda5;
    font-size: 18px;
    cursor: pointer;
    border-radius: 25px;
    user-select: none;
    white-space: nowrap;
    &:hover {
        background: #151827;
    }
    &:active {
        background: #133d5b;
    }
    svg {
        margin-right: 10px;
        color: ${({ warning, error }): string =>
            chain([warning && "yellow;", error && "red;", "#00cda5;"])
                .compact()
                .first()
                .value()};
    }
`;

export default Button;
