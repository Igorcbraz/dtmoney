import styled from "styled-components";

export const MonthFilterStyles = styled.div`
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
`;