import styled from 'styled-components'

export const Button = styled.button`
width:250px;
border:none;
border-radius:50px;
cursor:pointer;
font-size:16px;
font-weight:700;
padding:15px 60px;
background-color:${({ bg }) => bg || 'white'};

 &: hover{
    opacity: 0.98;
    transform: scale(0.98);
}

@media (max-width:${({ theme }) => theme.mobile}){
    width:100px;
    border-radius:25px;
    padding:8px 10px;
}


`
