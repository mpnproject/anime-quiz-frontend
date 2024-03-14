import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { NAVBAR_ITEMS } from '../../constants/navbar'

import {
  Container,
  InnerNavigation,
  ExtendNavigation,
  LeftWrapper,
  RightWrapper,
  WrapperLinks,
  Logo,
  OpenLinksButton,
} from "./styles"


export const Navbar = () => {
  const [extended, setExtended] = useState(false)
  const [ isActive, setIsActive ] = useState(false)

  return (

    <Container extendednavigation={extended}>
      <InnerNavigation>
        <LeftWrapper>
          <Logo src={'https://m.media-amazon.com/images/I/81yg-dRxBVL._UF1000,1000_QL80_.jpg'} />
        </LeftWrapper>
        <RightWrapper>
        <WrapperLinks>
        { NAVBAR_ITEMS?.map((item, index) => {
              return (
                <NavLink to={'#'}
                  key={index}
                  style={({ isActive}) => {
                    return {
                      fontWeight: isActive ? "bold" : "normal",
                      borderBottom: isActive ? 'solid 1px' : 'none'
                    }
                  }}
                  >
                  {item.name}
                </NavLink>
              )
            })}
          </WrapperLinks>
          <OpenLinksButton onClick={() => setExtended((curr) => !curr)}>
            {extended ? <> &#10005;</> : <> &#8801;</>}
          </OpenLinksButton>
        </RightWrapper>
      </InnerNavigation>
      {
        extended && (
          <ExtendNavigation>
            { NAVBAR_ITEMS?.map((item, index) => {
              return (
                <NavLink to={item.route}
                key={index}
                style={({ isActive}) => {
                  return {
                    fontWeight: isActive ? "bold" : "normal",
                    borderBottom: isActive ? 'solid 1px' : 'none'
                  }
                }}
                >
                  {item.name}
                </NavLink>
              )
            })}
          </ExtendNavigation>
        )
      }
    </Container>
  );
}