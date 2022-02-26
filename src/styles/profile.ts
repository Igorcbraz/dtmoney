import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    margin-top: -8rem;

    @media (max-width: 950px) {
        margin-top: 3rem;
    }

    #error{
        width: 100%;
        height: 400px;

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
        flex-wrap: wrap;
        flex-direction: row;
        gap: 2rem;

        margin-bottom: 4rem;
    }

    img {
        height: 15rem;
    }
    .rv-xy-plot {
        margin: 0 auto;
    }

    #depositsWithdraws {
        width: 100%;

        span {
            display: flex;
            justify-content: space-around;
            align-items: center;

            h2{
                display: flex;
                align-items: center;
                gap: 1rem;
                flex-direction: row;
                margin: 1.2rem 0;
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
            #saidas::before {background-color: var(--red);}
            #total::before  {background-color: var(--blue);}
        }
    }

    #category{
        width: 60%;

        @media (max-width: 950px) {
            width: 100%;
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