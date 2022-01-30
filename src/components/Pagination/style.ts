import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0.5rem 0;

    button {
        font-size: 1rem;
        color: var(--text-body);
        background: transparent;
        border: 2px solid var(--text-body);
        padding: 0 1rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: 0.2s;

        &:hover {
            color: var(--blue);
            border-color: var(--blue);
        }   
    }

    .active{
        color: var(--blue);
        border-color: var(--blue);
    }
`