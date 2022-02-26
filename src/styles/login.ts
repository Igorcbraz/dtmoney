import styled from "styled-components";

export const FormLogin = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -10rem;

    @media (max-width: 950px) {
        margin-top: 3rem;
    }

    .formDiv{
        display: flex;
        flex-direction: column;

        background: var(--shape);
        padding: 1.5rem 2rem;
        margin: 0 1.5rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        h1 {
            margin: 0 auto;
            width: 80%;
            text-align: center;
            margin-bottom: 2rem;
            font-size: 2rem;

            span {
                color: var(--green);
            }
        }

        label {
            font-size: 1rem;
            margin-bottom: 0.7rem;
        }

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;

            a {
                font-size: 0.95rem;
                margin-bottom: 0.7rem;
                text-decoration: none;
                color: var(--green);
            }
        }

        input {
            background-color: var(--background);
            border: 1px solid var(--background);
            border-radius: 0.25rem;
            padding: 0.7rem;

            color: var(--text-title);
        }

        #email{
            margin-bottom: 1.5rem;
        }

        button {
            background-color: var(--green);
            border: 0;
            border-radius: 0.25rem;

            padding: 1rem;
            margin-top: 2rem;

            color: #FFF;
            font-size: 1rem;
            font-weight: bold;
        }
    }
`