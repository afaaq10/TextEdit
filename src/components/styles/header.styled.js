import styled from 'styled-components'

export const StyledHeader = styled.header`



 background-color:#ebfbff;
 padding:20px 0;
 `
export const Nav = styled.nav`
 
 display:flex;
 align-items:center;
 justify-content:space-between;
 margin-bottom:40px;
 ${'' /* box-shadow:0 0 10px rgba(0,0,0,0.15); */}
background-color:#ebfbff;
@media (max-width:${({ theme }) => theme.mobile}){
    flex-direction:column;
}


 `
export const Logo = styled.img`
width:120px;
height:90px;
@media (max-width:${({ theme }) => theme.mobile}){
    margin-bottom:40px;


`

export const Image = styled.img`
width:370px;
height:250px;
@media (max-width:${({ theme }) => theme.mobile}){
    margin:60px 0 30px;

}

`