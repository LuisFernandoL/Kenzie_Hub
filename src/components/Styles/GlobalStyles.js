import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	:root {
		:root {
	--color-color-primary: #ff577f;
	--color-color-primary-50: #ff427f;
	--color-color-primary-disable: #59323f;
	--color-grey-4: #121214;
	--color-grey-3: #212529;
	--color-grey-2: #343b41;
	--color-grey-1: #868e96;
	--color-grey-0: #f8f9fa;
	--color-sucess: #3fe864;
	--color-negative: #e83f5b;
    }
		font-size: 62.5%;
	}

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}	

	body{
		background-attachment: fixed;
		-webkit-font-smoothing: antialiased;
		overflow: none;
        background: #000000;
	}
	
	body{
		width: 100vw;
		height: 100vh;
	}

	body, input, button, textarea{
		font-family: 'Inter', sans-serif;
		font-size: 1.6rem;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: 500;
	} 

	button{
        cursor: pointer;
        background: transparent;
        border: none;
    }

    ul, ol, li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    input{
        border: 0;
        background: transparent;
        color: #F8F9FA;
    }
		
		
`;
