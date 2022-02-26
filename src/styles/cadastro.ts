import styled from "styled-components";

export const FormLogin = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -10rem;

    @media (max-width: 950px) {
        margin-top: 3rem;
    }


    div:first-child{
        display: flex;
        flex-direction: column;

        background: var(--shape);
        padding: 1.5rem 2rem;
        margin: 0 1.5rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        div {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1rem;

            label {
                display: flex;
                flex-direction: column;
            }

            input{width: 100%;}
        }

        h1 {
            margin: 0 auto;
            width: 70%;
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

        input {
            background-color: var(--background);
            border: 1px solid var(--background);
            border-radius: 0.25rem;
            padding: 0.7rem;

            color: var(--text-title);
        }

        #email, #name{
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