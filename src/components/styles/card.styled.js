import styled from 'styled-components'

export const CardStyle = styled.div`
display:flex;
flex-direction:${({ layout }) => layout};
align - items: center;
border - radius: 25px;
background - color: #fff;
margin: 75px 0;
padding: 10px 2px;

@media (max-width:${({ theme }) => theme.mobile}){
    flex-direction:column;
    text-align:center;
}

img{
    width:80%;
}


`