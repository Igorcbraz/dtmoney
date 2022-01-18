import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table{
        width: 100%;
        border-spacing: 0 0.5rem;
        overflow-x: auto;
        
        @media only screen and (max-width: 520px) {
            &{
                display:block;
            }
        }

        th{
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td{   
            padding: 1rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child{
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }

            &#actions button:first-child{
                margin-right: 1rem;
            }

            button {
                background-color: transparent;
                border: 0;

                transition: 0.2s filter;

                &:hover{
                    filter: brightness(0.7);
                }
            }
        }   
    }

`