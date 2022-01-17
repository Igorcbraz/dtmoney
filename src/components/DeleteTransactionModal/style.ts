import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.form`
    img {
        display: block;
        margin: 0 auto;

        width: 3rem;
        margin-bottom: 1rem;
    }
    h2{
        text-align: center;
        color: var(--red);
        font-size: 1.7rem;
        margin-bottom: 0.5rem;
    }
    p {
        text-align: center;
        color: ${darken(0.25, `#F0F2F5`)};
        font-size: 1rem;
        margin-bottom: 2rem;
    }

    div {
        display: flex;
        justify-content: space-around;
        gap: 1rem;

        button{
            width: 100%;
            padding: 0 1.5rem;
            height: 4rem;
            background: ${darken(0.1, `#F0F2F5`)};
            color: #FFF;
            border-radius: 0.25rem;
            border: 0;
            font-size: 1rem;
            margin-top: 1.5rem;
            font-weight: 600;

            transition: filter 0.2s;

            &:hover{
                filter: brightness(0.9);
            }
        }

        button[type="submit"]{
            background: var(--red);
        }
    }
`;