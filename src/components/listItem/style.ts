import styled from "styled-components";

type ContainerProps = {
    done: boolean
}

export const ButtonDelete = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin-left:auto; 
  background:transparent;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Container = styled.div(
    ({done}:ContainerProps) => (
    `
        display:flex;
        align-items:center;
        margin-top:10px;
        background-color: #20212C;
        padding:10px;
        border-radius:10px;
        margin-bottom:10px;

        input {
            width:25px;
            height:25px;
            margin-right:10px;
        }

        label{
            color:#ccc;
            text-decoration:${done ? 'line-through' : 'initial'
        };
    `
    )
);