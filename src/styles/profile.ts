import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    margin-top: -8rem;

    #error{
        width: 500px;
        height: 300px;

        display: flex;
        align-items: center;
        justify-content: center;

        p{
            text-align: center;
        }
    }

    h1, h2{
        text-align: center;
    }

    main {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;

        margin-bottom: 4rem;
    }

    img {
        height: 15rem;
    }

    #depositsWithdraws {
        span {
            display: flex;
            justify-content: space-around;
            align-items: center;

            h2{
                display: flex;
                align-items: center;
                gap: 1rem;
                flex-direction: row;
            }
            h2::before {
                content: '';
                display: block;
                width: 2rem;
                height: 0.5rem;
                border-radius: 0.25rem;
                margin: 0;
                background-color: var(--green);
            }
            h2:last-child::before {background-color: var(--red);}
        }
    }

    & .shape{
        background: var(--shape);
        padding: 1.5rem 2rem;
        margin: 0 1.5rem;
        border-radius: 0.25rem;
        color: var(--text-title);
    }
`