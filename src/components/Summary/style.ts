import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: -10rem;

    @media (max-width: 950px) {
        margin-top: 0;
    }
`;

interface CardProps {
    haveWithdraws?: boolean
}

export const Card = styled.div<CardProps>`
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    &:last-child{
        background: ${props => props.haveWithdraws ? 'var(--red)' : 'var(--green)'};
        color: #FFF;
    }

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }

    & .deposits{
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }
`