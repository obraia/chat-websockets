import React, { useContext } from 'react';

import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade, lighten } from 'polished';

import { Container, Spacer } from './styles';

function Header({ toggleTheme }) {

    function newTab(url) {
        window.open(url, '_blank');
    }

    const { colors, title } = useContext(ThemeContext);

    return (
        <>
            <Container>

                <Switch
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={35}
                    handleDiameter={18}
                    offColor={shade(0.15, colors.primary)}
                    onColor={shade(0.15, colors.primary)}
                    onHandleColor={lighten(0.1, colors.primary)}
                    offHandleColor={lighten(0.1, colors.primary)}
                />

            </Container>

            <Spacer />
        </>

    );

}

export default Header;