import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 5;
    width: 100%;
    height: 50px;
    padding: 0 20px 0 10px;
    justify-content: flex-end;

    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textPrimary};

    @media (max-width: 768px) {
        padding: 0 10px;
    }
`;

export const Spacer = styled.div`
    height: 50px;
    @media print {
        display: none;
    }
`;
