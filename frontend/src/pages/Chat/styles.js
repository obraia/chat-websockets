import styled from "styled-components";
import { lighten, shade } from "polished";

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: calc(100vh - 50px);
    width: 60%;
    margin: auto;
    padding: 15px;
    padding-bottom: 0;
    overflow-x: hidden;

    @media (max-width: 935px) {
        width: 75%;
    }

    @media (max-width: 560px) {
        width: 100%;
    }
`;

export const PageTitle = styled.h1`
    font-size: 32px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 15px;
  
  @media (max-width: 768px) {
        font-size: 24px;
  }

  @media (max-width: 560px) {
        font-size: 20px;
  }
`;

export const MessageContainer = styled.div`
    width: 100%;
    height: calc(100vh - 190px);
    margin-bottom: 15px;
    resize: none;
    border: none;
    border-radius: 5px;
    background: ${props => props.theme.colors.primary && lighten(0.15, props.theme.colors.primary)};
    padding: 10px;
    font-size: 16px;
    color: ${props => props.theme.colors.textBackground}; 
    outline: none;
    overflow-y: scroll;
`;

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    padding: 5px;
    padding-left: 15px;
    border-radius: 15px;
    font-size: 14px;
    margin-bottom: 5px;
    word-wrap: break-word;

    &.my{
        border-bottom-right-radius: 5px;
        max-width: 70%;
        margin-left: auto;
    }

    &.others {    
        border-top-left-radius: 5px;
        max-width: 70%;
        margin-right: auto;
    }
`;

export const MessageUser = styled.span`   
    font-weight: bold;
    margin-right: 5px;
`;

export const MessageText = styled.span`
   margin-right: 15px;
   margin-bottom: 5px;
`;

export const MessageDate = styled.span`
    padding: 3px;
    background: ${props => props.theme.colors.primary && lighten(0.15, props.theme.colors.primary)};
    border-radius: 10px;
    font-size: 9px;
    align-self: flex-end;
`;


export const InputGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;   
`;

export const InputText = styled.input`
    width: calc(100% - 100px);
    height: 40px;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: ${props => props.theme.colors.primary && lighten(0.15, props.theme.colors.primary)};
    text-indent: 10px;
    font-size: 16px;
    color: ${props => props.theme.colors.textBackground};
    outline: none;
`;

export const LabelInput = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 100px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: ${props => props.theme.colors.primary && lighten(0.2, props.theme.colors.primary)};
    color: ${props => props.theme.colors.textBackground};
    cursor: pointer;
`;

export const InputMessage = styled.input`
    width: calc(100% - 100px);
    height: 40px;
    border: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background: ${props => props.theme.colors.primary && lighten(0.15, props.theme.colors.primary)};
    text-indent: 20px;
    font-size: 16px;
    color: ${props => props.theme.colors.textBackground};
    outline: none;
`;

export const SendButtonInput = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 100px;
    border: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background: ${props => props.theme.colors.primary && lighten(0.2, props.theme.colors.primary)};
    color: ${props => props.theme.colors.textBackground};
    cursor: pointer;
    outline: none;

    &:hover{
        background: ${props => props.theme.colors.primary};
    }
`;
