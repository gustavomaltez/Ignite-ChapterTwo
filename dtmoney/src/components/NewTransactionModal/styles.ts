import styled from "styled-components";

export const Container = styled.form`
    h2{
        color: var(--text-title-color);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        padding: 1.5rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background-color: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--text-body);
        }

        & + input{
            margin-top: 1rem;
        }
    }

    button[type="submit"]{
        width: 100%;
        padding: 1.5rem;
        background: var(--green);
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-weight: 600;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 200ms;

        &:hover{
            filter: brightness(0.9)
        }
    }
`;