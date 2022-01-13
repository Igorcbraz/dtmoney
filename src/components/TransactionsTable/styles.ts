import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
       

        width: 100%;
        margin-bottom: 1rem;
        overflow-x: auto;

        button {
            background-color: transparent;
            
            border: 0;
            border-bottom: 3px solid var(--background);            

            padding: 1rem;
            color: var(--text-body);

            transition: 0.2s;
            
            &:hover{
                border-color:  var(--blue);
                color: var(--blue);
            }
            
            &.clicked{
                border-color:  var(--blue);
                color: var(--blue);
            }
        }
    }

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
        }   
    }

`